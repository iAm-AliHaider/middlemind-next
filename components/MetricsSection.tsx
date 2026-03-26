"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 10, suffix: "+", label: "Products in Production" },
  { value: 200, suffix: "+", label: "Voice Tools Built" },
  { value: 5, suffix: "", label: "Industries Served" },
  { value: 48, suffix: "h", label: "Average Delivery Time" },
];

export default function MetricsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple to-purple-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <div className="font-heading text-5xl font-800 text-white lg:text-6xl">
                <AnimatedCounter target={metric.value} suffix={metric.suffix} />
              </div>
              <p className="mt-3 text-sm font-medium text-white/80">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
