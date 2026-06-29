"use client";
import React, { useState } from "react";

interface SpotlightSlide {
  leftLogoText: string;
  rightLogoText: string;
  hasPlusDivider: boolean;
  slideHeading: string;
  slideDescription: string;
  metrics?: {
    value: string;
    label: string;
  }[];
}

export default function PartnerSpotlight() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: SpotlightSlide[] = [
    {
      leftLogoText: "ZWS",
      rightLogoText: "Microsoft",
      hasPlusDivider: true,
      slideHeading: "Hybrid Cloud Excellence",
      slideDescription: "Partnered with Microsoft Azure to deliver enterprise-grade hybrid cloud solutions that scale from startup to global enterprise operations.",
      metrics: [
        { value: "500+", label: "Deployments" },
        { value: "99.9%", label: "Uptime SLA" }
      ]
    },
    {
      leftLogoText: "ZWS",
      rightLogoText: "Salesforce",
      hasPlusDivider: true,
      slideHeading: "CRM Integration Mastery",
      slideDescription: "Deep integration with Salesforce ecosystem enabling seamless CRM workflows and customer experience optimization across industries.",
      metrics: [
        { value: "300+", label: "Integrations" },
        { value: "100%", label: "Data Sync Rate" }
      ]
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="w-full bg-fuchsia-50 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white tracking-tight">
            Partner Spotlight
          </h2>
        </div>

        {/* Dynamic Slider Window Container Frame */}
        <div className="w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-300">
          
          <div className="flex flex-col items-center text-center">
            
            {/* Logo Partnership Badge Headers Block */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              
              {/* LEFT LOGO SLOT FRAME PLACEHOLDER */}
              <div className="min-w-[80px] h-14 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm px-4">
                <span className="text-slate-800 dark:text-white text-base font-semibold tracking-tight">
                  {activeSlide.leftLogoText}
                </span>
              </div>
              
              {activeSlide.hasPlusDivider && (
                <span className="text-[#207373] dark:text-[#207373] text-2xl font-bold select-none">
                  +
                </span>
              )}
              
              {/* RIGHT LOGO SLOT FRAME PLACEHOLDER */}
              <div className="min-w-[120px] h-14 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm px-4">
                <span className="text-slate-800 dark:text-white text-base font-semibold tracking-tight">
                  {activeSlide.rightLogoText}
                </span>
              </div>
            </div>

            {/* Content Segment Block */}
            <h3 className="text-slate-800 dark:text-white text-2xl sm:text-3xl font-semibold mb-4 tracking-tight leading-none">
              {activeSlide.slideHeading}
            </h3>
            
            <p className="text-slate-500 dark:text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-3xl mb-8">
              {activeSlide.slideDescription}
            </p>

            {/* Metric Displays Bar Stack */}
            {activeSlide.metrics && (
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 pt-6 border-t border-slate-100 dark:border-gray-800 w-full max-w-xl">
                {activeSlide.metrics.map((metric, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <span className="text-[#207373] dark:[#207373] text-3xl sm:text-4xl font-semibold tracking-tight leading-none mb-2">
                      {metric.value}
                    </span>
                    <span className="text-slate-400 dark:text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
            
          </div>

          {/* Sliding Carousel Controls Footer Navigation Paddles */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full border border-slate-200 dark:border-gray-700 flex items-center justify-center shadow-sm text-slate-500 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors select-none text-lg font-medium"
              aria-label="Previous Spotlight slide"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full border border-slate-200 dark:border-gray-700 flex items-center justify-center shadow-sm text-slate-500 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors select-none text-lg font-medium"
              aria-label="Next Spotlight slide"
            >
              →
            </button>
          </div>

        </div>

        {/* Global Structural Redirect Trigger Footer */}
        <div className="mt-10">
          <button className="h-12 px-6 bg-white dark:bg-gray-900 text-slate-600 dark:text-gray-300 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-800 font-semibold text-base transition-colors duration-200 shadow-sm">
            View All Partners
          </button>
        </div>

      </div>
    </section>
  );
}