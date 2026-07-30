"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MissionVisionProps {
  racksImage?: string;
  operatorsImage?: string;
  ctaBgImage?: string;
}

export default function MissionVision({
  racksImage = "/images/about/mission_racks.png",
  operatorsImage = "/images/about/mission_operators.png",
  ctaBgImage = "/images/about/mission_cta.png",
}: MissionVisionProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <section className="py-14 sm:py-20 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left & Center Columns Container  */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            {/* Top Row: Mission Card  */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              {/* Card 1: Our Mission */}
              <motion.div
                {...fadeIn}
                className="sm:col-span-7 bg-[#482BE0] text-white p-7 sm:p-9 rounded-[28px] shadow-lg flex flex-col justify-center relative overflow-hidden h-[200px] sm:h-[260px]"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-manrope text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm font-manrope text-white/90 leading-relaxed font-normal">
                    Our mission is to strip the operational friction out of
                    e-commerce. We combine automated technology, intelligent
                    slotting, and strict compliance to give brands the backend
                    infrastructure they need to compete at the highest
                    level—guaranteeing lightning-fast processing, zero-error
                    execution, and complete supply chain peace of mind.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Vertical Warehouse Racks Image */}
              <motion.div
                {...fadeIn}
                className="sm:col-span-5 rounded-[28px] overflow-hidden shadow-lg h-[200px] sm:h-[260px] relative group"
              >
                <img
                  src={racksImage}
                  alt="Automated Warehouse Racks Aisle"
                  className="w-full h-full object-cover rounded-[28px] transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/home/about_warehouse.png";
                  }}
                />
              </motion.div>
            </div>

            {/* Bottom Row: Wide Warehouse Operators Image */}
            <motion.div
              {...fadeIn}
              className="rounded-[28px] overflow-hidden shadow-lg h-[220px] sm:h-[335px] relative group"
            >
              <img
                src={operatorsImage}
                alt="Frischbox Warehouse Operators Working in Aisle"
                className="w-full h-full object-cover rounded-[28px] transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/home/why_choose_us.png";
                }}
              />
            </motion.div>
          </div>

          {/* Right Column Container*/}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Card 3: Our Vision */}
            <motion.div
              {...fadeIn}
              className="bg-[#482BE0] text-white p-7 sm:p-9 rounded-[28px] shadow-lg flex flex-col justify-center relative overflow-hidden h-[340px] sm:h-[360px]"
            >
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-manrope text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm font-manrope text-white/90 leading-relaxed font-normal">
                  We are building the most trusted, adaptive, and automated
                  multi-channel fulfillment network across India. By
                  continuously pushing the boundaries of smart warehouse
                  management systems (WMS) and sustainable packaging, we aim to
                  empower brands to transition seamlessly from local favorites
                  to national market leaders.
                </p>
              </div>
            </motion.div>

            {/* Card 5: Work With Us CTA Card */}
            <motion.div {...fadeIn}>
              <Link
                href="/contact"
                className="relative rounded-[28px] overflow-hidden shadow-lg h-[220px] sm:h-[235px] flex flex-col items-center justify-center text-center p-6 group cursor-pointer block"
              >
                {/* Background Image with Gradient Overlay */}
                <img
                  src={ctaBgImage}
                  alt="Frischbox Logistics Work With Us"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/home/hero_2.png";
                  }}
                />
                <div className="absolute inset-0 bg-[#482BE0]/80 backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-[#482BE0]/85" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  {/* Isometric Box Icon */}
                  <div className="w-11 h-11 flex items-center justify-center mb-2 drop-shadow-md">
                    <img
                      src="/logo/frichebox_icon.svg"
                      alt="Frichebox Icon"
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-extrabold font-manrope text-white tracking-tight">
                    Work With Us
                  </h4>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
