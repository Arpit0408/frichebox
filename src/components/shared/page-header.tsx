"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import CircularBadge from "@/components/ui/circular-badge";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  badgeText?: string;
  breadcrumb?: BreadcrumbItem[];
  className?: string;
  showCircularBadge?: boolean;
}

export default function PageHeader({
  title,
  description,
  badge,
  className,
  showCircularBadge = true,
}: PageHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Binding
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Parallax Text Movement: Title glides UP & fades out smoothly on scroll
  const textY = useTransform(smoothScroll, [0, 1], ["0px", "-45px"]);
  const textOpacity = useTransform(smoothScroll, [0, 0.75], [1, 0]);

  // Ambient Glow Parallax: Glow orbs drift DOWN smoothly
  const glowY = useTransform(smoothScroll, [0, 1], ["0px", "60px"]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const scrollToNext = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
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
      {/* Decorative Glow Lights (Parallax Drift) */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#5B3AF5]/20 blur-[130px] pointer-events-none"
      />
      <motion.div
        style={{ y: glowY }}
        className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-[#482BE0]/25 blur-[120px] pointer-events-none"
      />

      {/* Foreground Content (Parallax Lift & Fade) */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center"
      >
        {/* Optional Badge */}
        {badge && (
          <motion.span
            {...fadeIn}
            className="px-4 py-1.5 text-xs font-bold text-white bg-[#5B3AF5] rounded-full font-manrope capitalize tracking-[0.15em] shadow-lg shadow-[#5B3AF5]/25 mb-4 inline-block"
          >
            {badge}
          </motion.span>
        )}

        {/* Dynamic Title */}
        <motion.h1
          {...fadeIn}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-manrope tracking-tight leading-tight max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Optional Description */}
        {description && (
          <motion.p
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
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
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-40 cursor-pointer drop-shadow-[0_0_25px_rgba(91,58,245,0.5)] hover:drop-shadow-[0_0_35px_rgba(91,58,245,0.8)] transition-all duration-300"
        >
          <CircularBadge logoSrc="/logo/frichebox_icon.svg" />
        </motion.div>
      )}
    </section>
  );
}
