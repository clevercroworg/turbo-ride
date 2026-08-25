"use client";

import { Car, Calendar, ShieldCheck, Key, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BookingProcessSectionProps {
  onOpenBooking?: () => void;
}

export default function BookingProcessSection({ onOpenBooking }: BookingProcessSectionProps) {
  const steps = [
    {
      num: "01",
      icon: <Car className="w-6 h-6 text-[#FF2D20]" />,
      title: "Choose Your Supercar",
      description: "Select your machine from our fleet, including the Porsche 718 Cayman, or pre-book upcoming V10 & V8 models."
    },
    {
      num: "02",
      icon: <Calendar className="w-6 h-6 text-[#FFD000]" />,
      title: "Select Laps & Slot",
      description: "Choose your preferred date, select a convenient time slot, and pick how many laps or highway runs you want to drive."
    },
    {
      num: "03",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Flexible Payment",
      description: "Pay a ₹1,000 slot reservation fee and settle the balance at the venue, or pay in full online to get an instant 15% discount!"
    },
    {
      num: "04",
      icon: <Key className="w-6 h-6 text-[#FF2D20]" />,
      title: "Briefing & Highway Run",
      description: "Arrive at the drive location, receive a complete cockpit briefing from your safety pilot, and take the wheel on the open highway!"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-white/10">
      {/* Supercar Highway Night Drive Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
          alt="Supercar Night Drive Highway Background"
          fill
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      {/* Background glow */}
      <div className="ambient-gold-glow top-1/4 left-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFD000] block mb-2">
            Seamless Reservation Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg">
            4 STEPS TO <span className="text-gradient-red">THE COCKPIT</span>
          </h2>
          <p className="text-neutral-300 text-sm mt-3 font-light leading-relaxed drop-shadow">
            Engineered for supercar purists and thrill-seekers. Zero paperwork friction, 100% digital speed.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/15 relative overflow-hidden flex flex-col justify-between group backdrop-blur-xl bg-black/60 hover:border-[#FF2D20]/40 transition-colors"
            >
              <div className="font-heading text-5xl font-black text-white/10 group-hover:text-[#FF2D20]/25 transition-colors absolute top-4 right-4">
                {step.num}
              </div>

              <div>
                <div className="p-3 rounded-xl bg-neutral-900 border border-white/15 w-fit mb-6 group-hover:border-[#FF2D20]/50 transition-colors shadow-md">
                  {step.icon}
                </div>

                <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#FF2D20] transition-colors">
                  {step.title}
                </h3>
                <p className="text-neutral-300 text-xs mt-2 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-heading font-semibold text-neutral-400 uppercase">
                <span>Step {step.num}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action bar */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onOpenBooking ? onOpenBooking() : window.open("https://book.turboridesupercars.com/book", "_blank")}
            className="px-8 py-4 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#FF2D20]/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>BOOK YOUR DRIVE NOW</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
