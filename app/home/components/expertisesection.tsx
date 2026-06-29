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
  image: "/images/government.jpg",
};

export default function SectorExpertiseSection() {
  const [activeSector, setActiveSector] = useState(0);

  const sector = sectorContent;

  return (
    <section className="bg-white py-20 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-black mb-4">
            Sector Expertise
          </h2>

          <p className="text-lg text-zinc-500 leading-8">
            Deep domain knowledge across critical industries, ensuring
            solutions that meet specific regulatory, operational, and
            strategic requirements.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[300px_1fr_440px] gap-12 items-start">
          {/* Left Tabs */}
          <div className="space-y-3">
            {sectors.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSector(index)}
                className={`w-full h-16 rounded-xl border text-left px-6 text-base transition-all ${
                  activeSector === index
                    ? "bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 text-white border-[#9C4DCC]"
                    : "bg-white text-black border-stone-300 hover:border-[#9C4DCC]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Middle Content */}
          <div>
            <h3 className="text-[27px] font-bold text-[#207373] mb-6">
              {sector.heading}
            </h3>

            <p className="text-zinc-500 text-lg leading-8 max-w-xl mb-8">
              {sector.description}
            </p>

            <div className="space-y-4 mb-9">
              {sector.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-black text-lg"
                >
                  <span className="text-[#9C4DCC] text-xl">→</span>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex gap-16">
              {sector.stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-3xl font-bold text-[#207373] mb-2">
                    {stat.value}
                  </h4>

                  <p className="text-zinc-500 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden rounded-[32px] border border-zinc-800">
            <Image
              src="/images/services-solutions/washington-dc-at-the-white-house.png"
              alt={sector.heading}
              width={500}
              height={350}
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}