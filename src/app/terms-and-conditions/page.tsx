import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms & Conditions — TurboRide Supercars",
  description:
    "The terms and conditions governing your use of turboridesupercars.com and the supercar driving experiences provided by TurboRide BLR Private Limited.",
};

export default function TermsAndConditionsPage() {
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
              className="rounded-md px-2.5 py-1.5 font-medium text-neutral-400 hover:text-white transition-colors sm:px-3"
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
              className="rounded-md px-2.5 py-1.5 font-medium text-[#FF2D20] transition-colors sm:px-3 font-semibold"
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
              Terms &amp; Conditions
            </p>
            <h1 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-sm text-neutral-400">Last updated 24 August 2026</p>
          </div>
        </div>

        {/* Legal Text */}
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-8 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p className="leading-relaxed text-neutral-300">
              These Terms and Conditions, together with our{" "}
              <Link className="text-[#FF2D20] hover:underline" href="/privacy-policy">
                Privacy Policy
              </Link>{" "}
              and any other applicable policies (“Terms”), form a binding agreement between TurboRide BLR Private Limited (operating turboridesupercars.com, the “Website Owner”, “we”, “us” or “our”) and you (“you” or “your”), and relate to your use of our website, goods and services — including our supercar driving experiences (collectively, the “Services”).
            </p>
            <p className="leading-relaxed text-neutral-300">
              By using our website and availing the Services, you confirm that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Your Use of the Services
              </h2>
              <p className="leading-relaxed text-neutral-300">
                Your use of this website and the Services is subject to the following terms of use:
              </p>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>You agree to provide true, accurate and complete information during and after registration or booking, and you are responsible for all activity carried out through your registered account.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services for any specific purpose. You acknowledge that such information may contain inaccuracies or errors, and we exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>The contents of the website and the Services are proprietary to us, and you will not acquire any intellectual property rights, title or interest in its contents.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>You acknowledge that unauthorised use of the website or the Services may lead to action against you under these Terms or applicable laws.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>You agree to pay the charges associated with availing the Services.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>You agree not to use the website and/or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or by Indian or local laws that may apply to you.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>You acknowledge that the website and Services may contain links to third-party websites. On accessing these links, you will be governed by the terms of use, privacy policy and other policies of those third-party websites.</span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Safety &amp; Eligibility
              </h2>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Supercar driving experiences carry inherent risk. You must follow all safety briefings, instructions and rules provided by our staff at all times.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>You must meet the minimum age, valid driving licence and any other eligibility requirements communicated at the time of booking to participate in a driving experience.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>We reserve the right to refuse or stop participation, without refund beyond what our Refund Policy allows, where a guest is unfit to participate, under the influence of alcohol or drugs, or acting unsafely or in breach of instructions.</span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Bookings &amp; Payment
              </h2>
              <p className="leading-relaxed text-neutral-300">
                When you initiate a transaction to avail the Services, you enter into a legally binding and enforceable contract with us for those Services. You agree to pay all charges associated with your booking.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Refunds
              </h2>
              <p className="leading-relaxed text-neutral-300">
                You may be entitled to a refund of amounts paid in accordance with our{" "}
                <Link className="text-[#FF2D20] hover:underline" href="/refund-policy">
                  Cancellation &amp; Refund Policy
                </Link>
                , including where we are unable to provide a Service. The timelines for such refunds are as set out in that policy. If you do not raise a refund claim within the stipulated time, you will be ineligible for a refund.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Force Majeure
              </h2>
              <p className="leading-relaxed text-neutral-300">
                Notwithstanding anything contained in these Terms, neither party shall be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Governing Law &amp; Jurisdiction
              </h2>
              <p className="leading-relaxed text-neutral-300">
                These Terms, and any dispute or claim relating to them or their enforceability, shall be governed by and construed in accordance with the laws of India. All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Contact Us
              </h2>
              <p className="leading-relaxed text-neutral-300">
                All concerns or communications relating to these Terms must be sent to us at{" "}
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
