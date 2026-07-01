"use client";
import { useState } from "react";
import React  from 'react';

export default function WebAppDevelopmentPage() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTechTab, setActiveTechTab] = useState('Frontend');

  const techStacks = {
    Frontend: ['React', 'Next.js', 'Vue', 'Sass/CSS3'],
    Mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    Backend: ['Node.js', 'Go', 'Python', 'GraphQL'],
    Data: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'],
    'CI/CD': ['GitHub Actions', 'Docker', 'AWS CodePipeline', 'Terraform'],
    Observability: ['Datadog', 'Prometheus', 'Grafana', 'New Relic'],
    Security: ['Auth0', 'Vault', 'SonarQube', 'Snyk']
  };

  const faqs = [
    { q: "Do we retain IP ownership of the code?", a: "" },
    { q: "What hosting and infrastructure options do you provide?", a: "" },
    { q: "What warranties and support do you offer?", a: "" },
    { q: "Do you handle SEO and analytics setup?", a: "" },
    { q: "Can you migrate our existing application?", a: "." },
    { q: "Do you support localization for multiple markets?", a: "" }
  ];

  return (
    <div>
    <section className="relative w-full bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 text-white overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Side: Content & CTA Buttons */}
          <div className="w-full lg:flex-1 space-y-6 text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold leading-[50px] font-sans">
              Build World-Class Web &<br/>Mobile Apps Secure,<br/>Scalable, Fast
            </h1>
            <p className="text-white text-lg font-normal leading-7 max-w-xl font-sans">
              We engineer mission-critical digital products with Tier-1<br/>reliability and measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start pt-2">
              <button className="w-72 h-14 bg-white hover:bg-slate-50 text-teal-700 font-bold text-base rounded-lg outline outline-1 outline-offset-[-1px] outline-white transition-colors flex items-center justify-center">
                Schedule an Architecture Review
              </button>
              <button className="w-56 h-14 hover:bg-white/10 text-white font-bold text-base rounded-lg outline outline-2 outline-offset-[-2px] outline-white transition-colors flex items-center justify-center">
                Get a Cloud Cost Audit
              </button>
            </div>
          </div>

          {/* Right Side: Diagram Hub Layout Structure (Mobile Layer Map Integrated) */}
          <div className="w-full lg:flex-1 flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            
            {/* MOBILE ONLY LAYER DIAGRAM (Matches exact Figma 384px layout structure) */}
            <div className="relative w-full max-w-[360px] h-[480px] right-[42px] sm:hidden block select-none mx-auto">
              {/* Uptime Badge */}
              <div className="w-32 h-7 left-[210px] top-[40px] absolute bg-white/10 rounded-[20px] flex items-center justify-center border border-white/5">
                <span className="text-white text-[11px] font-medium font-['Inter']">99.95% uptime</span>
              </div>

              {/* Web Platform Icon Card */}
              <div className="w-36 h-32 left-[205px] top-[85px] absolute bg-white/10 rounded-xl shadow-md border border-white/20 flex items-center justify-center">
                <img className="w-11 h-12 object-contain" src="/images/web-app-development/Symbol (12).png" alt="icon" />
              </div>

              {/* Central Laptop Container Card */}
              <div className="w-36 h-32 left-[45px] top-[160px] absolute bg-white/10 rounded-xl shadow-md border border-white/20 flex items-center justify-center">
                <div className="w-16 h-14 relative overflow-hidden flex items-center justify-center">
                  <img className="w-16 h-14 rounded-xs opacity-90 mt-[9px]" src="/images/web-app-development/bi_laptop.png" alt="icon" />
                </div>
              </div>

              {/* Mobile Device Icon Card */}
              <div className="w-36 h-32 left-[205px] top-[230px] absolute bg-white/10 rounded-xl shadow-md border border-white/20 flex items-center justify-center">
                <img className="w-9 h-12 object-contain" src="/images/web-app-development/Symbol (13).png" alt="icon" />
              </div>

              {/* Lighthouse Badge */}
              <div className="w-32 h-7 left-[50px] top-[105px] absolute bg-white/10 rounded-[20px] flex items-center justify-center border border-white/5">
                <span className="text-white text-[11px] font-medium font-['Inter']">Lighthouse 90+</span>
              </div>

              {/* OWASP Badge */}
              <div className="w-36 h-7 left-[45px] top-[315px] absolute bg-white/10 rounded-[20px] flex items-center justify-center border border-white/5">
                <span className="text-white text-[11px] font-medium font-['Inter']">OWASP-aligned SDLC</span>
              </div>
            </div>

            {/* DESKTOP/TABLET GRID SYSTEM (Preserved Perfectly) */}
            <div className="hidden sm:grid grid-cols-[auto_auto_auto] gap-6 items-center justify-center select-none">
              {/* Column 1: Lighthouse Badge */}
              <div className="flex justify-end">
                <div className="h-9 px-4 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-xs whitespace-nowrap">
                  <span className="text-white text-sm font-bold font-['Inter'] leading-6">
                    Lighthouse 90+
                  </span>
                </div>
              </div>

              {/* Column 2: Top Badge, Laptop Box, Bottom Badge */}
              <div className="flex flex-col items-center gap-5">
                {/* Uptime Badge (Top) */}
                <div className="h-9 px-4 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-xs whitespace-nowrap">
                  <span className="text-white text-sm font-bold font-['Inter'] leading-6">
                    99.95% uptime
                  </span>
                </div>

                {/* Central Laptop/Desktop Card Container */}
                <div className="w-52 h-36 relative bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-white/30 flex items-center justify-center backdrop-blur-xs">
                  <div className="size-16 relative overflow-hidden flex items-center justify-center">
                    <img className="w-16 h-14 rounded-xs opacity-90 mt-[9px]" src="/images/web-app-development/bi_laptop.png" alt="icon" />
                  </div>
                </div>

                {/* OWASP Badge (Bottom) */}
                <div className="h-10 px-4 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-xs whitespace-nowrap">
                  <span className="text-white text-sm font-bold font-['Inter'] leading-6">
                    OWASP-aligned SDLC
                  </span>
                </div>
              </div>

              {/* Column 3: Stacked Web & Mobile Platform Cards */}
              <div className="flex flex-col items-start gap-4">
                {/* Top Platform/Web Icon Card */}
                <div className="w-52 h-36 relative bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-white/30 flex items-center justify-center backdrop-blur-xs">
                  <img className="w-11 h-12 flex items-center justify-center object-contain" src="/images/web-app-development/Symbol (12).png" alt="icon" />
                </div>

                {/* Bottom Mobile Icon Card */}
                <div className="w-52 h-36 relative bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-white/30 flex items-center justify-center backdrop-blur-xs">
                  <img className="w-9 h-12 flex items-center justify-center object-contain" src="/images/web-app-development/Symbol (13).png" alt="icon" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="w-full bg-fuchsia-50 border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-12 opacity-60">
            <span><img className="w-7 h-8 object-contain"
                src="/images/web-app-development/Symbol.png"
                alt="icon"
            /></span>
             <span><img className="size-8 object-contain"
                src="/images/web-app-development/Symbol (1).png"
                alt="icon"
            /></span>
             <span><img className="w-7 h-8 object-contain"
                src="/images/web-app-development/Symbol (2).png"
                alt="icon"
            /></span>
             <span><img className="w-6 h-8 object-contain"
                src="/images/web-app-development/Symbol (3).png"
                alt="icon"
            /></span>
             <span><img className="size-8 object-contain"
                src="/images/web-app-development/Symbol (4).png"
                alt="icon"
            /></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-24 text-center">
            <div>
              <div className="text-teal-700 text-2xl font-bold leading-10">-42%</div>
              <div className="text-gray-500 text-sm font-normal uppercase leading-6 mt-1">load time</div>
            </div>
            <div>
              <div className="text-teal-700 text-2xl font-bold leading-10">+31%</div>
              <div className="text-gray-500 text-sm font-normal uppercase leading-6 mt-1">conversion</div>
            </div>
            <div>
              <div className="text-teal-700 text-2xl font-bold leading-10">74</div>
              <div className="text-gray-500 text-sm font-normal uppercase leading-6 mt-1">NPS</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION --- */}
      <section className="w-full bg-fuchsia-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sky-900 text-2xl font-bold leading-[64px] mb-12">Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Strategy Card */}
            <div className="bg-white p-8 rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center text-center">
              <img className="w-9 h-12 object-contain mb-8"
                    src="/images/web-app-development/Symbol (5).png"
                    alt="icon"
              />
              <h3 className="text-sky-900 text-2xl font-medium leading-10 mb-2">Product Strategy & UX</h3>
              <p className="text-gray-500 text-base font-normal leading-6">
                Discovery, IA, prototypes, design<br/>systems
              </p>
            </div>

            {/* Engineering Card */}
            <div className="bg-white p-8 rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center text-center">
              <img className="w-16 h-12 object-contain mb-8"
                    src="/images/web-app-development/Symbol (6).png"
                    alt="icon"
              />
              <h3 className="text-sky-900 text-2xl font-medium leading-10 mb-2">Engineering</h3>
              <p className="text-gray-500 text-base font-normal leading-6">
                Web apps, iOS/Android, APIs, headless<br/>CMS, payments
              </p>
            </div>

            {/* Quality Card */}
            <div className="bg-white p-8 rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center text-center">
              <img className="size-12 object-contain mb-8"
                    src="/images/web-app-development/Symbol (7).png"
                    alt="icon"
              />
              <h3 className="text-sky-900 text-2xl font-medium leading-10 mb-2">Quality & Lifecycle</h3>
              <p className="text-gray-500 text-base font-normal leading-6">
                CI/CD, testing, observability, SLAs
              </p>
            </div>
          </div>

          <div className="text-center">
            <span className="text-gray-500 text-base font-bold leading-6">Artifacts: </span>
            <span className="text-gray-500 text-base font-normal leading-6">Prototype · Architecture Diagram · QA Plan</span>
          </div>
        </div>
      </section>

      {/* --- CASE STUDY LEAD --- */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-sky-900 text-2xl font-bold leading-[64px]">
            From Legacy to Lightning-Fast: 31% Conversion Uplift
          </h2>
          
          <div className="flex justify-center gap-16 md:gap-32 pt-2">
            <div className="flex flex-col items-center">
              <div className="text-teal-700 text-xl font-bold leading-8">31%</div>
              <div className="text-teal-700 text-sm font-normal leading-6">Conversion increase</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-teal-700 text-xl font-bold leading-8">2.1s</div>
              <div className="text-teal-700 text-sm font-normal leading-6">Load speed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-teal-700 text-xl font-bold leading-8">85</div>
              <div className="text-teal-700 text-sm font-normal leading-6">NPS Score</div>
            </div>
          </div>

          <p className="text-gray-500 text-lg font-normal leading-7 pt-8">
            A leading e-commerce platform was struggling with a legacy system that couldn't scale during peak<br/>traffic. Our team rebuilt their entire platform using modern architecture, implementing microservices,<br/>CDN optimization, and progressive web app features. The result: dramatically improved<br/>performance, user experience, and business metrics that exceeded all expectations.
          </p>

          <div className="pt-10 flex justify-center">
            <button className="w-56 h-12 bg-teal-700 text-white font-bold text-base rounded-lg transition-colors inline-flex items-center justify-center">
              Read Full Case Study
            </button>
          </div>
        </div>
      </section>

      {/* --- EXPERT PROCESS WORKFLOW --- */}
      <section className="w-full bg-sky-50 py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-sky-900 text-2xl font-bold leading-[64px] mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { num: 1, title: 'Discovery', desc: 'Requirements gathering, stakeholder interviews, technical assessment', badge: 'User stories, Technical specs' },
              { num: 2, title: 'Research', desc: 'User research, competitive analysis, market validation', badge: 'Research report, Personas' },
              { num: 3, title: 'Design', desc: 'Wireframing, prototyping, design system creation', badge: 'Prototypes, Design system' },
              { num: 4, title: 'Build', desc: 'Agile development, code reviews, continuous integration', badge: 'MVP, Beta release' },
              { num: 5, title: 'QA & Security', desc: 'Automated testing, security audits, performance optimization', badge: 'Test results, Security report' },
              { num: 6, title: 'Launch & SRE', desc: 'Deployment, monitoring, ongoing support and maintenance', badge: 'Live product, SLA agreement' },
            ].map((step) => (
              <div key={step.num} className="bg-white p-8 rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between h-52 relative">
                <div>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-10 h-10 rounded-[20px] bg-sky-900 text-white flex items-center justify-center font-bold text-xl leading-8">
                      {step.num}
                    </div>
                    <h3 className="text-sky-900 text-xl font-bold leading-8">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-6 pl-16">{step.desc}</p>
                </div>
                <div className="absolute bottom-6 left-24 inline-flex items-center h-10 bg-fuchsia-700/10 px-4 rounded-[20px]">
                  <span className="text-sky-900 text-sm font-medium leading-6">{step.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH TAB MODULE --- */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sky-900 text-2xl font-bold leading-[64px] mb-8">Tech Stack</h2>
          
          {/* Tab Headers wrapper */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-transparent pb-4">
            {Object.keys(techStacks).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTechTab(tab)}
                className={`h-11 px-6 rounded-3xl outline outline-2 outline-offset-[-2px] text-sm font-normal font-['Arial'] transition-all cursor-pointer flex items-center justify-center ${
                  activeTechTab === tab 
                    ? 'bg-teal-700 text-white outline-teal-700' 
                    : 'bg-white text-gray-500 outline-zinc-200 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab dynamic panel grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto justify-items-center">
            {techStacks[activeTechTab as keyof typeof techStacks].map((tech, idx) => (
              <div key={idx} className="w-44 h-36 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center text-center">
                <div className="text-teal-700 text-3xl font-normal mb-4"></div>
                <div className="text-sky-900 font-bold text-base leading-6">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPLIANCE / DATA ASSURANCE --- */}
      <section className="w-full bg-fuchsia-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sky-900 text-2xl font-bold leading-[64px] mb-12">Security, Privacy & Compliance</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 justify-items-center">
            {[
              { icon: <img className="w-9 h-10 block mx-auto object-contain"
                src="/images/web-app-development/Symbol (8).png"
                alt="icon"
            />, title: 'Encryption', text: 'End-to-end encryption, TLS\n1.3, encrypted data storage' },
              { icon: <img className="size-10 block mx-auto object-contain"
                src="/images/web-app-development/Symbol (9).png"
                alt="icon"
            />, title: 'SAST/DAST', text: 'Automated security testing,\nvulnerability scanning' },
              { icon: <img className="w-8 h-10 block mx-auto object-contain"
                src="/images/web-app-development/Symbol (10).png"
                alt="icon"
            />, title: 'DPAs', text: 'Data Processing Agreements,\nGDPR compliance' },
              { icon: <img className="size-10 block mx-auto object-contain"
                src="/images/web-app-development/Symbol (11).png"
                alt="icon"
            />, title: 'Data Residency', text: 'US/EU/UK/India hosting\noptions available' }
            ].map((item, i) => (
              <div key={i} className="w-72 h-56 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] text-center flex flex-col items-center justify-center p-6">
                <div className="text-teal-700 mb-6">{item.icon}</div>
                <h3 className="text-sky-900 font-bold text-xl leading-8 mb-4">{item.title}</h3>
                <p className="text-gray-500 text-base font-normal leading-6 whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center flex justify-center">
            <button className="h-14 rounded-lg outline outline-2 outline-offset-[-2px] outline-teal-700 text-teal-700 font-bold text-base px-8 transition-colors hover:bg-teal-50">
              Download Security Overview (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* --- ACCESSIBILITY AND WEB PERFORMANCE --- */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-sky-900 text-4xl font-bold leading-[64px]">Accessibility & Performance</h2>
            <div className="space-y-4">
              <div className="text-sky-900 text-base font-bold leading-6">WCAG 2.2 AA compliant</div>
              <div className="text-sky-900 text-base font-bold leading-6">Lighthouse 90+ scores</div>
              <div className="pt-4">
                <span className="text-sky-900 text-base font-bold leading-6 mr-2">Techniques:</span>
                <span className="text-gray-500 text-base font-normal leading-6">
                  WebP optimization, lazy loading, deferred JavaScript
                </span>
              </div>
            </div>
          </div>

          {/* Performance Targets */}
          <div className="flex flex-col items-center lg:items-start lg:pl-16">
            <h3 className="text-sky-900 text-2xl font-bold leading-10 mb-8 text-center w-full">Performance Budgets</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="w-44 h-28 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col items-center justify-center p-4">
                <div className="text-gray-500 text-base font-normal leading-6 mb-2">LCP</div>
                <div className="text-teal-700 text-xl font-bold leading-8">≤ 2.5s</div>
              </div>
              <div className="w-44 h-28 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col items-center justify-center p-4">
                <div className="text-gray-500 text-base font-normal leading-6 mb-2">CLS</div>
                <div className="text-teal-700 text-xl font-bold leading-8">≤ 0.1</div>
              </div>
              <div className="w-44 h-28 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col items-center justify-center p-4">
                <div className="text-gray-500 text-base font-normal leading-6 mb-2">INP</div>
                <div className="text-teal-700 text-xl font-bold leading-8">≤ 200ms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING TIERS --- */}
      <section className="w-full bg-fuchsia-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sky-900 text-2xl font-bold leading-[64px] mb-12">Pricing Anchors</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {[
              { title: 'Foundation', price: '$30k–$60k', time: '6–10 weeks', highlight: false },
              { title: 'Growth Build', price: '$60k–$180k', time: '10–20 weeks', highlight: true },
              { title: 'Enterprise', price: '$180k+', time: '16–36 weeks + SRE', highlight: false },
              { title: 'Retainers', price: '$12k+/mo', time: 'ongoing dev & ops', highlight: false }
            ].map((tier, i) => (
              <div 
                key={i} 
                className={`w-72 h-52 bg-white rounded-xl outline outline-2 outline-offset-[-2px] flex flex-col items-center justify-center text-center p-6 ${
                  tier.highlight 
                    ? 'shadow-[0px_10px_30px_0px_rgba(144,80,159,0.20)] outline-teal-700' 
                    : 'outline-gray-200'
                }`}
              >
                <h3 className="text-sky-900 text-2xl font-bold leading-10 mb-2">{tier.title}</h3>
                <div className="text-teal-700 text-3xl font-bold leading-[51.20px] mb-4">
                  {tier.price}
                </div>
                <div className="text-gray-500 text-base font-normal leading-6">
                  {tier.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      {/* --- TESTIMONIAL SECTION --- */}
      <section className="w-full bg-white h-60 flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <p className="text-neutral-700 text-2xl font-normal leading-8 mb-4 max-w-[810px]">
          "Zoiko delivered exactly what they promised. Our new platform handles<br/>10x the traffic with better performance."
        </p>
        <div className="text-gray-500 text-base font-medium leading-6 mt-4">
          — David Chen, CTO at ScaleUp Inc
        </div>
      </section>

      {/* --- ACCORDION FAQ SECTION --- */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-sky-900 text-2xl font-bold leading-[64px] mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-5">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full h-16 flex items-center justify-between px-6 bg-white text-left transition-colors hover:bg-slate-50 cursor-pointer"
                  >
                    <span className="text-sky-900 text-lg font-bold font-['Arial']">{faq.q}</span>
                    <span className={`text-teal-700 text-lg font-black transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && faq.a && (
                    <div className="px-6 py-4 bg-slate-50 border-t border-stone-200 text-slate-500 text-base leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

     <section className="w-full bg-zinc-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="flex flex-col gap-12 pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-[34px]">
              <h2 className="text-zinc-800 text-xl lg:text-[32px] font-bold    leading-8 lg:leading-9">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-neutral-600 text-base lg:text-lg font-normal    leading-7">
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
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold    leading-7">Email Us</h4>
                  <a href="mailto:hello@zws.com" className="text-zinc-400 text-sm lg:text-base font-normal    leading-6 hover:text-sky-900 transition-colors">hello@zws.com</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal    leading-6 mt-0 lg:mt-1">Response within 4 hours</span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-1.svg" alt="Phone Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold    leading-7">Call Us</h4>
                  <a href="tel:+15551234567" className="text-zinc-400 text-sm lg:text-base font-normal    leading-6 hover:text-sky-900 transition-colors">+1 (555) 123-4567</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal    leading-6 mt-0 lg:mt-1">24/7 Support Available</span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-2.svg" alt="Chat Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold    leading-7">Live Chat</h4>
                  <span className="text-zinc-400 text-sm lg:text-base font-normal    leading-6">Instant Support</span>
                  <div className="flex items-center gap-2 mt-0 lg:mt-1">
                    <span className="text-zinc-500 text-xs lg:text-sm font-normal    leading-6">Online now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-8 md:p-10 border border-neutral-400 w-full lg:max-w-[572px] lg:ml-auto">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Full Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Business Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Company</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Service Interest</label>
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
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Project Budget</label>
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
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Project Details</label>
                <textarea
                  className="w-full h-28 p-4 bg-neutral-100 rounded-lg border border-stone-300 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all text-zinc-800 placeholder-neutral-400"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-56 h-14 self-start bg-gradient-to-r from-fuchsia-700 to-sky-900 hover:from-fuchsia-800 hover:to-sky-950 text-white text-base font-semibold    rounded-xl transition-all"
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