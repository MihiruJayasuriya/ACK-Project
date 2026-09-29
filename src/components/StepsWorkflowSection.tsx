import React from 'react';
import { ArrowRight, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface StepsWorkflowProps {
  onCheckSessionsClick: () => void;
}

export function StepsWorkflowSection({ onCheckSessionsClick }: StepsWorkflowProps) {
  const STEPS = [
    {
      num: '01',
      title: 'Choose a session',
      desc: 'Softball, leather-ball net, or coaching.',
      icon: Calendar,
    },
    {
      num: '02',
      title: 'Pick a time',
      desc: 'Select a date and available slot.',
      icon: Clock,
    },
    {
      num: '03',
      title: 'Confirm & play',
      desc: 'Book online, then arrive ready.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
            HOW BOOKING WORKS
          </div>
          <h2 className="font-sports text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
            From booking to batting.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3">
            Three steps. No phone chase.
          </p>
        </div>

        {/* 3 Step Cards (matches Screenshot 5) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-left relative group hover:border-lime-500/50 hover:bg-neutral-900 transition-all shadow-xl"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-lime-400 group-hover:bg-lime-500 group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-sports text-xl font-bold text-neutral-600 group-hover:text-lime-400/80 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-sports text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Primary CTA button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onCheckSessionsClick}
            className="px-7 py-3.5 text-base font-extrabold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-xl shadow-lime-500/20 font-sports transition-all inline-flex items-center gap-2.5 cursor-pointer"
          >
            <span>Check available sessions</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
