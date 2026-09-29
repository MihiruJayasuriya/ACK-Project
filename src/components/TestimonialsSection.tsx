import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/cricketData';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-neutral-900/30 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading and Context (matches Screenshot 6) */}
          <div className="lg:col-span-5 text-left space-y-4">
            <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
              PLAYERS SAY
            </div>
            <h2 className="font-sports text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-[1.08]">
              Trust from the <br />
              <span className="text-lime-400">nets.</span>
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed pt-1">
              Short notes from players booking softball, leather-ball, and coaching sessions at ACK Indoor Cricket in Hokandara.
            </p>

            <div className="pt-4 flex items-center gap-3 text-xs text-neutral-400">
              <div className="flex text-lime-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-lime-400" />
                ))}
              </div>
              <span className="font-semibold text-white">Verified Player Feedback</span>
            </div>
          </div>

          {/* Right Column: Quote Card & Navigation Controls (matches Screenshot 6) */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative text-left min-h-[260px] flex flex-col justify-between">
              {/* Quote marks */}
              <div className="text-lime-400 mb-4 opacity-80">
                <Quote className="w-8 h-8 fill-lime-400/20 rotate-180" />
              </div>

              {/* Quote Body */}
              <p className="font-sports text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                "{current.quote}"
              </p>

              {/* Author & Session */}
              <div className="flex items-center gap-3.5 pt-6 mt-4 border-t border-neutral-800">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-lime-500 to-emerald-400 flex items-center justify-center font-sports font-black text-black text-sm shadow-md">
                  {current.avatarSeed}
                </div>
                <div>
                  <div className="font-bold text-white text-base">{current.author}</div>
                  <div className="text-xs text-neutral-400 font-medium">{current.sessionCategory}</div>
                </div>
              </div>
            </div>

            {/* Slider Controls: Arrow Left, Dots, Arrow Right */}
            <div className="flex items-center justify-between pt-6 px-2">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-lime-500/60 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, index) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === index ? 'w-8 bg-lime-500' : 'w-2.5 bg-neutral-700 hover:bg-neutral-600'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-lime-500/60 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
