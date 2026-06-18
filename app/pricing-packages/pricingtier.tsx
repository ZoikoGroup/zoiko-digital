"use client";
import React, { useState } from "react";

export default function PricingTierGrid() {
  const [selectedTier, setSelectedTier] = useState<string>("Growth");

  // 3 distinct path locations for the 3 unique tiers
  const tiers = [
    { 
      id: "Starter", 
      label: "SMB", 
      sub: "Starter–Growth Packages",
      iconPath: "/images/pricing-packages/bxs_rocket (2).png" // Icon 1
    },
    { 
      id: "Growth", 
      label: "Mid-Market", 
      sub: "Scaling Plans",
      iconPath: "/images/pricing-packages/streamline_graph-remix.png" // Icon 2
    },
    { 
      id: "Enterprise", 
      label: "Enterprise", 
      sub: "Custom Quote",
      iconPath: "/images/pricing-packages/streamline_web-remix.png" // Icon 3
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Toggles Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {tiers.map((tier) => {
          const isActive = selectedTier === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`w-full sm:w-56 h-32 rounded-xl p-5 flex flex-col justify-center items-center text-center border transition-all duration-300 ${
                isActive
                  ? "bg-fuchsia-700 border-fuchsia-700 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-fuchsia-700 dark:text-fuchsia-400 hover:border-fuchsia-700/40"
              }`}
            >
              {/* Clean Icon Container without opacity masking */}
              <div className="w-9 h-9 mb-2 flex items-center justify-center overflow-hidden">
                <img 
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    isActive 
                      ? "brightness-0 invert" // Turns icon white when the background goes dark fuchsia
                      : "dark:brightness-100" // Normal look on white backgrounds
                  }`}
                  src={tier.iconPath}       
                  alt={`${tier.label} icon`}
                />
              </div>
              <span className={`text-lg font-semibold block ${isActive ? "text-white" : "text-slate-800 dark:text-white"}`}>
                {tier.label}
              </span>
              <span className={`text-sm font-normal ${isActive ? "text-white/85" : "text-slate-500 dark:text-gray-400"}`}>
                {tier.sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Double Card Presentation Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* Tier Card 1: Starter Package */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 p-8 flex flex-col justify-between items-center text-center transition-all min-h-[440px]">
          <div className="w-full flex flex-col items-center">
            <h3 className="text-slate-800 dark:text-white text-2xl font-semibold mb-3">Starter</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 text-fuchsia-700 dark:text-fuchsia-400 text-2xl sm:text-3xl font-semibold tracking-tight mb-1">
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
          <button className="h-12 w-full max-w-xs border border-fuchsia-700 dark:border-fuchsia-500 text-fuchsia-700 dark:text-fuchsia-400 font-semibold rounded-lg hover:bg-fuchsia-700/5 mt-8 transition-colors">
            Choose Starter
          </button>
        </div>

        {/* Tier Card 2: Growth Package */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border-2 border-fuchsia-700 p-8 flex flex-col justify-between items-center text-center relative min-h-[440px]">
          <span className="absolute top-0 -translate-y-1/2 bg-fuchsia-700 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Most Popular
          </span>
          <div className="w-full flex flex-col items-center">
            <h3 className="text-slate-800 dark:text-white text-2xl font-semibold mb-3">Growth</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 text-fuchsia-700 dark:text-fuchsia-400 text-2xl sm:text-3xl font-semibold tracking-tight mb-1">
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
          <button className="h-12 w-full max-w-xs bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold rounded-lg shadow-sm mt-8 transition-all">
            Choose Growth
          </button>
        </div>

      </div>
    </div>
  );
}