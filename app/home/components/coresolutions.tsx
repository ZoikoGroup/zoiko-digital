"use client";

import React from "react";

const solutions = [
  {
    title: "Web & App Development",
    tags: ["React", "Node.js", "Python"],
    iconSlot: (
      <img className="relative w-10 h-10 object-contain"
           src="/images/services-solutions/streamline-plump_web.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Mobile Solutions",
    tags: ["iOS", "Android", "Flutter", "Swift"],
    iconSlot: (
      <img className="relative w-10 h-10 object-contain"
           src="/images/services-solutions/qlementine-icons_android-24.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Cloud & Infrastructure",
    tags: ["AWS", "Azure", "GCP", "Migration", "Zero Trust"],
    iconSlot: (
      <img className="relative w-10 h-10 object-contain"
           src="/images/services-solutions/tabler_cloud-computing.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Managed IT &\nCybersecurity",
    tags: ["SOC", "SIEM", "Threat Protection"],
    iconSlot: (
      <img className="relative w-10 h-10 object-contain"
           src="/images/services-solutions/ic_outline-lock.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Branding & Creative\nStrategy",
    tags: ["Brand Identity", "Campaigns", "Omni-Channel Content"],
    iconSlot: (
      <img className="relative w-10 h-10 object-contain"
           src="/images/services-solutions/fluent_design-ideas-48-regular.png"
           alt="icon"  
      />
    ),
  },
  {
    title: "Compliance & RegTech",
    tags: ["GDPR", "HIPAA", "PCI DSS", "Global Reg Reporting"],
    iconSlot: (
      <img className="relative w-10 h-10 object-contain"
           src="/images/services-solutions/basil_document-outline.png"
           alt="icon"  
      />
    ),
  },
];

export default function CoreSolutions() {
  return (
    <section className="w-full min-h-screen bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 dark:bg-gray-900 py-16 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 text-white dark:text-white overflow-hidden flex items-center transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* ================= SECTION HEADERS ================= */}
        <div className="text-center flex flex-col items-center mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight dark:text-white">
            Core Solutions | Depth with Clarity
          </h2>
          <p className="mt-2 text-base md:text-lg font-normal text-white/80 dark:text-gray-300 leading-normal max-w-xl">
            Comprehensive Digital Transformation Solutions
          </p>
        </div>

        {/* ================= SOLUTIONS GRID MATRIX ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 justify-items-center w-full">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-sm sm:max-w-none min-h-[260px] bg-white/10 dark:bg-gray-800/40 rounded-2xl border border-white/25 dark:border-gray-700/50 backdrop-blur-[5px] p-6 flex flex-col items-center text-center justify-between group hover:bg-white/15 dark:hover:bg-gray-800/60 hover:border-white/40 dark:hover:border-gray-600 transition-all duration-300"
            >
              {/* Upper Section: Dynamic Structural Vectors */}
              <div className="flex flex-col items-center w-full mb-4">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-200">
                  {item.iconSlot}
                </div>
                
                {/* Responsive title block wrapping */}
                <div className="w-full">
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug tracking-tight whitespace-pre-line px-1 dark:text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Lower Section: Tech Stack Tag Cloud */}
              <div className="w-full flex flex-wrap justify-center gap-2 mt-auto">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2.5 py-1 bg-white/10 dark:bg-gray-700/40 rounded-full border border-white/20 dark:border-gray-600/50 text-xs sm:text-sm font-medium tracking-wide text-white/90 dark:text-gray-200 whitespace-nowrap"
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