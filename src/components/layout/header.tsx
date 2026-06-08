"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import logoImg from "../../../public/images/logo/frichebox_logo.png";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

const navLinks: NavLinkProps[] = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/infrastructure", label: "Technology & Infrastructure" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const scrolled = useScroll(10);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isGlassy = scrolled;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out py-4 px-4 sm:px-6 md:px-8">
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 25,
            mass: 0.8,
          }}
          className={cn(
            "w-full max-w-7xl flex items-center justify-between transition-all duration-500 ease-out",
            isGlassy
              ? "px-4 py-3.5 rounded-2xl bg-white/[0.04] dark:bg-neutral-950/[0.4] border border-white/[0.08] dark:border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] backdrop-blur-md"
              : "px-4 py-4 bg-transparent border-transparent border-white/0",
          )}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            {/* Logo Image */}
            <div className="relative flex-shrink-0 flex items-start justify-start">
              <Image
                src={logoImg}
                alt="Frichebox Logo"
                className="h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  link.active
                    ? "text-white font-semibold"
                    : "text-neutral-300 hover:text-white hover:bg-white/[0.03]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </motion.div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-semibold py-2 transition-all",
                    link.active
                      ? "text-white"
                      : "text-neutral-400 hover:text-white",
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
