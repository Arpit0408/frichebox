"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { LuPlus, LuMinus } from "react-icons/lu";

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  badge?: string;
  title?: string;
  items?: FaqItem[];
  className?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    id: 1,
    question: "Do you offer specialized storage for sensitive items?",
    answer:
      "Yes, we provide temperature-controlled and climate-monitored storage solutions tailored specifically for health, wellness, cosmetic, and nutraceutical products.",
  },
  {
    id: 2,
    question: "What certifications does your facility hold?",
    answer:
      "Our 10,000 sq ft Noida facility operates under strict FSSAI licenses, GDP (Good Distribution Practices) compliance, ISO quality management standards, and complete fire & safety protocols.",
  },
  {
    id: 3,
    question:
      "Which e-commerce platforms and marketplaces do you integrate with?",
    answer:
      "We offer seamless 1-click automated integrations with Shopify, WooCommerce, Amazon, Flipkart, Myntra, Nykaa, and custom enterprise ERP systems.",
  },
  {
    id: 4,
    question: "How do I keep track of my inventory?",
    answer:
      "You get 24/7 access to our cloud-based WMS dashboard featuring real-time SKU level tracking, live order status updates, low-stock alerts, and comprehensive analytics.",
  },
  {
    id: 5,
    question: "How fast do you dispatch orders?",
    answer:
      "We guarantee same-day dispatch for all orders received before our daily cut-off time, maintaining a 99.9% pick-and-pack accuracy rate with automated SOP checks.",
  },
  {
    id: 6,
    question: "Can you handle B2B bulk shipments as well as D2C orders?",
    answer:
      "Absolutely. We specialize in both omnichannel D2C order fulfillment and bulk B2B distribution to retail chains, distributor hubs, and marketplace warehouses.",
  },
  {
    id: 7,
    question: "Do you offer custom kitting or subscription box assembly?",
    answer:
      "Yes! We provide value-added services including custom branded packaging, promotional kitting, subscription box assembly, barcode labeling, and batch/expiry management.",
  },
];

export default function FaqSection({
  badge = "About Us",
  title = "Frequently Asked Questions",
  items = defaultFaqs,
  className = "",
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const faqContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const faqItemVariants: Variants = {
    hidden: { opacity: 0, y: 25, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className={`py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative ${className}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-start mb-12 relative z-10"
        >
          {badge && (
            <span className="px-4 py-1.5 text-xs font-semibold text-[#5B3AF5] bg-[#F0EBFF] rounded-full font-manrope capitalize tracking-wider mb-4 inline-block">
              {badge}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight leading-tight">
            {title}
          </h2>
        </motion.div>

        {/* FAQ Accordion List with Sequential Stagger */}
        <motion.div
          variants={faqContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="divide-y divide-neutral-200 border-t border-b border-neutral-200 relative z-10"
        >
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                variants={faqItemVariants}
                className="py-5 sm:py-6 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg lg:text-xl font-bold font-manrope transition-colors leading-snug ${
                      isOpen
                        ? "text-[#5B3AF5]"
                        : "text-[#111827] group-hover:text-[#5B3AF5]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen
                        ? "bg-[#5B3AF5] text-white rotate-180 shadow-md shadow-[#5B3AF5]/30"
                        : "bg-neutral-100 text-neutral-800 group-hover:bg-[#F0EBFF] group-hover:text-[#5B3AF5]"
                    }`}
                  >
                    {isOpen ? (
                      <LuMinus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <LuPlus className="w-4 h-4 stroke-[3]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3.5 pb-1 text-sm sm:text-base text-[#4B5563] font-manrope leading-relaxed max-w-3xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
