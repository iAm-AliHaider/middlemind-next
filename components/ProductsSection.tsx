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
        </div>
      </div>
    </section>
  );
}
