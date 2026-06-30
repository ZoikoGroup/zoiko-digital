"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Database,
  FileText,
  Activity,
  Sparkles,
  Clock,
  RefreshCw,
  Layers,
  Check,
  ChevronDown,
  ChevronUp,
  Cpu,
  AlertCircle,
  HelpCircle,
  Network
} from "lucide-react";

export default function ComplianceTechnologyClient() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const stats = [
    {
      value: "200+",
      label: "Regulatory updates published globally on a typical day"
    },
    {
      value: "~40%",
      label: "Of compliance effort can go to gathering evidence by hand"
    },
    {
      value: "3x",
      label: "Non-compliance can cost far more than maintaining compliance"
    }
  ];

  const challenges = [
    {
      title: "Ever-changing rules",
      description: "Regulations and standards shift constantly, and keeping policies and controls aligned is a moving target.",
      icon: <img src="/images/com/rules-clock.svg" className="w-5 h-5 object-contain" alt="" />
    },
    {
      title: "Manual evidence",
      description: "Collecting screenshots, logs, and approvals by hand is slow, error-prone, and quickly out of date.",
      icon: <img src="/images/com/document-sml.svg" className="w-5 h-5 object-contain" alt="" />
    },
    {
      title: "Siloed data",
      description: "Evidence lives across HR, IT, security, and finance tools that don't naturally talk to each other.",
      icon: <img src="/images/com/grid-sml.svg" className="w-5 h-5 object-contain" alt="" />
    },
    {
      title: "Audit fatigue",
      description: "Overlapping frameworks (SOC 2, ISO, GDPR, HIPAA) mean teams answer the same questions again and again.",
      icon: <img src="/images/com/search-sml.svg" className="w-5 h-5 object-contain" alt="" />
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Map",
      subtitle: "controls",
      description: "Link policies directly to regulatory requirements.",
      icon: <img src="/images/com/checklist.svg" className="w-8 h-8 object-contain" alt="Map controls" />
    },
    {
      step: "02",
      title: "Monitor",
      subtitle: "continuously",
      description: "Run automated checks against configuration APIs.",
      icon: <img src="/images/com/lock.svg" className="w-8 h-8 object-contain" alt="Monitor continuously" />
    },
    {
      step: "03",
      title: "Evidence",
      subtitle: "collected",
      description: "Store cryptographic logs and snapshots automatically.",
      icon: <img src="/images/com/document.svg" className="w-8 h-8 object-contain" alt="Evidence collected" />
    },
    {
      step: "04",
      title: "Audit",
      subtitle: "& report",
      description: "Export clean reports instantly for external auditors.",
      icon: <img src="/images/com/search.svg" className="w-8 h-8 object-contain" alt="Audit & report" />
    }
  ];

  const glossary = [
    {
      term: "GRC — Governance, Risk & Compliance",
      definition: "The umbrella discipline (and the software category) for managing how an organization is governed, the risks it faces, and the rules it must follow."
    },
    {
      term: "RegTech",
      definition: "Technology focused specifically on meeting regulatory requirements — monitoring rules, reporting, and reducing manual compliance work."
    },
    {
      term: "Control",
      definition: "A specific safeguard or practice (for example, \"all laptops are encrypted\") that satisfies part of a requirement."
    },
    {
      term: "Framework",
      definition: "A recognized set of requirements — such as SOC 2, ISO 27001, GDPR, or HIPAA — that organizations align to and are audited against."
    },
    {
      term: "Audit trail",
      definition: "A tamper-evident record of who did what and when, used to prove that controls were followed."
    },
    {
      term: "Continuous compliance",
      definition: "Maintaining and evidencing controls all the time, rather than scrambling to prepare right before an audit."
    },
    {
      term: "Risk register",
      definition: "A living list of identified risks, their likelihood and impact, and the steps being taken to manage them."
    }
  ];

  const headings = [
    {
      title: "Continuous, always-on compliance",
      description: "The model is moving from periodic audits toward real-time, ongoing assurance.",
      icon: <Clock className="w-5 h-5 text-white" />
    },
    {
      title: "Automated evidence collection",
      description: "Integrations pull proof directly from cloud, HR, and security systems — no more screenshots.",
      icon: <Database className="w-5 h-5 text-white" />
    },
    {
      title: "AI for regulatory change",
      description: "AI is being used to track changing regulations and map them to existing controls.",
      icon: <Cpu className="w-5 h-5 text-white" />
    },
    {
      title: "Unified, multi-framework GRC",
      description: "One control set mapped to many frameworks, so you answer each question once.",
      icon: <Layers className="w-5 h-5 text-white" />
    }
  ];

  const faqs = [
    {
      question: "What is GRC?",
      answer: "Governance, Risk, and Compliance (GRC) refers to a strategy for managing an organization's overall governance, enterprise risk management, and compliance with regulations. GRC software helps align information technology with business objectives, manage risk effectively, and meet regulatory compliance requirements."
    },
    {
      question: "Is compliance the same as security?",
      answer: "No. Security is the practice of implementing controls and tools to protect assets (like encryption, firewalls, and access management). Compliance is the process of proving that your security practices align with a specific third-party framework (like SOC 2, HIPAA, or ISO 27001). You can be secure without being compliant, and compliant without being secure, though they support each other."
    },
    {
      question: "What does \"continuous compliance\" mean?",
      answer: "Continuous compliance means constantly monitoring your controls, systems, and processes to ensure they remain compliant in real-time, rather than only verifying them once a year during an audit. Compliance software automates this by executing continuous API checks and generating alert notifications when a control fails."
    },
    {
      question: "What is an audit trail?",
      answer: "An audit trail is a chronological, tamper-evident log that provides documentary evidence of the sequence of activities that have affected a specific operation, procedure, or event. It records who did what, when, and on what device, which is essential to satisfy internal and external auditors."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-slate-800 animate-fade-in">
      
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50 border-b border-gray-100 flex justify-center px-4">
        <div className="max-w-[1160px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-6">
            <div className="px-3.5 py-1.5 bg-violet-100/80 rounded-full inline-flex justify-start items-center">
              <span className="text-violet-700 text-xs font-extrabold uppercase tracking-widest font-sans">
                Topic Overview
              </span>
            </div>
            <h1 className="text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-black font-sans leading-tight tracking-tight">
              Compliance<br/>technology,<br/>
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">explained.</span>
            </h1>
            <p className="max-w-[600px] text-gray-600 text-lg sm:text-xl font-normal leading-relaxed font-sans">
              How software helps organizations manage controls, risk, and audits — turning compliance from a once-a-year scramble into a continuous, evidence-backed process.
            </p>
          </div>

          {/* Hero Right Graphic - Stunning SVG layout mapping exact Figma coordinates */}
          <div className="lg:col-span-5 w-full flex items-center justify-center overflow-visible">
            <div className="scale-[0.7] xs:scale-[0.8] sm:scale-[0.9] md:scale-100 origin-center flex-shrink-0 relative w-[496.75px] h-[384px] bg-purple-50/40 outline outline-1 outline-violet-100 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(109,40,217,0.06)] hover:shadow-[0_25px_60px_rgba(109,40,217,0.1)] transition-shadow duration-300">
              
              {/* Radial gradient glow */}
              <div className="absolute inset-0 bg-radial-[at_50%_42%] from-violet-600/10 to-transparent pointer-events-none"></div>

              {/* Connecting lines */}
              <img 
                src="/images/com/line-top-left.svg" 
                alt="" 
                className="absolute left-[108.79px] top-[119.66px] w-[123px] h-[74px] pointer-events-none" 
              />
              <img 
                src="/images/com/line-top-right.svg" 
                alt="" 
                className="absolute left-[277.39px] top-[108.78px] w-[126px] h-[85px] pointer-events-none" 
              />
              <img 
                src="/images/com/line-bottom-left.svg" 
                alt="" 
                className="absolute left-[94.28px] top-[223px] w-[141px] h-[85px] pointer-events-none" 
              />
              <img 
                src="/images/com/line-bottom-right.svg" 
                alt="" 
                className="absolute left-[277.39px] top-[223px] w-[141px] h-[90px] pointer-events-none" 
              />

              {/* Central Shield */}
              <div className="absolute left-[210.31px] top-[152.29px] w-[91px] h-[129px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/com/shield.svg" 
                  alt="Compliance Shield" 
                  className="w-full h-full" 
                />
              </div>

              {/* Small Check Badge */}
              <div className="absolute left-[271.95px] top-[106.97px] w-[26px] h-[26px] hover:scale-110 transition-transform duration-300 animate-pulse">
                <img 
                  src="/images/com/check-badge.svg" 
                  alt="Status Checked" 
                  className="w-full h-full" 
                />
              </div>

              {/* Top-Left: Document */}
              <div className="absolute left-[85.22px] top-[96.09px] w-[50px] h-[50px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/images/com/document.svg" 
                  alt="Document Evidence" 
                  className="w-full h-full" 
                />
              </div>

              {/* Top-Right: Lock */}
              <div className="absolute left-[377.10px] top-[85.21px] w-[50px] h-[50px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/images/com/lock.svg" 
                  alt="Secure Controls" 
                  className="w-full h-full" 
                />
              </div>

              {/* Bottom-Left: Checklist */}
              <div className="absolute left-[70.71px] top-[281.02px] w-[50px] h-[50px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/images/com/checklist.svg" 
                  alt="Controls Mapping" 
                  className="w-full h-full" 
                />
              </div>

              {/* Bottom-Right: Search */}
              <div className="absolute left-[391.60px] top-[286.45px] w-[50px] h-[50px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/images/com/search.svg" 
                  alt="Audit Trails" 
                  className="w-full h-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[800px] w-full flex flex-col gap-16">
          
          {/* Context paragraphs */}
          <div className="flex flex-col gap-6 text-zinc-700 text-lg leading-relaxed font-sans">
            <p>
              Every organization operates under rules — privacy laws, security standards, financial regulations, industry codes. Compliance technology is the software that helps them keep up: tracking what's required, proving it's being done, and surfacing risk before it becomes a problem.
            </p>
            <p>
              It's often grouped under two labels: <strong className="text-zinc-900 font-semibold">GRC</strong> (governance, risk, and compliance) for the broad discipline, and <strong className="text-zinc-900 font-semibold">RegTech</strong> for tools that specifically help meet regulatory obligations. Both aim to replace scattered spreadsheets and last-minute audit panics with a continuous, organized system of record.
            </p>
            
            {/* Pull Quote */}
            <div className="pl-6 py-2 my-4 border-l-4 border-violet-600 bg-violet-50/50 rounded-r-xl">
              <p className="text-zinc-900 text-xl font-medium font-sans leading-relaxed italic">
                "Compliance isn't a document you produce once a year — it's a state you maintain every day. Good tooling makes that state visible."
              </p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-col gap-8 border-t border-gray-100 pt-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight font-sans">
                The landscape by the numbers
              </h2>
              <p className="text-zinc-500 text-sm italic">
                Figures are illustrative and provided for general context.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="px-6 py-6 relative bg-gradient-to-b from-white to-slate-50 rounded-2xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-2 overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-violet-600 text-4xl font-black font-sans leading-8">
                      {stat.value}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-700 text-base font-normal font-sans leading-6">
                      {stat.label}
                    </div>
                  </div>
                  {/* Decorative faint background shape matching Figma spec */}
                  <div className="size-28 absolute right-[-29.20px] top-[-29.20px] opacity-10 bg-radial-[at_30%_30%] from-violet-600 to-indigo-500 rounded-full pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Compliance is Hard Section */}
          <div className="flex flex-col gap-8 border-t border-gray-100 pt-12">
            <div className="flex flex-col gap-3">
              <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight font-sans">
                Why compliance is hard
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                The difficulty rarely comes from any single rule — it comes from keeping many obligations current, evidenced, and coordinated across teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {challenges.map((challenge, idx) => (
                <div 
                  key={idx} 
                  className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-4 group hover:shadow-md hover:border-violet-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-md shadow-violet-600/10 group-hover:scale-110 transition-transform duration-300">
                    {challenge.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-zinc-900 text-lg font-bold font-sans">
                      {challenge.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How Technology Helps Section */}
          <div className="flex flex-col gap-8 border-t border-gray-100 pt-12">
            <div className="flex flex-col gap-3">
              <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight font-sans">
                How technology helps
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Compliance platforms connect the same controls to live evidence — so instead of rebuilding proof for every audit, an organization maintains it continuously and exports it on demand.
              </p>
            </div>

            {/* Visual Workflow Diagram */}
            <div className="bg-gradient-to-b from-white to-slate-50 border border-gray-200 p-6 rounded-[20px] shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col items-center overflow-hidden">
              {/* Responsive Scaling Wrapper */}
              <div className="w-full flex justify-center overflow-visible py-4">
                <div className="scale-[0.5] xxs:scale-[0.6] xs:scale-[0.75] sm:scale-[0.9] md:scale-100 origin-center flex-shrink-0 relative w-[760px] h-[190px]">
                  
                  {/* Dashed Connecting Line */}
                  <div className="w-[562.72px] h-0 left-[77.84px] top-[67.84px] absolute border-b-[2.99px] border-dashed border-violet-600 pointer-events-none"></div>

                  {/* Map (controls) */}
                  <div className="absolute left-[44.41px] top-[36.41px] w-[63px] h-[63px] hover:scale-105 transition-transform duration-200">
                    <img src="/images/com/workflow-circle.svg" alt="" className="w-full h-full" />
                    <img src="/images/com/icon-map-box.svg" alt="" className="absolute left-[20px] top-[20px] w-[12px] h-[12px]" />
                    <img src="/images/com/icon-map-box.svg" alt="" className="absolute left-[32px] top-[20px] w-[12px] h-[12px]" />
                    <img src="/images/com/icon-map-box.svg" alt="" className="absolute left-[20px] top-[32px] w-[12px] h-[12px]" />
                  </div>
                  <div className="w-[80px] text-center left-[35.91px] top-[114.18px] absolute">
                    <span className="text-zinc-900 text-sm font-bold font-sans block">Map</span>
                    <span className="text-gray-600 text-xs font-normal font-sans block">controls</span>
                  </div>

                  {/* Monitor (continuously) */}
                  <div className="absolute left-[231.98px] top-[36.41px] w-[63px] h-[63px] hover:scale-105 transition-transform duration-200">
                    <img src="/images/com/workflow-circle-2.svg" alt="" className="w-full h-full" />
                    <img src="/images/com/icon-monitor-pulse.svg" alt="" className="absolute left-[18.5px] top-[22px] w-[26px] h-[19px]" />
                  </div>
                  <div className="w-[100px] text-center left-[213.48px] top-[114.18px] absolute">
                    <span className="text-zinc-900 text-sm font-bold font-sans block">Monitor</span>
                    <span className="text-gray-600 text-xs font-normal font-sans block">continuously</span>
                  </div>

                  {/* Evidence (collected) */}
                  <div className="absolute left-[419.55px] top-[36.41px] w-[63px] h-[63px] hover:scale-105 transition-transform duration-200">
                    <img src="/images/com/workflow-circle.svg" alt="" className="w-full h-full" />
                    <img src="/images/com/icon-evidence-doc.svg" alt="" className="absolute left-[21px] top-[20px] w-[21px] h-[23px]" />
                    <img src="/images/com/icon-evidence-check.svg" alt="" className="absolute left-[26px] top-[31px] w-[12px] h-[9px]" />
                  </div>
                  <div className="w-[90px] text-center left-[406.05px] top-[114.18px] absolute">
                    <span className="text-zinc-900 text-sm font-bold font-sans block">Evidence</span>
                    <span className="text-gray-600 text-xs font-normal font-sans block">collected</span>
                  </div>

                  {/* Audit (& report) */}
                  <div className="absolute left-[607.13px] top-[36.41px] w-[63px] h-[63px] hover:scale-105 transition-transform duration-200">
                    <img src="/images/com/workflow-circle-2.svg" alt="" className="w-full h-full" />
                    <img src="/images/com/icon-audit-glass.svg" alt="" className="absolute left-[23px] top-[21px] w-[17px] h-[17px]" />
                    <img src="/images/com/icon-audit-handle.svg" alt="" className="absolute left-[36px] top-[34px] w-[9px] h-[9px]" />
                  </div>
                  <div className="w-[90px] text-center left-[593.63px] top-[114.18px] absolute">
                    <span className="text-zinc-900 text-sm font-bold font-sans block">Audit</span>
                    <span className="text-gray-600 text-xs font-normal font-sans block">& report</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="w-full border-t border-gray-100 pt-4 text-center">
                <span className="text-gray-500 text-xs font-sans">
                  The compliance cycle — controls stay mapped to live evidence, ready for any audit.
                </span>
              </div>
            </div>

            {/* List of capabilities */}
            <p className="text-zinc-700 text-base leading-relaxed">
              Four capabilities do most of the work: a <span className="text-zinc-900 font-bold">central control library</span> (one place for every requirement), <span className="text-zinc-900 font-bold">continuous monitoring</span> (checking controls automatically), <span className="text-zinc-900 font-bold">automated evidence</span> (pulling proof straight from your systems), and <span className="text-zinc-900 font-bold">audit-ready reporting</span> (exporting it all on demand).
            </p>
          </div>

          {/* Key Building Blocks Section */}
          <div className="flex flex-col gap-8 border-t border-gray-100 pt-12">
            <div className="flex flex-col gap-3">
              <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight font-sans">
                Key building blocks
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                The terms you'll hear most often when people talk about compliance technology:
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden">
              {glossary.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`self-stretch px-5 py-4 flex flex-col justify-start items-start gap-1 group hover:bg-slate-50/50 transition-colors duration-200 ${
                    idx < glossary.length - 1 ? "border-b-[0.80px] border-gray-100" : ""
                  }`}
                >
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <h3 className="self-stretch justify-center text-zinc-900 text-base font-extrabold font-sans leading-7">
                      {item.term}
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <p className="self-stretch justify-center text-zinc-700 text-base font-normal font-sans leading-7">
                      {item.definition}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Where it's Heading Section */}
          <div className="flex flex-col gap-8 border-t border-gray-100 pt-12">
            <div className="flex flex-col gap-3">
              <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight font-sans">
                Where it's heading
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                A few shifts shaping the next chapter of compliance technology:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {headings.map((item, idx) => (
                <div 
                  key={idx} 
                  className="self-stretch pl-14 pr-5 py-5 relative bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] flex flex-col justify-start items-start gap-1 hover:scale-[1.02] transition-transform duration-300 group"
                >
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <h3 className="self-stretch justify-center text-zinc-900 text-base font-bold font-sans leading-7">
                      {item.title}
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <p className="self-stretch justify-center text-zinc-700 text-base font-normal font-sans leading-6 animate-fade-in">
                      {item.description}
                    </p>
                  </div>
                  {/* Purple/Indigo gradient circle bullet */}
                  <div className="w-5 h-5 left-[20.80px] top-[24.80px] absolute bg-gradient-to-br from-violet-600 to-indigo-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          <div className="flex flex-col gap-8 border-t border-gray-100 pt-12">
            <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight font-sans">
              Frequently asked questions
            </h2>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFAQ === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
                    >
                      <div className="justify-center text-zinc-900 text-base font-bold font-sans leading-7">
                        {faq.question}
                      </div>
                      <div className="text-violet-700 text-xl font-normal select-none flex-shrink-0 ml-4">
                        {isOpen ? "−" : "+"}
                      </div>
                    </button>
                    
                    {/* Animated accordion panel */}
                    <div 
                      className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? "max-h-[300px] border-t border-gray-100" : "max-h-0"
                      }`}
                    >
                      <div className="p-5 bg-slate-50/50">
                        <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explore Related Banner Section */}
          <div className="w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-10 shadow-xl border border-white/5 relative overflow-hidden flex flex-col gap-6 mt-4">
            
            {/* Glowing background highlights */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute left-10 top-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="flex flex-col gap-2 relative z-10">
              <h2 className="text-white text-2xl md:text-3xl font-extrabold font-sans">
                Explore related
              </h2>
              <p className="text-white/70 text-base font-normal leading-relaxed font-sans max-w-[600px]">
                Want to go deeper, or talk through compliance for your organization? We're here to help.
              </p>
            </div>

            {/* Pill navigation links */}
            <div className="flex flex-wrap gap-3 mt-2 relative z-10">
              <Link 
                href="/cybersecurity"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-full text-white text-sm font-semibold transition-all duration-200 flex items-center gap-1.5"
              >
                Cybersecurity <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/trust-security"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-full text-white text-sm font-semibold transition-all duration-200 flex items-center gap-1.5"
              >
                Trust Center <ArrowRight className="w-4 h-4" />
              </Link>

              <Link 
                href="/data-processing-addendum"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-full text-white text-sm font-semibold transition-all duration-200 flex items-center gap-1.5"
              >
                Data processing & legal <ArrowRight className="w-4 h-4" />
              </Link>

              <Link 
                href="/#contact"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-full text-white text-sm font-semibold transition-all duration-200 flex items-center gap-1.5"
              >
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
