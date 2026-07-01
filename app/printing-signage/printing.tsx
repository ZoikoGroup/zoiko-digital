"use client";

import React, { useState } from "react";
 

export default function Printing(){
   const [activeTab, setActiveTab] = useState("All");
   const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What weathering and durability guarantees do you provide?",
      answer: ""
    },
    {
      question: "Do you handle permits and regulatory compliance?",
      answer: ""    
    },
    {
      question: "What eco-friendly substrate options are available?",
      answer: ""    
    },
    {
      question: "What are your SLA commitments for large rollouts?",
      answer: ""    
    },
    {
      question: "How do you ensure color accuracy across different locations?",
      answer: ""    
    },
    {
      question: "What replacement policies do you offer?",
      answer: ""    
    }
  ];
  const features = [
    {
      icon: (
        <img className="w-12 h-12"
            src="/images/printing/Symbol (18).png"
            alt="icon"
        />
      ),
      text: <>Pantone Matching<br />System (PMS)<br />integration</>
    },
    {
      icon: (
        <img className="w-12 h-12"
            src="/images/printing/Symbol (19).png"
            alt="icon"
        />
      ),
      text: <>Digital proofing<br />workflows</>
    },
    {
      icon: (
       <img className="w-12 h-12"
            src="/images/printing/Symbol (20).png"
            alt="icon"
        />
      ),
      text: <>On-press color checks<br />(ΔE ≤ 2.0)</>
    },
    {
      icon: (
        <img className="w-12 h-12"
            src="/images/printing/Symbol (21).png"
            alt="icon"
        />
      ),
      text: <>ICC profiles for brand<br />accuracy</>
    }
  ];
  const logisticsSteps = [
    {
      icon: (
        <img className="w-12 h-12"
            src="/images/printing/Symbol (22).png"
            alt="icon"
        />
      ),
      title: "Multi-site kitting & shipping coordination",
      description: "Organized packaging and delivery to multiple locations simultaneously"
    },
    {
      icon: (
        <img className="w-12 h-12"
            src="/images/printing/Symbol (23).png"
            alt="icon"
        />
      ),
      title: "Installer network (coverage map)",
      description: "Nationwide certified installers with local expertise"
    },
    {
      icon: (
        <img className="w-12 h-12"
            src="/images/printing/Symbol (24).png"
            alt="icon"
        />
      ),
      title: "Scheduling with photo verification",
      description: "Coordinated installation timeline with completion documentation"
    }
  ];
      return (
    <div>


      <section className="relative w-full bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 text-white overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Side: Content & CTA Buttons */}
          <div className="w-full lg:flex-1 space-y-6 text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold leading-[50px] font-sans">
              Enterprise-Grade Printing & Signage Consistent, Durable, On-Brand
            </h1>
            <p className="text-white text-lg font-normal leading-7 max-w-xl font-sans">
              Nationwide production, color accuracy, rapid turnaround and<br/>managed rollouts at Tier-1 scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start pt-2">
              <button className="w-72 h-14 bg-white hover:bg-slate-50 text-teal-700 font-bold text-base rounded-lg outline outline-1 outline-offset-[-1px] outline-white transition-colors flex items-center justify-center cursor-pointer">
                Get a Print & Signage Quote
              </button>
              <button className="w-64 h-14 hover:bg-white/10 text-white font-bold text-base rounded-lg outline outline-2 outline-offset-[-2px] outline-white transition-colors flex items-center justify-center cursor-pointer">
                Download Print Specifications
              </button>
            </div>
          </div>

          {/* Right Side: Diagram Hub Layout Structure */}
          <div className="w-full lg:flex-1 flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            {/* MOBILE ONLY LAYER DIAGRAM */}
            <div className="relative w-full max-w-[360px] h-[480px] right-[42px] sm:hidden block select-none mx-auto">
              <div className="w-32 h-7 left-[210px] top-[40px] absolute bg-white/10 rounded-[20px] flex items-center justify-center border border-white/5">
                <span className="text-white text-[11px] font-medium font-sans">ISO 12647 Color Certification</span>
              </div>
              <div className="w-36 h-32 left-[205px] top-[85px] absolute bg-white/10 rounded-xl shadow-md border border-white/20 flex flex-col items-center justify-center">
                <img className="w-11 h-12 object-contain" src="/images/printing/Symbol (1).png" alt="icon" />
                <p className="text-white text-lg font-bold font-sans leading-7">Packaging</p>
              </div>
              <div className="w-36 h-32 left-[45px] top-[160px] absolute bg-white/10 rounded-xl shadow-md border border-white/20 flex items-center justify-center">
                <div className="w-22 h-19 relative overflow-hidden flex flex-col items-center justify-center">
                  <img className="w-16 h-14 rounded-xs opacity-90 mt-[9px]" src="/images/printing/Symbol.png" alt="icon" />
                  <p className="text-white text-lg font-bold font-sans leading-7">Storefronts</p>
                </div>
              </div>
              <div className="w-36 h-32 left-[205px] top-[230px] absolute bg-white/10 rounded-xl shadow-md border border-white/20 flex flex-col items-center justify-center">
                <img className="w-9 h-12 object-contain" src="/images/printing/Symbol (2).png" alt="icon" />
                <p className="text-white text-lg font-bold font-sans leading-7">Fleet Wraps</p>
              </div>
              <div className="w-32 h-7 left-[50px] top-[105px] absolute bg-white/10 rounded-[20px] flex items-center justify-center border border-white/5">
                <span className="text-white text-[11px] font-medium font-sans">Eco-substrates</span>
              </div>
              <div className="w-36 h-7 left-[45px] top-[315px] absolute bg-white/10 rounded-[20px] flex items-center justify-center border border-white/5">
                <span className="text-white text-[11px] font-medium font-sans">Nationwide Installer Network</span>
              </div>
            </div>

            {/* DESKTOP/TABLET GRID SYSTEM */}
            <div className="hidden sm:grid grid-cols-[auto_auto_auto] gap-6 items-center justify-center select-none">
              <div className="flex justify-end">
                <div className="h-9 px-4 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-xs whitespace-nowrap">
                  <span className="text-white text-sm font-bold font-sans leading-6">Eco-substrates</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <div className="h-9 px-4 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-xs whitespace-nowrap">
                  <span className="text-white text-sm font-bold font-sans leading-6">ISO 12647 Color Certification</span>
                </div>
                <div className="w-52 h-36 relative bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-white/30 flex flex-col items-center justify-center backdrop-blur-xs">
                  <div className="size-16 relative overflow-hidden flex items-center justify-center">
                    <img className="w-16 h-14 rounded-xs opacity-90 mt-[9px]" src="/images/printing/Symbol.png" alt="icon" />
                  </div>
                  <p className="text-white text-lg font-bold font-sans leading-7">Storefronts</p>
                </div>
                <div className="h-10 px-4 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-xs whitespace-nowrap">
                  <span className="text-white text-sm font-bold font-sans leading-6">Nationwide Installer Network</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-52 h-36 relative bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-white/30 flex flex-col items-center justify-center backdrop-blur-xs">
                  <img className="w-11 h-12 flex items-center justify-center object-contain" src="/images/printing/Symbol (1).png" alt="icon" />
                  <p className="text-white text-lg font-bold font-sans leading-7">Packaging</p>
                </div>
                <div className="w-52 h-36 relative bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-white/30 flex flex-col items-center justify-center backdrop-blur-xs">
                  <img className="w-9 h-12 flex items-center justify-center object-contain" src="/images/printing/Symbol (2).png" alt="icon" />
                  <p className="text-white text-lg font-bold font-sans leading-7">Fleet Wraps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Deliverables Section */}
      <section className="w-full bg-sky-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold font-sans mb-12">
            What We Deliver
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            
            {/* Card 1 */}
            <div className="w-full max-w-sm h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="text-sky-900 text-4xl font-black mb-4">
                <img className="w-12 h-12"
                    src="/images/printing/Symbol (3).png"
                    alt="icon"
                
                />
              </div>
              <p className="text-sky-900 text-xl font-medium font-sans leading-8">
                Offset/Digital/Variable Data <br /> Printing
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-sm h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="text-sky-900 text-4xl font-black mb-4">
                <img className="w-12 h-12"
                    src="/images/printing/Symbol (4).png"
                    alt="icon"
                
                />
              </div>
              <p className="text-sky-900 text-xl font-medium leading-8">
                Large Format (banners, fabric, <br /> backlit)
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-sm h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="text-sky-900 text-4xl font-black mb-4">
                <img className="w-12 h-12"
                    src="/images/printing/Symbol (5).png"
                    alt="icon"
                
                />
              </div>
              <p className="text-sky-900 text-xl font-medium font-sans leading-8">
                Packaging & Labels
              </p>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-sm h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="text-sky-900 text-4xl font-black mb-4">
                <img className="w-12 h-12"
                    src="/images/printing/Symbol (6).png"
                    alt="icon"
                
                />
              </div>
              <p className="text-sky-900 text-xl font-medium font-sans leading-8">
                POS/POP Systems
              </p>
            </div>

            {/* Card 5 */}
            <div className="w-full max-w-sm h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="text-sky-900 text-4xl font-black mb-4">
                <img className="w-12 h-12"
                    src="/images/printing/Symbol (7).png"
                    alt="icon"
                
                />              </div>
              <p className="text-sky-900 text-xl font-medium font-sans leading-8">
                Fleet & Environmental Signage
              </p>
            </div>

            {/* Card 6 */}
            <div className="w-full max-w-sm h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="text-sky-900 text-4xl font-black mb-4">
                <img className="w-12 h-12"
                    src="/images/printing/Symbol (8).png"
                    alt="icon"
                
                />
              </div>
              <p className="text-sky-900 text-xl font-medium font-sans leading-8">
                Installation & Permitting <br /> Coordination
              </p>
            </div>

          </div>

          {/* Bottom Artifacts Text */}
          <div className="mt-12 text-center text-gray-500 text-base font-sans leading-6">
            <span className="font-bold">Artifacts:</span> 
            <span className="font-normal"> Spec Sheets · Print Proofs · Installation Playbooks</span>
          </div>

        </div>
      </section>
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold font-sans mb-12">
            Materials Library
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Foam Board Card */}
            <div className="w-full max-w-sm h-64 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-8 relative flex flex-col justify-between text-left">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img className="w-12 h-12"
                    src="/images/printing/Symbol (9).png"
                    alt="icon"
                
                />
                </div>
                <h3 className="text-sky-900 text-2xl font-bold font-sans mb-2">Foam Board</h3>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-gray-500 text-sm font-normal font-sans">Durability:</p>
                  <p className="text-teal-700 text-base font-bold font-sans">3-5 years</p>
                </div>
                <div className="flex gap-2 text-green-600 text-xl font-black">
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (15).png"
                  alt="" />
                  </span>
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (16).png"
                  alt="" />
                  </span>
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (17).png"
                  alt="" />
                  </span>
                </div>
              </div>
            </div>

            {/* ACM Card */}
            <div className="w-full max-w-sm h-64 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-8 relative flex flex-col justify-between text-left">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img className="w-12 h-12"
                    src="/images/printing/Symbol (10).png"
                    alt="icon"
                
                />
                  
                </div>
                <h3 className="text-sky-900 text-2xl font-bold font-sans mb-2">ACM</h3>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-gray-500 text-sm font-normal font-sans">Durability:</p>
                  <p className="text-teal-700 text-base font-bold font-sans">10+ years</p>
                </div>
                <div className="flex gap-2 text-green-600 text-xl font-black">
                 <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (15).png"
                  alt="" />
                  </span>
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (16).png"
                  alt="" />
                  </span>
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (17).png"
                  alt="" />
                  </span>
                </div>
              </div>
            </div>

            {/* Acrylic Card */}
            <div className="w-full max-w-sm h-64 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-8 relative flex flex-col justify-between text-left">
              <div className="text-center">
              <div className="flex justify-center mb-4">
                  <img className="w-12 h-12"
                    src="/images/printing/Symbol (11).png"
                    alt="icon"
                
                /></div>
                <h3 className="text-sky-900 text-2xl font-bold font-sans mb-2">Acrylic</h3>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-gray-500 text-sm font-normal font-sans">Durability:</p>
                  <p className="text-teal-700 text-base font-bold font-sans">7-10 years</p>
                </div>
                <div className="flex gap-2 text-green-600 text-xl font-black">
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (15).png"
                  alt="" />
                  </span>
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (16).png"
                  alt="" />
                  </span>
                  
                </div>
              </div>
            </div>

            {/* Fabric Card */}
            <div className="w-full max-w-sm h-64 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-8 relative flex flex-col justify-between text-left">
              <div className="text-center">
<div className="flex justify-center mb-4">
                  <img className="w-12 h-12"
                    src="/images/printing/Symbol (12).png"
                    alt="icon"
                
                />                  
                </div>
                <h3 className="text-sky-900 text-2xl font-bold font-sans mb-2">Fabric</h3>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-gray-500 text-sm font-normal font-sans">Durability:</p>
                  <p className="text-teal-700 text-base font-bold font-sans">2-3 years</p>
                </div>
                <div className="flex gap-2 text-green-600 text-xl font-black">
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (15).png"
                  alt="" />
                  </span>
                 
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (17).png"
                  alt="" />
                  </span>
                </div>
              </div>
            </div>

            {/* Vinyl Card */}
            <div className="w-full max-w-sm h-64 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-8 relative flex flex-col justify-between text-left">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img className="w-12 h-12"
                    src="/images/printing/Symbol (13).png"
                    alt="icon"
                
                />

                </div>
                <h3 className="text-sky-900 text-2xl font-bold font-sans mb-2">Vinyl</h3>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-gray-500 text-sm font-normal font-sans">Durability:</p>
                  <p className="text-teal-700 text-base font-bold font-sans">5-7 years</p>
                </div>
                <div className="flex gap-2 text-green-600 text-xl font-black">
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (15).png"
                  alt="" />
                  </span>
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (16).png"
                  alt="" />
                  </span>
                  
                </div>
              </div>
            </div>

            {/* Eco-substrates Card */}
            <div className="w-full max-w-sm h-64 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-8 relative flex flex-col justify-between text-left">
              <div className="text-center">
<div className="flex justify-center mb-4">
                  <img className="w-12 h-12"
                    src="/images/printing/Symbol (14).png"
                    alt="icon"
                
                />                  
                </div>
                <h3 className="text-sky-900 text-2xl font-bold font-sans mb-2">Eco-substrates</h3>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-gray-500 text-sm font-normal font-sans">Durability:</p>
                  <p className="text-teal-700 text-base font-bold font-sans">Varies</p>
                </div>
                <div className="flex gap-2 text-green-600 text-xl font-black">
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (15).png"
                  alt="" />
                  </span>
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (16).png"
                  alt="" />
                  </span>
                  <span><img className="w-2 h-2"
                  src="/images/printing/Symbol (17).png"
                  alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-sky-50 py-16 lg:py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Title */}
        <h2 className="text-center text-sky-900 text-2xl lg:text-3xl font-bold font-sans tracking-tight mb-12">
          Color & Quality Assurance
        </h2>

        {/* Dynamic 4-Column Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 w-full justify-items-center mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full max-w-[288px] h-52 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-6 flex flex-col items-center justify-center text-center group hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              {/* Dynamic Icon Center Container */}
              <div className="mb-5 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Feature Content */}
              <p className="text-sky-900 text-lg font-medium font-sans leading-[28px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button Trigger */}
        <div className="w-full flex justify-center">
          <button className="w-96 h-14 bg-white hover:bg-teal-50/50 text-teal-700 rounded-lg outline outline-2 outline-offset-[-2px] outline-teal-700 text-base font-bold font-sans transition-colors flex items-center justify-center cursor-pointer">
            Download Color Assurance Guide (PDF)
          </button>
        </div>

      </div>
    </section>
    <section className="w-full bg-fuchsia-50 py-16 lg:py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-center text-sky-900 text-2xl lg:text-3xl font-bold font-sans tracking-tight mb-12">
          Rollouts & Logistics
        </h2>

        {/* Content Split Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Logistics Stack */}
          <div className="w-full lg:max-w-[773px] flex flex-col gap-5">
            {logisticsSteps.map((step, index) => (
              <div
                key={index}
                className="w-full min-h-[128px] bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-6 sm:p-8 flex items-start gap-5 hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300"
              >
                {/* Icon wrapper */}
                <div className="shrink-0 pt-0.5">
                  {step.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-sky-900 text-xl font-bold font-sans leading-normal">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-base font-normal font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: SLA Scorecard Box */}
          <div className="w-full lg:max-w-[384px] min-h-[320px] bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col justify-center items-center text-center self-stretch lg:self-auto hover:shadow-[0px_6px_25px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300">
            <h3 className="text-sky-900 text-2xl font-bold font-sans tracking-tight mb-6">
              Service Level Agreement
            </h3>
            
            {/* Stat 1 */}
            <div className="mb-5">
              <div className="text-teal-700 text-4xl font-bold font-sans leading-[64px] mb-1.5">
                98%
              </div>
              <div className="text-gray-500 text-base font-normal font-sans tracking-wide">
                on-time installs
              </div>
            </div>

            {/* Stat 2 */}
            <div className="mt-2">
              <div className="text-teal-700 text-4xl font-bold font-sans leading-[64px] mb-1.5">
                &lt;2%
              </div>
              <div className="text-gray-500 text-base font-normal font-sans tracking-wide">
                defect rate
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

          
      {/* 7. Gallery Showcase Section */}
<section className="w-full bg-fuchsia-50 pb-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold font-sans mb-8">
      Gallery Showcase
    </h2>

    {/* Filtering Tabs Menu */}
    <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
      {["All", "Industry", "Material", "Format", "Size"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)} // <-- track active tab in state
          className={`h-11 px-6 rounded-3xl text-sm font-normal cursor-pointer transition-all
            ${activeTab === tab 
              ? "bg-teal-700 text-white outline outline-2 outline-offset-[-2px] outline-teal-700 shadow-sm" 
              : "bg-white outline outline-2 outline-offset-[-2px] outline-zinc-200 text-gray-500 hover:text-sky-900"}`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Gallery Showcase Cards Matrix Grid */}
    {[ "All"].includes(activeTab) && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Card 1 */}
        <div className="w-full max-w-sm h-80 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] overflow-hidden text-left flex flex-col justify-between">
          <div className="w-full h-48 bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 flex items-center justify-center">
            <div className="text-white text-6xl font-black">
              <img className="w-12 h-12"
            src="/images/printing/Symbol (25).png"
            alt="icon"
        />
            </div>
          </div>
          <div className="p-6 grow flex flex-col justify-center">
            <h3 className="text-sky-900 text-xl font-bold font-sans leading-8 mb-1">
              Retail Storefront Signage
            </h3>
            <p className="text-gray-500 text-sm font-normal font-sans leading-6">
              48&quot; x 96&quot; ACM Panel
            </p>
          </div>
        </div>

         {/* Card 2 */}
            <div className="w-full max-w-sm h-80 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] overflow-hidden text-left flex flex-col justify-between">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 flex items-center justify-center">
                <div className="text-white text-6xl font-black">
                  <img className="w-12 h-12"
            src="/images/printing/Symbol (26).png"
            alt="icon"
        />
                </div>
              </div>
              <div className="p-6 grow flex flex-col justify-center">
                <h3 className="text-sky-900 text-xl font-bold font-sans leading-8 mb-1">
                  Healthcare Wayfinding
                </h3>
                <p className="text-gray-500 text-sm font-normal font-sans leading-6">
                  Various sizes, Vinyl Graphics
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-sm h-80 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] overflow-hidden text-left flex flex-col justify-between">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 flex items-center justify-center">
                <div className="text-white text-6xl font-black">
                  <img className="w-12 h-12"
            src="/images/printing/Symbol (27).png"
            alt="icon"
        />
                </div>
              </div>
              <div className="p-6 grow flex flex-col justify-center">
                <h3 className="text-sky-900 text-xl font-bold font-sans leading-8 mb-1">
                  Corporate Lobby Display
                </h3>
                <p className="text-gray-500 text-sm font-normal font-sans leading-6">
                  72&quot; x 36&quot; Backlit Acrylic
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-sm h-80 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] overflow-hidden text-left flex flex-col justify-between">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 flex items-center justify-center">
                <div className="text-white text-6xl font-black">
                  <img className="w-12 h-12"
            src="/images/printing/Symbol (28).png"
            alt="icon"
        />
                </div>
              </div>
              <div className="p-6 grow flex flex-col justify-center">
                <h3 className="text-sky-900 text-xl font-bold font-sans leading-8 mb-1">
                  Trade Show Banner
                </h3>
                <p className="text-gray-500 text-sm font-normal font-sans leading-6">
                  96&quot; x 48&quot; Fabric Display
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="w-full max-w-sm h-80 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] overflow-hidden text-left flex flex-col justify-between">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 flex items-center justify-center">
                <div className="text-white text-6xl font-black">
                  <img className="w-12 h-12"
            src="/images/printing/Symbol (29).png"
            alt="icon"
        />
                </div>
              </div>
              <div className="p-6 grow flex flex-col justify-center">
                <h3 className="text-sky-900 text-xl font-bold font-sans leading-8 mb-1">
                  Fleet Vehicle Wrap
                </h3>
                <p className="text-gray-500 text-sm font-normal font-sans leading-6">
                  Full vehicle coverage, Premium Vinyl
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="w-full max-w-sm h-80 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] overflow-hidden text-left flex flex-col justify-between">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 flex items-center justify-center">
                <div className="text-white text-6xl font-black">
                  <img className="w-12 h-12"
            src="/images/printing/Symbol (30).png"
            alt="icon"
        />
                </div>
              </div>
              <div className="p-6 grow flex flex-col justify-center">
                <h3 className="text-sky-900 text-xl font-bold font-sans leading-8 mb-1">
                  Restaurant Menu Boards
                </h3>
                <p className="text-gray-500 text-sm font-normal font-sans leading-6">
                  24&quot; x 32&quot; Digital Print on ACM
                </p>
              </div>
            </div>
      </div>
    )}
  </div>
</section>

{/* Case Study Section (always visible) */}

<section className="w-full bg-fuchsia-50 py-10">
        {["All", "Industry", "Material", "Format", "Size"].includes(activeTab) && (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold font-sans tracking-tight mb-8">
      Nationwide Retail Rollout in 120 Locations in 6 Weeks
    </h2>
    {/* Metrics Row */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1440px] mx-auto mb-8">
      <div className="flex flex-col items-center justify-center">
        <span className="text-teal-700 text-4xl font-bold font-sans leading-[64px]">99.2%</span>
        <span className="text-gray-500 text-base font-normal font-sans mt-1">On-time rate</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-teal-700 text-4xl font-bold font-sans leading-[64px]">15%</span>
        <span className="text-gray-500 text-base font-normal font-sans mt-1">Cost efficiency</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-teal-700 text-4xl font-bold font-sans leading-[64px]">0.8%</span>
        <span className="text-gray-500 text-base font-normal font-sans mt-1">Defect rate</span>
      </div>
    </div>

    {/* Description Block */}
    <p className="max-w-[1175px] mx-auto text-gray-500 text-lg font-normal font-sans leading-7 mb-10">
      A major retail chain needed to rebrand 120 locations across the country within a tight 6-week window for their holiday campaign launch. Our team coordinated production across multiple facilities, managed logistics for synchronized delivery, and deployed certified installers nationwide. The project was completed ahead of schedule with exceptional quality standards, enabling the client to launch their campaign on time and achieve record holiday sales.
    </p>

    {/* CTA Link Action Button */}
    <div className="flex justify-center">
      <button className="w-64 h-12 bg-teal-700 hover:bg-teal-800 text-white text-base font-bold rounded-lg transition-all cursor-pointer">
        Read Full Case Study
      </button>
    </div>
  </div>
        )}
</section>

<section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold font-sans mb-12">
            Pricing Anchors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center mb-10">
            
            {/* Standard Print Jobs Card */}
            <div className="w-full max-w-xs h-60 bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-gray-200 p-6 flex flex-col justify-between text-center transition-all">
              <h3 className="text-sky-900 text-2xl font-bold font-sans leading-10 pt-2">
                Standard Print<br />Jobs
              </h3>
              <div className="pb-4">
                <p className="text-teal-700 text-3xl font-bold font-sans leading-[51.20px] mb-1">$5k–$20k</p>
                <p className="text-gray-500 text-base font-normal font-sans">per run</p>
              </div>
            </div>

            {/* Multi-Site Signage Rollouts Card */}
            <div className="w-full max-w-xs h-60 bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-teal-700 shadow-[0px_10px_30px_0px_rgba(144,80,159,0.20)] p-6 flex flex-col justify-between text-center transition-all">
              <h3 className="text-sky-900 text-2xl font-bold font-sans leading-10 pt-2">
                Multi-Site Signage<br />Rollouts
              </h3>
              <div className="pb-4">
                <p className="text-teal-700 text-3xl font-bold font-sans leading-[51.20px] mb-1">$30k–$120k</p>
                <p className="text-gray-500 text-base font-normal font-sans">per wave</p>
              </div>
            </div>

            {/* Fleet Wraps Card */}
            <div className="w-full max-w-xs h-60 bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-gray-200 p-6 flex flex-col justify-between text-center transition-all">
              <h3 className="text-sky-900 text-2xl font-bold font-sans leading-10 pt-2">
                Fleet Wraps
              </h3>
              <div className="pb-4">
                <p className="text-teal-700 text-3xl font-bold font-sans leading-[51.20px] mb-1">$2k–$5k</p>
                <p className="text-gray-500 text-base font-normal font-sans">per vehicle</p>
              </div>
            </div>

            {/* Enterprise SLA Packages Card */}
            <div className="w-full max-w-xs h-60 bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-gray-200 p-6 flex flex-col justify-between text-center transition-all">
              <h3 className="text-sky-900 text-2xl font-bold font-sans leading-10 pt-2">
                Enterprise SLA<br />Packages
              </h3>
              <div className="pb-4">
                <p className="text-teal-700 text-3xl font-bold font-sans leading-[51.20px] mb-1">$10k+/mo</p>
                <p className="text-gray-500 text-sm font-normal font-sans px-2">managed service with SLAs</p>
              </div>
            </div>

          </div>

          <p className="text-gray-500 text-base font-normal font-sans mt-6">
            Pricing finalized post-spec &amp; site survey.
          </p>
        </div>
      </section>

          <section className="w-full bg-sky-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold font-sans text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`w-full bg-white rounded-lg border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-teal-700 shadow-sm' : 'border-gray-200 shadow-xs'
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors focus:outline-hidden cursor-pointer group"
                  >
                    <span className="text-sky-900 text-lg font-bold font-sans group-hover:text-teal-900 transition-colors">
                      {faq.question}
                    </span>
                    {/* Teal Arrow with smooth rotation state */}
                    <svg 
                      className={`size-4 text-teal-700 transform transition-transform duration-200 ml-4 shrink-0 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Expandable Content Area */}
                  <div 
                    className={`transition-all duration-200 ease-in-out ${
                      isOpen ? 'max-h-40 border-t border-gray-100' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-gray-600 text-base font-normal leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full bg-zinc-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="flex flex-col gap-12 pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-[34px]">
              <h2 className="text-zinc-800 text-xl lg:text-[32px] font-bold leading-8 lg:leading-9">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-neutral-600 text-base lg:text-lg font-normal leading-7">
                Connect with our global team of experts to discuss your digital<br className="hidden lg:block" />transformation journey and discover how we can accelerate your<br className="hidden lg:block" />success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG.svg" alt="Email Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold leading-7">Email Us</h4>
                  <a href="mailto:hello@zoikodigital.com" className="text-zinc-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 transition-colors">hello@zoikodigital.com</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">Response within 4 hours</span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-1.svg" alt="Phone Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold leading-7">Call Us</h4>
                  <a href="tel:+15551234567" className="text-zinc-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 transition-colors">+1 (555) 123-4567</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">24/7 Support Available</span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-2.svg" alt="Chat Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold leading-7">Live Chat</h4>
                  <span className="text-zinc-400 text-sm lg:text-base font-normal leading-6">Instant Support</span>
                  <div className="flex items-center gap-2 mt-0 lg:mt-1">
                    <span className="text-zinc-500 text-xs lg:text-sm font-normal leading-6">Online now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-8 md:p-10 border border-neutral-400 w-full lg:max-w-[572px] lg:ml-auto">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6">Full Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6">Business Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6">Company</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold leading-6">Service Interest</label>
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
                <label className="text-zinc-800 text-sm font-semibold leading-6">Project Budget</label>
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
                <label className="text-zinc-800 text-sm font-semibold leading-6">Project Details</label>
                <textarea
                  className="w-full h-28 p-4 bg-neutral-100 rounded-lg border border-stone-300 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent transition-all text-zinc-800 placeholder-neutral-400"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-56 h-14 self-start bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 hover:from-indigo-900 hover:via-teal-800 hover:to-teal-500 text-white text-base font-semibold rounded-xl transition-all cursor-pointer"
              >
                Start Your Project
              </button>
            </form>
          </div>

        </div>
      </section>
      
      </div>

      )
}