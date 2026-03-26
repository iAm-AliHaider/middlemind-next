"use client";

import { motion } from "framer-motion";

// Tech logos as inline SVGs — no CDN dependency
const techLogos = [
  {
    name: "LiveKit",
    color: "#3ECF8E",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#3ECF8E"/>
        <path d="M8 28V12l8 8-8 8zm8-8l8-8v16l-8-8zm8 0l8-8v16l-8-8z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Deepgram",
    color: "#101010",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#101010"/>
        <circle cx="20" cy="20" r="8" stroke="#13EF93" strokeWidth="2.5" fill="none"/>
        <circle cx="20" cy="20" r="3" fill="#13EF93"/>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    color: "#000000",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#000000"/>
        <path d="M20 8c-2.2 0-4 1.8-4 4v1.2A7.5 7.5 0 0012 20c0 2.5 1.2 4.7 3 6.1V27a4 4 0 008 0v-.9c1.8-1.4 3-3.6 3-6.1a7.5 7.5 0 00-4-6.6V12c0-2.2-1.8-4-4-4zm0 3a1 1 0 011 1v.6a7.5 7.5 0 00-2 0V12a1 1 0 011-1zm-4.5 9a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Anthropic",
    color: "#CC785C",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#CC785C"/>
        <path d="M14 28l6-16 6 16M16.5 22h7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#000000",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#000000"/>
        <path d="M13 28V12l14 16V12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="30" cy="12" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "#000000",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#000000"/>
        <path d="M20 10l12 20H8L20 10z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#3776AB"/>
        <path d="M20 8c-5 0-8 2-8 5v3h8v1H10c-3 0-5 2-5 5s2 5 5 5h2v-3c0-3 2-5 5-5h6c3 0 5-2 5-5v-3c0-3-3-3-8-3zm-2 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="white"/>
        <path d="M20 32c5 0 8-2 8-5v-3h-8v-1h10c3 0 5-2 5-5s-2-5-5-5h-2v3c0 3-2 5-5 5h-6c-3 0-5 2-5 5v3c0 3 3 3 8 3zm2-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#2496ED"/>
        <rect x="8" y="18" width="5" height="4" rx="1" fill="white"/>
        <rect x="15" y="18" width="5" height="4" rx="1" fill="white"/>
        <rect x="22" y="18" width="5" height="4" rx="1" fill="white"/>
        <rect x="15" y="12" width="5" height="4" rx="1" fill="white"/>
        <rect x="22" y="12" width="5" height="4" rx="1" fill="white"/>
        <path d="M8 24c0 3 2 5 7 5h10c4 0 7-2 7-6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 20c2 0 3-1 3-2s-2-2-4-1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#06B6D4"/>
        <path d="M20 14c-3 0-5 1.5-6 4.5 1-1.5 2.5-2 4-1.5 1 .3 1.6 1 2.3 1.8C21.4 20 22.8 21 25 21c3 0 5-1.5 6-4.5-1 1.5-2.5 2-4 1.5-1-.3-1.6-1-2.3-1.8C23.6 15 22.2 14 20 14zm-6 7c-3 0-5 1.5-6 4.5 1-1.5 2.5-2 4-1.5 1 .3 1.6 1 2.3 1.8C15.4 27 16.8 28 19 28c3 0 5-1.5 6-4.5-1 1.5-2.5 2-4 1.5-1-.3-1.6-1-2.3-1.8C17.6 22 16.2 21 14 21z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Prisma",
    color: "#2D3748",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#2D3748"/>
        <path d="M12 30L20 8l12 18-12 2-8-20z" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M20 8l12 18-12 2V8z" fill="white" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "Qdrant",
    color: "#FF3A5C",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#FF3A5C"/>
        <polygon points="20,8 32,15 32,25 20,32 8,25 8,15" stroke="white" strokeWidth="2" fill="none"/>
        <polygon points="20,14 26,18 26,24 20,28 14,24 14,18" fill="white" opacity="0.5"/>
        <circle cx="20" cy="20" r="3" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Neon",
    color: "#00E699",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#000000"/>
        <path d="M10 28V12l7 8V12h6v16l-7-8v8H10z" fill="#00E699"/>
        <path d="M26 20l5-8v16l-5-8z" fill="#00E699" opacity="0.5"/>
      </svg>
    ),
  },
];

function LogoMarquee({ items, reverse = false }: { items: typeof techLogos; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div
        className="flex gap-3 whitespace-nowrap"
        style={{ animation: `marquee ${reverse ? "35s" : "28s"} linear infinite ${reverse ? "reverse" : ""}` }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm shrink-0"
          >
            {tech.svg}
            <span className="text-sm font-medium text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechnologySection() {
  const half = Math.ceil(techLogos.length / 2);
  const row1 = techLogos.slice(0, half);
  const row2 = techLogos.slice(half);

  return (
    <section id="technology" className="py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">Stack</p>
          <h2 className="font-heading font-extrabold tracking-tight text-gray-900" style={{ fontSize: "clamp(1.75rem, 6vw, 3rem)" }}>
            Built on the best.
          </h2>
          <p className="mt-4 text-base text-gray-500">
            We choose tools that scale. Every product in our portfolio runs on production-grade infrastructure.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          <LogoMarquee items={row1} />
          <LogoMarquee items={row2} reverse />
        </div>

        {/* Three pillars */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { title: "Real-Time Voice", body: "LiveKit + Deepgram. Sub-200ms, 98%+ accuracy, zero lag.", icon: "🎙️" },
            { title: "Enterprise Memory", body: "Qdrant vector DB. 76K+ knowledge chunks, millisecond recall.", icon: "🧠" },
            { title: "Intelligent Reasoning", body: "Claude + GPT-4o for complex tool use and long-context sessions.", icon: "⚡" },
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
              <h3 className="mt-4 font-heading text-lg font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
