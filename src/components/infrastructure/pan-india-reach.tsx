"use client";

import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

export default function PanIndiaReach() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const features = [
    {
      title: "Strategic Scale:",
      description:
        "10,000 sq ft Noida HQ supported by hubs in Delhi, Mumbai, Bangalore, Kolkata, and Hyderabad.",
    },
    {
      title: "National Reach:",
      description:
        "Seamless delivery coverage spanning 78+ cities and 27,000+ pin codes.",
    },
    {
      title: "Product Integrity:",
      description:
        "FSSAI Licensed and GDP Compliant warehousing for food, nutraceuticals, and health supplements.",
    },
    {
      title: "Operations & Safety:",
      description:
        "Fire Safety Certified, MSME Certified, GST Compliant (with auto e-Waybills), and fully aligned with Indian Labour Laws.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
    

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ---------------- Left Column: Content & Features ---------------- */}
          <motion.div {...fadeIn} className="lg:col-span-6 flex flex-col items-start">
            {/* Badge */}
            <span className="px-4 py-1.5 text-xs font-semibold text-[#5B3AF5] bg-[#F0EBFF] rounded-full font-manrope uppercase tracking-wider mb-4 inline-block">
              Certified, Compliant & Audit-Ready
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight leading-tight mb-6">
              Pan-India Reach, Powered by <br className="hidden sm:inline" />
              Compliant Infrastructure
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#4B5563] font-manrope leading-relaxed mb-8 max-w-lg">
              Our audit-ready network covers{" "}
              <strong className="font-bold text-[#111827]">
                78+ cities and 27,000+ pin codes
              </strong>{" "}
              across India. Anchored by a 10,000 sq ft Noida HQ, a Delhi node, and
              regional hubs in Mumbai, Bangalore, Kolkata, and Hyderabad, we ensure
              complete compliance and product integrity at every location.
            </p>

            {/* 4 Feature Checklist Items */}
            <div className="space-y-5 w-full">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-md bg-[#F0EBFF] text-[#5B3AF5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <LuCheck className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div className="text-xs sm:text-sm font-manrope text-[#4B5563] leading-relaxed">
                    <strong className="font-bold text-[#111827] mr-1.5">
                      {item.title}
                    </strong>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ---------------- Right Column: Regional Hubs Warehouse Boxes Image ---------------- */}
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-[36px] overflow-hidden shadow-2xl border border-neutral-100">
              <img
                src="/images/infrastructure/pan_india_reach.png"
                alt="Pan-India warehouse hubs in Delhi, Mumbai, Bangalore, Kolkata, Hyderabad"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/home/hero_1.png";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
