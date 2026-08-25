"use client";

import { useState, useEffect } from "react";
import { Shield, ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface NavigationProps {
  onOpenBooking: (carId?: string) => void;
}

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Supercar Fleet", href: "#fleet" },
    { name: "Engine Sound", href: "#sound-experience" },
    { name: "Experiences", href: "#experiences" },
    { name: "Safety Guidelines", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Support", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/80"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Brand Logo */}
            <a href="#" className="flex items-center">
              <Image
                src="/images/Logo-3-2048x308.png"
                alt="TurboRide Supercars Bangalore"
                width={204}
                height={31}
                priority
                className="h-8 sm:h-9 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 glass-pill px-6 py-2 rounded-full border border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest font-medium text-neutral-300 hover:text-[#FF2D20] transition-colors duration-200 relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF2D20] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/916363935011?text=Hi%20TurboRide%2C%20I%20would%20like%20to%20inquire%20about%20a%20supercar%20drive%20experience%20in%20Bengaluru."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white px-3.5 py-2 rounded-lg border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black bg-[#FF2D20] hover:bg-[#ff4d42] px-4 py-2 rounded-lg transition-all shadow-md shadow-[#FF2D20]/20"
              >
                <span>Book Experience</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button (No top bar Book button, shown inside burger menu) */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-white hover:text-[#FF2D20] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden border-b border-white/10"
          >
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">
                Navigation
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-2xl font-bold text-white hover:text-[#FF2D20] transition-colors flex items-center justify-between py-1 border-b border-white/5"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 text-neutral-600" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  Bangalore Concierge
                </span>
                <span className="text-[#FFD000] font-semibold">24/7 Live</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/919876543210?text=Hi%20TurboRide%2C%20I%20am%20interested%20in%20renting%20a%20supercar%20in%20Bangalore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-heading text-xs font-bold uppercase tracking-wider"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF2D20] text-black font-heading text-xs font-bold uppercase tracking-wider"
                >
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
