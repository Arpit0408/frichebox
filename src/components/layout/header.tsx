"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuArrowUpRight, LuPhone, LuMail } from "react-icons/lu";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  numStr: string;
}

const navLinks: NavLinkProps[] = [
  { href: "/", label: "Home", numStr: "01" },
  { href: "/about", label: "About Us", numStr: "02" },
  { href: "/solutions", label: "Solutions", numStr: "03" },
  {
    href: "/infrastructure",
    label: "Technology & Infrastructure",
    numStr: "04",
  },
  { href: "/contact", label: "Contact Us", numStr: "05" },
];

export default function Header() {
  const pathname = usePathname();
  const scrolled = useScroll(10);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  // Full width white bg with black text applies on scroll or on non-home pages
  const isSolidHeader = !isHome || scrolled;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const menuContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-out",
          isMobileMenuOpen
            ? "w-full bg-transparent border-transparent shadow-none py-4 px-4 sm:px-6 md:px-8"
            : isSolidHeader
              ? "w-full bg-white shadow-sm border-b border-neutral-200/80 py-3.5 px-4 sm:px-6 md:px-8"
              : "w-full bg-transparent py-4 px-4 sm:px-6 md:px-8",
        )}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 relative z-50">
            <div className="relative flex-shrink-0 flex items-center justify-start">
              <Image
                src={
                  isMobileMenuOpen
                    ? "/logo/frichebox_logo_home.svg"
                    : isSolidHeader
                      ? "/logo/frichebox.png"
                      : "/logo/frichebox_logo_home.svg"
                }
                alt="Frischbox Logo"
                width={180}
                height={80}
                className={cn(
                  "h-11 sm:h-12 w-auto object-contain transition-all duration-300",
                  (!isSolidHeader || isMobileMenuOpen) &&
                    "filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]",
                )}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                    isSolidHeader
                      ? active
                        ? "text-black font-semibold"
                        : "text-neutral-700 hover:text-black"
                      : active
                        ? "text-white font-semibold"
                        : "text-neutral-300 hover:text-white hover:bg-white/[0.05]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "flex md:hidden relative z-50 p-2.5 focus:outline-none transition-all rounded-full cursor-pointer",
              isMobileMenuOpen
                ? "bg-white/15 text-white border border-white/30 shadow-lg shadow-[#5B3AF5]/30 hover:bg-[#5B3AF5]"
                : isSolidHeader
                  ? "text-neutral-800 hover:text-black hover:bg-neutral-100"
                  : "text-neutral-200 hover:text-white hover:bg-white/10",
            )}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-lg text-white" />
            ) : (
              <FaBars className="text-lg" />
            )}
          </button>
        </div>
      </header>

      {/* ---------------- STATE-OF-THE-ART LUXURY MOBILE MENU OVERLAY ---------------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 w-full max-w-full bg-[#050312]/98 backdrop-blur-2xl text-white flex flex-col justify-between pt-24 pb-8 px-5 sm:px-10 overflow-x-hidden overflow-y-auto"
          >
            {/* Contained Ambient Background Glow Spheres */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-1/4 left-[-10%] w-[320px] h-[320px] rounded-full bg-[#5B3AF5]/25 blur-[120px]" />
              <div className="absolute bottom-10 right-[-10%] w-[280px] h-[280px] rounded-full bg-[#482BE0]/20 blur-[100px]" />
            </div>

            <div className="max-w-md mx-auto w-full relative z-10 my-auto">
              {/* Menu Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 pb-3 border-b border-white/10 flex items-center justify-between"
              >
                <span className="text-xs font-bold font-manrope uppercase tracking-[0.2em] text-[#AC9CFF]">
                  Navigation Menu
                </span>
              </motion.div>

              {/* Staggered Animated Links */}
              <motion.nav
                variants={menuContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-3.5 w-full"
              >
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div key={link.label} variants={menuItemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "group flex items-center justify-between py-3 px-4 rounded-2xl transition-all duration-300 w-full",
                          active
                            ? "bg-[#5B3AF5]/20 border border-[#5B3AF5]/50 text-white shadow-lg shadow-[#5B3AF5]/15"
                            : "hover:bg-white/5 text-neutral-300 hover:text-white",
                        )}
                      >
                        <div className="flex items-center gap-3.5 flex-1 min-w-0 pr-2">
                          <span
                            className={cn(
                              "text-base sm:text-xl font-extrabold font-manrope tracking-tight leading-snug transition-all duration-300 group-hover:translate-x-1 break-words",
                              active ? "text-white" : "text-neutral-200",
                            )}
                          >
                            {link.label}
                          </span>
                        </div>

                        {/* Arrow Icon Indicator */}
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                            active
                              ? "bg-[#5B3AF5] text-white rotate-45"
                              : "bg-white/5 text-neutral-400 group-hover:bg-white/15 group-hover:text-white group-hover:rotate-45",
                          )}
                        >
                          <LuArrowUpRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>
            </div>

            {/* Quick Contact & Action Drawer Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="max-w-md mx-auto w-full relative z-10 pt-5 border-t border-white/10 mt-5"
            >
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-manrope">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#AC9CFF] flex-shrink-0">
                    <LuPhone className="w-3 h-3" />
                  </div>
                  <span className="truncate">+91 9873175173</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-manrope">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#AC9CFF] flex-shrink-0">
                    <LuMail className="w-3 h-3" />
                  </div>
                  <span className="truncate">frishbox25@gmail.com</span>
                </div>
              </div>

              {/* Direct CTA Button */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-2xl bg-[#5B3AF5] hover:bg-[#482BE0] text-white font-bold font-manrope text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#5B3AF5]/30 active:scale-95 transition-all"
              >
                <span>Schedule a Consultation</span>
                <LuArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
