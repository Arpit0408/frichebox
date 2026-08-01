"use client";

import { motion, Variants } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import SectionHeader from "@/components/ui/section-header";

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
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Responsive column spans for 6-col grid (Mobile: 2+2+1 centered | Desktop: 3+2 centered)
  const itemColSpans = [
    "col-span-1 md:col-span-2", // Item 1
    "col-span-1 md:col-span-2", // Item 2
    "col-span-1 md:col-span-2", // Item 3
    "col-span-1 md:col-span-2 md:col-start-2", // Item 4
    "col-span-2 md:col-span-2", // Item 5 (Spans 2 cols centered on mobile)
  ];

  return (
    <section className="py-12 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          align="center"
          badge="More Than Just Storage"
          badgeVariant="solid"
          title="Value-Added Services"
          titleSize="text-3xl sm:text-4xl lg:text-5xl"
          className="mb-12 sm:mb-16"
        />

        {/* 5 Value-Added Services Unified Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-6 gap-x-5 gap-y-8 sm:gap-x-12 sm:gap-y-16 max-w-5xl mx-auto"
        >
          {servicesData.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`flex flex-col items-center text-center group cursor-pointer ${
                itemColSpans[idx] || "col-span-1 md:col-span-2"
              }`}
            >
              {/* Purple Rounded Square Icon */}
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#5B3AF5] text-white flex items-center justify-center shadow-lg shadow-[#5B3AF5]/30 mb-3 sm:mb-5 group-hover:scale-110 group-hover:bg-[#482BE0] transition-all duration-300">
                <LuCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
              </div>

              <h3 className="text-base sm:text-xl font-bold font-manrope text-[#111827] group-hover:text-[#5B3AF5] mb-1.5 sm:mb-2.5 max-w-[220px] transition-colors duration-200">
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
