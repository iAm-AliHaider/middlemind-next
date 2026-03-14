"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Products", "Services", "Technology", "Contact"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-heading text-xl font-800 text-purple">
            MiddleMind
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-purple"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            onClick={onTalkToMaya}
            className="rounded-full bg-purple px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-dark hover:shadow-lg cursor-pointer"
          >
            Talk to Maya
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
