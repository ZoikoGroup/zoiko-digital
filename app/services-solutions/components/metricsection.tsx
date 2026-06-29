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
    quote: "Scaled from startup to<br/>enterprise",
  },
  {
    company: "ACME Corp",
    quote: "Transformed our global<br/>operations",
  },
  {
    company: "TechFlow",
    quote: "Reduced compliance costs<br/>by 65%",
  },
  {
    company: "GlobalBank",
    quote: "Achieved 99.99% uptime<br/>reliability",
  },
];

export default function MetricsSection() {
  return (
    <section className="w-full h-auto min-h-[480px] py-16 relative bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 border-t border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center">
        
        {/* ================= STATS COUNTERS PACK ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 text-center items-start">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-5xl font-semibold font-['Inter'] leading-[76.80px] text-white dark:text-white">
                {stat.value}
              </span>
              <span className="text-sm font-semibold font-['Inter'] uppercase leading-6 tracking-wide text-white/90 dark:text-gray-300 max-w-[160px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ================= TESTIMONIAL CARDS GRID ================= */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {testimonials.map((card, idx) => (
            <div
              key={idx}
              className="w-full max-w-[240px] h-36 bg-white dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center text-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-gray-700 transition-colors duration-300"
            >
              <div className="text-teal-700 dark:text-teal-400 text-xl font-semibold font-['Inter'] leading-8">
                {card.company}
              </div>
              <div 
                className="mt-1 text-slate-500 dark:text-gray-300 text-sm font-normal font-['Inter'] leading-6"
                dangerouslySetInnerHTML={{ __html: `"${card.quote}"` }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}