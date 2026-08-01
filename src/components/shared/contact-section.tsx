"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuArrowRight,
  LuCircleCheck,
} from "react-icons/lu";
import SectionHeader from "@/components/ui/section-header";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "20%"]);

  const orbY = useTransform(scrollYProgress, [0, 1], ["-80px", "80px"]);

  const contentY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden bg-neutral-950"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[18%] h-[138%] w-full pointer-events-none z-0"
      >
        <img
          src="/work_bg.png"
          alt="Contact Section Background"
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(72, 43, 224, 0.22) 0%, rgba(39, 23, 122, 0.28) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: orbY }}
        className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#5B3AF5]/25 blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        style={{ y: orbY }}
        className="absolute bottom-[5%] right-[-5%] w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[140px] pointer-events-none z-0"
      />

      <motion.div
        style={{ y: contentY }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Glassy Info Card */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white/50 backdrop-blur-xl border border-white/70 shadow-2xl rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative z-10"
            >
              <SectionHeader
                align="left"
                badge="Work With Us"
                badgeVariant="solid"
                title="We're Ready To Scale Your Supply Chain"
                titleSize="text-3xl sm:text-4xl"
                subtitle="Partner with Noida's trusted 3PL solution for health, wellness, and FMCG brands. Let us handle your fulfillment operations end-to-end so you can focus entirely on business growth."
                maxTitleWidth="max-w-full"
                maxSubtitleWidth="max-w-full"
                animate={false}
                className="mb-8 md:mb-8"
              />

              <div className="flex flex-col gap-6 mt-6">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#5B3AF5] text-white group-hover:bg-[#482BE0] group-hover:scale-110 flex items-center justify-center flex-shrink-0 shadow-md shadow-[#5B3AF5]/25 transition-all duration-300">
                    <LuMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#5B3AF5] font-manrope transition-colors duration-200">
                      Our Location
                    </h4>
                    <p className="text-sm text-[#4B5563] font-manrope mt-0.5 leading-snug">
                      Noida Sector-138, Industrial Area, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#5B3AF5] text-white group-hover:bg-[#482BE0] group-hover:scale-110 flex items-center justify-center flex-shrink-0 shadow-md shadow-[#5B3AF5]/25 transition-all duration-300">
                    <LuPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#5B3AF5] font-manrope transition-colors duration-200">
                      Office Number
                    </h4>
                    <p className="text-sm text-[#4B5563] font-manrope mt-0.5 leading-snug">
                      +91 9873175173{" "}
                      <span className="text-neutral-400 font-normal">|</span>{" "}
                      +91 7838084543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#5B3AF5] text-white group-hover:bg-[#482BE0] group-hover:scale-110 flex items-center justify-center flex-shrink-0 shadow-md shadow-[#5B3AF5]/25 transition-all duration-300">
                    <LuMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#5B3AF5] font-manrope transition-colors duration-200">
                      Our Mail
                    </h4>
                    <p className="text-sm text-[#4B5563] font-manrope mt-0.5 leading-snug">
                      frishbox25@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative z-10"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-manrope tracking-tight mb-8">
                Schedule a Fulfillment Consultation
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-4 focus:ring-[#5B3AF5]/15 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-4 focus:ring-[#5B3AF5]/15 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-4 focus:ring-[#5B3AF5]/15 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-4 focus:ring-[#5B3AF5]/15 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={6}
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-4 focus:ring-[#5B3AF5]/15 transition-all shadow-sm resize-none"
                  />
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-full bg-[#5B3AF5] hover:bg-[#482BE0] text-white font-manrope font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-[#5B3AF5]/30 hover:shadow-xl hover:shadow-[#5B3AF5]/40 hover:scale-[1.02] transition-all transform active:scale-95 cursor-pointer"
                  >
                    {isSubmitted ? (
                      <>
                        <span>Message Sent</span>
                        <LuCircleCheck className="w-5 h-5 text-emerald-300" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <LuArrowRight className="w-4.5 h-4.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
