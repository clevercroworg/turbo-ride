import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — TurboRide Supercars",
  description:
    "How TurboRide BLR Private Limited collects, uses, stores and protects your personal data when you use turboridesupercars.com.",
};

export default function PrivacyPolicyPage() {
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
              className="rounded-md px-2.5 py-1.5 font-medium text-[#FF2D20] transition-colors sm:px-3 font-semibold"
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
              Privacy
            </p>
            <h1 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-neutral-400">Last updated 24 August 2026</p>
          </div>
        </div>

        {/* Legal Text */}
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-8 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p className="leading-relaxed text-neutral-300">
              This Privacy Policy (“Policy”) explains how TurboRide BLR Private Limited (operating turboridesupercars.com, “we”, “us” or “our”) collects, uses, handles and processes the data you provide in connection with booking or using our supercar driving experiences and related services. By using this website or availing our services, you agree to this Policy and consent to our use, storage, disclosure and transfer of your information as described here.
            </p>
            <p className="leading-relaxed text-neutral-300">
              We are committed to ensuring that your privacy is protected in accordance with applicable laws and regulations in India. We encourage you to read this Policy so you understand how your data is handled. We may update this Policy from time to time, so please check this page for the latest version.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Data We Collect
              </h2>
              <p className="leading-relaxed text-neutral-300">
                We may collect the following information from you:
              </p>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Your name.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Contact information including address, email address and phone number.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Booking details such as your preferred experience, date, vehicle and number of guests.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Driving licence and age or eligibility details where required for safety and legal compliance.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Demographic information, preferences or interests.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Any other personal data reasonably required to provide our services to you.</span>
                </li>
              </ul>
              <p className="leading-relaxed text-neutral-400 text-xs sm:text-sm">
                The meaning of “Personal Data” is as defined under applicable Indian laws.
              </p>
              <div className="rounded-md border border-[#FF2D20]/30 bg-[#FF2D20]/10 p-4 text-sm leading-relaxed text-white">
                <strong>We never store your card details.</strong> As required under applicable Indian laws, we do not store your credit card, debit card or any similar card data. All payments are handled securely by our payment partner. Any data we collect is processed strictly in accordance with applicable laws and guidelines.
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                How We Use Your Data
              </h2>
              <p className="leading-relaxed text-neutral-300">
                We use your data to provide the experiences and services you book, including but not limited to the following purposes:
              </p>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Confirming, managing and delivering your booking.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Internal record keeping.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Improving our experiences and services.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Sending you updates about your booking, our experiences and special offers.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Communicating important information to you.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Internal training and quality assurance purposes.</span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Who We Share Your Data With
              </h2>
              <p className="leading-relaxed text-neutral-300">We may share your information with:</p>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Third parties and service providers who help us deliver experiences, process bookings, respond to your queries or fulfil your requests, and for other operational and business reasons.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Our group companies, to the extent relevant.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Our auditors or advisors, to the extent required for them to perform their services.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D20]" />
                  <span>Governmental bodies, regulatory authorities and law enforcement, pursuant to our legal obligations or compliance requirements.</span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                How We Use Cookies
              </h2>
              <p className="leading-relaxed text-neutral-300">
                We use cookies to collect information and better understand how guests use our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some parts of our website fully. We do not control cookies used by third parties — those third-party service providers have their own privacy policies governing how they use such information.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Your Rights
              </h2>
              <p className="leading-relaxed text-neutral-300">
                <strong className="text-white">Right to review.</strong> You can review the data you have provided and request that we correct or amend it, to the extent feasible as determined by us. We are not responsible for the authenticity of the data or information you provide.
              </p>
              <p className="leading-relaxed text-neutral-300">
                <strong className="text-white">Withdrawal of consent.</strong> You may choose not to provide your data, or withdraw consent you previously gave, at any time by writing to us at{" "}
                <a href="mailto:hello@turboridesupercars.com" className="text-[#FF2D20] hover:underline">
                  hello@turboridesupercars.com
                </a>
                . If you choose not to provide, or later withdraw, your consent, we may not be able to provide our services to you. These rights are subject to our compliance with applicable laws.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                How Long We Retain Your Data
              </h2>
              <p className="leading-relaxed text-neutral-300">
                We may retain your information (i) for as long as we are providing services to you, and (ii) as permitted under applicable law, we may also retain your data after you end your relationship with us. We will always process such information in accordance with applicable laws and this Policy.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Data Security
              </h2>
              <p className="leading-relaxed text-neutral-300">
                We use commercially reasonable and legally required precautions to preserve the integrity and security of your information and data.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Queries &amp; Grievances
              </h2>
              <p className="leading-relaxed text-neutral-300">
                For any queries, questions or grievances about this Policy, please contact us at{" "}
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
