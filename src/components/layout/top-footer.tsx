"use client";

import { motion } from "framer-motion";

export default function TopFooter() {
  return (
    <section className="w-full bg-[#482BE0] py-14 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Heading text */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-2xl font-manrope text-left">
          Partner With Us Today And Let Us Help You Scale Your Brand
        </h3>

        {/* Animated Sliding Arrow CTA Button (96px x 96px, equivalent to ~97px) */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors duration-300 hover:bg-white/10 group overflow-hidden"
          aria-label="Partner with us"
        >
          {/* Arrow icon box */}
          <div className="relative overflow-hidden w-8 h-8">
            {/* Primary Arrow: Slides up-right on hover */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-white absolute transition-transform duration-300 ease-out group-hover:translate-x-8 group-hover:-translate-y-8"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>

            {/* Slide-In Arrow: Enters from bottom-left on hover */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-white absolute -translate-x-8 translate-y-8 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
