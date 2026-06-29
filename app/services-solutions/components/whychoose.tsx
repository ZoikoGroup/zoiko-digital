"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance standards",
    iconSlot: (
      <Image
        src="/images/services-solutions/si_lock-fill.png"
        alt="Security"
        width={32}
        height={32}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    title: "Global Compliance Coverage",
    description: "GDPR, HIPAA, SOC 2, and regional regulations",
    iconSlot: (
      <Image
        src="/images/services-solutions/fa_globe.png"
        alt="Compliance"
        width={32}
        height={32}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    title: "24/7 SLA-backed Support",
    description: "Round-the-clock monitoring and response",
    iconSlot: (
      <Image
        src="/images/services-solutions/streamline-plump_customer-support-7-solid.png"
        alt="Support"
        width={32}
        height={32}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    title: "Scalable from SMB to Enterprise",
    description: "Solutions that grow with your business",
    iconSlot: (
      <Image
        src="/images/services-solutions/mdi_graph-areaspline.png"
        alt="Scalability"
        width={32}
        height={32}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-sky-900 text-white py-16 md:py-12 px-7 overflow-hidden transition-colors duration-300 dark:bg-gray-900 dark:text-white border-t border-b border-transparent dark:border-gray-800">
      <div className="max-w-[1440px] mx-auto md:px-12 lg:px-[90px]">
        
        {/* ================= SECTION TITLE ================= */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight leading-tight md:leading-[64px] mb-12 md:mb-12 dark:text-white">
          Why Choose Zoiko Web Services?
        </h2>

        {/* ================= VALUE PROPS MATRIX ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-19 items-start text-center">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center max-w-[190px] mx-auto group"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden mb-5 opacity-90 group-hover:scale-105 transition-transform duration-200 dark:opacity-100">
                {feature.iconSlot}
              </div>

              {/* Title Frame */}
              <h3 className="text-lg md:text-xl font-semibold leading-7 md:leading-8 mb-2 dark:text-white">
                {feature.title}
              </h3>

              {/* Description Frame */}
              <p className="text-sm md:text-base font-normal leading-6 text-white/80 dark:text-gray-300 max-w-[220px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}