"use client";

import React from "react";

const solutions = [
  {
    title: "Web & App Development",
    tags: ["React", "Node.js", "Python"],
    iconSlot: (
      <img className="relative w-10 h-10 flex items-center justify-center"
           src="/images/services-solutions/streamline-plump_web.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Mobile Solutions",
    tags: ["iOS", "Android", "Flutter", "Swift"],
    iconSlot: (
      <img className="relative w-10 h-10 flex items-center justify-center"
           src="/images/services-solutions/qlementine-icons_android-24.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Cloud & Infrastructure",
    tags: ["AWS", "Azure", "GCP", "Migration", "Zero Trust"],
    iconSlot: (
      <img className="relative w-10 h-10 flex items-center justify-center"
           src="/images/services-solutions/tabler_cloud-computing.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Managed IT &\nCybersecurity",
    tags: ["SOC", "SIEM", "Threat Protection"],
    iconSlot: (
      <img className="relative w-10 h-10 flex items-center justify-center"
           src="/images/services-solutions/ic_outline-lock.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Branding & Creative\nStrategy",
    tags: ["Brand Identity", "Campaigns", "Omni-Channel Content"],
    iconSlot: (
      <img className="relative w-10 h-10 flex items-center justify-center"
           src="/images/services-solutions/fluent_design-ideas-48-regular.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Compliance & RegTech",
    tags: ["GDPR", "HIPAA", "PCI DSS", "Global Reg Reporting"],
    iconSlot: (
      <img className="relative w-10 h-10 flex items-center justify-center"
           src="/images/services-solutions/basil_document-outline.png"
           alt="icon"  
      />
    ),
  },
];

export default function CoreSolutions() {
  return (
    <section className="w-full min-h-[851px] bg-gradient-to-br from-gray-900 via-fuchsia-800 to-sky-950 py-16 lg:py-15 px-4 sm:px-6 md:px-12 lg:px-[108px] text-white overflow-hidden flex items-center">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* ================= SECTION HEADERS ================= */}
        <div className="text-center flex flex-col items-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight md:leading-[52px]">
            Core Solutions | Depth with Clarity
          </h2>
          <p className="mt-2 text-base md:text-lg font-normal text-white/80 leading-normal">
            Comprehensive Digital Transformation Solutions
          </p>
        </div>

        {/* ================= SOLUTIONS GRID MATRIX ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 justify-items-center">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[384px] h-[256px] bg-white/10 rounded-2xl border border-white/25 backdrop-blur-[5px] p-6 flex flex-col items-center text-center justify-between group hover:bg-white/15 hover:border-white/40 transition-all duration-300"
            >
              {/* Upper Section: Dynamic Structural Vectors */}
              <div className="flex flex-col items-center mt-2 w-full">
                <div className="w-11 h-11 flex items-center justify-center overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-200">
                  {item.iconSlot}
                </div>
                
                {/* Structural fix: Enforcing unified title layout height */}
                <div className="min-h-[64px] flex items-center justify-center w-full">
                  <h3 className="text-xl md:text-xl font-semibold leading-8 tracking-tight whitespace-pre-line px-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Lower Section: Tech Stack Tag Cloud */}
              <div className="w-full flex flex-wrap justify-center gap-2 mt-auto">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2.5 py-1 bg-white/10 rounded-2xl border border-white/20 text-xs md:text-sm font-medium tracking-wide text-white/90 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}