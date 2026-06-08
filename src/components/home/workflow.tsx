"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Fade-in animations
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <section
      className="py-24 px-6 sm:px-8 lg:px-12 rounded-[30px] overflow-hidden my-16 mx-4 sm:mx-6 lg:mx-8 relative"
      style={{
        background: "linear-gradient(180deg, #482BE0 -135.39%, #FFFFFF 52.17%)",
        boxShadow: "inset 0px -318px 107.5px 0px #FFFFFF",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Title Badge */}
        <motion.span
          {...fadeIn}
          className="px-4 py-1.5 text-xs font-bold text-white bg-[#482BE0] rounded-full font-manrope uppercase tracking-[0.15em] shadow-lg shadow-[#482BE0]/20"
        >
          The Frischbox Workflow
        </motion.span>

        {/* Heading */}
        <motion.h2
          {...fadeIn}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 text-center leading-tight font-manrope tracking-tight max-w-3xl mt-6"
        >
          Zero Errors. Total Precision. From Inbound to Last-Mile.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeIn}
          className="mt-4 text-base sm:text-lg text-neutral-600 font-manrope font-normal text-center max-w-2xl leading-relaxed"
        >
          We've engineered a highly automated, sequential fulfillment workflow
          that removes manual guesswork, protects your inventory integrity, and
          accelerates delivery times.
        </motion.p>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 w-full items-center">
          {/* Left Column: Image Area */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-5 relative w-full aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-[30px] shadow-xl border border-white/40"
          >
            <img
              src="/images/home/workflow.png"
              alt="Frichebox Warehouse operator checking logistics processes"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right Column: Workflow Steps Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-5 w-full">
            {steps.map((step) => {
              const isOpen = activeStep === step.id;
              return (
                <motion.div
                  key={step.id}
                  layout
                  onClick={() => setActiveStep(isOpen ? null : step.id)}
                  className={`transition-all duration-300 rounded-[24px] border cursor-pointer select-none overflow-hidden ${
                    isOpen
                      ? "bg-white text-neutral-900 border-neutral-200/80 shadow-lg p-8 md:p-10"
                      : "bg-[#482BE0] text-white  p-6"
                  }`}
                >
                  {/* Step Header */}
                  <motion.div
                    layout="position"
                    className="flex items-center justify-between"
                  >
                    <h3
                      className={`font-manrope font-semibold transition-colors duration-200 ${
                        isOpen
                          ? "text-2xl text-black leading-8"
                          : "text-xl leading-7"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </motion.div>

                  {/* Accordion Expansion */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {/* Divider */}
                        <div className="border-t border-neutral-100 my-4" />
                        <p className="font-inter font-normal text-lg text-[#4B5563] leading-7">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
