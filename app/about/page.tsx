import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="w-full bg-gradient-to-r from-gray-800 via-fuchsia-800 to-cyan-900 h-80 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold font-['Inter'] leading-tight md:leading-[89.60px]">
            Ready to Accelerate Your Digital Growth?
          </h1>
          <p className="text-white text-lg md:text-xl font-normal font-['Inter'] leading-8 max-w-[855px]">
            World-class digital ecosystems that transform how businesses<br className="hidden md:block" />grow, connect, and lead across five continents
          </p>
          <button className="mt-6 px-8 py-4 bg-white rounded-[50px] shadow-[0px_4px_20px_0px_rgba(144,80,159,0.30)] text-fuchsia-700 text-base font-bold font-['Inter'] hover:bg-zinc-50 transition-colors w-72 h-14 flex items-center justify-center">
            Start Your Digital Journey
          </button>
        </div>
      </section>

      {/* 2. Our Mission */}
      <section className="w-full bg-sky-50 h-60 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <h2 className="text-sky-900 text-2xl md:text-[32px] font-bold font-['Inter']">Our Mission</h2>
          <p className="text-gray-500 text-lg md:text-xl font-normal font-['Inter'] leading-relaxed">
            To make every brand we touch more resilient, intelligent, and globally<br className="hidden md:block" />competitive through engineering precision, creative vision, and compliance integrity.
          </p>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-3xl md:text-4xl font-bold font-['Inter'] mb-12">What We Do</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 p-8 flex flex-col gap-6">
              <h3 className="text-fuchsia-700 text-2xl font-bold font-['Inter']">Web & Application Development</h3>
              <ul className="flex flex-col gap-4 text-slate-700 text-base font-normal font-['Inter']">
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Responsive Websites, CMS Platforms, eCommerce, and Booking Engines</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Custom Web Applications (React, Laravel, Node.js)</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Native & Cross-Platform Mobile Apps (iOS, Android, Flutter)</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 p-8 flex flex-col gap-6">
              <h3 className="text-fuchsia-700 text-2xl font-bold font-['Inter']">IT Infrastructure & Cloud Services</h3>
              <ul className="flex flex-col gap-4 text-slate-700 text-base font-normal font-['Inter']">
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Domain Hosting, VPS, CDN, SSL, DNS & Cloud Platforms</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Remote IT Support, Helpdesk, DaaS & Managed Services</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Cybersecurity Monitoring, Threat Detection, Disaster Recovery</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Cloud Migration, SaaS Implementation, DevOps & API Integration</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 p-8 flex flex-col gap-6">
              <h3 className="text-fuchsia-700 text-2xl font-bold font-['Inter']">Compliance & Regulatory Technology</h3>
              <ul className="flex flex-col gap-4 text-slate-700 text-base font-normal font-['Inter']">
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> GDPR, CCPA, CPRA, PCI DSS & SOC 2 Implementation</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> E911, DOT, FMCSA Compliance for Telecom, Logistics & Transport</li>
                <li className="flex items-start gap-3"><span className="text-fuchsia-700 mt-1 text-xs">●</span> Legal-Tech Integrations for Regulated Enterprises</li>
              </ul>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] border border-slate-200 p-8 flex flex-col gap-6">
              <h3 className="text-fuchsia-700 text-2xl font-bold font-['Inter']">Branding, Marketing & Creative</h3>
              <ul className="flex flex-col gap-4 text-slate-700 text-base font-normal font-['Inter']">
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
          <h2 className="text-3xl md:text-[32px] font-bold font-['Inter'] mb-4">Our Philosophy</h2>
          <p className="text-white/90 text-lg md:text-xl font-normal font-['Inter'] mb-12">World-class digital solutions must be:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-[#1e445f] text-[17px] font-bold font-['Inter'] leading-snug">Engineered with Intent</h3>
              <p className="text-slate-600 text-[15px] font-normal font-['Inter'] leading-relaxed">Every line of code, every design decision serves a strategic purpose</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-[#1e445f] text-[17px] font-bold font-['Inter'] leading-snug">Designed for People</h3>
              <p className="text-slate-600 text-[15px] font-normal font-['Inter'] leading-relaxed">Human-centered experiences that resonate across cultures</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-[#1e445f] text-[17px] font-bold font-['Inter'] leading-snug">Secured for Scale</h3>
              <p className="text-slate-600 text-[15px] font-normal font-['Inter'] leading-relaxed">Enterprise-grade security that grows with your ambitions</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-[#1e445f] text-[17px] font-bold font-['Inter'] leading-snug">Compliant Across Borders</h3>
              <p className="text-slate-600 text-[15px] font-normal font-['Inter'] leading-relaxed">Global standards that respect local regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Global Delivery Model */}
      <section className="w-full bg-[#faf5fb] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-sky-900 text-3xl md:text-4xl font-bold font-['Inter'] mb-4">Our Global Delivery Model</h2>
          <p className="text-gray-500 text-lg md:text-xl font-normal font-['Inter'] mb-12">Distributed excellence with regional capabilities across five continents</p>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl w-full">
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold font-['Inter']">North America</h3>
              <p className="text-gray-500 text-[15px] font-normal font-['Inter'] leading-relaxed">USA — Commercial Leadership, Enterprise Sales, AI-led Development</p>
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold font-['Inter']">Europe</h3>
              <p className="text-gray-500 text-[15px] font-normal font-['Inter'] leading-relaxed">UK & EU — Strategic Compliance, Regulatory IT Solutions</p>
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold font-['Inter']">Asia-Pacific</h3>
              <p className="text-gray-500 text-[15px] font-normal font-['Inter'] leading-relaxed">India, Southeast Asia — Engineering, Cloud Infrastructure, Cybersecurity</p>
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold font-['Inter']">Africa</h3>
              <p className="text-gray-500 text-[15px] font-normal font-['Inter'] leading-relaxed">Nigeria, Kenya, South Africa, Ghana, Rwanda — Creative Studios, Government Digitalization, Marketing Delivery</p>
            </div>
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-fuchsia-700/50 p-8 flex flex-col items-center text-center gap-4">
              <h3 className="text-fuchsia-700 text-lg font-bold font-['Inter']">Caribbean</h3>
              <p className="text-gray-500 text-[15px] font-normal font-['Inter'] leading-relaxed">Startup Enablement, Digital Finance, BPO Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. A Division of Zoiko Tech */}
      <section className="w-full bg-white py-16 px-6 flex justify-center">
        <div className="w-full max-w-[1224px] bg-gradient-to-br from-sky-900 to-fuchsia-700 rounded-[20px] py-16 px-4 md:px-10 text-center text-white flex flex-col items-center">

          <div className="flex flex-col gap-4 max-w-[952px] mx-auto mb-12">
            <h2 className="text-2xl md:text-[32px] font-bold font-['Inter'] leading-tight md:leading-[64px]">A Division of Zoiko Tech</h2>
            <p className="text-zinc-100 text-sm md:text-base font-normal font-['Inter'] leading-6 opacity-90 mx-auto">
              One of several high-impact verticals delivering solutions trusted by startups, governments, NGOs, and corporates. ZWS is the cross-industry digital transformation engine of Zoiko Tech combining Tier-1 compliance, AI-driven innovation, and measurable impact to help businesses and consumer brands thrive globally.
            </p>
          </div>

          {/* 6 Grid items */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[952px]">
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Telecommunications</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">End-to-end web and mobile applications for MVNOs, self-care portals, OSS/BSS integrations, and real-time connectivity platforms.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Fintech</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">Secure payment gateways, remittance platforms, compliance automation, and AI-driven RegTech applications.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">AI & Business Tech</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">Enterprise productivity platforms, workflow automation, cloud-native applications, and intelligent business solutions.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Media</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">OTT streaming platforms, digital communities, content monetisation tools, and engagement apps proven to increase user interaction by up to 3x.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Healthcare</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">Telemedicine portals, digital health platforms, clinical nutrition apps, and patient engagement systems driving accessibility and compliance.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Foods & Consumer Brands</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">QSR ordering systems, e-commerce storefronts, supply chain management solutions for food brands, enabling faster go-to-market strategies.</p>
            </div>
          </div>

          <div className="flex items-center w-full max-w-[952px] mx-auto gap-4 my-10">
            <div className="h-0 border-t-2 border-slate-500 flex-1"></div>
            <h2 className="text-2xl font-bold font-['Inter'] text-white">Core Verticals</h2>
            <div className="h-0 border-t-2 border-slate-500 flex-1"></div>
          </div>

          {/* 5 Core Verticals Grid */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[952px]">
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Web & App Development</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">Future-ready websites, mobile apps, and enterprise platforms engineered for scale and user experience.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Cloud & Infrastructure</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">Tier-1 cloud and infrastructure solutions, ensuring security, compliance, and 99.99% uptime for mission-critical operations.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Compliance & RegTech</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">AI-powered governance and cross-border compliance automation — proven to cut regulatory costs by up to 40%.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Branding & Digital Marketing</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">Performance-driven strategies and campaigns that build visibility, trust, and measurable business growth.</p>
            </div>
            <div className="w-[288px] h-[160px] bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] flex flex-col items-center justify-center p-4">
              <h3 className="text-lg font-bold font-['Inter'] mb-2">Printing & Signage</h3>
              <p className="text-[14px] font-normal font-['Inter'] opacity-90 leading-6 px-1">On-demand commercial printing and signage solutions that combine precision, speed, and global delivery reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Form Section */}
      <section className="w-full bg-zinc-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="flex flex-col gap-12 pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-[34px]">
              <h2 className="text-zinc-800 text-xl lg:text-[32px] font-bold font-['Inter'] leading-8 lg:leading-9">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-neutral-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
                Connect with our global team of experts to discuss your digital<br className="hidden lg:block" />transformation journey and discover how we can accelerate your<br className="hidden lg:block" />success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG.svg" alt="Email Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold font-['Inter'] leading-7">Email Us</h4>
                  <a href="mailto:hello@zws.com" className="text-zinc-400 text-sm lg:text-base font-normal font-['Inter'] leading-6 hover:text-sky-900 transition-colors">hello@zws.com</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal font-['Inter'] leading-6 mt-0 lg:mt-1">Response within 4 hours</span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-1.svg" alt="Phone Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold font-['Inter'] leading-7">Call Us</h4>
                  <a href="tel:+15551234567" className="text-zinc-400 text-sm lg:text-base font-normal font-['Inter'] leading-6 hover:text-sky-900 transition-colors">+1 (555) 123-4567</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal font-['Inter'] leading-6 mt-0 lg:mt-1">24/7 Support Available</span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-2.svg" alt="Chat Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold font-['Inter'] leading-7">Live Chat</h4>
                  <span className="text-zinc-400 text-sm lg:text-base font-normal font-['Inter'] leading-6">Instant Support</span>
                  <div className="flex items-center gap-2 mt-0 lg:mt-1">
                    <span className="text-zinc-500 text-xs lg:text-sm font-normal font-['Inter'] leading-6">Online now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-8 md:p-10 border border-neutral-400 w-full lg:max-w-[572px] lg:ml-auto">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Full Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Business Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Company</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Service Interest</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 rounded-lg border border-stone-300 appearance-none text-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all">
                    <option value="" disabled className="text-neutral-400">Select a service</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="web">Web Development</option>
                    <option value="compliance">Compliance</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Budget</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 rounded-lg border border-stone-300 appearance-none text-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all">
                    <option value="" disabled className="text-neutral-400">Select budget range</option>
                    <option value="small">Under $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="large">$50,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Details</label>
                <textarea
                  className="w-full h-28 p-4 bg-neutral-100 rounded-lg border border-stone-300 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all text-zinc-800 placeholder-neutral-400"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-56 h-14 self-start bg-gradient-to-r from-fuchsia-700 to-sky-900 hover:from-fuchsia-800 hover:to-sky-950 text-white text-base font-semibold font-['Inter'] rounded-xl transition-all"
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
