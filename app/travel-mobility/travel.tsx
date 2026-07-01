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
  description: string;
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

export default function TravelMobilitySolutionsHub() {
  const challenges: ChallengeCard[] = [
    {
      title: "Cross-Border Connectivity",
      description: "Global travelers demand seamless internet and mobile service in 220+ countries.",
    },
    {
      title: "Operational Inefficiencies & Rising Costs",
      description: "Airlines and logistics firms face escalating fuel, labor, and regulatory costs.",
    },
    {
      title: "Regulatory Complexity",
      description: "Compliance with IATA, ICAO, DOT, and EU mobility directives.",
    },
    {
      title: "Customer Experience Pressure",
      description: "70% of passengers expect real-time updates and frictionless booking workflows.",
    },
    {
      title: "Sustainability Mandates",
      description: "Airlines and fleets are under pressure to reduce emissions and deliver on net-zero commitments.",
    },
    {
      title: "Fragmented Infrastructure",
      description: "Outdated vendor systems hinder mobility innovation and modern enterprise scalability.",
    },
  ];

  const capabilities: CapabilityCard[] = [
    {
      title: "Global eSIM & Travel Connectivity (ZoikoOrbit)",
      description: "Deliver seamless mobile internet in 220+ countries, cutting roaming costs by up to 50%.",
    },
    {
      title: "AI-Powered Journey Planning (BookingOrbit)",
      description: "End-to-end bookings, insurance, visa support, with ESG-focused itineraries — improving traveler satisfaction by 30%.",
    },
    {
      title: "IoT & Smart Mobility Solutions",
      description: "Telematics and EV integrations that reduce fleet OPEX by 15–20%.",
    },
    {
      title: "Digital Commerce & Payments",
      description: "Secure platforms powering duty-free, ticketing, and subscription services — enabling new revenue streams.",
    },
  ];

  const platforms: PlatformCard[] = [
    {
      name: "BookingOrbit",
      sub: "AI-powered booking & commerce",
      description: "Supports visas, insurance, eSIMs, and carbon-conscious itineraries cleanly.",
    },
    {
      name: "ZoikoOrbit",
      sub: "Global eSIM & IoT Connectivity",
      description: "220+ countries coverage with instant native real-time digital activation layers.",
    },
    {
      name: "ZoikoAxis",
      sub: "Custom Mobility Engineering",
      description: "IoT, telematics, and EV charging infrastructure solutions built for next-gen fleets.",
    },
  ];

  const caseStudies: CaseStudyCard[] = [
    {
      title: "Airline Passenger Experience Upgrade",
      description: "Onboard eSIM deployment improved passenger satisfaction by 32% and boosted ancillary revenue channels.",
    },
    {
      title: "Fleet Optimization for Logistics Firm",
      description: "Reduced baseline fuel costs by 18%, systematically cutting carbon emissions by 11,000 tons annually.",
    },
    {
      title: "Travel Commerce Transformation",
      description: "BookingOrbit integration cut booking times by 45%, raising net digital revenue per passenger by 22%.",
    },
  ];

  const trustFactors: TrustCard[] = [
    {
      title: "Global Reach",
      description: "220+ markets covered with rock-solid Tier-1 redundancy and architecture paths.",
    },
    {
      title: "Proven Deployments",
      description: "Trusted globally by premium commercial airlines, heavy logistics firms, and mobility innovators.",
    },
    {
      title: "Dual DNA Expertise",
      description: "Telecom-grade resilience fused with travel commerce platforms for premium security and maximum uptime.",
    },
    {
      title: "Sustainability-First Approach",
      description: "Accelerated EV infrastructure adoption tools, carbon offset routing algorithms, and deep ESG compliance parameters built right in.",
    },
    {
      title: "End-to-End Ecosystem",
      description: "Comprehensive care from front-facing digital passenger portals to enterprise fleet and logistics systems.",
    },
  ];

  const insights: InsightCard[] = [
    { type: "Whitepaper", title: "The Future of Global Mobility — AI, IoT, and eSIMs" },
    { type: "Webinar", title: "Sustainability in Travel & Logistics — Meeting Net-Zero Goals" },
    { type: "Report", title: "Mobility-as-a-Service 2026 — Scaling Securely Across Borders" },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* =========================================================
          SECTION 1: HERO CONTAINER
          ========================================================= */}
      <section className="w-full bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 text-white py-16 px-6 sm:px-12 lg:px-[108px] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
              Borderless Travel & Mobility<br />Solutions — Secure, Scalable,<br />and Future-Proof
            </h1>
            <p className="text-white/95 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Zoiko Web Services delivers AI-powered travel connectivity, fleet intelligence, and global commerce solutions that redefine passenger experiences, optimize logistics, and ensure sustainability at scale.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[510px] aspect-[534/320] bg-white rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img className="w-full h-full object-cover" src="/images/travel-mobility/happy-group.png" alt="Global mobility connectivity preview illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: INDUSTRY CHALLENGES WE SOLVE
          ========================================================= */}
      <section className="w-full bg-sky-50 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-400 tracking-tight">
              Industry Challenges We Solve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex flex-col min-h-[240px]">
                <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-300 text-base font-normal leading-relaxed">
                  {item.description}
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
            {capabilities.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex flex-col justify-center min-h-[160px]">
                <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-2.5">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-300 text-base font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: FEATURED PLATFORMS
          ========================================================= */}
      <section className="w-full bg-fuchsia-50 dark:bg-gray-950 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-400 tracking-tight">
              Featured Mobility Platforms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((plat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex flex-col justify-between min-h-[240px]">
                <div>
                  <h3 className="text-teal-700 dark:text-teal-400 text-2xl lg:text-3xl font-bold mb-1">
                    {plat.name}
                  </h3>
                  <span className="text-sky-900 dark:text-gray-400 text-sm sm:text-base font-bold tracking-tight block mb-4">
                    {plat.sub}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-gray-300 text-base font-normal leading-relaxed border-t border-slate-50 dark:border-gray-800 pt-4">
                  {plat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: CASE STUDIES & SYSTEM IMPACT
          ========================================================= */}
      <section className="w-full bg-sky-50 dark:bg-gray-900 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-400 tracking-tight">
              Case Studies & Client Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex flex-col min-h-[240px]">
                <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-3 leading-tight">
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
          SECTION 6: WHY MOBILITY LEADERS TRUST ZOIKO (3+2 Layout Matrix)
          ========================================================= */}
      <section className="w-full bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 text-white py-16 px-4 sm:px-8 lg:px-[108px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Why Mobility Leaders Trust Zoiko
            </h2>
          </div>

          {/* Top Matrix Layer: 3 Columns row */}
          <div className="flex flex-wrap justify-center gap-8 w-full mx-auto mb-8">
            {trustFactors.slice(0, 3).map((factor, idx) => (
              <div key={idx} className="w-full md:w-96 bg-white/10 rounded-xl p-8 outline outline-1 outline-offset-[-1px] outline-white/20 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px] flex flex-col min-h-[224px]">
                <h3 className="text-white text-2xl font-bold mb-4 leading-10">
                  {factor.title}
                </h3>
                <p className="text-white text-lg font-normal leading-7">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Matrix Layer: Center Balanced 2 Columns row */}
          <div className="flex flex-wrap justify-center gap-8 w-full mx-auto">
            {trustFactors.slice(3, 5).map((factor, idx) => (
              <div key={idx} className="w-full md:w-96 bg-white/10 rounded-xl p-8 outline outline-1 outline-offset-[-1px] outline-white/20 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px] flex flex-col min-h-[240px]">
                <h3 className="text-white text-2xl font-bold mb-4 leading-10">
                  {factor.title}
                </h3>
                <p className="text-white text-lg font-normal leading-7">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: TRAVEL INSIGHTS & LEADERSHIP
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