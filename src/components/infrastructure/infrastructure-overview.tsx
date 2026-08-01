"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import SectionHeader from "@/components/ui/section-header";
import MagneticButton from "@/components/ui/magnetic-button";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export interface InfrastructureOverviewProps {
  topImageSrc?: string;
  bottomRightImageSrc?: string;
}

export default function InfrastructureOverview({
  topImageSrc = "/images/infrastructure/tab_wms.svg",
  bottomRightImageSrc = "/images/about/frichebox_tracking.png",
}: InfrastructureOverviewProps) {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const checklistContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const checklistItemVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const checklistItems = [
    "Smart WMS with AI, barcode scanning, and 15-20 custom reports.",
    "Temp+RH controlled storage with real-time climate monitoring.",
    "Seamless API integration with 50+ couriers and 20+ marketplaces.",
  ];

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title, Subtitle, Checklist & CTA */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <SectionHeader
              align="left"
              badge="Overview"
              badgeVariant="purple"
              title={
                <>
                  Automated, Data-Driven <br className="hidden sm:inline" />
                  Logistics Engineered for <br className="hidden sm:inline" />
                  Scale
                </>
              }
              titleSize="text-3xl sm:text-4xl lg:text-5xl"
              subtitle="We build automated, data-driven warehouses delivering customised solutions that combine compliance, efficiency, and reliability. From real-time software tracking to our physical climate-controlled facility, our infrastructure is specifically designed to minimise delays, eliminate errors, and help brands stay one step ahead."
              maxTitleWidth="max-w-full"
              maxSubtitleWidth="max-w-xl"
              animate={false}
              className="mb-6 md:mb-6"
            />

            {/* Checklist: Staggered Entrance */}
            <motion.div
              variants={checklistContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4 mb-10 w-full"
            >
              {checklistItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={checklistItemVariants}
                  className="flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-md bg-[#F0EBFF] text-[#5B3AF5] group-hover:bg-[#5B3AF5] group-hover:text-white group-hover:scale-110 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 shadow-sm">
                    <LuCheck className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold font-manrope text-[#111827] group-hover:text-[#5B3AF5] transition-colors duration-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button with Magnetic Cursor Attraction */}
            <MagneticButton
              href="/contact"
              className="px-8 py-3.5 rounded-2xl bg-[#482BE0] hover:bg-[#3b21c4] text-white font-manrope font-semibold text-sm shadow-lg shadow-[#482BE0]/30 hover:shadow-xl hover:shadow-[#482BE0]/40 transition-all cursor-pointer inline-block"
            >
              Book a Warehouse Tour
            </MagneticButton>
          </motion.div>

          {/* Right Column: Bento Frame Image Grid */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 w-full"
          >
            {/* ---------------- MOBILE LAYOUT (Clean Stacked Cards) ---------------- */}
            <div className="block sm:hidden space-y-4 w-full">
              {/* 1. Top Image */}
              <div className="w-full h-[230px] rounded-3xl overflow-hidden shadow-xl border border-neutral-100 relative group">
                <img
                  src={topImageSrc}
                  alt="Frischbox warehouse facility overview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/home/hero_1.png";
                  }}
                />
              </div>

              {/* 2. Purple Stat Card */}
              <div className="w-full bg-[#482BE0] text-white p-6 rounded-3xl shadow-xl border border-white/20 flex flex-col justify-center items-start">
                <h3 className="text-2xl font-extrabold font-manrope text-white mb-1.5 leading-tight">
                  <Counter value={10000} suffix=" Sq Ft" />
                </h3>
                <p className="text-xs font-manrope text-white/90 leading-snug">
                  Expandable, Built-for-Precision Facility
                </p>
              </div>

              {/* 3. Bottom Tracking Image */}
              <div className="w-full h-[210px] rounded-3xl overflow-hidden shadow-xl border border-neutral-100 relative group">
                <img
                  src={bottomRightImageSrc}
                  alt="Frischbox WMS software and inventory tracking"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/about/frichebox_tracking.png";
                  }}
                />
              </div>
            </div>

            {/* ---------------- DESKTOP LAYOUT (Notched Bento Mask with 16px Equal Gaps) ---------------- */}
            <div className="hidden sm:block relative w-full h-[512px]">
              {/* 1. TOP SINGLE L-NOTCHED IMAGE CONTAINER */}
              <div
                className="absolute top-0 left-0 w-full h-[320px] sm:h-[315px] z-10 group overflow-hidden"
                style={{
                  WebkitMaskImage: "url('/Subtract.png')",
                  maskImage: "url('/Subtract.png')",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              >
                <img
                  src={topImageSrc}
                  alt="Frischbox warehouse facility overview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/home/hero_1.png";
                  }}
                />
              </div>

              {/* 2. BOTTOM-LEFT SOLID PURPLE STAT CARD */}
              <div className="absolute bottom-0 left-0 w-[55%] sm:w-[56%] h-[165px] sm:h-[180px] bg-[#482BE0] text-white p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-xl border border-white/20 flex flex-col justify-center items-start z-20 hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-manrope text-white mb-2 leading-tight">
                  <Counter value={10000} suffix=" Sq Ft" />
                </h3>
                <p className="text-xs sm:text-sm font-manrope text-white/90 leading-snug">
                  Expandable, Built-for-Precision Facility
                </p>
              </div>

              {/* 3. BOTTOM-RIGHT VERTICAL IMAGE CONTAINER */}
              <div className="absolute bottom-0 right-0 w-[41%] sm:w-[41%] h-[260px] sm:h-[265px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-neutral-100 group z-20">
                <img
                  src={bottomRightImageSrc}
                  alt="Frischbox WMS software and inventory tracking"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/about/frichebox_tracking.png";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
