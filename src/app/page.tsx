"use client";

import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import HeroSection from "@/components/sections/HeroSection";
import BrandCarouselStrip from "@/components/sections/BrandCarouselStrip";
import FeaturedFleetSection from "@/components/sections/FeaturedFleetSection";
import SoundSimulatorSection from "@/components/sections/SoundSimulatorSection";
import ExperienceCategoriesSection from "@/components/sections/ExperienceCategoriesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import LuxuryShowcaseSection from "@/components/sections/LuxuryShowcaseSection";
import VideoShowcaseSection from "@/components/sections/VideoShowcaseSection";
import CustomerReviewsSection from "@/components/sections/CustomerReviewsSection";
import BookingProcessSection from "@/components/sections/BookingProcessSection";
import RequirementsSection from "@/components/sections/RequirementsSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import QuickBookingModal from "@/components/ui/QuickBookingModal";
import CarDetailModal from "@/components/ui/CarDetailModal";
import { Car } from "@/data/fleet";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingCarId, setSelectedBookingCarId] = useState("porsche-718-cayman");
  const [selectedDetailCar, setSelectedDetailCar] = useState<Car | null>(null);

  const handleOpenBooking = (carId?: string) => {
    if (carId) setSelectedBookingCarId(carId);
    setIsBookingOpen(true);
  };

  const handleOpenDetail = (car: Car) => {
    setSelectedDetailCar(car);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#FF2D20] selection:text-white">
      {/* Navigation */}
      <Navigation onOpenBooking={handleOpenBooking} />

      {/* 1. Improvised Supercar Hero Section (Apple / Porsche Luxury Unveiling) */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* 2. All Brand Car Marquee Carousel Strip */}
      <BrandCarouselStrip />

      {/* 3. Featured Fleet Section (High-Contrast Platinum Light Studio) */}
      <FeaturedFleetSection
        onOpenBooking={handleOpenBooking}
        onOpenDetail={handleOpenDetail}
      />

      {/* 4. Interactive Acoustic Engine Sound Simulator (Dark Studio) */}
      <SoundSimulatorSection />

      {/* 5. Experience Categories (Crisp Luxury Light Studio) */}
      <ExperienceCategoriesSection onOpenBooking={() => handleOpenBooking()} />

      {/* 6. Why Choose Us (Dark Carbon Studio & Metrics) */}
      <WhyChooseUsSection />

      {/* 7. Luxury Edge-to-Edge Showcase Gallery */}
      <LuxuryShowcaseSection />

      {/* 8. Video & Creator Reel Showcase (Dark Studio Cinema) */}
      <VideoShowcaseSection />

      {/* 9. Verified Customer Reviews (Platinum Light Section) */}
      <CustomerReviewsSection />

      {/* 10. 4-Step Booking Process Timeline (Dark Studio) */}
      <BookingProcessSection onOpenBooking={() => handleOpenBooking()} />

      {/* 11. Rental Requirements & Eligibility Check (Platinum Light Section) */}
      <RequirementsSection />

      {/* 12. Dobaspet STRR Expressway Google Maps Location Section */}
      <LocationSection />

      {/* 13. FAQ Accordion */}
      <FAQSection />

      {/* 14. VIP Concierge Contact & Inquiries Form */}
      <ContactSection />

      {/* 15. Final High-Conversion CTA (Dark Brembo Red Studio) */}
      <FinalCTASection onOpenBooking={() => handleOpenBooking()} />

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Touch-Optimized Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={handleOpenBooking} />

      {/* Desktop Pulsating Floating WhatsApp Concierge Bar */}
      <WhatsAppFloatingButton />

      {/* Modals & Drawers */}
      <QuickBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedCarId={selectedBookingCarId}
      />

      <CarDetailModal
        car={selectedDetailCar}
        onClose={() => setSelectedDetailCar(null)}
        onBookCar={handleOpenBooking}
      />
    </main>
  );
}
