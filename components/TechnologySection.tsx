"use client";

import { motion } from "framer-motion";

const row1 = ["LiveKit", "Deepgram", "OpenAI", "Anthropic", "Neon Postgres", "Next.js 16", "FastAPI", "Qdrant"];
const row2 = ["Python", "Vercel", "Tailwind CSS", "Prisma", "Docker", "Ollama", "Redis", "n8n"];

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div className={`flex gap-4 whitespace-nowrap ${reverse ? "" : "animate-marquee"}`}
        style={reverse ? { animation: "marquee 35s linear infinite reverse" } : {}}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-ink-soft shadow-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-surface-2 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-purple mb-3">Stack</p>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-ink">
            Built on the best.
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            We choose tools that scale. Every product in our portfolio runs on production-grade infrastructure.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          <Marquee items={row1} />
          <Marquee items={row2} reverse />
        </div>

        {/* Three pillars */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: "Real-Time Voice", body: "LiveKit orchestrates sub-200ms audio streams. Deepgram transcribes with 98%+ accuracy. Zero lag conversations.", icon: "🎙" },
            { title: "Enterprise Memory", body: "Qdrant vector DB with Ollama embeddings. 76,000+ knowledge chunks queryable in milliseconds.", icon: "🧠" },
            { title: "Intelligent Reasoning", body: "Claude Sonnet and GPT-4o handle complex tool use, multi-step logic, and context across long sessions.", icon: "⚡" },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-100 p-7"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="mt-4 font-heading text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
