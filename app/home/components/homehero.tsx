"use client";

import React from "react";

const metrics = [
  { value: "500+", label: "Global Clients" },
  { value: "15+", label: "Countries Served" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function HeroZWS() {
  return (
    <>
      <section className="relative w-full min-h-screen lg:min-h-[650px] text-white dark:text-white flex items-center justify-start py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden dark:bg-gray-900 transition-colors duration-300">
        
        {/* ================= BACKGROUND STYLING & ACCENTS ================= */}
        <img 
          className="w-full h-full object-cover absolute inset-0 z-0 dark:opacity-40 select-none pointer-events-none"
          src="/images/home/Gradient.png"
          alt="Background Gradient"
        />

        {/* ================= CONTENT CONTAINER ================= */}
        <div className="relative z-10 max-w-[1440px] w-full flex flex-col items-start text-left mt-8 lg:mt-0">
          
          {/* Main Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-tight md:leading-[1.15] max-w-4xl">
            AI-Powered | Cloud-Driven | Enterprise-Ready
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-3 text-white/90 dark:text-gray-200">
              Your Digital Future Powered by Zoiko Digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-200 dark:text-gray-300 font-normal leading-relaxed max-w-3xl opacity-90">
            The Digital Engine for Governments, Startups & Global Brands Zoiko 
            Digital delivers enterprise-grade cloud, compliance, and creative solutions 
            trusted worldwide to power measurable growth, resilience, and innovation.
          </p>

          {/* ================= METRICS RENDER BLOCK ================= */}
          <div className="mt-10 md:mt-12 flex flex-wrap items-start justify-start gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-start min-w-[110px]">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none tracking-tight text-white">
                  {metric.value}
                </span>
                <span className="mt-2 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider text-white/70 dark:text-gray-400">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* ================= BUTTON ACTIONS ================= */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-52 h-12 bg-[#207373] dark:bg-teal-600 text-white text-sm font-semibold rounded-[50px] outline outline-1 outline-white/20 shadow-[0px_10px_30px_0px_rgba(144,80,159,0.20)] hover:bg-[#1a5e5e] dark:hover:bg-teal-700 transition-all duration-200 cursor-pointer whitespace-nowrap">
              Explore Solutions &rarr;
            </button>
            
            <button className="w-full sm:w-52 h-12 bg-transparent text-white text-sm font-semibold rounded-[50px] outline outline-1 outline-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer whitespace-nowrap">
              Book a Consultation
            </button>
          </div>

        </div>
      </section>

      {/* Trust Bar below the Hero Section */}
      <section className="w-full bg-[#207373] dark:bg-gray-950 py-4 sm:py-3 flex items-center justify-center overflow-hidden border-t border-b border-white/5 transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-4 text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white/80 dark:text-gray-400 text-xs md:text-sm tracking-wide">
          <span className="font-medium">
            Trusted by Global Leaders in:
          </span>
          <span className="font-semibold text-white dark:text-teal-400">
            Telecom | Finance | Healthcare | Government | Technology
          </span>
        </div>
      </section>
    </>
  );
}