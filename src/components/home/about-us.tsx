"use client";

import { motion } from "framer-motion";
import { LuBriefcase, LuCircleCheck, LuBuilding2 } from "react-icons/lu";
import SectionHeader from "@/components/ui/section-header";
import Counter from "@/components/ui/counter";

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
    <section className="py-4 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          align="split"
          badge="About Us"
          badgeVariant="purple"
          title={
            <>
              Our Journey: Excellence In Health &amp; Wellness{" "}
              <br className="hidden lg:inline" /> Logistics
            </>
          }
          subtitle="Frischbox wasn't created just to rent space. We built it after realizing existing Indian warehouses lacked the absolute cleanliness, strict discipline, and advanced tech demanded by global brands. Instead of compromising, we built the solution."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3 grid grid-cols-2 lg:flex lg:flex-col justify-between bg-neutral-50/50 border border-neutral-100 rounded-2xl p-5 sm:p-8 gap-y-6 gap-x-4 lg:gap-0"
          >
            {/* Stat 1 */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col lg:py-4 lg:border-b lg:border-neutral-200/50"
            >
              <Counter
                value={5000}
                suffix="+"
                className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] font-manrope"
              />
              <span className="text-xs sm:text-sm font-medium text-neutral-500 font-manrope mt-1">
                Happy Clients Served
              </span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col lg:py-5 lg:border-b lg:border-neutral-200/50"
            >
              <Counter
                value={10000}
                className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] font-manrope"
              />
              <span className="text-xs sm:text-sm font-medium text-neutral-500 font-manrope mt-1">
                Sq Ft Facility (Noida)
              </span>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col lg:py-5 lg:border-b lg:border-neutral-200/50"
            >
              <Counter
                value={27000}
                suffix="+"
                className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] font-manrope"
              />
              <span className="text-xs sm:text-sm font-medium text-neutral-500 font-manrope mt-1">
                Pin Codes Covered
              </span>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col lg:py-4"
            >
              <Counter
                value={78}
                suffix="+"
                className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] font-manrope"
              />
              <span className="text-xs sm:text-sm font-medium text-neutral-500 font-manrope mt-1">
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
              alt="Frischbox Automated Warehouse Rack System"
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
            <motion.div
              variants={fadeIn}
              className="flex items-start gap-4 sm:gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EDE9FE] text-[#5B3AF5] flex items-center justify-center shadow-sm">
                <LuBriefcase className="w-5 h-5 stroke-[2.2]" />
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
            <motion.div
              variants={fadeIn}
              className="flex items-start gap-4 sm:gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EDE9FE] text-[#5B3AF5] flex items-center justify-center shadow-sm">
                <LuCircleCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-[#1A1A1A] font-manrope leading-snug">
                  Fully Compliant &amp; Certified Storage
                </h3>
                <p className="text-sm text-[#4A4A4A] font-manrope font-normal mt-2 leading-relaxed">
                  Safeguard product integrity in an FSSAI-licensed,
                  GDP-compliant, and temperature-controlled environment.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeIn}
              className="flex items-start gap-4 sm:gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EDE9FE] text-[#5B3AF5] flex items-center justify-center shadow-sm">
                <LuBuilding2 className="w-5 h-5 stroke-[2.2]" />
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
