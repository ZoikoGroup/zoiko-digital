"use client";

import React, { useState } from "react";
// Import Lucide icons
import { Mail, Phone, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    title: "Email Us",
    detail: "info@zoikodigital.com",
    meta: "Response within 4 hours",
    iconSlot: <Mail className="w-5 h-5 text-white" />,
  },
  {
    title: "Call Us",
    detail: "+1 800 484 5574",
    meta: "24/7 Support Available",
    iconSlot: <Phone className="w-5 h-5 text-white" />,
  },
  {
    title: "Live Chat",
    detail: "Instant Support",
    meta: "Online now",
    iconSlot: <MessageSquare className="w-5 h-5 text-white" />,
  },
];

export default function ContactTransformationSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    topic: "",
    message: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Contact Form:", formData);
  };

  return (
    <section className="w-full bg-zinc-100 py-16 lg:py-10 px-4 sm:px-6 md:px-12 lg:px-[108px] transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ================= LEFT COLUMN: INFRASTRUCTURE INFO ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-zinc-800 text-3xl md:text-4xl font-bold leading-tight mb-4">
            Ready to Transform<br />Your Business?
          </h2>
          <p className="text-neutral-600 text-base md:text-lg font-normal leading-relaxed mb-10 max-w-xl">
            Connect with our global team of experts to discuss your digital transformation journey and discover how we can accelerate your success.
          </p>

          {/* Contact Methods Stack */}
          <div className="flex flex-col gap-6">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {/* Icon Circle Container */}
                <div className="w-14 h-14 bg-sky-900 rounded-xl flex items-center justify-center border border-zinc-800 shrink-0">
                  {method.iconSlot}
                </div>
                {/* Metadata Column */}
                <div className="flex flex-col justify-start">
                  <h4 className="text-zinc-800 text-lg font-semibold leading-tight">
                    {method.title}
                  </h4>
                  <span className="text-zinc-400 text-base font-normal mt-1 leading-normal">
                    {method.detail}
                  </span>
                  <span className="text-zinc-500 text-sm font-normal mt-0.5 leading-normal">
                    {method.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: INTERACTIVE FORM CARD ================= */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[572px] bg-white rounded-[20px] border border-neutral-400 p-6 md:p-10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Contact Form Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 text-sm font-semibold leading-6">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full h-12 bg-neutral-100 rounded-lg border border-stone-300 px-4 text-zinc-800 focus:outline-none focus:border-sky-900 transition-colors"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 text-sm font-semibold leading-6">
                  Work email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full h-12 bg-neutral-100 rounded-lg border border-stone-300 px-4 text-zinc-800 focus:outline-none focus:border-sky-900 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 text-sm font-semibold leading-6">Company</label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full h-12 bg-neutral-100 rounded-lg border border-stone-300 px-4 text-zinc-800 focus:outline-none focus:border-sky-900 transition-colors"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {/* Topic dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 text-sm font-semibold leading-6">Topic</label>
                <select
                  className="w-full h-12 bg-neutral-100 rounded-lg border border-stone-300 px-4 text-neutral-500 focus:outline-none focus:border-sky-900 transition-colors appearance-none"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                >
                  <option value="" disabled>Sales & pricing</option>
                  <option value="sales">Sales & Pricing</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="general">General Questions</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 text-sm font-semibold leading-6">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help?"
                  className="w-full bg-neutral-100 rounded-lg border border-stone-300 p-4 text-zinc-800 focus:outline-none focus:border-sky-900 transition-colors resize-none text-sm md:text-base leading-relaxed"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3 mt-2">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  required
                  className="mt-1 accent-sky-900"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                />
                <label htmlFor="privacy-policy" className="text-zinc-800 text-sm leading-normal cursor-pointer select-none">
                  I agree to be contacted in accordance with the Privacy Policy.
                </label>
              </div>

              {/* Submission CTA Action */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full sm:w-56 h-14 text-white text-base font-semibold rounded-xl bg-sky-900 hover:opacity-95 transition-opacity shadow-md flex items-center justify-center text-center cursor-pointer"
                >
                  Send message
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}