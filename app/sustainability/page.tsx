"use client";
import React, { useState } from "react";

const governanceCards = [
  {
    icon: "🏛️",
    title: "Board Oversight",
    description: "ESG & Risk Committee provides strategic oversight and governance of all sustainability initiatives.",
    linkText: "View Committee Charter →"
  },
  {
    icon: "👥",
    title: "Executive Ownership",
    description: "Chief Sustainability Officer leads cross-functional RACI including CTO, CHRO, CLO, and CPO.",
    linkText: "See Leadership Structure →"
  },
  {
    icon: "📊",
    title: "Reporting Cadence",
    description: "Annual ESG report with quarterly KPI dashboard updates ensuring transparency and accountability.",
    linkText: "Access Latest Reports →"
  },
  {
    icon: "📋",
    title: "Policies & Standards",
    description: "Comprehensive framework including Code of Conduct, Human Rights Policy, and Responsible AI Standard.",
    linkText: "View Governance & Policies →"
  },
  {
    icon: "📞",
    title: "Speak-Up Mechanism",
    description: "Confidential whistleblower hotline and grievance mechanism ensuring ethical business practices.",
    linkText: "Report Concerns →"
  }
];

const esgPillars = [
  {
    icon: "🌍",
    title: "Environmental Stewardship",
    description: "Committed to 100% renewable energy, improved PUE performance, water stewardship, and circular hardware lifecycle management.",
    metric1: "100%",
    metric1Label: "Renewable Energy\nTarget",
    metric2: "≤1.25",
    metric2Label: "PUE Target by\n2027"
  },
  {
    icon: "👥",
    title: "Social Responsibility",
    description: "Fostering inclusive hiring practices, pay equity, Zoiko Academy programs, and strategic community investment initiatives.",
    metric1: "500K",
    metric1Label: "Learners by 2030",
    metric2: "50%",
    metric2Label: "Leadership Diversity"
  },
  {
    icon: "⚖️",
    title: "Governance & Trust",
    description: "Implementing responsible AI frameworks, comprehensive compliance programs, anti-corruption measures, and supplier ESG alignment.",
    metric1: "100%",
    metric1Label: "AI Models Reviewed",
    metric2: "80%",
    metric2Label: "Suppliers ESG Aligned"
  }
];

const roadmapItems = [
  {
    year: "2027",
    title: "Near-term Targets",
    items: [
      "≥90% renewable electricity across all operations",
      "PUE ≤1.25 for all data centers",
      "80% suppliers signed to ESG Code",
      "Carbon neutral operations"
    ],
    align: "left"
  },
  {
    year: "2030",
    title: "Long-term Vision",
    items: [
      "SBTi Scope 1 & 2 emissions reduction",
      "50% water intensity reduction",
      "500k learners trained through Zoiko Academy",
      "Net-zero carbon footprint"
    ],
    align: "right"
  },
  {
    year: "Annual",
    title: "Ongoing Commitments",
    items: [
      "100% AI models reviewed for bias and ethics",
      "Comprehensive DEI reporting and progress",
      "Supplier ESG audits and assessments",
      "Stakeholder engagement and reporting"
    ],
  }
];

const impactMetrics = [
  { title: "Renewable Energy", value: "87%", change: "+12% vs 2023" },
  { title: "PUE Efficiency", value: "1.28", change: "-0.05 vs 2023" },
  { title: "Water Intensity", value: "2.1L/kWh", change: "-15% vs 2023" },
  { title: "DEI Representation", value: "48%", change: "+8% vs 2023" },
  { title: "Learners Trained", value: "145K", change: "+45K vs 2023" },
  { title: "Supplier ESG Compliance", value: "72%", change: "+18% vs 2023" }
];

const impactStories = [
  {
    title: "Africa Cloud Green Initiative",
    locations: "Lagos • Nairobi • Accra",
    description: "Pioneering renewable energy adoption across African data centers, reducing carbon emissions by 65% while expanding digital infrastructure access.",
    tags: ["65% Carbon Reduction", "3 Cities"],
    category: "Environmental",
    image: "https://placehold.co/384x200/e2e8f0/1e293b?text=Africa+Cloud"
  },
  {
    title: "Green 5G Corridors",
    locations: "Madrid • London",
    description: "Implementing energy-efficient 5G networks with AI-optimized power management, achieving 40% energy savings in high-traffic corridors.",
    tags: ["40% Energy Savings", "2 Cities"],
    category: "Innovation",
    image: "https://placehold.co/384x200/e2e8f0/1e293b?text=5G+Corridors"
  },
  {
    title: "Digital Inclusion Initiative",
    locations: "Sacramento • Toronto • Cape Town",
    description: "Bridging the digital divide through Zoiko Academy programs, training 50,000+ individuals in digital skills and financial literacy.",
    tags: ["50K+ Trained", "85% Employment Rate"],
    category: "Social",
    image: "https://placehold.co/384x200/e2e8f0/1e293b?text=Digital+Inclusion"
  }
];

export default function Sustainability() {
  return (
    <div className="w-full min-h-screen bg-slate-50 font-['Inter']">
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-fuchsia-700 to-sky-900 py-32 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Technology That Powers People and Protects the Planet
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed">
            Sustainability is our operating system. Every Zoiko solution aims to advance human
            progress while reducing environmental impact.
          </p>
        </div>
      </section>

      {/* ESG Governance & Oversight */}
      <section className="w-full bg-fuchsia-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-sky-900 text-3xl font-semibold mb-4">ESG Governance & Oversight</h2>
            <div className="w-32 h-1 bg-fuchsia-800 rounded-md"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {governanceCards.map((card, idx) => (
              <div key={idx} className="w-full md:w-[350px] bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center">
                <div className="text-5xl mb-6">{card.icon}</div>
                <h3 className="text-sky-900 text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-stone-500 text-base mb-8 flex-grow">{card.description}</p>
                <a href="#" className="text-emerald-400 font-bold mt-auto hover:text-emerald-500 transition-colors">{card.linkText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our ESG Pillars */}
      <section className="w-full bg-sky-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-sky-900 text-3xl font-semibold mb-4">Our ESG Pillars</h2>
            <div className="w-20 h-1 bg-fuchsia-800 rounded-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-[20px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-10 flex flex-col items-center text-center">
                <div className="text-6xl mb-8">{pillar.icon}</div>
                <h3 className="text-sky-900 text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-stone-500 text-base mb-12 flex-grow">{pillar.description}</p>
                <div className="flex justify-between w-full mt-auto">
                  <div className="flex flex-col items-center w-1/2">
                    <span className="text-emerald-400 text-3xl font-bold mb-2">{pillar.metric1}</span>
                    <span className="text-stone-500 text-sm font-bold whitespace-pre-line text-center">{pillar.metric1Label}</span>
                  </div>
                  <div className="flex flex-col items-center w-1/2">
                    <span className="text-emerald-400 text-3xl font-bold mb-2">{pillar.metric2}</span>
                    <span className="text-stone-500 text-sm font-bold whitespace-pre-line text-center">{pillar.metric2Label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targets & Roadmap */}
      <section className="w-full bg-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center mb-24 relative z-10">
            <h2 className="text-sky-900 text-3xl font-semibold mb-4 text-center">Targets & Roadmap</h2>
            <div className="w-20 h-1 bg-fuchsia-700 rounded-md"></div>
          </div>

          <div className="relative w-full max-w-[1000px] mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-sky-900 -translate-x-1/2 hidden lg:block z-0"></div>
            
            <div className="flex flex-col gap-12 lg:gap-16 relative w-full">
              {roadmapItems.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-center w-full ${item.align === 'left' ? 'lg:justify-end' : 'lg:justify-start'}`}>
                   {/* Circle */}
                   <div className={`lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-20 h-20 lg:w-24 lg:h-24 bg-fuchsia-700 rounded-full shadow-[0px_4px_20px_0px_rgba(66,184,131,0.30)] flex items-center justify-center text-white text-lg lg:text-xl font-bold z-20 mb-6 lg:mb-0 ${item.align === 'left' ? 'lg:left-0' : 'lg:right-0'}`}>
                     {item.year}
                   </div>
                   
                   {/* Card */}
                   <div className={`bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 lg:p-10 w-full lg:w-[836px] z-10 ${item.align === 'left' ? 'lg:ml-[132px]' : 'lg:mr-[132px]'}`}>
                     <h3 className="text-sky-900 text-xl font-bold mb-6">{item.title}</h3>
                     <div className="flex flex-col gap-4">
                       {item.items.map((point, i) => (
                         <div key={i} className="flex items-start gap-4">
                           <span className="text-emerald-400 text-base font-bold mt-0.5">✓</span>
                           <span className="text-stone-500 text-base">{point}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex justify-center relative z-20">
              <button className="px-8 py-4 bg-sky-900 text-white text-lg font-bold rounded-lg outline outline-2 outline-offset-[-2px] outline-white/50 hover:bg-sky-950 transition-colors shadow-lg">
                See Full Target Glossary →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Dashboard */}
      <section className="w-full bg-slate-50 py-24 px-6 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-sky-900 text-3xl font-semibold mb-4 text-center">Impact Metrics Dashboard</h2>
            <div className="w-20 h-1 bg-fuchsia-700 rounded-md"></div>
          </div>
          
          <div className="w-full max-w-[1224px] mx-auto bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-6 mb-16 flex flex-wrap items-center gap-6 justify-between">
            <div className="flex flex-wrap items-center gap-8 px-4">
              <div className="flex items-center gap-3">
                <span className="text-sky-900 text-sm font-bold">Region:</span>
                <select className="h-9 px-3 bg-white rounded-lg outline outline-2 outline-neutral-200 text-black text-sm font-medium w-32 focus:outline-sky-900 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-no-repeat bg-[position:right_8px_center]">
                  <option>Global</option>
                  <option>North America</option>
                  <option>Europe</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sky-900 text-sm font-bold">Year:</span>
                <select className="h-9 px-3 bg-white rounded-lg outline outline-2 outline-neutral-200 text-black text-sm font-medium w-24 focus:outline-sky-900 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-no-repeat bg-[position:right_8px_center]">
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sky-900 text-sm font-bold">Pillar:</span>
                <select className="h-9 px-3 bg-white rounded-lg outline outline-2 outline-neutral-200 text-black text-sm font-medium w-36 focus:outline-sky-900 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-no-repeat bg-[position:right_8px_center]">
                  <option>All Pillars</option>
                  <option>Environmental</option>
                  <option>Social</option>
                  <option>Governance</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-4 px-4 mt-4 md:mt-0">
              <button className="px-5 py-2 bg-emerald-400 hover:bg-emerald-500 rounded-md text-white text-sm font-semibold transition-colors">
                Download CSV
              </button>
              <button className="px-5 py-2 bg-emerald-400 hover:bg-emerald-500 rounded-md text-white text-sm font-semibold transition-colors">
                API Access
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[1224px] mx-auto">
            {impactMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 h-64 flex flex-col justify-center">
                <div className="text-stone-500 text-base font-bold mb-4">{metric.title}</div>
                <div className="text-sky-900 text-4xl lg:text-5xl font-bold mb-6">{metric.value}</div>
                <div className="text-emerald-400 text-sm font-bold">{metric.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Impact Stories */}
      <section className="w-full bg-white py-24 px-6 relative">
        <div className="max-w-[1224px] mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center mb-16 relative z-10">
            <h2 className="text-sky-900 text-3xl font-semibold mb-4 text-center">ESG Impact Stories</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 rounded-md"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {impactStories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-48 bg-stone-300">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-emerald-400/90 rounded-2xl text-white text-xs font-bold shadow-sm">
                    {story.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-sky-900 text-xl font-bold mb-3">{story.title}</h3>
                  <div className="text-fuchsia-700 text-sm font-bold mb-4">{story.locations}</div>
                  <p className="text-stone-500 text-base font-normal leading-relaxed mb-8 flex-grow">
                    {story.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-auto">
                    {story.tags.map((tag, tIdx) => (
                      <div key={tIdx} className="px-4 py-1.5 bg-sky-50 rounded-2xl text-sky-900 text-xs font-bold">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="px-8 py-4 bg-sky-900 text-white text-lg font-bold rounded-lg hover:bg-sky-950 transition-colors shadow-lg">
              Explore ESG Stories →
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-zinc-100 py-16 px-6 lg:px-16 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="flex flex-col gap-12 pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-8">
              <h2 className="text-zinc-800 text-3xl lg:text-4xl font-bold leading-tight">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-neutral-600 text-lg font-normal leading-relaxed">
                Connect with our global team of experts to discuss your digital transformation journey and discover how we can accelerate your success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="flex flex-col mt-1">
                  <h4 className="text-zinc-800 text-lg font-semibold leading-7">Email Us</h4>
                  <a href="mailto:hello@zws.com" className="text-zinc-500 text-base hover:text-sky-900 transition-colors">hello@zws.com</a>
                  <span className="text-zinc-400 text-sm mt-1">Response within 4 hours</span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="flex flex-col mt-1">
                  <h4 className="text-zinc-800 text-lg font-semibold leading-7">Call Us</h4>
                  <a href="tel:+15551234567" className="text-zinc-500 text-base hover:text-sky-900 transition-colors">+1 (555) 123-4567</a>
                  <span className="text-zinc-400 text-sm mt-1">24/7 Support Available</span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </div>
                <div className="flex flex-col mt-1">
                  <h4 className="text-zinc-800 text-lg font-semibold leading-7">Live Chat</h4>
                  <span className="text-zinc-500 text-base">Instant Support</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-zinc-400 text-sm">Online now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-neutral-200 shadow-sm w-full lg:max-w-lg lg:ml-auto">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-zinc-800 text-sm font-semibold">Full Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-50 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-zinc-800 text-sm font-semibold">Business Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-50 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-zinc-800 text-sm font-semibold">Company</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-50 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-zinc-800 text-sm font-semibold">Service Interest</label>
                <select defaultValue="" className="w-full h-12 px-4 bg-neutral-50 rounded-lg border border-stone-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all appearance-none">
                  <option value="" disabled>Select a service</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="web">Web Development</option>
                  <option value="compliance">Compliance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-zinc-800 text-sm font-semibold">Project Details</label>
                <textarea
                  className="w-full h-32 p-4 bg-neutral-50 rounded-lg border border-stone-200 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all text-zinc-800"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-2 w-full h-12 bg-gradient-to-r from-fuchsia-700 to-sky-900 hover:from-fuchsia-800 hover:to-sky-950 text-white font-semibold rounded-lg transition-all"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
