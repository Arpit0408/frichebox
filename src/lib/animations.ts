import { Variants } from "framer-motion";

/**
 * Centralized Animation Configuration Library for Frischbox Website
 * Controls all heading, subtitle, text, badge, and card animation timings.
 */

// 1. Smooth Fade Up (Headings, Subtitles, Paragraphs) - Slightly Slower (0.95s)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 2. Fade In Left (Badges, Left Columns) - Slightly Slower (0.95s)
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 3. Fade In Right (Right Column Visuals, Bento Cards) - Slightly Slower (0.95s)
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 4. Scale Up & Spring Reveal (Cards, Floating Stats, Badges) - Slower (0.85s)
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 5. Stagger Container (Grids, Features List, Tab Lists) - Slightly Slower Stagger (0.16s)
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

// 6. Stagger Item (Child element inside a stagger container) - Slower (0.75s)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 7. Text Blur Reveal (Premium Headings & Badges) - Slower (1.05s)
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 15 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 8. Interactive Card Hover Animation Props
export const hoverCardProps = {
  whileHover: {
    y: -6,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  whileTap: {
    scale: 0.98,
  },
};

// 9. Pulsing Badge Animation Props
export const pulseBadgeProps = {
  animate: {
    scale: [1, 1.04, 1],
    boxShadow: [
      "0 0 0px rgba(91,58,245,0)",
      "0 0 16px rgba(91,58,245,0.4)",
      "0 0 0px rgba(91,58,245,0)",
    ],
  },
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// 10. Default Viewport Scroll Trigger Config
export const defaultViewport = {
  once: true,
  margin: "-80px",
};
