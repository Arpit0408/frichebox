"use client";

import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

export interface ValueAddedServiceItem {
  id: number;
  title: string;
  description: string;
}

const servicesData: ValueAddedServiceItem[] = [
  {
    id: 1,
    title: "Custom Kitting & Bundling",
    description:
      "We build subscription boxes, gift kits, and product bundles to your exact specification.",
  },
  {
    id: 2,
    title: "Labelling & Barcoding",
    description:
      "In-house barcode, QR, and MRP label printing with full compliance to marketplace requirements.",
  },
  {
    id: 3,
    title: "Eco-Friendly Packaging",
    description:
      "Sustainable packaging solutions that reduce your carbon footprint without compromising product safety.",
  },
  {
    id: 4,
    title: "Returns Management (RTO)",
    description:
      "Full return processing, including inspection, QC checks, and restocking or disposal as per brand SOPs.",
  },
  {
    id: 5,
    title: "Last-Mile Delivery",
    description:
      "Hyper-local partner network for same-day and express deliveries within metro and tier-2 cities.",
  },
];

export default function ValueAddedServices() {
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
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div {...fadeIn} className="text-center mb-16 sm:mb-20">
          <span className="px-5 py-2 text-xs font-semibold text-white bg-[#5B3AF5] rounded-full font-manrope uppercase tracking-wider mb-4 inline-block shadow-md">
            More Than Just Storage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight">
            Value-Added Services
          </h2>
        </motion.div>

        {/* 5 Value-Added Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Top Row: First 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {servicesData.slice(0, 3).map((item) => (
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
            {servicesData.slice(3, 5).map((item) => (
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
