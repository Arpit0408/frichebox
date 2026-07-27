"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

interface CertificationItem {
  id: number;
  name: string;
  image: string;
}

const certifications: CertificationItem[] = [
  { id: 1, name: "FSSAI", image: "/certifications/fssai.png" },
  { id: 2, name: "GST", image: "/certifications/gst.png" },
  { id: 3, name: "Fire Safety", image: "/certifications/fire_safety.png" },
  { id: 4, name: "GDP Certified", image: "/certifications/gdp.png" },
  { id: 5, name: "MSME", image: "/certifications/msme.png" },
  { id: 6, name: "Govt of India", image: "/certifications/gov_india.png" },
];

export default function Certifications() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeader
          badge="Our Certifications"
          badgeVariant="purple"
          title="Certified, Compliant & Audit-Ready"
          subtitle="Rest easy knowing your inventory is backed by complete regulatory compliance. We maintain strict industry standards to ensure product safety, legal security, and absolute peace of mind"
          align="center"
          maxTitleWidth="max-w-3xl"
          maxSubtitleWidth="max-w-3xl"
        />

        {/* Certifications Row / Grid */}
        <motion.div
          {...fadeIn}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14 mt-8 w-full"
        >
          {certifications.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center p-2 sm:p-3 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
