"use client";

import { useState } from "react";
import { X, Zap, Gauge, Flame, Shield, Check, Calendar, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Car } from "@/data/fleet";
import Image from "next/image";

interface CarDetailModalProps {
  car: Car | null;
  onClose: () => void;
  onBookCar?: (carId: string) => void;
}

export default function CarDetailModal({ car, onClose, onBookCar }: CarDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!car) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content with max height & sticky header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col overflow-hidden"
        >
          {/* Sticky Close Button Bar - Always Pinned at Top Right */}
          <div className="sticky top-0 z-30 flex items-center justify-between bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 px-5 py-3.5 sm:px-8 sm:py-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD000]">
                {car.brand} Performance Specification
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close vehicle specifications"
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#FF2D20] text-white hover:text-black border border-white/20 transition-all shrink-0 shadow-md"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-5 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Gallery Column */}
              <div className="space-y-4">
                <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                  <Image
                    src={car.gallery[activeImageIndex] || car.image}
                    alt={car.name}
                    fill
                    className="object-cover transition-all duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-heading">
                      {car.statusLabel}
                    </span>
                    <span className="text-neutral-400">
                      {activeImageIndex + 1} / {car.gallery.length} Photos
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {car.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? "border-[#FF2D20] scale-95" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`${car.name} thumbnail`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Spec Info Column */}
              <div className="space-y-6 flex flex-col justify-between">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-black text-white">
                    {car.name}
                  </h2>
                  <p className="text-neutral-400 text-xs mt-2 italic leading-relaxed">
                    &ldquo;{car.tagline}&rdquo;
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="p-3 rounded-xl bg-neutral-900/80 border border-white/5">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-neutral-400">
                        <Flame className="w-3.5 h-3.5 text-[#FF2D20]" />
                        Power Output
                      </div>
                      <div className="font-heading text-lg font-bold text-white mt-1">
                        {car.horsepower} HP
                      </div>
                      <div className="text-[10px] text-neutral-500">{car.engine}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-900/80 border border-white/5">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-neutral-400">
                        <Gauge className="w-3.5 h-3.5 text-[#FFD000]" />
                        Acceleration
                      </div>
                      <div className="font-heading text-lg font-bold text-white mt-1">
                        {car.acceleration}
                      </div>
                      <div className="text-[10px] text-neutral-500">0 to 100 km/h</div>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-900/80 border border-white/5">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-neutral-400">
                        <Zap className="w-3.5 h-3.5 text-[#FF2D20]" />
                        Top Velocity
                      </div>
                      <div className="font-heading text-lg font-bold text-white mt-1">
                        {car.topSpeed}
                      </div>
                      <div className="text-[10px] text-neutral-500">{car.drivetrain}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-900/80 border border-white/5">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-neutral-400">
                        <Shield className="w-3.5 h-3.5 text-emerald-400" />
                        Package Type
                      </div>
                      <div className="font-heading text-sm font-bold text-[#FFD000] mt-1">
                        Experience Drive
                      </div>
                      <div className="text-[10px] text-neutral-500">Fuel & Pilot Included</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Key Equipment & Specification
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {car.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF2D20] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                  {car.status === 'available' ? (
                    <a
                      href="https://book.turboridesupercars.com"
                      className="flex-1 py-3.5 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FF2D20]/20 transition-all text-center cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Drive Experience</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 py-3.5 rounded-xl bg-neutral-800 border border-white/10 text-neutral-400 font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed opacity-80"
                    >
                      <span>Arriving Soon</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
