"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";

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
    imageSrc: "/images/solutions/scalable_warehousing.svg",
    fallbackImage: "/images/home/hero_1.png",
    alt: "Scalable Warehousing & Temperature-Controlled Storage Facility",
  },
  {
    id: 2,
    title: "B2B & B2C Fulfillment:",
    description:
      "We seamlessly handle both B2B and B2C fulfillment. Our capabilities cover bulk shipments to distributors, direct-to-consumer orders, and D2D delivery.",
    imageSrc: "/images/solutions/b2b_b2c_fulfillment.svg",
    fallbackImage: "/images/home/workflow.png",
    alt: "Automated B2B and B2C Fulfillment Conveyor Line",
  },
  {
    id: 3,
    title: "Smart WMS & Last-Mile Delivery:",
    description:
      "We provide a smart WMS platform that offers real-time inventory visibility. Our logistics network covers over 78 cities and 27,000+ pin codes across every zone of India, powered by integrations with over 50 courier platforms and 10+ courier partners.",
    imageSrc: "/images/solutions/smart_wms_delivery.svg",
    fallbackImage: "/images/about/frichebox_tracking.png",
    alt: "Frischbox Smart WMS Dashboard & Tracking Monitor",
  },
  {
    id: 4,
    title: "Reverse Logistics (RTO) Management:",
    description:
      "We provide seamless reverse logistics and return management. This includes full RTO processing, intake inspection, quality control (QC) checks, and executing restocking or disposal as per your exact brand SOP.",
    imageSrc: "/images/solutions/reverse_logistics.svg",
    fallbackImage: "/images/home/about_warehouse.png",
    alt: "Frischbox Quality Control & Reverse Logistics Inspection",
  },
  {
    id: 5,
    title: "Custom Kitting & Value-Added Services:",
    description:
      "We offer custom kitting and bundling, allowing us to build subscription boxes, gift kits, and product bundles to your exact specification. We also provide eco-friendly sustainable packaging solutions and in-house barcode, QR, and MRP label printing.",
    imageSrc: "/images/solutions/custom_kitting.svg",
    fallbackImage: "/images/home/why_choose_us.png",
    alt: "Custom Kitting and Packaging Assembly",
  },
];

export default function CoreServicesGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          align="split"
          badge="Core Services"
          badgeVariant="purple"
          title={
            <>
              End-to-End Logistics <br className="hidden sm:inline" />
              Services Engineered for Scale
            </>
          }
          titleSize="text-3xl sm:text-4xl lg:text-5xl"
          subtitle="Consider us a seamless extension of your supply chain. Our team ensures your inventory is stored compliantly, processed flawlessly, and dispatched on time—no matter where you sell."
          titleClassName="max-w-xl"
        />

        {/* 5 Services Cards Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 mt-12"
        >
          {/* Top Row: Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-100/90 flex flex-col transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                {/* Top Image */}
                <div className="h-[210px] sm:h-[230px] w-full overflow-hidden relative">
                  <img
                    src={service.imageSrc}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        service.fallbackImage;
                    }}
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-manrope text-[#5B3AF5] mb-3 leading-snug group-hover:text-[#482BE0] transition-colors duration-200">
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
