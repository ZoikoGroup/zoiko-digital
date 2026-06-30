"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp, Check } from "lucide-react";

export default function AeoAndSeoClient() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const stats = [
    { value: "+120%", label: "Avg. organic growth" },
    { value: "Top 3", label: "Target rankings" },
    { value: "AEO", label: "Answer-ready content" },
    { value: "100/100", label: "Core Web Vitals" }
  ];

  const capabilities = [
    {
      title: "Technical SEO",
      description: "Crawlability, site speed, Core Web Vitals, and clean architecture.",
      icon: "/images/aeo/icon-technical.svg"
    },
    {
      title: "Content strategy",
      description: "Keyword research and content that ranks and converts.",
      icon: "/images/aeo/icon-content.svg"
    },
    {
      title: "Structured data (AEO)",
      description: "Schema and Q&A markup that makes you the answer AI engines cite.",
      icon: "/images/aeo/icon-structured.svg"
    },
    {
      title: "Off-page & authority",
      description: "Digital PR and link building that grows domain authority.",
      icon: "/images/aeo/icon-authority.svg"
    },
    {
      title: "Analytics & reporting",
      description: "Clear dashboards tying rankings and traffic to revenue.",
      icon: "/images/aeo/icon-analytics.svg"
    },
    {
      title: "Local & international",
      description: "Local SEO and multi-region, multi-language optimization.",
      icon: "/images/aeo/icon-local.svg"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Audit",
      description: "Technical, content, and competitive analysis."
    },
    {
      step: 2,
      title: "Strategy",
      description: "Prioritized roadmap mapped to your goals."
    },
    {
      step: 3,
      title: "Execute",
      description: "Fixes, content, structured data, and outreach."
    },
    {
      step: 4,
      title: "Measure",
      description: "Track, report, and refine each month."
    }
  ];

  const pricingPlans = [
    {
      name: "Audit",
      price: "$3,500",
      duration: "One-time",
      features: [
        "Technical & content audit",
        "AEO readiness review",
        "Prioritized roadmap"
      ],
      ctaText: "Get a quote",
      popular: false
    },
    {
      name: "Growth",
      price: "$4,500/mo",
      duration: "Ongoing",
      features: [
        "Technical + content + AEO",
        "Monthly content",
        "Reporting dashboard"
      ],
      ctaText: "Talk to us",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "Multi-site",
      features: [
        "International SEO",
        "Dedicated strategist",
        "Custom integrations"
      ],
      ctaText: "Contact sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What is AEO and why does it matter?",
      answer: "Answer Engine Optimization (AEO) is the practice of optimizing content to be selected and cited by AI-driven search engines and assistants (like ChatGPT, Claude, and Google Overviews). It matters because more users are getting direct answers from AI rather than clicking links on traditional search results pages."
    },
    {
      question: "How long until we see results?",
      answer: "SEO and AEO are compounding processes. Initial technical fixes and structured data implementations can show search crawl improvements within weeks, while organic traffic and AI citation growth typically manifest and compound over 3 to 6 months."
    },
    {
      question: "Do you write the content?",
      answer: "Yes, our team of technical writers and subject matter experts drafts and optimizes content. Every piece is grounded in your company's expertise, thoroughly researched, and structured to meet both reader expectations and answer-engine requirements."
    },
    {
      question: "Can you optimize an existing site?",
      answer: "Absolutely. We start by auditing your existing site architecture and content library, mapping your current performance, and applying structured data, technical optimizations, and content updates to maximize your current assets."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-slate-800 animate-fade-in">
      
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50 flex justify-center px-5">
        <div className="max-w-[1180px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start gap-6">
            <div className="px-3.5 py-1.5 bg-violet-100/80 rounded-full inline-flex justify-start items-center">
              <span className="text-fuchsia-700 text-xs font-bold uppercase tracking-wider font-sans">
                SEO & AEO
              </span>
            </div>
            
            <h1 className="text-zinc-900 text-5xl sm:text-6xl font-black font-sans leading-[1.1] tracking-tight">
              Be found — in search<br/>and in AI answers.
            </h1>
            
            <p className="max-w-[550px] text-gray-600 text-lg font-normal leading-relaxed font-sans">
              We optimize for traditional search engines and the new answer engines, so your brand shows up whether people search or ask an AI.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="/#contact"
                className="px-6 py-3.5 bg-fuchsia-700 text-white rounded-xl text-base font-bold shadow-md hover:bg-fuchsia-800 hover:shadow-lg transition-all duration-200"
              >
                Get a free audit
              </Link>
              <a
                href="#how-we-work"
                className="px-6 py-3.5 border border-gray-200 text-zinc-900 rounded-xl text-base font-bold bg-white hover:bg-gray-50 transition-all duration-200"
              >
                How we work
              </a>
            </div>
          </div>

          {/* Right Image Graphic Column */}
          <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[539px] h-[384px] rounded-[20px] overflow-hidden shadow-2xl p-[3px] bg-gradient-to-r from-amber-500 to-violet-500">
              <img
                src="/images/aeo/hero-image.jpg"
                alt="SEO & AEO team visualization map"
                className="w-full h-full object-cover rounded-[17px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="w-full pb-16 flex justify-center px-5">
        <div className="max-w-[1180px] w-full bg-white border border-gray-200 rounded-2xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.15)] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-150">
          {stats.map((stat, i) => (
            <div key={i} className="py-6 flex flex-col items-center justify-center text-center px-4">
              <div className="text-fuchsia-700 text-3xl md:text-4xl font-black leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="w-full py-16 flex justify-center px-5 border-t border-gray-100 bg-white">
        <div className="max-w-[1180px] w-full flex flex-col items-center">
          
          <div className="text-center max-w-[650px] mb-12 flex flex-col items-center gap-3">
            <span className="text-fuchsia-700 text-xs font-bold uppercase tracking-wider">
              What we deliver
            </span>
            <h2 className="text-zinc-900 text-3xl sm:text-4xl font-extrabold leading-tight">
              Search visibility, end to end
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Technical foundations, great content, and the structured data that AI answers rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col items-center text-center"
              >
                <div className="w-11 h-11 bg-fuchsia-700 rounded-xl flex items-center justify-center mb-5 shrink-0">
                  <img
                    src={cap.icon}
                    alt=""
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <h3 className="text-zinc-900 text-lg font-bold mb-2">
                  {cap.title}
                </h3>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="w-full py-16 flex justify-center px-5 bg-neutral-50 scroll-mt-24">
        <div className="max-w-[1180px] w-full flex flex-col items-start">
          
          <div className="max-w-[500px] mb-12 flex flex-col gap-3">
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
              How we work
            </span>
            <h2 className="text-zinc-900 text-3xl sm:text-4xl font-extrabold leading-tight">
              A data-driven SEO program
            </h2>
            <p className="text-gray-600 text-base">
              Measure, optimize, and compound results over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-start"
              >
                <div className="w-8 h-8 bg-fuchsia-700 rounded-lg flex items-center justify-center text-white text-base font-extrabold mb-5">
                  {step.step}
                </div>
                <h3 className="text-fuchsia-700 text-base font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Observability & Human-in-the-loop safety banner */}
      <section className="w-full py-16 flex justify-center px-5 bg-white">
        <div className="max-w-[1180px] w-full bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.15)] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left Graphic inside Rounded Gradient Frame */}
          <div className="w-full lg:w-[48%] flex items-center justify-center shrink-0">
            <div className="relative w-full max-w-[520px] h-[340px] rounded-[20px] overflow-hidden p-[2px] bg-gradient-to-r from-amber-500 to-violet-500">
              <img
                src="/images/aeo/insight-image.jpg"
                alt="SEO AEO insight graphic"
                className="w-full h-full object-cover rounded-[18px]"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-[52%] flex flex-col items-start gap-5">
            <h3 className="text-zinc-900 text-2xl sm:text-3xl font-extrabold leading-tight">
              Optimized for the way people search now
            </h3>
            
            <p className="text-zinc-750 text-base leading-relaxed">
              Search is changing. We make your content the trusted source that both Google and AI assistants pull answers from.
            </p>
            
            <ul className="flex flex-col gap-3.5 mt-2">
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 shrink-0 flex items-center justify-center">
                  <img src="/images/aeo/icon-checkmark-large.svg" alt="Check" className="w-full h-full" />
                </span>
                <span className="text-zinc-700 text-base font-normal">Answer-engine-ready content & schema</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 shrink-0 flex items-center justify-center">
                  <img src="/images/aeo/icon-checkmark-large.svg" alt="Check" className="w-full h-full" />
                </span>
                <span className="text-zinc-700 text-base font-normal">Fast, technically sound pages</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 shrink-0 flex items-center justify-center">
                  <img src="/images/aeo/icon-checkmark-large.svg" alt="Check" className="w-full h-full" />
                </span>
                <span className="text-zinc-700 text-base font-normal">Revenue-focused reporting</span>
              </li>
            </ul>

            <Link
              href="/ai-governance"
              className="text-indigo-600 hover:text-indigo-800 text-base font-semibold inline-flex items-center gap-1.5 mt-4 transition-colors"
            >
              See our AI governance <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engagements & Pricing Section */}
      <section className="w-full py-16 flex justify-center px-5 bg-neutral-50 border-t border-b border-gray-150">
        <div className="max-w-[1180px] w-full flex flex-col items-center">
          
          <div className="text-center max-w-[600px] mb-12 flex flex-col items-center gap-3">
            <span className="text-fuchsia-700 text-xs font-bold uppercase tracking-wider">
              Plans
            </span>
            <h2 className="text-zinc-900 text-3xl sm:text-4xl font-extrabold leading-tight">
              Ways to work with us
            </h2>
            <p className="text-gray-600 text-base">
              From a one-time audit to an ongoing program. Sample pricing for illustration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 flex flex-col shadow-sm border transition-all duration-200 relative ${
                  plan.popular
                    ? "border-2 border-fuchsia-700 ring-4 ring-fuchsia-700/5 md:scale-105 z-10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-fuchsia-700 text-white text-xs font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-sm">
                    Most popular
                  </div>
                )}
                
                <h3 className="text-zinc-900 text-lg font-extrabold mb-3">
                  {plan.name}
                </h3>
                
                <div className="text-zinc-900 text-3xl font-black tracking-tight mb-1">
                  {plan.price}
                </div>
                
                <div className="text-gray-600 text-xs font-normal mb-6">
                  {plan.duration}
                </div>
                
                <ul className="flex flex-col gap-4 mb-8 flex-grow">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center mt-0.5">
                        <img src="/images/aeo/icon-checkmark-small.svg" alt="Check" className="w-full h-full" />
                      </span>
                      <span className="text-zinc-700 text-sm leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/#contact"
                  className={`w-full py-3 rounded-xl text-center text-sm font-bold transition-all duration-200 ${
                    plan.popular
                      ? "bg-fuchsia-700 text-white hover:bg-fuchsia-800 shadow-md hover:shadow-lg"
                      : "border border-gray-200 text-zinc-900 hover:bg-gray-50 bg-white"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full py-16 md:py-24 bg-white flex justify-center px-5">
        <div className="max-w-[780px] w-full flex flex-col items-center">
          
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-extrabold leading-tight text-center mb-12">
            Common questions
          </h2>

          <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = activeFAQ === i;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-zinc-900 text-base font-bold leading-relaxed pr-4">
                      {faq.question}
                    </span>
                    <span className="text-indigo-600 text-xl font-normal shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-0 border-t border-gray-50 animate-slide-down">
                      <p className="text-zinc-700 text-base font-normal leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Let's Grow Bottom CTA Banner */}
      <section className="w-full pb-20 flex justify-center px-5 bg-white">
        <div className="max-w-[1132px] w-full bg-sky-900 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl text-center text-white flex flex-col items-center justify-center gap-6">
          
          {/* Radial Gradient Glow Accent Backdrop */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_18%_18%,#f59e0b,transparent_60%)] pointer-events-none blur-[5px]"></div>
          
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-snug tracking-tight z-10">
            Let's grow your visibility
          </h2>
          
          <p className="max-w-[600px] text-white/75 text-base sm:text-lg font-normal leading-relaxed z-10">
            Get a free audit and a roadmap for search and AI answers.
          </p>
          
          <Link
            href="/#contact"
            className="mt-4 px-6 py-4 bg-white text-zinc-950 rounded-xl text-base font-bold shadow-md hover:bg-neutral-100 hover:shadow-lg transition-all duration-200 z-10 flex items-center gap-2"
          >
            Get a free audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
