"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-800 dark:bg-gray-900 dark:text-white selection:bg-teal-500/30 transition-colors duration-300">
      {/* 1. Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#11103d] via-[#0f766e] to-[#2dd4bf] py-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
            Ready to Accelerate Your Digital Growth?
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-8 max-w-3xl">
            World-class digital ecosystems that transform how businesses grow, connect, and lead across five continents
          </p>
          <button className="mt-6 px-8 py-4 bg-white rounded-[50px] shadow-[0px_4px_20px_0px_rgba(144,80,159,0.30)] text-[#0f766e] text-base font-bold font-['Inter'] hover:bg-teal-50 transition-colors w-72 h-14 flex items-center justify-center">
            Start Your Digital Journey
          </button>
        </div>
      </section>

      {/* 2. Our Mission */}
      <section className="w-full bg-sky-50 dark:bg-gray-800/50 py-16 px-6 flex flex-col items-center justify-center text-center border-b border-slate-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <h2 className="text-sky-900 dark:text-teal-400 text-2xl md:text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
            To make every brand we touch more resilient, intelligent, and globally competitive through engineering precision, creative vision, and compliance integrity.
          </p>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="w-full bg-white dark:bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 dark:text-white text-3xl md:text-4xl font-bold mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 dark:border-gray-700 p-8 flex flex-col gap-4">
              <h3 className="text-slate-700 dark:text-teal-400 text-2xl font-bold">Web & Application Development</h3>
              <ul className="flex flex-col gap-3 text-slate-600 dark:text-gray-300 text-base font-normal list-disc list-inside">
                <li>Responsive Websites, CMS Platforms, eCommerce, and Booking Engines</li>
                <li>Custom Web Applications (React, Laravel, Node.js)</li>
                <li>Native & Cross-Platform Mobile Apps (iOS, Android, Flutter)</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 dark:border-gray-700 p-8 flex flex-col gap-4">
              <h3 className="text-slate-700 dark:text-teal-400 text-2xl font-bold">IT Infrastructure & Cloud Services</h3>
              <ul className="flex flex-col gap-3 text-slate-600 dark:text-gray-300 text-base font-normal list-disc list-inside">
                <li>Domain Hosting, VPS, CDN, SSL, DNS & Cloud Platforms</li>
                <li>Remote IT Support, Helpdesk, DaaS & Managed Services</li>
                <li>Cybersecurity Monitoring, Threat Detection, Disaster Recovery</li>
                <li>Cloud Migration, SaaS Implementation, DevOps & API Integration</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 dark:border-gray-700 p-8 flex flex-col gap-4">
              <h3 className="text-slate-700 dark:text-teal-400 text-2xl font-bold font-['Inter']">Compliance & Regulatory Technology</h3>
              <ul className="flex flex-col gap-3 text-slate-600 dark:text-gray-300 text-base font-normal list-disc list-inside">
                <li>GDPR, CCPA, CPRA, PCI DSS & SOC 2 Implementation</li>
                <li>E911, DOT, FMCSA Compliance for Telecom, Logistics & Transport</li>
                <li>Legal-Tech Integrations for Regulated Enterprises</li>
              </ul>
            </div>
            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 dark:border-gray-700 p-8 flex flex-col gap-4">
              <h3 className="text-slate-700 dark:text-teal-400 text-2xl font-bold font-['Inter']">Branding, Marketing & Creative</h3>
              <ul className="flex flex-col gap-3 text-slate-600 dark:text-gray-300 text-base font-normal list-disc list-inside">
                <li>Brand Identity, Naming, Rebranding & Corporate Communications</li>
                <li>Paid Media (Meta, Google, LinkedIn, TikTok) & Digital Strategy</li>
                <li>SEO, SEM, CRM Automation, Email Campaigns</li>
                <li>Reels, Product Explainers, Motion Graphics & Creative Direction</li>
                <li>Printing, Signage, Event Branding & Retail Collateral</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Philosophy */}
      <section className="w-full bg-sky-900 dark:bg-gray-950 py-20 px-6 text-center text-white">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 text-white">Our Philosophy</h2>
          <p className="text-white/80 text-xl font-normal mb-12">World-class digital solutions must be:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-slate-200 dark:border-gray-700 p-6 flex flex-col items-center gap-3">
              <h3 className="text-sky-900 dark:text-teal-400 text-lg font-bold">Engineered with Intent</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm font-normal">Every line of code, every design decision serves a strategic purpose</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-slate-200 dark:border-gray-700 p-6 flex flex-col items-center gap-3">
              <h3 className="text-sky-900 dark:text-teal-400 text-lg font-bold">Designed for People</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm font-normal">Human-centered experiences that resonate across cultures</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-slate-200 dark:border-gray-700 p-6 flex flex-col items-center gap-3">
              <h3 className="text-sky-900 dark:text-teal-400 text-lg font-bold">Secured for Scale</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm font-normal">Enterprise-grade security that grows with your ambitions</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-slate-200 dark:border-gray-700 p-6 flex flex-col items-center gap-3">
              <h3 className="text-sky-900 dark:text-teal-400 text-lg font-bold">Compliant Across Borders</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm font-normal">Global standards that respect local regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Global Delivery Model */}
      <section className="w-full bg-purple-50 dark:bg-gray-800/30 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-sky-900 dark:text-white text-3xl font-bold mb-2">Our Global Delivery Model</h2>
          <p className="text-gray-500 dark:text-gray-300 text-xl font-normal mb-12">Distributed excellence with regional capabilities across five continents</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-[10px] border border-slate-300 dark:border-gray-700 p-6 flex flex-col items-center gap-3">
              <h3 className="text-slate-500 dark:text-teal-400 text-xl font-bold">North America</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm font-normal">USA — Commercial Leadership, Enterprise Sales, AI-led Development</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-[10px] border border-slate-300 dark:border-gray-700 p-6 flex flex-col items-center gap-3">
              <h3 className="text-slate-500 dark:text-teal-400 text-xl font-bold">Europe</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm font-normal">UK & EU — Strategic Compliance, Regulatory IT Solutions</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-[10px] border border-slate-300 dark:border-gray-700 p-6 flex flex-col items-center gap-3">
              <h3 className="text-slate-500 dark:text-teal-400 text-xl font-bold">Asia-Pacific</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm font-normal">India, Southeast Asia — Engineering, Cloud Infrastructure, Cybersecurity</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-[10px] border border-slate-300 dark:border-gray-700 p-6 flex flex-col items-center gap-3 sm:col-span-2 lg:col-span-1 lg:col-start-1">
              <h3 className="text-slate-500 dark:text-teal-400 text-xl font-bold">Africa</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm font-normal">Nigeria, Kenya, South Africa, Ghana, Rwanda — Creative Studios, Government Digitalization, Marketing Delivery</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-[10px] border border-slate-300 dark:border-gray-700 p-6 flex flex-col items-center gap-3 sm:col-span-2 lg:col-span-1">
              <h3 className="text-slate-500 dark:text-teal-400 text-xl font-bold">Caribbean</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm font-normal">Startup Enablement, Digital Finance, BPO Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. A Division of Zoiko Tech */}
      <section className="w-full bg-white dark:bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#11103d] via-[#0f766e] to-[#2dd4bf] rounded-[20px] p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">A Division of Zoiko Tech</h2>
          <p className="text-zinc-100 text-base font-normal max-w-4xl mx-auto mb-12 opacity-90">
            One of several high-impact verticals delivering solutions trusted by startups, governments, NGOs, and corporates. Zoiko Digital is the cross-industry digital transformation engine of Zoiko Tech combining Tier-1 compliance, AI-driven innovation, and measurable impact to help businesses and consumer brands thrive globally.
          </p>

          {/* Division Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
            {[
              { t: 'Telecommunications', d: 'End-to-end web and mobile applications for MVNOs, self-care portals, OSS/BSS integrations, and real-time connectivity platforms.' },
              { t: 'Fintech', d: 'Secure payment gateways, remittance platforms, compliance automation, and AI-driven RegTech applications.' },
              { t: 'AI & Business Tech', d: 'Enterprise productivity platforms, workflow automation, cloud-native applications, and intelligent business solutions.' },
              { t: 'Healthcare', d: 'Telemedicine portals, digital health platforms, clinical nutrition apps, and patient engagement systems driving accessibility and compliance.' },
              { t: 'Foods & Consumer Brands', d: 'QSR ordering systems, e-commerce storefronts, supply chain management solutions for food brands, enabling faster go-to-market strategies.' },
              { t: 'Media', d: 'OTT streaming platforms, digital communities, content monetisation tools, and engagement apps proven to increase user interaction by up to 3x.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 rounded-2xl border border-white/20 p-6 backdrop-blur-[5px] flex flex-col justify-center min-h-[160px]">
                <h3 className="text-lg font-bold mb-2 text-white">{item.t}</h3>
                <p className="text-sm font-normal opacity-90 text-zinc-100">{item.d}</p>
              </div>
            ))}
          </div>

          {/* Core Verticals Subheader Divider */}
          <div className="flex items-center gap-4 my-10 w-full max-w-4xl mx-auto">
            <div className="h-px bg-slate-500 flex-1"></div>
            <h2 className="text-2xl font-bold text-white">Core Verticals</h2>
            <div className="h-px bg-slate-500 flex-1"></div>
          </div>

          {/* Core Verticals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[
              { t: 'Web & App Development', d: 'Future-ready websites, mobile apps, and enterprise platforms engineered for scale and user experience.' },
              { t: 'Cloud & Infrastructure', d: 'Tier-1 cloud and infrastructure solutions, ensuring security, compliance, and 99.99% uptime for mission-critical operations.' },
              { t: 'Compliance & RegTech', d: 'AI-powered governance and cross-border compliance automation — proven to cut regulatory costs by up to 40%.' },
              { t: 'Branding & Digital Marketing', d: 'Performance-driven strategies and campaigns that build visibility, trust, and measurable business growth.' },
              { t: 'Printing & Signage', d: 'On-demand commercial printing and signage solutions that combine precision, speed, and global delivery reach.' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white/10 rounded-2xl border border-white/20 p-6 backdrop-blur-[5px] flex flex-col justify-center min-h-[160px] ${idx === 3 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-lg font-bold mb-2 text-white">{item.t}</h3>
                <p className="text-sm font-normal opacity-90 text-zinc-100">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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