"use client";

import { motion, Variants } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import SectionHeader from "@/components/ui/section-header";

export default function PanIndiaReach() {
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
          {/* Left Column: Content & Features */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <SectionHeader
              align="left"
              badge="Certified, Compliant & Audit-Ready"
              badgeVariant="purple"
              title={
                <>
                  Pan-India Reach, Powered by <br className="hidden sm:inline" />
                  Compliant Infrastructure
                </>
              }
              titleSize="text-3xl sm:text-4xl lg:text-5xl"
              subtitle={
                <>
                  Our audit-ready network covers{" "}
                  <strong className="font-bold text-[#111827]">
                    78+ cities and 27,000+ pin codes
                  </strong>{" "}
                  across India. Anchored by a 10,000 sq ft Noida HQ, a Delhi node,
                  and regional hubs in Mumbai, Bangalore, Kolkata, and Hyderabad, we
                  ensure complete compliance and product integrity at every
                  location.
                </>
              }
              maxTitleWidth="max-w-full"
              maxSubtitleWidth="max-w-lg"
              animate={false}
              className="mb-6 md:mb-6"
            />

            {/* 4 Feature Checklist Items */}
            <motion.div
              variants={checklistContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-5 w-full"
            >
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={checklistItemVariants}
                  className="flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-md bg-[#F0EBFF] text-[#5B3AF5] group-hover:bg-[#5B3AF5] group-hover:text-white group-hover:scale-110 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 shadow-sm">
                    <LuCheck className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div className="text-xs sm:text-sm font-manrope text-[#4B5563] leading-relaxed">
                    <strong className="font-bold text-[#111827] group-hover:text-[#5B3AF5] mr-1.5 transition-colors duration-200">
                      {item.title}
                    </strong>
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Regional Hubs Map Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 relative"
          >
            <div className="w-full h-[380px] sm:h-[460px] lg:h-[620px] rounded-[36px] overflow-hidden shadow-2xl border border-neutral-100 group">
              <img
                src="/images/infrastructure/pan_india_reach.svg"
                alt="Pan-India warehouse hubs in Delhi, Mumbai, Bangalore, Kolkata, Hyderabad"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/home/hero_1.png";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
