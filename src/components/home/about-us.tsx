"use client";

import { motion } from "framer-motion";
import { FaBoxes, FaCheckCircle, FaRoute } from "react-icons/fa";

export default function AboutUs() {
  // Animation presets for scroll reveal
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
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true, margin: "-100px" },
  } as const;

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section (2-Column Grid on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <motion.div
            {...fadeIn}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Badge */}
            <span className="px-3 py-1 text-xs font-semibold text-[#482BE0] bg-indigo-50 rounded-full font-manrope mb-4 uppercase tracking-wider">
              About Us
            </span>
            {/* Big Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#221F1F] leading-tight font-manrope tracking-tight">
              Our Journey: Excellence In Health & Wellness Logistics
            </h2>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="lg:col-span-5 lg:pb-2"
          >
            {/* Description Text */}
            <p className="text-base sm:text-lg text-[#4A4A4A] font-manrope font-normal leading-relaxed">
              Consider us a seamless extension of your supply chain. Our team
              ensures your inventory is stored compliantly, processed flawlessly,
              and dispatched on time—no matter where you sell.
            </p>
          </motion.div>
        </div>

        {/* Content Section (3-Column Grid on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Stats Card (col-span-3) */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3 flex flex-col justify-between bg-neutral-50/50 border border-neutral-100 rounded-2xl p-6 sm:p-8"
          >
            {/* Stat 1 */}
            <motion.div variants={fadeIn} className="flex flex-col py-4 first:pt-0 border-b border-neutral-200/50">
              <span className="text-3xl font-extrabold text-[#1A1A1A] font-manrope">
                5K+
              </span>
              <span className="text-sm font-medium text-neutral-500 font-manrope mt-1">
                Happy Clients Served
              </span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={fadeIn} className="flex flex-col py-5 border-b border-neutral-200/50">
              <span className="text-3xl font-extrabold text-[#1A1A1A] font-manrope">
                10,000
              </span>
              <span className="text-sm font-medium text-neutral-500 font-manrope mt-1">
                Sq Ft Facility (Noida)
              </span>
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={fadeIn} className="flex flex-col py-5 border-b border-neutral-200/50">
              <span className="text-3xl font-extrabold text-[#1A1A1A] font-manrope">
                27K+
              </span>
              <span className="text-sm font-medium text-neutral-500 font-manrope mt-1">
                Pin Codes Covered
              </span>
            </motion.div>

            {/* Stat 4 */}
            <motion.div variants={fadeIn} className="flex flex-col py-4 last:pb-0">
              <span className="text-3xl font-extrabold text-[#1A1A1A] font-manrope">
                78+
              </span>
              <span className="text-sm font-medium text-neutral-500 font-manrope mt-1">
                Indian Cities Reached
              </span>
            </motion.div>
          </motion.div>

          {/* Column 2: Center Image Card (col-span-4) */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-4 min-h-[300px] lg:min-h-full relative overflow-hidden rounded-3xl group"
          >
            <img
              src="/images/home/about_warehouse.png"
              alt="Frichebox Automated Warehouse Rack System"
              className="w-full h-full object-cover rounded-3xl min-h-[350px] lg:absolute lg:inset-0 transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Column 3: Features List Card (col-span-5) */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col justify-center gap-8 lg:pl-4"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeIn} className="flex items-start gap-4 sm:gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 text-[#482BE0] flex items-center justify-center text-lg shadow-sm">
                <FaBoxes />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-[#1A1A1A] font-manrope leading-snug">
                  Experts In Automated 3PL Management
                </h3>
                <p className="text-sm text-[#4A4A4A] font-manrope font-normal mt-2 leading-relaxed">
                  Eliminate bottlenecks with our AI-driven warehouse platform,
                  offering real-time tracking and 15+ custom report types.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeIn} className="flex items-start gap-4 sm:gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 text-[#482BE0] flex items-center justify-center text-lg shadow-sm">
                <FaCheckCircle />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-[#1A1A1A] font-manrope leading-snug">
                  Fully Compliant & Certified Storage
                </h3>
                <p className="text-sm text-[#4A4A4A] font-manrope font-normal mt-2 leading-relaxed">
                  Safeguard product integrity in an FSSAI-licensed, GDP-compliant,
                  and temperature-controlled environment.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeIn} className="flex items-start gap-4 sm:gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 text-[#482BE0] flex items-center justify-center text-lg shadow-sm">
                <FaRoute />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-[#1A1A1A] font-manrope leading-snug">
                  Transforming Last-Mile Turnaround
                </h3>
                <p className="text-sm text-[#4A4A4A] font-manrope font-normal mt-2 leading-relaxed">
                  Experience same-day dispatch backed by automated e-waybill
                  generation and 50+ integrated courier partners.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
