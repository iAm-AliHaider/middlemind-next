"use client";

import { motion } from "framer-motion";

// Use jsDelivr CDN — cdn.simpleicons.org is unreliable for some brands
const CDN = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";
const techLogos = [
  { name: "LiveKit",    slug: "livekit",     bg: "#3ECF8E" },
  { name: "Deepgram",  slug: "deepgram",    bg: "#101010" },
  { name: "OpenAI",    slug: "openai",      bg: "#000000" },
  { name: "Anthropic", slug: "anthropic",   bg: "#CC785C" },
  { name: "Next.js",   slug: "nextdotjs",   bg: "#000000" },
  { name: "Vercel",    slug: "vercel",      bg: "#000000" },
  { name: "Python",    slug: "python",      bg: "#3776AB" },
  { name: "Docker",    slug: "docker",      bg: "#2496ED" },
  { name: "Tailwind",  slug: "tailwindcss", bg: "#06B6D4" },
  { name: "Prisma",    slug: "prisma",      bg: "#2D3748" },
  { name: "Qdrant",    slug: "qdrant",      bg: "#FF3A5C" },
  { name: "Neon",      slug: "postgresql",  bg: "#336791" },
  { name: "Redis",     slug: "redis",      bg: "#DC382D" },
  { name: "PostgreSQL",slug: "postgresql",  bg: "#336791" },
];

const pillars = [
  {
    title: "Real-Time Voice",
    description: "LiveKit + Deepgram Nova-3",
    slug: "livekit",
    bg: "#000000",
    color: "3ECF8E",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    title: "Intelligent Reasoning",
    description: "GPT-4o-mini + Claude Opus",
    slug: "anthropic",
    bg: "#CC785C",
    color: "ffffff",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Memory",
    description: "Qdrant vector DB. 76K+ knowledge chunks, millisecond recall.",
    slug: "qdrant",
    bg: "#FF3A5C",
    color: "ffffff",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
      </svg>
    ),
  },
  {
    title: "Saudi Compliance",
    description: "ZATCA + GOSI + Iqama",
    slug: "vercel",
    bg: "#000000",
    color: "ffffff",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Multi-Agent Crews",
    description: "CrewAI + 20 Specialized Agents",
    slug: "docker",
    bg: "#2496ED",
    color: "ffffff",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Generative UI",
    description: "LiveKit Data Channel + React",
    slug: "nextdotjs",
    bg: "#000000",
    color: "ffffff",
    icon: (
      <svg className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

function LogoChip({ tech }: { tech: typeof techLogos[0] }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm shrink-0">
      <div
        className="flex items-center justify-center w-6 h-6 rounded-md flex-shrink-0 overflow-hidden"
        style={{ backgroundColor: tech.bg }}
      >
        <img
          src={`${CDN}/${tech.slug}.svg`}
          alt={tech.name}
          width={14}
          height={14}
          className="object-contain"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{tech.name}</span>
    </div>
  );
}

function LogoMarquee({ items, reverse = false }: { items: typeof techLogos; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-1.5">
      <div
        className="flex gap-3 whitespace-nowrap"
        style={{ animation: `marquee ${reverse ? "38s" : "28s"} linear infinite ${reverse ? "reverse" : ""}` }}
      >
        {doubled.map((tech, i) => (
          <LogoChip key={i} tech={tech} />
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
            Production-grade infrastructure across every product we ship.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          <LogoMarquee items={row1} />
          <LogoMarquee items={row2} reverse />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-100 p-7"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 overflow-hidden"
                style={{ backgroundColor: p.bg }}
              >
                <img
                  src={`${CDN}/${p.slug}.svg`}
                  alt={p.title}
                  width={22}
                  height={22}
                  className="object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}