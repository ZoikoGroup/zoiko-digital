"use client";
import React from 'react';

export default function ZoikoTrustCenter() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 text-slate-800 dark:text-white font-sans selection:bg-teal-500 selection:text-white antialiased">
      
      {/* =========================================================================
          2. HERO HERO HERO BANNER
          ========================================================================= */}
      <section className="relative w-full bg-gradient-to-br from-indigo-950 via-teal-800 to-teal-500 py-24 text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[108px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[58px]">
              Your Trust <br />
              Our Commitment
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal max-w-xl leading-relaxed">
              Enterprise-grade security, global compliance, and complete transparency — independently audited.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button className="px-9 py-3 bg-white text-cyan-950 text-base font-semibold rounded-lg shadow-md hover:bg-slate-50 transition-colors">
                Access Security & Compliance Resources
              </button>
            </div>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white text-base font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Explore the Zoiko Digital Trust Center
            </button>
          </div>
          
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-[6px] border border-white/20 rounded-[50px] p-4 px-6 flex items-center gap-3 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </span>
              <p className="text-white text-sm font-medium tracking-wide">
                Operational - <span className="font-bold text-green-300">99.999%</span> uptime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SECURITY PRACTICES (DEFENSE IN DEPTH)
          ========================================================================= */}
      <section className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="max-w-[1200px] mx-auto px-6 bg-emerald-50/70 dark:bg-emerald-950/20 rounded-3xl p-10 md:p-14 border border-emerald-100/50 dark:border-emerald-900/30 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Stack Diagram Graphics (Matched to Figma structure) */}
          <div className="lg:col-span-6 flex flex-col gap-4 justify-center items-center">
            <div className="w-[100%] max-w-md p-4 bg-emerald-500 text-white font-bold text-center rounded-xl shadow-md transition-transform hover:-translate-y-0.5">
              Application Layer
            </div>
            <div className="w-[90%] max-w-[380px] p-4 bg-emerald-500/90 text-white font-bold text-center rounded-xl shadow-md transition-transform hover:-translate-y-0.5">
              Network Layer
            </div>
            <div className="w-[80%] max-w-[340px] p-4 bg-emerald-500/80 text-white font-bold text-center rounded-xl shadow-md transition-transform hover:-translate-y-0.5">
              Infrastructur Layer
            </div>
            <div className="w-[70%] max-w-[280px] p-4 bg-emerald-500/70 text-white font-bold text-center rounded-xl shadow-md transition-transform hover:-translate-y-0.5">
              Physical Layer
            </div>
          </div>

          {/* Core Content Specs */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 dark:text-teal-400">
              Security Practices (Defense in Depth)
            </h2>
            
            <div className="space-y-6">
              {[
                { title: 'Multi-layer encryption', desc: 'In transit & at rest' },
                { title: 'Zero-trust access framework', desc: 'Never trust, always verify' },
                { title: '24/7 Security Operations Center (SOC)', desc: 'Continuous monitoring & response' },
                { title: 'Independent penetration testing', desc: 'Continuous security validation' }
              ].map((practice, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div>
                    <h4 className="text-lg font-bold text-sky-950 dark:text-gray-200">{practice.title}</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-sm font-normal">{practice.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="px-6 py-3 border border-sky-900 dark:border-teal-500 text-sky-900 dark:text-teal-400 hover:bg-sky-900 dark:hover:bg-teal-500 hover:text-white transition-all text-base font-semibold rounded-lg">
                Download Security Whitepaper
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. COMPLIANCE & REGULATORY PROOFS
          ========================================================================= */}
      <section className="w-full py-20 bg-sky-50/50 dark:bg-gray-800/40 border-y border-sky-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-sky-950 dark:text-white mb-12">
            Compliance (Regulatory Proofs)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { cat: 'Healthcare', tags: 'HIPAA • HITECH', info: 'Health Insurance Portability and Accountability Act compliance for protected health information.' },
              { cat: 'Financial Services', tags: 'PCI-DSS • SOX', info: 'Payment Card Industry Data Security Standard and Sarbanes-Oxley Act compliance.' },
              { cat: 'Public Sector', tags: 'FedRAMP • GDPR', info: 'Federal Risk and Authorization Management Program and General Data Protection Regulation.' },
              { cat: 'Enterprise/General', tags: 'ISO 27001 • SOC 2 Type II', info: 'International standards for information security management systems.' }
            ].map((box, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-slate-200/80 dark:border-gray-700 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-3 mb-6">
                  <h3 className="text-xl font-bold text-sky-950 dark:text-white">{box.cat}</h3>
                  <span className="inline-block bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 px-2.5 py-1 text-xs font-bold rounded-md tracking-wider uppercase">
                    {box.tags}
                  </span>
                  <p className="text-slate-500 dark:text-gray-300 text-sm md:text-base leading-relaxed pt-2">
                    {box.info}
                  </p>
                </div>
                <button className="w-full sm:w-56 py-2.5 text-center text-sky-900 dark:text-teal-400 hover:bg-sky-50 dark:hover:bg-gray-700/50 border-2 border-sky-900/60 dark:border-teal-500/60 hover:border-sky-900 dark:hover:border-teal-500 text-base font-semibold rounded-lg transition-colors">
                  Download Certificate
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3.5 bg-sky-900 dark:bg-teal-700 hover:bg-sky-950 dark:hover:bg-teal-800 text-white text-base font-semibold rounded-lg shadow-md transition-all">
              Request Enterprise Compliance Package
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. TRANSPARENCY REPORTS
          ========================================================================= */}
      <section className="w-full py-20 bg-fuchsia-50/40 dark:bg-gray-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-800 dark:text-teal-400 mb-12">
            Transparency Reports (Operational Integrity)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Real-time Uptime */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-slate-200/80 dark:border-gray-700 shadow-sm flex flex-col justify-between">
              <h3 className="text-lg font-bold text-sky-950 dark:text-white">Real-time Uptime</h3>
              <div className="my-6">
                <span className="text-3xl font-bold text-teal-700 dark:text-teal-400 block">99.999%</span>
                <div className="w-full h-2 bg-slate-200 dark:bg-gray-700 rounded-sm mt-3 overflow-hidden">
                  <div className="w-[99.999%] h-full bg-green-400 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* SLA Performance */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-slate-200/80 dark:border-gray-700 shadow-sm flex flex-col justify-between">
              <h3 className="text-lg font-bold text-sky-950 dark:text-white">SLA Performance</h3>
              <div className="my-4">
                <span className="text-base font-semibold text-teal-700 dark:text-teal-400 block leading-snug">
                  Target: 99.9% <br />Actual: 99.999%
                </span>
              </div>
              <div className="p-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-600 rounded-md text-center text-xs text-slate-500 dark:text-gray-300 font-medium">
                Monthly/Quarterly Chart
              </div>
            </div>

            {/* Incident History */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-slate-200/80 dark:border-gray-700 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-sky-950 dark:text-white">Incident History</h3>
              <span className="text-sm font-semibold text-teal-700 dark:text-teal-400 block">
                3 incidents (last 24 months)
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-green-100 dark:bg-green-950/50 text-green-800 dark:text-green-300 font-medium rounded">Q2 2024 - Resolved in 2h</div>
                <div className="p-2 bg-green-100 dark:bg-green-950/50 text-green-800 dark:text-green-300 font-medium rounded">Q4 2023 - Resolved in 1h</div>
                <div className="p-2 bg-green-100 dark:bg-green-950/50 text-green-800 dark:text-green-300 font-medium rounded">Q1 2023 - Resolved in 30min</div>
              </div>
            </div>

            {/* Law Enforcement Requests */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-slate-200/80 dark:border-gray-700 shadow-sm flex flex-col justify-between">
              <h3 className="text-lg font-bold text-sky-950 dark:text-white">Law Enforcement Requests</h3>
              <div className="my-2">
                <span className="text-2xl font-bold text-teal-700 dark:text-teal-400 block">0 requests</span>
                <span className="text-sm font-medium text-slate-500 dark:text-gray-400">disclosed</span>
              </div>
              <p className="text-sky-950 dark:text-gray-300 text-xs font-normal leading-relaxed border-t dark:border-gray-700 pt-2">
                Complete transparency in government data requests
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3.5 bg-teal-700 hover:bg-teal-800 text-white text-base font-semibold rounded-lg shadow-md transition-all">
              View Full Transparency Archive
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. DATA PRIVACY & CONTROL MAP
          ========================================================================= */}
      <section className="w-full py-20 bg-slate-50 dark:bg-gray-800/20 border-t border-slate-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Virtual Simulated Map Regions Block */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl h-80 relative p-6 shadow-inner overflow-hidden border border-slate-300/40 dark:border-gray-600/40">
            <div className="absolute top-[20%] left-[15%] text-center">
              <div className="size-3 bg-teal-700 dark:bg-teal-400 rounded-full mx-auto animate-pulse"></div>
              <span className="text-xs font-bold text-sky-900 dark:text-teal-300 block mt-1">US</span>
            </div>
            <div className="absolute top-[15%] left-[40%] text-center">
              <div className="size-3 bg-teal-700 dark:bg-teal-400 rounded-full mx-auto animate-pulse"></div>
              <span className="text-xs font-bold text-sky-900 dark:text-teal-300 block mt-1">EU</span>
            </div>
            <div className="absolute top-[35%] left-[80%] text-center">
              <div className="size-3 bg-teal-700 dark:bg-teal-400 rounded-full mx-auto animate-pulse"></div>
              <span className="text-xs font-bold text-sky-900 dark:text-teal-300 block mt-1">APAC</span>
            </div>
            <div className="absolute top-[50%] left-[45%] text-center">
              <div className="size-3 bg-teal-700 dark:bg-teal-400 rounded-full mx-auto animate-pulse"></div>
              <span className="text-xs font-bold text-sky-900 dark:text-teal-300 block mt-1">Africa</span>
            </div>
            <div className="absolute top-[70%] left-[25%] text-center">
              <div className="size-3 bg-teal-700 dark:bg-teal-400 rounded-full mx-auto animate-pulse"></div>
              <span className="text-xs font-bold text-sky-900 dark:text-teal-300 block mt-1">LatAm</span>
            </div>
          </div>

          {/* Controls Details */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-bold text-sky-950 dark:text-white">
              Data Privacy (Global Control)
            </h2>
            
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-sky-950 dark:text-gray-200">Regional Residency Guarantee</h4>
              <p className="text-slate-500 dark:text-gray-400 text-sm pb-2">Your data stays where you specify</p>
              <button className="px-4 py-2 border border-sky-900 dark:border-teal-500 text-sky-900 dark:text-teal-400 hover:bg-sky-50 dark:hover:bg-gray-800 text-sm font-semibold rounded-md transition-colors">
                Request Guarantee
              </button>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-lg font-bold text-sky-950 dark:text-gray-200">Bring Your Own Key (BYOK)</h4>
              <p className="text-slate-500 dark:text-gray-400 text-sm pb-2">Complete control over encryption keys</p>
              <button className="px-4 py-2 border border-sky-900 dark:border-teal-500 text-sky-900 dark:text-teal-400 hover:bg-sky-50 dark:hover:bg-gray-800 text-sm font-semibold rounded-md transition-colors">
                Learn More
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-gray-700">
              <button className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white text-base font-semibold rounded-lg text-center transition-colors">
                Explore Data Residency Options
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. RESPONSIBLE AI
          ========================================================================= */}
      <section className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-sky-950 dark:text-white mb-12">
            Responsible AI (Ethics & Governance)
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Endorsement Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-slate-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
              <h3 className="text-xl font-bold text-sky-950 dark:text-white mb-4">Ethics Board Endorsements</h3>
              <blockquote className="text-slate-600 dark:text-gray-300 italic text-base leading-relaxed my-auto">
                "Zoiko Digital demonstrates exceptional commitment to ethical AI practices."
              </blockquote>
              <cite className="text-teal-700 dark:text-teal-400 text-sm font-semibold not-italic block mt-6 pt-4 border-t border-slate-100 dark:border-gray-700">
                — Dr. Sarah Johnson, AI Ethics Board Chair
              </cite>
            </div>

            {/* Principles Pill Badges Grid */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-slate-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-bold text-sky-950 dark:text-white text-center mb-6">AI Principles</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Fairness', 'Non-Bias', 'Transparency', 'Explainability'].map((term) => (
                  <div key={term} className="bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-500 text-white p-4 font-bold text-center text-sm rounded-lg shadow-sm">
                    {term}
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-slate-200 dark:border-gray-700 shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-sky-950 dark:text-white">Case Studies</h3>
              <div>
                <h4 className="text-base font-bold text-sky-900 dark:text-teal-400">Ethical AI in Healthcare Compliance</h4>
                <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">How we ensure AI decisions meet HIPAA requirements</p>
              </div>
              <div className="border-t border-slate-100 dark:border-gray-700 pt-3">
                <h4 className="text-base font-bold text-sky-900 dark:text-teal-400">Bias Detection in Financial Services</h4>
                <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">Preventing discriminatory outcomes in AI-driven decisions</p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3.5 bg-teal-700 hover:bg-teal-800 text-white text-base font-semibold rounded-lg shadow-md">
              Review Responsible AI Policy
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. TRANSFORM / CONTACT BLOCK
          ========================================================================= */}
      <section className="w-full bg-zinc-100 py-16 px-6 md:px-15 transition-colors duration-300 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ================= LEFT COLUMN: DETAILS ================= */}
          <div className="flex flex-col gap-12 pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-[34px]">
              <h2 className="text-zinc-800 dark:text-white text-xl lg:text-[32px] font-bold leading-8 lg:leading-9">
                Ready to Transform
                <br />
                Your Business?
              </h2>
              <p className="text-neutral-600 dark:text-gray-300 text-base lg:text-lg font-normal leading-7">
                Connect with our global team of experts to discuss your digital
                <br className="hidden lg:block" />
                transformation journey and discover how we can accelerate your
                <br className="hidden lg:block" />
                success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <img
                    src="/images/about/SVG.svg"
                    alt="Email Icon"
                    className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@zoikodigital.com"
                    className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                  >
                    hello@zoikodigital.com
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">
                    Response within 4 hours
                  </span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <img
                    src="/images/about/SVG-1.svg"
                    alt="Phone Icon"
                    className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">
                    Call Us
                  </h4>
                  <a
                    href="tel:+15551234567"
                    className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">
                    24/7 Support Available
                  </span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <img
                    src="/images/about/SVG-2.svg"
                    alt="Chat Icon"
                    className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">
                    Live Chat
                  </h4>
                  <span className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6">
                    Instant Support
                  </span>
                  <div className="flex items-center gap-2 mt-0 lg:mt-1">
                    <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6">
                      Online now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="bg-white dark:bg-gray-800 rounded-[20px] p-8 md:p-10 border border-neutral-300 dark:border-gray-700 w-full lg:max-w-[572px] lg:ml-auto shadow-sm dark:shadow-black/20 transition-colors duration-300">
            <form className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Business Email
                </label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Service Interest
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">
                      Select a service
                    </option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="web">Web Development</option>
                    <option value="compliance">Compliance</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-zinc-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Project Budget
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">
                      Select budget range
                    </option>
                    <option value="small">Under $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="large">$50,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-zinc-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Project Details
                </label>
                <textarea
                  className="w-full h-28 p-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-zinc-800 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-56 h-14 self-start bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 hover:from-teal-600 hover:to-indigo-900 dark:from-teal-600 dark:via-teal-700 dark:to-teal-500 text-white text-base font-semibold rounded-xl transition-all shadow-sm"
              >
                Start Your Project
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}