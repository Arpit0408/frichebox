"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import CircularBadge from "@/components/ui/circular-badge";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[85vh] lg:h-[92vh] min-h-[480px] mb-14 sm:mb-20">
      {/* Clipped Section */}
      <section
        className="relative w-full h-full overflow-hidden flex items-center justify-start bg-neutral-950"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 84%, 50% 100%, 0 84%)",
        }}
      >
        {/* Background Auto-play Swiper Slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1200}
            className="w-full h-full"
          >
            <SwiperSlide className="w-full h-full">
              <img
                src="/images/home/hero_1.png"
                alt="Frichebox Warehouse Fulfillment"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src="/images/home/hero_1.png"
                alt="Frichebox Delivery Logistics"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Blue Radial/Linear Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(12, 0, 74, 0.88) 0%, rgba(28, 0, 176, 0.25) 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start px-6 pb-10 sm:pb-16">
          <div className="max-w-xl text-left">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.16] font-manrope tracking-tight"
            >
              The Trusted Fulfillment Engine Behind Fast-Growing Brands
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl font-medium text-neutral-200 font-manrope leading-relaxed max-w-xl"
            >
              Precision 3PL warehousing, seamless marketplace integration, and
              hassle-free pan-India delivery built for your growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Rotating Circle Badge (Get Quote) Centered on Polygon Bottom V-Vertex */}
      <div
        onClick={scrollToNext}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%] sm:translate-y-[36%] z-30 cursor-pointer"
      >
        <CircularBadge logoSrc="/logo/frichebox_icon.svg" />
      </div>
    </div>
  );
}
