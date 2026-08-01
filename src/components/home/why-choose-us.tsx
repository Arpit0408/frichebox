"use client";

import { motion, Variants } from "framer-motion";
import { LuCheck, LuShieldCheck } from "react-icons/lu";
import { SectionHeader } from "@/components/ui/section-header";

export default function WhyChooseUs() {
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
    hidden: { opacity: 0, x: -20, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageFadeIn: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const checklistItems = [
    { id: 1, label: "Built For Health & Wellness" },
    { id: 2, label: "Full-Stack Tech Automation" },
    { id: 3, label: "Real-Time Transparency" },
    { id: 4, label: "Zero-Error, Same-Day Dispatch" },
    { id: 5, label: "Pan-India Network Reach" },
    { id: 6, label: "Elastic Pay-As-You-Grow Model" },
  ];

  return (
    <section className="py-12 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      {/* Decorative ambient background glow */}
      <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#5B3AF5]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Features (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionHeader
              align="left"
              badge="Why Choose Us"
              badgeVariant="subtle"
              title="Every warehouse says 'We have space.' Frischbox says 'We protect your brand.'"
              subtitle="We don't just store your inventory—we act as an extension of your supply chain. By combining specialized, climate-monitored infrastructure with an automated technology stack, we eliminate errors and help your brand stay one step ahead."
              maxTitleWidth="max-w-2xl"
              maxSubtitleWidth="max-w-xl"
              className="mb-0"
            />

            {/* Checklist Items: 1-by-1 Staggered Entrance */}
            <motion.div
              variants={checklistContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 w-full pt-4 sm:pt-2"
            >
              {checklistItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={checklistItemVariants}
                  className="flex items-center gap-3.5 group cursor-pointer"
                >
                  {/* Icon Wrapper with fill effect on hover */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-indigo-50 text-[#482BE0] group-hover:bg-[#482BE0] group-hover:text-white group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm">
                    <LuCheck className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  {/* Label */}
                  <span className="text-sm sm:text-base font-semibold text-neutral-800 font-manrope group-hover:text-[#482BE0] transition-colors duration-200">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Image Card with Floating Badge (col-span-5) */}
          <motion.div
            variants={imageFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[4/3] lg:h-[480px] overflow-hidden rounded-3xl group shadow-2xl shadow-neutral-200/60"
          >
            <img
              src="/images/home/why_choose_us.png"
              alt="Frischbox Warehouse Operator smiling"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
            />

         
          </motion.div>
        </div>
      </div>
    </section>
  );
}
