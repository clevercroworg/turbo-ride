"use client";

import { Phone, Calendar, ShieldCheck, Sparkles, Zap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface FinalCTASectionProps {
  onOpenBooking?: () => void;
}

export default function FinalCTASection({ onOpenBooking }: FinalCTASectionProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#f8f9fa] relative overflow-hidden border-t border-neutral-200">
      {/* Light Studio Background Lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-neutral-200/60 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[11px] font-semibold uppercase tracking-widest text-[#FF2D20] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2D20]" />
            <span>BENGALURU SUPERCAR EXPERIENCES</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight">
            BOOK YOUR DREAM <span className="text-[#FF2D20]">DRIVE TODAY</span>
          </h2>

          <p className="text-neutral-600 text-xs sm:text-base max-w-xl mx-auto mt-2 font-normal leading-relaxed">
            The driver&apos;s seat of our Porsche 718 Cayman is waiting. Secure your time slot online or book directly via WhatsApp for the ultimate STRR highway experience.
          </p>

          {/* Action Button Stack */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="https://book.turboridesupercars.com"
              className="px-6 py-3 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#FF2D20]/20 transition-all hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVE NOW</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/916363935011?text=Hi%20TurboRide%2C%20I%20want%20to%20reserve%20a%20supercar%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+916363935011"
              className="px-6 py-3 rounded-xl bg-neutral-100 border border-neutral-300 hover:bg-neutral-200 text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#FF2D20]" />
              <span>Call Hotline</span>
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600">
            <span className="flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Full Commercial Insurance
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Zap className="w-4 h-4 text-[#FF2D20]" />
              Zero Security Deposit
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
