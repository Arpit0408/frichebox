"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
}

const navLinks: NavLinkProps[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/infrastructure", label: "Technology & Infrastructure" },
  { href: "/contact", label: "Contact Us" },
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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-out",
          isSolidHeader
            ? "w-full bg-white shadow-sm border-b border-neutral-200/80 py-3.5 px-4 sm:px-6 md:px-8"
            : "w-full bg-transparent py-4 px-4 sm:px-6 md:px-8",
        )}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex-shrink-0 flex items-center justify-start">
              <Image
                src={
                  isSolidHeader
                    ? "/logo/frichebox.png"
                    : "/logo/frichebox_logo_home.svg"
                }
                alt="Frichebox Logo"
                width={180}
                height={80}
                className={cn(
                  "h-12 w-auto object-contain transition-all duration-300",
                  !isSolidHeader &&
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
                        ? "text-black font-semibold "
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "flex md:hidden p-2 focus:outline-none transition-colors rounded-lg",
              isSolidHeader
                ? "text-neutral-800 hover:text-black hover:bg-neutral-100"
                : "text-neutral-300 hover:text-white hover:bg-white/10",
            )}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-0 z-40 flex flex-col justify-center px-8 backdrop-blur-lg",
              isSolidHeader ? "bg-white/95" : "bg-black/95",
            )}
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-xl font-semibold py-2 transition-all block",
                        isSolidHeader
                          ? active
                            ? "text-black font-bold"
                            : "text-neutral-600 hover:text-black"
                          : active
                            ? "text-white font-bold"
                            : "text-neutral-400 hover:text-white",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
