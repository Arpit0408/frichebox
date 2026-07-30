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

export default function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    serviceType: "",
    message: "",
    saveInfo: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        serviceType: "",
        message: "",
        saveInfo: false,
      });
    }, 4000);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <div className="w-full bg-white text-neutral-900 overflow-hidden pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Card 1: Our Address */}
          <motion.div
            {...fadeIn}
            className="group bg-white hover:bg-[#482BE0] rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-2xl    transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4 cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-[#F0EBFF] text-[#5B3AF5] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
              <LuMapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold font-manrope text-[#111827] group-hover:text-white mb-1 transition-colors duration-300">
                Our Address
              </h3>
              <p className="text-xs sm:text-sm font-manrope text-[#6B7280] group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                Noida Sector-138, Industrial Area, Uttar Pradesh, India
              </p>
            </div>
          </motion.div>

          {/* Card 2: Contact Us */}
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            className="group bg-white hover:bg-[#482BE0] rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-2xl    transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4 cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-[#F0EBFF] text-[#5B3AF5] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
              <LuPhone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold font-manrope text-[#111827] group-hover:text-white mb-1 transition-colors duration-300">
                Contact Us
              </h3>
              <p className="text-xs sm:text-sm font-manrope text-[#6B7280] group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                +91 9873175173, +91 7838084543
              </p>
            </div>
          </motion.div>

          {/* Card 3: Email Us */}
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="group bg-white hover:bg-[#482BE0] rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-2xl    transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4 cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-[#F0EBFF] text-[#5B3AF5] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
              <LuMail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold font-manrope text-[#111827] group-hover:text-white mb-1 transition-colors duration-300">
                Email Us
              </h3>
              <p className="text-xs sm:text-sm font-manrope text-[#6B7280] group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                frishbox25@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------------- PART 2: Middle Full-Width Map Banner ---------------- */}
      <div className="w-full relative h-[380px] sm:h-[420px]">
        <iframe
          title="Frischbox Noida Sector 138 Warehouse Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.046188448834!2d77.3912168!3d28.5242784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce86f2b545db5%3A0x6b1db98a005ad9d1!2sSector%20138%2C%20Noida%2C%20Uttar%20Pradesh%20201305!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 shadow-inner"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ---------------- PART 3: Overlapping Send Us Message Form ---------------- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20 -mt-24 sm:-mt-32">
        <motion.div
          {...fadeIn}
          className="bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl border border-neutral-100 relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-manrope tracking-tight mb-2">
              Send Us Message
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-manrope">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#482BE0] focus:bg-white text-sm font-manrope outline-none transition-all placeholder:text-neutral-400 text-neutral-800"
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
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#482BE0] focus:bg-white text-sm font-manrope outline-none transition-all placeholder:text-neutral-400 text-neutral-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#482BE0] focus:bg-white text-sm font-manrope outline-none transition-all placeholder:text-neutral-400 text-neutral-800"
                />
              </div>
              <div>
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceType: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#482BE0] focus:bg-white text-sm font-manrope outline-none transition-all text-neutral-700 cursor-pointer"
                >
                  <option value="">Service Type</option>
                  <option value="3pl">3PL Fulfillment & Warehousing</option>
                  <option value="climate">Climate-Controlled Storage</option>
                  <option value="b2b">B2B Bulk Distribution</option>
                  <option value="kitting">Custom Kitting & Assembly</option>
                </select>
              </div>
            </div>

            <div>
              <textarea
                rows={4}
                required
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3.5 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#482BE0] focus:bg-white text-sm font-manrope outline-none transition-all placeholder:text-neutral-400 text-neutral-800 resize-none"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2.5 pt-1">
              <input
                type="checkbox"
                id="saveInfo"
                checked={formData.saveInfo}
                onChange={(e) =>
                  setFormData({ ...formData, saveInfo: e.target.checked })
                }
                className="w-4 h-4 rounded border-neutral-300 text-[#5B3AF5] focus:ring-[#5B3AF5] cursor-pointer"
              />
              <label
                htmlFor="saveInfo"
                className="text-xs text-neutral-500 font-manrope cursor-pointer select-none"
              >
                Save the information in this browser for next time use
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
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
                    <span>Submit Now</span>
                    <LuArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
