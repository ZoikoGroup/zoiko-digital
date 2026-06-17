"use client";

import React, { useState } from "react";
import Image from "next/image";

const targetAudience = [
  { id: "governments", label: "Governments" },
  { id: "startups", label: "Startups" },
  { id: "global-brands", label: "Global Brands" },
];

const solutionsData = {
  governments: [
    {
      title: "e-Governance Solutions",
      description: "Digital citizen services and compliance automation",
      iconSlot: "/images/services-solutions/mdi_shield-tick.png",
    },
    {
      title: "Security & Compliance",
      description: "FedRAMP-ready infrastructure and data protection",
      iconSlot: "/images/services-solutions/lsicon_lock-filled.png",
    },
    {
      title: "Data Analytics",
      description: "Public sector insights and performance monitoring",
      iconSlot: "/images/services-solutions/f7_doc-fill.png",
    },
  ],

  startups: [
    {
      title: "Rapid Scaling",
      description: "Infrastructure built for hyper-growth",
      iconSlot: "https://s.w.org/images/core/emoji/17.0.2/svg/1f680.svg",
    },
    {
      title: "DevOps Automation",
      description: "CI/CD and cloud-native workflows",
      iconSlot: "https://s.w.org/images/core/emoji/17.0.2/svg/2699.svg",
    },
    {
      title: "Product Analytics",
      description: "User behavior and growth metrics",
      iconSlot: "https://s.w.org/images/core/emoji/17.0.2/svg/1f4a1.svg",
    },
  ],

  "global-brands": [
    {
      title: "Enterprise Cloud",
      description: "Multi-region, high-availability platforms",
      iconSlot: "https://s.w.org/images/core/emoji/17.0.2/svg/1f30d.svg",
    },
    {
      title: "Compliance at Scale",
      description: "Global regulatory readiness",
      iconSlot: "https://s.w.org/images/core/emoji/17.0.2/svg/1f510.svg",
    },
    {
      title: "Advanced Insights",
      description: "AI-driven performance intelligence",
      iconSlot: "https://s.w.org/images/core/emoji/17.0.2/svg/1f4c8.svg",
    },
  ],
};

export default function Governancecardsection() {
  const [activeTab, setActiveTab] = useState<
    "governments" | "startups" | "global-brands"
  >("governments");

  const currentSolutions = solutionsData[activeTab];

  return (
    <section className="w-full bg-sky-50 py-12 text-slate-800 transition-colors duration-200 dark:bg-gray-900 dark:text-white md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
        {/* Audience Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 md:mb-14">
          {targetAudience.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id as
                      | "governments"
                      | "startups"
                      | "global-brands"
                  )
                }
                className={`h-10 rounded-full border px-6 text-sm transition-all duration-200 ${
                  isActive
                    ? "border-sky-900 bg-sky-900 text-white"
                    : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentSolutions.map((card, index) => (
            <div
              key={index}
              className="mx-auto flex h-60 w-full max-w-[384px] flex-col items-center justify-between rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mt-4 mb-2 flex h-11 w-11 items-center justify-center">
                <Image
                  src={card.iconSlot}
                  alt={card.title}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center">
                <h4 className="mb-2 text-xl font-semibold leading-8 text-sky-900">
                  {card.title}
                </h4>

                <p className="px-2 text-sm leading-6 text-slate-500 md:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}