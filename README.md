
# Noockie Graphics — Interactive 3D Signage & Branding Platform

[![Framework](https://img.shields.io/badge/Next.js-14.2%20(App%20Router)-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Auth.js](https://img.shields.io/badge/NextAuth.js-v5-purple?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://next-auth.js.org/)
[![Deployment](https://img.shields.io/badge/Vercel-Production-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**Noockie Graphics** is a premium, high-conversion web platform designed for an independent creative studio and signage manufacturer based in Nairobi, Kenya. The platform combines international editorial design, real-time 3D WebGL signage pre-visualization, localized Kenyan business flows (WhatsApp integration, KES budgeting, custom quote estimation), and an admin management dashboard.

---

## Key Features

- **Interactive 3D Signage Configurator (`ThreeCanvas.tsx`)**
  - Powered by React Three Fiber (R3F) and Three.js.
  - Real-time PBR material rendering for **LED Neon Tubes**, **3D Channel Letters (Brushed Gold/Metal)**, **Acrylic Backlit**, **Salon Signage**, and **Custom Multicolour Neon**.
  - Dynamic user inputs: Custom text (up to 10 characters), color selector (Warm, Cool, Red, Blue, Pink, Purple, Green, Gold), and brightness intensity controls.
  - OrbitControls for drag-to-rotate and pinch-to-zoom 3D inspection.

- **Editorial Brand Presentation**
  - Oversized Space Grotesk display typography paired with clean Inter body copy.
  - Filterable visual portfolio grid (Branding, 3D Signage, Lightboxes, Graphic Design, Fleet Wraps).
  - 4-stage agency process pipeline (*Discover, Design, Produce, Deliver*).

- **Conversion-Optimized Contact System**
  - Integrated inquiry intake form with KES budget range selectors and service categorization.
  - Floating WhatsApp Business click-to-chat CTA tailored for the East African commercial context.
  - Automatic `canvas-confetti` submission state.

- **Admin Management Console (`/admin`)**
  - Secured via `NextAuth.js` (Credentials Provider + bcrypt password hashing).
  - Client Lead Tracker with instant direct-to-WhatsApp links.
  - Portfolio project manager (Create, Update, Delete).
  - Studio contact and workshop configuration panel.

- **Production-Grade SEO & Performance**
  - Dynamic runtime `sitemap.xml` and `robots.txt` generation via App Router API.
  - Full OpenGraph & Twitter Card social meta tags.
  - Localized JSON-LD Schema (`LocalBusiness` structured data for Nairobi, Kenya).

---

## Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | Next.js 14.2 (App Router, Server Components, Route Handlers) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, CSS Variables, Editorial Dark Theme |
| **3D Engine** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Authentication** | NextAuth.js v5 (Auth.js), bcryptjs |
| **Icons & Micro-UI** | Lucide React, canvas-confetti, clsx, tailwind-merge |
| **Deployment** | Vercel (Edge Network, Static & Dynamic SSR) |

---

## Project Structure
```
noockie-graphics/
├── public/                  # Favicons, static images, open-graph assets
├── src/
│   ├── app/
│   │   ├── admin/           # Secured Admin Console (/admin)
│   │   ├── api/
│   │   │   └── auth/        # NextAuth API route catch-all
│   │   ├── login/           # Admin Authentication Page (/login)
│   │   ├── globals.css      # CSS variables & scrollbar styling
│   │   ├── layout.tsx       # Root layout, Fonts, Metadata & JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   └── sitemap.ts       # Dynamic sitemap.xml
│   ├── components/
│   │   ├── Navbar.tsx       # Glassmorphism header & drawer
│   │   ├── Hero.tsx         # High-impact editorial hero
│   │   ├── ServicesGrid.tsx # Filterable service cards
│   │   ├── PortfolioGrid.tsx# Case studies grid with modal preview
│   │   ├── VisualShowcase.tsx # WebGL 3D Studio container
│   │   ├── ThreeCanvas.tsx  # React Three Fiber 3D Signage Engine
│   │   ├── ProcessTimeline.tsx # 4-step agency workflow
│   │   ├── AboutSection.tsx # Studio story & local Nairobi workshop
│   │   ├── Testimonials.tsx # Client recommendations
│   │   ├── ContactSection.tsx # Conversion form
│   │   ├── Footer.tsx       # Studio footer
│   │   └── WhatsAppFloat.tsx# Direct WhatsApp trigger
│   ├── data/                # Mock data (projects.ts, services.ts)
│   ├── lib/                 # Site configuration constants
│   ├── types/               # TypeScript interfaces
│   ├── auth.ts              # NextAuth configuration
│   └── middleware.ts        # Route guard middleware
├── .env.local               # Environment variables (git-ignored)
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### 1. Prerequisites

Ensure you have Node.js 18.x or later installed on your system.

### 2. Installation

Clone the repository and install the dependencies:

git clone [https://github.com/your-username/noockie-graphics.git](https://github.com/your-username/noockie-graphics.git)
cd noockie-graphics
npm install


### 3. Environment Setup

Create a `.env.local` file in the root directory:

# Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# WhatsApp & Contact Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER="+254700000000"
NEXT_PUBLIC_CONTACT_EMAIL="hello@noockiegraphics.co.ke"

# NextAuth Authentication
NEXTAUTH_SECRET="your-generated-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Admin Credentials (store a bcrypt hash, never the plain password)
ADMIN_EMAIL="admin@noockiegraphics.co.ke"
ADMIN_PASSWORD_HASH="your-bcrypt-password-hash"



> **Note:** Generate `NEXTAUTH_SECRET` using `npx auth secret` in your terminal. Set `ADMIN_PASSWORD_HASH` to a bcrypt hash of your chosen password.

### 4. Running Locally

Start the development server:


npm run dev


Open `http://localhost:3000` in your browser. Access the secure admin panel at `http://localhost:3000/login`.

---

## Available Scripts

* `npm run dev` — Launches the Next.js development server with hot-reloading.
* `npm run build` — Compiles the application for production deployment.
* `npm run start` — Runs the compiled production build locally.
* `npm run lint` — Runs Next.js ESLint checks.

---

## Deployment to Vercel

1. Push your repository to GitHub.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Set the Framework Preset to **Next.js**.
4. Configure your production Environment Variables (`NEXT_PUBLIC_SITE_URL`, `NEXTAUTH_SECRET`, etc.).
5. Click **Deploy**.

For `.co.ke` domain binding:

* Add `noockiegraphics.co.ke` under **Settings > Domains** in Vercel.
* Point your domain's DNS `A Record` to `76.76.21.21` and `CNAME` to `cname.vercel-dns.com`.

---

## License

Copyright © 2026 Noockie Graphics. All rights reserved.
