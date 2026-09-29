import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Instagram, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('General Enquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 4000);
  };

  return (
    <section id="contact-section" className="py-16 lg:py-24 bg-neutral-900/40 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Contact details (matches Screenshot 14) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
                VISIT &amp; CONTACT
              </div>
              <h2 className="font-sports text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2 leading-[1.08]">
                Make your next <br />
                session easy.
              </h2>
            </div>

            <div className="space-y-5 pt-2">
              {/* Visit */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 text-lime-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-mono font-bold text-neutral-400">VISIT</div>
                  <div className="text-base font-bold text-white mt-0.5">ACK Indoor Cricket</div>
                  <div className="text-xs text-neutral-400">
                    Hokandara, Sri Lanka<br />
                    Near Athurugiriya Highway Interchange &amp; Malabe Road
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Indoor+Cricket+Hokandara+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-lime-400 hover:text-lime-300 mt-2 font-sports tracking-wide"
                  >
                    <span>GET DIRECTIONS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 text-lime-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-mono font-bold text-neutral-400">PHONE</div>
                  <div className="text-sm font-bold text-white mt-0.5">+94 11 277 8899</div>
                  <div className="text-xs text-neutral-400">Front desk reservations &amp; inquiries</div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 text-lime-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-mono font-bold text-neutral-400">WHATSAPP</div>
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-lime-400 hover:text-lime-300 mt-0.5 block"
                  >
                    +94 77 123 4567
                  </a>
                  <div className="text-xs text-neutral-400">Quick replies &amp; schedule holds</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 text-lime-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-mono font-bold text-neutral-400">EMAIL</div>
                  <div className="text-sm font-bold text-white mt-0.5">bookings@ackindoorcricket.lk</div>
                  <div className="text-xs text-neutral-400">Corporate &amp; tournament inquiries</div>
                </div>
              </div>
            </div>

            {/* Social channels (matches Screenshot 14) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-lime-500/60 transition-colors flex items-center gap-3"
              >
                <Instagram className="w-5 h-5 text-lime-400" />
                <div>
                  <div className="text-xs font-bold text-white">Instagram</div>
                  <div className="text-[11px] text-neutral-400">@ack_cricket_hokandara</div>
                </div>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-lime-500/60 transition-colors flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-neutral-800 text-lime-400 font-bold flex items-center justify-center text-xs font-mono">
                  ▶
                </div>
                <div>
                  <div className="text-xs font-bold text-white">TikTok</div>
                  <div className="text-[11px] text-neutral-400">@ack_sports</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form (matches Screenshot 14) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
                SEND US A MESSAGE
              </div>
              <h3 className="font-sports text-3xl sm:text-4xl font-black text-white mt-1">
                Tell us what you need.
              </h3>
            </div>

            {submitted ? (
              <div className="p-8 my-8 rounded-2xl bg-lime-950/40 border border-lime-500/50 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-lime-400 mx-auto" />
                <h4 className="font-sports text-2xl font-bold text-white">Message Received!</h4>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{name}</strong>. Our Hokandara desk team will contact you at <strong className="text-lime-400">{phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-bold text-black bg-lime-500 rounded-xl"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold block mb-1 font-mono">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold block mb-1 font-mono">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 7X XXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold block mb-1 font-mono">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold block mb-1 font-mono">
                    ENQUIRY TYPE
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Coaching Academy">Coaching &amp; Training Academy</option>
                    <option value="Tournament Booking">Tournament or Corporate League</option>
                    <option value="Bowling Machine">Bowling Machine Session</option>
                    <option value="Membership Plans">Long-term Net Membership</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold block mb-1 font-mono">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can ACK Indoor Cricket help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-extrabold text-black bg-lime-500 hover:bg-lime-400 active:scale-98 rounded-xl shadow-lg shadow-lime-500/20 font-sports transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
