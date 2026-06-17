"use client";
import React, { useState } from "react";
import PartnerSpotlight from "./partnerspotlight";

// Types Definitions
interface PartnerCard {
  name: string;
  category: string;
  description: string;
  badges: string[];
}

interface FeatureCard {
  title: string;
  description: string;
  iconPath: string; 
}

interface ImpactStory {
  title: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  iconPath: string;
}

export default function PartnersEcosystem() {
  // Section 2: Active Tab state handling
  const [activeTab, setActiveTab] = useState<string>("Technology Partners");

  // Icons 1 to 5: Industry Tab Navigation Category Switcher Icons
  const categories = [
    { 
      name: "Technology Partners", 
      desc: "Cloud, SaaS, Cybersecurity, AI",
      iconPath: "/images/partner-ecosystem/ic_baseline-laptop.png" // Icon Path 1
    },
    { 
      name: "Telecom & Connectivity", 
      desc: "Network Infrastructure",
      iconPath: "/images/partner-ecosystem/streamline-flex_satellite-dish-solid.png" // Icon Path 2
    },
    { 
      name: "System Integrators", 
      desc: "Implementation & Resellers",
      iconPath: "/images/partner-ecosystem/ant-design_setting-filled.png" // Icon Path 3
    },
    { 
      name: "Compliance & Legal", 
      desc: "Advisory & Certification",
      iconPath: "/images/partner-ecosystem/fa7-solid_legal.png" // Icon Path 4
    },
    { 
      name: "Industry Alliances", 
      desc: "Healthcare, Finance, Gov, Retail",
      iconPath: "/images/partner-ecosystem/material-symbols_factory-rounded.png" // Icon Path 5
    },
  ];

  const partnersData: Record<string, PartnerCard[]> = {
    "Technology Partners": [
      {
        name: "Microsoft",
        category: "Cloud Platform",
        description: "Hybrid cloud solutions and enterprise integration",
        badges: ["Gold Partner", "Azure Certified"],
      },
      {
        name: "Salesforce",
        category: "CRM & SaaS",
        description: "Seamless CRM workflows and customer management",
        badges: ["ISV Partner", "AppExchange"],
      },
      {
        name: "AWS",
        category: "Cloud Infrastructure",
        description: "Scalable cloud computing and data analytics",
        badges: ["Advanced Partner", "Well-Architected"],
      },
      {
        name: "Google Cloud",
        category: "AI & ML Platform",
        description: "Artificial intelligence and machine learning solutions",
        badges: ["Premier Partner", "AI Specialist"],
      },
    ],
    "Telecom & Connectivity": [
      {
        name: "Cisco Systems",
        category: "Enterprise Networks",
        description: "Next-generation software-defined routing and automated infrastructure architectures.",
        badges: ["Global Gold", "SD-WAN Certified"],
      },
    ],
    "System Integrators": [],
    "Compliance & Legal": [],
    "Industry Alliances": [],
  };

  // Icons 6 to 11: Unique Why Partner Proposition Card Icons
  const featureCards: FeatureCard[] = [
    {
      title: "Multi-Industry Reach",
      description: "Access diverse markets across telecommunications, healthcare, finance, government, and retail sectors worldwide.",
      iconPath: "/images/partner-ecosystem/fa_globe.png", // Icon Path 6
    },
    {
      title: "Compliance & Certification Support",
      description: "Leverage our expertise in GDPR, HIPAA, SOC 2, PCI DSS, and FedRAMP to accelerate joint solution delivery.",
      iconPath: "/images/partner-ecosystem/mdi_shield-tick.png", // Icon Path 7
    },
    {
      title: "Joint Go-To-Market Opportunities",
      description: "Collaborate on sales initiatives, co-selling programs, and market expansion strategies.",
      iconPath: "/images/partner-ecosystem/bxs_rocket (1).png", // Icon Path 8
    },
    {
      title: "Technical Enablement & API Access",
      description: "Comprehensive developer resources, APIs, SDKs, and technical support for seamless integration.",
      iconPath: "/images/partner-ecosystem/lsicon_setting-filled (1).png", // Icon Path 9
    },
    {
      title: "Co-Branded Marketing Programs",
      description: "Joint marketing campaigns, thought leadership content, and event participation opportunities.",
      iconPath: "/images/partner-ecosystem/bitcoin-icons_graph-filled.png", // Icon Path 10
    },
    {
      title: "Global Scale, Local Expertise",
      description: "Benefit from our worldwide presence with deep local market knowledge and regulatory understanding.",
      iconPath: "/images/partner-ecosystem/ix_user-success-filled.png", // Icon Path 11
    },
  ];

  // Icons 12 to 14: Unique Ecosystem Impact Card Emerald Block Icons
  const impactStories: ImpactStory[] = [
    {
      title: "Healthcare Compliance Acceleration",
      description: "Healthcare provider achieved HIPAA compliance 50% faster through our collaboration with specialized legal advisory partners, reducing time-to-market for critical patient care applications.",
      tags: ["Healthcare Partner", "Legal Advisory"],
      metric: "50% Faster",
      metricLabel: "Compliance Achievement",
      iconPath: "/images/partner-ecosystem/solar_hospital-bold.png", // Icon Path 12
    },
    {
      title: "Global Retail Expansion",
      description: "Major retail brand scaled operations across three continents using our integrated cloud and telecom ecosystem, achieving seamless omnichannel experiences worldwide.",
      tags: ["Cloud Partners", "Telecom Network"],
      metric: "3 Continents",
      metricLabel: "Rapid Expansion",
      iconPath: "/images/partner-ecosystem/fa_globe (1).png", // Icon Path 13
    },
    {
      title: "Government Digital Transformation",
      description: "Public sector organization modernized citizen services through our technology and compliance partner network, improving service delivery by 60% while maintaining strict security standards.",
      tags: ["Gov Tech Partners", "Security Specialists"],
      metric: "60% Improvement",
      metricLabel: "Service Delivery",
      iconPath: "/images/partner-ecosystem/streamline_web-solid.png", // Icon Path 14
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* =========================================================
          SECTION 1: HERO SECTION (GLOBAL ECOSYSTEM)
          ========================================================= */}
      <section className="w-full bg-gradient-to-br from-zinc-600 to-cyan-900 dark:from-gray-900 dark:to-zinc-950 text-white py-16 px-6 sm:px-12 lg:px-[108px] transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              A Global Ecosystem <br />
              of <span className="text-fuchsia-100 dark:text-fuchsia-400">Trusted Partners</span>
            </h1>
            <p className="text-white/90 dark:text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8">
              Zoiko Web Services collaborates with technology leaders, system integrators, and industry innovators to deliver scalable, compliant, and future-ready solutions for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-flex items-center justify-center h-12 px-6 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold text-base rounded-lg shadow-sm transition-colors duration-200">
                Become a Partner
              </a>
              <a href="#" className="inline-flex items-center justify-center h-12 px-6 border border-white hover:bg-white/10 text-white font-semibold text-base rounded-lg transition-colors duration-200">
                Explore Partner Network
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[640px] aspect-[640/384] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                className="w-full h-full object-cover" 
                src="/images/partner-ecosystem/couple.png" 
                alt="Ecosystem partnership layout placeholder" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 & 3: CATEGORY SWITCHER & NETWORK PARTNERS LIST
          ========================================================= */}
      <section className="w-full bg-slate-50 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Switcher Tabs - exactly 5 unique card structures mapping to paths 1-5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14 w-full">
            {categories.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex flex-col items-center justify-center p-5 rounded-xl border text-center transition-all duration-200 w-full min-h-[144px] ${
                  activeTab === tab.name
                    ? "bg-white dark:bg-gray-900 border-fuchsia-700 dark:border-fuchsia-500 shadow-md ring-1 ring-fuchsia-700/20"
                    : "bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 shadow-sm hover:border-slate-300 dark:hover:border-gray-700"
                }`}
              >
                {/* Background removed, padding cleared to allow full fidelity raw asset rendering */}
                <div className="w-9 h-9 flex items-center justify-center mb-3 overflow-hidden">
                  <img src={tab.iconPath} className="w-full h-full object-contain" alt={`${tab.name} Tab Icon`} />
                </div>
                <span className="text-slate-800 dark:text-white text-sm font-semibold mb-1 block leading-tight">
                  {tab.name}
                </span>
                <span className="text-slate-400 dark:text-gray-400 text-xs font-normal max-w-[180px] line-clamp-1">
                  {tab.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Active Tab Partners Grid Render Area */}
          <div className="w-full">
            {partnersData[activeTab] && partnersData[activeTab].length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {partnersData[activeTab].map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-slate-200 dark:border-gray-800 shadow-sm flex flex-col justify-between items-center text-center min-h-[288px] w-full group hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-full flex flex-col items-center">
                      <h3 className="text-slate-800 dark:text-white text-2xl font-semibold mb-1 tracking-tight">
                        {partner.name}
                      </h3>
                      <span className="text-slate-400 dark:text-gray-500 text-sm font-normal uppercase tracking-wide mb-4 block">
                        {partner.category}
                      </span>
                      <p className="text-slate-500 dark:text-gray-300 text-sm sm:text-base font-normal leading-relaxed max-w-[220px]">
                        {partner.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
                      {partner.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-3 py-1 bg-fuchsia-700 text-white text-xs font-semibold rounded-full shadow-sm"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800 max-w-6xl mx-auto">
                <p className="text-slate-400 dark:text-gray-500 text-base">
                  No partners currently registered under {activeTab}. Check back soon!
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================
          PARTNER SPOTLIGHT CAROUSEL (MICROSOFT & SALESFORCE)
          ========================================================= */}
      <PartnerSpotlight/>

      {/* =========================================================
          SECTION 4: WHY PARTNER WITH ZOIKO WEB SERVICES?
          ========================================================= */}
      <section className="w-full bg-sky-50 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white">
              Why Partner with Zoiko Web Services?
            </h2>
          </div>

          {/* 3x2 Grid - background layer color code cleared */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-slate-200 dark:border-gray-800 shadow-sm flex flex-col items-center text-center justify-center min-h-[280px]"
              >
                {/* Background frame color cleared to match original clean asset imports */}
                <div className="w-10 h-10 flex items-center justify-center mb-5 overflow-hidden">
                  <img src={card.iconPath} className="w-full h-full object-contain" alt={`${card.title} Icon`} />
                </div>
                <h3 className="text-sky-900 dark:text-sky-400 text-lg sm:text-xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-300 text-sm sm:text-base font-normal leading-relaxed max-w-xs">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 5: GROW WITH ZOIKO WEB SERVICES (PORTAL BRIEF)
          ========================================================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-fuchsia-700/5 to-sky-900/5 dark:from-fuchsia-950/10 dark:to-sky-950/20 rounded-2xl border border-slate-200 dark:border-gray-800 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white mb-3">
              Grow With Zoiko Web Services
            </h2>
            <p className="text-slate-500 dark:text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mb-8">
              Join our ecosystem of trusted partners and expand your reach through collaboration, co-innovation, and joint market opportunities.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {[
                "Access to exclusive partner portal and resources",
                "Joint solution development opportunities",
                "Co-marketing and lead sharing programs",
                "Technical training and certification paths",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3.5 text-slate-500 dark:text-gray-300">
                  <span className="text-emerald-500 text-lg font-semibold select-none leading-none">✓</span>
                  <span className="text-sm sm:text-base font-normal leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="h-12 px-6 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold text-base rounded-lg shadow-sm transition-colors duration-200">
                Apply to Become a Partner
              </button>
              <button className="h-12 px-6 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 font-semibold text-base rounded-lg transition-colors duration-200">
                Download Partner Program Guide
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-end h-full min-h-[220px] pb-4">
            <div className="flex items-end gap-3.5 h-36 border-b border-slate-200 dark:border-gray-700 px-4 w-full justify-center">
              <div className="w-10 bg-gradient-to-t from-fuchsia-700 to-sky-900 rounded-t-sm h-14 animate-pulse"></div>
              <div className="w-10 bg-gradient-to-t from-fuchsia-700 to-sky-900 rounded-t-sm h-24"></div>
              <div className="w-10 bg-gradient-to-t from-fuchsia-700 to-sky-900 rounded-t-sm h-28"></div>
              <div className="w-10 bg-gradient-to-t from-fuchsia-700 to-sky-900 rounded-t-sm h-36"></div>
            </div>
            <span className="mt-3 text-slate-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider block">
              Partner Growth
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 6: ECOSYSTEM IMPACT STORIES (EMERALD)
          ========================================================= */}
      <section className="w-full bg-emerald-50 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white">
              Ecosystem Impact Stories
            </h2>
          </div>

          {/* 3 cards mapping directly to separate paths 12, 13, and 14 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {impactStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-gray-800 shadow-sm flex flex-col justify-between min-h-[440px]"
              >
                <div>
                  {/* Clean image slot container frame with background emerald color class removed */}
                  <div className="w-14 h-14 mb-6 overflow-hidden">
                    <img src={story.iconPath} className="w-full h-full object-contain" alt={`${story.title} Card Icon`} />
                  </div>
                  <h3 className="text-emerald-500 dark:text-emerald-400 text-lg sm:text-xl font-semibold leading-snug mb-3">
                    {story.title}
                  </h3>
                  <p className="text-slate-500 dark:text-gray-300 text-sm font-normal leading-relaxed mb-6">
                    {story.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {story.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-slate-50 dark:bg-gray-800 text-slate-500 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-full bg-slate-50 dark:bg-gray-800 rounded-lg border border-slate-200 dark:border-gray-700 p-4 text-center">
                    <span className="text-emerald-500 dark:text-emerald-400 text-2xl font-semibold block mb-0.5">
                      {story.metric}
                    </span>
                    <span className="text-slate-400 dark:text-gray-500 text-xs font-normal uppercase tracking-wide">
                      {story.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="h-12 px-6 bg-white dark:bg-gray-900 text-emerald-500 dark:text-emerald-400 rounded-lg border border-emerald-500 dark:border-emerald-500 hover:bg-emerald-500/5 font-semibold text-base transition-colors duration-200">
              Read Partner Success Stories
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 7: TOGETHER, We BUILD THE FUTURE (FOOTER SIGNPOST)
          ========================================================= */}
      <section className="w-full bg-fuchsia-50 dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 dark:text-white leading-tight mb-4">
            Together, We Build the Future
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mb-8">
            Join our growing ecosystem of partners and create innovative solutions that transform industries worldwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="h-12 px-6 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold text-base rounded-lg shadow-sm transition-colors duration-200">
              Join the Ecosystem
            </button>
            <button className="h-12 px-6 bg-white dark:bg-gray-800 text-fuchsia-700 dark:text-fuchsia-400 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700 font-semibold text-base shadow-sm transition-all duration-200">
              Talk to Our Partner Team
            </button>
            <button className="h-12 px-4 text-fuchsia-700 dark:text-fuchsia-400 font-semibold text-base hover:underline transition-all">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}