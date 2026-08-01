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
    <section className="pb-20 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeader
          badge="Our Certifications"
          badgeVariant="purple"
          title="Certified, Compliant & Audit-Ready"
          subtitle="Rest easy knowing your inventory is backed by complete regulatory compliance. We maintain strict industry standards to ensure product safety, legal security, and absolute peace of mind"
          align="center"
          maxTitleWidth="max-w-4xl"
          maxSubtitleWidth="max-w-3xl"
        />

        {/* Mobile View: Infinite Smooth Marquee Ticker (md:hidden) */}
        <div className="md:hidden w-full overflow-hidden relative mt-8">
          {/* Gradient fade edge overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-8 w-max"
          >
            {/* Duplicated array for seamless 100% infinite marquee loop */}
            {[...certifications, ...certifications].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex items-center justify-center p-2 flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop View: Interactive Grid Layout (hidden md:flex) */}
        <motion.div
          {...fadeIn}
          className="hidden md:flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14 mt-8 w-full"
        >
          {certifications.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center p-3 sm:p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_8px_20px_rgba(91,58,245,0.2)] group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
