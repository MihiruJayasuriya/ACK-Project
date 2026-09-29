import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/cricketData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq-section" className="py-16 lg:py-24 bg-neutral-950 border-t border-neutral-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-sports text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
            Got Questions?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3">
            Everything you need to know about practicing at ACK Indoor Cricket Hokandara.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-sports text-base sm:text-lg font-bold text-white hover:text-lime-400 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 transition-transform ${
                      isOpen ? 'rotate-180 text-lime-400 bg-neutral-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Have a specific request or group event?</div>
            <div className="text-xs text-neutral-400 mt-0.5">
              Talk directly to our Hokandara venue team for custom tournament brackets or corporate days.
            </div>
          </div>
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-black bg-lime-500 hover:bg-lime-400 rounded-xl font-sports transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}
