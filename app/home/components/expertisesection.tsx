"use client";

import { useState } from "react";
import Image from "next/image";

const sectors = [
  { title: "Government" },
  { title: "FinTech" },
  { title: "Healthcare" },
  { title: "Education" },
  { title: "Retail" },
];

const sectorContent = {
  heading: "Government & Public Sector",
  description:
    "Transforming public services through secure, compliant, and citizen-centric digital solutions that enhance transparency and efficiency.",
  features: [
    "Citizen service portals",
    "Digital identity solutions",
  ],
  stats: [
    { value: "25+", label: "Government Projects" },
    { value: "8", label: "Countries" },
  ],
  image: "/images/services-solutions/washington-dc-at-the-white-house.png",
};

export default function SectorExpertiseSection() {
  const [activeSector, setActiveSector] = useState(0);

  const sector = sectorContent;

  return (
    <section className="bg-white dark:bg-gray-900 py-12 md:py-20 lg:py-16 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Sector Expertise
          </h2>
          <p className="text-base md:text-lg text-zinc-500 dark:text-gray-400 leading-relaxed md:leading-8">
            Deep domain knowledge across critical industries, ensuring
            solutions that meet specific regulatory, operational, and
            strategic requirements.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_440px] gap-8 md:gap-12 items-start">
          
          {/* Left Tabs (Scrollable on small mobile viewports) */}
          <div className="flex sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-3 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0 scrollbar-none snap-x">
            {sectors.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSector(index)}
                className={`flex-shrink-0 snap-center w-[160px] sm:w-full h-14 md:h-16 rounded-xl border text-center sm:text-left px-4 sm:px-6 text-sm md:text-base font-medium transition-all ${
                  activeSector === index
                    ? "bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 text-white border-[#9C4DCC]"
                    : "bg-white dark:bg-gray-800 text-black dark:text-gray-200 border-stone-300 dark:border-gray-700 hover:border-[#9C4DCC]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Middle Content */}
          <div className="w-full">
            <h3 className="text-2xl md:text-[27px] font-bold text-[#207373] dark:text-teal-400 mb-4 md:mb-6">
              {sector.heading}
            </h3>

            <p className="text-zinc-500 dark:text-gray-300 text-base md:text-lg leading-relaxed md:leading-8 max-w-xl mb-6 md:mb-8">
              {sector.description}
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-9">
              {sector.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 text-black dark:text-white text-base md:text-lg"
                >
                  <span className="text-[#9C4DCC] text-xl font-bold">→</span>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex gap-8 md:gap-16 border-t border-zinc-100 dark:border-gray-800 pt-6">
              {sector.stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-2xl md:text-3xl font-bold text-[#207373] dark:text-teal-400 mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-zinc-500 dark:text-gray-400 text-xs md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[350px] overflow-hidden rounded-2xl md:rounded-[32px] border border-zinc-200 dark:border-gray-700 shadow-md">
            <Image
              src={sector.image}
              alt={sector.heading}
              fill
              className="object-cover"
              sizes="(max-w-1024px) 100vw, 440px"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}