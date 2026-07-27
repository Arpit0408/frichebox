"use client";

import { motion } from "framer-motion";

export interface ServiceCardItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  fallbackImage: string;
  alt: string;
}

const servicesData: ServiceCardItem[] = [
  {
    id: 1,
    title: "Scalable Warehousing & Storage:",
    description:
      "Access a modern 10,000 sq ft facility (expandable to 65,000 sq ft) equipped with heavy-duty racking, dedicated zone-wise segregation, and continuous temperature and humidity (Temp+RH) monitoring to prevent cross-contamination.",
    imageSrc: "/images/solutions/scalable_warehousing.png",
    fallbackImage: "/images/home/hero_1.png",
    alt: "Scalable Warehousing & Temperature-Controlled Storage Facility",
  },
  {
    id: 2,
    title: "B2B & B2C Fulfillment:",
    description:
      "We seamlessly handle both B2B and B2C fulfillment. Our capabilities cover bulk shipments to distributors, direct-to-consumer orders, and D2D delivery.",
    imageSrc: "/images/solutions/b2b_b2c_fulfillment.png",
    fallbackImage: "/images/home/workflow.png",
    alt: "Automated B2B and B2C Fulfillment Conveyor Line",
  },
  {
    id: 3,
    title: "Smart WMS & Last-Mile Delivery:",
    description:
      "We provide a smart WMS platform that offers real-time inventory visibility. Our logistics network covers over 78 cities and 27,000+ pin codes across every zone of India, powered by integrations with over 50 courier platforms and 10+ courier partners.",
    imageSrc: "/images/solutions/smart_wms_delivery.png",
    fallbackImage: "/images/about/frichebox_tracking.png",
    alt: "Frischbox Smart WMS Dashboard & Tracking Monitor",
  },
  {
    id: 4,
    title: "Reverse Logistics (RTO) Management:",
    description:
      "We provide seamless reverse logistics and return management. This includes full RTO processing, intake inspection, quality control (QC) checks, and executing restocking or disposal as per your exact brand SOP.",
    imageSrc: "/images/solutions/reverse_logistics.png",
    fallbackImage: "/images/home/about_warehouse.png",
    alt: "Frichebox Quality Control & Reverse Logistics Inspection",
  },
  {
    id: 5,
    title: "Custom Kitting & Value-Added Services:",
    description:
      "We offer custom kitting and bundling, allowing us to build subscription boxes, gift kits, and product bundles to your exact specification. We also provide eco-friendly sustainable packaging solutions and in-house barcode, QR, and MRP label printing.",
    imageSrc: "/images/solutions/custom_kitting.png",
    fallbackImage: "/images/home/why_choose_us.png",
    alt: "Custom Kitting and Packaging Assembly",
  },
];

export default function CoreServicesGrid() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true, margin: "-100px" },
  } as const;

  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14">
          <motion.div
            {...fadeIn}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="px-4 py-1.5 text-xs font-semibold text-[#5B3AF5] bg-[#F0EBFF] rounded-full font-manrope uppercase tracking-wider mb-4 inline-block">
              Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight leading-tight">
              End-to-End Logistics <br className="hidden sm:inline" />
              Services Engineered for Scale
            </h2>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="lg:col-span-5 text-sm sm:text-base text-[#4B5563] font-manrope font-normal leading-relaxed"
          >
            Consider us a seamless extension of your supply chain. Our team
            ensures your inventory is stored compliantly, processed flawlessly,
            and dispatched on time—no matter where you sell.
          </motion.div>
        </div>

        {/* 5 Services Cards Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* Top Row: First 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {servicesData.slice(0, 3).map((service) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="group bg-white rounded-2xl sm:rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-100 flex flex-col transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Top Image */}
                <div className="h-[210px] sm:h-[230px] w-full overflow-hidden relative">
                  <img
                    src={service.imageSrc}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = service.fallbackImage;
                    }}
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-manrope text-[#5B3AF5] mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-manrope text-[#6B7280] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: Remaining 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-5xl">
            {servicesData.slice(3, 5).map((service) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="group bg-white rounded-2xl sm:rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-100 flex flex-col transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Top Image */}
                <div className="h-[210px] sm:h-[230px] w-full overflow-hidden relative">
                  <img
                    src={service.imageSrc}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = service.fallbackImage;
                    }}
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-manrope text-[#5B3AF5] mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-manrope text-[#6B7280] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
