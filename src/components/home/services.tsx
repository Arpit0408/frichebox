"use client";

import { motion } from "framer-motion";
import { Check } from "@/components/ui/check";
import { AnimateIcon } from "@/components/ui/animate-icon";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Specialised Warehousing",
    description:
      "Modern, heavy-duty racked storage in Noida Sector-138. Features dedicated, separate zones to ensure zero cross-contamination for your products.",
  },
  {
    id: 2,
    title: "Climate-Controlled Storage",
    description:
      "Purpose-built infrastructure featuring real-time heat and humidity monitoring specifically designed to safeguard sensitive health and wellness brands.",
  },
  {
    id: 3,
    title: "B2C E-commerce Fulfilment",
    description:
      "Direct-to-consumer order processing optimized for speed, featuring same-day dispatch and automated tracking updates pushed straight to WhatsApp.",
  },
  {
    id: 4,
    title: "Omni-Channel SCM",
    description:
      "Seamlessly manage bulk B2B shipments to distributors alongside your online retail orders with full, real-time inventory visibility.",
  },
  {
    id: 5,
    title: "Value-Added Services",
    description:
      "Complete handling of custom product kitting, subscription bundling, and marketplace-compliant barcoding or label printing directly in-house.",
  },
  {
    id: 6,
    title: "Returns Management",
    description:
      "Comprehensive reverse logistics processing, including strict product inspection, quality control checks, and rapid restocking based on your brand's SOPs.",
  },
];

export default function Services() {
  // Scroll reveal presets
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  } as const;

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true, margin: "-100px" },
  } as const;

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#050312] text-white overflow-hidden relative border-t border-white/[0.02] border-b border-white/[0.02]">
      {/* Decorative subtle background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#482BE0]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#482BE0]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Title Badge */}
        <motion.span
          {...fadeIn}
          className="px-4 py-1.5 text-xs font-bold text-white bg-[#482BE0] rounded-full font-manrope uppercase tracking-[0.15em] shadow-lg shadow-[#482BE0]/20"
        >
          Our Services
        </motion.span>

        {/* Heading */}
        <motion.h2
          {...fadeIn}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center leading-tight font-manrope tracking-tight max-w-3xl mt-6"
        >
          Your Trusted Partner for Stress-Free Fulfillment
        </motion.h2>

        {/* Services Cards Grid (3 Columns on Desktop) */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-16 w-full"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="flex items-start gap-4 sm:gap-5 group cursor-pointer"
            >
              {/* Checkbox Icon Wrapper (56px x 56px, rounded-xl) */}
              <AnimateIcon className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#482BE0] flex items-center justify-center shadow-lg shadow-[#482BE0]/15 group-hover:bg-[#381ec8] transition-colors duration-300">
                <Check className="w-5 h-5 text-white" />
              </AnimateIcon>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white font-manrope leading-snug group-hover:text-[#482BE0] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-[#DADADA] font-manrope font-normal mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
