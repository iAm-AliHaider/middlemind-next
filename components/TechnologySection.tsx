"use client";

import { motion } from "framer-motion";

// Real logos via Simple Icons CDN — all official brand colors
const techLogos = [
  { name: "LiveKit",    slug: "livekit",    color: "#3ECF8E", bg: "#000000" },
  { name: "Deepgram",  slug: "deepgram",   color: "#13EF93", bg: "#101010" },
  { name: "OpenAI",    slug: "openai",     color: "#ffffff", bg: "#000000" },
  { name: "Anthropic", slug: "anthropic",  color: "#ffffff", bg: "#CC785C" },
  { name: "Next.js",   slug: "nextdotjs",  color: "#ffffff", bg: "#000000" },
  { name: "Vercel",    slug: "vercel",     color: "#ffffff", bg: "#000000" },
  { name: "Python",    slug: "python",     color: "#ffffff", bg: "#3776AB" },
  { name: "Docker",    slug: "docker",     color: "#ffffff", bg: "#2496ED" },
  { name: "Tailwind",  slug: "tailwindcss",color: "#ffffff", bg: "#06B6D4" },
  { name: "Prisma",    slug: "prisma",     color: "#ffffff", bg: "#2D3748" },
  { name: "Qdrant",    slug: "qdrant",     color: "#ffffff", bg: "#FF3A5C" },
  { name: "Neon",      slug: "neon",       color: "#ffffff", bg: "#00E599" },
  { name: "Redis",     slug: "redis",      color: "#ffffff", bg: "#DC382D" },
  { name: "PostgreSQL",slug: "postgresql", color: "#ffffff", bg: "#336791" },
];

function LogoChip({ tech }: { tech: typeof techLogos[0] }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm shrink-0">
      <div
        className="flex items-center justify-center w-6 h-6 rounded-md flex-shrink-0"
        style={{ backgroundColor: tech.bg }}
      >
        <img
          src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace("#","")}`}
          alt={tech.name}
          width={14}
          height={14}
          className="object-contain"
          style={{ filter: "none" }}
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

        {/* Three pillars */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { title: "Real-Time Voice", body: "LiveKit + Deepgram. Sub-200ms latency, 98%+ accuracy, zero lag.", slug: "livekit", bg: "#000000", color: "3ECF8E" },
            { title: "Enterprise Memory", body: "Qdrant vector DB. 76K+ knowledge chunks, millisecond recall.", slug: "qdrant", bg: "#FF3A5C", color: "ffffff" },
            { title: "Intelligent Reasoning", body: "Claude + GPT-4o for complex tool use and long-context sessions.", slug: "anthropic", bg: "#CC785C", color: "ffffff" },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-100 p-7"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: p.bg }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${p.slug}/${p.color}`}
                  alt={p.title}
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
