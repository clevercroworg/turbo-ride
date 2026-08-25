import { Shield, Instagram, MapPin, Phone, Mail, FileText } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  onOpenBooking?: () => void;
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-28 lg:pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-red-glow bottom-0 right-0 opacity-20" />
      <div className="ambient-gold-glow bottom-1/3 left-0 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Image
                  src="/images/Logo-3-2048x308.png"
                  alt="TURBORIDESUPERCARS.COM"
                  width={220}
                  height={33}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#FFD000]">
                TURBORIDESUPERCARS.COM
              </span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Bengaluru&apos;s premier supercar drive experience provider. Delivering guided open-road runs, high-performance V8 & V10 emotion, and 4K media packages.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/turboride9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#FF2D20]/50 hover:bg-[#FF2D20]/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4 text-[#FF2D20]" />
                <span>@turboride9</span>
              </a>

              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-medium text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Verified Fleet</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#FFD000]">
              Supercar Fleet
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <a href="#fleet" className="hover:text-[#FF2D20] transition-colors flex items-center gap-1">
                  Porsche 718 Cayman <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded">Available</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-[#FF2D20] transition-colors flex items-center gap-1">
                  Lamborghini Huracán EVO <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1 py-0.2 rounded">Soon</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-[#FF2D20] transition-colors flex items-center gap-1">
                  Ford Mustang GT V8 <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1 py-0.2 rounded">Soon</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Drive Offerings */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#FFD000]">
              DRIVE OFFERINGS
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><a href="#experiences" className="hover:text-white transition-colors">15 KM / 30 KM Highway Drives</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Safety Pilot Briefings</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">4K Photoshoots & Reels</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Driver Eligibility & Guidelines</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Support & FAQs</a></li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#FFD000]">
              VENUE & CONTACT
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF2D20] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://share.google/hYC1WSTormHHnemRF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-[#FF2D20] transition-colors block"
                  >
                    Turboride Experience Zone
                  </a>
                  <div className="text-[10px] text-neutral-400 mt-0.5">Dobaspet STRR Expressway • ~45 mins from Airport / Nagasandra</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+916363935011" className="text-white font-semibold hover:text-[#FF2D20] transition-colors">+91 63639 35011</a>
                  <div className="text-[10px] text-neutral-400 mt-0.5">Call / WhatsApp (11:00 AM – 5:00 PM)</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#FFD000] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <a href="mailto:booking@turboridesupercars.com" className="text-white font-semibold hover:text-[#FF2D20] transition-colors block">booking@turboridesupercars.com</a>
                    <span className="text-[10px] text-neutral-400">Bookings & Reservations</span>
                  </div>
                  <div>
                    <a href="mailto:hello@turboridesupercars.com" className="text-white font-semibold hover:text-[#FF2D20] transition-colors block">hello@turboridesupercars.com</a>
                    <span className="text-[10px] text-neutral-400">General Support & Inquiries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Policies Section */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#FF2D20]" />
            <span>Privacy Policy</span>
          </a>
          <span className="text-neutral-700">•</span>
          <a
            href="/refund-policy"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#FFD000]" />
            <span>Cancellation & Refund Policy</span>
          </a>
          <span className="text-neutral-700">•</span>
          <a
            href="/terms-and-conditions"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Terms & Conditions</span>
          </a>
          <span className="text-neutral-700">•</span>
          <a
            href="https://book.turboridesupercars.com/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 text-neutral-400 hover:text-white"
          >
            <Shield className="w-3.5 h-3.5 text-[#FFD000]" />
            <span>Admin Portal</span>
          </a>
        </div>

        {/* Bottom copyright & navigation */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© 2026 TURBORIDESUPERCARS.COM. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400 font-medium">
            <a href="https://book.turboridesupercars.com/book" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF2D20] transition-colors">Book Drive</a>
            <a href="#fleet" className="hover:text-white transition-colors">Supercar Fleet</a>
            <a href="#why-us" className="hover:text-white transition-colors">Eligibility & Safety</a>
            <a href="#faq" className="hover:text-white transition-colors">Support & FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
