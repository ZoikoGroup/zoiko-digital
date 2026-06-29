"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const industries = [
  "Telecommunications",
  "Financial Services & FinTech",
  "Healthcare & Life Sciences",
  "Government & Public Sector",
  "Retail & Consumer Brands",
  "Travel & Mobility",
  "Media & Entertainment",
  "SMEs & Enterprise SaaS",
  "Cybersecurity & Data Privacy",
];

const chooseCards = [
  {
    icon: "/images/industry/vaadin_globe@2x.png",
    title: "Multi-jurisdictional Compliance Expertise",
    description:
      "Navigate complex regulatory landscapes with confidence across global markets",
  },
  {
    icon: "/images/industry/bxs_rocket.png",
    title: "Industry-Specific Customization",
    description:
      "Tailored solutions that address unique sector challenges and requirements",
  },
  {
    icon: "/images/industry/mingcute_lightning-fill.png",
    title: "SLA-Backed Reliability",
    description:
      "99.9% uptime guarantee with enterprise-grade infrastructure and support",
  },
  {
    icon: "/images/industry/Vector.png",
    title: "Global Scalability",
    description:
      "Scale seamlessly across regions with our worldwide infrastructure network",
  },
];

const impactCards = [
  {
    icon: "/images/industry/streamline-flex_satellite-dish-solid.png",
    title: "Tier-1 Telecom Transformation",
    description:
      "Cut infrastructure costs by 25% with ZWS Cloud migration and optimization",
    result: "25% Cost Reduction",
  },
  {
    icon: "/images/industry/solar_hospital-bold.png",
    title: "Healthcare Compliance Success",
    description:
      "Achieve HIPAA compliance in half the time with ZWS Compliance Suite",
    result: "50% Faster Compliance",
  },
  {
    icon: "/images/industry/famicons_card.png",
    title: "FinTech Security Enhancement",
    description:
      "Reduced fraud by 40% with AI-powered transaction monitoring",
    result: "40% Fraud Reduction",
  },
  {
    icon: "/images/industry/streamline-plump_web-solid.png",
    title: "Government Digital Services",
    description:
      "Improved citizen satisfaction by 65% with governance platform",
    result: "65% Satisfaction Increase",
  },
];

export default function IndustriesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollLeft += 1;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* ================================= HERO SECTION ================================ */}
      <section className="bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 dark:from-gray-950 dark:via-gray-900 dark:to-gray-850 border-b dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto px-9 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-white text-xl lg:text-4xl font-semibold leading-tight dark:text-white">
                Powering Transformation
                <br />
                Across Every Industry
              </h1>
              <p className="text-white/80 dark:text-gray-300 mt-6 text-lg leading-8">
                From telecom and financial services to healthcare,
                government, and retail — Zoiko Web Services delivers
                cloud, compliance, and digital solutions that adapt
                to every sector's unique challenges.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-white text-[#207373] dark:bg-teal-600 dark:text-white dark:hover:bg-teal-500 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Explore Industry Solutions
                </button>
                <button className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Talk to an Expert
                </button>
              </div>
            </div>
            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden border dark:border-gray-800 shadow-lg">
              <Image
                src="/images/industry/engineers-wearing-safety-gear-including-hard-hats-2025-03-16-03-21-16-utc 1.png"
                alt="Engineers working"
                width={650}
                height={400}
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================== INDUSTRY TABS =========================== */}
      <section className="bg-slate-50 dark:bg-gray-950 border-y border-slate-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 py-6">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden whitespace-nowrap"
          >
            {[...industries, ...industries].map((industry, index) => (
              <button
                key={index}
                className="flex-shrink-0 whitespace-nowrap px-6 py-3 rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-black dark:text-gray-200 font-medium hover:border-slate-300 dark:hover:border-gray-700 transition-all"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== INDUSTRY DETAILS ======================== */}
      <section className="bg-teal-700/10 dark:bg-teal-950/20 py-16 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-9">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-slate-800 dark:text-white">
                Telecommunications:
                <br />
                Built for Scale & Compliance
              </h2>
              <p className="mt-6 text-slate-500 dark:text-gray-300 text-lg leading-8">
                Empower your telecom infrastructure with cloud-native
                solutions designed for massive scale, regulatory
                compliance and 99.9% uptime.
              </p>
              <h3 className="mt-8 mb-5 font-semibold text-black dark:text-teal-400">
                Use Case Highlights:
              </h3>
              <div className="space-y-4">
                {[
                  "5G network infrastructure and optimization",
                  "OSS/BSS modernization and automation",
                  "Customer experience platforms and analytics",
                  "Regulatory compliance and data sovereignty",
                  "IoT connectivity and edge computing solutions",
                ].map((highlight, idx) => (
                  <div key={idx} className="flex gap-3 text-slate-700 dark:text-gray-300">
                    <span className="text-[#64748B] dark:text-teal-500 font-bold">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-[#207373] dark:bg-teal-600 dark:hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Industry Solutions
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden border dark:border-gray-800">
              <Image
                src="/images/industry/telecommunication.png"
                alt="Telecommunications setup"
                width={500}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================== IMPACT SECTION ======================== */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold mb-3 text-slate-800 dark:text-white">
            Proven Impact Across Industries
          </h2>
          <p className="text-center text-slate-500 dark:text-gray-400 mb-12">
            Real results from our industry-specific solutions
          </p>
          <div className="grid md:grid-cols-4 xl:grid-cols-4 gap-6">
            {impactCards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-8 text-center shadow-sm dark:shadow-black/10 transition-all hover:shadow-md"
              >
                <div className="dark:brightness-0 dark:invert mb-4 inline-block">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="mx-auto"
                  />
                </div>
                <h3 className="font-semibold text-xl text-[#207373] dark:text-[#207373]">
                  {card.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-300 mt-4 text-sm">
                  {card.description}
                </p>
                <div className="mt-6 inline-block bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 text-white px-5 py-2 rounded-full font-medium text-sm">
                  {card.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== TRUSTED LOGOS BAR ======================== */}
      <section className="py-10 bg-slate-50 dark:bg-gray-950/40 border-y border-slate-200/60 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6">
          <h3 className="text-center text-xl font-semibold text-slate-800 dark:text-gray-300 mb-10">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "GlobalTech",
              "MedCorp",
              "CityGov",
              "RetailMax",
              "TravelPro",
              "MediaFlow",
            ].map((company) => (
              <div
                key={company}
                className="h-[76px] bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg flex items-center justify-center shadow-xs transition-colors duration-300"
              >
                <span className="text-slate-500 dark:text-gray-400 text-base font-semibold">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE SECTION ====================== */}
      <section className="bg-sky-50 dark:bg-gray-950/20 py-20 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold text-sky-900 dark:text-sky-400 mb-16">
            Why Industries Choose Zoiko Web Services
          </h2>
          <div className="grid md:grid-cols-4 xl:grid-cols-4 gap-6">
            {chooseCards.map((card, index) => (
              <div key={index} className="p-8 text-center bg-white dark:bg-gray-800/50 border border-transparent dark:border-gray-800 rounded-xl transition-all shadow-xs">
                <div className="dark:brightness-0 dark:invert mb-4 inline-block">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="mx-auto"
                  />
                </div>
                <h3 className="font-semibold text-xl text-sky-950 dark:text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-400 mt-4 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== CONTACT SECTION ====================== */}
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

    </main>
  );
}