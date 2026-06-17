"use client";
import React from "react";

interface BriefingCard {
  title: string;
  description: string;
  features: string[];
  iconPath: string;
}

export default function ExecutiveBriefings() {
  const cards: BriefingCard[] = [
    {
      title: "Executive Updates",
      description: "Strategic insights, industry trends, and business impact analysis.",
      iconPath: "/images/Knowledgehub/basil_user-solid.png", // Replace with your Icon 1 path
      features: [
        "Monthly executive briefings",
        "Industry trend reports",
        "Strategic recommendations",
      ],
    },
    {
      title: "Developer Alerts",
      description: "API updates, new features, technical documentation, and code examples.",
      iconPath: "/images/Knowledgehub/mingcute_code-fill.png", // Replace with your Icon 2 path
      features: [
        "API release notifications",
        "Technical tutorials",
        "Code samples & guides",
      ],
    },
    {
      title: "Compliance Digest",
      description: "Regulatory updates, compliance requirements, and legal changes.",
      iconPath: "/images/Knowledgehub/si_lock-fill.png", // Replace with your Icon 3 path
      features: [
        "Weekly compliance updates",
        "Regulatory change alerts",
        "Best practice guides",
      ],
    },
  ];

  return (
    <section className="w-full bg-fuchsia-50 dark:bg-gray-955 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 dark:text-white leading-tight">
            Executive Briefings, Developer Alerts & Compliance Updates
          </h2>
          <p className="mt-3 text-slate-500 dark:text-gray-400 text-base sm:text-lg font-normal">
            Curated updates tailored to your role — straight to your inbox.
          </p>
        </div>

        {/* ================= SUBSCRIPTION CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-gray-900 rounded-xl p-8 border border-slate-200 dark:border-gray-800 flex flex-col justify-between shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow duration-200 min-h-[460px]"
            >
              <div>
                {/* Icon Wrapper Frame with temporary placeholder paths */}
                <div className="w-10 h-10 bg-fuchsia-100 dark:bg-fuchsia-950/40 rounded-lg flex items-center justify-center mb-6 overflow-hidden p-2">
                  <img
                    className="w-full h-full object-contain dark:brightness-0 dark:invert"
                    src={card.iconPath}
                    alt={`${card.title} icon`}
                  />
                </div>

                {/* Card Context */}
                <h3 className="text-fuchsia-700 dark:text-fuchsia-400 text-xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-300 text-base font-normal leading-relaxed mb-6 min-h-[72px]">
                  {card.description}
                </p>

                {/* Checklist Features mapping block */}
                <ul className="flex flex-col gap-3.5">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <span className="text-emerald-500 text-base font-semibold select-none leading-none">
                        ✓
                      </span>
                      <span className="text-slate-500 dark:text-gray-400 text-sm font-normal leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card CTA Subscribe Button */}
              <div className="pt-6">
                <button className="w-full h-11 border border-fuchsia-700 dark:border-fuchsia-500 text-fuchsia-700 dark:text-fuchsia-400 hover:bg-fuchsia-700/5 dark:hover:bg-fuchsia-500/5 text-sm font-semibold rounded-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PRIMARY MASTER GLOBAL CTA BUTTON ================= */}
        <div className="flex justify-center">
          <button className="h-12 px-8 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold text-base rounded-lg shadow-sm hover:shadow active:scale-[0.99] transition-all duration-200">
            Subscribe to All Updates
          </button>
        </div>

      </div>
    </section>
  );
}