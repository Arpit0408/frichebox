"use client";

import { motion } from "framer-motion";
import { Check } from "@/components/ui/check";
import { AnimateIcon } from "@/components/ui/animate-icon";

export default function WhyChooseUs() {
  // Animation presets
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
        staggerChildren: 0.08,
      },
    },
    viewport: { once: true, margin: "-100px" },
  } as const;

  const checklistItems = [
    { id: 1, label: "Built For Health & Wellness" },
    { id: 2, label: "Full-Stack Tech Automation" },
    { id: 3, label: "Real-Time Transparency" },
    { id: 4, label: "Zero-Error, Same-Day Dispatch" },
    { id: 5, label: "Pan-India Network Reach" },
    { id: 6, label: "Elastic Pay-As-You-Grow Model" },
  ];

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small Badge */}
            <motion.span
              {...fadeIn}
              className="px-3 py-1 text-xs font-semibold text-[#482BE0] bg-indigo-50 rounded-full font-manrope mb-4 uppercase tracking-wider"
            >
              Why Choose Us
            </motion.span>

            {/* Main Title Heading */}
            <motion.h2
              {...fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#221F1F] leading-tight font-manrope tracking-tight max-w-2xl"
            >
              Why Top Health & Wellness Brands Partner With Us
            </motion.h2>

            {/* Description Text */}
            <motion.p
              {...fadeIn}
              className="mt-6 text-base sm:text-lg text-neutral-600 font-manrope font-normal leading-relaxed max-w-xl"
            >
              We don't just store your inventory—we act as an extension of your
              supply chain. By combining specialized, climate-monitored infrastructure
              with an automated technology stack, we eliminate errors and help
              your brand stay one step ahead.
            </motion.p>

            {/* Grid Checkmarks (2 Columns) */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full"
            >
              {checklistItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  whileHover="hover"
                  className="flex items-center gap-3.5 group cursor-pointer"
                >
                  {/* Purple Check icon wrapper */}
                  <AnimateIcon animateOnHover className="flex-shrink-0 w-5 h-5 rounded-md bg-indigo-50 text-[#482BE0]">
                    <Check className="w-3.5 h-3.5 text-[#482BE0]" />
                  </AnimateIcon>
                  {/* Label */}
                  <span className="text-sm sm:text-base font-semibold text-neutral-800 font-manrope group-hover:text-[#482BE0] transition-colors duration-200">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Worker Warehouse Image (col-span-5) */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[4/3] lg:h-[480px] overflow-hidden rounded-3xl group shadow-lg shadow-neutral-100"
          >
            <img
              src="/images/home/why_choose_us.png"
              alt="Frichebox Warehouse Operator smiling"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
