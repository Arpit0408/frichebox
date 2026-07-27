"use client";

import { motion } from "framer-motion";

interface AboutStoryProps {
  image1?: string;
  image2?: string;
}

export default function AboutStory({
  image1 = "/images/about/about_team.png",
  image2 = "/images/about/about_facility.png",
}: AboutStoryProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Images + Watermark (lg:col-span-6) */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[480px]"
          >
            {/* Image 1: Top-Left Card */}
            <div className="absolute top-0 left-0 w-[68%] sm:w-[76%] overflow-hidden ">
              <img
                src={image1}
                alt="Frichebox Team Working in Warehouse Racks"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/home/why_choose_us.png";
                }}
              />
            </div>

            {/* Image 2: Bottom-Right Overlapping Card */}
            <div className="absolute bottom-0 right-0 w-[62%] sm:w-[50%] aspect-[5/5] overflow-hidden  z-20 ">
              <img
                src={image2}
                alt="Frichebox Warehouse Manager with Clipboard"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/home/about_warehouse.png";
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Text Story Content (lg:col-span-6) */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-6 flex flex-col items-start relative z-10"
          >
            {/* Badge */}
            <span className="px-4 py-1.5 text-xs font-semibold text-[#5B3AF5] bg-[#F0EBFF] rounded-full font-manrope uppercase tracking-wider mb-6 inline-block">
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-manrope tracking-tight leading-tight mb-6">
              Our Journey: How Frischbox Was Born
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#4B5563] font-manrope font-normal leading-relaxed">
              Frischbox was not created because we simply wanted to rent
              warehouses. It was created because while assisting an
              international nutraceutical company entering India, we discovered
              a major gap in the market. Warehouses existed, but very few
              offered the absolute cleanliness, strict process discipline,
              advanced technology, and customer confidence that international
              brands expect. Instead of compromising, we built one.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
