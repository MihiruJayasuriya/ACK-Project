import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { TurfPitchPreview } from './CricketGraphics';
import { AMENITIES } from '../data/cricketData';

interface BuiltForCricketProps {
  onBookClick: () => void;
  onViewPracticeOptions: () => void;
}

export function BuiltForCricketSection({
  onBookClick,
  onViewPracticeOptions,
}: BuiltForCricketProps) {
  return (
    <section className="py-16 lg:py-24 bg-neutral-900/50 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Realistic Turf Pitch Graphic */}
          <div className="lg:col-span-6">
            <TurfPitchPreview />
          </div>

          {/* Right Column: Copy & On-Site Amenities */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
                BUILT FOR CRICKET
              </div>
              <h2 className="font-sports text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2 leading-[1.08]">
                Indoor nets. <br />
                <span className="text-lime-400">Your session.</span>
              </h2>
            </div>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Dedicated practice space in Hokandara — softball, leather-ball nets, or coaching. Choose what you want to work on, pick a slot, and show up ready to play. No long process — just cricket time.
            </p>

            {/* On-Site Amenities (matches Screenshot 2) */}
            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-widest text-neutral-400 font-bold mb-3 font-mono">
                ON SITE FACILITIES &amp; AMENITIES
              </div>
              <div className="flex flex-wrap gap-2.5">
                {AMENITIES.map((amenity) => (
                  <div
                    key={amenity.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700/80 text-xs font-semibold text-neutral-200 hover:border-lime-500/60 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons & Trust line */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="px-6 py-3 text-sm font-bold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-lg shadow-lime-500/20 font-sports transition-all cursor-pointer"
              >
                Book a session
              </button>

              <button
                type="button"
                onClick={onViewPracticeOptions}
                className="inline-flex items-center gap-2 text-sm font-bold text-lime-400 hover:text-lime-300 transition-colors cursor-pointer group"
              >
                <span>View practice options</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust bullet markers below */}
            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                <span>Indoor cricket nets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                <span>Book online in minutes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                <span>Hokandara · near highway interchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
