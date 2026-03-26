"use client";

import { motion } from "framer-motion";

const flagships = [
  {
    name: "Taliq",
    category: "HR Platform",
    description:
      "Voice-first HR platform for Saudi enterprises. 116 voice tools across 11 modules — leave, attendance, loans, GOSI, interviews, and more. Built for Saudi Labor Law compliance.",
    stat: "116 voice tools",
    url: "https://taliq.middlemind.ai",
    gradient: "from-purple to-purple-dark",
  },
  {
    name: "HisabAI",
    category: "AI Accounting",
    description:
      "Saudi Arabia's first AI-powered accounting SaaS. ZATCA FATOORA compliant, AI transaction categorization, OCR receipt scanning, automated VAT returns, and cash flow forecasting.",
    stat: "ZATCA Compliant",
    url: "https://hisabai.middlemind.ai",
    gradient: "from-teal to-purple",
  },
  {
    name: "Mizan",
    category: "Financial Management",
    description:
      "Intelligent financial management platform for modern enterprises. Balance sheets, P&L reporting, budgets, and forecasting — all in one unified dashboard.",
    stat: "Full Finance Suite",
    url: "https://mizan.middlemind.ai",
    gradient: "from-purple-dark to-teal",
  },
  {
    name: "Haris",
    category: "Security & Document Intelligence",
    description:
      "Enterprise document scanning, OCR processing, and automated security audits. ZAP integration for vulnerability detection. Built for enterprise compliance and peace of mind.",
    stat: "Auto Security Audits",
    url: "#",
    gradient: "from-purple to-teal",
  },
  {
    name: "Finvox",
    category: "Financial Voice Agent",
    description:
      "AI voice agent for financial services. Handles loan applications, investment portfolios, OTP-secured onboarding, and post-call WhatsApp summaries — live in production.",
    stat: "33 voice tools",
    url: "https://mrna.middlemind.ai",
    gradient: "from-teal to-purple-dark",
  },
];

const portfolio = [
  {
    name: "GoNetwork",
    category: "Real Estate Intelligence",
    description: "Property portfolio intelligence for German B2B. 144 documents, OCR-processed, 13 analytical tabs.",
    stat: "13 analytics tabs",
    url: "https://gonetwork.middlemind.ai",
  },
  {
    name: "pikAui",
    category: "Project Management",
    description: "Voice-powered PM. Speak to create tasks, move sprints, log hours, and query your board in real time.",
    stat: "26 voice tools",
    url: "https://pikaui-pm.middlemind.ai",
  },
  {
    name: "Qanuni",
    category: "Legal Technology",
    description: "Law firm management for the Saudi market. ZATCA invoicing, Hijri calendar, bilingual Arabic/English.",
    stat: "28 modules",
    url: "https://qanuni.middlemind.ai",
  },
  {
    name: "Tamweel",
    category: "Islamic Fintech",
    description: "Islamic financing platform with Shariah-compliant loan workflows and seamless digital onboarding.",
    stat: "Shariah Compliant",
    url: "#",
  },
  {
    name: "Alamlak",
    category: "Real Estate Portal",
    description: "Client portal for real estate with property listings, analytics, and integrated CRM tools.",
    stat: "Full CRM",
    url: "#",
  },
  {
    name: "WA Blaster",
    category: "Marketing Automation",
    description: "WhatsApp campaign automation. Bulk messaging, contact management, and delivery tracking at scale.",
    stat: "Bulk Campaigns",
    url: "#",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-light-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-800 tracking-tight text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-xl mx-auto">
            10+ products across 5 industries, running on two production servers.
          </p>
        </motion.div>

        {/* Flagship label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-16 flex items-center gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-purple">Flagship Products</span>
          <div className="flex-1 h-px bg-purple/20" />
        </motion.div>

        {/* Flagship grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flagships.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl bg-white p-7 shadow-md transition-shadow hover:shadow-xl cursor-default"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${product.gradient}`} />
              <div className="flex items-center justify-between">
                <span className="inline-block rounded-full bg-purple/10 px-3 py-1 text-xs font-medium text-purple">
                  {product.category}
                </span>
                <span className="text-xs font-bold text-teal">{product.stat}</span>
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-gray-900">{product.name}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{product.description}</p>
              {product.url !== "#" && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-purple transition-opacity hover:opacity-70"
                >
                  View Live
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Portfolio label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 flex items-center gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Full Portfolio</span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        {/* Portfolio grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -3 }}
              className="group relative rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md cursor-default"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-purple/40 to-teal/40" />
              <div className="flex items-center justify-between">
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {product.category}
                </span>
                <span className="text-xs font-semibold text-teal">{product.stat}</span>
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold text-gray-900">{product.name}</h3>
              <p className="mt-1.5 text-sm leading-5 text-gray-500">{product.description}</p>
              {product.url !== "#" && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-medium text-purple transition-opacity hover:opacity-70"
                >
                  View Live →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
