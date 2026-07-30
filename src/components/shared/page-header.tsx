"use client";

import { motion } from "framer-motion";
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
      className={cn(
        "relative w-full pt-28 pb-20 sm:pt-36 sm:pb-24 px-6 sm:px-8 lg:px-12 text-white overflow-visible mb-4 sm:mb-20",
        className,
      )}
      style={{
        background: "linear-gradient(94.25deg, #050312 6.69%, #482BE0 163.59%)",
        borderBottom: "6px solid #5B3AF5",
      }}
    >
      {/* Decorative Glow Lights */}
      <div className="absolute top-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full  blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full  blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
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
      </div>

      {/* Centered Rotating Circular Badge on Bottom Border */}
      {showCircularBadge && (
        <div
          onClick={scrollToNext}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 cursor-pointer"
        >
          <CircularBadge logoSrc="/logo/frichebox_icon.svg" />
        </div>
      )}
    </section>
  );
}
