"use client";

import { motion } from "framer-motion";
import { FaServer, FaWarehouse, FaShieldAlt } from "react-icons/fa";
import Hero from "@/components/home/hero";
import AboutUs from "@/components/home/about-us";
import WhyChooseUs from "@/components/home/why-choose-us";
import Services from "@/components/home/services";
import Workflow from "@/components/home/workflow";

export default function Home() {
  // Animation presets
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15,
      },
    },
    viewport: { once: true, margin: "-100px" },
  } as const;

  return (
    <main className="flex-1 bg-white">
      {/* Premium Sliding Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Workflow Section */}
      <Workflow />
    </main>
  );
}
