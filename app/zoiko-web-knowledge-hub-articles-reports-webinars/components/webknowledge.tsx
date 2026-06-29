"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const categories = [
  {
    title: "Articles & Insights",
    description: "Expert analysis, industry trends, and thought leadership on digital transformation.",
    count: "120+ Articles",
    actionText: "Browse Articles",
    icon: "/images/Knowledgehub/basil_document-solid.png",
    href: "/resources/blog",
  },
  {
    title: "Case Studies",
    description: "Real-world success stories and measurable outcomes from our client partnerships.",
    count: "45+ Case Studies",
    actionText: "View Case Studies",
    icon: "/images/Knowledgehub/bi_file-earmark-bar-graph-fill.png",
    href: "/case-study",
  },
  {
    title: "Whitepapers & Reports",
    description: "In-depth research, compliance guides, and comprehensive industry reports.",
    count: "25+ Whitepapers",
    actionText: "Download Reports",
    icon: "/images/Knowledgehub/lets-icons_paper-fill.png",
    href: "/white-paper",
  },
  {
    title: "Webinars & Events",
    description: "Live sessions, recorded presentations, and interactive learning experiences.",
    count: "30+ Webinars",
    actionText: "Watch Webinars",
    icon: "/images/Knowledgehub/ph_video-camera-fill.png",
    href: "/Webinar-and-digital",
  },
  {
    title: "Developer Resources",
    description: "APIs, SDKs, integration guides, and technical documentation for builders.",
    count: "50+ Resources",
    actionText: "Access Docs",
    icon: "/images/Knowledgehub/lsicon_setting-filled.png",
    href: "/Technical-docs",
  },
  {
    title: "Compliance Updates",
    description: "Latest regulatory changes, compliance requirements, and legal updates.",
    count: "Weekly Updates",
    actionText: "Get Updates",
    icon: "/images/Knowledgehub/si_lock-fill.png",
    href: "/compliance-technology",
  },
];

export default function KnowledgeHub() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="w-full min-h-[447px] bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 text-white py-12 px-6 sm:px-12 lg:px-[58px] flex items-center transition-colors duration-300">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Content Text & Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-snug sm:leading-[53px] text-white">
              Knowledge Hub:<br className="hidden sm:inline"/>Insights that Drive Action
            </h1>
            
            <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed sm:leading-7 text-white/90 dark:text-gray-300 max-w-xl">
              Your single destination for articles, case studies, compliance
              insights, and technical resources — engineered to help
              enterprises, developers, and leaders get more from Zoiko Web
              Services.
            </p>
            
            {/* CTA Button Group */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 h-12 bg-[#207373] hover:bg-[#195959] dark:bg-teal-600 dark:hover:bg-teal-500 text-white font-semibold text-base rounded-lg shadow-md transition-colors duration-200"
              >
                Explore Resources
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 h-12 bg-white hover:bg-gray-100 text-[#207373] dark:bg-transparent dark:text-white dark:border dark:border-white dark:hover:bg-white/10 font-semibold text-base rounded-lg shadow-sm transition-colors duration-200"
              >
                Get Executive Updates
              </a>
            </div>
          </div>

          {/* Right Column: Featured Image Box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[747px] aspect-[747/320] sm:h-80 bg-slate-300 rounded-xl overflow-hidden shadow-xl border border-white/10">
              <Image 
                className="w-full h-full object-cover object-center" 
                src="/images/Knowledgehub/engineers-wearing-safety-gear.png" 
                alt="Engineers wearing safety gear"
                width={747}
                height={320}
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= FILTER AND CARDS SECTION ================= */}
      <section className="w-full bg-slate-50 dark:bg-gray-950 border-b border-slate-200 dark:border-gray-800 py-12 px-4 sm:px-8 lg:px-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white">
              Resources
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4 pb-8 border-b border-slate-200 dark:border-gray-800 mb-10">
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search articles, case studies, guides..." 
                className="w-full pl-12 pr-4 h-12 bg-white dark:bg-gray-900 dark:text-white rounded-xl border border-slate-200 dark:border-gray-700 text-base placeholder-neutral-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full mt-2">
              <div className="relative w-full sm:w-48">
                <select className="w-full h-9 px-4 bg-white dark:bg-gray-900 dark:text-white rounded-lg border border-slate-200 dark:border-gray-700 text-sm text-zinc-500 dark:text-zinc-300 focus:outline-none appearance-none cursor-pointer">
                  <option value="">Industry</option>
                </select>
              </div>
              <div className="relative w-full sm:w-36">
                <select className="w-full h-9 px-4 bg-white dark:bg-gray-900 dark:text-white rounded-lg border border-slate-200 dark:border-gray-700 text-sm text-zinc-500 dark:text-zinc-300 focus:outline-none appearance-none cursor-pointer">
                  <option value="">Resource Type</option>
                </select>
              </div>
              <div className="relative w-full sm:w-32">
                <select className="w-full h-9 px-4 bg-white dark:bg-gray-900 dark:text-white rounded-lg border border-slate-200 dark:border-gray-700 text-sm text-zinc-500 dark:text-zinc-300 focus:outline-none appearance-none cursor-pointer">
                  <option value="">Topic</option>
                </select>
              </div>
              <div className="relative w-full sm:w-32">
                <select className="w-full h-9 px-4 bg-white dark:bg-gray-900 dark:text-white rounded-lg border border-slate-200 dark:border-gray-700 text-sm text-zinc-500 dark:text-zinc-300 focus:outline-none appearance-none cursor-pointer">
                  <option value="">Date</option>
                </select>
              </div>
              <button className="w-full sm:w-auto h-8 px-4 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 text-slate-500 dark:text-zinc-300 text-sm font-normal rounded-lg border border-slate-200 dark:border-gray-700 transition-colors">
                Clear All
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-10">
              {/* Card 1 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-slate-200 dark:border-gray-800 overflow-hidden flex flex-col group hover:shadow-md dark:hover:shadow-black/20 transition-all">
                <div className="relative w-full h-48 bg-neutral-400">
                  <Image 
                    className="w-full h-full object-cover" 
                    src="/images/Knowledgehub/cloudy-sky.png" 
                    alt="Telecom Migration Case Study Thumbnail"
                    width={602}
                    height={379}
                  />
                  <span className="absolute top-4 left-4 bg-[#207373] dark:bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Case Study
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between min-h-[160px]">
                  <div>
                    <h3 className="text-slate-800 dark:text-white text-lg font-semibold leading-snug mb-2 group-hover:text-[#207373] dark:group-hover:text-teal-400 transition-colors">
                      Telecom Migration Saved 25% in Costs with ZWS Cloud
                    </h3>
                    <p className="text-slate-500 dark:text-gray-300 text-sm font-normal leading-relaxed line-clamp-2">
                      How a Tier-1 telecommunications provider reduced infrastructure costs and improved performance through strategic cloud migration.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-100 dark:border-gray-800">
                    <span className="bg-slate-50 dark:bg-gray-800 px-3 py-1 text-slate-500 dark:text-zinc-300 text-xs font-medium rounded-full">
                      Telecommunications
                    </span>
                    <span className="text-slate-400 dark:text-gray-500 text-xs font-normal">
                      Dec 2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-slate-200 dark:border-gray-800 overflow-hidden flex flex-col group hover:shadow-md dark:hover:shadow-black/20 transition-all">
                <div className="relative w-full h-48 bg-neutral-400">
                  <Image 
                    className="w-full h-full object-cover" 
                    src="/images/Knowledgehub/college-discussing.png" 
                    alt="Cross-Border Compliance Thumbnail"
                    width={497}
                    height={200}
                  />
                  <span className="absolute top-4 left-4 bg-[#207373] dark:bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Case Study
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between min-h-[160px]">
                  <div>
                    <h3 className="text-slate-800 dark:text-white text-lg font-semibold leading-snug mb-2 group-hover:text-[#207373] dark:group-hover:text-teal-400 transition-colors">
                      Cross-Border Compliance in 2025
                    </h3>
                    <p className="text-slate-500 dark:text-gray-300 text-sm font-normal leading-relaxed line-clamp-2">
                      Navigate complex global regulatory landscapes with our comprehensive guide to multi-jurisdictional compliance strategies.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-100 dark:border-gray-800">
                    <span className="bg-slate-50 dark:bg-gray-800 px-3 py-1 text-slate-500 dark:text-zinc-300 text-xs font-medium rounded-full">
                      Compliance
                    </span>
                    <span className="text-slate-400 dark:text-gray-500 text-xs font-normal">
                      Nov 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 bg-[#207373] dark:bg-teal-600 text-white rounded-full border border-slate-200 dark:border-gray-700 shadow-md transform -translate-x-2 md:-translate-x-5 hover:bg-[#195959] dark:hover:bg-teal-500 active:scale-95 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 bg-[#207373] dark:bg-teal-600 text-white rounded-full border border-slate-200 dark:border-gray-700 shadow-md transform translate-x-2 md:translate-x-5 hover:bg-[#195959] dark:hover:bg-teal-500 active:scale-95 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ================= EXPLORE BY CATEGORY GRID ================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-11 border-b border-slate-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white tracking-tight">
              Explore by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-gray-800 flex flex-col items-center text-center justify-between min-h-[320px] hover:shadow-md dark:hover:shadow-black/10 transition-shadow duration-200"
              >
                {/* Top Content Area */}
                <div className="w-full flex flex-col items-center">
                  
                  {/* Icon Wrapper Context */}
                  <div className="w-14 h-14 bg-slate-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-5 overflow-hidden p-3.5 border dark:border-gray-700 shadow-sm">
                    <img 
                      className="w-full h-full object-contain dark:brightness-0 dark:invert"
                      src={category.icon} 
                      alt={`${category.title} icon`}
                    />
                  </div>

                  <h3 className="text-[#207373] dark:text-teal-400 text-xl font-semibold mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-gray-300 text-sm sm:text-base font-normal leading-relaxed max-w-[290px]">
                    {category.description}
                  </p>
                </div>

                {/* Bottom Stats Badge & Button Actions Group */}
                <div className="w-full flex items-center justify-center gap-3 mt-6 pt-4 border-t border-slate-50 dark:border-gray-800/50">
                  <div className="px-4 py-1.5 bg-slate-50 dark:bg-gray-800 rounded-full">
                    <span className="text-slate-500 dark:text-zinc-300 text-xs font-semibold whitespace-nowrap">
                      {category.count}
                    </span>
                  </div>
                  
                  <a 
                    href="#" 
                    className="px-4 py-2 rounded-lg border border-[#207373] dark:border-teal-500 text-[#207373] dark:text-teal-400 text-sm font-medium hover:bg-[#207373] dark:hover:bg-teal-600 hover:text-white dark:hover:text-white whitespace-nowrap transition-colors duration-200"
                  >
                    {category.actionText}
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}