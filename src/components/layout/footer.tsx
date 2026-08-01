"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { LuArrowUpRight, LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import TopFooter from "@/components/layout/top-footer";

export default function Footer() {
  const fadeIn = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <div className="w-full flex flex-col z-10 relative">
      <TopFooter />
      <footer className="relative bg-[#050312] text-white border-t border-white/[0.06] pt-12 pb-8 sm:pt-16 sm:pb-6 px-6 sm:px-8 lg:px-12 font-manrope overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#482BE0]/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            {...fadeIn}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16 items-start"
          >
            {/* Column 1: Logo, Tagline & Social Link */}
            <div className="md:col-span-5 flex flex-col items-start gap-5">
              <Link href="/" className="relative block mb-1">
                <img
                  src="/logo/frichebox_logo_home.svg"
                  alt="Frichebox Logo"
                  className="h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
                />
              </Link>

              <p className="text-sm sm:text-base text-neutral-300 font-manrope font-medium leading-relaxed max-w-xs">
                The Tech-Driven Fulfillment <br className="hidden sm:inline" />
                Engine for Fast-Growing <br className="hidden sm:inline" />
                Brands
              </p>

              {/* LinkedIn Button */}
              <div className="pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-[#5B3AF5] hover:border-[#5B3AF5] hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md shadow-[#5B3AF5]/15"
                  aria-label="Follow Frischbox on LinkedIn"
                >
                  <FaLinkedinIn className="text-base" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 flex flex-col items-start">
              <h4 className="text-lg font-bold text-white font-manrope mb-6 tracking-tight">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-3.5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/solutions", label: "Solutions" },
                  {
                    href: "/infrastructure",
                    label: "Technology & Infrastructure",
                  },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-medium transition-all duration-200 hover:translate-x-1.5"
                  >
                    <span>{link.label}</span>
                    <LuArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#C7B8FF]" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Contact Us */}
            <div className="md:col-span-4 flex flex-col items-start">
              <h4 className="text-lg font-bold text-white font-manrope mb-6 tracking-tight">
                Contact Us
              </h4>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:frishbox25@gmail.com"
                  className="flex items-center gap-3 text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-medium transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#5B3AF5] flex items-center justify-center transition-colors duration-200 text-white flex-shrink-0">
                    <LuMail className="w-4 h-4" />
                  </div>
                  <span>frishbox25@gmail.com</span>
                </a>

                <a
                  href="tel:+919873175173"
                  className="flex items-start gap-3 text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-medium transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#5B3AF5] flex items-center justify-center transition-colors duration-200 text-white flex-shrink-0 mt-0.5">
                    <LuPhone className="w-4 h-4" />
                  </div>
                  <span>+91 9873175173 | +91 7838084543</span>
                </a>

                <div className="flex items-start gap-3 text-sm sm:text-base text-neutral-300 font-manrope font-medium leading-relaxed mt-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <LuMapPin className="w-4 h-4" />
                  </div>
                  <span>
                    Noida Sector-138, Industrial Area, <br />
                    Uttar Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Copyright Divider */}
          <div className="mt-14 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-neutral-400 font-manrope">
            <span>
              &copy; {new Date().getFullYear()} Frischbox. All rights reserved.
            </span>
            <span className="font-semibold text-neutral-300">
              Faster Storage. Smarter Supply.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
