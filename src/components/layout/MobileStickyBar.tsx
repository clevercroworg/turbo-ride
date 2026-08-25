"use client";

import { Calendar, ChevronRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface MobileStickyBarProps {
  onOpenBooking?: (carId?: string) => void;
}

export default function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] bg-[#050505]/95 backdrop-blur-2xl border-t border-white/15 shadow-2xl shadow-black">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto w-full">
        <a
          href="https://wa.me/916363935011?text=Hi%20TurboRide%2C%20I%20am%20interested%20in%20a%20supercar%20drive%20experience%20in%20Bangalore."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap active:scale-[0.98]"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://turboride.in/ticket/book-now"
          className="flex items-center justify-center gap-1.5 py-3 px-3 sm:px-4 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF2D20]/25 transition-all whitespace-nowrap active:scale-[0.98] cursor-pointer"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span>Book Drive</span>
          <ChevronRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
}
