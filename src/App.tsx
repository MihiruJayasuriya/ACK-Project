/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BuiltForCricketSection } from './components/BuiltForCricketSection';
import { SessionSelectorSection } from './components/SessionSelectorSection';
import { BookingWizard } from './components/BookingWizard';
import { LocationRadarSection } from './components/LocationRadarSection';
import { StepsWorkflowSection } from './components/StepsWorkflowSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { BookingLookupModal } from './components/BookingLookupModal';
import { Footer } from './components/Footer';
import { SessionTypeId, ConfirmedBooking } from './types';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('home');
  const [selectedSessionForBooking, setSelectedSessionForBooking] = useState<SessionTypeId>('softball');
  const [isLookupOpen, setIsLookupOpen] = useState<boolean>(false);

  const scrollTo = (elementId: string) => {
    setActiveNav(elementId);
    if (elementId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookFromHero = () => {
    scrollTo('booking-engine');
  };

  const handleSeeSessions = () => {
    scrollTo('sessions-section');
  };

  const handleSelectAndBookSession = (sessionId: SessionTypeId) => {
    setSelectedSessionForBooking(sessionId);
    scrollTo('booking-engine');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-lime-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeNav}
        onNavigate={(id) => {
          if (id === 'home') scrollTo('home');
          else if (id === 'about') scrollTo('about-section');
          else if (id === 'gallery') scrollTo('gallery-section');
          else if (id === 'booking') scrollTo('booking-engine');
          else if (id === 'faq') scrollTo('faq-section');
          else if (id === 'contact') scrollTo('contact-section');
        }}
        onOpenBookingLookup={() => setIsLookupOpen(true)}
        onOpenBooking={() => scrollTo('booking-engine')}
      />

      <main className="flex-1">
        {/* Hero Section matching Screenshot 1 */}
        <div id="home">
          <HeroSection
            onBookClick={handleBookFromHero}
            onSeeSessionsClick={handleSeeSessions}
          />
        </div>

        {/* Built for Cricket Section matching Screenshot 2 */}
        <BuiltForCricketSection
          onBookClick={handleBookFromHero}
          onViewPracticeOptions={handleSeeSessions}
        />

        {/* Pick Your Session Interactive Cards matching Screenshot 3 */}
        <SessionSelectorSection
          onSelectAndBook={handleSelectAndBookSession}
        />

        {/* Interactive 5-Step Booking Engine matching Screenshots 9, 10, 11, 12 */}
        <div id="booking-engine">
          <BookingWizard
            initialSessionId={selectedSessionForBooking}
          />
        </div>

        {/* Location & Interactive Radar Map matching Screenshot 4 */}
        <LocationRadarSection
          onBookClick={handleBookFromHero}
        />

        {/* How Booking Works 3 Steps matching Screenshot 5 */}
        <StepsWorkflowSection
          onCheckSessionsClick={handleBookFromHero}
        />

        {/* Testimonials Carousel matching Screenshot 6 */}
        <TestimonialsSection />

        {/* Gallery Section matching Screenshot 7 */}
        <GallerySection />

        {/* About ACK Indoor Cricket matching Screenshot 13 */}
        <AboutSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Visit & Contact Section matching Screenshot 14 */}
        <ContactSection />
      </main>

      {/* Booking Lookup / Management Modal */}
      <BookingLookupModal
        isOpen={isLookupOpen}
        onClose={() => setIsLookupOpen(false)}
        onNewBookingClick={() => {
          setIsLookupOpen(false);
          scrollTo('booking-engine');
        }}
      />

      {/* Footer */}
      <Footer
        onNavigate={scrollTo}
        onOpenBooking={() => scrollTo('booking-engine')}
      />
    </div>
  );
}
