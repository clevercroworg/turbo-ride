import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy — TurboRide Supercars",
  description:
    "TurboRide Supercars offers a 7-day refund policy. Learn how cancellations, refunds and rescheduling work for our supercar driving experiences.",
};

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0b0d] text-white selection:bg-[#FF2D20] selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0d]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link className="flex items-center" href="/">
            <Image
              src="/images/Logo-3-2048x308.png"
              alt="TurboRide Supercars"
              width={204}
              height={31}
              priority
              className="h-8 sm:h-9 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>
          <nav className="flex items-center gap-1 text-xs sm:text-sm">
            <Link
              className="rounded-md px-2.5 py-1.5 font-medium text-[#FF2D20] transition-colors sm:px-3 font-semibold"
              href="/refund-policy"
            >
              Refund Policy
            </Link>
            <Link
              className="rounded-md px-2.5 py-1.5 font-medium text-neutral-400 hover:text-white transition-colors sm:px-3"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="rounded-md px-2.5 py-1.5 font-medium text-neutral-400 hover:text-white transition-colors sm:px-3"
              href="/terms-and-conditions"
            >
              Terms
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Banner Area */}
        <div className="border-b border-white/10 bg-[#121215]">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
            <Link
              className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
              href="/"
            >
              ← Back to overview
            </Link>
            <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2D20]">
              Cancellation &amp; Refund
            </p>
            <h1 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="mt-4 text-sm text-neutral-400">Last updated 24 August 2026</p>
          </div>
        </div>

        {/* Legal Text */}
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-8 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p className="leading-relaxed text-neutral-300">
              TurboRide BLR Private Limited (operating turboridesupercars.com, “TurboRide”, “we”, “us” or “our”) wants every guest to be confident when booking a supercar driving experience with us. This policy explains when you can cancel a booking, when you are eligible for a refund, and how refunds are processed.
            </p>

            <div className="rounded-md border border-[#FF2D20]/30 bg-[#FF2D20]/10 p-4 text-sm leading-relaxed text-white">
              <strong>7-day refund window.</strong> You may request a full refund within 7 days of your booking date, provided your scheduled experience has not yet taken place. After this 7-day period, all sales are final and no refunds will be issued.
            </div>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                7-Day Refund Window
              </h2>
              <p className="leading-relaxed text-neutral-300">
                If you wish to cancel and receive a refund, you must submit your request within 7 days of the date you placed your booking, and before your scheduled experience date — whichever comes first. Requests that meet both conditions are eligible for a full refund of the amount paid.
              </p>
              <p className="leading-relaxed text-neutral-300">
                Once 7 days have passed from your booking date, or once your scheduled experience has taken place, the booking is considered final and is non-refundable.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                How to Cancel or Request a Refund
              </h2>
              <p className="leading-relaxed text-neutral-300">
                To cancel a booking or request a refund, contact our Customer Experience team at{" "}
                <a href="mailto:hello@turboridesupercars.com" className="text-[#FF2D20] hover:underline">
                  hello@turboridesupercars.com
                </a>{" "}
                with your booking reference and the email address used to book. We recommend submitting your request as early as possible so we can action it within the 7-day window.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Rescheduling
              </h2>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Subject to availability, you may request to reschedule your experience to a later date instead of cancelling.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Rescheduling requests should be made as early as possible, and are always subject to slot and vehicle availability on your preferred date.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Rescheduling does not extend or reset the 7-day refund window that began on your original booking date.</span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Cancellations by TurboRide
              </h2>
              <p className="leading-relaxed text-neutral-300">
                On rare occasions we may need to cancel or postpone an experience due to circumstances outside our control — including adverse weather, unsafe track or road conditions, vehicle unavailability, or other operational or safety reasons. In such cases you may choose to reschedule to another available date at no extra cost, or receive a full refund of the amount paid, regardless of the 7-day window.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Non-Refundable Situations
              </h2>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Requests made after the 7-day refund window has ended.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>No-shows, or arriving too late to safely complete the booked experience.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Guests unable to participate for failing to meet eligibility, safety or licence requirements communicated at the time of booking.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Experiences that have already been completed.</span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                How Refunds Are Processed
              </h2>
              <p className="leading-relaxed text-neutral-300">
                Approved refunds are issued to the original payment method used at the time of booking. Once approved, it typically takes 6–8 business days for the refund to reflect in your account, depending on your bank or payment provider.
              </p>
              <p className="leading-relaxed text-neutral-300">
                We do not store your credit card, debit card or other card details; refunds are processed securely through our payment partner.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Contact Us
              </h2>
              <p className="leading-relaxed text-neutral-300">
                For any questions about cancellations or refunds, please reach us at{" "}
                <a href="mailto:hello@turboridesupercars.com" className="text-[#FF2D20] hover:underline">
                  hello@turboridesupercars.com
                </a>
                . TurboRide BLR Private Limited is registered in Bangalore, Karnataka, India.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Matching Footer */}
      <footer className="border-t border-white/10 bg-[#121215]">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <span className="font-heading text-lg font-semibold uppercase tracking-widest text-white">
                Turbo<span className="text-[#FF2D20]">Ride</span> Supercars
              </span>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                TurboRide BLR Private Limited — supercar driving experiences. Registered in Bangalore, Karnataka, India.
              </p>
            </div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link className="text-neutral-400 transition-colors hover:text-white" href="/refund-policy">
                Cancellation &amp; Refund Policy
              </Link>
              <Link className="text-neutral-400 transition-colors hover:text-white" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="text-neutral-400 transition-colors hover:text-white" href="/terms-and-conditions">
                Terms &amp; Conditions
              </Link>
              <a href="mailto:hello@turboridesupercars.com" className="text-neutral-400 transition-colors hover:text-white">
                hello@turboridesupercars.com
              </a>
            </nav>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-neutral-400">
            <p>© 2026 TurboRide BLR Private Limited. All rights reserved. turboridesupercars.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
