# ViTek Systems

ViTek Systems is a polished single-page studio website for small businesses, startups, and ecommerce brands that need sharper digital experiences. The site presents clear service positioning, live work examples, transparent pricing, maintenance plans, and a quote request flow.

The app is built with Next.js, React, TypeScript, custom CSS, Framer Motion, GSAP, and Lucide icons.

## Features

- Responsive one-page studio website
- Sticky navigation with active section tracking
- Accessible animated mobile navigation
- Hero section with brand positioning and quote/work calls to action
- Work showcase with live client examples
- Service section for landing pages, business websites, ecommerce, and booking flows
- Before/after business outcome messaging
- Transparent build pricing tiers
- Monthly maintenance plan options
- Web3Forms-powered quote request form
- Accessible skip link and reduced-motion handling
- Scroll-triggered animation and desktop work-section pinning

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Custom CSS in `app/globals.css`
- Framer Motion
- GSAP with ScrollTrigger
- Lucide React icons
- Radix Slot
- Class Variance Authority
- Web3Forms for quote submissions

## Project Structure

```text
ViTek-Systems/
|-- app/
|   |-- globals.css        # Main design system and responsive styling
|   |-- layout.tsx         # App metadata and root layout
|   `-- page.tsx           # One-page site composition
|-- components/
|   |-- Contact.tsx        # Quote form and contact methods
|   |-- Footer.tsx         # Footer navigation and links
|   |-- Hero.tsx           # Main hero section
|   |-- LandingEffects.tsx # GSAP scroll animations
|   |-- Nav.tsx            # Sticky desktop/mobile navigation
|   |-- Pricing.tsx        # Build tiers and maintenance plans
|   |-- WhatWeDo.tsx       # Services and business outcomes
|   |-- WorkShowcase.tsx   # Featured client work
|   |-- section-intro.tsx  # Shared section heading component
|   |-- site-config.ts     # Brand, contact, and form constants
|   |-- site-data.ts       # Shared typed content arrays
|   `-- ui/button.tsx      # Reusable button component
|-- lib/
|   `-- utils.ts           # Class name helper
|-- public/
|   `-- images/            # Images used by the current app
|-- package.json
`-- README.md
```

## Main Sections

- **Hero**: Introduces ViTek Systems and the value proposition for small businesses.
- **Work**: Highlights StartupList Africa, Pampered by Yuni, DispatchOps, and Eunoia with live links.
- **What We Do**: Explains landing pages, business websites, ecommerce, booking flows, and modernization outcomes.
- **Pricing**: Shows Launch, Studio, Brand Build, and Custom tiers, plus maintenance plans.
- **Contact**: Captures quote requests through Web3Forms and lists email, phone, LinkedIn, and Austin-area details.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open the app at:

```text
http://localhost:3000
```

Run the type check:

```bash
npm run typecheck
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Scripts

- `npm run dev` - starts the Next.js development server
- `npm run typecheck` - runs TypeScript without emitting files
- `npm run lint` - aliases the TypeScript check for deterministic local validation
- `npm run build` - creates a production build
- `npm start` - serves the production build

## Contact Flow

The quote form posts to Web3Forms with the subject `ViTek Systems Website Quote Request`. Brand, contact, and form constants live in `components/site-config.ts` so future updates stay in one place.

## Deployment

This app is ready for a Next.js-compatible host such as Vercel. Deploy the repository as a Next.js project and use `npm run build` as the production build command.
