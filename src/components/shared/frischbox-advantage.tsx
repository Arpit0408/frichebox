"use client";

import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

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

  // Responsive column spans for 6-col grid (Mobile: 2+2+1 centered | Desktop: 3+2 centered)
  const itemColSpans = [
    "col-span-1 md:col-span-2", // Item 1
    "col-span-1 md:col-span-2", // Item 2
    "col-span-1 md:col-span-2", // Item 3
    "col-span-1 md:col-span-2 md:col-start-2", // Item 4
    "col-span-2 md:col-span-2", // Item 5 (Spans 2 cols centered on mobile)
  ];

  return (
    <section className="py-12 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="px-5 py-2 text-xs font-semibold text-white bg-[#5B3AF5] rounded-full font-manrope capitalize tracking-wider mb-4 inline-block shadow-md">
            An Extension of Your Supply Chain
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight">
            The Frischbox Advantage
          </h2>
        </motion.div>

        {/* 5 Advantage Items Unified Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-6 gap-x-5 gap-y-8 sm:gap-x-12 sm:gap-y-16 max-w-5xl mx-auto"
        >
          {advantageData.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className={`flex flex-col items-center text-center group cursor-pointer ${
                itemColSpans[idx] || "col-span-1 md:col-span-2"
              }`}
            >
              {/* Purple Rounded Square Icon */}
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#5B3AF5] text-white flex items-center justify-center shadow-lg shadow-[#5B3AF5]/30 mb-3 sm:mb-5 group-hover:scale-110 group-hover:bg-[#482BE0] transition-all duration-300">
                <LuCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
              </div>

              <h3 className="text-base sm:text-xl font-bold font-manrope text-[#111827] mb-1.5 sm:mb-2.5 max-w-[220px]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-manrope text-[#6B7280] leading-relaxed max-w-[240px] sm:max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
