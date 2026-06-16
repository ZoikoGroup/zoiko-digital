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
    <section className="relative w-full min-h-[570px] bg-[#0F081D] text-white flex items-center justify-center py-10 md:py-10 px-4 overflow-hidden">
      
      {/* ================= BACKGROUND STYLING & ACCENTS ================= */}
<div className="absolute inset-0 bg-[#0F081D] pointer-events-none" />
      {/* Decorative Geometric Rings */}
      <div className="absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block">
        <div className="w-[256px] h-[256px] rounded-full border border-white/10" />
        <div className="w-[384px] h-[384px] rounded-full border border-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[599px] h-[599px] rounded-full border border-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 max-w-[1109px] mx-auto w-full flex flex-col items-center text-center">
        
        {/* Main Header */}
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold tracking-tight text-white leading-tight md:leading-[62px] max-w-4xl">
          AI-Powered | Cloud-Driven | Enterprise-Ready
          <span className="block ">Your Digital Future Powered by ZWS</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-base md:text-xl text-neutral-300 font-normal leading-relaxed opacity-90 max-w-6xl px-2">
          The Digital Engine for Governments, Startups & Global Brands. Zoiko Web Services delivers enterprise-grade cloud, compliance, and creative solutions trusted worldwide to power measurable growth, resilience, and innovation.
        </p>

        {/* ================= METRICS RENDER BLOCK ================= */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center min-w-[140px]">
              <span className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-white">
                {metric.value}
              </span>
              <span className="mt-2 text-xs md:text-sm font-normal uppercase tracking-wide text-white/80">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* ================= BUTTON ACTIONS ================= */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
          <button className="w-full sm:w-56 h-14 bg-sky-900 text-white text-base font-semibold rounded-[50px] outline outline-1 outline-white shadow-[0px_10px_30px_0px_rgba(144,80,159,0.30)] hover:bg-sky-850 transition-all duration-200 cursor-pointer">
            Explore Solutions
          </button>
          
          <button className="w-full sm:w-52 h-14 bg-transparent text-white text-base font-semibold rounded-[50px] outline outline-2 outline-offset-[-2px] outline-white hover:bg-white/5 transition-all duration-200 cursor-pointer">
            Book a Consultation
          </button>
        </div>

      </div>
    </section>
    <section className="w-full bg-fuchsia-900 py-2.5 md:py-0 md:h-11 flex items-center justify-center overflow-hidden border-t border-b border-fuchsia-800/30">
      <div className="max-w-[1440px] mx-auto px-4 text-center flex flex-col md:flex-row items-center justify-center gap-1 md:gap-1.5 text-white text-sm md:text-base leading-relaxed md:leading-8">
        
        {/* Core Label */}
        <span className="font-medium opacity-90">
          Trusted by Global Leaders in:
        </span>
        
        {/* Vertical Pipeline Framework Categories */}
        <span className="font-bold tracking-wide">
          Telecom | Finance | Healthcare | Government | Technology
        </span>

      </div>
    </section>
    </>
  );
}