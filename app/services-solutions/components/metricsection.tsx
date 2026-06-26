"use client";

import React from "react";

const stats = [
  { value: "500+", label: "Clients" },
  { value: "15+", label: "Countries" },
  { value: "99.9%", label: "SLA Uptime" },
  { value: "30%", label: "Operational Savings" },
  { value: "40%", label: "Faster Compliance" },
];

const testimonials = [
  {
    company: "InnovateCo",
    quote: '"Scaled from startup to enterprise"',
  },
  {
    company: "ACME Corp",
    quote: '"Transformed our global operations"',
  },
  {
    company: "TechFlow",
    quote: '"Reduced compliance costs by 65%"',
  },
  {
    company: "GlobalBank",
    quote: '"Achieved 99.99% uptime reliability"',
  },
];

export default function MetricsSection() {
  return (
    <section 
      className="w-full py-16 md:py-15 text-white border-t border-b border-slate-200/20"
      style={{
        background:"linear-gradient(41deg, #131E40 0%, #43D9BD 50%, #207373 100%);"
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* ================= STATS COUNTERS PACK ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 text-center items-start">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-semibold leading-tight text-white tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-white/70 max-w-[160px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ================= TESTIMONIAL CARDS GRID ================= */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((card, idx) => (
            <div
              key={idx}
              className="w-full h-39 bg-white rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-slate-200"
            >
              <div className="text-[#207373] text-lg md:text-xl font-semibold leading-8">
                {card.company}
              </div>
              <div 
                className="mt-2 text-slate-500 text-xs md:text-sm font-normal leading-6 max-w-[180px]"
                dangerouslySetInnerHTML={{ __html: card.quote }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}