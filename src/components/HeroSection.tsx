import React from 'react';
import { ArrowRight, Star, ShieldCheck, Clock, Users, Flame } from 'lucide-react';
import { HeroCricketGraphic } from './CricketGraphics';

interface HeroSectionProps {
  onBookClick: () => void;
  onSeeSessionsClick: () => void;
}

export function HeroSection({ onBookClick, onSeeSessionsClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Marquee Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Live Status Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-lime-500/30 text-lime-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span>HOKANDARA CRICKET HUB · OPEN 06:00 AM – 11:30 PM</span>
            </div>

            {/* Massive Athletic Title matching Screenshot 1 */}
            <h1 className="font-sports text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.02]">
              YOUR GAME. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400">
                YOUR SESSION.
              </span> <br />
              YOUR NET.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              Book softball, leather-ball nets, or coaching — then show up ready to play at ACK Indoor Cricket in Hokandara. Fast online booking with zero phone chase.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onBookClick}
                className="px-7 py-3.5 text-base font-extrabold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-xl shadow-lime-500/25 transition-all flex items-center gap-2.5 font-sports cursor-pointer"
              >
                <span>Book a session</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={onSeeSessionsClick}
                className="px-6 py-3.5 text-base font-bold text-white hover:text-lime-400 bg-neutral-900/80 hover:bg-neutral-800 rounded-xl border border-neutral-700/80 transition-all font-sports cursor-pointer"
              >
                See sessions
              </button>
            </div>

            {/* Trust badge with player avatars & rating */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-neutral-950 bg-gradient-to-tr from-lime-600 to-lime-400 flex items-center justify-center text-xs font-black text-black">
                  AK
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-neutral-950 bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-xs font-black text-black">
                  SJ
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-neutral-950 bg-gradient-to-tr from-yellow-500 to-amber-300 flex items-center justify-center text-xs font-black text-black">
                  NP
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-neutral-950 bg-gradient-to-tr from-lime-500 to-green-300 flex items-center justify-center text-xs font-black text-black">
                  +300
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-lime-400 text-lime-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Over 320+ verified cricket sessions played in Hokandara
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic Visual Composite */}
          <div className="lg:col-span-6">
            <HeroCricketGraphic />
          </div>
        </div>
      </div>

      {/* Diagonal Athletic Ribbon Marquee (matches Screenshot 1) */}
      <div className="relative mt-14 sm:mt-20 overflow-hidden py-3">
        {/* Ribbon 1: Angled Lime Green with Dark Bold Text */}
        <div className="w-[110%] -ml-[5%] transform -rotate-2 bg-lime-500 text-black py-2.5 shadow-xl border-y border-black font-sports font-black text-sm sm:text-base tracking-widest uppercase overflow-hidden whitespace-nowrap">
          <div className="animate-ribbon-left flex gap-8">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-6">
                <span>ACK INDOOR CRICKET</span>
                <span className="text-neutral-950">✦</span>
                <span>HOKANDARA HIGHWAY CORRIDOR</span>
                <span className="text-neutral-950">✦</span>
                <span>LIVE NET AVAILABILITY</span>
                <span className="text-neutral-950">✦</span>
                <span>SOFTBALL &amp; LEATHER BALL</span>
                <span className="text-neutral-950">✦</span>
                <span>BOWLING MACHINE</span>
                <span className="text-neutral-950">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Black with Neon Green Text Angled slightly opposite */}
        <div className="w-[110%] -ml-[5%] transform rotate-1 bg-black text-lime-400 py-2 shadow-2xl border-y border-lime-500/40 font-sports font-black text-xs sm:text-sm tracking-widest uppercase overflow-hidden whitespace-nowrap mt-1">
          <div className="animate-ribbon-right flex gap-8">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-6">
                <span>BOOK IN MINUTES</span>
                <span className="text-lime-500">|</span>
                <span>ACK SPORTS HOKANDARA</span>
                <span className="text-lime-500">|</span>
                <span>FLOODLIT NETS</span>
                <span className="text-lime-500">|</span>
                <span>7 DAYS A WEEK 06:00 - 23:30</span>
                <span className="text-lime-500">|</span>
                <span>COACHING ACADEMY</span>
                <span className="text-lime-500">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
