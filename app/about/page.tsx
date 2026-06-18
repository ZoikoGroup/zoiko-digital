import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="w-full bg-gradient-to-r from-gray-800 via-fuchsia-800 to-cyan-900 h-80 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold  leading-tight md:leading-[89.60px]">
            Ready to Accelerate Your Digital Growth?
          </h1>
          <p className="text-white text-lg md:text-xl font-normal  leading-8 max-w-[855px]">
            World-class digital ecosystems that transform how businesses<br className="hidden md:block" />grow, connect, and lead across five continents
          </p>
          <button className="mt-6 px-8 py-4 bg-white rounded-[50px] shadow-[0px_4px_20px_0px_rgba(144,80,159,0.30)] text-fuchsia-700 text-base font-bold    hover:bg-zinc-50 transition-colors w-72 h-14 flex items-center justify-center">
            Start Your Digital Journey
          </button>
        </div>
      </section>

      {/* 2. Our Mission */}
      <section className="w-full bg-sky-50 h-60 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <h2 className="text-sky-900 text-2xl md:text-[32px] font-bold ">Our Mission</h2>
          <p className="text-gray-500 text-lg md:text-xl font-normal    leading-relaxed">
            To make every brand we touch more resilient, intelligent, and globally<br className="hidden md:block" />competitive through engineering precision, creative vision, and compliance integrity.
          </p>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-3xl md:text-4xl font-bold  mb-12">What We Do</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 p-8 flex flex-col gap-6">
              <h3 className="text-fuchsia-700 text-2xl font-bold   ">Web & Application Development</h3>
              <ul className="flex flex-col gap-4 text-slate-700 text-base font-normal   ">
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Responsive Websites, CMS Platforms, eCommerce, and Booking Engines</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Custom Web Applications (React, Laravel, Node.js)</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Native & Cross-Platform Mobile Apps (iOS, Android, Flutter)</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 p-8 flex flex-col gap-6">
              <h3 className="text-fuchsia-700 text-2xl font-bold   ">IT Infrastructure & Cloud Services</h3>
              <ul className="flex flex-col gap-4 text-slate-700 text-base font-normal   ">
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Domain Hosting, VPS, CDN, SSL, DNS & Cloud Platforms</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Remote IT Support, Helpdesk, DaaS & Managed Services</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Cybersecurity Monitoring, Threat Detection, Disaster Recovery</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Cloud Migration, SaaS Implementation, DevOps & API Integration</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 p-8 flex flex-col gap-6">
              <h3 className="text-fuchsia-700 text-2xl font-bold   ">Compliance & Regulatory Technology</h3>
              <ul className="flex flex-col gap-4 text-slate-700 text-base font-normal   ">
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> GDPR, CCPA, CPRA, PCI DSS & SOC 2 Implementation</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> E911, DOT, FMCSA Compliance for Telecom, Logistics & Transport</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Legal-Tech Integrations for Regulated Enterprises</li>
              </ul>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 p-8 flex flex-col gap-6">
              <h3 className="text-fuchsia-700 text-2xl font-bold   ">Branding, Marketing & Creative</h3>
              <ul className="flex flex-col gap-4 text-slate-700 text-base font-normal   ">
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Brand Identity, Naming, Rebranding & Corporate Communications</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Paid Media (Meta, Google, LinkedIn, TikTok) & Digital Strategy</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> SEO, SEM, CRM Automation, Email Campaigns</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Reels, Product Explainers, Motion Graphics & Creative Direction</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Printing, Signage, Event Branding & Retail Collateral</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Philosophy */}
      <section className="w-full bg-[#1e445f] py-16 px-6 text-center text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-[32px] font-bold    mb-4">Our Philosophy</h2>
          <p className="text-white/90 text-lg md:text-xl font-normal    mb-12">World-class digital solutions must be:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-[#1e445f] text-[17px] font-bold    leading-snug">Engineered with Intent</h3>
              <p className="text-slate-600 text-[15px] font-normal    leading-relaxed">Every line of code, every design decision serves a strategic purpose</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-[#1e445f] text-[17px] font-bold    leading-snug">Designed for People</h3>
              <p className="text-slate-600 text-[15px] font-normal    leading-relaxed">Human-centered experiences that resonate across cultures</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-[#1e445f] text-[17px] font-bold    leading-snug">Secured for Scale</h3>
              <p className="text-slate-600 text-[15px] font-normal    leading-relaxed">Enterprise-grade security that grows with your ambitions</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-[#1e445f] text-[17px] font-bold    leading-snug">Compliant Across Borders</h3>
              <p className="text-slate-600 text-[15px] font-normal    leading-relaxed">Global standards that respect local regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Global Delivery Model */}
      <section className="w-full bg-[#faf5fb] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-sky-900 text-3xl md:text-4xl font-bold    mb-4">Our Global Delivery Model</h2>
          <p className="text-gray-500 text-lg md:text-xl font-normal    mb-12">Distributed excellence with regional capabilities across five continents</p>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl w-full">
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold   ">North America</h3>
              <p className="text-gray-500 text-[15px] font-normal    leading-relaxed">USA — Commercial Leadership, Enterprise Sales, AI-led Development</p>
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold   ">Europe</h3>
              <p className="text-gray-500 text-[15px] font-normal    leading-relaxed">UK & EU — Strategic Compliance, Regulatory IT Solutions</p>
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold   ">Asia-Pacific</h3>
              <p className="text-gray-500 text-[15px] font-normal    leading-relaxed">India, Southeast Asia — Engineering, Cloud Infrastructure, Cybersecurity</p>
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold   ">Africa</h3>
              <p className="text-gray-500 text-[15px] font-normal    leading-relaxed">Nigeria, Kenya, South Africa, Ghana, Rwanda — Creative Studios, Government Digitalization, Marketing Delivery</p>
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold   ">Caribbean</h3>
              <p className="text-gray-500 text-[15px] font-normal    leading-relaxed">Startup Enablement, Digital Finance, BPO Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. A Division of Zoiko Tech */}
      <section className="w-full bg-white py-16 px-6 flex justify-center">
        <div className="w-full max-w-[1224px] bg-gradient-to-br from-sky-900 to-fuchsia-700 rounded-[20px] py-16 px-4 md:px-10 text-center text-white flex flex-col items-center">

          <div className="flex flex-col gap-4 max-w-[952px] mx-auto mb-12">
            <h2 className="text-2xl md:text-[32px] font-bold    leading-tight md:leading-[64px]">A Division of Zoiko Tech</h2>
            <p className="text-zinc-100 text-sm md:text-base font-normal    leading-6 opacity-90 mx-auto">
              One of several high-impact verticals delivering solutions trusted by startups, governments, NGOs, and corporates. ZWS is the cross-industry digital transformation engine of Zoiko Tech combining Tier-1 compliance, AI-driven innovation, and measurable impact to help businesses and consumer brands thrive globally.
            </p>
          </div>

          {/* 6 Grid items */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[952px]">
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Telecommunications</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">End-to-end web and mobile applications for MVNOs, self-care portals, OSS/BSS integrations, and real-time connectivity platforms.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Fintech</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">Secure payment gateways, remittance platforms, compliance automation, and AI-driven RegTech applications.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">AI & Business Tech</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">Enterprise productivity platforms, workflow automation, cloud-native applications, and intelligent business solutions.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Media</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">OTT streaming platforms, digital communities, content monetisation tools, and engagement apps proven to increase user interaction by up to 3x.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Healthcare</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">Telemedicine portals, digital health platforms, clinical nutrition apps, and patient engagement systems driving accessibility and compliance.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Foods & Consumer Brands</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">QSR ordering systems, e-commerce storefronts, supply chain management solutions for food brands, enabling faster go-to-market strategies.</p>
            </div>
          </div>

          <div className="flex items-center w-full max-w-[952px] mx-auto gap-4 my-10">
            <div className="h-0 border-t-2 border-slate-500 flex-1"></div>
            <h2 className="text-2xl font-bold    text-white">Core Verticals</h2>
            <div className="h-0 border-t-2 border-slate-500 flex-1"></div>
          </div>

          {/* 5 Core Verticals Grid */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[952px]">
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Web & App Development</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">Future-ready websites, mobile apps, and enterprise platforms engineered for scale and user experience.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Cloud & Infrastructure</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">Tier-1 cloud and infrastructure solutions, ensuring security, compliance, and 99.99% uptime for mission-critical operations.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Compliance & RegTech</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">AI-powered governance and cross-border compliance automation — proven to cut regulatory costs by up to 40%.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Branding & Digital Marketing</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">Performance-driven strategies and campaigns that build visibility, trust, and measurable business growth.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold    mb-2">Printing & Signage</h3>
              <p className="text-[14px] font-normal    opacity-90 leading-6 px-1">On-demand commercial printing and signage solutions that combine precision, speed, and global delivery reach.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
