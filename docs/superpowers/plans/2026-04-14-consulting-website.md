# Jônatas Consulting Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page consulting authority website for Jônatas Fernandes Pimenta using Next.js 15, Tailwind CSS, and shadcn/ui, matching the Stitch design at `/tmp/stitch-design.html` with corrected content from `/Users/jhonny/Desktop/projects/stitch-prompt.md`.

**Architecture:** Single-page Next.js 15 App Router site. One page (`app/page.tsx`) composing section components. All content hardcoded (no CMS). Static contact form (no backend — will be wired to Pipefy later). Dark mode only. Design tokens from Stitch's Tailwind config.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Inter + Berkeley Mono fonts, Material Symbols Outlined icons.

**Design source of truth:** `/tmp/stitch-design.html` — the Stitch-generated HTML with color tokens, component patterns, typography, and layout structure. **Content source of truth:** `/Users/jhonny/Desktop/projects/stitch-prompt.md` — the corrected copy with accurate case studies, products, articles, and about text.

---

## File Structure

```
jonatas-website/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, body classes)
│   ├── page.tsx                # Main page composing all sections
│   └── globals.css             # Tailwind imports + custom CSS (glass-nav, mono-label, grid-bg, emerald-glow, scrollbar)
├── components/
│   ├── nav.tsx                 # Fixed top navigation bar
│   ├── hero.tsx                # Hero section (headline, subheadline, CTAs)
│   ├── social-proof.tsx        # "Trusted by" company strip
│   ├── positioning.tsx         # Positioning copy + 6 stats grid
│   ├── services.tsx            # 5 service cards (asymmetric grid)
│   ├── case-studies.tsx        # 4 case study cards (2x2 grid)
│   ├── engineering.tsx         # Engineering philosophy + dual code blocks
│   ├── products.tsx            # 3 product cards
│   ├── articles.tsx            # 3 article cards
│   ├── about.tsx               # About section (photo + bio)
│   ├── contact.tsx             # Contact form
│   └── footer.tsx              # Footer
├── lib/
│   └── data.ts                 # All content data (case studies, services, stats, products, articles)
├── public/
│   └── (placeholder for future images)
├── tailwind.config.ts          # Stitch color tokens, font families, border-radius scale
├── next.config.ts              # Next.js config (image domains for Stitch CDN)
├── package.json
└── tsconfig.json
```

---

### Task 1: Project Scaffold + Tailwind Config + Global Styles

**Files:**
- Create: `jonatas-website/` (via create-next-app)
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Create: `next.config.ts`

- [ ] **Step 1: Create Next.js project**

```bash
cd /Users/jhonny/Desktop/projects
pnpm create next-app@latest jonatas-website --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack
```

Select defaults when prompted. This creates a Next.js 15 project with Tailwind CSS and App Router.

- [ ] **Step 2: Install shadcn/ui**

```bash
cd /Users/jhonny/Desktop/projects/jonatas-website
pnpm dlx shadcn@latest init -d
```

This initializes shadcn/ui with default config.

- [ ] **Step 3: Replace tailwind.config.ts with Stitch design tokens**

Replace the entire `tailwind.config.ts` with the Stitch color system. These tokens come directly from the Stitch HTML `<script id="tailwind-config">`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-container": "#00302b",
        outline: "#859585",
        "primary-fixed": "#62ff96",
        primary: "#75ff9e",
        "on-tertiary": "#370096",
        "primary-container": "#00e676",
        "inverse-on-surface": "#2d3137",
        "on-error-container": "#ffdad6",
        "primary-fixed-dim": "#00e475",
        "secondary-fixed-dim": "#66d9cc",
        "on-surface": "#dfe2eb",
        "surface-container-low": "#181c22",
        "tertiary-fixed": "#e8deff",
        "on-surface-variant": "#bacbb9",
        "on-primary-container": "#00612e",
        "inverse-surface": "#dfe2eb",
        "error-container": "#93000a",
        "surface-tint": "#00e475",
        "inverse-primary": "#006d35",
        "secondary-container": "#1ea296",
        "surface-variant": "#31353c",
        "outline-variant": "#3b4a3d",
        "on-error": "#690005",
        error: "#ffb4ab",
        "on-primary-fixed": "#00210b",
        "on-background": "#dfe2eb",
        surface: "#10141a",
        "surface-container-high": "#262a31",
        "on-tertiary-fixed": "#20005f",
        "surface-container-lowest": "#0a0e14",
        secondary: "#66d9cc",
        "surface-bright": "#353940",
        "surface-container-highest": "#31353c",
        "surface-container": "#1c2026",
        "tertiary-container": "#cfbfff",
        "on-tertiary-container": "#5d21df",
        "on-secondary-fixed-variant": "#005049",
        "on-secondary-fixed": "#00201d",
        "on-tertiary-fixed-variant": "#4f00d0",
        "on-secondary": "#003732",
        "tertiary-fixed-dim": "#cdbdff",
        tertiary: "#e9dfff",
        background: "#10141a",
        "surface-dim": "#10141a",
        "on-primary-fixed-variant": "#005226",
        "on-primary": "#003918",
        "secondary-fixed": "#84f5e8",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Berkeley Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
```

- [ ] **Step 4: Replace app/globals.css with Stitch custom styles**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.glass-nav {
  background: rgba(13, 17, 23, 0.6);
  backdrop-filter: blur(24px);
}

.emerald-glow {
  filter: drop-shadow(0 0 24px rgba(0, 230, 118, 0.15));
}

.mono-label {
  font-family: "Berkeley Mono", monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.grid-bg {
  background-image: radial-gradient(
    circle at 2px 2px,
    #3b4a3d 1px,
    transparent 0
  );
  background-size: 48px 48px;
}

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #10141a;
}
::-webkit-scrollbar-thumb {
  background: #3b4a3d;
}

body {
  background-color: #10141a;
  color: #dfe2eb;
}
```

- [ ] **Step 5: Update app/layout.tsx with fonts and metadata**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JFP | Architecture & AI Engineering",
  description:
    "Senior Full-Stack Engineer & AI Architect. I help CTOs and technical founders design distributed systems and build production AI features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Berkeley+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-body bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Update next.config.ts to allow Stitch image domains**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 7: Install @tailwindcss/forms plugin**

```bash
cd /Users/jhonny/Desktop/projects/jonatas-website
pnpm add -D @tailwindcss/forms
```

- [ ] **Step 8: Verify dev server starts**

```bash
cd /Users/jhonny/Desktop/projects/jonatas-website
pnpm dev
```

Expected: Dev server starts at http://localhost:3000 with dark background (#10141a).

- [ ] **Step 9: Commit**

```bash
cd /Users/jhonny/Desktop/projects/jonatas-website
git add -A
git commit -m "feat: scaffold Next.js project with Stitch design tokens and global styles"
```

---

### Task 2: Content Data File

**Files:**
- Create: `lib/data.ts`

All content lives in one file so components stay clean. Data comes from the corrected `stitch-prompt.md`.

- [ ] **Step 1: Create lib/data.ts with all site content**

```ts
export const stats = [
  { value: "6+", label: "Years Exp" },
  { value: "50+", label: "Systems" },
  { value: "5+", label: "AI Systems" },
  { value: "2", label: "Products" },
  { value: "20%", label: "AWS Reduction" },
  { value: "6", label: "ML Models" },
];

export const services = [
  {
    title: "AI Agents, RAG Pipelines & Intelligent Products",
    description:
      "Production AI systems, not prototypes. LangGraph multi-agent architectures, RAG pipelines with vector search, AI copilots with tool-calling, recommendation engines, ML model ensembles, and structured LLM outputs.",
    tags: ["LangGraph", "LangChain", "OpenAI", "RAG", "CopilotKit", "AI Agents"],
    icon: "neurology",
    featured: true,
  },
  {
    title: "Architecture Consulting",
    description:
      "Auditing and designing distributed systems for teams that need to scale 10x without breaking.",
    icon: "account_tree",
  },
  {
    title: "Product Engineering",
    description:
      "Full-stack execution from Figma to production. Modern tech stacks built for speed and maintainability.",
    icon: "deployed_code",
  },
  {
    title: "System Integration",
    description:
      "Connecting fragmented legacy systems, universal hardware integration, and IoT ecosystems.",
    icon: "hub",
  },
  {
    title: "Interim CTO",
    description:
      "Strategic technical leadership, hiring roadmaps, and engineering culture for startups.",
    icon: "shield_person",
  },
];

export const caseStudies = [
  {
    company: "CxMapper / EzFlow",
    client: "SulAmérica + Caixa Seguradora",
    tag: "Enterprise SaaS · Insurance",
    year: "2024–2025",
    title: "Omnichannel Communication Platform — 30+ Workflow Nodes, Git-Like Versioning",
    metrics: [
      { value: "30+", label: "Workflow Nodes" },
      { value: "2", label: "Enterprise Clients" },
      { value: "40M+", label: "Msgs/Month" },
    ],
    tags: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "AWS SES", "WhatsApp", "OpenTelemetry"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAWY_x0qXruoRuGTNDVvqvZx_RpGbwPXefGv9J6UC3VVXJCoefinns8ZodV4iC10DpL7th9NLVzHdyfatXr6ZXB2M7zHOelyBCyPCpAG8KiL6HzList-ysmyUnzDbt5IyKRQtOJoxzrw9T69b8UgKEEs8SNOdMg-WdiWR9jRMsVjr7--iIPXF32UrLAalXw_grgTRnu-7gdrJbZpD8uccayBomwP3L0DCp1J0iP1YdXUjgOFlg9zs763suvIm2vjxmUf-LPxAuIQ",
  },
  {
    company: "Resilion / Koru",
    client: "Koru (Canada)",
    tag: "AI · IoT · Infrastructure",
    year: "2025",
    title: "Infrastructure Intelligence Platform — AI Copilot + IoT Sensor Network",
    metrics: [
      { value: "5", label: "Systems Built" },
      { value: "15+", label: "AI Tools" },
      { value: "6", label: "ML Models" },
    ],
    tags: ["Hono", "Next.js 15", "LangGraph", "CopilotKit", "TimescaleDB", "MQTT"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMINMcNQmoaOW182eOmioFF6D--Uuat5NugBHNelLerScUYMQVPhD81GM45fMIc1EKneiHgyrEoWgsjfiN4FH7cHAZRZv1gqiT1olZgmNRfoZpjJQ_FHYUzUjWI7NspcXyZHyQ1OXYv5hHc8I4uTrhbGzZt_aN1o-kb8I_wGQbuQLsTsIBcggooa5st_JhC76wzCoCHZLPcl6lmFbSNTG78kUZMkwRUpJB0gJVgshgx0XncIVtNOcArQfimd9cehD-EMPvrN0Grg",
  },
  {
    company: "Zurich Santander",
    client: "Zurich Santander",
    tag: "Financial Services · Enterprise",
    year: "2024",
    title: "Document Processing: 12 Months → 2 Months — 6x Acceleration",
    metrics: [
      { value: "6x", label: "Faster" },
      { value: "80%", label: "Automation" },
      { value: "~€2M", label: "Annual Savings" },
    ],
    tags: ["DDD", "Strangler Fig", "AWS Lambda", "Resilience4j"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAWY_x0qXruoRuGTNDVvqvZx_RpGbwPXefGv9J6UC3VVXJCoefinns8ZodV4iC10DpL7th9NLVzHdyfatXr6ZXB2M7zHOelyBCyPCpAG8KiL6HzList-ysmyUnzDbt5IyKRQtOJoxzrw9T69b8UgKEEs8SNOdMg-WdiWR9jRMsVjr7--iIPXF32UrLAalXw_grgTRnu-7gdrJbZpD8uccayBomwP3L0DCp1J0iP1YdXUjgOFlg9zs763suvIm2vjxmUf-LPxAuIQ",
  },
  {
    company: "Livo",
    client: "Founded",
    tag: "Consumer AI · SaaS",
    year: "2025–2026",
    title: "3 AI Pipelines — Recommendations, Retrospectives & Reading Plans",
    metrics: [
      { value: "3", label: "AI Systems" },
      { value: "20", label: "Agent Iterations" },
      { value: "7", label: "Candidate Engine" },
    ],
    tags: ["LangGraph", "OpenAI GPT-4o", "NestJS", "Stripe", "SQS"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLN6N8N_9Eu8lmI2JOHZpEhHlxqJkWlLLudcqX05bGldCoNz4fxg1RvFR4u1ETdFVQ_5Xv4TqAXEHsXZLIvEVwXhPyQ89wAhPbsrVgMoWm1u3mbi95zzJcAhpDHutxG-8GnBLwcqPuo4mJ6LM2c0jL7SM7NFHH5gP4rVCJpedFNyD60Vss1bbbsLQSltd637sPRxU1voTSsXrXFWd3NDDDWNgd233_ZPiHuD911UCfiR78HmnWNF9WOiBI-Kjh4svrf_av0wuonA",
  },
];

export const products = [
  {
    name: "Livo",
    subtitle: "AI-Powered Reading Platform",
    description:
      "3 production AI pipelines: LangGraph reading plan agent, GPT-4o book recommendation engine, and retrospective generator (like Spotify Wrapped for readers). NestJS backend, Stripe payments.",
  },
  {
    name: "ClaudIA",
    subtitle: "Multi-Agent AI Assistant",
    description:
      "CLI productivity assistant with LangGraph multi-agent architecture (Main, Planning, Summary agents). RAG knowledge base via Qdrant vector database. Google Calendar + Microsoft Calendar integrations.",
  },
  {
    name: "Cronock",
    subtitle: "B2B2C Appointment Booking SaaS",
    description:
      "Appointment booking platform for beauty and aesthetic services in Brazil. NestJS + PostgreSQL with DDD/Clean Architecture, React Native/Expo mobile app, MercadoPago payments.",
  },
];

export const articles = [
  {
    date: "Mar 12, 2024",
    readTime: "8 min read",
    title: "Demystifying Distributed Systems Fallacies",
    description: "Practical lessons from building real distributed systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLN6N8N_9Eu8lmI2JOHZpEhHlxqJkWlLLudcqX05bGldCoNz4fxg1RvFR4u1ETdFVQ_5Xv4TqAXEHsXZLIvEVwXhPyQ89wAhPbsrVgMoWm1u3mbi95zzJcAhpDHutxG-8GnBLwcqPuo4mJ6LM2c0jL7SM7NFHH5gP4rVCJpedFNyD60Vss1bbbsLQSltd637sPRxU1voTSsXrXFWd3NDDDWNgd233_ZPiHuD911UCfiR78HmnWNF9WOiBI-Kjh4svrf_av0wuonA",
    url: "https://medium.com/@jonatasfernandespimenta",
  },
  {
    date: "Feb 24, 2024",
    readTime: "12 min read",
    title: "Architecture Series: Space-Based, Service-Based, and Microkernel",
    description: "Deep dives into three architecture patterns and real-world trade-offs.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRp7ppFPve3advuRwZm1CnaPXWOWW2nOtq-qsO4evRR5t3SWwcHgNi0PC-N1hpz8vDIwcDlHDr3O_ZIp9SZB6nR47y25yYbS2raGb6ibFtWYhyMTDSxMpzT8dizMMHFpccZsikoGAbmiri7u0-W0VF3hG76qbjliULuZPbySZ24lu4evDKv31Z9vxsrFfEtn0Om1aBYrLYCQmcn65tAATDyjnrSQGn-fyFKMKPkpDB2ADrqj3K4W5YRLsUsaJG9vWm-kt2ABxUSw",
    url: "https://medium.com/@jonatasfernandespimenta",
  },
  {
    date: "Jan 15, 2024",
    readTime: "10 min read",
    title: "How to Establish Processes in Your Business",
    description: "Systemizing the predictable so you can humanize the exceptional.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KBqhq5Oa01e1xR6WrhQR4Bhk1xxHQUYHcTywrwgBAK5ia7kxz-AkbIt-cwbUQJRvg7F-tBtuXOuJNoCfJyLW02Lgr84XuIBbpRtfPWZ6nohDhU1bLBkEQoo8Pt6RvGYm-uVTy-IgpM8Sg7ZDXp5Z5UGas_GhMqsC6eFbSA_tBhlke-PivlCA0so6_k8UKYKEJVgG3fgUPylJt_b4c43U1Zwd0UhctmVYiI60EXVYPQH4zsV3aHnzbYFslEUTEYyJWWpRK1d3_g",
    url: "https://medium.com/@jonatasfernandespimenta",
  },
];

export const socialLinks = {
  github: "https://github.com/jonatasfernandespimenta",
  linkedin: "https://www.linkedin.com/in/j%C3%B4natas-fernandes-pimenta-67069b199/",
  medium: "https://medium.com/@jonatasfernandespimenta",
};
```

- [ ] **Step 2: Commit**

```bash
cd /Users/jhonny/Desktop/projects/jonatas-website
git add lib/data.ts
git commit -m "feat: add all site content data"
```

---

### Task 3: Navigation Component

**Files:**
- Create: `components/nav.tsx`

Match the Stitch nav exactly: fixed top, glass background, JFP monogram, 4 links, CTA button.

- [ ] **Step 1: Create components/nav.tsx**

Copy the nav HTML structure from Stitch (lines 91-102 of `/tmp/stitch-design.html`), converting to React/TSX:

```tsx
import Link from "next/link";
import { socialLinks } from "@/lib/data";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
];

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0D1117]/60 backdrop-blur-xl shadow-[0_4px_48px_rgba(0,230,118,0.04)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-16">
        <div className="font-label text-xl font-bold tracking-tighter text-[#00E676]">
          JFP
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="font-headline tracking-tight text-sm font-bold text-slate-400 hover:text-slate-100 transition-colors duration-150"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-primary-container text-on-primary-container px-6 py-2 text-sm font-bold hover:bg-[#75ff9e] transition-colors duration-150"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/nav.tsx && git commit -m "feat: add navigation component"
```

---

### Task 4: Hero Component

**Files:**
- Create: `components/hero.tsx`

- [ ] **Step 1: Create components/hero.tsx**

```tsx
export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 grid-bg">
      <div className="mb-12">
        <span className="mono-label px-3 py-1 bg-surface-container-highest border border-outline-variant/30 text-primary flex items-center gap-2 w-fit">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for Projects · Q2 2026
        </span>
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl">
        Architecture That Scales.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
          AI That Ships.
        </span>
        <br />
        Engineering That Delivers.
      </h1>
      <p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
        Senior Full-Stack Engineer &amp; AI Architect. I help CTOs and technical
        founders design distributed systems, build production AI features —
        LangGraph agents, RAG pipelines, ML ensembles — and ship products that
        compound. 6+ years at enterprise scale, from microservices to
        multi-agent AI.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-4 font-bold text-lg hover:brightness-110 transition-all text-center"
        >
          Schedule a Strategy Call
        </a>
        <a
          href="#work"
          className="border border-outline-variant/50 px-8 py-4 font-bold text-lg hover:bg-surface-container-highest transition-all text-center"
        >
          See My Work
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/hero.tsx && git commit -m "feat: add hero section"
```

---

### Task 5: Social Proof + Positioning + Stats Components

**Files:**
- Create: `components/social-proof.tsx`
- Create: `components/positioning.tsx`

- [ ] **Step 1: Create components/social-proof.tsx**

```tsx
const companies = ["SulAmérica", "Zurich Santander", "Koru", "SOL Copérnico", "EximiaTI"];

export function SocialProof() {
  return (
    <section className="w-full bg-surface-container-low py-12 mb-32">
      <div className="max-w-7xl mx-auto px-8">
        <p className="mono-label text-slate-500 mb-8">Trusted by teams at</p>
        <div className="flex flex-wrap items-center justify-between gap-8 grayscale opacity-60 hover:grayscale-0 transition-all duration-500">
          {companies.map((name, i) => (
            <span
              key={name}
              className={`text-2xl font-bold tracking-tighter ${i === companies.length - 1 ? "text-primary" : ""}`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create components/positioning.tsx**

```tsx
import { stats } from "@/lib/data";

export function Positioning() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48">
      <div className="grid md:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Architecture + AI.
            <br />
            One Senior Engineer.
            <br />
            No Agency Overhead.
          </h2>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            I bridge the gap between complex software architecture and
            production AI systems. No project managers, no junior devs — just
            one senior engineer who builds LangGraph multi-agent systems,
            architects microservices with DDD, and ships real products.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="mono-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/social-proof.tsx components/positioning.tsx && git commit -m "feat: add social proof and positioning sections"
```

---

### Task 6: Services Component

**Files:**
- Create: `components/services.tsx`

Asymmetric grid: featured card spans 8 cols, rest are 4 cols each.

- [ ] **Step 1: Create components/services.tsx**

```tsx
import { services } from "@/lib/data";

export function Services() {
  const [featured, ...rest] = services;

  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="services">
      <h2 className="text-3xl font-bold mb-12">What I Actually Do</h2>
      <div className="grid md:grid-cols-12 gap-6">
        {/* Featured Service */}
        <div className="md:col-span-8 bg-surface-container border border-primary/10 p-10 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
            <span
              className="material-symbols-outlined text-6xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {featured.icon}
            </span>
          </div>
          <div className="mono-label text-primary mb-4">Most Requested</div>
          <h3 className="text-3xl font-bold mb-4">{featured.title}</h3>
          <p className="text-on-surface-variant max-w-lg mb-8 leading-relaxed">
            {featured.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {featured.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface-container-highest text-slate-300 mono-label"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Remaining Services */}
        {rest.map((service) => (
          <div
            key={service.title}
            className="md:col-span-4 bg-surface-container p-10 group hover:bg-surface-container-high transition-all"
          >
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-on-surface-variant mb-6 text-sm">
              {service.description}
            </p>
            <span className="material-symbols-outlined text-primary">
              {service.icon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/services.tsx && git commit -m "feat: add services section with asymmetric grid"
```

---

### Task 7: Case Studies Component

**Files:**
- Create: `components/case-studies.tsx`

4 case studies in a 2x2 grid with corrected content.

- [ ] **Step 1: Create components/case-studies.tsx**

```tsx
import Image from "next/image";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="work">
      <h2 className="text-3xl font-bold mb-4">
        Proven Results. Across Industries. At Scale.
      </h2>
      <p className="text-on-surface-variant mb-16 max-w-xl">
        A selection of enterprise projects and strategic technical interventions.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        {caseStudies.map((study) => (
          <div key={study.company} className="flex flex-col">
            <div className="h-[400px] mb-8 overflow-hidden bg-surface-container-highest relative">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="mono-label text-primary">{study.tag}</span>
              <span className="font-bold text-xl">{study.company}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-lg font-bold">{metric.value}</div>
                  <div className="mono-label text-[9px] text-slate-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/30 mono-label"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/case-studies.tsx && git commit -m "feat: add case studies section with 4 corrected entries"
```

---

### Task 8: Engineering Philosophy Component

**Files:**
- Create: `components/engineering.tsx`

Dual code blocks — DDD TypeScript + LangGraph Python.

- [ ] **Step 1: Create components/engineering.tsx**

```tsx
export function Engineering() {
  return (
    <section className="bg-surface-container-low py-32 mb-48">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-16">Engineering Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-8 font-label text-xs">
          {/* DDD Code Block */}
          <div className="bg-surface-container-lowest p-6 border border-outline-variant/20 rounded shadow-2xl">
            <div className="flex gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
              <span className="ml-4 text-slate-500">
                {"// domain/order.service.ts (DDD)"}
              </span>
            </div>
            <pre className="text-slate-300 overflow-x-auto">
              <code>
                <span className="text-primary">@Injectable()</span>
                {"\n"}
                <span className="text-purple-400">export class</span>{" "}
                OrderService {"{"}
                {"\n"}
                {"  "}
                <span className="text-purple-400">async</span>{" "}
                createOrder(cmd: CreateOrderCommand) {"{"}
                {"\n"}
                {"    "}
                <span className="text-slate-500">
                  {"// Transactional consistency boundary"}
                </span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">return await</span>{" "}
                this.uow.execute(
                <span className="text-purple-400">async</span> (ctx){" => "}
                {"{"}
                {"\n"}
                {"      "}
                <span className="text-purple-400">const</span> order =
                Order.create(cmd);{"\n"}
                {"      "}
                <span className="text-purple-400">await</span>{" "}
                this.repo.save(order, ctx);{"\n"}
                {"      "}
                this.events.dispatch(new OrderCreated(order));{"\n"}
                {"    }"});{"\n"}
                {"  }"}
                {"\n}"}
              </code>
            </pre>
          </div>

          {/* LangGraph Code Block */}
          <div className="bg-surface-container-lowest p-6 border border-outline-variant/20 rounded shadow-2xl">
            <div className="flex gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
              <span className="ml-4 text-slate-500">
                {"# ai/agent_workflow.py (LangGraph)"}
              </span>
            </div>
            <pre className="text-slate-300 overflow-x-auto">
              <code>
                workflow = StateGraph(AgentState){"\n"}
                workflow.add_node(
                <span className="text-primary">{'"reason"'}</span>,
                reasoner_node){"\n"}
                workflow.add_node(
                <span className="text-primary">{'"tool_call"'}</span>,
                tool_executor){"\n"}
                {"\n"}
                workflow.add_conditional_edges({"\n"}
                {"    "}
                <span className="text-primary">{'"reason"'}</span>,{"\n"}
                {"    "}should_continue,{"\n"}
                {"    "}
                {"{"}
                <span className="text-primary">{'"continue"'}</span>:{" "}
                <span className="text-primary">{'"tool_call"'}</span>,{" "}
                <span className="text-primary">{'"end"'}</span>: END{"}"}
                {"\n"}){"\n"}
                {"\n"}app = workflow.compile()
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/engineering.tsx && git commit -m "feat: add engineering philosophy with dual code blocks"
```

---

### Task 9: Products + Articles + About Components

**Files:**
- Create: `components/products.tsx`
- Create: `components/articles.tsx`
- Create: `components/about.tsx`

- [ ] **Step 1: Create components/products.tsx**

```tsx
import { products } from "@/lib/data";

export function Products() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48">
      <h2 className="text-3xl font-bold mb-16">
        Products I&apos;ve Built, Not Just Deployed
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="p-8 bg-surface-container border border-outline-variant/10"
          >
            <div className="text-2xl font-bold mb-2">{product.name}</div>
            <div className="mono-label text-primary mb-6">
              {product.subtitle}
            </div>
            <p className="text-on-surface-variant text-sm mb-8">
              {product.description}
            </p>
            <span className="text-primary flex items-center gap-2 font-bold hover:gap-4 transition-all cursor-pointer">
              Explore{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create components/articles.tsx**

```tsx
import Image from "next/image";
import { articles } from "@/lib/data";

export function Articles() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="writing">
      <h2 className="text-3xl font-bold mb-12">I Share What I Learn</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer"
          >
            <div className="aspect-video bg-surface-container-highest mb-6 overflow-hidden relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="mono-label text-slate-500 mb-4 block">
              {article.date} · {article.readTime}
            </span>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-on-surface-variant text-sm mt-2">
              {article.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create components/about.tsx**

```tsx
import Image from "next/image";

export function About() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="about">
      <div className="grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5 aspect-square bg-surface-container relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASWXWcVJesLMhP9NrK-y6V833zR4kUvjse-s9vhjmFpVEriIsN2A8dHFjeduWTE2WFECXMseAyh1T9MiW4y91jVgONyjkfabfWjPCoo1XVXlGdAJGHOhXxc_j2MnyyMOKy_GNDBxXeFxmZP9cbL23vj6o2990JXhsepw9sDqY_HzzzMW4wnNcPgByXme3JJZ5vcGwZ-NkqXgvXJiLG4SCdlquN-m9Xl5BRlca1yqngOhnzBXNif3kl35Bgj8xfQr0A-7e2I3aN1A"
            alt="Jônatas Fernandes Pimenta"
            fill
            className="object-cover grayscale brightness-90"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border-r-2 border-b-2 border-primary/40" />
        </div>
        <div className="md:col-span-7">
          <h2 className="text-3xl font-bold mb-8">The Short Version</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              I started coding at 12 with RPG Maker and building neural networks
              by 17. That curiosity turned into a career at the intersection of
              software architecture and AI — building CxMapper (used by
              SulAmérica and Caixa Seguradora), architecting AI copilots for IoT
              platforms at Koru, and shipping AI recommendation engines in
              production.
            </p>
            <p>
              Today I consult for CTOs and technical founders who need both:
              someone to architect their backend and someone to ship real AI
              features — not prototypes. I also build my own AI-powered products
              (Livo, ClaudIA) because the best consultants understand what it
              means to own something end-to-end.
            </p>
            <p className="text-sm text-slate-500">
              MBA in Software Architecture (2025) · MBA in AI Engineering (2026)
              · Portuguese (native) · English (fluent)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/products.tsx components/articles.tsx components/about.tsx && git commit -m "feat: add products, articles, and about sections"
```

---

### Task 10: Contact Form + Footer Components

**Files:**
- Create: `components/contact.tsx`
- Create: `components/footer.tsx`

- [ ] **Step 1: Create components/contact.tsx**

```tsx
export function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="contact">
      <div className="bg-surface-container p-12 md:p-20 border border-outline-variant/10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-on-surface-variant mb-12">
            I&apos;m currently accepting new high-impact projects for 2026.
            Briefly describe your challenge and let&apos;s see if we&apos;re a
            fit.
          </p>
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="mono-label text-slate-500">Name</label>
                <input
                  className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-12 px-4 text-on-surface"
                  placeholder="Alexander Hamilton"
                  type="text"
                  name="name"
                />
              </div>
              <div className="space-y-2">
                <label className="mono-label text-slate-500">Email</label>
                <input
                  className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-12 px-4 text-on-surface"
                  placeholder="alex@company.com"
                  type="email"
                  name="email"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="mono-label text-slate-500">
                  Project Type
                </label>
                <select
                  className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-12 px-4 text-on-surface"
                  name="projectType"
                >
                  <option>AI Engineering / Agents</option>
                  <option>Architecture Audit / Refactor</option>
                  <option>New Product Development</option>
                  <option>Interim CTO / Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="mono-label text-slate-500">
                  Estimated Budget
                </label>
                <select
                  className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-12 px-4 text-on-surface"
                  name="budget"
                >
                  <option>$5k - $15k</option>
                  <option>$15k - $50k</option>
                  <option>$50k+</option>
                  <option>Retainer Basis</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="mono-label text-slate-500">
                Project Details
              </label>
              <textarea
                className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-32 px-4 py-3 text-on-surface"
                placeholder="What are we building? What's the main technical hurdle?"
                name="details"
              />
            </div>
            <button
              className="w-full md:w-auto bg-primary text-on-primary font-bold px-12 py-4 hover:brightness-110 transition-all"
              type="submit"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create components/footer.tsx**

```tsx
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[#3b4a3d]/15 bg-[#10141a]">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div className="font-label text-lg font-bold text-slate-100">JFP</div>
        <div className="font-label text-[10px] uppercase tracking-widest text-slate-500">
          &copy; 2026 J&ocirc;natas Fernandes Pimenta. All rights reserved.
        </div>
        <div className="flex gap-8">
          {Object.entries(socialLinks).map(([name, url]) => (
            <a
              key={name}
              className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#00E676] transition-colors duration-150"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/contact.tsx components/footer.tsx && git commit -m "feat: add contact form and footer"
```

---

### Task 11: Compose Main Page + Verify

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace app/page.tsx with all sections**

```tsx
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Positioning } from "@/components/positioning";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Engineering } from "@/components/engineering";
import { Products } from "@/components/products";
import { Articles } from "@/components/articles";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative pt-32 overflow-hidden">
        <Hero />
        <SocialProof />
        <Positioning />
        <Services />
        <CaseStudies />
        <Engineering />
        <Products />
        <Articles />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Start dev server and verify**

```bash
cd /Users/jhonny/Desktop/projects/jonatas-website
pnpm dev
```

Open http://localhost:3000 in a browser. Verify:
- Dark background (#10141a)
- Fixed nav with glass effect
- Hero with gradient text "AI That Ships"
- All 12 sections render without errors
- Images load from Google CDN
- Smooth scroll anchors work
- Contact form renders with dropdowns

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: compose all sections into main page"
```

---

### Task 12: Final Polish + Git Init

**Files:**
- Verify all components render correctly

- [ ] **Step 1: Run build to check for errors**

```bash
cd /Users/jhonny/Desktop/projects/jonatas-website
pnpm build
```

Expected: Build succeeds with no TypeScript errors.

- [ ] **Step 2: Fix any build errors found in Step 1**

Address any TypeScript or Next.js build errors.

- [ ] **Step 3: Final commit**

```bash
git add -A && git commit -m "feat: complete consulting website with all sections"
```
