"use client";

import React from "react";

const caseStudies = [
  {
    category: "Banking",
    region: "Caribbean",
    title: "Regional Banking Network",
    description:
      "Connected banks across island nations with secure transactions and banking management systems.",
    stats: [
      { value: "150+", label: "Banking Facilities" },
      { value: "80%", label: "User Satisfaction" },
    ],
    tags: ["Easy Transferring", "Video Conferencing", "User Management"],
  },
  {
    category: "Healthcare",
    region: "Caribbean",
    title: "Regional Telemedicine Network",
    description:
      "Connected healthcare providers across island nations with secure telemedicine and patient management systems.",
    stats: [
      { value: "150+", label: "Healthcare Facilities" },
      { value: "80%", label: "Patient Satisfaction" },
    ],
    tags: ["HIPAA Compliance", "Video Conferencing", "EMR Integration"],
  },
  {
    category: "FinTech",
    region: "India",
    title: "Digital Banking Transformation",
    description:
      "Built a comprehensive digital banking platform processing millions of transactions with advanced fraud detection.",
    stats: [
      { value: "5M+", label: "Active Users" },
      { value: "$500M+", label: "Monthly Volume" },
    ],
    tags: ["Real-time Processing", "AI/ML", "Mobile Banking"],
  },
];

export default function TrustedByGlobalLeaders() {
  return (
    <section className="bg-[#114A69] dark:bg-gray-900 py-12 md:py-20 lg:py-16 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto px-2">
          <h2 className="text-white dark:text-white text-3xl md:text-4xl font-bold mb-4">
            Trusted by Global Leaders
          </h2>
          <p className="text-white/80 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            Real results from our global partnerships, showcasing
            transformative solutions that drive measurable business outcomes.
          </p>
        </div>

        {/* Cards Grid Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full justify-center">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white dark:bg-gray-800/60 rounded-[20px] border border-zinc-200 dark:border-gray-700/60 shadow-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              {/* Upper Section */}
              <div>
                {/* Top Meta Details Row */}
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <span className="px-3.5 py-1.5 rounded-full bg-teal-700/10 dark:bg-teal-500/10 border border-[#A855F7]/20 text-[#207373] dark:text-teal-400 text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-500 dark:text-gray-400 font-medium">
                    {item.region}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-white mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
                  {item.description}
                </p>
              </div>

              {/* Lower Section */}
              <div>
                {/* Stats Subgrid */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 border-t border-zinc-100 dark:border-gray-700/50 pt-5">
                  {item.stats.map((stat, idx) => (
                    <div key={idx}>
                      <h4 className="text-[#207373] dark:text-teal-400 text-2xl sm:text-3xl font-bold leading-none">
                        {stat.value}
                      </h4>
                      <p className="text-zinc-500 dark:text-gray-400 text-xs sm:text-sm mt-2 leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags Collection */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1.5 rounded-full bg-zinc-100 dark:bg-gray-700 text-zinc-800 dark:text-gray-200 text-[11px] sm:text-xs font-medium tracking-wide whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}