import React from 'react';
import { Shield, Zap, Target, Award, Users, Trophy } from 'lucide-react';

export function AboutSection() {
  const PILLARS = [
    {
      num: '01',
      title: 'Tournament-Grade Astroturf',
      desc: 'Precision shock pad base prevents joint fatigue while delivering true, consistent ball bounce for pace, spin, and cut shots.',
    },
    {
      num: '02',
      title: 'High-Velocity Safety Netting',
      desc: 'Heavy-duty knotted netting certified for hard leather-ball speeds over 150 km/h without dangerous rebounds or sag.',
    },
    {
      num: '03',
      title: 'Flicker-Free 500+ Lux Lighting',
      desc: 'Uniform high-bay LED sports luminaires eliminating shadows and blind spots for crystal clear vision down the corridor.',
    },
    {
      num: '04',
      title: 'Automated Robotics & Coaching',
      desc: 'Programmable dual-wheel bowling machines simulating swinging deliveries, off-spin, and leg-spin with micro speed adjustments.',
    },
  ];

  return (
    <section id="about-section" className="py-16 lg:py-24 bg-neutral-900/60 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Marquee Banner matching Screenshot 13 */}
        <div className="max-w-4xl text-left mb-14">
          <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
            ABOUT ACK INDOOR CRICKET
          </div>
          <h2 className="font-sports text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight mt-2">
            Built Around Cricket
          </h2>
          <p className="text-neutral-300 text-lg sm:text-xl mt-4 leading-relaxed font-normal">
            ACK Indoor Cricket is an indoor cricket practice venue located in Hokandara, near the Highway Interchange. We give players different ways to spend more time with the game — from softball sessions to dedicated leather-ball practice and coaching.
          </p>
        </div>

        {/* 4 Infrastructure Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-neutral-950/80 border border-neutral-800/90 rounded-3xl p-6 sm:p-7 text-left hover:border-lime-500/50 hover:bg-neutral-950 transition-all shadow-xl group"
            >
              <div className="font-sports text-2xl font-black text-lime-400/80 group-hover:text-lime-400 mb-3">
                {pillar.num}
              </div>
              <h3 className="font-sports text-lg font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Facility Highlights Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <div className="text-xs font-sports font-bold text-lime-400 uppercase tracking-widest">
              COLOMBO DISTRICT HUB
            </div>
            <div className="text-xl sm:text-2xl font-sports font-bold text-white">
              Open 7 Days a Week: 06:00 AM – 11:30 PM
            </div>
            <div className="text-xs text-neutral-400">
              Hokandara Junction, Sri Lanka · Near Athurugiriya Highway Interchange &amp; Malabe
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="font-sports text-3xl font-black text-white tabular-nums">22 yd</div>
              <div className="text-[10px] text-neutral-400 uppercase font-mono">Regulation Pitch</div>
            </div>
            <div className="w-[1px] h-10 bg-neutral-800" />
            <div className="text-center">
              <div className="font-sports text-3xl font-black text-lime-400 tabular-nums">150+</div>
              <div className="text-[10px] text-neutral-400 uppercase font-mono">KM/H Net Rated</div>
            </div>
            <div className="w-[1px] h-10 bg-neutral-800" />
            <div className="text-center">
              <div className="font-sports text-3xl font-black text-white tabular-nums">500+</div>
              <div className="text-[10px] text-neutral-400 uppercase font-mono">Lux Broadcast LED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
