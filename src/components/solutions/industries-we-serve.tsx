"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { LuPlus, LuMinus } from "react-icons/lu";
import SectionHeader from "@/components/ui/section-header";

interface IndustryItem {
  id: number;
  title: string;
  description: string;
}

const industries: IndustryItem[] = [
  {
    id: 1,
    title: "Nutraceuticals & Supplements",
    description:
      "Specialised, temperature-sensitive (Temp+RH) storage ensuring optimal product integrity.",
  },
  {
    id: 2,
    title: "Food Products",
    description:
      "Fully FSSAI Licensed for the safe, compliant, and authorised warehousing of food items.",
  },
  {
    id: 3,
    title: "FMCG (Fast-Moving Consumer Goods)",
    description:
      "Scalable infrastructure designed to handle the rapid turnover and high volumes of consumer goods.",
  },
  {
    id: 4,
    title: "Wellness Brands",
    description:
      "Tailored fulfilment solutions for brands that require meticulous handling and strict regulatory compliance.",
  },
  {
    id: 5,
    title: "GDP & Safety Compliant",
    description:
      "Strict adherence to Good Distribution Practice (GDP) guidelines. Furthermore, our operations are MSME Certified, GST Compliant, and Fire Safety Certified.",
  },
];

export default function IndustriesWeServe() {
  const [activeId, setActiveId] = useState<number>(1);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo Card */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 relative w-full h-[380px] sm:h-[480px] lg:h-[620px]"
          >
            <img
              src="/images/solutions/solutions_story.png"
              alt="Frischbox Industries We Serve Fulfillment Operations"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/images/solutions/about_story_1.svg";
              }}
            />
          </motion.div>

          {/* Right Column: Header & Accordion Pills */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <SectionHeader
              align="left"
              badge="Industries"
              badgeVariant="purple"
              title="Industries We Serve"
              titleSize="text-3xl sm:text-4xl lg:text-5xl"
              subtitle="We provide specialised storage, fulfilment, and logistics management designed specifically for brands that require compliant, temperature-sensitive environments. Our fully certified infrastructure ensures your products maintain their integrity from our warehouse to your customer's door."
              maxTitleWidth="max-w-full"
              maxSubtitleWidth="max-w-xl"
              animate={false}
              className="mb-6 md:mb-6"
            />

            {/* 5 Industry Pill Accordions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-3.5 w-full"
            >
              {industries.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    variants={itemVariants}
                    onClick={() => setActiveId(isOpen ? 0 : item.id)}
                    className={`transition-all duration-300 rounded-[20px] cursor-pointer select-none overflow-hidden ${
                      isOpen
                        ? "bg-[#482BE0] text-white shadow-xl p-5 sm:p-6"
                        : "bg-[#F0EBFF]/70 text-[#111827] hover:bg-[#482BE0] hover:text-white px-5 sm:px-6 py-4"
                    }`}
                  >
                    {/* Header Pill Title */}
                    <motion.div
                      layout="position"
                      className="flex items-center justify-between gap-4"
                    >
                      <h3 className="font-manrope font-bold text-base sm:text-lg tracking-tight">
                        {item.title}
                      </h3>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          isOpen
                            ? "bg-white text-[#482BE0] rotate-180"
                            : "bg-white/70 text-neutral-800"
                        }`}
                      >
                        {isOpen ? (
                          <LuMinus className="w-3.5 h-3.5 stroke-[3]" />
                        ) : (
                          <LuPlus className="w-3.5 h-3.5 stroke-[3]" />
                        )}
                      </div>
                    </motion.div>

                    {/* Content Details */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/20 my-3" />
                          <p className="font-manrope text-xs sm:text-sm text-white/90 leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
