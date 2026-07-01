"use client";
import React from "react";

interface ChallengeCard {
  title: string;
  description: string;
}

interface CapabilityCard {
  title: string;
  description: string;
}

interface PlatformCard {
  name: string;
  sub: string;
  stat: string;
}

interface CaseStudyCard {
  title: string;
  description: string;
}

interface TrustCard {
  title: string;
  description: string;
}

interface InsightCard {
  type: string;
  title: string;
}

export default function TelecomSolutionsHub() {
  const challenges: ChallengeCard[] = [
    {
      title: "Sustaining Growth in Saturated Markets",
      description: "Competing in markets with shrinking margins and rising customer expectations.",
    },
    {
      title: "Complex Regulatory Environments",
      description: "Seamlessly operating across FCC, Ofcom, GDPR, and global telecom frameworks.",
    },
    {
      title: "Accelerating 5G, IoT & AI Adoption",
      description: "Managing next-gen networks while protecting uptime and optimizing OPEX.",
    },
  ];

  const capabilities: CapabilityCard[] = [
    {
      title: "OSS/BSS Transformation",
      description: "Automate provisioning, billing, and compliance with ZoikoNex, cutting costs and improving customer experience.",
    },
    {
      title: "MVNO Enablement",
      description: "Launch lifestyle/community MVNOs in weeks, not years.",
    },
    {
      title: "AI-Powered Network Intelligence",
      description: "Predict and prevent outages, maximize uptime to 99.999% availability.",
    },
    {
      title: "Global Connectivity",
      description: "Unified eSIM, IoT, and satellite integration across 220+ markets.",
    },
  ];

  const platforms: PlatformCard[] = [
    { name: "ZoikoNex", sub: "Next-gen OSS/BSS", stat: "Cut operational costs by up to 40%" },
    { name: "ZoikoOrbit", sub: "Global eSIM & IoT", stat: "Seamless roaming across 220+ countries" },
    { name: "ZoikoAxis", sub: "Custom AI & Telecom Engineering", stat: "Accelerate deployments by 60%" },
  ];

  const caseStudies: CaseStudyCard[] = [
    {
      title: "MVNO in 60 Days",
      description: "Zoiko enabled a cultural-lifestyle MVNO to launch nationwide with zero downtime.",
    },
    {
      title: "OSS/BSS Modernization",
      description: "Migrated 5M subscribers to ZoikoNex while achieving 99.999% uptime.",
    },
  ];

  const trustFactors: TrustCard[] = [
    { title: "Tier-1 Carrier Partnerships", description: "AT&T, T-Mobile, BT, Orange" },
    { title: "Multi-Jurisdiction Compliance", description: "FCC, Ofcom, GDPR, CCPA" },
    { title: "Telecom + AI Dual DNA", description: "Uniquely positioned to integrate AI into mission-critical networks" },
    { title: "Proven at Scale", description: "MVNO launches, Tier-1 migrations, IoT rollouts" },
  ];

  const insights: InsightCard[] = [
    { type: "Whitepaper", title: "AI & the Future of OSS/BSS" },
    { type: "Webinar", title: "Launching an MVNO in 60 Days" },
    { type: "Report", title: "Telecom Compliance Across 5 Jurisdictions" },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* =========================================================
          SECTION 1: CARRIER-GRADE HERO BANNER
          ========================================================= */}
      <section className="w-full bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 text-white py-16 px-6 sm:px-12 lg:px-[108px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-white/80 text-sm font-bold uppercase tracking-wider mb-2 block">
              Built for Scale, Compliance, and Future Growth
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Carrier-Grade Telecom<br />Solutions
            </h1>
            <p className="text-white/90 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Zoiko Web Services delivers OSS/BSS, AI-driven network management, and global connectivity trusted by Tier-1 operators, MVNOs, and enterprises worldwide.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[510px] aspect-[514/320] bg-white rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img className="w-full h-full object-cover" src="/images/telecommunication/engineer-looking.png" alt="Telecom infrastructure preview" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: TELECOM CHALLENGES WE SOLVE
          ========================================================= */}
      <section className="w-full bg-sky-50 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-400 tracking-tight">
              Telecom Challenges We Solve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex flex-col min-h-[220px]">
                <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-3 leading-tight">
                  {challenge.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-300 text-base font-normal leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: OUTCOME-DRIVEN CAPABILITIES
          ========================================================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-400 tracking-tight">
              Our Capabilities (Outcome-Driven)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex flex-col justify-center min-h-[160px]">
                <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-2.5">
                  {cap.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-300 text-base font-normal leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: FEATURED TELECOM PLATFORMS
          ========================================================= */}
      <section className="w-full bg-fuchsia-50 dark:bg-gray-950 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-400 tracking-tight">
              Featured Telecom Platforms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((plat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="text-teal-700 dark:text-teal-400 text-2xl lg:text-3xl font-bold mb-1">
                    {plat.name}
                  </h3>
                  <span className="text-sky-900 dark:text-gray-400 text-sm sm:text-base font-bold tracking-tight block mb-4">
                    {plat.sub}
                  </span>
                </div>
                <p className="text-sky-900 dark:text-white text-base sm:text-lg font-normal leading-relaxed border-t border-slate-50 dark:border-gray-800 pt-4">
                  {plat.stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: CASE STUDIES & IMPACT
          ========================================================= */}
      <section className="w-full bg-sky-50 dark:bg-gray-900 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-400 tracking-tight">
              Case Studies & Client Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex flex-col justify-center min-h-[160px]">
                <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-2.5">
                  {cs.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-300 text-base font-normal leading-relaxed">
                  {cs.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: WHY TELECOMS TRUST ZOIKO
          ========================================================= */}
      <section className="w-full bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 text-white py-16 px-4 sm:px-8 lg:px-[108px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Why Telecoms Trust Zoiko
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trustFactors.map((factor, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-8 outline outline-1 outline-offset-[-1px] outline-white/20 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px] flex flex-col justify-center min-h-[140px]">
                <h3 className="text-white text-xl lg:text-2xl font-bold mb-2">
                  {factor.title}
                </h3>
                <p className="text-white/90 text-base lg:text-lg font-normal leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: INSIGHTS & THOUGHT LEADERSHIP
          ========================================================= */}
      <section className="w-full bg-white dark:bg-gray-950 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-400 tracking-tight">
              Insights & Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {insights.map((insight, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex flex-col min-h-[160px] group hover:shadow-md transition-shadow">
                <span className="text-teal-700 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                  {insight.type}
                </span>
                <h3 className="text-sky-900 dark:text-white text-xl font-bold leading-tight group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                  {insight.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-zinc-100 py-16 px-15">
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
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG.svg" alt="Email Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold    leading-7">Email Us</h4>
                  <a href="mailto:hello@zoikodigital.com" className="text-zinc-400 text-sm lg:text-base font-normal    leading-6 hover:text-sky-900 transition-colors">hello@zoikodigital.com</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal    leading-6 mt-0 lg:mt-1">Response within 4 hours</span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
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
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
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
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Business Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Company</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Service Interest</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 rounded-lg border border-stone-300 appearance-none text-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all">
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
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 rounded-lg border border-stone-300 appearance-none text-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all">
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
                  className="w-full h-28 p-4 bg-neutral-100 rounded-lg border border-stone-300 resize-none focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all text-zinc-800 placeholder-neutral-400"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-56 h-14 self-start bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 hover:from-indigo-900 hover:via-teal-800 hover:to-teal-500 text-white text-base font-semibold    rounded-xl transition-all cursor-pointer"
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