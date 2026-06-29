"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function PricingTiers() {
  const [selectedTier, setSelectedTier] = useState<string>("Starter");

  const tiers = [
    { 
      id: "Starter", 
      label: "SMB", 
      sub: "Starter–Growth Packages", 
      icon: "/images/pricing-packages/bxs_rocket.png"
    },
    { 
      id: "Growth", 
      label: "Mid-Market", 
      sub: "Scaling Plans", 
      icon: "/images/pricing-packages/streamline_graph-remix.png"
    },
    { 
      id: "Enterprise", 
      label: "Enterprise", 
      sub: "Custom Quote", 
      icon: "/images/pricing-packages/streamline_web-remix.png"
    },
  ];

  return (
    <div>
    <div className="w-full bg-white dark:bg-gray-950 border-b border-slate-200 dark:border-gray-800 py-8 px-4 transition-colors duration-300">
      {/* Category Toggles Navigation Bar Container */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-7xl mx-auto">
        {tiers.map((tier) => {
          const isActive = selectedTier === tier.id;

          return (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`w-full sm:w-56 h-32 rounded-xl p-5 flex flex-col justify-center items-center text-center transition-all duration-300 relative outline outline-1 outline-offset-[-1px] ${
                isActive
                  ? "bg-teal-700 border-teal-700 text-white shadow-md outline-teal-700 dark:bg-teal-600 dark:border-teal-600 dark:outline-teal-600"
                  : "bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 text-teal-700 dark:text-teal-400 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-slate-200 dark:outline-gray-800 hover:outline-teal-700 dark:hover:outline-teal-400"
              }`}
            >
              {/* Corrected Icon Container using Next.js Image */}
              <div className="w-9 h-9 flex items-center justify-center mb-2 relative">
                <Image
                  src={tier.icon}
                  alt={`${tier.label} icon`}
                  width={28}
                  height={28}
                  className={`object-contain transition-all duration-300 ${
                    isActive 
                      ? "brightness-0 invert" 
                      : "dark:brightness-0 dark:invert"
                  }`}
                />
              </div>

              {/* Title Label */}
              <span 
                className={`text-lg font-semibold font-['Inter'] block tracking-tight transition-colors duration-300 ${
                  isActive ? "text-white" : "text-teal-700 dark:text-teal-400"
                }`}
              >
                {tier.label}
              </span>

              {/* Subtitle Label */}
              <span 
                className={`text-sm font-normal font-['Inter'] transition-colors duration-300 ${
                  isActive ? "text-white/90" : "text-stone-500 dark:text-gray-400"
                }`}
              >
                {tier.sub}
              </span>
            </button>
          );
        })}
      </div>
    </div>
      {/* Main Double Card Presentation Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* Tier Card 1: Starter Package */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 p-8 flex flex-col justify-between items-center text-center transition-all min-h-[440px]">
          <div className="w-full flex flex-col items-center">
            <h3 className="text-slate-800 dark:text-white text-2xl font-semibold mb-3">Starter</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[#207373] dark:text-[#207373] text-2xl sm:text-3xl font-semibold tracking-tight mb-1">
              <span>£1.5K</span>
              <span className="text-slate-400 font-light text-xl">/</span>
              <span>€1.7K</span>
              <span className="text-slate-400 font-light text-xl">/</span>
              <span>$2K</span>
            </div>
            <span className="text-slate-400 text-xs font-normal mb-6 block uppercase tracking-wide">one-time setup</span>

            <ul className="w-full max-w-sm flex flex-col gap-3.5 text-left border-t border-slate-100 dark:border-gray-700 pt-6">
              {[
                "Website/App Starter",
                "Basic Cloud Hosting (up to 10 users)",
                "Branding Essentials",
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-500 dark:text-gray-300 text-base">
                  <span className="text-emerald-500 font-bold select-none">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="h-12 w-full max-w-xs border border-[#207373] dark:border-[#207373] text-[#207373] dark:text-white font-semibold rounded-lg hover:bg-[#207373] hover:text-white  mt-8 transition-colors">
            Choose Starter
          </button>
        </div>

        {/* Tier Card 2: Growth Package */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border-2 border-[#207373] p-8 flex flex-col justify-between items-center text-center relative min-h-[440px]">
          <span className="absolute top-0 -translate-y-1/2 bg-[#207373] text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Most Popular
          </span>
          <div className="w-full flex flex-col items-center">
            <h3 className="text-slate-800 dark:text-white text-2xl font-semibold mb-3">Growth</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[#207373] dark:text-[#207373] text-2xl sm:text-3xl font-semibold tracking-tight mb-1">
              <span>£3.5K</span>
              <span className="text-slate-400 font-light text-xl">/</span>
              <span>€4K</span>
              <span className="text-slate-400 font-light text-xl">/</span>
              <span>$4.5K</span>
            </div>
            <span className="text-slate-400 text-xs font-normal mb-6 block uppercase tracking-wide">project range</span>

            <ul className="w-full max-w-sm flex flex-col gap-3.5 text-left border-t border-slate-100 dark:border-gray-700 pt-6">
              {[
                "Cloud Expansion (25 users)",
                "Advanced Branding",
                "Starter Compliance Pack",
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-500 dark:text-gray-300 text-base">
                  <span className="text-emerald-500 font-bold select-none">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="h-12 w-full max-w-xs bg-[#207373] hover:bg-[#207373] text-white font-semibold rounded-lg shadow-sm mt-8 transition-all">
            Choose Growth
          </button>
        </div>

      </div>
    </div>
  );
}