"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  badgeVariant?: "solid" | "subtle" | "purple";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badgeClassName?: string;
  maxTitleWidth?: string;
  maxSubtitleWidth?: string;
  animate?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  badgeVariant = "subtle",
  className,
  titleClassName,
  subtitleClassName,
  badgeClassName,
  maxTitleWidth = "max-w-2xl",
  maxSubtitleWidth = "max-w-2xl",
  animate = true,
}: SectionHeaderProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const isCenter = align === "center";
  const isRight = align === "right";

  const getBadgeStyle = () => {
    switch (badgeVariant) {
      case "solid":
        return "bg-[#482BE0] text-white shadow-md shadow-[#482BE0]/20 uppercase tracking-[0.15em]";
      case "purple":
        return "bg-[#F0EBFF] text-[#6C47FF] uppercase tracking-wider font-semibold";
      case "subtle":
      default:
        return "bg-indigo-50 text-[#482BE0] uppercase tracking-wider font-semibold";
    }
  };

  const Wrapper = animate ? motion.div : "div";

  return (
    <Wrapper
      {...(animate ? fadeIn : {})}
      className={cn(
        "flex flex-col mb-10 md:mb-12",
        isCenter && "items-center text-center",
        isRight && "items-end text-right",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {/* Badge Pill */}
      {badge && (
        <span
          className={cn(
            "px-4 py-1.5 text-xs font-bold rounded-full font-manrope mb-4 inline-block",
            getBadgeStyle(),
            badgeClassName
          )}
        >
          {badge}
        </span>
      )}

      {/* Main Section Heading */}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-manrope tracking-tight",
          theme === "dark" ? "text-white" : "text-[#1A1A1A]",
          maxTitleWidth,
          titleClassName
        )}
      >
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg font-manrope font-normal leading-relaxed",
            theme === "dark" ? "text-neutral-300" : "text-neutral-600",
            maxSubtitleWidth,
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </Wrapper>
  );
}

export default SectionHeader;
