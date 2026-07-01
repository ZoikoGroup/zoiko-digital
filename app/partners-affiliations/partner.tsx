"use client"
import React from 'react';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-teal-500 selection:text-white transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
      
      {/* 2. HERO SECTION */}
      <header className="relative w-full bg-gradient-to-br from-indigo-950 via-teal-800 to-teal-500 overflow-hidden text-white py-16 sm:py-20 lg:py-32">
        
        {/* Floating tech badges */}
        <div className="absolute top-12 left-10 opacity-20 hidden md:block bg-white/10 px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm text-xs font-bold">AWS</div>
        <div className="absolute bottom-16 left-1/4 opacity-20 hidden lg:block bg-white/10 px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm text-xs font-bold">IBM</div>
        <div className="absolute top-8 right-1/4 opacity-20 hidden md:block bg-white/10 px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm text-xs font-bold">Microsoft</div>
        <div className="absolute bottom-12 right-12 opacity-20 hidden lg:block bg-white/10 px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm text-xs font-bold">Google</div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-none">
            Stronger Together: Building Global Impact with Our Partners
          </h1>
          <p className="text-base sm:text-xl text-teal-50/90 font-light max-w-3xl mx-auto leading-relaxed">
            At Zoiko Digital, collaboration is the cornerstone of innovation. We join forces with Tier-1 technology leaders, telecom providers, advisors, and regulatory institutions to deliver future-ready solutions.
          </p>
        </div>
      </header>

      {/* 3. PARTNERS DIRECTORY COMPONENT */}
      <section className="bg-fuchsia-50/40 py-12 sm:py-20 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16">
            <button className="bg-teal-700 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">All Partners</button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:border-slate-300 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600">Technology & Cloud</button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:border-slate-300 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600">Telecom & Infrastructure</button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:border-slate-300 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600">Advisory & Consulting</button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:border-slate-300 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600">Regulatory & ESG</button>
          </div>

          {/* Partners Cards Grid System */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card Items */}
            {[
              { name: "Amazon Web Services", cat: "Technology & Cloud Innovation", desc: "Advanced Partner status enabling enterprise-grade cloud solutions with AI/ML capabilities." },
              { name: "Microsoft", cat: "Technology & Cloud Innovation", desc: "Gold Partner delivering Azure-based solutions for enterprise digital transformation." },
              { name: "Google Cloud", cat: "Technology & Cloud Innovation", desc: "Premier Partner specializing in AI, machine learning, and data analytics platforms." },
              { name: "IBM", cat: "Technology & Cloud Innovation", desc: "Strategic partnership for hybrid cloud and AI-powered business solutions." },
              { name: "Vodafone", cat: "Telecom & Infrastructure", desc: "Global telecommunications infrastructure and IoT connectivity solutions." },
              { name: "MTN Group", cat: "Telecom & Infrastructure", desc: "Leading African telecom provider enabling mobile financial services across 21 countries." },
              { name: "Cisco", cat: "Telecom & Infrastructure", desc: "Network infrastructure and cybersecurity solutions for enterprise and carrier networks." },
              { name: "McKinsey & Company", cat: "Advisory & Consulting", desc: "Strategic consulting partnership for digital transformation and organizational change." },
              { name: "Deloitte", cat: "Advisory & Consulting", desc: "Risk management, compliance, and regulatory advisory services for global markets." },
              { name: "ISO", titleFull: "International Organization for Standardization", cat: "Regulatory & ESG", desc: "ISO 27001, 9001, and 14001 certified ensuring quality, security, and environmental standards." },
              { name: "IEEE", titleFull: "Institute of Electrical and Electronics Engineers", cat: "Regulatory & ESG", desc: "Advancing technology standards for AI ethics, cybersecurity, and sustainable innovation." },
              { name: "UN Global Compact", cat: "Regulatory & ESG", desc: "Committed to sustainable development goals and responsible business practices worldwide." }
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col justify-between dark:bg-gray-800 dark:border-gray-700 dark:shadow-black/20">
                <div className="bg-slate-50/70 p-6 border-b border-slate-100 flex items-center justify-center min-h-[112px] dark:bg-gray-900/40 dark:border-gray-700">
                  <div className="bg-white border border-slate-200 rounded-lg px-6 py-3 shadow-sm font-bold text-sky-900 tracking-tight text-center w-full max-w-[280px] dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                    {partner.name}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-2 dark:text-teal-400">{partner.cat}</span>
                    <h3 className="text-xl font-bold text-sky-950 mb-2 dark:text-white">{partner.titleFull || partner.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed dark:text-gray-400">{partner.desc}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. TRANSFORMATIONAL QUOTE SECTION */}
      <section className="bg-white py-12 sm:py-16 border-y border-slate-100 text-center dark:bg-gray-900 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl sm:text-3xl font-bold text-sky-900 mb-3 leading-tight dark:text-white">
            Partnerships Are Not Transactional — They Are Transformational
          </h2>
          <p className="text-teal-700 text-base sm:text-xl font-semibold dark:text-teal-400">
            Together, we don't just build technology. We build the future.
          </p>
        </div>
      </section>

      {/* 5. SUCCESS STORY CASY STUDY */}
      <section className="bg-violet-50/60 py-12 sm:py-20 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-sky-900 mb-8 sm:mb-10 dark:text-white">Partner Success Stories</h2>
          
          <div className="bg-white rounded-[20px] shadow-xl border border-purple-100 p-6 sm:p-12 text-center space-y-6 sm:space-y-8 relative overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center space-x-2">
              <span className="bg-gradient-to-r from-indigo-950 to-teal-700 text-white font-bold text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg shadow-sm">Zoiko</span>
              <span className="text-teal-700 text-xl sm:text-2xl font-light dark:text-teal-400">+</span>
              <span className="bg-gradient-to-r from-teal-700 to-teal-400 text-white font-bold text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg shadow-sm">AWS</span>
            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-sky-900 dark:text-white">Reducing Fintech Compliance Costs by 35%</h3>
            <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed dark:text-gray-300">
              Joint AI-powered compliance platform automates regulatory reporting across 15 jurisdictions, saving clients $2M annually in manual oversight costs.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-4 border-t border-slate-100 pt-6 sm:pt-8 dark:border-gray-700">
              <div>
                <div className="text-xl sm:text-4xl font-extrabold text-teal-700 dark:text-teal-400">35%</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider dark:text-gray-400">Cost Reduction</div>
              </div>
              <div>
                <div className="text-xl sm:text-4xl font-extrabold text-teal-700 dark:text-teal-400">15</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider dark:text-gray-400">Jurisdictions</div>
              </div>
              <div>
                <div className="text-xl sm:text-4xl font-extrabold text-teal-700 dark:text-teal-400">$2M</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider dark:text-gray-400">Savings</div>
              </div>
            </div>

            <div className="pt-2">
              <button className="text-teal-700 hover:text-teal-800 font-bold text-sm sm:text-md inline-flex items-center group transition-colors dark:text-teal-400 dark:hover:text-teal-300">
                Explore Full Case Study <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ALIGNED WITH WORLD STANDARDS GRID */}
      <section className="bg-white py-12 sm:py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-white">Aligned with the World's Standards</h2>
            <p className="text-slate-500 text-sm sm:text-lg leading-relaxed dark:text-gray-400">
              Our memberships and affiliations ensure every solution we deliver meets the highest standards of compliance, trust, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: "🏆", title: "ISO 27001", sub: "Information Security Management" },
              { icon: "🔒", title: "SOC 2 Type II", sub: "Security, Availability & Confidentiality" },
              { icon: "💳", title: "PCI DSS", sub: "Payment Card Industry Standards" },
              { icon: "⚡", title: "IEEE Member", sub: "Technology Standards Leadership" },
              { icon: "📱", title: "GSMA", sub: "Mobile Industry Standards" },
              { icon: "🌍", title: "UN Global Compact", sub: "Sustainable Development Goals" }
            ].map((std, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-center space-y-3 dark:bg-gray-800 dark:border-gray-700">
                <div className="text-3xl sm:text-4xl">{std.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-sky-900 dark:text-white">{std.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm dark:text-gray-400">{std.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ECOSYSTEM PROGRAM TIERS */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-20 border-t border-slate-100 dark:from-gray-900 dark:to-gray-900/60 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-white">An Ecosystem Built for Every Partner</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-sky-900 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                icon: "💡", title: "Innovation Partners", meta: "Startups • Developers • Small Firms",
                desc: "Join our innovation ecosystem to accelerate growth and bring cutting-edge solutions to global markets.",
                perks: ["Access to Zoiko Academy resources", "Technical documentation and APIs", "Go-to-market support", "Global marketplace exposure"]
              },
              { 
                icon: "📈", title: "Growth Partners", meta: "Mid-size Companies • Solution Developers",
                desc: "Scale your business with co-developed solutions and joint go-to-market strategies across global regions.",
                perks: ["Joint solution development", "Dedicated partner manager", "Marketing and sales support", "Revenue sharing opportunities"]
              },
              { 
                icon: "🏢", title: "Enterprise Partners", meta: "Global Leaders • Industry Transformers",
                desc: "Drive industry transformation through strategic alliances and co-innovation initiatives that shape the future.",
                perks: ["Strategic alliance management", "Co-innovation laboratories", "Executive relationship programs", "Global market expansion"]
              }
            ].map((tier, idx) => (
              <div key={idx} className="bg-white rounded-[20px] shadow-md border border-slate-100 overflow-hidden p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center border-b border-slate-100 pb-6 space-y-2 dark:border-gray-700">
                    <div className="text-3xl sm:text-4xl">{tier.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-sky-900 dark:text-white">{tier.title}</h3>
                    <div className="text-[10px] sm:text-xs font-bold text-teal-700 tracking-wide uppercase dark:text-teal-400">{tier.meta}</div>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed dark:text-gray-300">
                    {tier.desc}
                  </p>
                  
                  <ul className="space-y-2.5 pt-2">
                    {tier.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-slate-600 flex items-start space-x-2 dark:text-gray-400">
                        <span className="text-teal-600 font-bold dark:text-teal-400">✓</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 sm:pt-8">
                  <button className="text-teal-700 hover:text-teal-800 font-bold text-xs sm:text-sm inline-flex items-center group dark:text-teal-400 dark:hover:text-teal-300">
                    Learn More <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. QUICK PARTNER BANNER ACTION */}
      <section className="bg-gradient-to-r from-sky-900 to-slate-900 text-white py-12 sm:py-16 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Partner With Us</h2>
          <p className="text-white/80 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From disruptors to global enterprises, Zoiko Digital empowers its partners to scale, innovate, and deliver impact worldwide. Join our ecosystem to accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto">
            <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-900 via-teal-700 to-teal-500 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-md shadow-lg hover:brightness-110 transition-all">
              Apply to Become a Partner
            </button>
            <button className="w-full sm:w-auto border border-white/50 hover:border-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-md bg-white/5 transition-colors">
              Contact Partnerships Team
            </button>
          </div>
        </div>
      </section>

      {/* 9. CONTACT / FORM SECTION */}
      <section className="w-full bg-zinc-100 py-12 sm:py-16 px-4 sm:px-6 md:px-12 transition-colors duration-300 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

          {/* ================= LEFT COLUMN: DETAILS ================= */}
          <div className="flex flex-col gap-8 sm:gap-12 pt-4 lg:max-w-[552px]">
            <div className="flex flex-col gap-4 sm:gap-[34px]">
              <h2 className="text-zinc-800 dark:text-white text-2xl sm:text-[32px] font-bold leading-tight">
                Ready to Transform
                <br className="hidden sm:block" />
                Your Business?
              </h2>
              <p className="text-neutral-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                Connect with our global team of experts to discuss your digital
                <br className="hidden lg:block" />
                transformation journey and discover how we can accelerate your
                <br className="hidden lg:block" />
                success.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Email */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-teal-700 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-white text-lg sm:text-xl">✉</span>
                </div>
                <div className="flex flex-col mt-0.5 sm:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base font-semibold leading-normal">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@zoikodigital.com"
                    className="text-zinc-500 dark:text-teal-400 text-sm font-normal hover:text-sky-900 dark:hover:text-teal-300 transition-colors break-all"
                  >
                    hello@zoikodigital.com
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs font-normal mt-0.5">
                    Response within 4 hours
                  </span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-teal-700 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-white text-lg sm:text-xl">📞</span>
                </div>
                <div className="flex flex-col mt-0.5 sm:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base font-semibold leading-normal">
                    Call Us
                  </h4>
                  <a
                    href="tel:+15551234567"
                    className="text-zinc-500 dark:text-teal-400 text-sm font-normal hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs font-normal mt-0.5">
                    24/7 Support Available
                  </span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-teal-700 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-white text-lg sm:text-xl">💬</span>
                </div>
                <div className="flex flex-col mt-0.5 sm:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base font-semibold leading-normal">
                    Live Chat
                  </h4>
                  <span className="text-zinc-500 dark:text-teal-400 text-sm font-normal">
                    Instant Support Framework
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
                    <span className="text-zinc-400 dark:text-gray-400 text-xs font-normal">
                      Online now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="bg-white dark:bg-gray-800 rounded-[20px] p-6 sm:p-10 border border-neutral-300 dark:border-gray-700 w-full lg:max-w-[572px] lg:ml-auto shadow-sm dark:shadow-black/20 transition-colors duration-300">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full h-11 sm:h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Business Email
                </label>
                <input
                  type="email"
                  className="w-full h-11 sm:h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full h-11 sm:h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                  placeholder="Acme Corporation"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Service Interest
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-12 sm:h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
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
                    className="w-full h-12 sm:h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">
                  Project Details
                </label>
                <textarea
                  className="w-full h-24 sm:h-28 p-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all text-zinc-800 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500 text-sm"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 w-full sm:w-56 h-12 sm:h-14 self-start bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 hover:brightness-110 text-white text-base font-semibold rounded-xl transition-all shadow-md"
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