"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import TopFooter from "@/components/layout/top-footer";
import logoImg from "../../../public/logo/frichebox_logo_home.svg";

export default function Footer() {
  return (
    <div className="w-full flex flex-col z-10 relative">
      <TopFooter />
      <footer className="relative bg-[#050312] text-white border-t border-white/[0.06] pt-8 pb-8 sm:pt-16 sm:pb-6 px-8 sm:px-8 lg:px-12 font-manrope">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16 items-start">
            {/* Column 1: Logo, Tagline & Social Link */}
            <div className="md:col-span-5 flex flex-col items-start gap-5">
              <Link href="/" className="relative block mb-1">
                <Image
                  src={logoImg}
                  alt="FRICHEBOX Logo"
                  width={150}
                  height={45}
                  className="h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
                  priority
                />
              </Link>

              <p className="text-sm sm:text-base text-neutral-300 font-manrope font-medium leading-snug max-w-xs">
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
                  className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Follow FRICHEBOX on LinkedIn"
                >
                  <FaLinkedinIn className="text-base" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 flex flex-col items-start">
              <h4 className="text-lg font-bold text-white font-manrope mb-6">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-3.5">
                <Link
                  href="/"
                  className="text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-normal transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-normal transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/solutions"
                  className="text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-normal transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/infrastructure"
                  className="text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-normal transition-colors"
                >
                  Technology and Infrastructure
                </Link>
                <Link
                  href="/contact"
                  className="text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-normal transition-colors"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Column 3: Contact Us */}
            <div className="md:col-span-4 flex flex-col items-start">
              <h4 className="text-lg font-bold text-white font-manrope mb-6">
                Contact Us
              </h4>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:frishbox25@gmail.com"
                  className="text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-normal transition-colors"
                >
                  frishbox25@gmail.com
                </a>

                <a
                  href="tel:+919873175173"
                  className="text-sm sm:text-base text-neutral-300 hover:text-white font-manrope font-normal transition-colors"
                >
                  +91 9873175173 | +91 7838084543
                </a>
              </div>

              <div className="text-sm sm:text-base text-neutral-300 font-manrope font-normal leading-relaxed mt-8">
                Noida Sector-138, Industrial Area, <br />
                Uttar Pradesh, India
              </div>
            </div>
          </div>

          {/* Bottom Copyright Divider */}
          <div className="mt-16 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-manrope">
            <span>
              &copy; {new Date().getFullYear()} FRICHEBOX. All rights reserved.
            </span>
            <span>Faster Storage. Smarter Supply.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
