"use client";

import React from "react";

const hubs = [
  {
    title: "Africa Hub",
    description: "Leading digital transformation across emerging African markets with deep local partnerships.",
    stats: [
      { value: "120+ Projects", label: "Regulatory Partnerships" },
      { value: "8 Countries" }
    ]
  },
  {
    title: "India Hub",
    description: "Advanced technology center delivering cutting-edge solutions with world-class engineering talent.",
    stats: [
      { value: "200+ Engineers", label: "Advanced Dev Center" },
      { value: "24/7 Support" }
    ]
  },
  {
    title: "Americas Hub",
    description: "Strategic presence serving North and South American markets with regulatory compliance expertise.",
    stats: [
      { value: "150+ Clients", label: "Regulatory Expertise" },
      { value: "5 Time Zones" }
    ]
  },
  {
    title: "Europe Hub",
    description: "GDPR-compliant solutions and deep European market understanding across multiple languages.",
    stats: [
      { value: "GDPR Certified", label: "Compliance Depth" },
      { value: "12 Languages" }
    ]
  }
];

export default function GlobalPresence() {
  return (
    <section className="w-full bg-rgba(239, 249, 255, 1)  dark:bg-gray-900 text-slate-800 dark:text-white py-16 lg:py-15 px-4 sm:px-6 md:px-8 lg:px-[70px] transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ================= HEADER SEGMENT ================= */}
        <div className="text-center flex flex-col items-center mb-12 lg:mb-16">
          <h2 className="text-zinc-800 dark:text-white text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
            Global Presence | Enterprise Scale
          </h2>
          <p className="mt-4 text-neutral-400 dark:text-slate-400 text-base md:text-lg font-normal leading-relaxed max-w-3xl">
            Our strategically positioned hubs ensure 24/7 support and deep understanding of regional markets, regulations, and business practices.
          </p>
        </div>

        {/* ================= REGIONAL HUBS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 xl:gap-8 justify-center">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="w-full max-w-[300px] mx-auto h-[272px] bg-white dark:bg-slate-800 rounded-[20px] p-5 flex flex-col justify-between shadow-[2px_4px_22px_0px_rgba(0,0,0,0.09)] border border-slate-100 dark:border-slate-700 overflow-hidden group hover:border-fuchsia-700/30 dark:hover:border-fuchsia-500/30 transition-all duration-300"
            >
              {/* Upper Content Frame */}
              <div>
                <h3 className="text-fuchsia-700 dark:text- fuchsia-400 text-2xl font-semibold leading-none mb-3">
                  {hub.title}
                </h3>
                <p className="text-zinc-500 dark:text-slate-300 text-sm md:text-base font-normal leading-6 ">
                  {hub.description}
                </p>
              </div>

              {/* Lower Metadata/Stats Metrics Section */}
              <div className="border-t border-slate-100 dark:border-slate-700/50 ">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-col">
                    <span className="text-zinc-900 dark:text-white text-sm font-semibold">
                      {hub.stats[0].value}
                    </span>
                    {hub.stats[0].label && (
                      <span className="text-zinc-500 dark:text-slate-400 text-xs mt-0.5">
                        {hub.stats[0].label}
                      </span>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-zinc-900 dark:text-white text-sm font-semibold block">
                      {hub.stats[1].value}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}