"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  breadcrumb?: BreadcrumbItem[];
  className?: string;
}

export default function PageHeader({
  title,
  description,
  badge,
  breadcrumb = [
    { label: "Home", href: "/" },
    { label: title, href: "#" },
  ],
  className,
}: PageHeaderProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <section
      className={cn(
        "relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-8 lg:px-12 text-white overflow-hidden",
        className
      )}
      style={{
        background: "linear-gradient(94.25deg, #050312 6.69%, #482BE0 163.59%)",
        borderBottom: "12px solid",
        borderImageSource:
          "linear-gradient(90deg, #482BE0 0%, #A495F0 50%, #A397DD 80.77%, #FFFFFF 100%)",
        borderImageSlice: 1,
      }}
    >
      {/* Decorative Glow Lights */}
      <div className="absolute top-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#482BE0]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Optional Badge */}
        {badge && (
          <motion.span
            {...fadeIn}
            className="px-4 py-1.5 text-xs font-bold text-white bg-[#482BE0] rounded-full font-manrope uppercase tracking-[0.15em] shadow-lg shadow-[#482BE0]/25 mb-4 inline-block"
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
    </section>
  );
}
