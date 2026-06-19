"use client";
import React, { useState } from "react";

const categories = [
  "All Partners",
  "Technology & Cloud",
  "Telecom & Infrastructure",
  "Advisory & Consulting",
  "Regulatory & ESG"
];

const partnersData = [
  {
    name: "Amazon Web Services",
    category: "Technology & Cloud",
    badge: "Technology & Cloud Innovation",
    description: "Advanced Partner status enabling enterprise-grade cloud solutions with AI/ML capabilities."
  },
  {
    name: "Microsoft",
    category: "Technology & Cloud",
    badge: "Technology & Cloud Innovation",
    description: "Gold Partner delivering Azure-based solutions for enterprise digital transformation."
  },
  {
    name: "Google Cloud",
    category: "Technology & Cloud",
    badge: "Technology & Cloud Innovation",
    description: "Premier Partner specializing in AI, machine learning, and data analytics platforms."
  },
  {
    name: "IBM",
    category: "Technology & Cloud",
    badge: "Technology & Cloud Innovation",
    description: "Strategic partnership for hybrid cloud and AI-powered business solutions."
  },
  {
    name: "Vodafone",
    category: "Telecom & Infrastructure",
    badge: "Telecom & Infrastructure",
    description: "Global telecommunications infrastructure and IoT connectivity solutions."
  },
  {
    name: "MTN Group",
    category: "Telecom & Infrastructure",
    badge: "Telecom & Infrastructure",
    description: "Leading African telecom provider enabling mobile financial services across 21 countries."
  },
  {
    name: "Cisco",
    category: "Telecom & Infrastructure",
    badge: "Telecom & Infrastructure",
    description: "Network infrastructure and cybersecurity solutions for enterprise and carrier networks."
  },
  {
    name: "McKinsey & Company",
    category: "Advisory & Consulting",
    badge: "Advisory & Consulting",
    description: "Strategic consulting partnership for digital transformation and organizational change."
  },
  {
    name: "Deloitte",
    category: "Advisory & Consulting",
    badge: "Advisory & Consulting",
    description: "Risk management, compliance, and regulatory advisory services for global markets."
  },
  {
    name: "ISO",
    category: "Regulatory & ESG",
    badge: "Regulatory & ESG",
    fullName: "International Organization for\nStandardization",
    description: "ISO 27001, 9001, and 14001 certified ensuring quality, security, and environmental standards."
  },
  {
    name: "IEEE",
    category: "Regulatory & ESG",
    badge: "Regulatory & ESG",
    fullName: "Institute of Electrical and\nElectronics Engineers",
    description: "Advancing technology standards for AI ethics, cybersecurity, and sustainable innovation."
  },
  {
    name: "UN Global Compact",
    category: "Regulatory & ESG",
    badge: "Regulatory & ESG",
    description: "Committed to sustainable development goals and responsible business practices worldwide."
  }
];

const standards = [
  { icon: "🏆", title: "ISO 27001", desc: "Information Security Management" },
  { icon: "🔒", title: "SOC 2 Type II", desc: "Security, Availability & Confidentiality" },
  { icon: "💳", title: "PCI DSS", desc: "Payment Card Industry Standards" },
  { icon: "⚡", title: "IEEE Member", desc: "Technology Standards Leadership" },
  { icon: "📱", title: "GSMA", desc: "Mobile Industry Standards" },
  { icon: "🌍", title: "UN Global Compact", desc: "Sustainable Development Goals" },
];

const ecosystemCards = [
  {
    icon: "💡",
    title: "Innovation Partners",
    subtitle: "Startups • Developers • Small Firms",
    description: "Join our innovation ecosystem to accelerate growth and bring cutting-edge solutions to global markets.",
    features: [
      "Access to Zoiko Academy resources",
      "Technical documentation and APIs",
      "Go-to-market support",
      "Global marketplace exposure"
    ]
  },
  {
    icon: "📈",
    title: "Growth Partners",
    subtitle: "Mid-size Companies • Solution Developers",
    description: "Scale your business with co-developed solutions and joint go-to-market strategies across global regions.",
    features: [
      "Joint solution development",
      "Dedicated partner manager",
      "Marketing and sales support",
      "Revenue sharing opportunities"
    ]
  },
  {
    icon: "🏢",
    title: "Enterprise Partners",
    subtitle: "Global Leaders • Industry Transformers",
    description: "Drive industry transformation through strategic alliances and co-innovation initiatives that shape the future.",
    features: [
      "Strategic alliance management",
      "Co-innovation laboratories",
      "Executive relationship programs",
      "Global market expansion"
    ]
  }
];

export default function PartnersEcosystem() {
  const [activeTab, setActiveTab] = useState<string>("All Partners");

  const filteredPartners = activeTab === "All Partners" 
    ? partnersData 
    : partnersData.filter(p => p.category === activeTab);

  return (
    <div className="w-full min-h-screen bg-white font-['Inter']">
      
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-sky-900 to-gray-900 py-32 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
        {/* Floating background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1440px] h-[900px] pointer-events-none">
            {/* The abstract connecting nodes */}
            <div className="absolute inset-0 opacity-10">
                <div className="size-5 left-[230.40px] top-[260.40px] absolute bg-fuchsia-700 rounded-full"></div>
                <div className="size-5 left-[470.40px] top-[200.40px] absolute bg-fuchsia-700 rounded-full"></div>
                <div className="size-5 left-[710.40px] top-[224.40px] absolute bg-white rounded-full"></div>
                <div className="size-5 left-[950.40px] top-[248.40px] absolute bg-fuchsia-700 rounded-full"></div>
                <div className="size-5 left-[1190.40px] top-[212.40px] absolute bg-fuchsia-700 rounded-full"></div>
                <div className="size-5 left-[350.40px] top-[440.40px] absolute bg-fuchsia-700 rounded-full"></div>
                <div className="size-5 left-[590.40px] top-[416.40px] absolute bg-fuchsia-700 rounded-full"></div>
                <div className="size-5 left-[830.40px] top-[464.40px] absolute bg-fuchsia-700 rounded-full"></div>
                <div className="size-5 left-[1070.40px] top-[428.40px] absolute bg-fuchsia-700 rounded-full"></div>
                {/* Connecting lines */}
                <div className="w-60 h-14 left-[240px] top-[210px] absolute opacity-60 bg-black outline outline-[2.40px] outline-offset-[-1.20px] outline-fuchsia-700"></div>
                <div className="w-60 h-6 left-[480px] top-[210px] absolute opacity-60 bg-black outline outline-[2.40px] outline-offset-[-1.20px] outline-fuchsia-700"></div>
                <div className="w-60 h-6 left-[720px] top-[234px] absolute opacity-60 bg-black outline outline-[2.40px] outline-offset-[-1.20px] outline-fuchsia-700"></div>
                <div className="w-60 h-9 left-[960px] top-[222px] absolute opacity-60 bg-black outline outline-[2.40px] outline-offset-[-1.20px] outline-fuchsia-700"></div>
                <div className="w-28 h-48 left-[600px] top-[234px] absolute opacity-60 bg-black outline outline-[2.40px] outline-offset-[-1.20px] outline-fuchsia-700"></div>
                <div className="w-60 h-12 left-[600px] top-[426px] absolute opacity-60 bg-black outline outline-[2.40px] outline-offset-[-1.20px] outline-fuchsia-700"></div>
                <div className="w-60 h-9 left-[840px] top-[438px] absolute opacity-60 bg-black outline outline-[2.40px] outline-offset-[-1.20px] outline-fuchsia-700"></div>
            </div>

            {/* Badges */}
            <div className="absolute top-[8%] left-[45%] px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-slate-300 text-sm font-bold tracking-wider">Microsoft</div>
            <div className="absolute top-[15%] left-[24%] px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-slate-300 text-sm font-bold tracking-wider">ISO</div>
            <div className="absolute top-[13%] left-[78%] px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-slate-300 text-sm font-bold tracking-wider">IEEE</div>
            <div className="absolute top-[58%] left-[12%] px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-slate-300 text-sm font-bold tracking-wider">AWS</div>
            <div className="absolute top-[75%] left-[33%] px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-slate-300 text-sm font-bold tracking-wider">IBM</div>
            <div className="absolute top-[73%] left-[74%] px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-slate-300 text-sm font-bold tracking-wider">Google</div>
        </div>

        <h1 className="text-white text-3xl md:text-4xl lg:text-[40px] font-semibold text-center leading-[67px] w-full z-10 px-4">
          Stronger Together: Building Global Impact with Our Partners
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light text-center leading-relaxed mt-6 max-w-3xl z-10">
          At Zoiko Web Services, collaboration is the cornerstone of innovation. We join forces with Tier-1 technology leaders, telecom providers, advisors, and regulatory institutions to deliver future-ready solutions.
        </p>
      </section>

      {/* Partners Grid Section */}
      <section className="w-full bg-fuchsia-50 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Top Gradient Line */}
          <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-700 to-sky-900 mb-10"></div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 outline outline-2 outline-offset-[-2px] ${
                  activeTab === cat 
                    ? "bg-fuchsia-700 text-white outline-fuchsia-700" 
                    : "bg-white text-stone-500 outline-neutral-200 hover:outline-neutral-300 hover:text-stone-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {filteredPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-80">
                <div className="bg-slate-50 relative flex items-center justify-center h-28 shrink-0">
                  <div className="bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 px-6 py-3 backdrop-blur-[5px]">
                    <span className="text-sky-900 text-xl font-bold">{partner.name}</span>
                  </div>
                </div>
                <div className="px-8 pt-8 pb-6 flex flex-col flex-grow">
                  <h3 className="text-sky-900 text-xl font-bold leading-8 mb-2 whitespace-pre-line">
                    {partner.fullName || partner.name}
                  </h3>
                  <span className="text-fuchsia-700 text-sm font-bold uppercase tracking-wide mb-4">
                    {partner.badge}
                  </span>
                  <p className="text-stone-500 text-base font-normal leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Transformational Quote */}
      <section className="w-full bg-white h-72 flex flex-col items-center justify-center px-6">
        <h2 className="text-sky-900 text-2xl md:text-[28px] lg:text-[32px] font-semibold leading-10 text-center mb-4">
          Partnerships Are Not Transactional -They Are Transformational
        </h2>
        <p className="text-fuchsia-700 text-lg md:text-xl font-bold italic text-center leading-8">
          Together, we don't just build technology. We build the future.
        </p>
      </section>

      {/* Partner Success Stories */}
      <section className="w-full bg-[#f3f4f9] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-sky-900 text-2xl md:text-3xl font-semibold mb-8">
            Partner Success Stories
          </h2>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-[84px] h-[42px] bg-gradient-to-br from-[#4c4879] to-[#2c406c] rounded-md flex items-center justify-center shadow-sm">
              <span className="text-white text-sm font-bold">Zoiko</span>
            </div>
            <span className="text-[#a57eb7] text-2xl font-medium">+</span>
            <div className="w-[84px] h-[42px] bg-gradient-to-br from-[#4c4879] to-[#2c406c] rounded-md flex items-center justify-center shadow-sm">
              <span className="text-white text-sm font-bold">AWS</span>
            </div>
          </div>

          <h3 className="text-sky-900 text-lg md:text-xl font-bold mb-4">
            Reducing Fintech Compliance Costs by 35%
          </h3>
          <p className="text-slate-500 text-base leading-relaxed max-w-3xl mb-12">
            Joint AI-powered compliance platform automates regulatory reporting<br className="hidden md:block"/> across 15 jurisdictions, saving clients $2M annually in manual oversight costs.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-10">
            <div className="flex flex-col items-center">
              <span className="text-fuchsia-700 text-4xl md:text-5xl font-bold mb-2">35%</span>
              <span className="text-stone-600 text-[11px] font-bold uppercase tracking-wide">Cost Reduction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-fuchsia-700 text-4xl md:text-5xl font-bold mb-2">15</span>
              <span className="text-stone-600 text-[11px] font-bold uppercase tracking-wide">Jurisdictions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-fuchsia-700 text-4xl md:text-5xl font-bold mb-2">$2M</span>
              <span className="text-stone-600 text-[11px] font-bold uppercase tracking-wide">Annual Savings</span>
            </div>
          </div>

          <a href="#" className="text-[#966b9d] text-sm font-bold hover:text-fuchsia-800 transition-colors">
            Explore Full Case Study
          </a>
        </div>
      </section>

      {/* Aligned with the World's Standards */}
      <section className="w-full bg-white py-16 md:py-24 px-6 flex flex-col items-center">
        <h2 className="text-sky-900 text-2xl md:text-[32px] font-semibold leading-tight md:leading-[64px] text-center mb-4 md:mb-2">
          Aligned with the World's Standards
        </h2>
        <p className="text-stone-500 text-lg md:text-xl font-normal leading-relaxed md:leading-8 text-center mb-12 md:mb-20 max-w-[850px]">
          Our memberships and affiliations ensure every solution we deliver meets the highest<br className="hidden md:block"/> standards of compliance, trust, and sustainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1224px] justify-items-center">
          {standards.map((std, idx) => (
            <div key={idx} className="w-full max-w-96 h-56 bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] flex flex-col items-center justify-start pt-[34px] px-4">
              <div className="text-zinc-800 text-5xl leading-[76.8px] mb-[15px]">{std.icon}</div>
              <h3 className="text-sky-900 text-xl font-bold leading-8 mb-[9px]">{std.title}</h3>
              <p className="text-stone-500 text-sm font-normal leading-5 text-center">{std.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* An Ecosystem Built for Every Partner */}
      <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 px-6 flex flex-col items-center">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <h2 className="text-sky-900 text-2xl md:text-[32px] font-semibold leading-tight md:leading-[64px] text-center mb-2 md:mb-1">
            An Ecosystem Built for Every Partner
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-700 to-sky-900"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1224px] justify-items-center">
          {ecosystemCards.map((card, idx) => (
            <div key={idx} className="w-full max-w-96 h-[603px] bg-white rounded-[20px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col relative">
              {/* Header */}
              <div className="bg-gradient-to-b from-slate-50 to-white h-52 flex flex-col items-center justify-start pt-[32px] shrink-0">
                <div className="text-zinc-800 text-5xl leading-[76.8px] mb-[15px]">{card.icon}</div>
                <h3 className="text-sky-900 text-2xl font-bold leading-10 mb-[6px]">{card.title}</h3>
                <span className="text-fuchsia-700 text-sm font-bold leading-6">{card.subtitle}</span>
              </div>
              
              {/* Content */}
              <div className="px-[34px] pt-[36px] flex flex-col flex-grow">
                <p className="text-stone-500 text-base font-normal leading-6 mb-[28px]">
                  {card.description}
                </p>
                <ul className="flex flex-col gap-4 flex-grow">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 h-6">
                      <span className="text-fuchsia-700 text-base font-bold leading-6 mt-0.5">✓</span>
                      <span className="text-stone-500 text-base font-normal leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="absolute bottom-[35px] left-[34px] text-fuchsia-700 text-base font-bold hover:text-fuchsia-800 transition-colors inline-flex items-center gap-1 leading-6">
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="w-full min-h-[320px] py-16 md:py-0 bg-gradient-to-br from-sky-900 to-gray-900 flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight md:leading-[64px] mb-4 md:mb-0">
            Partner With Us
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed md:leading-8 mb-8 md:mb-[32.6px]">
            From disruptors to global enterprises, Zoiko Web Services empowers its partners to scale,<br className="hidden md:block"/>innovate, and deliver impact worldwide. Join our ecosystem to accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-9">
            <button className="w-80 h-16 bg-gradient-to-r from-fuchsia-700 to-sky-900 hover:from-fuchsia-800 hover:to-sky-950 rounded-lg shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] text-white text-lg font-bold transition-all flex items-center justify-center">
              Apply to Become a Partner
            </button>
            <button className="w-80 h-16 rounded-lg outline outline-2 outline-offset-[-2px] outline-white/50 hover:bg-white/10 text-white text-lg font-bold transition-all flex items-center justify-center">
              Contact Partnerships Team
            </button>
          </div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section className="w-full bg-zinc-100 py-16 md:py-24 px-6 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[190px] w-full max-w-[1224px] items-start">
          
          {/* Left Column */}
          <div className="flex flex-col max-w-[552px] pt-4 md:pt-[100px]">
            <h2 className="text-zinc-800 text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight md:leading-9 mb-6 md:mb-[35px]">
              Ready to Transform<br className="hidden md:block" />Your Business?
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl font-normal leading-relaxed md:leading-7 mb-10 md:mb-[47px]">
              Connect with our global team of experts to discuss your digital<br className="hidden md:block"/>transformation journey and discover how we can accelerate your<br className="hidden md:block"/>success.
            </p>

            <div className="flex flex-col gap-[28px]">
              {/* Email Us */}
              <div className="flex items-start gap-[22px]">
                <div className="w-14 h-14 bg-sky-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-zinc-800 text-lg font-semibold leading-7 mb-[6px]">Email Us</h4>
                  <span className="text-zinc-400 text-base font-normal leading-6 mb-[6px]">hello@zws.com</span>
                  <span className="text-zinc-500 text-sm font-normal leading-6">Response within 4 hours</span>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-[22px]">
                <div className="w-14 h-14 bg-sky-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-zinc-800 text-lg font-semibold leading-7 mb-[6px]">Call Us</h4>
                  <span className="text-zinc-400 text-base font-normal leading-6 mb-[6px]">+1 (555) 123-4567</span>
                  <span className="text-zinc-500 text-sm font-normal leading-6">24/7 Support Available</span>
                </div>
              </div>

              {/* Live Chat */}
              <div className="flex items-start gap-[22px]">
                <div className="w-14 h-14 bg-sky-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-zinc-800 text-lg font-semibold leading-7 mb-[6px]">Live Chat</h4>
                  <span className="text-zinc-400 text-base font-normal leading-6 mb-[6px]">Instant Support</span>
                  <span className="text-zinc-500 text-sm font-normal leading-6">Online now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full max-w-[572px] bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-400 p-6 md:p-8 lg:p-[41px]">
            <form className="flex flex-col">
              <div className="flex flex-col mb-[30px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6 mb-[6px]">Full Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-[21px] bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all text-zinc-800"
                />
              </div>

              <div className="flex flex-col mb-[30px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6 mb-[6px]">Business Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-[21px] bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all text-zinc-800"
                />
              </div>

              <div className="flex flex-col mb-[30px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6 mb-[6px]">Company</label>
                <input
                  type="text"
                  className="w-full h-12 px-[21px] bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all text-zinc-800"
                />
              </div>

              <div className="flex flex-col mb-[30px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6 mb-[6px]">Service Interest</label>
                <select defaultValue="" className="w-full h-14 px-[21px] bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 text-neutral-400 text-base font-normal leading-4 focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all appearance-none">
                  <option value="" disabled>Select a service</option>
                  <option value="cloud" className="text-zinc-800">Cloud Solutions</option>
                  <option value="web" className="text-zinc-800">Web Development</option>
                  <option value="compliance" className="text-zinc-800">Compliance</option>
                  <option value="other" className="text-zinc-800">Other</option>
                </select>
              </div>

              <div className="flex flex-col mb-[30px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6 mb-[6px]">Project Budget</label>
                <select defaultValue="" className="w-full h-14 px-[21px] bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 text-neutral-400 text-base font-normal leading-4 focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all appearance-none">
                  <option value="" disabled>Select budget range</option>
                  <option value="small" className="text-zinc-800">Under $10,000</option>
                  <option value="medium" className="text-zinc-800">$10,000 - $50,000</option>
                  <option value="large" className="text-zinc-800">$50,000+</option>
                </select>
              </div>

              <div className="flex flex-col mb-[30px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6 mb-[6px]">Project Details</label>
                <textarea
                  className="w-full h-28 p-[17px] bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 transition-all text-neutral-400 text-base font-normal placeholder:text-neutral-400"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-6 w-56 h-14 bg-gradient-to-r from-fuchsia-700 to-sky-900 hover:from-fuchsia-800 hover:to-sky-950 text-white text-base font-semibold rounded-xl transition-all"
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
