import React, { useState, useEffect } from 'react';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Users,
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Share2,
  Printer,
  Download,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { SESSION_TYPES, generateSchedule } from '../data/cricketData';
import {
  SessionTypeId,
  DayAvailability,
  TimeSlot,
  PaymentPlan,
  ConfirmedBooking,
} from '../types';

interface BookingWizardProps {
  initialSessionId?: SessionTypeId;
  onBookingCompleted?: (booking: ConfirmedBooking) => void;
}

export function BookingWizard({
  initialSessionId = 'softball',
  onBookingCompleted,
}: BookingWizardProps) {
  // Step state: 1: Session, 2: Availability, 3: Plan, 4: Details, 5: Payment/Confirmation
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form states
  const [selectedSessionId, setSelectedSessionId] = useState<SessionTypeId>(initialSessionId);
  const [schedule, setSchedule] = useState<DayAvailability[]>([]);
  const [selectedDateStr, setSelectedDateStr] = useState<string>('');
  const [durationHours, setDurationHours] = useState<number>(1);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [planType, setPlanType] = useState<PaymentPlan>('advance');

  // Addons
  const [addonMachine, setAddonMachine] = useState<boolean>(false);
  const [addonKit, setAddonKit] = useState<boolean>(false);

  // Details
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [notes, setNotes] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);
  const [copiedRef, setCopiedRef] = useState<boolean>(false);

  // Initialize schedule on mount
  useEffect(() => {
    const days = generateSchedule();
    setSchedule(days);
    if (days.length > 0) {
      setSelectedDateStr(days[0].dateStr);
    }
  }, []);

  // Update session if initialSessionId changes
  useEffect(() => {
    if (initialSessionId) {
      setSelectedSessionId(initialSessionId);
    }
  }, [initialSessionId]);

  const selectedSession = SESSION_TYPES.find((s) => s.id === selectedSessionId) || SESSION_TYPES[0];
  const activeDay = schedule.find((d) => d.dateStr === selectedDateStr) || schedule[0];

  // Pricing calculations
  const baseRate = selectedSession.ratePerHour;
  const addonTotalPerHour = (addonMachine ? 1000 : 0) + (addonKit ? 500 : 0);
  const effectiveRatePerHour = baseRate + addonTotalPerHour;
  const sessionTotal = effectiveRatePerHour * durationHours;

  // Advance calculation (standard deposit e.g. 30% rounded or fixed)
  const dueNow = planType === 'full'
    ? sessionTotal
    : Math.min(sessionTotal, Math.max(1000, Math.round(sessionTotal * 0.35 / 100) * 100));
  const balanceLater = sessionTotal - dueNow;

  // Step 1 -> Step 2 validation
  const handleSessionContinue = () => {
    setCurrentStep(2);
  };

  // Step 2 -> Step 3 validation
  const handleSlotContinue = () => {
    if (!selectedSlot) {
      setValidationError('Please select an available start time slot to continue.');
      return;
    }
    setValidationError('');
    setCurrentStep(3);
  };

  // Step 3 -> Step 4 validation
  const handlePlanContinue = () => {
    setCurrentStep(4);
  };

  // Step 4 -> Step 5 Submit & Confirm
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setValidationError('Please enter your full name or team coordinator name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 9) {
      setValidationError('Please enter a valid mobile number (e.g. +94 7X XXX XXXX).');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setValidationError('');

    // Generate unique ACK reference code (e.g. ACK-HKD-8429)
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const bookingRef = `ACK-HKD-${randomCode}`;

    const newBooking: ConfirmedBooking = {
      id: `booking_${Date.now()}`,
      bookingRef,
      sessionType: selectedSessionId,
      dateStr: selectedDateStr,
      startTime: selectedSlot ? selectedSlot.startTime : '10:30',
      endTime: selectedSlot ? selectedSlot.endTime : '11:30',
      durationHours,
      ratePerHour: effectiveRatePerHour,
      planType,
      sessionTotal,
      dueNow,
      balanceLater,
      customerName,
      phone,
      email,
      playerCount,
      notes,
      addonMachine,
      addonKit,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      paymentStatus: planType === 'full' ? 'fully_paid' : 'advance_paid',
    };

    // Save to localStorage for persistence
    try {
      const existing = localStorage.getItem('ack_cricket_bookings');
      const parsed = existing ? JSON.parse(existing) : [];
      parsed.unshift(newBooking);
      localStorage.setItem('ack_cricket_bookings', JSON.stringify(parsed));
    } catch (err) {
      console.warn('Storage save failed:', err);
    }

    setConfirmedBooking(newBooking);
    setCurrentStep(5);
    if (onBookingCompleted) {
      onBookingCompleted(newBooking);
    }
  };

  const copyBookingRef = () => {
    if (!confirmedBooking) return;
    navigator.clipboard.writeText(confirmedBooking.bookingRef);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  // WhatsApp link preparation
  const getWhatsAppUrl = () => {
    if (!confirmedBooking) return '#';
    const text = encodeURIComponent(
      `Hello ACK Indoor Cricket Hokandara! 🏏\n` +
      `I have booked a session:\n` +
      `• Ref: ${confirmedBooking.bookingRef}\n` +
      `• Session: ${selectedSession.name}\n` +
      `• Date: ${confirmedBooking.dateStr}\n` +
      `• Time: ${confirmedBooking.startTime} (${confirmedBooking.durationHours} hr)\n` +
      `• Coordinator: ${confirmedBooking.customerName} (${confirmedBooking.phone})\n` +
      `• Total: LKR ${confirmedBooking.sessionTotal.toLocaleString()} (${confirmedBooking.planType === 'full' ? 'Paid Full' : 'Advance Paid'})\n` +
      `Please confirm our net reservation. Thank you!`
    );
    return `https://wa.me/94771234567?text=${text}`;
  };

  // Count free slots on active date
  const freeSlotCount = activeDay?.slots.filter((s) => s.status === 'free').length || 0;

  return (
    <section id="booking-engine" className="py-12 lg:py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wizard Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Wizard Steps (matches Screenshots 9, 10, 11, 12) */}
          <div className="lg:col-span-8 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative text-left">
            {/* Step Progress Tracker Bar */}
            <div className="relative mb-8 pb-4 border-b border-neutral-800">
              <div className="flex items-center justify-between">
                {[
                  { stepNum: 1, label: 'SESSION' },
                  { stepNum: 2, label: 'AVAILABILITY' },
                  { stepNum: 3, label: 'PLAN' },
                  { stepNum: 4, label: 'DETAILS' },
                  { stepNum: 5, label: 'PAY' },
                ].map((item, idx) => {
                  const isCompleted = currentStep > item.stepNum;
                  const isCurrent = currentStep === item.stepNum;
                  return (
                    <div key={item.stepNum} className="flex flex-col items-center flex-1 relative">
                      {/* Connecting Line */}
                      {idx > 0 && (
                        <div
                          className={`absolute top-4 -left-1/2 w-full h-[2px] -z-0 transition-colors ${
                            currentStep >= item.stepNum ? 'bg-lime-500' : 'bg-neutral-800'
                          }`}
                        />
                      )}

                      {/* Step Circle */}
                      <button
                        type="button"
                        onClick={() => {
                          if (item.stepNum < currentStep && currentStep !== 5) {
                            setCurrentStep(item.stepNum);
                          }
                        }}
                        disabled={item.stepNum > currentStep || currentStep === 5}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all relative z-10 font-sports ${
                          isCompleted
                            ? 'bg-lime-500 text-black cursor-pointer'
                            : isCurrent
                            ? 'bg-lime-500 text-black ring-4 ring-lime-500/20'
                            : 'bg-neutral-800 text-neutral-500'
                        }`}
                      >
                        {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : item.stepNum}
                      </button>

                      {/* Step Label */}
                      <span
                        className={`text-[10px] sm:text-xs font-sports font-bold tracking-wider mt-2 uppercase ${
                          isCurrent
                            ? 'text-white'
                            : isCompleted
                            ? 'text-lime-400'
                            : 'text-neutral-500'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Validation Alert */}
            {validationError && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-xs sm:text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* STEP 1: CHOOSE YOUR SESSION (matches Screenshot 9) */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-neutral-800 text-lime-400 text-xs font-bold flex items-center justify-center font-mono">
                      01
                    </span>
                    <h3 className="font-sports text-xl sm:text-2xl font-black text-white">
                      Choose your session
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    What kind of practice do you want at ACK Indoor Cricket?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {SESSION_TYPES.map((session) => {
                    const isSelected = selectedSessionId === session.id;
                    return (
                      <div
                        key={session.id}
                        onClick={() => setSelectedSessionId(session.id)}
                        className={`p-5 rounded-2xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-neutral-800/90 border-lime-500 ring-1 ring-lime-500/40 shadow-lg'
                            : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                        }`}
                      >
                        <div className="text-[10px] font-sports font-bold text-neutral-500">
                          {session.index}
                        </div>
                        <div className="font-sports text-base sm:text-lg font-bold text-white mt-1">
                          {session.name}
                        </div>
                        <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                          {session.description}
                        </p>
                        <div className="mt-4 pt-3 border-t border-neutral-800">
                          <span className="font-sports text-sm font-bold text-lime-400 tabular-nums">
                            LKR {session.ratePerHour.toLocaleString()}
                          </span>
                          <span className="text-[11px] text-neutral-400"> / hour</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Optional Session Addons */}
                <div className="pt-2">
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold mb-2 font-mono">
                    OPTIONAL ADD-ONS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addonMachine}
                        onChange={(e) => setAddonMachine(e.target.checked)}
                        className="w-4 h-4 rounded accent-lime-500"
                      />
                      <div className="text-xs">
                        <div className="font-semibold text-white">Automated Bowling Machine</div>
                        <div className="text-neutral-400">+ LKR 1,000 / hr (Robotic feeder & balls)</div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addonKit}
                        onChange={(e) => setAddonKit(e.target.checked)}
                        className="w-4 h-4 rounded accent-lime-500"
                      />
                      <div className="text-xs">
                        <div className="font-semibold text-white">Pro Protective Gear Rental</div>
                        <div className="text-neutral-400">+ LKR 500 / hr (Helmet, pads, gloves)</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={handleSessionContinue}
                    className="px-7 py-3 text-sm font-bold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-lg shadow-lime-500/20 font-sports transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: CHECK AVAILABILITY (matches Screenshot 10) */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-neutral-800 text-lime-400 text-xs font-bold flex items-center justify-center font-mono">
                      02
                    </span>
                    <h3 className="font-sports text-xl sm:text-2xl font-black text-white">
                      Check availability
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    Pick a date, duration, then a free start time.
                  </p>
                </div>

                {/* Date Picker Row (matches Screenshot 10) */}
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {schedule.map((day) => {
                    const isSelected = selectedDateStr === day.dateStr;
                    return (
                      <button
                        key={day.dateStr}
                        type="button"
                        onClick={() => {
                          setSelectedDateStr(day.dateStr);
                          setSelectedSlot(null);
                        }}
                        className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-800 border-lime-500 ring-2 ring-lime-500/40 text-white'
                            : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 text-neutral-400'
                        }`}
                      >
                        <div className="text-[10px] uppercase font-bold tracking-wider font-mono">
                          {day.displayDay}
                        </div>
                        <div className="font-sports text-2xl font-black text-white my-1 tabular-nums">
                          {day.dayNumber}
                        </div>
                        <div className="text-[10px] text-neutral-400 font-mono">
                          {day.monthName}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Session Length Dropdown */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block mb-1 font-mono">
                      SESSION LENGTH
                    </label>
                    <select
                      value={durationHours}
                      onChange={(e) => setDurationHours(parseFloat(e.target.value))}
                      className="px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm font-semibold focus:outline-none focus:border-lime-500"
                    >
                      <option value={1}>1 hour</option>
                      <option value={1.5}>1.5 hours</option>
                      <option value={2}>2 hours</option>
                      <option value={3}>3 hours (Tournament block)</option>
                    </select>
                  </div>

                  {/* Slot Status Legend */}
                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-lime-400" /> Free
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-600" /> Booked
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" /> Held
                    </span>
                  </div>
                </div>

                {/* Slot counter */}
                <div className="text-xs text-neutral-400 font-medium">
                  <strong className="text-lime-400">{freeSlotCount} free slots</strong> for this date
                </div>

                {/* Slots Grid (matches Screenshot 10) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeDay?.slots.map((slot) => {
                    const isSelected = selectedSlot?.id === slot.id;
                    const isFree = slot.status === 'free';
                    const isBooked = slot.status === 'booked';
                    const isHeld = slot.status === 'held';

                    return (
                      <button
                        key={slot.id}
                        type="button"
                        disabled={!isFree}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-lime-500 text-black border-lime-400 font-bold shadow-lg shadow-lime-500/25 ring-2 ring-lime-400'
                            : isFree
                            ? 'bg-neutral-950/70 border-neutral-800 text-white hover:border-lime-500/70 hover:bg-neutral-900 cursor-pointer'
                            : isBooked
                            ? 'bg-neutral-950/40 border-neutral-900 text-neutral-600 cursor-not-allowed'
                            : 'bg-neutral-950/40 border-amber-950/30 text-amber-500/70 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : isFree ? 'text-lime-400' : 'text-neutral-600'}`} />
                          <span className={`text-[10px] font-mono uppercase font-bold ${
                            isSelected ? 'text-black' : isFree ? 'text-lime-400' : isBooked ? 'text-neutral-600' : 'text-amber-500'
                          }`}>
                            {slot.status}
                          </span>
                        </div>
                        <div className={`font-sports text-xl font-bold mt-2 tabular-nums ${isSelected ? 'text-black' : 'text-white'}`}>
                          {slot.startTime}
                        </div>
                        <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-black/80' : 'text-neutral-500'}`}>
                          Ends {slot.endTime}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2.5 text-xs font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleSlotContinue}
                    className="px-7 py-3 text-sm font-bold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-lg shadow-lime-500/20 font-sports transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT PLAN (matches Screenshot 11) */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-neutral-800 text-lime-400 text-xs font-bold flex items-center justify-center font-mono">
                      03
                    </span>
                    <h3 className="font-sports text-xl sm:text-2xl font-black text-white">
                      Payment plan
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    Amounts are calculated transparently from session rate × duration.
                  </p>
                </div>

                {/* Plan Selection Cards (matches Screenshot 11) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pay Advance Option */}
                  <div
                    onClick={() => setPlanType('advance')}
                    className={`p-5 rounded-2xl border text-left cursor-pointer transition-all ${
                      planType === 'advance'
                        ? 'bg-neutral-800/90 border-lime-500 ring-1 ring-lime-500/40 shadow-lg'
                        : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-sports text-lg font-bold text-white">
                      Pay advance
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">
                      Pay a deposit now; settle the balance before you play at the venue desk.
                    </p>
                    <div className="mt-4 pt-3 border-t border-neutral-800">
                      <div className="text-xs text-lime-400 font-bold font-sports">
                        Due now LKR {dueNow.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Pay Full Option */}
                  <div
                    onClick={() => setPlanType('full')}
                    className={`p-5 rounded-2xl border text-left cursor-pointer transition-all ${
                      planType === 'full'
                        ? 'bg-neutral-800/90 border-lime-500 ring-1 ring-lime-500/40 shadow-lg'
                        : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-sports text-lg font-bold text-white">
                      Pay in full
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">
                      Settle the entire session fee right away. Walk in hassle-free.
                    </p>
                    <div className="mt-4 pt-3 border-t border-neutral-800">
                      <div className="text-xs text-lime-400 font-bold font-sports">
                        Due now LKR {sessionTotal.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Metric Breakdown Box (matches Screenshot 11) */}
                <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
                  <div className="grid grid-cols-3 gap-4 text-left">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold font-mono">
                        SESSION TOTAL
                      </div>
                      <div className="font-sports text-lg sm:text-xl font-bold text-white mt-1 tabular-nums">
                        LKR {sessionTotal.toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold font-mono">
                        PAY NOW
                      </div>
                      <div className="font-sports text-lg sm:text-xl font-bold text-lime-400 mt-1 tabular-nums">
                        LKR {dueNow.toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold font-mono">
                        BALANCE LATER
                      </div>
                      <div className="font-sports text-lg sm:text-xl font-bold text-neutral-300 mt-1 tabular-nums">
                        LKR {balanceLater.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-400 mt-3 pt-3 border-t border-neutral-800">
                    {planType === 'advance'
                      ? 'Pay deposit now. Settle remaining balance upon arrival at ACK Indoor Cricket.'
                      : 'Full payment registered. No additional charges at venue.'}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 text-xs font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handlePlanContinue}
                    className="px-7 py-3 text-sm font-bold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-lg shadow-lime-500/20 font-sports transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: YOUR DETAILS (matches Screenshot 12) */}
            {currentStep === 4 && (
              <form onSubmit={handleSubmitBooking} className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-neutral-800 text-lime-400 text-xs font-bold flex items-center justify-center font-mono">
                      04
                    </span>
                    <h3 className="font-sports text-xl sm:text-2xl font-black text-white">
                      Your details
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    We'll use these for confirmation and instant booking lookup.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold block mb-1 font-mono">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Player / team contact"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold block mb-1 font-mono">
                      MOBILE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 7X XXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold block mb-1 font-mono">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                    />
                  </div>

                  {/* Player Count */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold block mb-1 font-mono">
                      NUMBER OF PLAYERS
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={18}
                      value={playerCount}
                      onChange={(e) => setPlayerCount(parseInt(e.target.value) || 2)}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500 tabular-nums"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block mb-1 font-mono">
                    NOTES (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Anything ACK Indoor Cricket should know before your session? (e.g. left-arm pace, tape ball, tournament setup)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500 resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-5 py-2.5 text-xs font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 text-sm font-extrabold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-xl shadow-lime-500/25 font-sports transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Confirm &amp; Reserve Slot</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 5: INSTANT CONFIRMATION & TICKET VOUCHER */}
            {currentStep === 5 && confirmedBooking && (
              <div className="space-y-6 text-left">
                {/* Success Header */}
                <div className="p-6 rounded-2xl bg-lime-950/40 border border-lime-500/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold shadow-lg">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-extrabold text-lime-400 tracking-wider font-sports">
                        SLOT RESERVED &amp; VERIFIED
                      </div>
                      <h3 className="font-sports text-2xl font-black text-white">
                        Booking Confirmed!
                      </h3>
                    </div>
                  </div>

                  {/* Reference Badge with Copy button */}
                  <div className="bg-neutral-900 border border-neutral-700 px-4 py-2.5 rounded-xl flex items-center gap-3">
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase font-mono">BOOKING REF</div>
                      <div className="font-sports font-black text-base text-lime-400 tracking-wide">
                        {confirmedBooking.bookingRef}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={copyBookingRef}
                      className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
                      title="Copy reference"
                    >
                      {copiedRef ? <Check className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Printable Ticket Summary */}
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                    <div>
                      <span className="text-neutral-500 font-mono">SESSION</span>
                      <p className="font-bold text-white text-sm mt-0.5">{selectedSession.name}</p>
                    </div>
                    <div>
                      <span className="text-neutral-500 font-mono">DATE</span>
                      <p className="font-bold text-white text-sm mt-0.5">{confirmedBooking.dateStr}</p>
                    </div>
                    <div>
                      <span className="text-neutral-500 font-mono">TIME</span>
                      <p className="font-bold text-white text-sm mt-0.5">
                        {confirmedBooking.startTime} ({confirmedBooking.durationHours} hr)
                      </p>
                    </div>
                    <div>
                      <span className="text-neutral-500 font-mono">PAYMENT DUE NOW</span>
                      <p className="font-bold text-lime-400 text-sm mt-0.5">
                        LKR {confirmedBooking.dueNow.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-300">
                    <div>
                      <span className="text-neutral-400">Coordinator: </span>
                      <strong className="text-white">{confirmedBooking.customerName}</strong> ({confirmedBooking.phone})
                    </div>
                    <div>
                      <span className="text-neutral-400">Balance at venue: </span>
                      <strong className="text-lime-400">LKR {confirmedBooking.balanceLater.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: WhatsApp Send & Reset */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-5 text-sm font-extrabold text-black bg-emerald-500 hover:bg-emerald-400 rounded-xl flex items-center justify-center gap-2 shadow-lg font-sports transition-all"
                  >
                    <span>Send to WhatsApp (+94 77 123 4567)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="py-3 px-4 text-xs font-bold text-neutral-300 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 rounded-xl flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Slip</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep(1);
                      setConfirmedBooking(null);
                    }}
                    className="py-3 px-4 text-xs font-bold text-neutral-400 hover:text-white transition-colors"
                  >
                    Book Another Slot
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Floating / Sticky BOOKING SUMMARY Card (matches Screenshots 9, 10, 11, 12!) */}
          <div className="lg:col-span-4 sticky top-28 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-2xl text-left">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold font-mono">
              BOOKING SUMMARY
            </div>

            <div className="font-sports text-2xl font-black text-white mt-1">
              {selectedSession.name}
            </div>

            <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono mt-0.5 pb-4 border-b border-neutral-800">
              CHANNEL · WHITE LABEL / ACK INDOOR CRICKET
            </div>

            {/* Itemized lines */}
            <div className="py-4 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Practice</span>
                <span className="font-semibold text-white">{selectedSession.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Date</span>
                <span className="font-semibold text-white">
                  {activeDay ? `${activeDay.displayDay}, ${activeDay.dayNumber} ${activeDay.monthName}` : 'Today'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Start</span>
                <span className="font-semibold text-white font-mono">
                  {selectedSlot ? selectedSlot.startTime : '—'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Duration</span>
                <span className="font-semibold text-white tabular-nums">{durationHours} hr</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Rate</span>
                <span className="font-semibold text-white tabular-nums">
                  LKR {effectiveRatePerHour.toLocaleString()}/hr
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Plan</span>
                <span className="font-bold text-lime-400 uppercase font-mono">
                  {planType}
                </span>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-neutral-400">Due now</span>
                <span className="font-bold text-white tabular-nums">
                  LKR {dueNow.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Balance later</span>
                <span className="font-bold text-neutral-300 tabular-nums">
                  LKR {balanceLater.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Large Highlighted Total Box (matches Screenshot 9, 10, 11, 12!) */}
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between mt-2">
              <span className="text-xs font-bold text-neutral-400">Session total</span>
              <span className="font-sports text-2xl font-black text-lime-400 tabular-nums">
                LKR {sessionTotal.toLocaleString()}
              </span>
            </div>

            {/* Mathematical note at bottom */}
            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 leading-relaxed">
              Demo availability uses the same free-slot math as production docs (hours – blocks – bookings – holds).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
