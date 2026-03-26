"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    emoji: "🎙",
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
    emoji: "📊",
    modules: ["Transaction AI", "OCR receipts", "VAT returns", "Cash forecast", "P&L reports", "FATOORA submit", "Balance sheet", "Invoicing", "Audit trail", "Multi-company", "Dashboards"],
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
    emoji: "⚖️",
    modules: ["Balance sheet", "P&L", "Budgeting", "Forecasting", "Cash flow", "Expenses", "Approvals", "Multi-entity", "FX support", "Audit", "Reports"],
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
    emoji: "🛡",
    modules: ["Doc scanning", "OCR engine", "Vuln detection", "ZAP integration", "Risk scoring", "Compliance", "Access audit", "DAST testing", "API scanning", "Reports", "Alerts"],
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
    emoji: "💬",
    modules: ["Loan apps", "Portfolio queries", "OTP onboarding", "Credit check", "KYC flow", "Risk scoring", "Payment setup", "Statements", "WhatsApp recap", "Escalations", "Compliance"],
  },
];

const portfolio = [
  { name: "GoNetwork", cat: "Real Estate Intel", desc: "144 docs, OCR-processed, 13 analytics tabs. German B2B property intelligence.", url: "https://gonetwork.middlemind.ai" },
  { name: "pikAui", cat: "Project Management", desc: "Voice-powered PM. Speak to create tasks, move sprints, log hours.", url: "https://pikaui-pm.middlemind.ai" },
  { name: "Qanuni", cat: "Legal Tech", desc: "Law firm OS for Saudi market. ZATCA invoicing, Hijri calendar, bilingual.", url: "https://qanuni.middlemind.ai" },
  { name: "Tamweel", cat: "Islamic Fintech", desc: "Shariah-compliant loan workflows with digital onboarding.", url: "#" },
  { name: "Alamlak", cat: "Real Estate", desc: "Property listings, analytics and CRM in one client portal.", url: "#" },
  { name: "WA Blaster", cat: "Marketing", desc: "WhatsApp bulk campaigns. Contact management and delivery tracking.", url: "#" },
];

function ProductMockup({ product }: { product: typeof flagships[0] }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/3] p-6 flex flex-col justify-between"
      style={{ backgroundColor: product.bg }}
    >
      {/* Top bar mockup */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: product.accent + "40" }} />
          <div className="h-2 w-20 rounded-full bg-gray-200" />
        </div>
        <div className="h-6 w-16 rounded-lg" style={{ backgroundColor: product.accent + "20" }} />
      </div>

      {/* Module tags */}
      <div className="flex flex-wrap gap-2">
        {product.modules.slice(0, 8).map((m) => (
          <span
            key={m}
            className="rounded-lg px-2.5 py-1 text-xs font-medium"
            style={{ backgroundColor: product.accent + "15", color: product.accent }}
          >
            {m}
          </span>
        ))}
      </div>

      {/* Big stat */}
      <div className="mt-4">
        <p className="font-heading text-5xl font-extrabold" style={{ color: product.accent + "25" }}>
          {product.stat1.value}
        </p>
      </div>

      {/* Corner badge */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-xl bg-white/80 backdrop-blur-sm px-3 py-1.5 shadow-sm">
        <span className="text-sm">{product.emoji}</span>
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
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-5"
          style={{ backgroundColor: product.accent + "18", color: product.accent }}
        >
          {product.badge}
        </span>
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

      {/* Visual */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <ProductMockup product={product} />
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">What we ship</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Our products
            </h2>
            <p className="text-sm text-gray-400">10+ live · 5 industries</p>
          </div>
        </div>

        {/* Flagships */}
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
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">{p.cat}</p>
                <h4 className="font-heading text-xl font-bold text-gray-900">{p.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
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
