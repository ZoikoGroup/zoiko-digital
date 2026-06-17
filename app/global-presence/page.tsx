import React from 'react';


export default function GlobalPresencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      {/* 1. Hero Section */}
      <section className="w-full bg-gradient-to-r from-fuchsia-700 to-sky-900 py-24 md:py-32 px-6 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="flex flex-col gap-[28px] text-white z-10 w-full max-w-[550px]">
            <h1 className="text-2xl md:text-[40px] font-semibold font-['Inter'] leading-9 md:leading-[50px]">
              Global Reach. Local Expertise.<br />Unmatched Standards.
            </h1>
            <p className="text-base md:text-lg font-normal font-['Inter'] leading-7">
              From our headquarters in Sacramento, California, Zoiko Web Services powers digital transformation across continents delivering Tier-1 cloud, compliance, and web solutions<br className="hidden lg:block" />with deep local expertise.
            </p>
          </div>
          <div className="w-full max-w-[577px] h-64 md:h-80 bg-white rounded-xl overflow-hidden shadow-2xl shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/images/global/hero.jpg"
              alt="Global Industrial Workers"
            />
          </div>
        </div>
      </section>

      {/* 2. Regions Section */}
      <section className="w-full bg-fuchsia-50 py-24 px-6 border-y border-fuchsia-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* North America */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden">
              <div className="p-8 pb-4">
                <div className="border-b-2 border-fuchsia-700 pb-2 mb-6">
                  <h2 className="text-sky-900 text-2xl font-bold font-['Inter']">North America</h2>
                </div>

                <h3 className="text-fuchsia-700 text-lg font-semibold font-['Inter'] mb-3">United States</h3>
                <ul className="flex flex-col">
                  <li className="py-3 bg-gradient-to-r from-fuchsia-700/10 to-transparent border-b border-zinc-100 px-3 -mx-3 rounded-t-md">
                    <span className="text-sky-900 text-base font-semibold font-['Inter']">Sacramento, California (Global HQ)</span>
                  </li>
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">Austin, Texas</span></li>
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">Albany, New York</span></li>
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">Springfield, Illinois</span></li>
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">Orlando, Florida</span></li>
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">Dover, Delaware</span></li>
                </ul>

                <h3 className="text-fuchsia-700 text-lg font-semibold font-['Inter'] mt-8 mb-3">Canada</h3>
                <ul className="flex flex-col">
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">Toronto</span></li>
                </ul>
              </div>
            </div>

            {/* Europe */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden">
              <div className="p-8">
                <div className="border-b-2 border-fuchsia-700 pb-2 mb-6">
                  <h2 className="text-sky-900 text-2xl font-bold font-['Inter']">Europe</h2>
                </div>

                <ul className="flex flex-col">
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">United Kingdom (London)</span></li>
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">Germany (Frankfurt)</span></li>
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">France (Paris)</span></li>
                  <li className="py-3 border-b border-zinc-100"><span className="text-zinc-800 text-base font-normal font-['Inter']">Spain (Madrid)</span></li>
                </ul>
              </div>
            </div>

            {/* Africa */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden">
              <div className="p-8">
                <div className="border-b-2 border-fuchsia-700 pb-2 mb-6">
                  <h2 className="text-sky-900 text-2xl font-bold font-['Inter']">Africa</h2>
                </div>

                <ul className="flex flex-col">
                  <li className="py-3 border-b border-zinc-100 flex items-start gap-2">
                    <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                    <span className="text-fuchsia-700 text-base font-semibold font-['Inter']">Nigeria (Lagos — Regional Hub)</span>
                  </li>
                  <li className="py-3 border-b border-zinc-100 flex items-start">
                    <span className="text-zinc-800 text-base font-normal font-['Inter'] ml-3">South Africa (Cape Town — Regional Expansion)</span>
                  </li>
                  <li className="py-3 border-b border-zinc-100 flex items-start gap-2">
                    <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                    <span className="text-fuchsia-700 text-base font-semibold font-['Inter']">Kenya (Nairobi — East Africa Hub)</span>
                  </li>
                  <li className="py-3 border-b border-zinc-100 flex items-start gap-2">
                    <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                    <span className="text-fuchsia-700 text-base font-semibold font-['Inter']">Ghana (Accra — West Africa Hub)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Asia-Pacific */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden">
              <div className="p-8">
                <div className="border-b-2 border-fuchsia-700 pb-2 mb-6">
                  <h2 className="text-sky-900 text-2xl font-bold font-['Inter']">Asia-Pacific</h2>
                </div>

                <ul className="flex flex-col">
                  <li className="py-3 border-b border-zinc-100">
                    <span className="text-zinc-800 text-base font-normal font-['Inter']">India (Delivery & Innovation Hub)</span>
                  </li>
                  <li className="py-3 border-b border-zinc-100 flex items-start gap-2">
                    <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                    <span className="text-fuchsia-700 text-base font-semibold font-['Inter']">Singapore (Regional HQ)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Caribbean */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden">
              <div className="p-8">
                <div className="border-b-2 border-fuchsia-700 pb-2 mb-6">
                  <h2 className="text-sky-900 text-2xl font-bold font-['Inter']">Caribbean</h2>
                </div>

                <ul className="flex flex-col">
                  <li className="py-3 border-b border-zinc-100">
                    <span className="text-zinc-800 text-base font-normal font-['Inter'] block pr-4">Jamaica (Delivery & Customer Support Center)</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Promise Banner */}
      <section className="w-full bg-gradient-to-r from-fuchsia-700 to-sky-900 py-24 md:py-16 px-6 text-center flex flex-col items-center justify-center relative z-20 shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col gap-9 md:gap-6">
          <h2 className="text-white text-xl md:text-4xl font-semibold font-['Inter'] md:leading-[64px]">Local Knowledge. Global Standards.</h2>
          <p className="text-zinc-100 text-lg md:text-xl font-normal font-['Inter'] leading-6 md:leading-relaxed">
            Our presence is more than geography — it's a promise. From Sacramento to Singapore, from Madrid to Nairobi, Zoiko Web Services integrates regional expertise, regulatory compliance, and world-class delivery to help clients scale with confidence.
          </p>
        </div>
      </section>

      {/* 4. Contact Form Section */}
      <section className="w-full bg-zinc-100 py-24 px-6">
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
                  <img src="/images/global/SVG.svg" alt="Email Icon" className="w-5 h-5 md:w-6 md:h-6" />
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
                  <img src="/images/global/SVG-1.svg" alt="Phone Icon" className="w-5 h-5 md:w-6 md:h-6" />
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
                  <img src="/images/global/SVG-2.svg" alt="Chat Icon" className="w-5 h-5 md:w-6 md:h-6" />
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
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Business Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Company</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder="Your Company Name"
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
