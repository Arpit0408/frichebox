"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuArrowRight,
  LuCircleCheck,
} from "react-icons/lu";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

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
      className="relative w-full py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-cover bg-top bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/work_bg.png')",
      }}
    >
      {/* Linear gradient overlay on background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(72, 43, 224, 0.18) 0%, rgba(39, 23, 122, 0.18) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Glassy Info Card (lg:col-span-6) */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-6 flex flex-col justify-between bg-white/45 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="relative z-10">
              {/* Top Badge */}
              <span className="px-4 py-1.5 text-xs font-bold text-white bg-[#5B3AF5] rounded-full font-manrope capitalize tracking-wider inline-block mb-6 shadow-md shadow-[#5B3AF5]/25">
                Work With Us
              </span>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight font-manrope tracking-tight mb-4">
                We're Ready To Scale Your Supply Chain
              </h2>

              {/* Description Paragraph */}
              <p className="text-base text-[#4B5563] font-manrope font-normal leading-relaxed mb-8">
                Partner with Noida's trusted 3PL solution for health, wellness,
                and FMCG brands. Let us handle your fulfillment operations
                end-to-end so you can focus entirely on business growth.
              </p>

              {/* Contact Info Items */}
              <div className="flex flex-col gap-6 mt-8">
                {/* Item 1: Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5B3AF5] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#5B3AF5]/25">
                    <LuMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] font-manrope">
                      Our Location
                    </h4>
                    <p className="text-sm text-[#4B5563] font-manrope mt-0.5 leading-snug">
                      Noida Sector-138, Industrial Area, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Item 2: Office Number */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5B3AF5] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#5B3AF5]/25">
                    <LuPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] font-manrope">
                      Office Number
                    </h4>
                    <p className="text-sm text-[#4B5563] font-manrope mt-0.5 leading-snug">
                      +91 9873175173{" "}
                      <span className="text-neutral-400 font-normal">|</span>{" "}
                      +91 7838084543
                    </p>
                  </div>
                </div>

                {/* Item 3: Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5B3AF5] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#5B3AF5]/25">
                    <LuMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] font-manrope">
                      Our Mail
                    </h4>
                    <p className="text-sm text-[#4B5563] font-manrope mt-0.5 leading-snug">
                      frishbox25@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassy Form Card (lg:col-span-6) */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-6 bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-manrope tracking-tight mb-8">
                Schedule a Fulfillment Consultation
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row 1: First Name & Last Name */}
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
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-2 focus:ring-[#5B3AF5]/20 transition-all shadow-sm"
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
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-2 focus:ring-[#5B3AF5]/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Email Address */}
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
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-2 focus:ring-[#5B3AF5]/20 transition-all shadow-sm"
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
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-2 focus:ring-[#5B3AF5]/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div>
                  <textarea
                    rows={8}
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-900 placeholder-neutral-400 font-manrope text-sm focus:outline-none focus:border-[#5B3AF5] focus:ring-2 focus:ring-[#5B3AF5]/20 transition-all shadow-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#5B3AF5] hover:bg-[#482BE0] text-white font-manrope font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-[#5B3AF5]/30 hover:shadow-xl hover:shadow-[#5B3AF5]/40 transition-all transform active:scale-95 cursor-pointer"
                  >
                    {isSubmitted ? (
                      <>
                        <span>Message Sent</span>
                        <LuCircleCheck className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Send Now</span>
                        <LuArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
