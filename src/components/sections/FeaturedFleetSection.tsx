"use client";

import { useState } from "react";
import { Gauge, Flame, Zap, ChevronRight, Info, Sparkles, Play, Youtube, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FLEET_DATA, Car } from "@/data/fleet";

interface FeaturedFleetSectionProps {
  onOpenBooking?: (carId: string) => void;
  onOpenDetail: (car: Car) => void;
}

export default function FeaturedFleetSection({
  onOpenBooking,
  onOpenDetail,
}: FeaturedFleetSectionProps) {
  const [filter, setFilter] = useState<'all' | 'available' | 'coming-soon'>('all');
  const [activeYtId, setActiveYtId] = useState<string | null>(null);

  const filteredFleet = FLEET_DATA.filter((car) => {
    if (filter === 'available') return car.status === 'available';
    if (filter === 'coming-soon') return car.status === 'coming-soon' || car.status === 'vip-reserve';
    return true;
  });

  return (
    <section id="fleet" className="py-24 bg-[#f8f9fa] text-neutral-900 relative overflow-hidden border-b border-neutral-200">
      {/* High-Contrast Studio Subtle Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-neutral-200/50 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF2D20] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bangalore Supercar Lineup</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-black tracking-tight">
              FEATURED <span className="text-[#FF2D20]">FLEET</span>
            </h2>
            <p className="text-neutral-600 text-sm max-w-xl mt-3 font-normal">
              Meticulously maintained, highperformance supercars. Available for guided highway drives and photoshoots.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-neutral-200/80 p-1.5 rounded-xl border border-neutral-300 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? "bg-black text-white shadow-md"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              All Vehicles ({FLEET_DATA.length})
            </button>
            <button
              onClick={() => setFilter('available')}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider transition-all ${
                filter === 'available'
                  ? "bg-black text-white shadow-md"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Available Now
            </button>
            <button
              onClick={() => setFilter('coming-soon')}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider transition-all ${
                filter === 'coming-soon'
                  ? "bg-black text-white shadow-md"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xl hover:shadow-2xl hover:border-[#FF2D20]/40 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 bg-neutral-100 border border-neutral-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
                        car.status === 'available'
                          ? "bg-emerald-500 text-white"
                          : "bg-amber-500 text-black"
                      }`}
                    >
                      {car.status === 'available' ? 'Available Now in Bengaluru' : 'Arriving Soon'}
                    </span>
                  </div>

                  {/* View Details Overlay trigger */}
                  <button
                    onClick={() => onOpenDetail(car)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-black hover:bg-[#FF2D20] hover:text-white transition-colors"
                    title="View Full Specifications"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Car Title & Tagline */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-black group-hover:text-[#FF2D20] transition-colors">
                      {car.name}
                    </h3>
                    <span className="text-xs font-semibold text-neutral-500 font-heading">
                      {car.year}
                    </span>
                  </div>
                  <p className="text-neutral-600 text-xs mt-1 line-clamp-2 leading-relaxed">
                    {car.tagline}
                  </p>
                </div>

                {/* Key Specs Breakdown Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-200 mb-6 text-center">
                  <div className="p-2.5 rounded-lg bg-neutral-100">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-500 uppercase font-semibold">
                      <Flame className="w-3 h-3 text-[#FF2D20]" /> HP
                    </div>
                    <div className="font-heading text-sm font-bold text-black mt-0.5">
                      {car.horsepower}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-neutral-100">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-500 uppercase font-semibold">
                      <Gauge className="w-3 h-3 text-amber-600" /> 0-100
                    </div>
                    <div className="font-heading text-sm font-bold text-black mt-0.5">
                      {car.acceleration}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-neutral-100">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-500 uppercase font-semibold">
                      <Zap className="w-3 h-3 text-[#FF2D20]" /> Gearbox
                    </div>
                    <div className="font-heading text-sm font-bold text-black mt-0.5 text-xs truncate">
                      {car.transmission.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Booking Actions */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-[10px] uppercase font-semibold text-neutral-500">Package Type</div>
                  <div className="font-heading text-xs font-bold text-neutral-800">
                    Drive Experience
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenDetail(car)}
                    className="p-3 rounded-xl bg-neutral-100 border border-neutral-300 hover:bg-neutral-200 text-black transition-colors"
                    title="Full Specs"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  {car.status === 'available' ? (
                    <a
                      href="https://book.turboridesupercars.com"
                      className="px-4 py-3 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-[#FF2D20]/20 transition-all inline-flex cursor-pointer"
                    >
                      <span>Reserve Drive</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Videos — Bottom of Fleet Section */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF2D20] mb-2">
            <Youtube className="w-3.5 h-3.5" />
            <span>Watch on YouTube</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-black tracking-tight mb-6">
            SUPERCAR <span className="text-[#FF2D20]">VIDEOS</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { id: "cDyVdCg5vJo", title: "supercar experience. review", category: "REVIEW" },
              { id: "zDEWhGPGXJ8", title: "supercar experience. review", category: "REVIEW" },
              { id: "uGpnjB50Bb0", title: "supercar experience. Customer drive", category: "EXPERIENCE" },
            ].map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onClick={() => setActiveYtId(video.id)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-neutral-200 hover:border-[#FF2D20]/50 bg-white transition-all shadow-md hover:shadow-xl"
              >
                {/* YouTube Thumbnail */}
                <div className="relative aspect-video w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-[10px] font-heading font-bold uppercase tracking-wider text-[#FF2D20]">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-11 rounded-xl bg-[#FF0000] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF0000]/10 flex items-center justify-center shrink-0">
                    <Youtube className="w-4 h-4 text-[#FF0000]" />
                  </div>
                  <h4 className="font-heading text-xs font-bold text-black group-hover:text-[#FF2D20] transition-colors leading-snug">
                    {video.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* YouTube Lightbox Modal */}
      <AnimatePresence>
        {activeYtId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <button
              onClick={() => setActiveYtId(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl"
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeYtId}?autoplay=1&rel=0`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
