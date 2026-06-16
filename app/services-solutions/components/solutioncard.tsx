"use client";
import Image from "next/image";
import React from "react";

const solutions = [
  {
    title: "Cloud & Infrastructure",
    description: "Uptime, scalability, data security.",
    // Replace this placeholder with your imported icon component
    icon: (
      <img className="relative w-10 h-10 flex items-center justify-center"
             src="/images/services-solutions/SVG.png"
             alt="icon"  
      />
    ),
  },
  {
    title: "Digital Transformation",
    description: "Workflow automation, AI-driven insights.",
    icon: (
      <img className="relative w-10 h-10 flex items-center justify-center"
             src="/images/services-solutions/SVG (1).png"
             alt="icon"  
      />
    ),
  },
  {
    title: "Compliance & RegTech",
    description: "Global, automated, audit-ready.",
    icon: (
      <img className="relative w-10 h-10 flex items-center justify-center"
             src="/images/services-solutions/SVG (2).png"
             alt="icon"  
      />
    ),
  },
  {
    title: "Digital Marketing & Design",
    description: "Full-funnel creative + digital growth.",
    icon: (
      <img className="relative w-10 h-10 flex items-center justify-center"
             src="/images/services-solutions/SVG (3).png"
             alt="icon"  
      />
    ),
  },
  {
    title: "Printing & Signage",
    description: "Physical-digital visibility solutions.",
    icon: (
      <img className="relative w-10 h-10 flex items-center justify-center"
             src="/images/services-solutions/SVG (4).png"
             alt="icon"  
      />
    ),
  },
  {
    title: "Custom Enterprise Solutions",
    description: "Bespoke builds for regulated markets.",
    icon: (
      <img className="relative w-10 h-10 flex items-center justify-center"
             src="/images/services-solutions/SVG (5).png"
             alt="icon"  
      />
    ),
  },
];

export default function SolutionsPortfolio() {
  return (
    <section className="w-full bg-slate-50 dark:bg-gray-900 py-16 md:py-10 text-slate-800 dark:text-white transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[108px]">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-800 dark:text-white leading-tight md:leading-[64px]">
            Comprehensive Solutions Portfolio
          </h2>
          <p className="mt-3 text-base md:text-base font-normal text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
            Enterprise-grade services designed to accelerate your digital transformation journey
          </p>
        </div>

        {/* ================= SOLUTIONS CARD GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[384px] mx-auto h-64 bg-white dark:bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-between shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-slate-700 group transition-all duration-300 hover:shadow-md hover:border-fuchsia-700/30"
            >
              {/* Icon Frame wrapper */}
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden mt-2">
                {item.icon}
              </div>

              {/* Title & Description Segment */}
              <div className="flex-1 flex flex-col justify-center my-2">
                <h3 className="text-slate-800 dark:text-slate-200 text-lg md:text-xl font-semibold leading-7 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal leading-6 px-1">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <button className="w-28 h-8 flex items-center justify-center rounded-md border border-fuchsia-700 dark:border-fuchsia-500 text-fuchsia-700 dark:text-fuchsia-400 text-sm font-normal transition-colors duration-200 hover:bg-fuchsia-700/5 dark:hover:bg-fuchsia-400/5 mb-1">
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}