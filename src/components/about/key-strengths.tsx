"use client";

import { motion } from "framer-motion";
import { LuWarehouse, LuTruck, LuDatabase, LuUserCheck } from "react-icons/lu";

export interface StrengthCard {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  iconPath?: string;
}

const defaultStrengths: StrengthCard[] = [
  {
    id: 1,
    title: "Compliance",
    description:
      "Safe, audit-ready storage fully licensed under strict national regulations.",
    icon: LuWarehouse,
    iconPath: "/icons/compliance.svg",
  },
  {
    id: 2,
    title: "Technology",
    description:
      "Powered by an advanced, automated smart warehouse WMS stack.",
    icon: LuTruck,
    iconPath: "/icons/technology.svg",
  },
  {
    id: 3,
    title: "Operational Excellence",
    description: "Rigorous workflows designed for zero-error execution.",
    icon: LuDatabase,
    iconPath: "/icons/excellence.svg",
  },
  {
    id: 4,
    title: "Founder Commitment",
    description:
      "A dedicated, personal extension of your supply chain operations.",
    icon: LuUserCheck,
    iconPath: "/icons/founder.svg",
  },
];

export default function KeyStrengths() {
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
    <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14">
          <motion.div
            {...fadeIn}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="px-4 py-1.5 text-xs font-semibold text-[#5B3AF5] bg-[#F0EBFF] rounded-full font-manrope capitalize tracking-wider mb-4 inline-block">
              Key Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight leading-tight">
              The infrastructure <br className="hidden sm:inline" />
              behind your growth.
            </h2>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="lg:col-span-5 text-sm sm:text-base text-[#4B5563] font-manrope font-normal leading-relaxed"
          >
            We combine smart warehouse automation, flexible storage space, and a
            robust pan-India logistics network designed to scale effortlessly
            alongside your business from startup to enterprise.
          </motion.div>
        </div>

        {/* 4 Strength Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {defaultStrengths.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeIn}
                className="group relative bg-white hover:bg-[#482BE0] p-8 sm:p-9 shadow-lg hover:shadow-2xl border-b-4 border-[#482BE0] hover:border-[#482BE0] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-start overflow-hidden cursor-pointer min-h-[420px] sm:min-h-[440px]"
              >
                {/* Background Watermark Graphic in Top Right */}
                <div className="absolute right-[-10%] top-[-5%] text-[#482BE0]/[0.07] group-hover:text-white/[0.08] select-none pointer-events-none transition-colors duration-300">
                  <IconComponent className="w-36 h-36 stroke-[1.2]" />
                </div>

                <div className="relative z-10 flex flex-col items-start w-full">
                  {/* Top Icon */}
                  <div className="mb-12 text-[#482BE0] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-16 h-16 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-manrope text-[#111827] group-hover:text-white mb-4 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base font-manrope text-[#6B7280] group-hover:text-white/90 leading-relaxed font-normal transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
