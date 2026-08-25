"use client";

import { Key, Flame, Compass, Camera, Sparkles, Briefcase, Sun, ChevronRight, Check, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { EXPERIENCES_DATA } from "@/data/experiences";

interface ExperienceCategoriesSectionProps {
  onOpenBooking?: () => void;
}

export default function ExperienceCategoriesSection({ onOpenBooking }: ExperienceCategoriesSectionProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Key: <Key className="w-5 h-5 text-[#FF2D20]" />,
    Flame: <Flame className="w-5 h-5 text-amber-600" />,
    Zap: <Zap className="w-5 h-5 text-[#FF2D20]" />,
    Compass: <Compass className="w-5 h-5 text-amber-600" />,
    Camera: <Camera className="w-5 h-5 text-amber-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#FF2D20]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-amber-600" />,
    Sun: <Sun className="w-5 h-5 text-[#FF2D20]" />,
  };

  return (
    <section id="experiences" className="py-24 bg-white text-neutral-900 relative overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF2D20] block mb-2">
            Tailored Drive Offerings
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-black tracking-tight">
            SUPERCAR <span className="text-[#FF2D20]">EXPERIENCES</span>
          </h2>
          <p className="text-neutral-600 text-sm mt-3 font-normal">
            Curated highway drive sessions engineered for pure performance, thrill, safety pilot guidance, and 4K media capture.
          </p>
        </div>

        {/* Grid of 7 Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#f8f9fa] rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl hover:border-[#FF2D20]/40 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-52 w-full rounded-xl overflow-hidden mb-6 bg-neutral-200 border border-neutral-200">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  {/* Icon & Badge Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white/90 backdrop-blur-md border border-neutral-200 shadow-sm">
                      {iconMap[exp.iconName] || <Sparkles className="w-5 h-5 text-[#FF2D20]" />}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FF2D20] text-white text-[10px] font-heading font-bold uppercase tracking-wider shadow-sm">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF2D20] block mb-1">
                  {exp.idealFor}
                </span>
                <h3 className="font-heading text-xl font-bold text-black group-hover:text-[#FF2D20] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-neutral-600 text-xs mt-2 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="mt-4 pt-4 border-t border-neutral-200 space-y-2">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-[#FF2D20] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-6 mt-6 border-t border-neutral-200">
                {idx === 0 ? (
                  <button
                    type="button"
                    onClick={() => onOpenBooking ? onOpenBooking() : window.open("https://book.turboridesupercars.com/book", "_blank")}
                    className="w-full py-3 rounded-xl bg-black hover:bg-[#FF2D20] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <span>BOOK HIGHWAY DRIVE</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 rounded-xl bg-neutral-300 text-neutral-600 font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed opacity-80"
                  >
                    <span>COMING SOON</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
