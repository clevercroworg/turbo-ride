# TurboRide Supercars Ecosystem

Comprehensive multi-project platform for **TurboRide Supercars**: luxury supercar marketing showcase, the "Zero Loss Guarantee" supercar giveaway contest platform, and the live track/expressway booking engine.

---

## 📖 Complete Architecture & System Documentation

For full details on project architecture, cross-application wirings, routes, shared Neon PostgreSQL database schemas, and operational runbooks, see:

👉 **[`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md)**

---

## 🚗 Applications in this Workspace

| Project | Location | Description | Port | Production URL |
|---|---|---|---|---|
| **TurboRide Showcase** | Root (`/`) | Brand landing page, 3D experience, acoustic engine simulator | `3000` | `https://www.turboridesupercars.com` |
| **TurboRide Contest App** | `turboride-contest-app/` | Zero-loss giveaway, 1:1 Drive Credits, 5-digit lucky ticket pick, 2-tier referral engine, Superadmin suite | `3001` | *Contest Subdomain / Standalone* |
| **TurboRide Booking App** | `turboride-booking-app/` | Drive booking engine, lap/slot picker, vouchers, Razorpay checkout, Admin portal | `3002` | `https://book.turboridesupercars.com` |

---

## ⚡ Quick Start

```bash
# 1. Start Main Showcase (Port 3000)
npm run dev

# 2. Start Contest App (Port 3001)
cd turboride-contest-app && npm run dev -- -p 3001

# 3. Start Booking Engine (Port 3002)
cd turboride-booking-app && npm run dev -- -p 3002
```

---

## 🗄️ Shared Database (Neon PostgreSQL)

Both `turboride-contest-app` and `turboride-booking-app` share the same Neon PostgreSQL database (`user_credits`, `credit_transactions`, `contests`, `contest_tickets`, `referral_profiles`, `bookings`, etc.).

Refer to **[`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md)** for full table definitions and cross-app credit redemption protocols.
