"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { LuPlus, LuMinus, LuWorkflow } from "react-icons/lu";
import { SectionHeader } from "@/components/ui/section-header";

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
}

const steps: WorkflowStep[] = [
  {
    id: 1,
    title: "Step 1: Inbound",
    description:
      "Secure GRN and quality checks with systematic barcode scanning. We maintain strict batch/lot tracking for error-free vendor reconciliation.",
  },
  {
    id: 2,
    title: "Step 2: Storage",
    description:
      "Modern racked storage with climate control and real-time inventory count synchronization. Features separate zones to avoid cross-contamination.",
  },
  {
    id: 3,
    title: "Step 3: Picking",
    description:
      "AI-guided route optimization for barcode-validated picking operations. Guarantees 99.9% order pick accuracy with minimal path latency.",
  },
  {
    id: 4,
    title: "Step 4: Packing",
    description:
      "Eco-friendly, brand-customized packaging featuring automated weight-checks and direct label printing integrated with major courier systems.",
  },
  {
    id: 5,
    title: "Step 5: Dispatch",
    description:
      "Immediate handover to top logistics carriers with tracking links pushed instantly to customer dashboards, WhatsApp, and SMS.",
  },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  // Fade-in animation for left image
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Stagger container for accordion items
  const accordionContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const accordionItemVariants: Variants = {
    hidden: { opacity: 0, x: 25, filter: "blur(3px)" },
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

  return (
    <section
      className="py-12 sm:py-24 rounded-[30px] overflow-hidden my-8 sm:my-16 relative"
      style={{
        background: "linear-gradient(180deg, #482BE0 -135.39%, #FFFFFF 52.17%)",
        boxShadow: "inset 0px -318px 107.5px 0px #FFFFFF",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center px-6 sm:px-2">
        <SectionHeader
          badge="The Frischbox Workflow"
          badgeVariant="solid"
          title="Zero Errors. Total Precision. From Inbound to Last-Mile."
          subtitle="We've engineered a highly automated, sequential fulfillment workflow that removes manual guesswork, protects your inventory integrity, and accelerates delivery times."
          align="center"
          maxTitleWidth="max-w-2xl"
          maxSubtitleWidth="max-w-3xl"
          className="mb-8"
        />

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
          {/* Left Column: Image Area with Floating Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative w-full aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-[30px] shadow-xl border border-white/40 group"
          >
            <img
              src="/images/home/workflow.png"
              alt="Frischbox Warehouse operator checking logistics processes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Right Column: Workflow Steps Accordion with Sequential Stagger */}
          <motion.div
            variants={accordionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 flex flex-col gap-4.5 w-full"
          >
            {steps.map((step) => {
              const isOpen = activeStep === step.id;
              return (
                <motion.div
                  key={step.id}
                  layout
                  variants={accordionItemVariants}
                  onClick={() => setActiveStep(isOpen ? null : step.id)}
                  className={`group transition-all duration-300 rounded-[24px] border cursor-pointer select-none overflow-hidden ${
                    isOpen
                      ? "bg-white text-neutral-900 border-neutral-200/80 shadow-lg p-7 sm:p-8"
                      : "bg-[#482BE014] text-neutral-900 hover:bg-[#482BE0] hover:text-white border-transparent p-5 sm:p-6"
                  }`}
                >
                  {/* Step Header */}
                  <motion.div
                    layout="position"
                    className="flex items-center justify-between gap-4"
                  >
                    <h3
                      className={`font-manrope font-bold transition-colors duration-200 ${
                        isOpen
                          ? "text-xl sm:text-2xl text-black leading-snug"
                          : "text-lg sm:text-xl leading-snug text-neutral-900 group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Plus / Minus Expand Indicator */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#482BE0] text-white rotate-180"
                          : "bg-white/80 text-neutral-800 group-hover:bg-white group-hover:text-[#482BE0]"
                      }`}
                    >
                      {isOpen ? (
                        <LuMinus className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <LuPlus className="w-4 h-4 stroke-[3]" />
                      )}
                    </div>
                  </motion.div>

                  {/* Accordion Expansion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {/* Divider */}
                        <div className="border-t border-neutral-200/80 my-4" />
                        <p className="font-manrope font-medium text-sm sm:text-base text-[#4B5563] leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
