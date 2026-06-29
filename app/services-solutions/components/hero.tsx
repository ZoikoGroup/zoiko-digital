"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-fuchsia-50 dark:bg-gray-900 py-12 md:py-15 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[108px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <h1 className="text-slate-800 dark:text-white text-2xl md:text-4xl font-semibold leading-9 md:leading-[53px]">
            Solutions Engineered for<br />
            <span className="text-[#207373] dark:text-teal-400"> Measurable Growth</span>
          </h1>
          
          <p className="mt-4 md:mt-6 text-slate-500 dark:text-gray-300 text-base font-normal leading-6 md:leading-7 max-w-xl opacity-90">
            From startups to global enterprises, Zoiko Web Services delivers cloud, compliance, and digital transformation solutions that power measurable resilience, agility, and innovation.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-6 md:mt-8 flex flex-row gap-4 justify-start">
            <button className="h-11 md:h-12 px-6 bg-[#207373] hover:bg-[#165252] dark:bg-teal-600 dark:hover:bg-teal-500 text-white text-sm md:text-base font-semibold rounded-lg transition-colors shadow-sm">
              Explore Solutions
            </button>
            <button className="h-11 md:h-12 px-5 md:px-6 rounded-lg border border-[#207373] dark:border-teal-400 hover:bg-[#207373] dark:hover:bg-teal-400/10 text-[#207373] dark:text-teal-400 text-sm md:text-base font-semibold transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Right Column: Image Frame */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[579px] aspect-[362/241] md:aspect-[579/320] bg-zinc-300 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md relative border dark:border-gray-700">
            <img 
              className="w-full h-full object-cover transform scale-105" 
              src="/images/services-solutions/hero.png" 
              alt="Solutions Engineering Workspace" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}