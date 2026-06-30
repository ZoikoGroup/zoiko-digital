"use client";
import React, { useState } from "react";
import {
  Cloud,
  Shield,
  BarChart3,
  Smartphone,

} from "lucide-react";

export default function ZoikoWebPage() {

  // Core Data Sets
  const metrics = [
    { value: "30%", text: "Cut compliance costs (validated by PwC audit)" },
    { value: "99.999%", text: "Improved uptime (client SLA data)" },
    { value: "15", text: "Expanded to new markets (2025 client portfolio)" },
  ];

  const caseStudies = [
    {
      badge: "Telecom",
      title: "45% faster deployment",
      quote: '"ZOIKO DIGITAL helped us scale to 15 markets in 6 months"',
      author: "— CIO, TelecomX",
    },
    {
      badge: "Healthcare",
      title: "60% fraud reduction",
      quote: '"ZOIKO DIGITAL Compliance AI transformed our operations"',
      author: "— CFO, HealthPlus",
    },
    {
      badge: "Finance",
      title: "99.9% uptime achieved",
      quote: '"Mission-critical reliability delivered consistently"',
      author: "— CTO, FinanceFirst",
    },
  ];

  const solutions = [
    {
      title: "Cloud Infrastructure",
      desc: "ABC Healthcare reduced claim fraud by 60% with ZOIKO DIGITAL Compliance AI",
      link: "Explore More in Cloud Solutions",
      icon: <Cloud className="w-8 h-8 text-white" />,
    },
    {
      title: "Security & Compliance",
      desc: "Global Bank enhanced security posture by 80% with ZOIKO DIGITAL SecureStack",
      link: "Explore More in Security",
      icon: <Shield className="w-8 h-8 text-white" />,
    },
    {
      title: "Analytics & AI",
      desc: "RetailCorp increased conversion rates by 35% with ZOIKO DIGITAL Analytics",
      link: "Explore More in Analytics",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
    },
    {
      title: "Digital Transformation",
      desc: "ManufacturePlus digitized 95% of processes with ZOIKO DIGITAL Platform",
      link: "Explore More in Digital",
      icon: <Smartphone className="w-8 h-8 text-white" />,
    },
  ];

  

  return (
    <div className="w-full bg-white text-zinc-800 font-sans antialiased selection:bg-teal-500 selection:text-white dark:bg-gray-900 dark:text-white">
    

      {/* ================= HERO HERO STATS SECTION ================= */}
      <section className="relative w-full bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 py-16 lg:py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Real Results. Proven Impact.
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90 mb-12">
            Bank cut onboarding time by 45% with ZOIKO DIGITAL Cloud
          </p>

          {/* Flex Metric Display Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-10 max-w-4xl mx-auto mb-12">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center ">
                <span className="text-2xl lg:text-3xl font-black mb-2">{m.value}</span>
                <span className="text-xs lg:text-base font-normal max-w-[340px] leading-6">{m.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto h-12 px-8 bg-white text-sky-900 font-semibold rounded-lg shadow-md hover:bg-slate-50 transition-all">
              Explore Client Success Stories
            </button>
            <button className="w-full sm:w-auto h-12 px-8 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              Download Full Report
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURED CASE STUDIES ================= */}
      <section className="w-full bg-fuchsia-50/50 py-20 px-6 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-sky-900 text-3xl font-bold tracking-tight mb-12 dark:text-teal-400">
            Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((card, idx) => (
              <div key={idx} className="relative bg-white rounded-2xl shadow-md border border-neutral-100 overflow-hidden flex flex-col justify-between p-8 hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                {/* Top Status Border Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-fuchsia-700 to-sky-900" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-teal-700 text-white text-xs font-bold rounded-full">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-sky-900 text-2xl font-bold mb-4 leading-snug dark:text-white">
                    {card.title}
                  </h3>
                  
                  {/* Quote Styling Block */}
                  <div className="border-l-4 border-teal-700 pl-4 my-6">
                    <p className="text-stone-500 text-base italic mb-2 leading-relaxed dark:text-gray-300">
                      {card.quote}
                    </p>
                    <span className="text-sky-900 text-xs font-bold uppercase tracking-wider block dark:text-teal-400">
                      {card.author}
                    </span>
                  </div>
                </div>

                {/* Interaction CTA Interfaces */}
                <div className="space-y-3 pt-4">
                  <button className="w-44 h-11 border-2 border-sky-900 text-sky-900 hover:bg-sky-900 hover:text-white font-semibold rounded-lg transition-all text-sm dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-500 dark:hover:text-white">
                    Read Case Study
                  </button>
                  <button className="w-44 h-9 bg-slate-100 hover:bg-slate-200 text-zinc-800 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                       Watch Testimonial
                    </button>
                     <button className="w-44 h-9 bg-slate-100 hover:bg-slate-200 text-zinc-800 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                      Download Summary
                    </button>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUCCESS BY SOLUTION AREA ================= */}
      <section className="w-full bg-sky-50 py-20 px-6 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-sky-900 text-3xl font-bold tracking-tight mb-12 dark:text-teal-400">
            Success by Solution Area
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Wrapper Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    {sol.icon}
                  </div>
                  <h3 className="text-sky-900 text-lg font-bold mb-3 dark:text-white">
                    {sol.title}
                  </h3>
                  <p className="text-stone-500 text-sm font-normal leading-relaxed mb-6 dark:text-gray-300">
                    {sol.desc}
                  </p>
                </div>

                <button className="inline-flex items-center justify-center gap-1.5 text-sky-900 hover:text-teal-700 text-xs font-semibold group transition-all mt-auto pt-2 border-t border-slate-100 w-full text-center dark:text-teal-400 dark:border-gray-700 dark:hover:text-teal-300">
                  <span>{sol.link}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROADMAP MIDDLE CTA CALLOUT ================= */}
      <section className="w-full bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 py-16 px-6 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-base md:text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Get a tailored roadmap for your industry, built on proven results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <button className="w-full sm:flex-1 h-14 bg-white text-sky-900 font-semibold text-sm rounded-lg shadow-md hover:bg-slate-50 transition-colors">
              Talk to a ZOIKO DIGITAL Success Architect
            </button>
            <button className="w-full sm:flex-1 h-14 border-2 border-white text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-colors">
              Request Custom Benchmark Report
            </button>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="w-full bg-zinc-100 py-16 px-6 md:px-15 transition-colors duration-300 dark:bg-gray-800/50">
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
                  href="mailto:hello@zws.com"
                  className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                >
                  hello@zws.com
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