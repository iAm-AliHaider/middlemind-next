"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import VoiceAgentsSection from "@/components/VoiceAgentsSection";
import ServicesSection from "@/components/ServicesSection";
import MetricsSection from "@/components/MetricsSection";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import VoiceWidget from "@/components/VoiceWidget";

export default function Home() {
  const [voiceOpen, setVoiceOpen] = useState(false);
  const open = () => setVoiceOpen(true);
  const close = () => setVoiceOpen(false);

  return (
    <>
      <Navbar onTalkToMaya={open} />
      <HeroSection onTalkToMaya={open} />
      <MetricsSection />
      <ProductsSection />
      <VoiceAgentsSection onTalkToMaya={open} />
      <ServicesSection />
      <TechnologySection />
      <CTASection onTalkToMaya={open} />
      <Footer />
      <VoiceWidget isOpen={voiceOpen} onClose={close} />
    </>
  );
}
