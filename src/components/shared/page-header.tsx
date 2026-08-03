"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CircularBadge from "@/components/ui/circular-badge";
import { fadeInUp as fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  showCircularBadge?: boolean;
}

export default function PageHeader({
  badge,
  title,
  description,
  className,
  showCircularBadge = true,
}: PageHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Tracking for Header Background & Text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);

  const scrollToNext = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight * 0.5,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative w-full pt-28 pb-20 sm:pt-36 sm:pb-24 px-6 sm:px-8 lg:px-12 text-white overflow-visible mb-4 sm:mb-20 z-20",
        className,
      )}
      style={{
        background: "linear-gradient(94.25deg, #050312 6.69%, #482BE0 163.59%)",
        borderBottom: "6px solid #5B3AF5",
      }}
    >
      {/* Contained Decorative Glow Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: glowY }}
          className="absolute top-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#5B3AF5]/20 blur-[130px]"
        />
        <motion.div
          style={{ y: glowY }}
          className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-[#482BE0]/25 blur-[120px]"
        />
      </div>

      {/* Foreground Content (Staggered Animation Entrance + Parallax Lift/Fade) */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center"
      >
        {/* Optional Badge */}
        {badge && (
          <motion.span
            variants={fadeIn}
            className="px-4 py-1.5 text-xs font-bold text-white bg-[#5B3AF5] rounded-full font-manrope capitalize tracking-[0.15em] shadow-lg shadow-[#5B3AF5]/25 mb-4 inline-block"
          >
            {badge}
          </motion.span>
        )}

        {/* Dynamic Title */}
        <motion.h1
          variants={fadeIn}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-manrope tracking-tight leading-tight max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Optional Description */}
        {description && (
          <motion.p
            variants={fadeIn}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-300 font-manrope font-normal max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      {/* Centered Rotating Circular Badge on Bottom Border */}
      {showCircularBadge && (
        <motion.div
          onClick={scrollToNext}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-40 cursor-pointer drop-shadow-none transition-all duration-300"
        >
          <CircularBadge logoSrc="/logo/frichebox_icon.svg" />
        </motion.div>
      )}
    </section>
  );
}
