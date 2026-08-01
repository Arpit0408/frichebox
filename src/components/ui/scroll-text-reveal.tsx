"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  theme?: "light" | "dark";
}

export function ScrollTextReveal({
  text,
  className,
  as: Component = "h2",
  theme = "light",
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Track scroll position of this header relative to the viewport window
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.35"],
  });

  const words = text.split(" ");

  return (
    <Component
      ref={containerRef as any}
      className={cn(
        "inline-flex flex-wrap gap-x-2 gap-y-1 leading-tight font-manrope font-extrabold tracking-tight",
        className
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // Smoothly transform word opacity from faded (0.22) to original full color (1.0)
        const opacity = useTransform(scrollYProgress, [start, end], [0.22, 1]);

        return (
          <motion.span
            key={`${word}-${i}`}
            style={{ opacity }}
            className={cn(
              "inline-block transition-colors duration-150",
              theme === "dark" ? "text-white" : "text-[#111827]"
            )}
          >
            {word}
          </motion.span>
        );
      })}
    </Component>
  );
}

export default ScrollTextReveal;
