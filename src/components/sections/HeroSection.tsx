"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronRight, Flame, Gauge, Zap, Volume2, Sparkles, ShieldCheck, Play, Pause, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FLEET_DATA } from "@/data/fleet";

interface HeroSectionProps {
  onOpenBooking?: (carId?: string) => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [activeCarId, setActiveCarId] = useState("porsche-718-cayman");
  const [viewMode, setViewMode] = useState<'video' | 'exterior' | 'cockpit'>('video');
  const [isRevving, setIsRevving] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const activeCar = FLEET_DATA.find((c) => c.id === activeCarId) || FLEET_DATA[0];

  // Guaranteed video autoplay for mobile & desktop browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      if (viewMode === 'video') {
        const p = videoRef.current.play();
        if (p !== undefined) {
          p.then(() => setIsVideoPlaying(true)).catch(() => {});
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [activeCarId, viewMode]);

  const handleRevSound = () => {
    setIsRevving(true);
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    try {
      const audio = new Audio(activeCar.audioUrl);
      audio.volume = 0.95;
      currentAudioRef.current = audio;
      
      audio.play().then(() => {
        audio.onended = () => setIsRevving(false);
        setTimeout(() => setIsRevving(false), 3500);
      }).catch(() => {
        // Fallback Web Audio Synth
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = activeCarId === 'porsche-718-cayman' ? 'sawtooth' : activeCarId === 'lamborghini-huracan-evo' ? 'triangle' : 'square';
        osc.frequency.setValueAtTime(activeCar.audioFrequency, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(500, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(3500, ctx.currentTime + 0.8);
        filter.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 2.0);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.2);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 2.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        setTimeout(() => {
          osc.stop();
          ctx.close();
          setIsRevving(false);
        }, 2200);
      });
    } catch {
      setIsRevving(false);
    }
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const currentImage = viewMode === 'cockpit' && activeCar.cockpitImage ? activeCar.cockpitImage : activeCar.image;

  // Extracted Telemetry HUD so it can render in both mobile (inline) and desktop (right column)
  const renderTelemetryHUD = () => (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden group backdrop-blur-xl bg-black/60">
      {/* Top View Mode Switcher */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-heading font-bold text-white uppercase tracking-wider">
          <Sparkles className="w-4 h-4" style={{ color: activeCar.brandColor }} />
          <span>Telemetry HUD</span>
        </div>

        <div className="flex items-center gap-1 glass-pill p-1 rounded-lg border border-white/15 text-[10px]">
          <button
            onClick={() => setViewMode('video')}
            className={`px-2.5 py-1 rounded-md font-heading uppercase transition-colors flex items-center gap-1 ${
              viewMode === 'video' ? "bg-white text-black font-bold" : "text-neutral-300 hover:text-white"
            }`}
          >
            <Video className="w-3 h-3" />
            Video
          </button>
          <button
            onClick={() => setViewMode('exterior')}
            className={`px-2.5 py-1 rounded-md font-heading uppercase transition-colors ${
              viewMode === 'exterior' ? "bg-white text-black font-bold" : "text-neutral-300 hover:text-white"
            }`}
          >
            Exterior
          </button>
          <button
            onClick={() => setViewMode('cockpit')}
            className={`px-2.5 py-1 rounded-md font-heading uppercase transition-colors ${
              viewMode === 'cockpit' ? "bg-white text-black font-bold" : "text-neutral-300 hover:text-white"
            }`}
          >
            Cockpit
          </button>
        </div>
      </div>

      {/* Vehicle Highlight Card */}
      <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-white/15 bg-neutral-900 shadow-inner">
        <Image
          src={currentImage}
          alt={activeCar.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Video Play/Pause Overlay Button */}
        {viewMode === 'video' && (
          <button
            onClick={toggleVideoPlayback}
            className="absolute top-3 right-3 p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
          >
            {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          </button>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
              {activeCar.brand} Telemetry
            </span>
            <h3 className="font-heading text-xl font-extrabold">{activeCar.name}</h3>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-neutral-400 block uppercase">Status</span>
            <span className="font-heading text-sm font-bold" style={{ color: activeCar.brandColor }}>
              {activeCar.status === 'available' ? 'Available in Bengaluru' : 'Arriving Soon'}
            </span>
          </div>
        </div>
      </div>

      {/* Jet Fighter Telemetry Metrics Grid */}
      <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
        <div className="p-3 rounded-xl bg-neutral-950/90 border border-white/10">
          <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 uppercase font-semibold">
            <Flame className="w-3.5 h-3.5 text-[#FF2D20]" /> Output
          </div>
          <div className="font-heading text-base font-extrabold text-white mt-1">
            {activeCar.horsepower} HP
          </div>
          <div className="text-[9px] text-neutral-500 truncate mt-0.5">{activeCar.engine}</div>
        </div>

        <div className="p-3 rounded-xl bg-neutral-950/90 border border-white/10">
          <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 uppercase font-semibold">
            <Gauge className="w-3.5 h-3.5" style={{ color: activeCar.brandColor }} /> 0-100
          </div>
          <div className="font-heading text-base font-extrabold text-white mt-1">
            {activeCar.acceleration}
          </div>
          <div className="text-[9px] text-neutral-500 mt-0.5">Sprint Time</div>
        </div>

        <div className="p-3 rounded-xl bg-neutral-950/90 border border-white/10">
          <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 uppercase font-semibold">
            <Zap className="w-3.5 h-3.5 text-[#FF2D20]" /> Transmission
          </div>
          <div className="font-heading text-base font-extrabold text-white mt-1 text-xs">
            {activeCar.transmission.split(' ')[0]}
          </div>
          <div className="text-[9px] text-neutral-500 mt-0.5">Gearbox</div>
        </div>
      </div>

      {/* Quick Perks */}
      <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-white/10">
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <ShieldCheck className="w-4 h-4" /> Full Insurance Included
        </span>
        <span className="text-white font-heading font-medium">Fuel & Safety Pilot Included</span>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#050505] border-b border-white/10">
      {/* High-Definition Background Media Engine (Persistent Video + Smooth Fade Image) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Permanent Video Element — Never Unmounted */}
        {activeCar.heroVideo && (
          <video
            ref={(el) => {
              videoRef.current = el;
              if (el) {
                el.muted = true;
                el.defaultMuted = true;
                if (viewMode === 'video') {
                  const p = el.play();
                  if (p !== undefined) {
                    p.then(() => setIsVideoPlaying(true)).catch(() => {});
                  }
                }
              }
            }}
            key={activeCar.heroVideo}
            src={activeCar.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={activeCar.image}
            onLoadedMetadata={(e) => {
              e.currentTarget.muted = true;
              e.currentTarget.defaultMuted = true;
              if (viewMode === 'video') {
                e.currentTarget.play().then(() => setIsVideoPlaying(true)).catch(() => {});
              }
            }}
            onCanPlay={(e) => {
              if (viewMode === 'video') {
                e.currentTarget.play().then(() => setIsVideoPlaying(true)).catch(() => {});
              }
            }}
            onPlay={() => setIsVideoPlaying(true)}
            className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-700 ${
              viewMode === 'video' ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        )}

        {/* Exterior / Cockpit Image Overlay Layer */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            viewMode !== 'video' ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={currentImage}
            alt={`${activeCar.name} TurboRide Bangalore`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
        </div>

        {/* Subtle Bottom & Side Vignette Gradient for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline + Tabs + Buttons (Desktop original layout) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-2xl uppercase">
              THE ULTIMATE BENGALURU <br />
              <span
                className="bg-clip-text text-transparent drop-shadow-2xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, ${activeCar.brandColor} 100%)`,
                }}
              >
                SUPERCAR EXPERIENCE
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed drop-shadow-md">
              Step into the cockpit of the world&apos;s most iconic supercars for an unforgettable highway drive experience. Zero rental hassles, pure open-road freedom.
            </p>

            {/* Mobile-Only: Telemetry HUD inserted between headline & tabs */}
            <div className="block lg:hidden">
              {renderTelemetryHUD()}
            </div>

            {/* Car Switcher Tabs */}
            <div className="pt-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 drop-shadow">
                Select Vehicle Unveiling
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {FLEET_DATA.map((car) => (
                  <button
                    key={car.id}
                    onClick={() => {
                      setActiveCarId(car.id);
                      setViewMode('video');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all border ${
                      activeCarId === car.id
                        ? "text-black border-white shadow-2xl scale-105"
                        : "bg-black/70 backdrop-blur-md text-neutral-300 border-white/15 hover:border-white/40"
                    }`}
                    style={{
                      backgroundColor: activeCarId === car.id ? car.brandColor : undefined,
                    }}
                  >
                    {car.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              {activeCar.status === 'available' ? (
                <button
                  type="button"
                  onClick={() => onOpenBooking ? onOpenBooking(activeCarId) : window.open("https://book.turboridesupercars.com/book", "_blank")}
                  className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-2xl inline-block cursor-pointer"
                >
                  <span
                    className="absolute inset-0 rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${activeCar.brandColor}, #FF2D20)`,
                    }}
                  />
                  <span className="relative flex items-center gap-3 px-8 py-4 rounded-[11px] bg-[#050505] text-white group-hover:bg-[#FF2D20] group-hover:text-black transition-all duration-300 font-heading font-bold">
                    <span>Book Your Drive</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 px-8 py-4 rounded-xl bg-neutral-800/80 border border-white/15 text-neutral-400 font-heading text-xs sm:text-sm font-bold uppercase tracking-widest cursor-not-allowed opacity-80"
                >
                  <span>Coming Soon</span>
                </button>
              )}

              <a
                href="#fleet"
                className="flex items-center gap-2.5 px-6 py-4 rounded-xl border border-white/20 bg-black/70 hover:bg-white/10 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all backdrop-blur-xl"
              >
                <span>View Fleet</span>
              </a>

              <button
                onClick={handleRevSound}
                className={`flex items-center gap-2.5 px-6 py-4 rounded-xl border font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all backdrop-blur-xl ${
                  isRevving
                    ? "bg-[#FFD000] text-black border-[#FFD000] shadow-2xl animate-pulse"
                    : "bg-black/70 text-white border-white/20 hover:bg-white/10"
                }`}
              >
                <Volume2 className="w-4 h-4 text-[#FF2D20]" />
                <span>{isRevving ? "Revving Exhaust..." : "Rev Real Engine"}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Telemetry HUD (Desktop only — mobile version is rendered inline above) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            {renderTelemetryHUD()}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
