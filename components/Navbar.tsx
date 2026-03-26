"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="10" width="11" height="11" rx="2" transform="rotate(-45 2 10)" fill="#7c3aed"/>
            <rect x="10" y="10" width="11" height="11" rx="2" transform="rotate(-45 10 10)" fill="#7c3aed" fillOpacity="0.45"/>
          </svg>
          <span className="font-heading text-[17px] tracking-tight text-gray-900">
            <span className="font-light">middle</span><span className="font-extrabold">mind</span>
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[["Products", "#products"], ["Voice AI", "#voice"], ["Studio", "#services"], ["Tech", "#technology"]].map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={onTalkToMaya}
          className="flex items-center gap-2 rounded-full bg-purple px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-dark transition-colors shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse-dot" />
          Talk to Maya
        </button>
      </div>
    </motion.header>
  );
}
