# TurboRide Multi-Project Architecture & System Structure

> **Living Documentation**: This document defines the full ecosystem structure, repository relationships, shared database schema, cross-app wirings, route maps, and data retrieval context for the TurboRide suite. **Keep this file updated whenever routes, database schemas, or cross-application interfaces change.**

---

## 1. High-Level Ecosystem Architecture

The TurboRide platform is composed of three interconnected applications operating over a shared Neon PostgreSQL database and linked customer journey flows:

```
                                  ┌─────────────────────────────────────────┐
                                  │   TurboRide Marketing Showcase Site     │
                                  │   (Root: /)                             │
                                  │   https://www.turboridesupercars.com    │
                                  └───────────────────┬─────────────────────┘
                                                      │
                                    ┌─────────────────┴─────────────────┐
                                    │ Redirects & CTAs                  │
                                    ▼                                   ▼
          ┌────────────────────────────────────────┐  Cross-App   ┌─────────────────────────────────────────┐
          │     TurboRide Contest & Giveaway       │  Credits &   │        TurboRide Booking Engine         │
          │    (turboride-contest-app)             │  Redemption  │       (turboride-booking-app)           │
          │    Zero-Loss Supercar Giveaway         │ ────────────>│       https://book.turboridesupercars.com│
          │    • 1:1 Drive Credits                 │  Redirects   │       • Slot & Lap Bookings             │
          │    • Member Garage & Pick 5-Digit Num  │              │       • Vouchers & Gift Cards           │
          │    • 2-Tier Referral Engine            │              │       • Storefront Checkout             │
          │    • Superadmin Console                │              │       • Admin Booking Operations        │
          └───────────────────┬────────────────────┘              └───────────────────┬─────────────────────┘
                              │                                                       │
                              └───────────────────────────┬───────────────────────────┘
                                                          │
                                                          ▼
                                          ┌───────────────────────────────┐
                                          │     Shared Neon PostgreSQL    │
                                          │            Database           │
                                          │ • user_credits & ledger       │
                                          │ • contests & contest_tickets  │
                                          │ • referral_profiles & payouts │
                                          │ • bookings & fleet cars       │
                                          │ • vouchers & gift_orders      │
                                          └───────────────────────────────┘
```

---

## 2. Workspace & Git Repository Topology

The workspace `/Users/clevercrow/Developer/turbo-ride` contains three distinct projects with the following Git arrangements:

| Project Path | Role | Git Remote / Repo | Tech Stack | Production URL / Port |
|---|---|---|---|---|
| **`/` (Root)** | Main Brand Showcase & Marketing Site | `https://github.com/clevercroworg/turbo-ride.git` (branch `main`) | Next.js 16.3.2, React 19, Tailwind v4, Three.js / R3F, Framer Motion | `https://www.turboridesupercars.com` (Port `3000`) |
| **`/turboride-contest-app`** | Supercar Contest, Member Garage, Admin | `https://github.com/clevercroworg/turbo-ride-contest.git` (branch `main`) | Next.js 16.3.6, React 19.2.8, Tailwind v4, Motion, Neon PG | `https://turbo-ride-contest.vercel.app` (Port `3001`) |
| **`/turboride-booking-app`** | Drive Booking Wizard, Vouchers, Admin | `https://github.com/turborideclub/turboride-booking-app.git` (Ignored in root `.gitignore`) | Next.js 16 (v0 base), React 19, Tailwind, Shadcn, Neon PG, Razorpay | `https://book.turboridesupercars.com` (Port `3002`) |

> [!NOTE]
> Root `.gitignore` explicitly ignores `turboride-booking-app/` and `turboride-app/`. The `turboride-contest-app` is tracked on its dedicated GitHub repository `clevercroworg/turbo-ride-contest.git` and deployed to Vercel production at `https://turbo-ride-contest.vercel.app`.

---

## 3. App 1: TurboRide Showcase (`/` Root)

### 3.1 Purpose & Role
The premium visual presentation and marketing landing site for TurboRide Supercars. It showcases the fleet, specs, acoustic engine simulator, customer testimonials, Dobaspet STRR Expressway location, and directs all commercial booking traffic to the booking engine.

### 3.2 Directory Tree
```
/Users/clevercrow/Developer/turbo-ride/
├── package.json               # Next.js 16.3.2, Three.js, Lucide, Framer Motion
├── next.config.mjs            # Image domains (Unsplash), outputFileTracingRoot
├── postcss.config.mjs
├── public/                    # Audio files, car images, textures, videos
└── src/
    ├── app/
    │   ├── api/
    │   │   └── contact/       # POST endpoint for VIP Concierge inquiries (Nodemailer)
    │   ├── layout.tsx         # Root metadata, font configurations (Geist)
    │   ├── page.tsx           # Assembled single-page landing site
    │   ├── globals.css        # Tailwind v4 theme & luxury dark styling
    │   ├── privacy-policy/    # Privacy Policy page
    │   ├── refund-policy/     # Refund Policy page
    │   ├── terms-and-conditions/ # Terms and Conditions page
    │   ├── robots.ts & sitemap.ts
    │   └── error.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── Navigation.tsx            # Sticky header with quick booking CTA
    │   │   ├── Footer.tsx                # Luxury footer with links & disclaimers
    │   │   ├── MobileStickyBar.tsx       # Bottom bar with "Reserve Your Drive"
    │   │   └── WhatsAppFloatingButton.tsx# Pulsing WhatsApp concierge launcher
    │   ├── sections/
    │   │   ├── HeroSection.tsx           # Luxury 3D / video supercar unveiling
    │   │   ├── BrandCarouselStrip.tsx    # Porsche, Ferrari, Lambo marquees
    │   │   ├── FeaturedFleetSection.tsx  # Interactive fleet cards & spec triggers
    │   │   ├── SoundSimulatorSection.tsx # Real exhaust rev sound player
    │   │   ├── ExperienceCategoriesSection.tsx # Highway Runs, Track, Photoshoots
    │   │   ├── WhyChooseUsSection.tsx    # Dobaspet expressway advantages
    │   │   ├── LuxuryShowcaseSection.tsx # Edge-to-edge photography showcase
    │   │   ├── VideoShowcaseSection.tsx  # 4K reels & track footage
    │   │   ├── CustomerReviewsSection.tsx# Verified driver reviews & ratings
    │   │   ├── BookingProcessSection.tsx # 4-step simple reservation timeline
    │   │   ├── RequirementsSection.tsx   # Age, license, security deposit rules
    │   │   ├── LocationSection.tsx       # Dobaspet STRR Expressway interactive map
    │   │   ├── FAQSection.tsx            # Accordion for common questions
    │   │   ├── ContactSection.tsx        # VIP inquiry submission form
    │   │   └── FinalCTASection.tsx       # High-conversion closing banner
    │   └── ui/
    │       └── CarDetailModal.tsx        # In-depth technical specs modal
    ├── data/
    │   └── fleet.ts                      # Static fleet definitions (Cayman, Huracán, 488, GT3)
    └── lib/
        └── utils.ts                      # clsx & twMerge helper
```

### 3.3 Key Wirings & Actions
*   **Booking Redirect**: Any "Book Now" / "Drive" button executes:
    ```ts
    window.location.href = "https://book.turboridesupercars.com";
    ```
*   **Contact API** (`/api/contact`): Validates incoming inquiry requests and forwards them using SMTP credentials defined in `.env.production`.

---

## 4. App 2: TurboRide Contest App (`/turboride-contest-app`)

### 4.1 Purpose & Role
The **"Zero Loss Guarantee" Supercar Giveaway & Member Loyalty Platform**.
*   **The Zero Loss Principle**: Every ₹1,000 contest ticket provides 1 entry into the supercar draw (e.g. Porsche 718 Cayman worth ₹1.6 Cr) AND deposits **1,000 Drive Credits (1:1 value)** into the shared `user_credits` table. The customer loses nothing even if they don't win the car.
*   **5-Digit Ticket System**: Members select their own custom lucky 5-digit number (e.g. `40821`) or use server-side Auto-Pick. Numbers are strictly validated for uniqueness per contest.
*   **2-Tier Referral Engine**:
    *   Tier 1: 25% Drive Credits commission on all referred ticket purchases.
    *   Tier 2: When a member purchases 25 tickets, they unlock **25% Cash Commission** (`is_cash_unlocked = true`), withdrawable to UPI/Bank.
*   **Draw Cap & Regulations**: Strict 10,000 verified entries cap per draw. Full compliance with Indian Section 194B TDS regulations (30% on prizes exceeding ₹10,000) and cryptographic public seed verification.

### 4.2 Directory Tree
```
turboride-contest-app/
├── package.json               # Next.js 16.3.6, React 19.2.8, Motion, pg, canvas-confetti, Phosphor Icons
├── next.config.ts
├── postcss.config.mjs
├── .env.local                 # DATABASE_URL (Neon PostgreSQL), NEXT_PUBLIC_BOOKING_APP_URL
├── app/
│   ├── layout.tsx             # Root layout with responsive viewport & themeColor: #ea580c
│   ├── globals.css            # Dark/light luxury utility tokens
│   ├── page.tsx               # Server component: fetches active contest & session
│   ├── home-client.tsx        # Client orchestrator: Hero, Entry Allocation, How It Works, etc.
│   ├── terms/
│   │   └── page.tsx           # Statutory Terms & Conditions (Section 194B TDS, 10,000 Cap, Buddh Delivery)
│   ├── draw-regulations/
│   │   └── page.tsx           # Cryptographic Seed Verification, Live Draw Protocol, Audit Logs
│   ├── privacy/
│   │   └── page.tsx           # Privacy Policy & Digital Personal Data Protection (DPDP) Act 2023
│   ├── login/
│   │   └── page.tsx           # Phone / Email passwordless garage login
│   ├── members/
│   │   ├── page.tsx           # Server component: checks session, ticket stats, referrals
│   │   ├── member-dashboard-client.tsx # 53KB interactive Member Garage:
│   │   │                      # - Ticket numbers management (manual & auto-pick)
│   │   │                      # - Drive Credits wallet
│   │   │                      # - Referral code generator, stats & payout requests
│   │   └── rewards/
│   │       ├── page.tsx       # Server component: loads rewards catalog & user credits
│   │       └── rewards-client.tsx # Catalog UI with instant redemption actions
│   └── admin/
│       ├── page.tsx           # Server component loading overview metrics
│       ├── admin-console-client.tsx # 103KB Full Superadmin Management Suite
│       ├── contests/page.tsx  # Contest lifecycle manager
│       ├── members/page.tsx   # Member registry & KYC
│       ├── orders/page.tsx    # Order payments ledger
│       ├── redemptions/page.tsx # Supercar drive & media fulfillment tracker
│       ├── referrals/page.tsx # Referral stats & cash payout approvals
│       └── settings/page.tsx  # Global contest configuration
├── components/
│   ├── nav.tsx                # Adaptive Contrast Navbar (Transparent at top, White on scroll)
│   ├── hero-section.tsx       # Orange Racing Hero: Studio strip, 2-line headline, specs, Porsche render
│   ├── entry-allocation.tsx   # Interactive Ticket Terminal: 1/5/10/25/50 presets, 100% Escrow math
│   ├── how-it-works.tsx       # 4-step visual flow: Allocation -> 1:1 Parity -> Live Stream -> Delivery
│   ├── porsche-specs.tsx      # Porsche 718 Cayman technical specifications deep dive
│   ├── ticket-checkout-modal.tsx # Ticket purchase modal (Guest or Logged in)
│   ├── value-matrix.tsx       # Editorial breakdown of Zero-Loss Guarantee
│   ├── credit-calculator.tsx  # Interactive 4-Tier Credit Experience Slider (Photoshoot, Reel, Huracán, 4 Cars)
│   ├── fleet-showcase.tsx     # Supercars available to drive via credits (Auto-Carousel on Mobile)
│   ├── prize-pool.tsx         # 1st (Supercar), 2nd (Gold), 3rd (TurboRide Experience)
│   ├── referral-engine.tsx    # Interactive earning calculator & explanation
│   ├── interactive-calculator.tsx # Legacy ticket-to-credits simulator
│   ├── faq-accordion.tsx      # Comprehensive contest FAQs
│   └── footer.tsx             # Legal disclaimers & statutory links (/terms, /draw-regulations, /privacy)
└── lib/
    ├── db.ts                  # PostgreSQL Pool connecting to shared Neon DB
    ├── types.ts               # Contest, ContestTicket, MemberSession, RewardItem, etc.
    ├── catalog.ts             # Static reward items (Lambo, Ferrari, McLaren, Photoshoot)
    ├── auth.ts                # Cookie-based member session (`turboride_member_session`)
    ├── contests.ts            # Queries: getContests, getActiveContest, getUserTickets
    ├── credits.ts             # Actions: buyContestTicketsAction, assignTicketNumberAction,
    │                          #          autoPickTicketNumberAction, simulateReferralAction
    ├── rewards.ts             # Action: redeemRewardAction (atomic credit debit & booking redirect)
    └── admin.ts               # Admin Server Actions: payouts, statuses, contest crud
```

### 4.3 Comprehensive UI, Spacing, Structural Constraints & Design System

The contest application adheres to a strict **Industrial-Brutalist Supercar Aesthetic**. Every component is engineered for razor-sharp visual authority, high-octane contrast, and complete responsive immunity from 320px mobile screens to 4K ultra-wide monitors.

#### 4.3.1 Core Design Axioms
1. **Geometric Sharpness**: Strict `rounded-none` constraint across all containers, cards, buttons, badges, inputs, and drawers. Soft rounded pill borders (`rounded-full`, `rounded-xl`) and fuzzy drop-shadows are strictly forbidden. All geometry reflects the angular carbon-fiber chassis of modern hypercars.
2. **High-Contrast Automotive Palette**:
   - **Brand Racing Orange**: `#ea580c` / `rgb(234, 88, 12)` (Hero canvas background, primary CTA buttons, active state indicators, telemetry accents).
   - **Dark Racing Orange**: `#c2410c` / `rgb(194, 65, 12)` (Hero bottom vignette, hover states, border accents).
   - **Jet Black**: `#09090b` / `text-zinc-950` / `bg-zinc-950` (Primary headlines, dark badges, primary CTA button in transparent navbar state).
   - **Studio White**: `#ffffff` (Floating telemetry cards, specs panels, high-contrast inverted text, scrolled navbar background).
   - **Escrow Slate**: `#fafafa` / `#f4f4f5` (Subtle alternate section background contrast).
   - **Zinc Border Hierarchy**: `#e4e4e7` (`border-zinc-200`) for light cards, `#27272a` (`border-zinc-800`) for dark panels, and `#18181b` (`border-zinc-900`) for high-contrast outlines.
3. **Automotive Lighting Canvas**: The hero section features an engineered radial gradient simulating overhead studio spotlighting on a supercar unveiling stage:
   ```css
   radial-gradient(ellipse 85% 65% at 50% 35%, rgba(251, 146, 60, 0.45) 0%, rgba(234, 88, 12, 0.95) 55%, #c2410c 100%)
   ```

#### 4.3.2 Spacing & Layout Token System
Across all pages and components, spacing adheres to a disciplined rhythmic scale:
- **Global Page Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Vertical Padding**:
  - Hero Stage: `pt-28 sm:pt-30 md:pt-30 lg:pt-32 pb-12 sm:pb-14 md:pb-12 lg:pb-14`
  - Standard Content Sections: `py-16 sm:py-20 lg:py-24`
  - Compact Banner Sections: `py-10 sm:py-12 lg:py-14`
- **Content Max-Width Constraints**:
  - Section Headers: `max-w-3xl mx-auto text-center`
  - Section Subtitles: `max-w-2xl mx-auto` (with mandatory mobile side padding `px-4 xs:px-6 sm:px-0`)
  - Terminal & Calculators: `max-w-xl md:max-w-2xl lg:max-w-xl mx-auto`
  - Hero Content (Tablet Portrait): `md:max-w-2xl mx-auto`
- **Internal Card Paddings**:
  - Compact Mobile Cards: `p-3.5 xs:p-4 sm:p-6`
  - Standard Protocol Cards: `p-5 sm:p-6 lg:p-7`
  - Large Telemetry Panels: `p-6 sm:p-8 lg:p-10`
- **Component Gap Scales**:
  - Protocol & Fleet Grids: `gap-4 sm:gap-6 lg:gap-8`
  - Inline Badges & Pills: `gap-1.5 sm:gap-2`
  - Metric Columns: `gap-3 sm:gap-4`

#### 4.3.3 Fluid Typography Scale & Line-Wrapping Constraints
1. **Typography Hierarchy**:
   - **Primary Font**: Sans-serif (Geist / Inter) with extreme weight contrast (`font-bold` weight 700 to `font-black` weight 900).
   - **Telemetry & Numbers**: Monospace (`font-mono`) with tabular numerals (`tabular-nums`) for currency, ticket IDs, seed hashes, and technical specs.
   - **Section Over-titles**: `text-xs font-mono font-bold tracking-widest text-[#ea580c] uppercase`
   - **Section Titles**: `text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950`
   - **Section Subtitles**: `text-sm sm:text-base text-zinc-600 font-medium`
2. **Hero Headline Strict 2-Line Constraint**:
   - The headline MUST NEVER break into 3 lines or wrap unpredictably. It is structured into two rigid blocks with `whitespace-nowrap`:
     ```tsx
     <h1 className="...">
       <span className="block whitespace-nowrap">WIN A PORSCHE 718</span>
       <span className="block whitespace-nowrap text-white">CAYMAN FOR ₹1,000.</span>
     </h1>
     ```
   - **Fluid Scaling Formula**: Mobile is locked to **exactly +17%** over the original 23px baseline using CSS clamp:
     ```css
     text-[clamp(27px,8.4vw,36.3px)] sm:text-[38px] md:text-[44px] lg:text-[36px] xl:text-[48px] 2xl:text-[52px]
     ```
   - **Breakpoint Rationale**:
     - **Mobile (< 640px)**: The `27px` clamp floor guarantees 100% overflow immunity on ultra-narrow 320px screens (iPhone SE/5), scaling smoothly to `36.3px` on 430px screens (iPhone 16 Pro Max).
     - **Phablet (640px–767px)**: `sm:text-[38px]`.
     - **Tablet Portrait (`md:` 768px–1023px)**: Single column with `md:max-w-2xl` allows bold `md:text-[44px]` without text wrapping.
     - **Tablet Landscape (`lg:` 1024px–1279px)**: Dual column (464px per column) requires `lg:text-[36px]` to prevent line break or column overflow.
     - **Desktop (`xl:` 1280px+)**: Dual column (580px+ per column) scales up to `xl:text-[48px] 2xl:text-[52px]`.

#### 4.3.4 Adaptive Contrast Navbar & Kinetic Menu Trigger
- **Header Dimensions**: Fixed `h-20`, `px-3.5 sm:px-6 lg:px-8`.
- **Dynamic Contrast States**:
  - **Top Position (`scrollY <= 20`)**: `bg-transparent border-none`, white/black logo, white navigation links, solid jet black button (`bg-zinc-950 text-white border-zinc-900`).
  - **Scrolled Position (`scrollY > 20`)**: `bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-xs`, black/orange logo, racing orange button (`bg-[#ea580c] text-white`).
- **Brand Logo Typography**: `text-base xs:text-lg sm:text-xl md:text-2xl font-black tracking-tight`.
- **Primary Action Button**: `px-2.5 xs:px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] xs:text-xs sm:text-sm font-bold uppercase`.
- **Kinetic 3-Blade Aero-Slats Menu Trigger (`lg:hidden`)**:
  - Container: `w-9 h-9 sm:w-10 sm:h-10`, `rounded-none border`, `active:scale-90`.
  - Inner Geometry: `w-[18px] h-[14px] flex flex-col justify-between items-center`.
  - Top Blade: 18px horizontal bar (`h-[2px]`), rotates `+45°` and translates down `6px` on open.
  - Middle Blade: 12px Racing Orange speed slat (`bg-[#ea580c]`), smoothly collapses (`w-0 opacity-0`) on open.
  - Bottom Blade: 18px horizontal bar (`h-[2px]`), rotates `-45°` and translates up `6px` on open.
  - Symmetrical Intersection: Top and bottom blades meet at exact center (y = 7px) forming a sharp, symmetrical mechanical `X`.
  - **Cross-Platform Bug Fix**: Engineered with pure CSS-positioned elements rather than SVG `transform-origin` to eliminate Safari mobile center-shift defects.
- **Supercar Cockpit Mobile Navigation Drawer**:
  - Header: `NAVIGATION TELEMETRY · DRAW #01 · ZERO LOSS`.
  - Numbered Monospace Index Items:
    - `01 // HOW IT WORKS` (`1:1 Capital Returned in Buddh Circuit Credits`)
    - `02 // THE CAR & SPECS` (`Porsche 718 Cayman · 300 BHP · ₹75L Option`)
    - `03 // THE FLEET` (`Lamborghini, Ferrari & McLaren Drives`)
    - `04 // REFER & EARN` (`25% Drive Credits & Cash Commission`)
    - `05 // RULES & FAQ` (`Section 194B TDS & Seed Audit Protocol`)
  - Bottom Deck: `My Member Garage` (with live credits), `Member Garage Login`, `Get Tickets · ₹1,000 (100% Back)`, and statutory links (`Terms · Regulations · Privacy`).

#### 4.3.5 Hero Section Architecture & Spacing
- **Vertical Canvas Padding**:
  - Mobile: `pt-28 pb-12` (Generous vertical breathing space for high-impact mobile stage).
  - Phablet: `sm:pt-30 sm:pb-14`.
  - Tablet Portrait: `md:pt-30 md:pb-12`.
  - Desktop: `lg:pt-32 lg:pb-14`.
- **Top Minimalist Studio Strip**:
  - Visibility: `hidden md:flex` (Enabled on tablets and desktops; hidden on compact mobile to save viewport height).
  - Content: `TurboRide Supercar Club / Draw Cap: 10,000 Verified Entries` + `100% Capital Returned in Drive Credits` (ShieldCheck icon).
- **Vehicle Stage & Spatial Clearance**:
  - Car Sizing: `max-w-[420px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[760px] xl:max-w-[840px] mx-auto`.
  - **Clearance Above Car**: Specs card bottom margin `mb-3.5 sm:mb-4 md:mb-4` + car container top padding `pt-4 sm:pt-5 md:pt-4 lg:py-2` provides ~30px of clean orange canvas above the Porsche roof.
  - **Clearance Below Car**: Car container bottom padding `pb-7 sm:pb-8 md:pb-6 lg:py-2` with dual ground shadows (`-bottom-3` and `-bottom-1.5`) provides ~24px of separation before the delivery bar.
- **Bottom Delivery & Cash Option Bar**:
  - Left: Buddh Circuit Delivery (`text-xs xs:text-[13px] sm:text-sm font-black`) with gauge icon (`size={16}`).
  - Right: `₹75 Lakh Cash Option` badge (`text-xs xs:text-[13px] sm:text-sm font-black bg-zinc-950 text-white`).
  - Padding: `p-2.5 sm:p-3 md:p-3.5`.
  - Responsive Labels: Full string `"Buddh Circuit Delivery Included"` on all screens >= 640px (`hidden sm:inline`); `"Or choose"` hidden on tablet landscape (`hidden md:inline lg:hidden xl:inline`).

#### 4.3.6 Section Subtitle Side Padding Constraint
- **Issue Prevented**: Centered paragraphs on narrow mobile screens (320px–390px) spanning wall-to-wall without visual breathing space.
- **Enforced Rule**: All section subtitles across `components/fleet-showcase.tsx`, `components/referral-engine.tsx`, and `components/interactive-calculator.tsx` must include:
  `px-4 xs:px-6 sm:px-0 max-w-2xl mx-auto`
- **Result**: Subtitles maintain an elegant 16px–24px symmetrical margin on both sides on mobile, then seamlessly relax to container bounds on desktop (`sm:px-0`).

#### 4.3.7 "HOW IT WORKS" Protocol Cards
- **Component**: `components/how-it-works.tsx`.
- **Card Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6`.
- **Main Heading Typography**: `text-[22px] xs:text-2xl sm:text-xl lg:text-2xl font-bold uppercase tracking-tight leading-tight`.
- **Weight Calibration**: Explicitly tuned to **`font-bold` (weight 700)** rather than `font-black` (weight 900) to ensure crisp legibility and optical harmony with the large 22px–24px font size.
- **Accompanying Icons**: Scaled to `size={25}` with `weight="bold"`.
- **Step Detail Typography**: `text-[13px] sm:text-sm font-medium text-zinc-950 leading-relaxed`.
- **Protocol Steps**:
  - `01 // DEPOSIT ₹1,000` (Badge: `1:1 Value Ratio`)
  - `02 // CHOOSE 5-DIGITS` (Badge: `Verifiable Seed`)
  - `03 // LIVE STREAMED DRAW` (Badge: `10,000 Entry Cap`)
  - `04 // ZERO CAPITAL LOSS` (Badge: `Permanent Credits`)

#### 4.3.8 Entry Allocation Terminal
- **Component**: `components/entry-allocation.tsx`.
- **Card Styling**: `bg-white border-2 border-zinc-950 shadow-2xl p-3.5 xs:p-4 sm:p-7`.
- **Direct Accessibility**: Permanently open and directly accessible across both mobile and desktop (no expandable accordion toggles or collapse buttons).
- **Preset Buttons**: 1, 5, 10 (Popular), 25 (+Cash), 50 (VIP Club) with responsive text `text-sm xs:text-base sm:text-xl` and subtitle `text-[9px] xs:text-[10px] sm:text-xs`.
- **Tablet Alignment**: Card wrapper constrained to `max-w-xl md:max-w-2xl lg:max-w-xl mx-auto` so it symmetrically matches the 672px width of the Hero specs and car containers on iPad viewports.
- **Escrow Math Box**: Prominent green guarantee card showcasing 100% Capital Returned in Drive Credits with live recalculation on preset change.

#### 4.3.9 Typographic Hierarchy & Contrast Tuning
- **Value Matrix (`components/value-matrix.tsx`)**:
  - `1 Ticket`, `10 Tickets`, `50 Tickets`, `100 Tickets` are rendered bold (`font-black text-zinc-950`) with green credit values (`font-black text-emerald-600`).
  - Sub-items `₹1,000` / `₹10,000` and `1 Draw Entry` / `10 Draw Entries` are calibrated to unbold (`font-medium text-zinc-600` and `font-medium text-[#ea580c]`) to avoid visual bloat while maintaining exact font sizes.
- **Porsche Specs & Vehicle Passport (`components/prize-pool.tsx` & `components/porsche-specs.tsx`)**:
  - 4-Stat Performance Grid (`Engine`, `Horsepower`, `0-100 km/h`, `Top Speed`) uses unbold labels (`font-medium text-zinc-500 uppercase`) with high-impact bold values below (`font-black text-zinc-950 text-sm sm:text-base lg:text-lg`).
  - Vehicle Passport accordion labels (`Engine`, `Transmission`, `Configuration`, etc.) use unbold `font-medium text-zinc-500` contrasting against the bold spec values.

#### 4.3.10 Supercar Cockpit Drawer & Member Dashboard UI
- **Member Garage (`app/members/member-dashboard-client.tsx`)**:
  - 53KB industrial-brutalist cockpit.
  - Telemetry summary bar: Total tickets, unassigned tickets, active credits balance, and cash commission earnings.
  - Number Allocation Console: High-speed 5-digit lucky number keypad with auto-pick generator and live duplicate check.
  - Affiliate Center: Copyable referral link, dynamic QR code, and withdrawal modal for unlocked cash commissions.
- **Rewards Garage (`app/members/rewards/rewards-client.tsx`)**:
  - Supercar redemption cards: Porsche Cayman, Lamborghini Huracán, Ferrari 488 GTB, McLaren 720S, and 4K Drone Reels.
  - Instant credit debit workflow with real-time balance check and booking engine handoff.

#### 4.3.11 Superadmin Console UI Architecture
- **Console (`app/admin/admin-console-client.tsx`)**:
  - 103KB complete administrative command center.
  - KPI Telemetry Cards: Gross Ticket Revenue, Total Credits Issued, Tickets Sold, Cash Payable.
  - Contests Manager: Draw date configuration, status toggle (Active, Concluded, Draft), winning ticket declaration.
  - Orders & Ledger: Real-time ticket order stream, customer lookup, and refund handling.
  - Referral Payouts: Approval pipeline for member cash commission claims with UPI ID and bank verification.

#### 4.3.12 Dedicated Statutory Legal Pages
- **`/terms`**: Complete terms governing Section 194B TDS (30% flat on winnings exceeding ₹10,000), 10,000 verified entries cap, Buddh International Circuit delivery, and ₹75 Lakh direct wire cash alternative.
- **`/draw-regulations`**: Cryptographic public seed audit protocol, verified live-stream draw procedures, and audit log inspection.
- **`/privacy`**: Digital Personal Data Protection (DPDP) Act 2023 compliance, data retention, and consent management.

#### 4.3.13 Interactive Credit Calculator ("WHAT YOUR CREDITS GET YOU")
- **Component**: `components/credit-calculator.tsx`.
- **Purpose**: Demonstrates the 100% money-back guarantee by showing users exactly what tangible track and studio experiences their credits redeem for.
- **Card Proportions**: Constrained to `max-w-[620px]` with `rounded-2xl`, 16:9 media aspect ratio, and balanced desktop/mobile padding (`p-4 sm:p-5`) to avoid dominating the viewport while matching the reference design.
- **4 Stepped Tiers**:
  - `1,000 Credits` (1 Ticket · ₹1,000): Supercar Photoshoot (5 HD retouched photos posing with a supercar in studio).
  - `2,000 Credits` (2 Tickets · ₹2,000): 30-Second Instagram Reel (cinematic 4K reel with drone & cockpit footage).
  - `25,000 Credits` (25 Tickets · ₹25,000): Lamborghini Huracán Drive (5 adrenaline laps on Buddh Circuit).
  - `1,00,000 Credits` (100 Tickets · ₹1,00,000): All 4 Supercars (Quad split view: Huracán, 488 GTB, 720S, 911 GT3).
- **Tactile Stepped Range Slider**: Custom draggable thumb with smooth animated progress bar, direct step click targets, and 1-click checkout trigger (`onBuyTickets`).

#### 4.3.14 Fleet Showcase Mobile Carousel with Viewport-Isolated Scrolling
- **Component**: `components/fleet-showcase.tsx`.
- **Desktop Layout**: Unchanged clean 3-column grid (`hidden md:grid`).
- **Mobile Layout**: Smooth horizontal snapping carousel (`md:hidden flex overflow-x-auto snap-x snap-mandatory`) cutting vertical page scroll height by ~80%.
- **Anti-Jump Viewport Isolation**:
  - Auto-advance timer only executes when the carousel is actively visible in the user's viewport via an `IntersectionObserver`.
  - Replaced browser window-level `scrollIntoView()` with container-scoped `container.scrollTo({ left: targetLeft, behavior: 'smooth' })`, preventing any unwanted pulling or jumping when the user is viewing upper or lower sections.

#### 4.3.15 Custom Favicon Suite & OpenGraph / Twitter Metadata
- **Favicon Suite**:
  - `app/icon.svg` & `public/icon.svg`: Infinitely scalable SVG vector icon featuring the racing orange (`#ea580c`) squircle, deep asphalt (`#09090b`) core, and bold geometric "TR" monogram with an aerodynamic speed notch.
  - `app/apple-icon.png` & `public/apple-touch-icon.png`: 180×180 high-resolution icon for iOS Safari home screen bookmarks and touch devices.
  - `app/favicon.ico` & `public/favicon.ico`: Multi-resolution Windows/browser tab icon (16×16, 32×32, 48×48, 64×64).
- **Social Sharing OpenGraph & Twitter**:
  - `public/og-image.png`: 1200×630 high-resolution card featuring the yellow Porsche 718 Cayman, "WIN A PORSCHE 718 CAYMAN" headline, and 100% Capital Returned guarantee badge for rich link previews on WhatsApp, Telegram, iMessage, X/Twitter, and LinkedIn.
- **Root Layout (`app/layout.tsx`)**:
  - Explicit `metadataBase`, canonical URLs, localized keywords, authors, publishers, and Googlebot crawling directives.

#### 4.3.16 Comprehensive Responsive Breakpoint Matrix
| Breakpoint | Screen Width | Hero Layout | Headline Size | Car Stage | Navigation Bar | Subtitle Margins |
|---|---|---|---|---|---|---|
| **Mobile XS** | 320px–374px | Single col, `pt-28 pb-12` | `clamp(27px, 8.4vw, 36.3px)` | `max-w-[420px]` | Compact logo, 3-blade menu | `px-4` side padding |
| **Mobile Standard** | 375px–429px | Single col, `pt-28 pb-12` | `clamp(27px, 8.4vw, 36.3px)` | `max-w-[420px]` | Standard logo, 3-blade menu | `px-4` side padding |
| **Mobile Large / Pro Max**| 430px–639px | Single col, `pt-28 pb-12` | `36.3px` (clamp ceiling) | `max-w-[420px]` | Full mobile logo, 3-blade menu | `px-6` side padding |
| **Phablet (`sm:`)** | 640px–767px | Single col, `pt-30 pb-14` | `38px` | `max-w-[560px]` | Full logo, 3-blade menu | `sm:px-0` (container bounded)|
| **Tablet Portrait (`md:`)**| 768px–1023px | Single col, `max-w-2xl` | `44px` | `max-w-[640px]` | Studio strip on, 3-blade menu | `sm:px-0` |
| **Tablet Landscape (`lg:`)**| 1024px–1279px| Dual col (464px/col) | `36px` (prevents wrap) | `max-w-[760px]` | Full desktop links, no drawer | `sm:px-0` |
| **Desktop (`xl:`)** | 1280px–1535px| Dual col (580px/col) | `48px` | `max-w-[840px]` | Full desktop links + CTA | `sm:px-0` |
| **Ultra-Wide (`2xl:`)** | 1536px+ | Dual col (640px+/col) | `52px` | `max-w-[840px]` | Full desktop links + CTA | `sm:px-0` |

### 4.4 Key Server Actions & Workflows
1.  **Ticket Purchase (`buyContestTicketsAction`)**:
    *   Inserts record into `contest_orders` with status `'completed'`.
    *   Deposits 1:1 drive credits into `user_credits` table with `pack_id = 'contest_<contestId>'`.
    *   Updates `contests.sold_tickets`.
    *   Updates `referral_profiles.tickets_bought` (unlocks cash commission at >= 25 tickets).
    *   If a referral code was used, awards 25% bonus credits (and cash commission if unlocked).
2.  **Number Allocation (`assignTicketNumberAction`)**:
    *   Verifies user has unassigned tickets (`totalBought - totalAssigned > 0`).
    *   Validates 5-digit format (`/^\d{5}$/`).
    *   Guarantees ticket number uniqueness via database check & unique index.
    *   Inserts into `contest_tickets`.
3.  **Reward Redemption (`redeemRewardAction`)**:
    *   Acquires row-level locks on user's active credit rows in `user_credits` (`FOR UPDATE`).
    *   Verifies total active credits balance >= required credits.
    *   Sequentially deducts credits across active packs.
    *   Logs transaction to `credit_transactions` and `reward_redemptions`.
    *   Generates a seamless redirect URL to the booking app:
        ```ts
        const redirectUrl = `${bookingBase}/checkout?redemption=${redemptionId}&reward=${reward.id}&credits=${reward.creditsRequired}&email=${cleanEmail}&car=${reward.bookingCarId}&laps=${reward.bookingLaps}`;
        ```

---

## 5. App 3: TurboRide Booking App (`/turboride-booking-app`)

### 5.1 Purpose & Role
The commercial transaction engine and driver slot reservation system.
*   **Public Domain**: `https://book.turboridesupercars.com`
*   **Admin Portal**: `https://book.turboridesupercars.com/admin`
*   Handles vehicle selection (Porsche 718 Cayman, Lamborghini Huracán, Ferrari 488 GTB, Mustang GT), lap count selection (1 to 10 laps), ride-along options, high-definition drone reel add-ons, date calendar with capacity limits, blackout dates, payment gateway checkout (Razorpay), gift voucher generation, and drive credits redemption.

### 5.2 Key Structure & Database Scripts
```
turboride-booking-app/
├── app/
│   ├── page.tsx               # Storefront & vehicle booking wizard
│   ├── book/                  # Booking step-by-step funnel
│   │   ├── callback/          # Razorpay webhook / verification callback
│   │   └── checkout/          # Checkout page (processes payments or credit balance)
│   ├── admin/                 # Administrator portal (calendar, bookings, fleet, vouchers)
│   └── actions/
│       └── credits.ts         # User credits query & debit actions
├── lib/
│   └── turboride/
│       ├── admin-bookings.ts  # Booking management database queries
│       ├── admin-data.ts      # Metrics, revenue, customer data
│       └── email/             # Nodemailer / Mailer91 automated customer receipts
└── scripts/
    ├── setup-db.mjs           # Master table migrations & initial fleet seeding
    └── patch-settings-schema.mjs # Adds user_credits, gift_orders, vouchers schema
```

---

## 6. Shared Database Schema & Cross-App Wirings

Both the **Contest App** and the **Booking App** connect directly to the same **Neon PostgreSQL** database cluster.

### 6.1 Entity-Relationship Map
```
┌────────────────────────────────┐         ┌────────────────────────────────┐
│            contests            │         │          user_credits          │
├────────────────────────────────┤         ├────────────────────────────────┤
│ id (PK: text)                  │         │ id (PK: text)                  │
│ title, subtitle, car_name      │         │ identifier (email or phone)    │◄─── Shared across
│ image_url, worth_display       │         │ pack_id                        │     Contest App
│ target_tickets, sold_tickets   │         │ amount_paid, credits_granted   │     and Booking App
│ ticket_price, credits_per_tkt  │         │ credits_remaining              │
│ status, draw_date, winner_*    │         │ status, payment_id, gateway    │
└───────────────┬────────────────┘         └───────────────┬────────────────┘
                │                                          │
                ▼                                          ▼
┌────────────────────────────────┐         ┌────────────────────────────────┐
│        contest_tickets         │         │      credit_transactions       │
├────────────────────────────────┤         ├────────────────────────────────┤
│ id (PK: text)                  │         │ id (PK: text)                  │
│ contest_id (FK -> contests.id) │         │ credit_id (FK -> user_credits) │
│ user_phone, user_email         │         │ identifier, amount_debited     │
│ user_name, ticket_number (UNIQ)│         │ balance_after, description     │
│ order_id, created_at           │         │ booking_ref, created_at        │
└────────────────────────────────┘         └────────────────────────────────┘
                ▲                                          ▲
                │                                          │
┌────────────────────────────────┐         ┌────────────────────────────────┐
│         contest_orders         │         │       reward_redemptions       │
├────────────────────────────────┤         ├────────────────────────────────┤
│ id (PK: text)                  │         │ id (PK: text)                  │
│ user_phone, user_email         │         │ user_phone, user_email         │
│ contest_id, ticket_count       │         │ reward_id, reward_title        │
│ amount_paid, credits_issued    │         │ credits_spent, status          │
│ referral_code_used, status     │         │ created_at                     │
└────────────────────────────────┘         └────────────────────────────────┘
                │
                ▼
┌────────────────────────────────┐         ┌────────────────────────────────┐
│       referral_profiles        │         │            bookings            │
├────────────────────────────────┤         ├────────────────────────────────┤
│ id (PK: text)                  │         │ id (PK: text)                  │
│ user_phone, user_email         │         │ customer_name, email, phone    │
│ referral_code (UNIQUE)         │         │ cars (JSONB), reels, slot      │
│ total_referred_users           │         │ experience_date, total, status │
│ total_credits_earned           │         │ payment_gateway, amount_paid   │
│ total_cash_earned              │         │ created_at                     │
│ tickets_bought                 │         └────────────────────────────────┘
│ is_cash_unlocked (BOOLEAN)     │
└────────────────────────────────┘
```

### 6.2 Table Dictionary

| Table Name | Primary Role | Accessed By | Key Columns |
|---|---|---|---|
| `user_credits` | Master balance ledger for drive credits | Contest App, Booking App | `identifier`, `credits_remaining`, `status`, `amount_paid` |
| `credit_transactions` | Audit ledger of all credits spent/debited | Contest App, Booking App | `credit_id`, `amount_debited`, `balance_after`, `booking_ref` |
| `contests` | Supercar giveaway configurations | Contest App | `id`, `car_name`, `target_tickets`, `sold_tickets`, `status` |
| `contest_tickets` | Allocated 5-digit lucky ticket entries | Contest App | `contest_id`, `ticket_number`, `user_email`, `user_phone` |
| `contest_orders` | Cash transactions for ticket purchases | Contest App | `id`, `ticket_count`, `amount_paid`, `referral_code_used` |
| `referral_profiles` | 2-Tier referral affiliate data | Contest App | `referral_code`, `tickets_bought`, `is_cash_unlocked`, `total_cash_earned` |
| `referral_payouts` | Withdrawal requests for cash commissions | Contest App Admin | `payout_code`, `amount`, `status`, `upi_id`, `bank_account` |
| `reward_redemptions`| Record of drive/media session claims | Contest App | `reward_id`, `reward_title`, `credits_spent`, `status` |
| `bookings` | Scheduled track/expressway drive sessions | Booking App | `customer_email`, `cars`, `experience_date`, `time_slot`, `status` |
| `cars` | Fleet inventory, lap pricing, status | Booking App | `id`, `name`, `price_per_lap`, `price_per_ride_along_lap`, `status` |
| `vouchers` | Gift codes & promotional vouchers | Booking App | `code`, `discount_type`, `max_use`, `used_count` |
| `gift_orders` | Gift card purchases & delivery info | Booking App | `purchaser_email`, `recipient_email`, `voucher_codes` |
| `slot_settings` | Daily time slot capacities (e.g. 11am-5pm) | Booking App | `slot`, `capacity`, `is_active` |
| `admins` & `admin_sessions` | Booking Superadmin authentication | Booking App | `email`, `password_hash`, `role` |

---

## 7. Environment Variables Reference

| Variable Name | Required By | Description / Typical Value |
|---|---|---|
| `DATABASE_URL` | Contest App, Booking App, Root scripts | Neon PostgreSQL connection string (`postgresql://user:pass@host/neondb?sslmode=require`) |
| `NEXT_PUBLIC_BOOKING_APP_URL` | Contest App | Base URL for checkout redirects (`https://book.turboridesupercars.com` in prod, `http://localhost:3002` in local dev) |
| `NEXT_PUBLIC_CONTEST_APP_URL` | Booking App, Root | Contest app entry point |
| `ADMIN_EMAIL` | Booking App | Superadmin login identifier |
| `ADMIN_PASSWORD` | Booking App | Superadmin bcrypt initial credential |
| `RAZORPAY_KEY_ID` & `RAZORPAY_KEY_SECRET` | Booking App | Production payment gateway credentials |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Booking App, Root API | Transactional email delivery service |

---

## 8. Local Development & Operational Guide

### 8.1 Launching the Full Suite Locally
To run all three applications simultaneously without port collisions:

```bash
# Terminal 1: TurboRide Showcase (Port 3000)
cd /Users/clevercrow/Developer/turbo-ride
npm run dev

# Terminal 2: TurboRide Contest App (Port 3001)
cd /Users/clevercrow/Developer/turbo-ride/turboride-contest-app
npm run dev -- -p 3001

# Terminal 3: TurboRide Booking App (Port 3002)
cd /Users/clevercrow/Developer/turbo-ride/turboride-booking-app
npm run dev -- -p 3002
```

### 8.2 Database Migration & Schema Verification
To verify or update tables on the shared Neon database:
```bash
cd /Users/clevercrow/Developer/turbo-ride/turboride-booking-app
node scripts/setup-db.mjs
node scripts/patch-settings-schema.mjs
```

### 8.3 Maintenance Protocol for Agents & Engineers
1. **Adding a New Car**: Update both `src/data/fleet.ts` (Showcase), `cars` table via `turboride-booking-app/scripts/setup-db.mjs`, and `turboride-contest-app/lib/catalog.ts` if redeemable via credits.
2. **Modifying Drive Credits**: All balance calculations must inspect `user_credits.credits_remaining` where `status = 'active'`, matching by normalized email or sanitized 10-digit phone number.
3. **Updating Routes or Wirings**: Whenever new routes or cross-app query parameters are introduced, update this `PROJECT_STRUCTURE.md` immediately.
