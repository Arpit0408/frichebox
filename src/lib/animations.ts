import { Variants } from "framer-motion";

/**
 * Reusable Framer Motion Variants & Animation Presets for Frischbox Website
 */

// 1. Smooth Fade Up (Headings, Subtitles, Paragraphs)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 2. Fade In Left (Badges, Left Columns)
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 3. Fade In Right (Right Column Visuals, Bento Cards)
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 4. Scale Up & Spring Reveal (Cards, Floating Stats, Badges)
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 5. Stagger Container (Grids, Features List, Tab Lists)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// 6. Stagger Item (Child element inside a stagger container)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 7. Text Blur Reveal (Premium Headings & Badges)
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 15 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 8. Interactive Card Hover Animation Props
export const hoverCardProps = {
  whileHover: {
    y: -6,
    transition: { duration: 0.3, ease: "easeOut" },
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
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// 10. Default Viewport Scroll Trigger Config
export const defaultViewport = {
  once: true,
  margin: "-80px",
};
