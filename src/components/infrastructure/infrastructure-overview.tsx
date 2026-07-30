"use client";

import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

interface InfrastructureOverviewProps {
  topImageSrc?: string;
  bottomRightImageSrc?: string;
}

export default function InfrastructureOverview({
  topImageSrc = "/images/infrastructure/tab_wms.svg",
  bottomRightImageSrc = "/images/about/frichebox_tracking.png",
}: InfrastructureOverviewProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const checklistItems = [
    "Smart WMS with AI, barcode scanning, and 15-20 custom reports.",
    "Temp+RH controlled storage with real-time climate monitoring.",
    "Seamless API integration with 50+ couriers and 20+ marketplaces.",
  ];

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ---------------- Left Column: Title, Subtitle, Checklist & CTA ---------------- */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight leading-[1.15] mb-6">
              Automated, Data-Driven <br className="hidden sm:inline" />
              Logistics Engineered for <br className="hidden sm:inline" />
              Scale
            </h1>

            <p className="text-xs sm:text-sm text-[#4B5563] font-manrope leading-relaxed mb-8 max-w-lg">
              We build automated, data-driven warehouses delivering customised
              solutions that combine compliance, efficiency, and reliability.
              From real-time software tracking to our physical
              climate-controlled facility, our infrastructure is specifically
              designed to minimise delays, eliminate errors, and help brands
              stay one step ahead.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-10 w-full">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-md bg-[#F0EBFF] text-[#5B3AF5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <LuCheck className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold font-manrope text-[#111827]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-2xl bg-[#482BE0] hover:bg-[#3b21c4] text-white font-manrope font-semibold text-sm shadow-lg shadow-[#482BE0]/30 hover:shadow-xl hover:shadow-[#482BE0]/40 transition-all transform active:scale-95 cursor-pointer inline-block"
            >
              Book a Warehouse Tour
            </a>
          </motion.div>

          {/* ---------------- Right Column: Exact 1:1 Matching Bento Frame (Image 1 Target) ---------------- */}
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="lg:col-span-6 relative w-full h-[460px] sm:h-[510px]"
          >
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
                alt="Frichebox warehouse facility overview"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/home/hero_1.png";
                }}
              />
            </div>

            {/* 2. BOTTOM-LEFT SOLID PURPLE STAT CARD */}
            <div className="absolute bottom-0 left-0 w-[55%] sm:w-[56%] h-[165px] sm:h-[180px] bg-[#482BE0] text-white p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-xl border border-white/20 flex flex-col justify-center items-start z-20">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-manrope text-white mb-2 leading-tight">
                10,000 Sq Ft
              </h3>
              <p className="text-xs sm:text-sm font-manrope text-white/90 leading-snug">
                Expandable, Built-for-Precision Facility
              </p>
            </div>

            {/* 3. BOTTOM-RIGHT VERTICAL IMAGE CONTAINER (Tucks into smooth notch) */}
            <div className="absolute bottom-0 right-0 w-[41%] sm:w-[42%] h-[260px] sm:h-[265px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-neutral-100 group z-20">
              <img
                src={bottomRightImageSrc}
                alt="Frichebox WMS software and inventory tracking"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/about/frichebox_tracking.png";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
