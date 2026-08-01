"use client";

import { motion, Variants } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import { SectionHeader } from "@/components/ui/section-header";

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
  const staggerContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#050312] text-white overflow-hidden relative border-t border-white/[0.04] border-b border-white/[0.04]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#482BE0]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#5B3AF5]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <SectionHeader
          theme="dark"
          badge="Our Services"
          badgeVariant="solid"
          title="Your Trusted Partner for Stress-Free Fulfillment"
          align="center"
          maxTitleWidth="max-w-2xl"
          className="mb-6"
        />

        {/* 6 Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 w-full"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-start gap-4 sm:gap-5 group cursor-pointer text-white p-6 rounded-2xl transition-all duration-300 "
            >
              {/* Checkbox Icon Wrapper */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5B3AF5] flex items-center justify-center shadow-lg shadow-[#5B3AF5]/30 group-hover:scale-110 group-hover:bg-[#482BE0] transition-all duration-300">
                <LuCheck className="w-5 h-5 text-white stroke-[3]" />
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white font-manrope leading-snug transition-colors duration-200 group-hover:text-[#C7B8FF]">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B0B0B0] font-manrope font-normal mt-2.5 leading-relaxed group-hover:text-[#D4D4D4] transition-colors duration-200">
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
