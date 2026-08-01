"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";

interface AboutStoryProps {
  image1?: string;
  image2?: string;
}

export default function AboutStory({
  image1 = "/images/about/about_team.png",
  image2 = "/images/about/about_facility.png",
}: AboutStoryProps) {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 35, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const image1Variants: Variants = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const image2Variants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white text-neutral-900 overflow-hidden relative">
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#5B3AF5]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
            <motion.div
              variants={image1Variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="absolute top-0 left-0 w-[68%] sm:w-[76%] overflow-hidden rounded-3xl shadow-xl group"
            >
              <img
                src={image1}
                alt="Frischbox Team Working in Warehouse Racks"
                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/home/why_choose_us.png";
                }}
              />
            </motion.div>

            <motion.div
              variants={image2Variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="absolute bottom-0 right-0 w-[62%] sm:w-[50%] aspect-[5/5] overflow-hidden rounded-3xl z-20"
            >
              <img
                src={image2}
                alt="Frischbox Warehouse Manager with Clipboard"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/home/about_warehouse.png";
                }}
              />
            </motion.div>
          </div>

          {/* Right Column: Story Text */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col items-start relative z-10"
          >
            <SectionHeader
              align="left"
              badge="About Us"
              badgeVariant="purple"
              title="Our Journey: How Frischbox Was Born"
              titleSize="text-3xl sm:text-4xl lg:text-5xl"
              subtitle="Frischbox was not created because we simply wanted to rent warehouses. It was created because while assisting an international nutraceutical company entering India, we discovered a major gap in the market. Warehouses existed, but very few offered the absolute cleanliness, strict process discipline, advanced technology, and customer confidence that international brands expect. Instead of compromising, we built one."
              maxTitleWidth="max-w-full"
              maxSubtitleWidth="max-w-full"
              animate={false}
              className="mb-0 md:mb-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
