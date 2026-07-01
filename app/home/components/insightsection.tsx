"use client";

import React from "react";

const insights = [
  {
    title: "Whitepapers",
    description:
      "AI in Compliance, Cloud Security, Emerging Tech",
  },
  {
    title: "Global Reports",
    description:
      "Digital Transformation Trends 2025",
  },
  {
    title: "Executive Blogs",
    description:
      "Written by Zoiko leadership",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-800 dark:text-white">
            Insights That Shape the Future.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full justify-center">
          {insights.map((item, index) => (
            <div
              key={index}
              className="
                w-full
                bg-white
                dark:bg-gray-800/50
                rounded-2xl
                border
                border-stone-200
                dark:border-gray-700/60
                shadow-[0px_10px_30px_rgba(0,0,0,0.06)]
                p-6
                sm:p-8
                min-h-[160px]
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:hover:border-gray-600
              "
            >
              <h3 className="text-lg font-semibold text-[#207373] dark:text-teal-400 mb-4 md:mb-6">
                {item.title}
              </h3>

              <p className="text-zinc-600 dark:text-gray-200 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}