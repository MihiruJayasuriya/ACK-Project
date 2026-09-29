export type SessionTypeId = 'softball' | 'leather-ball' | 'coaching';

export interface SessionType {
  id: SessionTypeId;
  index: string;
  name: string;
  shortDesc: string;
  badge: string;
  tagline: string;
  headline: string;
  description: string;
  ratePerHour: number;
  advanceRate: number;
  features: string[];
  specs: {
    pitchType: string;
    ballType: string;
    maxPlayers: number;
    gearProvided: string;
  };
}

export type SlotStatus = 'free' | 'booked' | 'held' | 'blocked';

export interface TimeSlot {
  id: string;
  startTime: string; // e.g. '06:00'
  endTime: string;   // e.g. '07:30'
  status: SlotStatus;
}

export interface DayAvailability {
  dateStr: string;   // 'YYYY-MM-DD'
  displayDay: string;// 'TODAY', 'WED', 'THU'
  dayNumber: number; // 29, 30, 1
  monthName: string; // 'Sep', 'Oct'
  isToday?: boolean;
  slots: TimeSlot[];
}

export type PaymentPlan = 'advance' | 'full';

export interface BookingSubmission {
  sessionType: SessionTypeId;
  dateStr: string;
  startTime: string;
  endTime: string;
  durationHours: number;
  ratePerHour: number;
  planType: PaymentPlan;
  sessionTotal: number;
  dueNow: number;
  balanceLater: number;
  customerName: string;
  phone: string;
  email: string;
  playerCount: number;
  notes?: string;
  addonMachine?: boolean;
  addonKit?: boolean;
}

export interface ConfirmedBooking extends BookingSubmission {
  id: string;
  bookingRef: string;
  createdAt: string;
  status: 'confirmed' | 'held' | 'completed' | 'cancelled';
  paymentStatus: 'advance_paid' | 'fully_paid' | 'pending';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  sessionCategory: string;
  rating: number;
  avatarSeed: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'nets' | 'action' | 'coaching' | 'gear';
  description: string;
  tag: string;
  svgType: 'turf-wide' | 'batsman-pull' | 'bowler-stride' | 'coaching-drills' | 'machine-net' | 'lounge-gear';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
