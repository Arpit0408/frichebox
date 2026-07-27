"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import { cn } from "@/lib/utils";

export interface ChecklistItem {
  id: number;
  title?: string;
  description: string;
}

export interface FeatureChecklistSectionProps {
  badge?: string;
  badgeVariant?: "purple" | "subtle" | "solid";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  items?: ChecklistItem[];
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

const defaultItems: ChecklistItem[] = [
  {
    id: 1,
    title: "Reliability",
    description:
      "We work as a seamless extension of your team, ensuring absolute precision from receiving to final dispatch.",
  },
  {
    id: 2,
    title: "Transparency",
    description:
      "No black boxes. You get real-time SKU tracking and live dashboards to monitor your exact stock position 24/7.",
  },
  {
    id: 3,
    title: "Excellence",
    description:
      "Near enough isn't enough. We enforce a strict zero-pick-error SOP using automated workflows to protect your brand's reputation.",
  },
];

export default function FeatureChecklistSection({
  badge = "Values",
  badgeVariant = "purple",
  title = "How we operate.",
  subtitle = "We act as a dedicated extension of your supply chain, prioritizing trust, accountability, and lasting partnerships to protect your brand's reputation at every step.",
  items = defaultItems,
  imageSrc = "/images/about/how_we_operate.png",
  imageAlt = "Frischbox WMS Dashboard on computer monitor in warehouse",
  imagePosition = "right",
  className,
}: FeatureChecklistSectionProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.08,
      },
    },
    viewport: { once: true, margin: "-100px" },
  } as const;

  const isImageRight = imagePosition === "right";

  const getBadgeStyle = () => {
    switch (badgeVariant) {
      case "solid":
        return "bg-[#482BE0] text-white shadow-md shadow-[#482BE0]/20";
      case "subtle":
        return "bg-indigo-50 text-[#482BE0]";
      case "purple":
      default:
        return "bg-[#F0EBFF] text-[#5B3AF5]";
    }
  };

  return (
    <section
      className={cn(
        "py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Text & Checklist Column (6 cols out of 12) */}
          <motion.div
            {...fadeIn}
            className={cn(
              "lg:col-span-6 flex flex-col items-start relative z-10",
              !isImageRight && "lg:order-2"
            )}
          >
           

            <div className="relative z-10 w-full">
              {/* Badge */}
              {badge && (
                <span
                  className={cn(
                    "px-4 py-1.5 text-xs font-semibold rounded-full font-manrope uppercase tracking-wider mb-5 inline-block",
                    getBadgeStyle()
                  )}
                >
                  {badge}
                </span>
              )}

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight leading-tight mb-4">
                {title}
              </h2>

              {/* Subtitle */}
              {subtitle && (
                <p className="text-base text-[#4B5563] font-manrope font-normal leading-relaxed mb-6">
                  {subtitle}
                </p>
              )}

              {/* Checklist Items */}
              {items && items.length > 0 && (
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col gap-4.5 sm:gap-5 w-full mt-2"
                >
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={fadeIn}
                      className="flex items-start gap-3.5 sm:gap-4 group"
                    >
                      {/* Purple Circle Check Icon */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#5B3AF5] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#5B3AF5]/25 mt-0.5">
                        <LuCheck className="w-4 h-4 stroke-[3]" />
                      </div>

                      {/* Title + Description */}
                      <div className="flex-1">
                        <p className="text-sm sm:text-base text-[#374151] font-manrope leading-relaxed">
                          {item.title && (
                            <strong className="font-bold text-[#111827] mr-1.5">
                              {item.title}:
                            </strong>
                          )}
                          <span className="font-normal">
                            {item.description}
                          </span>
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Image Column (6 cols out of 12) - Sticky on desktop for long lists */}
          <motion.div
            {...fadeIn}
            className={cn(
              "lg:col-span-6 lg:sticky lg:top-28 relative w-full aspect-[4/3] sm:aspect-[14/11] overflow-hidden rounded-3xl sm:rounded-[32px] shadow-2xl group border border-neutral-100 self-start",
              !isImageRight && "lg:order-1"
            )}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-3xl sm:rounded-[32px] transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/images/home/why_choose_us.png";
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
