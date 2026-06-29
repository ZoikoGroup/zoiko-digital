"use client";
import React from 'react';

export default function RequestDemoPage() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-800 dark:bg-gray-900 dark:text-white selection:bg-teal-500/30 transition-colors duration-300">
 

      {/* --- HERO SECTION --- */}
      <section className="w-full bg-gradient-to-r from-[#11103d] via-[#0f766e] to-[#2dd4bf] py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Discover How Zoiko Digital <br />Transforms Your Business
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-3xl opacity-90">
            Get a tailored walkthrough of Zoiko Digital solutions designed around your industry, scale, and goals. 
            From compliance automation to multi-cloud optimization, see the difference in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center items-center">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-[50px] shadow-lg transition-colors w-72">
              Request My Demo
            </button>
            <button className="px-8 py-4 bg-white hover:bg-teal-50 text-sky-900 font-semibold rounded-[50px] shadow-lg transition-colors w-72">
              Schedule with an Architect
            </button>
          </div>
        </div>
      </section>

      {/* --- FORM & VIDEO INTERACTION SECTION --- */}
      <section className="w-full bg-fuchsia-50/40 dark:bg-gray-950 py-16 px-6 border-b border-fuchsia-700/5 dark:border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Quick Start Form Card */}
          <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-xl border border-fuchsia-700/10 dark:border-gray-700 p-8 md:p-10">
            <h3 className="text-sky-900 dark:text-teal-400 text-2xl font-semibold text-center mb-8">
              Quick Start - Tell Us About Your Business
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sky-900 dark:text-gray-200 text-sm font-medium mb-2">Full Name *</label>
                <input type="text" className="w-full h-11 px-4 bg-white dark:bg-gray-900 rounded-[10px] border border-fuchsia-700/20 dark:border-gray-700 focus:outline-none focus:border-teal-500 dark:text-white" required />
              </div>
              <div>
                <label className="block text-sky-900 dark:text-gray-200 text-sm font-medium mb-2">Business Email *</label>
                <input type="email" className="w-full h-11 px-4 bg-white dark:bg-gray-900 rounded-[10px] border border-fuchsia-700/20 dark:border-gray-700 focus:outline-none focus:border-teal-500 dark:text-white" required />
              </div>
              <div>
                <label className="block text-sky-900 dark:text-gray-200 text-sm font-medium mb-2">Company Size *</label>
                <select className="w-full h-11 px-4 bg-white dark:bg-gray-900 rounded-[10px] border border-fuchsia-700/20 dark:border-gray-700 focus:outline-none focus:border-teal-500 dark:text-white">
                  <option>Select company size</option>
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sky-900 dark:text-gray-200 text-sm font-medium mb-3">Area of Interest</label>
                <div className="grid grid-cols-2 gap-4 text-sky-900 dark:text-gray-300">
                  {["Cloud & IT", "Branding", "Compliance", "AI/Custom Software", "Other"].map((interest) => (
                    <label key={interest} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input type="checkbox" className="accent-teal-600 rounded" />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="w-full h-12 mt-4 bg-gradient-to-r from-[#11103d] via-[#0f766e] to-[#2dd4bf] hover:opacity-90 text-white font-semibold rounded-[50px] shadow-md transition-opacity">
                Book My Demo
              </button>
            </form>
          </div>

          {/* Video / Content Block */}
          <div className="space-y-8">
            <div className="bg-cyan-900 dark:bg-gray-800 rounded-2xl p-8 text-center text-white flex flex-col items-center justify-center min-h-[240px] shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-white">2-Minute Demo Teaser</h4>
              <p className="text-white/80 text-sm mb-6">🎥 Watch a quick preview of Zoiko Digital in action</p>
              <button className="px-6 py-3 bg-white hover:bg-teal-50 text-sky-900 font-semibold rounded-[50px] shadow transition-colors">
                Play Demo Video
              </button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 min-h-[160px] border border-slate-100 dark:border-gray-700 shadow-md flex items-center justify-center text-center">
              <p className="text-gray-400 dark:text-gray-500 italic text-sm">Additional contextual platform resources will display here.</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- VALUE PROPOSITION / BENEFIT CARDS --- */}
      <section className="w-full bg-sky-50 dark:bg-gray-900/50 py-20 px-6 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sky-900 dark:text-white text-3xl md:text-4xl font-semibold text-center mb-16">
            What You'll Gain from a ZOIKO DIGITAL Demo
          </h2>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { t: 'Telecom Solutions', d: 'Learn how to reduce churn with real-time analytics and customer insights that drive retention strategies.' },
              { t: 'Finance Compliance', d: 'See how Zoiko Digital ensures SOC 2, GDPR, PCI DSS compliance with automated workflows and audit trails.' },
              { t: 'Healthcare Security', d: 'Experience HIPAA-ready workflows and data protection that safeguards patient information.' }
            ].map((card, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-fuchsia-700/10 dark:border-gray-700 p-8 text-center">
                <h3 className="text-sky-900 dark:text-teal-400 text-xl font-semibold mb-4">{card.t}</h3>
                <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>

          {/* Core Values / Pillar Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-gray-800">
            {[
              { title: 'Personalized', desc: 'Tailored to your industry and specific use cases' },
              { title: 'Practical', desc: 'Real-world scenarios and actionable insights' },
              { title: 'Proven', desc: 'Backed by Fortune 10 success stories' }
            ].map((pillar, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-700 to-sky-900 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-sm">
                  P
                </div>
                <h4 className="text-sky-900 dark:text-teal-400 text-lg font-semibold mb-1">{pillar.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROI METRICS & PROOF --- */}
      <section className="w-full bg-white dark:bg-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sky-900 dark:text-white text-3xl font-semibold mb-12">Customer Proof & ROI Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-fuchsia-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-col justify-center min-h-[180px] shadow-sm">
              <p className="text-sky-900 dark:text-gray-100 text-lg md:text-xl font-normal leading-relaxed mb-4">
                "Cut compliance audit costs by 30% within 6 months."
              </p>
              <span className="text-fuchsia-700 dark:text-teal-400 font-semibold text-base">— CFO, Fintech Client</span>
            </div>
            <div className="bg-fuchsia-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-col justify-center min-h-[180px] shadow-sm">
              <p className="text-sky-900 dark:text-gray-100 text-lg md:text-xl font-normal leading-relaxed mb-4">
                "Scaled from 200 to 2,000 users in 12 weeks with ZOIKO DIGITAL."
              </p>
              <span className="text-fuchsia-700 dark:text-teal-400 font-semibold text-base">— CTO, Healthcare Provider</span>
            </div>
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