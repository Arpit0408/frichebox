"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right" | "split";
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
  badgeVariant = "purple",
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

  const getBadgeStyle = () => {
    switch (badgeVariant) {
      case "solid":
        return "bg-[#5B3AF5] text-white shadow-md shadow-[#5B3AF5]/20 capitalize tracking-wider font-semibold";
      case "purple":
      case "subtle":
      default:
        return "bg-[#F0EBFF] text-[#5B3AF5] capitalize tracking-wider font-semibold";
    }
  };

  const Wrapper = animate ? motion.div : "div";

  // 2-Column Split Layout for Header + Side Description
  if (align === "split") {
    return (
      <Wrapper
        {...(animate ? fadeIn : {})}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-16 w-full",
          className
        )}
      >
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {badge && (
            <span
              className={cn(
                "px-4 py-1.5 text-xs rounded-full font-manrope mb-4 inline-block",
                getBadgeStyle(),
                badgeClassName
              )}
            >
              {badge}
            </span>
          )}
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight font-manrope tracking-tight",
              theme === "dark" ? "text-white" : "text-[#111827]",
              titleClassName
            )}
          >
            {title}
          </h2>
        </div>

        {subtitle && (
          <div className="lg:col-span-5 text-sm sm:text-base font-manrope font-normal leading-relaxed text-left">
            <p
              className={cn(
                theme === "dark" ? "text-neutral-300" : "text-[#4B5563]",
                subtitleClassName
              )}
            >
              {subtitle}
            </p>
          </div>
        )}
      </Wrapper>
    );
  }

  // Standard Stacked Layout (Left, Center, Right)
  const isCenter = align === "center";
  const isRight = align === "right";

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
            "px-4 py-1.5 text-xs rounded-full font-manrope mb-4 inline-block",
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
          theme === "dark" ? "text-white" : "text-[#111827]",
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
            "mt-4 text-sm sm:text-base md:text-lg font-manrope font-normal leading-relaxed",
            theme === "dark" ? "text-neutral-300" : "text-[#4B5563]",
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
