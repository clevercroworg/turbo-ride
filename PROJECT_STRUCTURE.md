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

| Project Path | Role | Git Remote / Repo | Tech Stack | Local Port (Recommended) |
|---|---|---|---|---|
| **`/` (Root)** | Main Brand Showcase & Marketing Site | `https://github.com/clevercroworg/turbo-ride.git` (branch `main`) | Next.js 16.3.2, React 19, Tailwind v4, Three.js / R3F, Framer Motion | `3000` |
| **`/turboride-contest-app`** | Supercar Contest, Member Garage, Admin | Independent local Git repo (ready to link to remote) | Next.js 16.3.6, React 19.2.8, Tailwind v4, Motion, Neon PG | `3001` |
| **`/turboride-booking-app`** | Drive Booking Wizard, Vouchers, Admin | `https://github.com/turborideclub/turboride-booking-app.git` (Ignored in root `.gitignore`) | Next.js 16 (v0 base), React 19, Tailwind, Shadcn, Neon PG, Razorpay | `3002` |

> [!NOTE]
> Root `.gitignore` explicitly ignores `turboride-booking-app/` and `turboride-app/`. The `turboride-contest-app` is currently untracked in root git, maintaining its own `.git` repository.

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

### 4.2 Directory Tree
```
turboride-contest-app/
├── package.json               # Next.js 16.3.6, React 19.2.8, Motion, pg, canvas-confetti
├── next.config.ts
├── postcss.config.mjs
├── .env.local                 # DATABASE_URL (Neon PostgreSQL), NEXT_PUBLIC_BOOKING_APP_URL
├── app/
│   ├── layout.tsx             # Root layout & global fonts
│   ├── globals.css            # Dark/light luxury utility tokens
│   ├── page.tsx               # Server component: fetches active contest & session
│   ├── home-client.tsx        # Client orchestrator: Hero, Value Matrix, Prize Pool, etc.
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
│   ├── nav.tsx                # Header with live credits badge & garage link
│   ├── hero-section.tsx       # Central stage: live ticket counter, progress, Buy CTA
│   ├── ticket-checkout-modal.tsx # Ticket purchase modal (Guest or Logged in)
│   ├── value-matrix.tsx       # Editorial breakdown of Zero-Loss Guarantee
│   ├── fleet-showcase.tsx     # Supercars available to drive via credits
│   ├── prize-pool.tsx         # 1st (Supercar), 2nd (Gold), 3rd (TurboRide Experience)
│   ├── referral-engine.tsx    # Interactive earning calculator & explanation
│   ├── interactive-calculator.tsx # Dynamic ticket-to-credits simulator
│   ├── faq-accordion.tsx      # Comprehensive contest FAQs
│   └── footer.tsx             # Legal disclaimers & footer navigation
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

### 4.3 Key Server Actions & Workflows
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
