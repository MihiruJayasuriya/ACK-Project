import React from 'react';
import { MapPin, Phone, Mail, Instagram, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-black border-t border-neutral-800 text-neutral-400 text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-emerald-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center font-sports font-black text-sm text-lime-400">
                  ACK
                </div>
              </div>
              <div>
                <span className="font-sports text-xl font-bold tracking-tight text-white block">
                  ACK INDOOR CRICKET
                </span>
                <span className="text-[11px] font-mono text-lime-400">HOKANDARA · SRI LANKA</span>
              </div>
            </div>

            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Premier indoor cricket nets and coaching facility in Hokandara. Tournament-grade astroturf, shock pad underlay, high-velocity protective netting, and automated bowling machine training.
            </p>

            <div className="pt-2 flex items-center gap-4 text-neutral-400">
              <span className="flex items-center gap-1.5 text-xs text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-lime-400" /> Open Daily 06:00 – 23:30
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-sports font-bold uppercase tracking-wider text-white">
              PRACTICE NETS
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sessions-section')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Softball Cricket Nets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sessions-section')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Leather Ball Side Net
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sessions-section')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Cricket Coaching &amp; Drills
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sessions-section')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Bowling Machine Hire
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-lime-400 hover:text-lime-300 font-semibold transition-colors cursor-pointer"
                >
                  Live Slot Availability →
                </button>
              </li>
            </ul>
          </div>

          {/* Venue & Location */}
          <div className="space-y-3">
            <div className="text-xs font-sports font-bold uppercase tracking-wider text-white">
              HOKANDARA VENUE
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('location-section')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Location &amp; Directions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery-section')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Facility Photo Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about-section')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Pitch Specifications
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq-section')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Rules &amp; Gear Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <div className="text-xs font-sports font-bold uppercase tracking-wider text-white">
              GET IN TOUCH
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                <span>+94 11 277 8899</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-lime-400" />
                <span>bookings@ackindoorcricket.lk</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                <span>Hokandara Junction, Sri Lanka</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 text-xs font-bold text-black bg-lime-500 hover:bg-lime-400 rounded-xl font-sports shadow-md transition-colors"
              >
                Book Your Net Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} ACK Indoor Cricket Hokandara. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Play</span>
            <span>Safety Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
