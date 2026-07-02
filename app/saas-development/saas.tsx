"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

// Mock Data matching your Figma layout sections
const stats = [
  { id: 1, value: '120+', label: 'SaaS Platforms Built' },
  { id: 2, value: '99.95%', label: 'Uptime & Reliability' },
  {id: 3, value:'8 wks',label:'Avg. to MVP'},
  { id: 4, value: '4.9/5', label: 'Client Satisfaction' },
];

const features = [
  { id: 1, title: 'Product strategy', desc: 'Discovery, scoping, and roadmaps that turn ideas into shippable products.' , icon: '/images/saas/Frame.png'  },
  { id: 2, title: 'Full-stack build', desc: 'Modern front-end and robust APIs built for performance and maintainability.', icon: '/images/saas/Frame (1).png'  },
  { id: 3, title: 'Multi-tenancy', desc: 'Secure tenant isolation, role-based access, and usage-based billing.', icon: '/images/saas/Frame (2).png' },
  { id: 4, title: 'Integrations', desc: 'Payments, auth, CRMs, and third-party APIs wired in cleanly.' , icon: '/images/saas/Frame (3).png'},
  { id: 5, title: 'DevOps & cloud', desc: 'CI/CD, infrastructure-as-code, and autoscaling on reliable cloud.', icon: '/images/saas/Frame (4).png' },
  { id: 6, title: 'Security by design', desc: 'Encryption, audits, and compliance baked in from day one.', icon: '/images/saas/Frame (5).png' },

];

const steps = [
  { id: 1, title: 'Discover', desc: 'Deep dive into user workflows and technical prerequisites.' },
  { id: 2, title: 'Design & Arch', desc: 'Formulating robust systems blueprints and UI patterns.' },
  { id: 3, title: 'Iterative Build', desc: 'Sprinting with continuous integration and rapid testing feedback.' },
  { id: 4, title: 'Deploy & Scale', desc: 'Production launch backed by fail-safes and monitoring.' },
];

const faqData = [
  {
    id: 1,
    question: 'How long does an MVP take?',
    answer: 'Typically, a core viable product build takes between 6 to 8 weeks depending on the complexity of the feature set and system integrations.'
  },
  {
    id: 2,
    question: 'Who owns the code?',
    answer: 'You do. Upon completion of milestones and final handoff, 100% of intellectual property and repository ownership shifts over directly to your business.'
  },
  {
    id: 3,
    question: 'Do you handle hosting and DevOps?',
    answer: 'Yes. We engineer cloud-native infrastructure with automated CI/CD workflows, configuration-as-code, and handoff guides for standard cloud platforms.'
  },
  {
    id: 4,
    question: 'Can you join an existing team?',
    answer: 'Absolutely. We offer dedicated engineering squads that can sync up cleanly into your existing management workflows, agile structures, and communication tools.'
  }
];

export default function Home() {
     const [openId, setOpenId] = useState<number | null>(null);

const toggleAccordion = (id: number) => {
  setOpenId(openId === id ? null : id);
};


  return (

    <div className="w-full min-h-screen bg-white text-zinc-900 font-sans antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block - Appears below image on mobile, left side on desktop */}
          <div className="order-2 md:order-1 md:col-span-7 space-y-6 text-center md:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Ship scalable <br />
              <span className=" mobile:text-indigo-600">SaaS, faster.</span>
            </h1>
            <p className="max-w-2xl mx-auto md:mx-0 text-base sm:text-lg text-zinc-700 md:text-gray-600 leading-relaxed">
              We design and build secure, multi-tenant cloud platforms optimized for scale. Take your product from blueprint to production with an elite engineering team.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3.5 text-sm font-semibold text-white bg-fuchsia-700 hover:bg-fuchsia-800 md:bg-fuchsia-700 md:hover:bg-fuchsia-800 max-md:bg-indigo-600 max-md:hover:bg-indigo-700 rounded-lg shadow-sm transition-colors duration-200">
                Get Started
              </button>
              <button className="px-8 py-3.5 text-sm font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors duration-200">
                Book a Call
              </button>
            </div>
          </div>

          {/* Hero Image Block - Appears on top on mobile (`order-1`) */}
          <div className="order-1 md:order-2 md:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md md:max-w-none aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-zinc-900/10 z-10" />
              {/* Replace placeholder with your actual image path */}
              <img className=" hidden md:block w-full h-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-white font-medium"
                    src="/images/saas/saas-desktop.jpg"
                    alt="dekstop"
              />
               <img className="w-full h-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-white font-medium block md:hidden"
                    src="/images/saas/saas-mobile.jpg"
                    alt="dekstop"
              />
               
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="border-y border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold md:font-black tracking-tight text-fuchsia-700 max-md:text-indigo-600">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DELIVER (FEATURE CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-700 max-md:text-indigo-600">
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-2">
            End-to-end SaaS engineering
          </h2>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {features.map((feat) => (
    <div key={feat.id} className="p-8 rounded-2xl border border-zinc-100 bg-white hover:shadow-xl transition-shadow duration-300 space-y-6">
      
      {/* Vector container */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-fuchsia-700 md:bg-fuchsia-700 max-md:bg-gradient-to-br max-md:from-indigo-600 max-md:to-cyan-500">
        <img src={feat.icon} alt={feat.title} className="w-6 h-6 object-contain" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-zinc-950">{feat.title}</h3>
        <p className="text-sm text-zinc-600 leading-relaxed">{feat.desc}</p>
      </div>
      
    </div>
  ))}
</div>
      </section>

      {/* 4. DELIVERY PROCESS */}
      <section className="bg-zinc-50 border-t border-zinc-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-4 mb-16 max-w-2xl">
  <div className="md:text-fuchsia-700 text-indigo-600 text-xs font-bold uppercase leading-5 tracking-wider">
    How we work
  </div>
  <h2 className="text-zinc-900 md:text-4xl  text-3xl font-extrabold">
    A proven delivery process
  </h2>
  <p className="text-gray-600 text-base font-normal leading-7">
    Predictable milestones with working software at every step.
  </p>
</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.id} className="p-6 bg-white border border-zinc-100 rounded-xl shadow-sm h-36 md:h-40 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  {/* Step Title uses desktop fuchsia vs mobile zinc color architecture natively */}
                  <h4 className="font-bold text-fuchsia-700 md:text-fuchsia-700 max-md:text-zinc-900">
                    {step.title}
                  </h4>
                  <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold text-white bg-fuchsia-700 md:bg-fuchsia-700 max-md:bg-zinc-900">
                    {step.id}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 line-clamp-3">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1180px] mx-auto px-4 py-16 md:py-24 ">


  <div className="w-full min-h-[384px] md:h-96 bg-white rounded-3xl p-4 md:p-[15px] flex flex-col md:flex-row gap-8 md:gap-12 items-center shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden">
    
    <div className="w-full md:w-[555px] h-64 md:h-full shrink-0 bg-linear-53 from-indigo-600 to-cyan-500 rounded-[20px] shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] overflow-hidden relative">
      <img className="w-full h-full object-cover" src="/images/saas/saas-section.jpg" alt=" illustration" />
      
    </div>

    <div className="w-full flex flex-col justify-center space-y-6 pb-6 md:pb-0 px-2 md:px-0">
      
      <div className="space-y-3">
        <h3 className="text-zinc-900 text-2xl font-extrabold leading-tight">
          Built for scale from the first commit
        </h3>
        <p className="max-w-[516px] text-zinc-700 text-base font-normal leading-relaxed">
          We engineer for the load you'll have in two years, not just today — so you never have to rebuild.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="size-4 shrink-0 flex items-center justify-center">
            <div className="w-2.5 h-2 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
          </div>
          <span className="text-zinc-700 text-base font-normal leading-6">Cloud-native, autoscaling architecture</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="size-4 shrink-0 flex items-center justify-center">
            <div className="w-2.5 h-2 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
          </div>
          <span className="text-zinc-700 text-base font-normal leading-6">Automated testing and CI/CD</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="size-4 shrink-0 flex items-center justify-center">
            <div className="w-2.5 h-2 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
          </div>
          <span className="text-zinc-700 text-base font-normal leading-6">Observability and 24/7 monitoring</span>
        </div>
      </div>

    </div>
  </div>

</section>
    <section className=" mx-auto px-4 py-16 md:py-12">
      
      {/* ==========================================
          HEADER BLOCK
         ========================================== */}
      <div className="text-center space-y-4 mb-16 max-w-xl mx-auto">
        <div className="text-indigo-600 text-xs font-bold uppercase leading-5 tracking-wider">
          Engagements
        </div>
        <h2 className="text-zinc-900 text-3xl md:text-4xl font-extrabold tracking-tight">
          Ways to work with us
        </h2>
        <p className="text-gray-600 text-base font-normal leading-7">
          Flexible engagements for every stage. <span className="block sm:inline md:ml-1 text-gray-400">Sample pricing for illustration.</span>
        </p>
      </div>

      {/* ==========================================
          CARDS CONTAINER
         ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* CARD 1: MVP */}
        <div className="relative bg-white rounded-2xl p-9 flex flex-col justify-between shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200">
          <div className="space-y-6">
            <div>
              <h3 className="text-zinc-900 text-lg font-extrabold leading-7">MVP</h3>
              <div className="text-zinc-900 text-3xl font-black mt-2">from $25k</div>
              <p className="text-gray-600 text-xs font-normal mt-1">6–8 weeks</p>
            </div>
            
            {/* Checklist */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="size-3.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-1.5 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
                </div>
                <span className="text-zinc-700 text-sm font-normal">Core product build</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="size-3.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-1.5 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
                </div>
                <span className="text-zinc-700 text-sm font-normal">Cloud deployment</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="size-3.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-1.5 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
                </div>
                <span className="text-zinc-700 text-sm font-normal">Launch support</span>
              </li>
            </ul>
          </div>

          <button className="w-full h-14 mt-8 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 font-bold text-zinc-900 text-base hover:bg-zinc-50 transition-colors duration-200">
            Get a quote
          </button>
        </div>

        {/* CARD 2: GROWTH (MOST POPULAR) */}
        <div className="relative bg-white rounded-2xl p-7 flex flex-col justify-between shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 transform md:-translate-y-1">
          {/* Badge */}
          <div className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 bg-indigo-500 md:bg-fuchsia-700  rounded-full px-4 py-1 shadow-sm">
            <span className="text-white text-xs font-bold uppercase tracking-wide whitespace-nowrap">Most popular</span>
          </div>

          <div className="space-y-6 pt-2">
            <div>
              <h3 className="text-zinc-900 text-lg font-extrabold leading-7">Growth</h3>
              <div className="text-zinc-900 text-3xl font-black mt-2">Custom</div>
              <p className="text-gray-600 text-xs font-normal mt-1">Ongoing team</p>
            </div>
            
            {/* Checklist */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="size-3.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-1.5 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
                </div>
                <span className="text-zinc-700 text-sm font-normal">Dedicated squad</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="size-3.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-1.5 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
                </div>
                <span className="text-zinc-700 text-sm font-normal">Roadmap & iteration</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="size-3.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-1.5 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
                </div>
                <span className="text-zinc-700 text-sm font-normal">SLA-backed support</span>
              </li>
            </ul>
          </div>

          <button className="w-full h-14 mt-8 bg-indigo-500  md:bg-fuchsia-700 rounded-xl font-bold text-white text-base hover:bg-fuchsia-800 transition-colors duration-200">
            Talk to us
          </button>
        </div>

        {/* CARD 3: ENTERPRISE */}
        <div className="relative bg-white rounded-2xl p-7 flex flex-col justify-between shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200">
          <div className="space-y-6">
            <div>
              <h3 className="text-zinc-900 text-lg font-extrabold leading-7">Enterprise</h3>
              <div className="text-zinc-900 text-3xl font-black mt-2">Custom</div>
              <p className="text-gray-600 text-xs font-normal mt-1">Scale & compliance</p>
            </div>
            
            {/* Checklist */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="size-3.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-1.5 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
                </div>
                <span className="text-zinc-700 text-sm font-normal">Security & compliance</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="size-3.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-1.5 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
                </div>
                <span className="text-zinc-700 text-sm font-normal">Dedicated architecture</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="size-3.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-1.5 rotate-[-45deg] border-b-2 border-l-2 border-emerald-500"></div>
                </div>
                <span className="text-zinc-700 text-sm font-normal">Premium support</span>
              </li>
            </ul>
          </div>

          <button className="w-full h-14 mt-8 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 font-bold text-zinc-900 text-base hover:bg-zinc-50 transition-colors duration-200">
            Contact sales
          </button>
        </div>

      </div>
    </section>
  <section className="w-full max-w-[780px] mx-auto px-4 py-16 md:py-24 space-y-10">
      
      {/* Section Title */}
      <h2 className="text-center text-zinc-900 text-3xl md:text-4xl font-extrabold tracking-tight">
        Common questions
      </h2>

      {/* Accordion Group */}
      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          
          return (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-zinc-100 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] overflow-hidden transition-all duration-200"
            >
              {/* Question Trigger Area */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-zinc-50/50 transition-colors duration-200"
              >
                <span className="text-zinc-900 text-base font-bold leading-7">
                  {item.question}
                </span>
                
                {/* Dynamic Icon (+ / -) */}
                <span className={`text-indigo-600 text-2xl font-normal leading-none transition-transform duration-200 select-none ${isOpen ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {/* Collapsible Answer Body */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-40 border-t border-zinc-50 p-6 pt-2 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>


      {/* 5. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Desktop deep blue sky-900 vs Mobile full slate zinc-950 */}
        <div className="w-full rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-6 bg-sky-900 md:bg-sky-900 max-md:bg-zinc-950 text-white shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let’s build your platform
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-sky-100/80 max-md:text-zinc-400">
                Tell us what you're building and we'll map out a plan and a quote.          </p>
          <div className="pt-4">
            <button className="px-8 py-3.5 text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-50 rounded-lg transition-colors duration-200">
              Start your project →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}