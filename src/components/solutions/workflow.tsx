"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";

interface WorkflowStep {
  id: number;
  numberStr: string;
  title: string;
  details: string[];
}

const stepsData: WorkflowStep[] = [
  {
    id: 1,
    numberStr: "1.",
    title: "Inbound",
    details: [
      "GRN & Quality Check,",
      "Barcode scanning,",
      "Batch/Lot tracking,",
      "and Vendor reconciliation.",
    ],
  },
  {
    id: 2,
    numberStr: "2.",
    title: "Storage",
    details: [
      "FEFO/FIFO methodology,",
      "Zone-wise segregation,",
      "Temp & humidity control,",
      "and Real-time slot mgmt.",
    ],
  },
  {
    id: 3,
    numberStr: "3.",
    title: "Picking",
    details: [
      "AI-driven order allocation,",
      "Wave/zone/cluster picking,",
      "Scan-verify workflow, and",
      "Zero pick error SOP.",
    ],
  },
  {
    id: 4,
    numberStr: "4.",
    title: "Packing",
    details: [
      "Eco-friendly packaging,",
      "Custom kitting & bundling,",
      "Label & barcode printing,",
      "and Quality seal process.",
    ],
  },
  {
    id: 5,
    numberStr: "5.",
    title: "Dispatch",
    details: [
      "Multi-courier integration,",
      "e-Waybill generation,",
      "Proof of dispatch, and",
      "Same-day fulfillment.",
    ],
  },
];

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [activeStep, setActiveStep] = useState<number>(1);

  // Sequential progression timer when scrolled into view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < 5) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 600); // 600ms per step for smooth line travel & dot glow effect

    return () => clearInterval(interval);
  }, [isInView]);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  // Calculate filled progress percentage (0% to 100%)
  const progressPercent = ((activeStep - 1) / (stepsData.length - 1)) * 100;

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#050312] text-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <SectionHeader
          align="split"
          theme="dark"
          badge="Our Services"
          badgeVariant="solid"
          badgeClassName="capitalize"
          title={
            <>
              The Frischbox Workflow: <br className="hidden sm:inline" />
              End-to-End WMS Operations
            </>
          }
          subtitle="Powered by our smart WMS, our 5-step workflow guarantees speed and zero-error precision from our receiving docks straight to your customer's door."
          titleClassName="max-w-xl"
          className="mb-16 sm:mb-24"
        />

        {/* ---------------- 5-Step Process Timeline Container ---------------- */}
        <div className="relative">
          {/* DESKTOP TIMELINE (Horizontal) */}
          <div className="hidden md:block relative">
            {/* Step Numbers Row (Above dots) */}
            <div className="grid grid-cols-5 gap-4 mb-3">
              {stepsData.map((step) => {
                const isReached = step.id <= activeStep;
                return (
                  <motion.div
                    key={step.id}
                    {...fadeIn}
                    onClick={() => setActiveStep(step.id)}
                    className="flex items-center justify-center cursor-pointer group"
                  >
                    <span
                      className={`text-5xl lg:text-6xl font-extrabold font-manrope transition-all duration-500 ${
                        isReached
                          ? "text-[#AC9CFF] drop-shadow-[0_0_15px_rgba(172,156,255,0.4)]"
                          : "text-white/20 group-hover:text-white/60"
                      }`}
                    >
                      {step.numberStr}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Line & Dots Row (Centered at top-1/2 of h-11) */}
            <div className="relative h-11 flex items-center mb-8">
              {/* Background Inactive Dashed Line */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-neutral-800 pointer-events-none z-0" />

              {/* Animated Active Solid Gradient Line (Fills to progressPercent) */}
              <motion.div
                animate={{ width: `${progressPercent * 0.8}%` }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-1/2 -translate-y-1/2 left-[10%] h-[2px] bg-gradient-to-r from-[#5B3AF5] via-[#AC9CFF] to-[#5B3AF5] shadow-[0_0_12px_#5B3AF5] pointer-events-none z-0"
              />

              {/* Glowing Pulse Beam Moving Animation */}
              <motion.div
                animate={{
                  left: ["10%", "85%", "10%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 -translate-y-1/2 w-16 h-[3px] bg-gradient-to-r from-transparent via-[#AC9CFF] to-transparent shadow-[0_0_20px_#AC9CFF] pointer-events-none z-0"
              />

              {/* 5 Dot Nodes Grid */}
              <div className="grid grid-cols-5 gap-4 w-full relative z-10">
                {stepsData.map((step) => {
                  const isReached = step.id <= activeStep;
                  return (
                    <motion.div
                      key={step.id}
                      {...fadeIn}
                      onClick={() => setActiveStep(step.id)}
                      className="flex items-center justify-center cursor-pointer group"
                    >
                      {/* Outer Ring with Glow */}
                      <div
                        className={`w-11 h-11 rounded-full border-2 flex items-center justify-center bg-[#050312] transition-all duration-500 ${
                          isReached
                            ? "border-[#5B3AF5] shadow-[0_0_22px_rgba(91,58,245,0.85)] scale-110"
                            : "border-neutral-800 group-hover:border-[#5B3AF5]/50"
                        }`}
                      >
                        {/* Inner Solid #AC9CFF Dot */}
                        <div
                          className={`w-5 h-5 rounded-full transition-all duration-500 ${
                            isReached
                              ? "bg-[#AC9CFF] scale-110 shadow-[0_0_12px_#AC9CFF]"
                              : "bg-neutral-700 group-hover:bg-[#AC9CFF]/60"
                          }`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Titles & Details Row (Below dots) */}
            <div className="grid grid-cols-5 gap-4">
              {stepsData.map((step) => {
                const isReached = step.id <= activeStep;
                return (
                  <motion.div
                    key={step.id}
                    {...fadeIn}
                    onClick={() => setActiveStep(step.id)}
                    className="flex flex-col items-center text-center cursor-pointer group"
                  >
                    <h3
                      className={`text-xl font-bold font-manrope mb-3 tracking-tight transition-colors duration-300 ${
                        isReached
                          ? "text-white"
                          : "text-neutral-400 group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <div className="text-xs sm:text-sm text-neutral-400 font-manrope leading-relaxed space-y-0.5">
                      {step.details.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE TIMELINE (Vertical - 100% Dead-Center Shared Anchor) */}
          <div className="block md:hidden relative pl-1">
            {/* Background Inactive Vertical Line (Anchored at left-[24px] -translate-x-1/2) */}
            <div className="absolute top-[20px] bottom-[25px] left-[24px] -translate-x-1/2 w-[2px] bg-neutral-800 pointer-events-none z-0" />

            {/* Animated Active Vertical Line (Anchored at left-[24px] -translate-x-1/2) */}
            <motion.div
              animate={{ height: `${progressPercent * 0.82}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[20px] left-[24px] -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#5B3AF5] via-[#AC9CFF] to-[#5B3AF5] shadow-[0_0_14px_#5B3AF5] pointer-events-none z-0"
            />

            {/* Vertical Steps */}
            <div className="space-y-10 relative z-10">
              {stepsData.map((step) => {
                const isReached = step.id <= activeStep;
                return (
                  <motion.div
                    key={step.id}
                    {...fadeIn}
                    onClick={() => setActiveStep(step.id)}
                    className="relative pl-16 cursor-pointer group flex flex-col justify-start"
                  >
                    {/* Node Dot Circle: Anchored at exact same left-[24px] -translate-x-1/2 */}
                    <div className="absolute left-[24px] -translate-x-1/2 top-0.5 z-10">
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center bg-[#050312] transition-all duration-500 ${
                          isReached
                            ? "border-[#5B3AF5] shadow-[0_0_22px_rgba(91,58,245,0.85)] scale-105"
                            : "border-neutral-800 group-hover:border-[#5B3AF5]/50"
                        }`}
                      >
                        <div
                          className={`w-4.5 h-4.5 rounded-full transition-all duration-500 ${
                            isReached
                              ? "bg-[#AC9CFF] shadow-[0_0_10px_#AC9CFF]"
                              : "bg-neutral-700 group-hover:bg-[#AC9CFF]/60"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Step Info */}
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2.5 mb-1">
                        <span
                          className={`text-2xl sm:text-3xl font-extrabold font-manrope transition-colors duration-300 ${
                            isReached ? "text-[#AC9CFF]" : "text-white/20"
                          }`}
                        >
                          {step.numberStr}
                        </span>
                        <h3
                          className={`text-lg sm:text-xl font-bold font-manrope transition-colors duration-300 ${
                            isReached ? "text-white" : "text-neutral-400"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 font-manrope leading-relaxed mt-1.5">
                        {step.details.join(" ")}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
