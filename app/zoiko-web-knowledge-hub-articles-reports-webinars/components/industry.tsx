"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ResourceCard {
  type: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
}

interface DevRelease {
  version: string;
  title: string;
  date: string;
}

interface LearningPath {
  title: string;
  level: string;
  description: string;
  icon: string;
  modules: { step: number; title: string; duration: string }[];
}

export default function KnowledgeHub() {
  // Tabs active status state tracking
  const [activeTab, setActiveTab] = useState<string>("Telecommunications");

  const industries = [
    "Telecommunications",
    "Financial Services",
    "Healthcare",
    "Government",
    "Retail",
  ];

  const telecomResources: ResourceCard[] = [
    {
      type: "Article",
      title: "5G Network Optimization Strategies",
      description: "Best practices for telecom operators implementing next-generation networks.",
      readTime: "15 min read",
      date: "Dec 2024",
    },
    {
      type: "Case Study",
      title: "Rural Connectivity: Bridging the Digital Divide",
      description: "How ZWS helped expand broadband access to underserved communities.",
      readTime: "8 min read",
      date: "Nov 2024",
    },
    {
      type: "Whitepaper",
      title: "Telecom Compliance in the 5G Era",
      description: "Regulatory considerations for next-generation wireless infrastructure.",
      readTime: "25 min read",
      date: "Oct 2024",
    },
  ];

  const devReleases: DevRelease[] = [
    {
      version: "v2.4.1",
      title: "API Performance Improvements",
      date: "Jan 15, 2025",
    },
    {
      version: "v2.4.0",
      title: "New Compliance Endpoints",
      date: "Dec 20, 2024",
    },
    {
      version: "v2.3.2",
      title: "Security Patch Update",
      date: "Dec 5, 2024",
    },
  ];

  const patchNotes = [
    "Enhanced rate limiting controls",
    "Improved error handling",
    "New webhook events",
    "Updated documentation",
  ];

  const quickStartGuides = [
    "Getting Started with ZWS API",
    "Authentication & Security",
    "SDK Integration Examples",
    "Webhook Configuration",
  ];

  const learningPaths: LearningPath[] = [
    {
      title: "Getting Started with Compliance Automation",
      level: "Beginner",
      description: "Learn the fundamentals of automated compliance and regulatory reporting.",
      icon: "/images/Knowledgehub/bxs_rocket.png",
      modules: [
        { step: 1, title: "Compliance Basics", duration: "20 min" },
        { step: 2, title: "Automation Tools", duration: "35 min" },
        { step: 3, title: "Implementation", duration: "45 min" },
      ],
    },
    {
      title: "Scaling from SMB to Enterprise Cloud",
      level: "Intermediate",
      description: "Master the strategies for scaling cloud infrastructure from small business to enterprise.",
      icon: "/images/Knowledgehub/gridicons_line-graph.png",
      modules: [
        { step: 1, title: "Architecture Planning", duration: "30 min" },
        { step: 2, title: "Migration Strategies", duration: "40 min" },
        { step: 3, title: "Performance Optimization", duration: "50 min" },
      ],
    },
  ];

  return (
    <>
      {/* ================= INTERACTIVE INDUSTRY TABS SECTION ================= */}
      <section className="w-full bg-sky-50/50 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white">
              Knowledge by Industry
            </h2>
          </div>

          {/* Tab Navigation Filter Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveTab(industry)}
                className={`h-10 px-5 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  activeTab === industry
                    ? "bg-sky-900 border-sky-900 text-white shadow-sm dark:bg-teal-600 dark:border-teal-600"
                    : "bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-500 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700"
                }`}
              >
                {industry}
              </button>
            ))}
            <button className="h-10 px-5 text-sm font-medium bg-white dark:bg-gray-800 text-slate-500 dark:text-gray-300 rounded-lg border border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors">
              View All
            </button>
          </div>

          {/* Dynamic Content View Area */}
          <div className="w-full transition-all duration-300">
            {activeTab === "Telecommunications" ? (
              
              /* ================= VIEW A: TELECOMMUNICATIONS CARD ROWS ================= */
              <div className="max-w-4xl mx-auto flex flex-col gap-6">
                {telecomResources.map((resource, index) => (
                  <div
                    key={index}
                    className="w-full bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-gray-800 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-md dark:hover:shadow-black/20 transition-all duration-200 group"
                  >
                    <div className="inline-flex items-center justify-center h-7 px-4 bg-sky-900 dark:bg-teal-600 text-white text-xs font-semibold rounded-full mb-4">
                      {resource.type}
                    </div>
                    <h3 className="text-slate-800 dark:text-white text-lg sm:text-xl font-semibold mb-2 group-hover:text-sky-900 dark:group-hover:text-teal-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-500 dark:text-gray-300 text-sm sm:text-base font-normal leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-normal text-slate-400 dark:text-gray-500">
                      <span>{resource.readTime}</span>
                      <span>{resource.date}</span>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center mt-4">
                  <button className="h-11 px-6 rounded-lg border border-sky-900 text-sky-900 dark:border-teal-500 dark:text-teal-400 text-sm font-medium hover:bg-sky-900/5 dark:hover:bg-teal-500/5 transition-colors">
                    Load More Resources
                  </button>
                </div>
              </div>
            ) : (
              
              /* ================= VIEW B: DEVELOPERS & BUILDERS PANEL (All other tabs) ================= */
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-12 border border-slate-200 dark:border-gray-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
                
                {/* Left Column Area: Documentation Guides */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="text-xs font-bold text-sky-900 dark:text-teal-400 uppercase tracking-wider mb-2">
                    Custom Solutions / {activeTab} Hub
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white mb-4">
                    For Developers & Builders
                  </h2>
                  <p className="text-slate-500 dark:text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mb-8">
                    APIs, SDKs, integration guides, and sandbox access to accelerate innovation within {activeTab}.
                  </p>
                  
                  {/* Action Link Row */}
                  <div className="flex flex-wrap gap-4 mb-10">
                    <a href="#" className="inline-flex items-center justify-center h-12 px-6 bg-[#207373] dark:bg-teal-600 hover:bg-[#195959] dark:hover:bg-teal-500 text-white font-semibold text-base rounded-lg shadow-sm transition-colors duration-200">
                      View API Docs
                    </a>
                    <Link href="/resources/documentation" className="inline-flex items-center justify-center h-12 px-6 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 font-semibold text-base rounded-lg transition-colors duration-200">
                      Download SDKs
                    </Link>
                    <Link href="/resources/apis" className="inline-flex items-center justify-center h-12 px-6 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 font-semibold text-base rounded-lg transition-colors duration-200">
                      Access Sandbox
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-slate-800 dark:text-white text-lg font-semibold mb-4">
                      Quick Start Guides
                    </h3>
                    <ul className="flex flex-col gap-3.5">
                      {quickStartGuides.map((guide, i) => (
                        <li key={i}>
                          <a href="#" className="text-[#207373] dark:text-teal-400 hover:underline text-base font-normal transition-all">
                            {guide}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column Area: Changelog Sidebar */}
                <div className="lg:col-span-5 bg-slate-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-gray-700 shadow-sm w-full ml-auto">
                  <h3 className="text-slate-800 dark:text-white text-base font-semibold mb-5">
                    Latest Dev Releases
                  </h3>
                  
                  <div className="flex flex-col gap-4 mb-6">
                    {devReleases.map((release, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-slate-200 dark:border-gray-700 flex flex-col gap-1 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                      >
                        <span className="text-fuchsia-700 dark:text-fuchsia-400 text-xs font-semibold">
                          {release.version}
                        </span>
                        <h4 className="text-slate-800 dark:text-white text-sm font-medium">
                          {release.title}
                        </h4>
                        <span className="text-slate-400 dark:text-gray-500 text-xs font-normal">
                          {release.date}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-gray-700">
                    <h4 className="text-slate-800 dark:text-white text-base font-semibold mb-3">
                      Patch Notes
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {patchNotes.map((note, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm font-normal text-slate-500 dark:text-gray-300">
                          <span className="text-fuchsia-700 dark:text-fuchsia-400 select-none">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 3: GUIDED LEARNING PATHS (EMERALD / TEAL GRADIENT)
          ========================================================= */}
      <section className="w-full bg-emerald-600 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Guided Learning Paths
            </h2>
            <p className="mt-2 text-white/90 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Structured modules for guided learning and skill development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {learningPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-gray-800 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="bg-slate-50 dark:bg-gray-800/40 p-6 sm:p-8 flex flex-col items-center text-center border-b border-slate-100 dark:border-gray-800">
                    <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4 overflow-hidden p-3.5 border dark:border-gray-700 shadow-sm">
                      <img 
                        className="w-full h-full object-contain dark:brightness-0 dark:invert"
                        src={path.icon} 
                        alt="Path header icon"
                      />
                    </div>
                    <h3 className="text-slate-800 dark:text-white text-lg sm:text-xl font-semibold leading-snug max-w-md">
                      {path.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center justify-center px-4 py-1 bg-emerald-600 dark:bg-teal-600 text-white text-xs font-semibold rounded-full shadow-sm">
                      {path.level}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col gap-4">
                    <p className="text-slate-500 dark:text-gray-300 text-sm font-normal leading-relaxed mb-2">
                      {path.description}
                    </p>

                    {path.modules.map((module) => (
                      <div 
                        key={module.step}
                        className="w-full h-12 px-4 bg-slate-50 dark:bg-gray-800/50 rounded-lg border border-slate-100 dark:border-gray-800 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-emerald-600 dark:bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-semibold shadow-sm select-none">
                            {module.step}
                          </div>
                          <span className="text-slate-800 dark:text-gray-200 text-sm font-medium truncate max-w-[180px] sm:max-w-xs">
                            {module.title}
                          </span>
                        </div>
                        <span className="text-slate-400 dark:text-gray-500 text-xs font-medium whitespace-nowrap">
                          {module.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                  <button className="w-full h-11 bg-emerald-600 dark:bg-teal-600 hover:bg-emerald-700 dark:hover:bg-teal-500 active:scale-[0.99] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200">
                    Start Learning Path
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}