"use client";

import { motion } from "framer-motion";

const row1 = ["LiveKit", "Deepgram", "OpenAI", "Anthropic", "Neon Postgres", "Next.js"];
const row2 = ["Python", "Vercel", "Tailwind CSS", "LangChain", "Qdrant", "Ollama"];

const pillars = [
  {
    title: "Real-Time Voice",
    description: "LiveKit + Deepgram",
    icon: (
      <svg className="h-8 w-8 text-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    title: "Intelligent Reasoning",
    description: "GPT-4o + Claude",
    icon: (
      <svg className="h-8 w-8 text-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Memory",
    description: "Qdrant + RAG",
    icon: (
      <svg className="h-8 w-8 text-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
      </svg>
    ),
  },
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-6 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechnologySection() {
  return (
    <section id="technology" className="py-32 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-400 mb-6">
            Technology Stack
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Built on the Best
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center group"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple/20 border border-purple/20 group-hover:bg-purple/30 group-hover:border-purple/40 transition-all">
                {pillar.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-500">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}