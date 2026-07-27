"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export interface StatItem {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats?: StatItem[];
  className?: string;
}

const defaultStats: StatItem[] = [
  { value: "5K+", label: "Happy Clients Served" },
  { value: "10,000", label: "Sq Ft Facility (Noida)" },
  { value: "25K+", label: "Pin Codes Covered" },
  { value: "78+", label: "Indian Cities Reached" },
];

function AnimatedStatNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const match = value.match(/^([0-9.,]+)(.*)$/);
  const numStr = match ? match[1] : "";
  const suffix = match ? match[2] : "";

  const isCommaFormatted = numStr.includes(",");
  const isDecimal = numStr.includes(".");
  const decimalPlaces = isDecimal ? (numStr.split(".")[1]?.length || 0) : 0;
  const numericTarget = parseFloat(numStr.replace(/,/g, "")) || 0;

  const [displayValue, setDisplayValue] = useState(
    (0).toFixed(decimalPlaces) + suffix
  );

  useEffect(() => {
    if (!isInView || numericTarget === 0) return;

    const controls = animate(0, numericTarget, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1], // Smooth easeOutExpo
      onUpdate(current) {
        let formatted = isDecimal
          ? current.toFixed(decimalPlaces)
          : Math.floor(current).toString();

        if (isCommaFormatted) {
          formatted = Math.floor(current).toLocaleString("en-US");
        }

        setDisplayValue(formatted + suffix);
      },
    });

    return () => controls.stop();
  }, [isInView, numericTarget, isDecimal, decimalPlaces, isCommaFormatted, suffix]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function StatsCounter({
  stats = defaultStats,
  className = "",
}: StatsCounterProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
    <section className={`w-full bg-[#050312] py-16 md:py-20 px-6 sm:px-8 lg:px-12 text-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex flex-col items-center justify-center"
            >
              {/* Animated Gradient Number Text */}
              <span
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-manrope tracking-tight leading-none"
                style={{
                  background:
                    "linear-gradient(180deg, #482BE0 -50.69%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <AnimatedStatNumber value={stat.value} />
              </span>

              {/* Label */}
              <span className="mt-3 text-sm sm:text-base font-normal font-manrope text-neutral-300 max-w-[200px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
