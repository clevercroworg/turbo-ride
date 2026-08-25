"use client";

import { useState } from "react";
import { X, ChevronRight, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FLEET_DATA } from "@/data/fleet";

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCarId?: string;
}

export default function QuickBookingModal({
  isOpen,
  onClose,
  selectedCarId = "porsche-718-cayman",
}: QuickBookingModalProps) {
  const [carId, setCarId] = useState(selectedCarId);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const activeCar = FLEET_DATA.find((c) => c.id === carId) || FLEET_DATA[0];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*NEW TURBORIDE SUPERCAR EXPERIENCE DRIVE REQUEST*%0A%0A` +
      `*Vehicle:* ${activeCar.name}%0A` +
      `*Package:* Highway Experience Drive%0A` +
      `*Client Name:* ${customerName || 'Luxury Client'}%0A` +
      `*Phone:* ${customerPhone || 'N/A'}%0A%0A` +
      `_Sent from TurboRide Supercars Official Website_`;

    const whatsappUrl = `https://wa.me/916363935011?text=${message}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const BOOKING_CAR_SLUG_MAP: Record<string, string> = {
    "porsche-718-cayman": "porsche-718",
    "lamborghini-huracan": "lambo-huracan",
    "ford-mustang-gt": "mustang-gt",
    "ferrari-488": "ferrari-488",
  };
  const targetCarSlug = BOOKING_CAR_SLUG_MAP[carId] || carId;
  const bookingPortalUrl = `https://book.turboridesupercars.com/book?car=${encodeURIComponent(targetCarSlug)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card with max height & sticky header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl max-h-[90vh] sm:max-h-[85vh] bg-[#101010] border border-white/15 rounded-2xl shadow-2xl z-10 flex flex-col overflow-hidden"
          >
            {/* Ambient Background Light */}
            <div className="ambient-red-glow -top-20 -right-20 opacity-30 pointer-events-none" />

            {/* Sticky Header - Pinned to Top so Close Button is ALWAYS Visible */}
            <div className="sticky top-0 z-30 flex items-center justify-between bg-[#101010]/95 backdrop-blur-md border-b border-white/10 px-5 py-4 sm:px-8 sm:py-5 shrink-0">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD000]">
                  Instant Drive Concierge
                </span>
                <h3 className="font-heading text-lg sm:text-2xl font-bold text-white leading-tight">
                  Book Your Drive Experience
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#FF2D20] text-white hover:text-black border border-white/20 transition-all shrink-0 ml-4 shadow-md"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
              <form onSubmit={handleWhatsAppBooking} className="space-y-6">
                {/* Car Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    1. Select Supercar
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {FLEET_DATA.map((car) => (
                      <button
                        key={car.id}
                        type="button"
                        onClick={() => setCarId(car.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                          carId === car.id
                            ? "bg-[#FF2D20]/15 border-[#FF2D20] text-white shadow-lg shadow-[#FF2D20]/20"
                            : "bg-neutral-900/60 border-white/10 text-neutral-400 hover:border-white/20"
                        }`}
                      >
                        <div className="font-heading text-sm font-bold truncate">{car.name}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{car.engine}</div>
                        <div className="mt-2 text-xs font-bold text-[#FFD000]">
                          ₹{car.pricePerDay.toLocaleString('en-IN')}/day
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikramaditya Rao"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#FF2D20] text-sm placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#FF2D20] text-sm placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                {/* Security & Perks note */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-white/5 text-xs text-neutral-400">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Includes Doorstep Delivery, Insured Coverage & 24/7 Concierge Support.</span>
                </div>

                {/* Action CTAs */}
                <div className="space-y-3 pt-2">
                  <a
                    href={bookingPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF2D20] to-[#E02619] hover:from-[#e02619] hover:to-[#c41e12] text-white font-heading text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FF2D20]/25 transition-all text-center"
                  >
                    <span>Instant Slot Booking Portal (Save 15%)</span>
                    <ChevronRight className="w-5 h-5" />
                  </a>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Book via WhatsApp Concierge</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
