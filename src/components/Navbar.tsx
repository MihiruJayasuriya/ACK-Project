import React, { useState } from 'react';
import { Menu, X, ArrowRight, Search, Calendar, Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBookingLookup: () => void;
  onOpenBooking: () => void;
}

export function Navbar({
  activeSection,
  onNavigate,
  onOpenBookingLookup,
  onOpenBooking,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'booking', label: 'Booking' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark / Brand Zone */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus-visible:outline-none"
        >
          {/* Logo Crest */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-600 flex items-center justify-center p-0.5 shadow-lg shadow-lime-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
              <span className="font-sports font-black text-sm tracking-tighter text-lime-400">ACK</span>
            </div>
          </div>
          <div>
            <div className="font-sports text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
              ACK INDOOR CRICKET
            </div>
            <div className="text-[11px] font-medium tracking-widest uppercase text-lime-400/90 font-mono -mt-0.5">
              HOKANDARA
            </div>
          </div>
        </button>

        {/* Zone 2: 4-6 Nav links styled cleanly as modern floating segmented pill bar */}
        <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/80 p-1.5 rounded-full border border-neutral-800/90 shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-lime-500 text-black shadow-md shadow-lime-500/30'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/70'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenBookingLookup}
            className="px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-xl border border-neutral-800 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Search className="w-3.5 h-3.5 text-lime-400" />
            Check Booking
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-black bg-lime-500 hover:bg-lime-400 active:scale-95 rounded-xl shadow-lg shadow-lime-500/25 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap font-sports tracking-wide"
          >
            <span>Book now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-bold text-black bg-lime-500 rounded-lg shadow-md font-sports"
          >
            Book
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-neutral-950/98 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-lime-500 text-black font-bold'
                      : 'bg-neutral-900/60 text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingLookup();
              }}
              className="w-full py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center gap-2"
            >
              <Search className="w-3.5 h-3.5 text-lime-400" />
              Check Existing Booking
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-sm font-bold text-black bg-lime-500 rounded-xl flex items-center justify-center gap-2 font-sports"
            >
              <span>Book a session now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
