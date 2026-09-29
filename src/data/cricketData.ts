import { SessionType, Testimonial, GalleryPhoto, FaqItem, DayAvailability, TimeSlot } from '../types';

export const SESSION_TYPES: SessionType[] = [
  {
    id: 'softball',
    index: '01',
    name: 'Softball Cricket',
    shortDesc: 'Friends, teams & casual groups',
    badge: 'COMMUNITY & TEAMS',
    tagline: 'SESSION 01 OF 03',
    headline: 'Fast-paced team action & casual runs.',
    description: 'Indoor softball cricket for players and groups who want dedicated time to bat, bowl and enjoy high-intensity tape-ball and windball matches without weather delays.',
    ratePerHour: 3500,
    advanceRate: 1000,
    features: [
      '22-yard tournament-grade synthetic turf pitch',
      'High-velocity protective boundary netting',
      'Yellow spring-loaded target stumps with bails',
      'Electronic match scoreboard & umpire clicker',
      'Ideal for 8 to 16 players per match',
      'High-bounce softball & tape balls provided',
    ],
    specs: {
      pitchType: 'Non-abrasive 15mm ProTurf',
      ballType: 'Heavy Soft / Tennis / Taped ball',
      maxPlayers: 16,
      gearProvided: 'Bats, softballs, wickets, bibs',
    },
  },
  {
    id: 'leather-ball',
    index: '02',
    name: 'Leather Ball Side Net',
    shortDesc: 'Solo practice & skill work',
    badge: 'TECHNICAL DRILLS',
    tagline: 'SESSION 02 OF 03',
    headline: 'More reps. Realistic bounce & swing.',
    description: 'Focused side-net time for batting, bowling, and dedicated practice with genuine leather balls. Features true 22-yard bowling run-up and automated bowling machine integration.',
    ratePerHour: 4500,
    advanceRate: 1500,
    features: [
      'Certified leather-ball certified shock pad underlay',
      'True seam movement and realistic wicket bounce',
      'Automated programmable bowling machine with remote',
      'Side-angle high-speed video recording tripod mount',
      'Bowling run-up marker line with speed radar sensor',
      'Protective nets tested for up to 150 km/h deliveries',
    ],
    specs: {
      pitchType: 'Heavy-Duty Shock-Absorbing Matting',
      ballType: 'Two-Piece / Four-Piece Leather Ball (156g)',
      maxPlayers: 6,
      gearProvided: 'Stumps, Bowling Machine, Speed Radar',
    },
  },
  {
    id: 'coaching',
    index: '03',
    name: 'Cricket Coaching',
    shortDesc: 'Players who want coaching support',
    badge: 'ACADEMY & MENTORSHIP',
    tagline: 'SESSION 03 OF 03',
    headline: 'Structured 1-on-1 and youth skill mastery.',
    description: 'Structured cricket training with qualified level 1/2 coaches. Tailored batting biomechanics, bowling action refinement, wicketkeeping drills, and match tactical mindset.',
    ratePerHour: 5500,
    advanceRate: 2000,
    features: [
      '1-on-1 or small group guidance with certified coaches',
      'Frame-by-frame batting trigger & bat-swing video analysis',
      'Bowling seam position, wrist angle & follow-through correction',
      'Target cone batting drills, front-foot drives & pull shots',
      'Personalized progress tracker scorecard after session',
      'Available for junior (age 7+) and senior club players',
    ],
    specs: {
      pitchType: 'Dedicated High-Precision Net Lane',
      ballType: 'Custom (Incrediball, Soft, or Leather)',
      maxPlayers: 4,
      gearProvided: 'All training aids, cones, side-arms, bowling machines',
    },
  },
];

export const AMENITIES = [
  { id: 'washrooms', label: 'Washrooms', desc: 'Modern hygienic clean restrooms' },
  { id: 'gear', label: 'Sports gear', desc: 'Quality bats, pads, helmets & balls available' },
  { id: 'beverages', label: 'Chilled drinks', desc: 'Hydration cooler, energy drinks & Ceylon tea' },
  { id: 'changing', label: 'Changing area', desc: 'Secure lockers and changing rooms' },
  { id: 'parking', label: 'Dedicated parking', desc: 'Free on-site parking for cars and motorbikes' },
  { id: 'waiting', label: 'Spectator lounge', desc: 'Comfortable seating area with live match view' },
  { id: 'machine', label: 'Bowling Machine', desc: 'Spin and pace simulation up to 140 km/h' },
  { id: 'lights', label: 'LED Floodlights', desc: '500+ lux flicker-free broadcast sports lights' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Nimasha P.',
    sessionCategory: 'Softball cricket',
    quote: 'Perfect for our group. Soft ball sessions are easy to organise and everyone shows up ready to play. The pitch pace and true bounce makes every over thrilling!',
    rating: 5,
    avatarSeed: 'NP',
  },
  {
    id: '2',
    author: 'Dhanushka Ratnayake',
    sessionCategory: 'Leather ball side-net',
    quote: 'Best indoor net in the Hokandara / Malabe area. The lighting is completely flicker-free and practicing with the bowling machine fixed my front-foot weakness in just two weeks.',
    rating: 5,
    avatarSeed: 'DR',
  },
  {
    id: '3',
    author: 'Coach Samantha Jayasuriya',
    sessionCategory: 'Junior Cricket Academy',
    quote: 'We host weekly coaching sessions for our under-15 squad here. Safe heavy netting, clean washrooms, and generous seating for parents to watch comfortably.',
    rating: 5,
    avatarSeed: 'SJ',
  },
  {
    id: '4',
    author: 'Kaveen Dias',
    sessionCategory: 'Weekend Corporate League',
    quote: 'When monsoon rains ruined our outdoor matches, ACK Indoor Cricket saved our season. Booking online took less than 60 seconds and the staff had the nets ready when we walked in.',
    rating: 5,
    avatarSeed: 'KD',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Full-Span Turf Pitch & Stumps',
    category: 'nets',
    description: 'Championship-grade green astroturf with spring-loaded yellow target stumps and regulation crease markings.',
    tag: 'NET 01 · MATCH PITCH',
    svgType: 'turf-wide',
  },
  {
    id: 'g2',
    title: 'Batting Technique & Cover Drive',
    category: 'action',
    description: 'Batsman executing high-elbow forward defense and cover drives inside the high-tension net enclosure.',
    tag: 'BATTING DRILL',
    svgType: 'batsman-pull',
  },
  {
    id: 'g3',
    title: 'Fast Bowling & Delivery Stride',
    category: 'action',
    description: 'Generous run-up lane allowing seamers and spinners to bowl with full natural action without restricted ceilings.',
    tag: 'BOWLING LANE',
    svgType: 'bowler-stride',
  },
  {
    id: 'g4',
    title: 'Automated Bowling Machine & Speed Gun',
    category: 'gear',
    description: 'Dual-wheel robotic feeder delivering outswing, inswing, off-spin, and leg-cutters from 70 to 140 km/h.',
    tag: 'PRO EQUIPMENT',
    svgType: 'machine-net',
  },
  {
    id: 'g5',
    title: 'Youth Coaching & Stance Clinic',
    category: 'coaching',
    description: 'Certified coaches working on bat grip, head position, and back-lift mechanics with aspiring junior cricketers.',
    tag: 'DEVELOPMENT SQUAD',
    svgType: 'coaching-drills',
  },
  {
    id: 'g6',
    title: 'Player Dugout & Gear Lounge',
    category: 'gear',
    description: 'Spacious seating benches, kit bag storage, hydration station, and match viewing glass gallery.',
    tag: 'AMENITIES',
    svgType: 'lounge-gear',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'Booking & Payments',
    question: 'How does the online booking work?',
    answer: 'Booking takes 1 minute: Choose your session type (Softball, Leather-ball net, or Coaching), select your date and time slot, choose whether to pay 30% advance or full amount, enter your name and phone number. Your slot is immediately secured with an instant booking confirmation voucher and WhatsApp receipt.',
  },
  {
    id: 'f2',
    category: 'Equipment',
    question: 'Do we need to bring our own cricket bats and balls?',
    answer: 'For softball cricket, we provide high quality bats, spring stumps, and balls complimentary! For leather-ball practice, you are welcome to bring your personal batting kit (pads, gloves, helmet, bat). We also have sanitized protective gear available on-site for rent at LKR 500 per kit.',
  },
  {
    id: 'f3',
    category: 'Facilities',
    question: 'Can we play with leather cricket balls inside the net?',
    answer: 'Yes! We have specially reinforced high-density shock-absorbing side-nets designed specifically for hard red and white leather balls up to 150 km/h. Helmets and full protective gear are strictly mandatory for all leather-ball batting sessions.',
  },
  {
    id: 'f4',
    category: 'Equipment',
    question: 'Is the bowling machine included or extra?',
    answer: 'The automated bowling machine is available as a nominal add-on (LKR 1,000/hr) with the leather-ball net, or included for free with select structured coaching sessions. An operator can also assist you with feeder settings.',
  },
  {
    id: 'f5',
    category: 'Location & Parking',
    question: 'Where is ACK Indoor Cricket located in Hokandara?',
    answer: 'We are situated in Hokandara, Western Province, just 4 minutes from the Athurugiriya Highway Interchange and easily accessible from Malabe, Thalawathugoda, and Pannipitiya. Free on-site parking is provided for cars and bikes.',
  },
  {
    id: 'f6',
    category: 'Booking & Payments',
    question: 'What is the cancellation and rescheduling policy?',
    answer: 'You can reschedule your booked slot free of charge up to 6 hours before your session starts. Contact us via phone or WhatsApp (+94 77 123 4567) with your Booking ID.',
  },
  {
    id: 'f7',
    category: 'Group Bookings',
    question: 'Can we book multiple hours for tournaments or birthday events?',
    answer: 'Absolutely! Many schools, companies, and cricket clubs book 2 to 4 hour slots for indoor cricket tournaments. Contact us for custom tournament schedules, trophies, and catering arrangements.',
  },
];

// Helper to generate realistic weekly slot schedule
export function generateSchedule(): DayAvailability[] {
  const days: DayAvailability[] = [];
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const baseSlots: { start: string; end: string; defaultStatus: 'free' | 'booked' | 'held' | 'blocked' }[] = [
    { start: '06:00', end: '07:30', defaultStatus: 'free' },
    { start: '07:30', end: '09:00', defaultStatus: 'free' },
    { start: '09:00', end: '10:30', defaultStatus: 'booked' },
    { start: '10:30', end: '12:00', defaultStatus: 'free' },
    { start: '12:00', end: '13:30', defaultStatus: 'free' },
    { start: '13:30', end: '15:00', defaultStatus: 'free' },
    { start: '15:00', end: '16:30', defaultStatus: 'free' },
    { start: '16:30', end: '18:00', defaultStatus: 'booked' },
    { start: '18:00', end: '19:30', defaultStatus: 'free' },
    { start: '19:30', end: '21:00', defaultStatus: 'held' },
    { start: '21:00', end: '22:30', defaultStatus: 'free' },
  ];

  const now = new Date();

  for (let i = 0; i < 7; i++) {
    const targetDate = new Date();
    targetDate.setDate(now.getDate() + i);

    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    const dateNum = targetDate.getDate();
    const dayOfWeek = targetDate.getDay();

    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dateNum).padStart(2, '0')}`;
    const displayDay = i === 0 ? 'TODAY' : dayNames[dayOfWeek];

    // Seed variations across days
    const daySlots: TimeSlot[] = baseSlots.map((s, index) => {
      let status = s.defaultStatus;
      // Slight variation
      if (i % 2 === 1 && (index === 2 || index === 7)) status = 'free';
      if (i % 3 === 0 && (index === 1 || index === 8)) status = 'booked';
      if (index === 3 && i === 1) status = 'free';

      return {
        id: `${dateStr}_${s.start}`,
        startTime: s.start,
        endTime: s.end,
        status: status,
      };
    });

    days.push({
      dateStr,
      displayDay,
      dayNumber: dateNum,
      monthName: monthNames[month],
      isToday: i === 0,
      slots: daySlots,
    });
  }

  return days;
}
