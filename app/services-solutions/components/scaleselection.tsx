"use client";

import React from "react";

const stages = [
  {
    title: "SMB",
    subtitle: "Foundation & Growth",
    iconSlot: (
      <img
        src="/images/services-solutions/icomoon-free_office.png"
        alt="SMB"
        width="32"
        height="32"
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    title: "Mid-Market",
    subtitle: "Expansion & Optimization",
    iconSlot: (
      <img
        src="/images/services-solutions/material-symbols_factory-rounded.png"
        alt="Mid-Market"
        width="32"
        height="32"
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    title: "Enterprise",
    subtitle: "Global & Innovation",
    iconSlot: (
      <img
        src="/images/services-solutions/streamline-plump_web-solid.png"
        alt="Enterprise"
        width="32"
        height="32"
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
];

export default function ScaleSection() {
  return (
    <section className="w-full bg-gradient-to-tr from-fuchsia-700/[0.03] to-sky-900/[0.03] dark:from-gray-900 dark:to-gray-900/95 border-t border-b border-slate-200 dark:border-gray-800 py-16 md:py-8 px-6 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-2xl mx-auto mb-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-2xl font-semibold text-slate-800 dark:text-white tracking-tight leading-tight md:leading-[64px]">
            Scale Without Limits
          </h2>
          <p className="mt-0 text-base md:text-base font-normal text-slate-500 dark:text-gray-400 leading-relaxed">
            Start lean, grow fast, and expand globally with modular service tiers.
          </p>
        </div>

        {/* ================= ROADMAP CARDS PIPELINE ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 max-w-5xl mx-auto mb-6">
          {stages.map((stage, idx) => (
            <React.Fragment key={idx}>
              {/* Individual Stage Card */}
              <div className="w-48 h-48 bg-white dark:bg-gray-800 rounded-xl flex flex-col items-center text-center justify-center p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-gray-700 shrink-0 group hover:shadow-md dark:hover:shadow-black/30 transition-all duration-300">
                
                {/* Icon Wrapper Frame */}
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-200">
                  {stage.iconSlot}
                </div>
                
                {/* Text Metadata */}
                <h3 className="text-[#207373] dark:text-teal-400 text-lg font-semibold leading-7">
                  {stage.title}
                </h3>
                <p className="mt-1 text-slate-500 dark:text-gray-300 text-sm font-normal leading-5 px-2">
                  {stage.subtitle}
                </p>
              </div>

              {/* Arrow Connector Line Logic */}
              {idx < stages.length - 1 && (
                <div className="hidden lg:flex w-24 justify-center text-fuchsia-700 dark:text-teal-500 text-2xl font-semibold leading-10 select-none animate-pulse">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ================= ACTION REGION ================= */}
        <div className="flex justify-center">
          <button className="h-12 px-8 bg-[#207373] hover:bg-[#165252] dark:bg-teal-600 dark:hover:bg-teal-500 text-white text-base font-semibold rounded-lg transition-colors shadow-sm">
            Talk to Enterprise Sales
          </button>
        </div>

      </div>
    </section>
  );
}