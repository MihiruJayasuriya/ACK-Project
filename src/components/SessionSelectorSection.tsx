import React, { useState } from 'react';
import { ArrowRight, Check, Zap, Users, Target, Award, Shield } from 'lucide-react';
import { SESSION_TYPES } from '../data/cricketData';
import { SessionTypeId } from '../types';

interface SessionSelectorProps {
  onSelectAndBook: (sessionId: SessionTypeId) => void;
}

export function SessionSelectorSection({ onSelectAndBook }: SessionSelectorProps) {
  const [selectedId, setSelectedId] = useState<SessionTypeId>('leather-ball');

  const activeSession = SESSION_TYPES.find((s) => s.id === selectedId) || SESSION_TYPES[1];

  return (
    <section id="sessions-section" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10">
          <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
            PRACTICE OPTIONS
          </div>
          <h2 className="font-sports text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
            Pick your session.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg mt-3">
            Choose a path below — preview the session, then book the time that fits.
          </p>
        </div>

        {/* 3 Interactive Selector Cards (matches Screenshot 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {SESSION_TYPES.map((session) => {
            const isSelected = selectedId === session.id;
            return (
              <button
                key={session.id}
                type="button"
                onClick={() => setSelectedId(session.id)}
                className={`p-5 rounded-2xl text-left transition-all border relative cursor-pointer group ${
                  isSelected
                    ? 'bg-neutral-900 border-lime-500 shadow-xl shadow-lime-950/40 ring-1 ring-lime-500/50'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-lime-500 text-black font-extrabold'
                          : 'bg-neutral-800 text-neutral-300 group-hover:text-white'
                      }`}
                    >
                      {session.id === 'softball' && <Users className="w-5 h-5" />}
                      {session.id === 'leather-ball' && <Target className="w-5 h-5" />}
                      {session.id === 'coaching' && <Award className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="font-sports text-lg font-bold text-white group-hover:text-lime-400 transition-colors">
                        {session.name}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">{session.shortDesc}</div>
                    </div>
                  </div>
                  <span className="font-sports font-bold text-xs text-neutral-500 group-hover:text-lime-400/80">
                    {session.index}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Rate per hour</span>
                  <span className="font-sports font-bold text-lime-400 text-sm tabular-nums">
                    LKR {session.ratePerHour.toLocaleString()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Session Showcase Box */}
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden text-left">
          {/* Subtle green corner accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left detail column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest font-extrabold text-lime-400 font-sports">
                  {activeSession.tagline}
                </div>
                <h3 className="font-sports text-3xl sm:text-4xl font-black text-white mt-1">
                  {activeSession.headline}
                </h3>
                <p className="text-neutral-300 text-base mt-3 leading-relaxed">
                  {activeSession.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3 font-mono">
                  INCLUDED IN THIS SESSION:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSession.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-lime-500/20 text-lime-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action bar */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectAndBook(activeSession.id)}
                  className="px-7 py-3.5 text-base font-extrabold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-lg shadow-lime-500/25 font-sports transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book {activeSession.name}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="text-xs text-neutral-400 font-mono">
                  From <strong className="text-white">LKR {activeSession.ratePerHour.toLocaleString()}</strong> / hr · Advance LKR {activeSession.advanceRate.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Right Spec Sheet Column */}
            <div className="lg:col-span-5 bg-neutral-950/80 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs uppercase font-extrabold text-lime-400 font-sports">SESSION PROFILE</span>
                <span className="text-xs font-mono text-neutral-400">ID: ACK-NET-{activeSession.index}</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-neutral-500 uppercase tracking-wider text-[10px] font-bold">PITCH MATTING</div>
                  <div className="text-white font-medium mt-0.5">{activeSession.specs.pitchType}</div>
                </div>

                <div>
                  <div className="text-neutral-500 uppercase tracking-wider text-[10px] font-bold">BALL REGULATION</div>
                  <div className="text-white font-medium mt-0.5">{activeSession.specs.ballType}</div>
                </div>

                <div>
                  <div className="text-neutral-500 uppercase tracking-wider text-[10px] font-bold">CAPACITY</div>
                  <div className="text-white font-medium mt-0.5">Up to {activeSession.specs.maxPlayers} players recommended</div>
                </div>

                <div>
                  <div className="text-neutral-500 uppercase tracking-wider text-[10px] font-bold">COMPLIMENTARY GEAR</div>
                  <div className="text-white font-medium mt-0.5">{activeSession.specs.gearProvided}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Hourly Rate</span>
                <div className="font-sports text-2xl font-black text-lime-400 tabular-nums">
                  LKR {activeSession.ratePerHour.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
