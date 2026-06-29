"use client";
import React, { useState } from "react";

export default function PricingCalculator() {
  // Setup reactive fields for backend lookup optimization later
  const [projectType, setProjectType] = useState("");
  const [scale, setScale] = useState("");
  const [industry, setIndustry] = useState("");
  const [userCount, setUserCount] = useState("");

  return (
    <div className="w-full bg-fuchsia-50 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="w-full text-slate-800 dark:text-white text-2xl sm:text-3xl font-semibold">
            Pricing Calculator
          </h2>
          <p className="mt-2 text-slate-500 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Get a transparent, indicative price range for your project
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-gray-800 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Inputs Section */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div>
              <label className="block text-slate-800 dark:text-gray-200 text-sm font-semibold mb-2">Project Type</label>
              <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className="w-full h-11 px-4 bg-white dark:bg-gray-800 rounded-lg border border-slate-200 dark:border-gray-700 text-sm text-neutral-500 dark:text-white focus:outline-none focus:border-[#207373]">
                <option value="">Select project type</option>
                <option value="web">Web & App Development</option>
                <option value="cloud">Cloud Infrastructure</option>
                <option value="compliance">Compliance Tech</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-800 dark:text-gray-200 text-sm font-semibold mb-2">Scale</label>
              <select value={scale} onChange={(e) => setScale(e.target.value)} className="w-full h-11 px-4 bg-white dark:bg-gray-800 rounded-lg border border-slate-200 dark:border-gray-700 text-sm text-neutral-500 dark:text-white focus:outline-none focus:border-[#207373]">
                <option value="">Select scale</option>
                <option value="startup">Startup</option>
                <option value="mid">Mid-Market</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-800 dark:text-gray-200 text-sm font-semibold mb-2">Industry</label>
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full h-11 px-4 bg-white dark:bg-gray-800 rounded-lg border border-slate-200 dark:border-gray-700 text-sm text-neutral-500 dark:text-white focus:outline-none focus:border-[#207373]">
                <option value="">Select industry</option>
                <option value="telecom">Telecommunications</option>
                <option value="finance">Financial Services</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-800 dark:text-gray-200 text-sm font-semibold mb-2">User Count</label>
              <input type="number" placeholder="Number of users" value={userCount} onChange={(e) => setUserCount(e.target.value)} className="w-full h-11 px-4 bg-white dark:bg-gray-800 rounded-lg border border-slate-200 dark:border-gray-700 text-sm text-neutral-500 dark:text-white focus:outline-none focus:border-[#207373]" />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button className="h-12 px-8 bg-[#207373] hover:bg-[#207373] text-white text-base font-semibold rounded-lg w-full sm:w-auto transition-colors duration-200 shadow-sm">
                Calculate Estimate
              </button>
            </div>
          </div>

          {/* Results Display Pane */}
          <div className="lg:col-span-6 w-full h-full min-h-[220px] bg-slate-100 dark:bg-gray-800 rounded-xl flex flex-col items-center justify-center text-center p-6 border border-slate-200 dark:border-gray-700">
            <span className="text-3xl mb-3 select-none">💡</span>
            <p className="text-slate-400 dark:text-gray-300 text-base font-normal leading-relaxed max-w-xs">
              Complete the form to see your estimated pricing range
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}