"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for progress indicator
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#5B3AF5] via-[#AC9CFF] to-[#5B3AF5] shadow-[0_0_12px_#5B3AF5] transform-origin-0 z-50 pointer-events-none"
    />
  );
}
