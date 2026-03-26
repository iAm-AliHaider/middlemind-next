"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 50;
    const duration = 1800;
    const inc = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(t);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function MetricsSection() {
  return (
    <section className="py-20 bg-purple">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { value: 10, suffix: "+", label: "Products live" },
            { value: 200, suffix: "+", label: "Voice tools built" },
            { value: 5, suffix: "", label: "Industries" },
            { value: 48, suffix: "h", label: "Avg delivery" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-5xl font-extrabold text-white lg:text-6xl">
                <Counter target={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-white/60">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
