"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TopFooter() {
  return (
    <section className="w-full bg-[#482BE0] py-10 sm:py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Decorative ambient light glow */}
      <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#5B3AF5]/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4 sm:gap-8 relative z-10">
        {/* Heading text */}
        <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-2xl font-manrope text-left tracking-tight">
          Partner With Us Today And Let Us Help You Scale Your Brand
        </h3>

        {/* Animated Sliding Arrow CTA Button */}
        <Link href="/contact" aria-label="Partner with us" className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 sm:border-4 border-white/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white shadow-xl shadow-black/10 group overflow-hidden"
          >
            {/* Arrow icon box */}
            <div className="relative overflow-hidden w-6 h-6 sm:w-8 sm:h-8">
              {/* Primary Arrow: Slides up-right on hover */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 sm:w-8 sm:h-8 text-white absolute transition-transform duration-300 ease-out group-hover:translate-x-8 group-hover:-translate-y-8"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>

              {/* Slide-In Arrow: Enters from bottom-left on hover */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 sm:w-8 sm:h-8 text-white absolute -translate-x-8 translate-y-8 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
