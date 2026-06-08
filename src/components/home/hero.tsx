"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import CircularBadge from "@/components/ui/circular-badge";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  return (
    <div className="relative w-full h-[95vh]">
      {/* Clipped Section */}
      <section
        className="relative w-full h-[95%] overflow-hidden flex items-center justify-start bg-neutral-950"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
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
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1200}
            className="w-full h-full"
          >
            <SwiperSlide className="w-full h-full">
              <img
                src="/images/home/hero_1.png"
                alt="Frichebox Warehouse Fulfillment"
                className="w-full h-full object-cover object-top"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src="/images/home/hero_2.png"
                alt="Frichebox Delivery Logistics"
                className="w-full h-full object-cover object-top"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Blue Radial/Linear Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(12, 0, 74, 0.82) 0%, rgba(28, 0, 176, 0.12) 100%)",
          }}
        />

        {/* Content Container (Left Aligned) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start pt-16">
          <div className="max-w-2xl text-left">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-manrope tracking-wide"
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
              className="mt-6 text-base sm:text-lg md:text-xl font-medium text-neutral-200 font-manrope leading-relaxed"
            >
              Precision 3PL warehousing, seamless marketplace integration, and
              hassle-free pan-India delivery built for your growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Rotating Circle Badge (Get Quote) Centered on Angle Intersection (Placed outside clip-path so it's not cut off) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 translate-y-[20%] sm:translate-y-[25%] md:translate-y-[30%]">
        <CircularBadge logoSrc="/images/logo/f_logo.png" />
      </div>
    </div>
  );
}
