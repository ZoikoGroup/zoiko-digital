import React from 'react';

export default function GlobalReachContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 py-12 md:py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Global Reach. <br className="hidden sm:inline" />
              Local Expertise. <br />
              Unmatched Standards.
            </h1>
            <p className="mx-auto lg:mx-0 max-w-xl text-base md:text-lg text-teal-50/90 leading-relaxed">
              From our headquarters in Sacramento, California, Zoiko Digital powers digital transformation across continents delivering Tier-1 cloud, compliance, and web solutions with deep local expertise.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-white shadow-xl aspect-video max-w-xl w-full mx-auto lg:mr-0">
            <img 
              className="h-full w-full object-cover" 
              src="/images/global/hero.jpg" 
              alt="Zoiko Digital Workspace" 
            />
          </div>
        </div>
      </section>

      {/* --- GLOBAL PRESENCE (CARDS SECTION) --- */}
      <section className="bg-fuchsia-50/30 py-16 md:py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 md:mb-12 text-center text-2xl md:text-3xl font-bold text-sky-900 tracking-tight dark:text-teal-400">
            Our Regional Hubs
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* North America Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h3 className="border-b-2 border-teal-700 pb-2 text-xl md:text-2xl font-bold text-sky-900 dark:text-white dark:border-teal-500">North America</h3>
                
                <h4 className="mt-5 font-semibold text-teal-700 dark:text-teal-400">United States</h4>
                <ul className="mt-2 space-y-1 text-slate-600 dark:text-gray-300">
                  <li className="rounded-md bg-gradient-to-r from-fuchsia-700/10 to-transparent p-2 font-semibold text-sky-950 dark:from-teal-500/10 dark:text-teal-300">Sacramento, California (Global HQ)</li>
                  <li className="p-2 border-b border-zinc-100 dark:border-gray-700">Austin, Texas</li>
                  <li className="p-2 border-b border-zinc-100 dark:border-gray-700">Albany, New York</li>
                  <li className="p-2 border-b border-zinc-100 dark:border-gray-700">Springfield, Illinois</li>
                  <li className="p-2 border-b border-zinc-100 dark:border-gray-700">Orlando, Florida</li>
                  <li className="p-2">Dover, Delaware</li>
                </ul>

                <h4 className="mt-5 font-semibold text-teal-700 dark:text-teal-400">Canada</h4>
                <ul className="mt-1 text-slate-600 dark:text-gray-300">
                  <li className="p-2">Toronto</li>
                </ul>
              </div>
            </div>

            {/* Europe Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h3 className="border-b-2 border-teal-700 pb-2 text-xl md:text-2xl font-bold text-sky-900 dark:text-white dark:border-teal-500">Europe</h3>
                <ul className="mt-5 space-y-1 text-slate-600 dark:text-gray-300">
                  <li className="p-2 border-b border-zinc-100 dark:border-gray-700">United Kingdom (London)</li>
                  <li className="p-2 border-b border-zinc-100 dark:border-gray-700">Germany (Frankfurt)</li>
                  <li className="p-2 border-b border-zinc-100 dark:border-gray-700">France (Paris)</li>
                  <li className="p-2">Spain (Madrid)</li>
                </ul>
              </div>
            </div>

            {/* Africa Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h3 className="border-b-2 border-teal-700 pb-2 text-xl md:text-2xl font-bold text-sky-900 dark:text-white dark:border-teal-500">Africa</h3>
                <ul className="mt-5 space-y-1">
                  <li className="p-2 text-slate-600 border-b border-zinc-100 dark:text-gray-300 dark:border-gray-700">South Africa (Cape Town — Regional Expansion)</li>
                  <li className="flex items-center space-x-2 p-2 font-semibold text-teal-700 border-b border-zinc-100 dark:text-teal-400 dark:border-gray-700">
                    <span className="text-[10px]">●</span> <span>Nigeria (Lagos — Regional Hub)</span>
                  </li>
                  <li className="flex items-center space-x-2 p-2 font-semibold text-teal-700 border-b border-zinc-100 dark:text-teal-400 dark:border-gray-700">
                    <span className="text-[10px]">●</span> <span>Kenya (Nairobi — East Africa Hub)</span>
                  </li>
                  <li className="flex items-center space-x-2 p-2 font-semibold text-teal-700 dark:text-teal-400">
                    <span className="text-[10px]">●</span> <span>Ghana (Accra — West Africa Hub)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Asia-Pacific Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h3 className="border-b-2 border-teal-700 pb-2 text-xl md:text-2xl font-bold text-sky-900 dark:text-white dark:border-teal-500">Asia-Pacific</h3>
                <ul className="mt-5 space-y-1">
                  <li className="p-2 text-slate-600 border-b border-zinc-100 dark:text-gray-300 dark:border-gray-700">India (Delivery & Innovation Hub)</li>
                  <li className="flex items-center space-x-2 p-2 font-semibold text-teal-700 dark:text-teal-400">
                    <span className="text-[10px]">●</span> <span>Singapore (Regional HQ)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Caribbean Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h3 className="border-b-2 border-teal-700 pb-2 text-xl md:text-2xl font-bold text-sky-900 dark:text-white dark:border-teal-500">Caribbean</h3>
                <ul className="mt-5 text-slate-600 dark:text-gray-300">
                  <li className="p-2">Jamaica (Delivery & Customer Support Center)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MIDDLE STATEMENT BANNER --- */}
      <section className="bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 py-12 md:py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Local Knowledge. Global Standards.</h2>
          <p className="mt-3 text-sm md:text-lg text-zinc-100 leading-relaxed">
            Our presence is more than geography — it's a promise. From Sacramento to Singapore, from Madrid to Nairobi, Zoiko Digital integrates regional expertise, regulatory compliance, and world-class delivery to help clients scale with confidence.
          </p>
        </div>
      </section>

      {/* --- CONTACT & INTERACTIVE FORM SECTION --- */}
      <section className="w-full bg-zinc-100 py-12 md:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ================= LEFT COLUMN: DETAILS ================= */}
          <div className="flex flex-col gap-8 md:gap-12 pt-4 lg:max-w-[552px]">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-zinc-800 dark:text-white text-2xl lg:text-[32px] font-bold leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-neutral-600 dark:text-gray-300 text-base lg:text-lg font-normal leading-relaxed">
                Connect with our global team of experts to discuss your digital transformation journey and discover how we can accelerate your success.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-3 lg:flex lg:flex-col">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0 shadow-sm text-white text-xl">
                  ✉
                </div>
                <div className="flex flex-col mt-0.5">
                  <h4 className="text-zinc-800 dark:text-white text-base font-semibold">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@zoikodigital.com"
                    className="text-zinc-500 dark:text-teal-400 text-sm font-normal hover:text-sky-900 dark:hover:text-teal-300 transition-colors break-all"
                  >
                    hello@zoikodigital.com
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs mt-0.5">
                    Response within 4 hours
                  </span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0 shadow-sm text-white text-xl">
                  📞
                </div>
                <div className="flex flex-col mt-0.5">
                  <h4 className="text-zinc-800 dark:text-white text-base font-semibold">
                    Call Us
                  </h4>
                  <a
                    href="tel:+15551234567"
                    className="text-zinc-500 dark:text-teal-400 text-sm font-normal hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs mt-0.5">
                    24/7 Support Available
                  </span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0 shadow-sm text-white text-xl">
                  💬
                </div>
                <div className="flex flex-col mt-0.5">
                  <h4 className="text-zinc-800 dark:text-white text-base font-semibold">
                    Live Chat
                  </h4>
                  <span className="text-zinc-500 dark:text-teal-400 text-sm font-normal">
                    Instant Support
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-zinc-400 dark:text-gray-400 text-xs font-medium">
                      Online now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="bg-white dark:bg-gray-800 rounded-[20px] p-6 sm:p-10 border border-neutral-300 dark:border-gray-700 w-full lg:max-w-[572px] lg:ml-auto shadow-sm dark:shadow-black/20 transition-colors duration-300">
            <form className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Business Email
                </label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Acme Corp"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Service Interest
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-sm"
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
                      className="w-4 h-4 text-zinc-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Project Budget
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-sm"
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
                      className="w-4 h-4 text-zinc-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Project Details
                </label>
                <textarea
                  className="w-full h-24 p-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-zinc-800 dark:text-white text-sm placeholder-neutral-400 dark:placeholder-gray-500"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 w-full sm:w-56 h-12 bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 hover:opacity-90 dark:from-teal-600 dark:via-teal-700 dark:to-teal-500 text-white text-base font-semibold rounded-xl transition-all shadow-sm"
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