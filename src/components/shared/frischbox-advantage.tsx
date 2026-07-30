"use client";

import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

export interface AdvantageItem {
  id: number;
  title: string;
  description: string;
}

const advantageData: AdvantageItem[] = [
  {
    id: 1,
    title: "Aviation-Inspired Precision",
    description:
      "Built on rigorous, zero-error SOPs to ensure flawless handling.",
  },
  {
    id: 2,
    title: "Real-Time Visibility",
    description:
      "Complete peace of mind with live inventory tracking and instant dashboards.",
  },
  {
    id: 3,
    title: "Clean, Compliant Operations",
    description:
      "Fully certified facilities engineered specifically for sensitive goods.",
  },
  {
    id: 4,
    title: "Reliable Fulfillment",
    description: "Consistent, on-time, and highly accurate order processing.",
  },
  {
    id: 5,
    title: "Founder-Led Partnership",
    description:
      "Direct access to founder-driven support that scales with your business.",
  },
];

export default function FrischboxAdvantage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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
    <section className="py-6 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div {...fadeIn} className="text-center mb-16 sm:mb-20">
          <span className="px-5 py-2 text-xs font-semibold text-white bg-[#5B3AF5] rounded-full font-manrope capitalize tracking-wider mb-4 inline-block shadow-md">
            An Extension of Your Supply Chain
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight">
            The Frischbox Advantage
          </h2>
        </motion.div>

        {/* 5 Advantage Items Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Top Row: First 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {advantageData.slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                variants={fadeIn}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Purple Rounded Square Icon */}
                <div className="w-13 h-13 rounded-2xl bg-[#5B3AF5] text-white flex items-center justify-center shadow-lg shadow-[#5B3AF5]/30 mb-5 group-hover:scale-110 group-hover:bg-[#482BE0] transition-all duration-300">
                  <LuCheck className="w-6 h-6 stroke-[3]" />
                </div>

                <h3 className="text-xl font-bold font-manrope text-[#111827] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-manrope text-[#6B7280] leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: Remaining 2 Items Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 max-w-3xl mx-auto">
            {advantageData.slice(3, 5).map((item) => (
              <motion.div
                key={item.id}
                variants={fadeIn}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Purple Rounded Square Icon */}
                <div className="w-13 h-13 rounded-2xl bg-[#5B3AF5] text-white flex items-center justify-center shadow-lg shadow-[#5B3AF5]/30 mb-5 group-hover:scale-110 group-hover:bg-[#482BE0] transition-all duration-300">
                  <LuCheck className="w-6 h-6 stroke-[3]" />
                </div>

                <h3 className="text-xl font-bold font-manrope text-[#111827] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-manrope text-[#6B7280] leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
