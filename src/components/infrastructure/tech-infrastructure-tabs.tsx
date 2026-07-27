"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechTabItem {
  id: number;
  label: string;
  cardTitle: string;
  description: string;
  imageSrc: string;
  fallbackImage: string;
}

const techTabsData: TechTabItem[] = [
  {
    id: 1,
    label: "Smart WMS & AI Automation",
    cardTitle: "Smart WMS & AI Automation:",
    description:
      "We utilise a comprehensive smart warehouse automation stack powered by advanced WMS platforms to maximise speed and accuracy across all operations. This includes AI-driven order allocation to eliminate errors and auto e-Waybill generation for streamlined, compliant dispatch.",
    imageSrc: "/images/infrastructure/tab_wms.png",
    fallbackImage: "/images/about/frichebox_tracking.png",
  },
  {
    id: 2,
    label: "Real-Time Tracking & Inventory Control",
    cardTitle: "Real-Time Tracking & Inventory Control:",
    description:
      "Maintain total control through an advanced real-time inventory dashboard featuring accurate SKU tracking. We ensure absolute precision using barcode and QR scanning, batch and lot tracking, and strict FEFO/FIFO methodology supported by automated cycle counting.",
    imageSrc: "/images/infrastructure/tab_tracking.png",
    fallbackImage: "/images/home/workflow.png",
  },
  {
    id: 3,
    label: "Advanced Analytics & Reporting",
    cardTitle: "Advanced Analytics & Reporting:",
    description:
      "Gain deep operational insights and complete transparency with access to 15 to 20 custom report types. Our analytics suite provides essential, real-time data, including detailed ageing reports and full FIFO compliance visibility.",
    imageSrc: "/images/infrastructure/tab_analytics.png",
    fallbackImage: "/images/home/hero_1.png",
  },
  {
    id: 4,
    label: "Scalable, Precision-Built Infrastructure",
    cardTitle: "Scalable, Precision-Built Infrastructure:",
    description:
      "Located in Sec-138, Noida, our 10,000 sq ft headquarters is designed for growth and effortlessly expandable to 65,000 sq ft. The facility operates 24/7 with uninterrupted backup power, featuring Temp+RH controlled storage with real-time monitoring and modern, heavy-duty stainless steel racking.",
    imageSrc: "/images/infrastructure/tab_facility.png",
    fallbackImage: "/images/home/about_warehouse.png",
  },
  {
    id: 5,
    label: "Seamless Ecosystem Integrations",
    cardTitle: "Seamless Ecosystem Integrations:",
    description:
      "Our network connects your entire supply chain through seamless API-based integration with 50+ courier platforms alongside robust multi-carrier tracking. We also offer 20+ direct marketplace integrations, natively linking with Shopify, Unicommerce, Amazon, Flipkart, and Meesho.",
    imageSrc: "/images/infrastructure/tab_integrations.png",
    fallbackImage: "/images/solutions/smart_wms_delivery.png",
  },
];

export default function TechInfrastructureTabs() {
  const [activeTabId, setActiveTabId] = useState<number>(1);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const currentTab = techTabsData.find((tab) => tab.id === activeTabId) || techTabsData[0];

  return (
    <section className="w-full bg-[#050312] text-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden relative">
     

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ---------------- Left Column: Header & Interactive Pill Tabs ---------------- */}
          <motion.div {...fadeIn} className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-manrope tracking-tight leading-tight mb-4">
              Technology & <br />
              Infrastructure
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-manrope leading-relaxed mb-8 max-w-md">
              Our modern facility leverages an advanced automation stack and
              robust physical infrastructure to eliminate errors, minimise delays,
              and scale effortlessly as your business expands.
            </p>

            {/* 5 Interactive Pill Buttons */}
            <div className="flex flex-col gap-3.5 w-full max-w-md">
              {techTabsData.map((tab) => {
                const isActive = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`w-full text-left py-3.5 px-6 rounded-full font-manrope font-semibold text-xs sm:text-sm transition-all duration-300 transform active:scale-98 cursor-pointer ${
                      isActive
                        ? "bg-[#5B3AF5] text-white shadow-lg shadow-[#5B3AF5]/40"
                        : "bg-white text-[#111827] hover:bg-[#5B3AF5] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* ---------------- Right Column: Animated Preview Card ---------------- */}
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-[32px] overflow-hidden shadow-2xl text-neutral-900 border border-neutral-100 flex flex-col"
              >
                {/* Top Image */}
                <div className="h-[250px] sm:h-[300px] w-full overflow-hidden relative bg-neutral-100">
                  <img
                    src={currentTab.imageSrc}
                    alt={currentTab.cardTitle}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = currentTab.fallbackImage;
                    }}
                  />
                </div>

                {/* Card Content Area */}
                <div className="p-8 sm:p-10 flex flex-col bg-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-manrope text-[#111827] mb-3 leading-snug">
                    {currentTab.cardTitle}
                  </h3>
                  <p className="text-xs sm:text-sm font-manrope text-[#4B5563] leading-relaxed">
                    {currentTab.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
