"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      {/* Pulsating Ambient Outer Ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

      {/* Main Circular Floating Icon Button */}
      <motion.a
        href="https://wa.me/916363935011?text=Hi%20TurboRide%2C%20I%20want%20to%20reserve%20a%20supercar%20in%20Bangalore."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/40 border border-white/20 transition-all cursor-pointer"
      >
        <WhatsAppIcon className="w-7 h-7 shrink-0 fill-white" />
      </motion.a>
    </div>
  );
}
