"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Each product has a unique SVG logo mark
const productLogos: Record<string, React.ReactNode> = {
  Taliq: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="12" fill="#7c3aed"/>
      <circle cx="24" cy="18" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M30 14l3-3M18 14l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <circle cx="24" cy="18" r="2" fill="white"/>
    </svg>
  ),
  HisabAI: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="12" fill="#0d9488"/>
      <rect x="12" y="12" width="10" height="10" rx="3" fill="white" opacity="0.9"/>
      <rect x="26" y="12" width="10" height="10" rx="3" fill="white" opacity="0.5"/>
      <rect x="12" y="26" width="10" height="10" rx="3" fill="white" opacity="0.5"/>
      <rect x="26" y="26" width="10" height="10" rx="3" fill="white" opacity="0.9"/>
      <path d="M17 17h2m5 0h6M17 31h6m5 0h2" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Mizan: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="12" fill="#7c3aed"/>
      <path d="M24 10v28M14 24h20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="14" cy="19" r="4" fill="white" opacity="0.7"/>
      <circle cx="34" cy="29" r="4" fill="white" opacity="0.7"/>
      <path d="M10 38h28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  Haris: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="12" fill="#dc2626"/>
      <path d="M24 10l12 5v10c0 7-5 12-12 13C17 37 12 32 12 25V15l12-5z" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Finvox: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="12" fill="#2563eb"/>
      <path d="M14 34V24l5 5 5-8 5 6 5-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="14" cy="24" r="2" fill="white"/>
      <circle cx="34" cy="26" r="2" fill="white"/>
    </svg>
  ),
};

const portfolioIcons: Record<string, React.ReactNode> = {
  GoNetwork: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill="#f59e0b"/>
      <rect x="6" y="10" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
      <path d="M6 14h20" stroke="white" strokeWidth="1.5"/>
      <circle cx="10" cy="19" r="1.5" fill="white"/>
    </svg>
  ),
  pikAui: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill="#8b5cf6"/>
      <rect x="7" y="9" width="6" height="6" rx="1.5" fill="white" opacity="0.9"/>
      <rect x="15" y="9" width="10" height="2.5" rx="1.25" fill="white" opacity="0.6"/>
      <rect x="15" y="13" width="7" height="2.5" rx="1.25" fill="white" opacity="0.4"/>
      <rect x="7" y="18" width="6" height="6" rx="1.5" fill="white" opacity="0.5"/>
      <rect x="15" y="18" width="10" height="2.5" rx="1.25" fill="white" opacity="0.6"/>
      <rect x="15" y="22" width="6" height="2.5" rx="1.25" fill="white" opacity="0.4"/>
    </svg>
  ),
  Qanuni: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill="#1d4ed8"/>
      <path d="M16 6l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" fill="white" opacity="0.9"/>
    </svg>
  ),
  Tamweel: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill="#059669"/>
      <path d="M9 22c0-4 3-7 7-7s7 3 7 7" stroke="white" strokeWidth="1.5" fill="none"/>
      <path d="M13 22V16M19 22V16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 22h16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" fill="white"/>
    </svg>
  ),
  Alamlak: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill="#d97706"/>
      <path d="M16 6l10 10v10H6V16L16 6z" stroke="white" strokeWidth="1.5" fill="none"/>
      <rect x="13" y="18" width="6" height="8" rx="1" fill="white" opacity="0.7"/>
    </svg>
  ),
  "WA Blaster": (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill="#16a34a"/>
      <path d="M16 6C10.5 6 6 10.5 6 16c0 2 .6 3.8 1.5 5.4L6 26l4.8-1.4A10 10 0 1016 6z" fill="white" opacity="0.9"/>
      <path d="M12 15c.5 1 1.5 3 4 4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

const flagships = [
  {
    name: "Taliq",
<<<<<<< Updated upstream
    tagline: "Voice-first HR for Saudi Arabia.",
    description: "116 voice tools across 11 modules. Leave, attendance, loans, GOSI, interviews — all spoken, all compliant with Saudi Labor Law.",
    stat1: { label: "Voice tools", value: "116" },
    stat2: { label: "Modules", value: "11" },
    accent: "#7c3aed",
    bg: "#f5f3ff",
    url: "https://taliq.middlemind.ai",
    badge: "HR Platform",
    modules: ["Leave requests", "Attendance", "GOSI queries", "Loan requests", "Interviews", "Payroll", "Grievances", "Performance", "Onboarding", "Offboarding", "Reports"],
  },
  {
    name: "HisabAI",
    tagline: "Saudi Arabia's first AI accountant.",
    description: "ZATCA FATOORA compliant. AI categorizes transactions, reads receipts via OCR, files VAT returns, and forecasts cash flow — automatically.",
    stat1: { label: "Compliance", value: "ZATCA" },
    stat2: { label: "AI engine", value: "GPT-4o" },
    accent: "#0d9488",
    bg: "#f0fdfa",
    url: "#",
    badge: "AI Accounting",
    modules: ["Transaction AI", "OCR receipts", "VAT returns", "Cash forecast", "P&L reports", "FATOORA", "Balance sheet", "Invoicing", "Audit trail", "Multi-company"],
  },
  {
    name: "Mizan",
    tagline: "Financial clarity, end to end.",
    description: "Balance sheets, P&L, budgets and forecasting — unified in one intelligent platform built for modern enterprises.",
    stat1: { label: "Reports", value: "Full suite" },
    stat2: { label: "Ready", value: "ERP" },
    accent: "#7c3aed",
    bg: "#faf5ff",
    url: "#",
    badge: "Finance",
    modules: ["Balance sheet", "P&L", "Budgeting", "Forecasting", "Cash flow", "Expenses", "Approvals", "Multi-entity", "FX support", "Audit"],
  },
  {
    name: "Haris",
    tagline: "Security intelligence that never sleeps.",
    description: "Document scanning, OCR processing, and automated security audits. ZAP integration detects vulnerabilities before attackers do.",
    stat1: { label: "Audit type", value: "Auto" },
    stat2: { label: "Engine", value: "OWASP ZAP" },
    accent: "#dc2626",
    bg: "#fff7f7",
    url: "#",
    badge: "Security",
    modules: ["Doc scanning", "OCR engine", "Vuln detection", "ZAP scans", "Risk scoring", "Compliance", "Access audit", "DAST testing", "API scanning", "Alerts"],
  },
  {
    name: "Finvox",
    tagline: "Your AI banker, always on call.",
    description: "Handles loan applications, investment portfolio queries, OTP-secured onboarding, and sends WhatsApp summaries post-call. 33 voice tools live.",
    stat1: { label: "Voice tools", value: "33" },
    stat2: { label: "Follow-up", value: "WhatsApp" },
    accent: "#2563eb",
    bg: "#eff6ff",
    url: "https://mrna.middlemind.ai",
    badge: "Fintech Voice",
    modules: ["Loan apps", "Portfolio queries", "OTP onboarding", "Credit check", "KYC flow", "Risk scoring", "Payment setup", "Statements", "WhatsApp recap", "Compliance"],
=======
    tagline: "Voice-First HR Platform",
    description:
      "Replaces legacy intranet portals with a voice-first experience. Employees speak to manage leave, attendance, loans, documents, and more. Managers get a full admin dashboard with 23 tabs.",
    features: [
      "116 voice tools across 11 modules",
      "Saudi compliance: GOSI, EOS, Iqama tracking",
      "PIN auth + role-based access (employee/manager/HR/admin)",
      "Admin-editable letter templates with PDF export",
      "Multi-dimensional interview scoring",
      "Smart Turn v3.2 voice detection",
    ],
    tech: ["LiveKit", "Deepgram", "GPT-4o-mini", "Kokoro TTS", "Next.js 15", "Neon Postgres"],
    stat: "116",
    statLabel: "Voice Tools",
    color: "from-violet-500 to-purple-600",
    url: "https://taliq-app.vercel.app",
  },
  {
    name: "Qanuni",
    tagline: "Law Firm Management",
    description:
      "End-to-end legal operations platform for Saudi law firms. Manages cases, clients, court filings, time tracking, invoicing, trust accounts, and compliance — all with ZATCA e-invoicing built in.",
    features: [
      "28 modules: cases, clients, billing, compliance, HR",
      "ZATCA Phase 1 e-invoicing (TLV QR + UBL XML)",
      "9-role RBAC with 23-module permission matrix",
      "Hijri calendar integration (islamic-umalqura)",
      "Bilingual AR/EN with 350+ translation keys",
      "Client portal with separate auth flow",
    ],
    tech: ["Next.js 16", "Neon Postgres", "Tailwind v4", "jsPDF", "ZATCA", "Vercel"],
    stat: "28",
    statLabel: "Modules",
    color: "from-emerald-500 to-teal-600",
    url: "https://qanuni.vercel.app",
  },
  {
    name: "Finvox",
    tagline: "AI Financial Services Agent",
    description:
      "Voice agent for loans and investment portfolio management. Customers call in, verify via OTP, and manage their finances entirely through conversation. Post-call summaries delivered via WhatsApp.",
    features: [
      "33 voice tools (loans, investments, KYC, NL2SQL)",
      "OTP-secured onboarding via WhatsApp",
      "Live call transcript with PII masking",
      "Post-call summary auto-sent via WhatsApp",
      "Employee escalation mode with elevated tools",
      "3-step new customer registration (voice+form)",
    ],
    tech: ["LiveKit", "Deepgram", "GPT-4o-mini", "Kokoro TTS", "Neon Postgres", "WhatsApp"],
    stat: "33",
    statLabel: "Voice Tools",
    color: "from-blue-500 to-indigo-600",
    url: "https://finvox-app.vercel.app",
  },
  {
    name: "pikAui PM",
    tagline: "Voice Project Management",
    description:
      "Speak commands to manage your projects. Create tasks, move sprints, log hours, assign work, and run analytics — the dashboard updates in real time via LiveKit data channel.",
    features: [
      "26 voice tools + NL-to-SQL analytics",
      "9-tab dashboard: Board, Team, Docs, Analytics",
      "Drag-and-drop Kanban with live API sync",
      "Time tracking, progress slider, task comments",
      "Screen-aware agent reads current context",
      "Floating voice button with connection states",
    ],
    tech: ["LiveKit", "Deepgram", "GPT-4o-mini", "Kokoro TTS", "Next.js 15", "asyncpg"],
    stat: "26",
    statLabel: "Voice Tools",
    color: "from-orange-500 to-amber-600",
    url: "https://pikaui-pm.vercel.app",
  },
  {
    name: "pikAui",
    tagline: "Generative UI Platform",
    description:
      "First open-source voice agent with real-time generative UI rendering. Voice tools call React widgets over LiveKit data channel — the interface builds itself as you speak.",
    features: [
      "5 generative widget types (cards, forms, charts)",
      "LiveKit Data Channel as voice-to-UI bridge",
      "Tambo-style component rendering pipeline",
      "7-sector template catalog (healthcare to finance)",
      "Scaffold CLI for rapid new agent creation",
      "Mobile-first PWA with HTTPS mic access",
    ],
    tech: ["LiveKit", "Deepgram", "GPT-4o-mini", "Kokoro TTS", "Next.js 15", "React"],
    stat: "5",
    statLabel: "Widget Types",
    color: "from-pink-500 to-rose-600",
    url: "https://pikaui-app.vercel.app",
  },
  {
    name: "GoNetwork",
    tagline: "Real Estate Intelligence",
    description:
      "Property portfolio intelligence platform for a German real estate network. 144 documents OCR-extracted and surfaced across 13 analytical tabs — P&L, valuations, tenant risk, social housing exposure, and tax estimates.",
    features: [
      "13 analytics tabs: Portfolio, P&L, Tax, Tenants, Anomalies",
      "144 documents OCR-extracted (94.7% coverage)",
      "Social housing exposure analysis (Jobcenter tracking)",
      "Transaction anomaly detection with severity scoring",
      "Account intelligence and transfer network mapping",
      "Full-text search across all extracted data",
    ],
    tech: ["Next.js 16", "SQLite", "Tailwind", "OCR", "Recharts", "Vercel"],
    stat: "13",
    statLabel: "Analytics Tabs",
    color: "from-cyan-500 to-sky-600",
    url: "https://gonetwork-app.vercel.app",
  },
  {
    name: "ImmoFinanz",
    tagline: "German Property Platform",
    description:
      "Mortgage and property management platform for the German market. Developers list properties, customers apply for financing, and partner banks compete on offers — all through 4 distinct portals.",
    features: [
      "4 portals: Admin, Customer, Bank Advisor, Bank Admin",
      "41+ routes with MaBV milestone tracking",
      "Financing calculator and application workflow",
      "Document vault with S3/MinIO backend",
      "Bank offer comparison engine",
      "Prisma ORM + full seed data",
    ],
    tech: ["Next.js 16", "Prisma", "Neon Postgres", "Tailwind", "NextAuth", "Vercel"],
    stat: "4",
    statLabel: "Portals",
    color: "from-lime-500 to-green-600",
    url: "https://immofinanz-app.vercel.app",
  },
  {
    name: "PartyApp",
    tagline: "Civic Technology Platform",
    description:
      "Political party management for Pakistan Awaam Raaj Tehreek. Member registration, district/tehsil hierarchy, scoring, rankings, WhatsApp announcements, and a full admin panel.",
    features: [
      "2,000+ members across 164 districts, 409 tehsils",
      "Member scoring, rankings, and referral tracking",
      "WhatsApp announcement pipeline (bulk delivery)",
      "Admin panel with member management and stats",
      "Constituency-level analytics and coverage maps",
      "PWA with mobile-first dashboard",
    ],
    tech: ["Next.js", "Neon Postgres", "NextAuth", "Tailwind", "WhatsApp API", "Vercel"],
    stat: "2K+",
    statLabel: "Members",
    color: "from-red-500 to-rose-600",
    url: "https://partyapp-jet.vercel.app",
  },
  {
    name: "WA Campaigns",
    tagline: "WhatsApp Marketing Automation",
    description:
      "Bulk WhatsApp messaging platform for political and business campaigns. Import contacts from Excel, personalize templates, track delivery in real time, and auto-retry failed sends.",
    features: [
      "Excel import with phone normalization",
      "Personalized templates with {Name} merge tags",
      "Real-time delivery progress bar and live log",
      "Auto-retry logic with increasing backoff",
      "WhatsApp-style message preview",
      "Cloudflare tunnel for remote access",
    ],
    tech: ["Node.js", "Baileys", "SQLite", "Express", "xlsx", "Cloudflare"],
    stat: "341",
    statLabel: "Contacts Managed",
    color: "from-green-500 to-emerald-600",
    url: "https://middlemind-next.vercel.app/#wa-campaigns",
  },
  {
    name: "Maya",
    tagline: "AI Consultant Agent",
    description:
      "Conversational AI consultant available 24/7 on the MiddleMind website. Handles product inquiries, technical scoping, and partnership discussions — voice-first, no forms, no waiting.",
    features: [
      "Always-on voice agent on middlemind.ai",
      "Bilingual Arabic/English support",
      "Product knowledge across all MiddleMind offerings",
      "Technical scoping and discovery calls",
      "LiveKit Cloud with sub-second latency",
      "Kokoro TTS for natural voice quality",
    ],
    tech: ["LiveKit", "Deepgram", "GPT-4o-mini", "Kokoro TTS", "Edge TTS", "FastAPI"],
    stat: "24/7",
    statLabel: "Availability",
    color: "from-purple-500 to-violet-600",
    url: "https://middlemind-next.vercel.app",
>>>>>>> Stashed changes
  },
];

const portfolio = [
  { name: "GoNetwork", cat: "Real Estate Intel", desc: "144 docs OCR-processed, 13 analytics tabs. German B2B intelligence.", url: "https://gonetwork.middlemind.ai" },
  { name: "pikAui", cat: "Project Management", desc: "Voice-powered PM. Speak to create tasks, move sprints, log hours.", url: "https://pikaui-pm.middlemind.ai" },
  { name: "Qanuni", cat: "Legal Tech", desc: "Law firm OS for Saudi. ZATCA invoicing, Hijri calendar, bilingual.", url: "https://qanuni.middlemind.ai" },
  { name: "Tamweel", cat: "Islamic Fintech", desc: "Shariah-compliant loan workflows with digital onboarding.", url: "#" },
  { name: "Alamlak", cat: "Real Estate", desc: "Property listings, analytics and CRM in one client portal.", url: "#" },
  { name: "WA Blaster", cat: "Marketing", desc: "WhatsApp bulk campaigns. Contact management and delivery.", url: "#" },
];

function ProductMockup({ product }: { product: typeof flagships[0] }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/3] p-6 flex flex-col justify-between"
      style={{ backgroundColor: product.bg }}
    >
      {/* Logo top left */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {productLogos[product.name]}
          <span className="font-heading font-extrabold text-lg text-gray-900">{product.name}</span>
        </div>
        <div className="h-7 w-20 rounded-lg opacity-20" style={{ backgroundColor: product.accent }} />
      </div>

      {/* Module chips */}
      <div className="flex flex-wrap gap-2 my-2">
        {product.modules.slice(0, 7).map((m) => (
          <span
            key={m}
            className="rounded-lg px-2.5 py-1 text-xs font-medium"
            style={{ backgroundColor: product.accent + "18", color: product.accent }}
          >
            {m}
          </span>
        ))}
      </div>

      {/* Big ghost stat */}
      <p className="font-heading text-6xl font-extrabold mt-2" style={{ color: product.accent + "20" }}>
        {product.stat1.value}
      </p>

      {/* Corner badge */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-xl bg-white/85 backdrop-blur-sm px-3 py-1.5 shadow-sm">
        <span className="text-xs font-semibold text-gray-700">{product.badge}</span>
      </div>
    </div>
  );
}

function FlagshipCard({ product, index }: { product: typeof flagships[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 border-t border-gray-100"
    >
      {/* Text */}
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        {/* Product logo + name */}
        <div className="flex items-center gap-3 mb-5">
          {productLogos[product.name]}
          <div>
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: product.accent + "18", color: product.accent }}>
              {product.badge}
            </span>
          </div>
        </div>

        <h3 className="font-heading text-5xl font-extrabold tracking-tight text-gray-900">{product.name}</h3>
        <p className="mt-3 text-xl font-medium text-gray-500">{product.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-gray-500">{product.description}</p>

        <div className="mt-8 flex items-center gap-8">
          <div>
            <p className="text-3xl font-extrabold" style={{ color: product.accent }}>{product.stat1.value}</p>
            <p className="mt-0.5 text-xs font-medium text-gray-400 uppercase tracking-wide">{product.stat1.label}</p>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div>
            <p className="text-3xl font-extrabold text-gray-900">{product.stat2.value}</p>
            <p className="mt-0.5 text-xs font-medium text-gray-400 uppercase tracking-wide">{product.stat2.label}</p>
          </div>
        </div>

        {product.url !== "#" && (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold rounded-full border border-gray-200 px-5 py-2.5 text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Open live product
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>

      {/* Mockup */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <ProductMockup product={product} />
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
<<<<<<< Updated upstream
    <section id="products" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">What we ship</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Our products
            </h2>
            <p className="text-sm text-gray-400">10+ live · 5 industries</p>
          </div>
        </div>

        <div>
          {flagships.map((p, i) => <FlagshipCard key={p.name} product={p} index={i} />)}
        </div>

        {/* Portfolio */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Full portfolio</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-purple-200 hover:bg-purple-50/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  {portfolioIcons[p.name]}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{p.cat}</p>
                    <h4 className="font-heading text-lg font-bold text-gray-900">{p.name}</h4>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{p.desc}</p>
                {p.url !== "#" && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-purple-600 hover:opacity-70 transition-opacity">
                    View live →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
=======
    <section id="products" className="py-24 bg-light-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-800 tracking-tight text-gray-900 sm:text-4xl">
            What We Build
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Ten production products across HR, legal, finance, real estate, civic
            tech, and marketing — each shipped in days, not months.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Gradient header bar */}
              <div
                className={`h-2 bg-gradient-to-r ${product.color}`}
              />

              <div className="p-6 sm:p-8">
                {/* Top row: name + stat */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-gray-500">
                      {product.tagline}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div
                      className={`text-3xl font-800 font-heading bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}
                    >
                      {product.stat}
                    </div>
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {product.statLabel}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {product.description}
                </p>

                {/* Features grid */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${product.color} px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md`}
                  >
                    View Live
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H18m0 0v4.5m0-4.5l-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
>>>>>>> Stashed changes
        </div>
      </div>
    </section>
  );
}
