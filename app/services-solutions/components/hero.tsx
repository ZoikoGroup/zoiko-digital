"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-fuchsia-50 py-12 md:py-15 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[108px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Content */}
        {/* Changed text-center to text-left on mobile to match the Figma file */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          {/* Mobile uses text-2xl with leading-9 based on mobile frame specs */}
          <h1 className="text-slate-800 text-2xl md:text-4xl font-semibold leading-9 md:leading-[53px]">
            Solutions Engineered<br />
            <span className="text-[#A21CAF]">for Measurable Growth</span>
          </h1>
          
          {/* Mobile paragraph matches leading-6 opacity values from Figma */}
          <p className="mt-4 md:mt-6 text-slate-500 text-base font-normal leading-6 md:leading-7 max-w-xl opacity-90">
            From startups to global enterprises, Zoiko Web Services delivers cloud, compliance, and digital transformation solutions that power measurable resilience, agility, and innovation.
          </p>
          
          {/* Action Buttons: Kept side-by-side layout with flex-row on mobile */}
          <div className="mt-6 md:mt-8 flex flex-row gap-4 justify-start">
            {/* Mobile buttons use h-11 and text-sm according to specs */}
            <button className="h-11 md:h-12 px-6 bg-fuchsia-700 hover:bg-fuchsia-800 text-white text-sm md:text-base font-semibold rounded-lg transition-colors shadow-sm">
              Explore Solutions
            </button>
            <button className="h-11 md:h-12 px-5 md:px-6 rounded-lg border border-fuchsia-700 hover:bg-fuchsia-700/5 text-fuchsia-700 text-sm md:text-base font-semibold transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Right Column: Image Frame */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[579px] aspect-[362/241] md:aspect-[579/320] bg-zinc-300 rounded-lg overflow-hidden shadow-md relative">
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