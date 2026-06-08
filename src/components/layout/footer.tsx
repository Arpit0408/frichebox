"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import TopFooter from "@/components/layout/top-footer";
import logoImg from "../../../public/images/logo/frichebox_logo.png";

export default function Footer() {
  return (
    <div className="w-full flex flex-col z-10 relative">
      <TopFooter />
      <footer className="relative bg-[#04050d] text-white border-t border-white/[0.04] py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16">
          {/* Column 1: Brand details (col-span-12 on mobile, col-span-4 on desktop) */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            {/* Logo */}
            <Link href="/" className="relative block">
              <Image
                src={logoImg}
                alt="Frichebox Logo"
                width={120}
                height={35}
                className="h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
                priority
              />
            </Link>
            {/* Subtitle */}
            <p className="text-sm text-neutral-400 font-manrope font-normal max-w-sm leading-relaxed">
              The Tech-Driven Fulfillment Engine for Fast-Growing Brands
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white flex items-center justify-center transition-all active:scale-95 bg-white/[0.02]"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white flex items-center justify-center transition-all active:scale-95 bg-white/[0.02]"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-12 on mobile, col-span-3 on desktop) */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs sm:text-sm font-extrabold tracking-[0.15em] text-white uppercase font-manrope mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3.5">
              <Link
                href="/"
                className="text-sm text-neutral-400 hover:text-white font-manrope font-normal transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-neutral-400 hover:text-white font-manrope font-normal transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm text-neutral-400 hover:text-white font-manrope font-normal transition-colors"
              >
                Services
              </Link>
              <Link
                href="/infrastructure"
                className="text-sm text-neutral-400 hover:text-white font-manrope font-normal transition-colors"
              >
                Technology and Infrastructure
              </Link>
              <Link
                href="/contact"
                className="text-sm text-neutral-400 hover:text-white font-manrope font-normal transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Us (col-span-12 on mobile, col-span-4 on desktop) */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <h4 className="text-xs sm:text-sm font-extrabold tracking-[0.15em] text-white uppercase font-manrope mb-2">
              Contact Us
            </h4>
            
            {/* Emails */}
            <div className="flex flex-col gap-1.5">
              <a
                href="mailto:leads@atriumangels.com"
                className="text-sm text-neutral-400 hover:text-white font-manrope font-normal transition-colors"
              >
                leads@atriumangels.com
              </a>
              <a
                href="mailto:info@atriumvc.com"
                className="text-sm text-neutral-400 hover:text-white font-manrope font-normal transition-colors"
              >
                info@atriumvc.com
              </a>
            </div>

            {/* Address */}
            <div className="text-sm text-neutral-400 font-manrope font-normal leading-relaxed mt-2 flex flex-col gap-1 uppercase tracking-wide">
              <span className="font-bold text-white text-xs tracking-wider">Atrium Advisory LLP</span>
              <span>32, Espace Nirvana Country</span>
              <span>South City-2, Gurgaon,</span>
              <span>Haryana, India - 122018</span>
            </div>
          </div>
        </div>

        {/* Copyright divider line */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-manrope">
          <span>&copy; {new Date().getFullYear()} FRICHEBOX. All rights reserved.</span>
          <span>Faster Storage. Smarter Supply.</span>
        </div>
      </div>
      </footer>
    </div>
  );
}
