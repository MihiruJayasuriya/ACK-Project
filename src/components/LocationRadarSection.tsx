import React from 'react';
import { ArrowRight, MapPin, Navigation, Car, Clock } from 'lucide-react';
import { CricketRadarMap } from './CricketGraphics';

interface LocationRadarProps {
  onBookClick: () => void;
}

export function LocationRadarSection({ onBookClick }: LocationRadarProps) {
  return (
    <section id="location-section" className="py-16 lg:py-24 bg-neutral-900/40 border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Location copy & details (matches Screenshot 4) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
                LOCATION
              </div>
              <h2 className="font-sports text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2 leading-[1.08]">
                Find us in Hokandara. <br />
                <span className="text-lime-400">Easy to reach.</span>
              </h2>
            </div>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Near the Highway Interchange — built for quick trips to the nets, training, and coaching. Avoid inner Colombo city traffic and get straight into batting reps.
            </p>

            {/* 3 Metric metadata items (matches Screenshot 4) */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold font-mono">
                  AREA
                </div>
                <div className="text-sm sm:text-base font-bold text-white mt-1">
                  Hokandara
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold font-mono">
                  LANDMARK
                </div>
                <div className="text-sm sm:text-base font-bold text-white mt-1">
                  Highway Exit
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold font-mono">
                  BEST FOR
                </div>
                <div className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                  Nets &amp; Coaching
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Indoor+Cricket+Hokandara+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-bold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-lg shadow-lime-500/20 font-sports transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get directions</span>
                <Navigation className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onBookClick}
                className="px-5 py-3 text-sm font-bold text-white hover:text-lime-400 transition-colors font-sports cursor-pointer"
              >
                Book a session
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Radar Canvas */}
          <div className="lg:col-span-7">
            <CricketRadarMap />
          </div>
        </div>
      </div>
    </section>
  );
}
