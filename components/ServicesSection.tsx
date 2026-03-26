"use client";

import { motion } from "framer-motion";

const services = [
  { name: "Voice Agents", desc: "LiveKit + Deepgram. Sub-200ms latency. Tool calling, real-time UI, WhatsApp summaries.", tag: "What we do best" },
  { name: "AI Consulting", desc: "We map your ops, identify leverage points, and design the architecture — not a template, a blueprint for you.", tag: "" },
  { name: "ERP Integration", desc: "Deep Dynamics 365 F&O expertise. We connect your ERP to AI agents and automate workflows end-to-end.", tag: "" },
  { name: "RAG Pipelines", desc: "Qdrant-backed knowledge pipelines. Ingest PDFs, URLs, YouTube. Query accurately in milliseconds.", tag: "" },
  { name: "Rapid Builds", desc: "Full-stack products shipped in days. Next.js, Python, Postgres, Vercel — from brief to live URL, fast.", tag: "" },
  { name: "Agent Automation", desc: "Multi-agent systems that research, decide, and act. Automate manual workflows without losing control.", tag: "" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple mb-3">The studio</p>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            What we do
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-gray-100 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white p-8 hover:bg-surface-2 transition-colors"
            >
              {s.tag && (
                <span className="inline-block mb-3 rounded-full bg-purple/10 px-3 py-1 text-xs font-semibold text-purple">{s.tag}</span>
              )}
              <h3 className="font-heading text-xl font-bold text-ink">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
