"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Taliq",
    category: "HR Platform",
    description:
      "Voice-first HR platform for Saudi enterprises. 116 voice tools across 11 modules — leave, attendance, loans, GOSI, interviews, and more. Built for Saudi Labor Law compliance.",
    stat: "116 voice tools",
    url: "https://taliq.middlemind.ai",
  },
  {
    name: "Finvox",
    category: "Financial Services",
    description:
      "AI voice agent for financial services. Handles loan applications, investment portfolios, OTP-secured onboarding, and post-call WhatsApp summaries — live in production.",
    stat: "33 voice tools",
    url: "https://mrna.middlemind.ai",
  },
  {
    name: "Maya",
    category: "AI Consultant",
    description:
      "Conversational AI consultant available 24/7. Handles product inquiries, technical scoping, and partnership discussions — voice-first, no forms, no waiting.",
    stat: "Always available",
    url: "https://middlemind.ai",
  },
  {
    name: "GoNetwork",
    category: "Real Estate Intelligence",
    description:
      "Property portfolio intelligence platform for German B2B. 144 documents extracted, OCR-processed, and surfaced across 13 analytical tabs — P&L, valuations, tenants, tax, and anomalies.",
    stat: "13 analytics tabs",
    url: "https://gonetwork.middlemind.ai",
  },
  {
    name: "pikAui",
    category: "Project Management",
    description:
      "Voice-powered project management platform. Speak commands to create tasks, move sprints, log hours, and query your board — the dashboard updates in real time.",
    stat: "26 voice tools",
    url: "https://pikaui-pm.middlemind.ai",
  },
  {
    name: "Qanuni",
    category: "Legal Technology",
    description:
      "Full-stack law firm management for the Saudi market. Case management, ZATCA Phase 1 invoicing, Hijri calendar, RBAC across 9 roles, and a bilingual Arabic/English interface.",
    stat: "28 modules",
    url: "https://qanuni.middlemind.ai",
  },
];

export default function ProductsSection() {
  return (
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
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md cursor-default"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-purple to-teal" />
              <div className="flex items-center justify-between">
                <span className="inline-block rounded-full bg-purple/10 px-3 py-1 text-xs font-medium text-purple">
                  {product.category}
                </span>
                <span className="text-xs font-semibold text-teal">{product.stat}</span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {product.description}
              </p>
              {product.url !== "#" && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-purple transition-colors hover:opacity-70"
                >
                  View Live
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
