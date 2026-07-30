"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, blurReveal, scaleUp, fadeInLeft, fadeInRight, defaultViewport } from "@/lib/animations";

interface SmoothScrollRevealProps {
  children: React.ReactNode;
  variant?: "fadeUp" | "blur" | "scale" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function SmoothScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
}: SmoothScrollRevealProps) {
  const getVariant = () => {
    switch (variant) {
      case "blur":
        return blurReveal;
      case "scale":
        return scaleUp;
      case "left":
        return fadeInLeft;
      case "right":
        return fadeInRight;
      case "fadeUp":
      default:
        return fadeInUp;
    }
  };

  return (
    <motion.div
      variants={getVariant()}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
