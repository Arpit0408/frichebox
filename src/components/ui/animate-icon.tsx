"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimateIconProps {
  children: React.ReactNode;
  animateOnHover?: boolean;
  className?: string;
}

export function AnimateIcon({
  children,
  animateOnHover = true,
  className = "",
}: AnimateIconProps) {
  return (
    <motion.span
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={animateOnHover ? "hover" : undefined}
      className={`inline-flex items-center justify-center ${className}`}
    >
      {children}
    </motion.span>
  );
}
