"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "General Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || (!formData.phone && !formData.email)) {
      setErrorMsg("Please enter your name and at least a phone number or email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "general",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: `[${formData.inquiryType}] ${formData.message || "No additional message"}`,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          inquiryType: "General Inquiry",
          message: "",
        });
      } else {
        setErrorMsg(data.error || "Failed to send message. Please try again or reach out on WhatsApp.");
      }
    } catch {
      setErrorMsg("An unexpected error occurred. Please reach out to us via WhatsApp or Phone.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#050505] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Lighting Glow */}
      <div className="ambient-red-glow -top-20 left-1/4 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/20 text-xs font-semibold uppercase tracking-widest text-[#FFD000] mb-3 bg-black/60 backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5 text-[#FF2D20]" />
            <span>24/7 VIP Concierge Support</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
            GET IN TOUCH WITH <span className="text-gradient-red">TURBORIDE</span>
          </h2>
          <p className="text-neutral-300 text-sm mt-3 font-normal leading-relaxed">
            Have questions about custom highway routes, corporate bookings, brand shoots, or private gifting vouchers?
            Send us a message and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Card 1: General Inquiry */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FF2D20]/15 border border-[#FF2D20]/30 text-[#FF2D20] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">General Inquiries</span>
                  <h4 className="font-heading text-base font-bold text-white mt-0.5">
                    <a href="mailto:Hello@turboridesupercars.com" className="hover:text-[#FFD000] transition-colors">
                      Hello@turboridesupercars.com
                    </a>
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    For partnerships, brand collaborations, and general questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Card 2: Bookings */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FFD000]/15 border border-[#FFD000]/30 text-[#FFD000] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Drive Bookings Desk</span>
                  <h4 className="font-heading text-base font-bold text-white mt-0.5">
                    <a href="mailto:booking@turboridesupercars.com" className="hover:text-[#FFD000] transition-colors">
                      booking@turboridesupercars.com
                    </a>
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    For slot scheduling, corporate fleets, and custom drive packages.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Card 3: Direct Phone & WhatsApp */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Direct Hotline & WhatsApp</span>
                  <h4 className="font-heading text-base font-bold text-white mt-0.5">
                    <a href="tel:+916363935011" className="hover:text-emerald-400 transition-colors">
                      +91 63639 35011
                    </a>
                  </h4>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://wa.me/916363935011?text=Hi%20TurboRide%2C%20I%20have%20an%20inquiry%20regarding%20supercar%20experiences."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#25D366]/30 transition-all"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Chat WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Card 4: Operating Hours */}
            <div className="glass-card p-4 rounded-xl border border-white/5 bg-black/40 text-xs text-neutral-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FFD000]" /> Response SLA: Under 30 minutes
              </span>
              <span className="text-emerald-400 font-semibold">24/7 Active Concierge</span>
            </div>
          </div>

          {/* Right Interactive Form Box */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-10 rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-xl relative shadow-2xl"
            >
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Message Received!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your inquiry has been sent to our concierge team at{" "}
                    <span className="text-[#FFD000] font-semibold">Hello@turboridesupercars.com</span>. We will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading text-xs font-bold uppercase tracking-wider transition-all mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="font-heading text-xl font-bold text-white">
                      Send a Message to Concierge
                    </h3>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">
                      Direct Email Delivery
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Rao"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#FF2D20] text-sm placeholder:text-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#FF2D20] text-sm placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#FF2D20] text-sm placeholder:text-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#FF2D20] text-sm"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Supercar Highway Drive">Supercar Highway Drive Session</option>
                        <option value="Corporate / Group Event">Corporate / Group Event</option>
                        <option value="Photoshoot & Media Reel">Photoshoot & Media Reel</option>
                        <option value="Gifting & Luxury Vouchers">Gifting & Luxury Vouchers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Message / Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what dates, cars, or custom requirements you have in mind..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#FF2D20] text-sm placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF2D20] to-[#E02619] hover:from-[#e02619] hover:to-[#c41e12] text-white font-heading text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FF2D20]/25 transition-all cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending Message..." : "Submit Inquiry to Concierge"}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
