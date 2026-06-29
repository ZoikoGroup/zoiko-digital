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
      <section className="relative w-full min-h-[653px] text-white flex items-center justify-start py-16 md:py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
        
        {/* ================= BACKGROUND STYLING & ACCENTS ================= */}
        <img 
          className="w-full h-full object-cover absolute inset-0 z-0"
          src="/images/home/Gradient.png"
          alt="Background Gradient"
        />

        {/* ================= CONTENT CONTAINER ================= */}
        {/* Changed items-center to items-start for left alignment */}
        <div className="relative z-10 max-w-[1440px] w-full flex flex-col items-start text-left">
          
          {/* Main Header */}
          {/* Text alignment is left (default) and removed centered max-width constraints */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-tight md:leading-[1.15] max-w-4xl">
            AI-Powered | Cloud-Driven | Enterprise-Ready
            <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold mt-3 text-white/90">
              Your Digital Future Powered by Zoiko Digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base md:text-lg text-neutral-200 font-normal leading-relaxed max-w-3xl opacity-90">
            The Digital Engine for Governments, Startups & Global Brands Zoiko 
            Digital delivers enterprise-grade cloud, compliance, and creative solutions 
            trusted worldwide to power measurable growth, resilience, and innovation.
          </p>

          {/* ================= METRICS RENDER BLOCK ================= */}
          {/* Shifted justify-center to justify-start and items-center to items-start */}
          <div className="mt-12 flex flex-wrap items-start justify-start gap-12 md:gap-16 lg:gap-20">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-start">
                <span className="text-4xl md:text-5xl font-bold leading-none tracking-tight text-white">
                  {metric.value}
                </span>
                <span className="mt-2 text-xs md:text-sm font-medium uppercase tracking-wider text-white/70">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* ================= BUTTON ACTIONS ================= */}
          {/* Shifted to the left side explicitly */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-52 h-12 bg-[#207373] text-white text-sm font-semibold rounded-[50px] outline outline-1 outline-white/20 shadow-[0px_10px_30px_0px_rgba(144,80,159,0.20)] hover:bg-sky-850 transition-all duration-200 cursor-pointer">
              Explore Solutions &rarr;
            </button>
            
            <button className="w-full sm:w-52 h-12 bg-transparent text-white text-sm font-semibold rounded-[50px] outline outline-1 outline-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer">
              Book a Consultation
            </button>
          </div>

        </div>
      </section>

      {/* Trust Bar below the Hero Section */}
      <section className="w-full bg-[#207373] py-3 flex items-center justify-center overflow-hidden border-t border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-white/80 text-xs md:text-sm tracking-wide">
          <span className="font-medium">
            Trusted by Global Leaders in:
          </span>
          <span className="font-semibold text-white">
            Telecom | Finance | Healthcare | Government | Technology
          </span>
        </div>
      </section>
    </>
  );
}