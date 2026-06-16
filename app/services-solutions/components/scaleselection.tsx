"use client";

import React from "react";
const stages = [
  {
    title: "SMB",
    subtitle: "Foundation & Growth",
    // Replace this placeholder with your imported icon component
    iconSlot: <img
  src="https://zoikodigital.com/wp-content/uploads/2026/01/Vector-5.png"
  alt="Security"
  width="32"
  height="32"
/>,
  },
  {
    title: "Mid-Market",
    subtitle: "Expansion & Optimization",
    iconSlot: <img
  src="https://zoikodigital.com/wp-content/uploads/2026/01/material-symbols_factory-rounded.png"
  alt="Security"
  width="32"
  height="32"
/>,
  },
  {
    title: "Enterprise",
    subtitle: "Global & Innovation",
    iconSlot:<img
  src="https://zoikodigital.com/wp-content/uploads/2026/01/streamline-plump_web-solid.png"
  alt="Security"
  width="32"
  height="32"
/>,
  },
];

export default function ScaleSection() {
  return (
    <section className="w-full bg-gradient-to-tr from-fuchsia-700/[0.03] to-sky-900/[0.03] border-t border-b border-slate-200 py-16 md:py-8 px-6">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-2xl mx-auto mb-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-2xl font-semibold text-slate-800 tracking-tight leading-tight md:leading-[64px]">
            Scale Without Limits
          </h2>
          <p className="mt-0 text-base md:text-base font-normal text-slate-500 leading-relaxed">
            Start lean, grow fast, and expand globally with modular service tiers.
          </p>
        </div>

        {/* ================= ROADMAP CARDS PIPELINE ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 max-w-5xl mx-auto mb-6">
          {stages.map((stage, idx) => (
            <React.Fragment key={idx}>
              {/* Individual Stage Card */}
              <div className="w-48 h-48 bg-white rounded-xl flex flex-col items-center text-center justify-center p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-slate-200 shrink-0 group hover:shadow-md transition-shadow">
                
                {/* Icon Wrapper Frame */}
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden mb-6 group-hover:scale-105 transition-transform">
                  {stage.iconSlot}
                </div>
                
                {/* Text Metadata */}
                <h3 className="text-fuchsia-700 text-lg font-semibold leading-7">
                  {stage.title}
                </h3>
                <p className="mt-1 text-slate-500 text-sm font-normal leading-5 px-2">
                  {stage.subtitle}
                </p>
              </div>

              {/* Arrow Connector Line Logic (Hidden on mobile stack) */}
              {idx < stages.length - 1 && (
                <div className="hidden lg:flex w-24 justify-center text-fuchsia-700 text-2xl font-semibold leading-10 select-none animate-pulse">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ================= ACTION REGION ================= */}
        <div className="flex justify-center">
          <button className="h-12 px-8 bg-fuchsia-700 hover:bg-fuchsia-800 text-white text-base font-semibold rounded-lg transition-colors shadow-sm">
            Talk to Enterprise Sales
          </button>
        </div>

      </div>
    </section>
  );
}