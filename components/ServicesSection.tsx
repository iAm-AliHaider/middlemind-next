"use client";

import { motion } from "framer-motion";

const services = [
<<<<<<< Updated upstream
  { name: "Voice Agents", desc: "LiveKit + Deepgram. Sub-200ms latency. Tool calling, real-time UI, WhatsApp summaries.", tag: "What we do best" },
  { name: "AI Consulting", desc: "We map your ops, identify leverage points, and design the architecture — not a template, a blueprint for you.", tag: "" },
  { name: "ERP Integration", desc: "Deep Dynamics 365 F&O expertise. We connect your ERP to AI agents and automate workflows end-to-end.", tag: "" },
  { name: "RAG Pipelines", desc: "Qdrant-backed knowledge pipelines. Ingest PDFs, URLs, YouTube. Query accurately in milliseconds.", tag: "" },
  { name: "Rapid Builds", desc: "Full-stack products shipped in days. Next.js, Python, Postgres, Vercel — from brief to live URL, fast.", tag: "" },
  { name: "Agent Automation", desc: "Multi-agent systems that research, decide, and act. Automate manual workflows without losing control.", tag: "" },
=======
  {
    name: "AI Voice Agents",
    description:
      "LiveKit-powered voice agents with sub-second latency, Deepgram STT, GPT-4o-mini reasoning, and Kokoro local TTS. Deployed in HR, legal, finance, and customer support — production-grade, not demos.",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    name: "AI Consulting",
    description:
      "We map your operations, identify automation leverage points, and design an AI architecture built for your context — not a template. Specializing in Saudi Arabia, Pakistan, and the GCC market.",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    name: "ERP & D365 Integration",
    description:
      "Deep Microsoft Dynamics 365 F&O expertise — 76,934 documentation chunks indexed and queryable. We connect ERP data to AI agents, automate workflows, and build interfaces your team will actually use.",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.07-9.07l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
      </svg>
    ),
  },
  {
    name: "WhatsApp Automation",
    description:
      "Bulk messaging campaigns, OTP delivery, post-call summaries, and transactional notifications via WhatsApp — with auto-retry, personalized templates, and real-time delivery tracking.",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    name: "RAG & Knowledge Pipelines",
    description:
      "Qdrant-backed knowledge pipelines with Ollama embeddings. Ingest documents, PDFs, URLs, YouTube, and RSS feeds — query them accurately in milliseconds with NL-to-SQL as a bonus layer.",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
      </svg>
    ),
  },
  {
    name: "Saudi Compliance Systems",
    description:
      "ZATCA Phase 1 e-invoicing (TLV QR + UBL XML), GOSI contribution calculations for Saudi and non-Saudi employees, EOS gratuity per Labor Law, Iqama/visa tracking, and Hijri calendar integration.",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Multi-Agent Automation",
    description:
      "CrewAI-powered multi-agent workforces — 20 specialized agents across dev, research, review, product, finance, startup, debug, and audit crews. All local, all free, orchestrated by Nexus.",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: "Document Intelligence",
    description:
      "OCR extraction from PDFs, scans, and images — structured, enriched, and indexed into queryable databases. Proven on 144 real estate documents across German, Arabic, and English.",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    name: "Rapid Full-Stack Development",
    description:
      "Complete products shipped in 24–48 hours. Next.js 15, Python FastAPI, Neon Postgres, Vercel — from brief to production URL faster than most teams finish discovery.",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
>>>>>>> Stashed changes
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple mb-3">The studio</p>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            What we do
          </h2>
<<<<<<< Updated upstream
        </div>
=======
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Nine specialized disciplines — from Saudi compliance and voice agents to multi-agent automation and document intelligence.
          </p>
        </motion.div>
>>>>>>> Stashed changes

        <div className="grid grid-cols-1 gap-px bg-gray-100 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
<<<<<<< Updated upstream
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white p-8 hover:bg-gray-50 transition-colors"
=======
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="rounded-xl border border-gray-100 bg-white p-6 hover:shadow-md transition-shadow"
>>>>>>> Stashed changes
            >
              {s.tag && (
                <span className="inline-block mb-3 rounded-full bg-purple/10 px-3 py-1 text-xs font-semibold text-purple">{s.tag}</span>
              )}
              <h3 className="font-heading text-xl font-bold text-gray-900">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
