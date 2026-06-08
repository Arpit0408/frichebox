"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CircularBadgeProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  logoSrc?: string; // Optional custom logo image file path
}

export default function CircularBadge({
  text = "Get Quote • Get Quote • Get Quote • Get Quote •",
  className,
  onClick,
  logoSrc,
}: CircularBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className={cn(
        "relative flex items-center justify-center cursor-pointer active:scale-95 transition-transform select-none",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 filter drop-shadow-[0_4px_16px_rgba(72,43,224,0.35)]"
      >
        <defs>
          {/* Circular Path definition for text alignment */}
          <path
            id="badgeCirclePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            fill="none"
          />
        </defs>

        {/* Large Solid Background Circle (Requested Color #482BE0) */}
        <circle
          cx="50"
          cy="50"
          r="46"
          className="fill-[#482BE0] hover:fill-[#381ec8] transition-colors stroke-white/10 stroke-1 cursor-pointer"
        />

        <g
          style={{ 
            transformOrigin: "50px 50px",
            animationDuration: "20s"
          }}
          className="animate-spin pointer-events-none"
        >
          <text className="fill-white text-[7.5px] uppercase font-extrabold tracking-[0.24em] font-manrope">
            <textPath href="#badgeCirclePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </g>

        {/* Logo Placement in Center */}
        {logoSrc ? (
          // If a custom image is provided, render it using Next.js Image
          <g transform="translate(37, 37)" className="pointer-events-none">
            <foreignObject width="26" height="26">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={logoSrc}
                  alt="Badge Logo"
                  width={26}
                  height={26}
                  className="w-full h-full object-contain"
                />
              </div>
            </foreignObject>
          </g>
        ) : (
          // Default vector Slanted F Logo (Instantly loads, fully styleable)
          <g
            transform="translate(37.5, 36.5) scale(0.25)"
            className="fill-white pointer-events-none"
          >
            <path d="M 38 10 L 82 10 L 78 24 L 54 24 L 50 38 L 70 38 L 66 52 L 50 52 L 44 74 L 30 74 Z" />
          </g>
        )}
      </svg>
    </motion.div>
  );
}
