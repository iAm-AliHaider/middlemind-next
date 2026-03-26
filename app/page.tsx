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
  const openVoice = () => setVoiceOpen(true);
  const closeVoice = () => setVoiceOpen(false);

  return (
    <>
      <Navbar onTalkToMaya={openVoice} />
      <HeroSection onTalkToMaya={openVoice} />
      <ProductsSection />
      <VoiceAgentsSection onTalkToMaya={openVoice} />
      <ServicesSection />
      <MetricsSection />
      <TechnologySection />
      <CTASection onTalkToMaya={openVoice} />
      <Footer />
      <VoiceWidget isOpen={voiceOpen} onClose={closeVoice} />
    </>
  );
}
