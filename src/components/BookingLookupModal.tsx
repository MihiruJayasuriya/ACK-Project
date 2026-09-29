import React, { useState, useEffect } from 'react';
import { X, Search, Calendar, Clock, CheckCircle2, AlertCircle, Phone, Printer, ExternalLink } from 'lucide-react';
import { ConfirmedBooking } from '../types';

interface BookingLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewBookingClick: () => void;
}

export function BookingLookupModal({
  isOpen,
  onClose,
  onNewBookingClick,
}: BookingLookupModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookings, setBookings] = useState<ConfirmedBooking[]>([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadBookings();
    }
  }, [isOpen]);

  const loadBookings = () => {
    try {
      const stored = localStorage.getItem('ack_cricket_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      } else {
        // Seed an initial demo booking for instant testing
        const sample: ConfirmedBooking = {
          id: 'demo_1',
          bookingRef: 'ACK-HKD-7821',
          sessionType: 'softball',
          dateStr: '2026-09-30',
          startTime: '16:30',
          endTime: '18:00',
          durationHours: 1.5,
          ratePerHour: 3500,
          planType: 'advance',
          sessionTotal: 5250,
          dueNow: 1500,
          balanceLater: 3750,
          customerName: 'Nimasha Perera',
          phone: '+94 77 123 4567',
          email: 'nimasha@example.com',
          playerCount: 10,
          notes: 'Softball match between weekend office teams',
          createdAt: new Date().toISOString(),
          status: 'confirmed',
          paymentStatus: 'advance_paid',
        };
        localStorage.setItem('ack_cricket_bookings', JSON.stringify([sample]));
        setBookings([sample]);
      }
    } catch (e) {
      console.warn('Failed loading bookings', e);
    }
  };

  if (!isOpen) return null;

  const filtered = bookings.filter((b) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      b.bookingRef.toLowerCase().includes(term) ||
      b.phone.toLowerCase().includes(term) ||
      b.customerName.toLowerCase().includes(term)
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
            SELF-SERVICE PORTAL
          </div>
          <h3 className="font-sports text-2xl sm:text-3xl font-black text-white mt-1">
            Check Your Booking
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Enter your Booking Reference (e.g. ACK-HKD-7821) or mobile number.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-5 relative">
          <input
            type="text"
            placeholder="Search by Ref ID (ACK-HKD-...) or Phone Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500 font-mono"
          />
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-3.5" />
        </div>

        {/* Results List */}
        <div className="mt-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="p-8 text-center bg-neutral-950 rounded-2xl border border-neutral-800">
              <AlertCircle className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">No Bookings Found</div>
              <p className="text-xs text-neutral-400 mt-1">
                No reservation matched "{searchTerm}". Check the reference ID or book a new slot below.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNewBookingClick();
                }}
                className="mt-4 px-5 py-2 text-xs font-bold text-black bg-lime-500 rounded-xl font-sports"
              >
                Book a Session Now
              </button>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-lime-500/50 transition-colors space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="font-sports font-black text-lime-400 text-base tracking-wider">
                      {item.bookingRef}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-lime-500/20 text-lime-400 text-[10px] font-bold uppercase">
                      {item.status}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-neutral-400">
                    Created {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-neutral-500">Practice</span>
                    <div className="font-bold text-white mt-0.5 capitalize">{item.sessionType}</div>
                  </div>
                  <div>
                    <span className="text-neutral-500">Date</span>
                    <div className="font-bold text-white mt-0.5">{item.dateStr}</div>
                  </div>
                  <div>
                    <span className="text-neutral-500">Time Slot</span>
                    <div className="font-bold text-white mt-0.5 font-mono">
                      {item.startTime} - {item.endTime}
                    </div>
                  </div>
                  <div>
                    <span className="text-neutral-500">Total</span>
                    <div className="font-bold text-lime-400 mt-0.5 tabular-nums">
                      LKR {item.sessionTotal.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-neutral-400 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    Player: <strong className="text-white">{item.customerName}</strong> ({item.phone}) · {item.playerCount} players
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/94771234567?text=Hi%20ACK%20Cricket,%20regarding%20booking%20${item.bookingRef}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-emerald-950 border border-emerald-700/60 text-emerald-400 hover:text-white rounded-lg flex items-center gap-1 text-[11px]"
                    >
                      <span>WhatsApp Desk</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white"
                      title="Print voucher"
                    >
                      <Printer className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-400">
          <span>Need to reschedule? Call +94 11 277 8899</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 font-bold text-white hover:text-lime-400 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
