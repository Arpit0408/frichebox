"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ---------------- Left Column: Overlapping Photos ---------------- */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-6 relative w-full h-[420px] sm:h-[500px] lg:h-[540px]"
          >
            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-[68%] sm:w-[65%] h-[68%] sm:h-[65%] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl border-4 border-white z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/about/about_story_1.png"
                alt="Frichebox warehouse supervisor inspecting inventory"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/home/hero_1.png";
                }}
              />
            </div>

            {/* Bottom Right Overlapping Image */}
            <div className="absolute bottom-0 right-0 w-[68%] sm:w-[65%] h-[68%] sm:h-[65%] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white z-20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/about/about_story_2.png"
                alt="Cold storage facility operator opening temperature controlled unit"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/home/about_warehouse.png";
                }}
              />
            </div>
          </motion.div>

          {/* ---------------- Right Column: Header & Accordion Pills ---------------- */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Badge */}
            <motion.div {...fadeIn} className="mb-4">
              <span className="px-4 py-1.5 text-xs font-semibold text-[#5B3AF5] bg-[#F0EBFF] rounded-full font-manrope uppercase tracking-wider inline-block">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...fadeIn}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight leading-tight mb-4"
            >
              Industries We Serve
            </motion.h2>

            {/* Description */}
            <motion.p
              {...fadeIn}
              className="text-sm sm:text-base text-[#4B5563] font-manrope leading-relaxed mb-8 max-w-xl"
            >
              We provide specialised storage, fulfilment, and logistics
              management designed specifically for brands that require
              compliant, temperature-sensitive environments. Our fully certified
              infrastructure ensures your products maintain their integrity from
              our warehouse to your customer&apos;s door.
            </motion.p>

            {/* 5 Industry Pill Accordions */}
            <div className="flex flex-col gap-3.5 w-full">
              {industries.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    layout
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
                      className="flex items-center justify-between"
                    >
                      <h3 className="font-manrope font-bold text-base sm:text-lg tracking-tight">
                        {item.title}
                      </h3>
                      <span className="text-lg font-bold ml-2">
                        {isOpen ? "−" : "+"}
                      </span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
