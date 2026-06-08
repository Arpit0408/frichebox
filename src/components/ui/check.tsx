"use client";

import { motion } from "framer-motion";

interface CheckProps {
  className?: string;
  animateOnHover?: boolean;
}

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring" as const, stiffness: 90, damping: 15 },
      opacity: { duration: 0.2 }
    }
  },
  hover: {
    pathLength: [0, 1],
    opacity: 1,
    transition: {
      pathLength: { type: "spring" as const, stiffness: 100, damping: 12 },
      opacity: { duration: 0.1 }
    }
  }
};

export function Check({ className = "w-5 h-5", animateOnHover = false }: CheckProps) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      {...(animateOnHover ? { whileHover: "hover" } : {})}
    >
      <motion.path
        d="M20 6L9 17L4 12"
        variants={pathVariants}
      />
    </motion.svg>
  );
}
