"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Handshake,
  UserCog,
  GitBranch,
  AlertTriangle,
  FileCheck,
  Cloud,
  Key,
  Code,
  FileText,
  BarChart,
  Lock,
  Search,
  Database,
  ArrowRight,
  CheckCircle2,
  PieChart,
  Activity,
  FileBadge
} from "lucide-react";

export default function Compliance1Client() {
  const [activeTab, setActiveTab] = useState("Finance");

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Inter']">
      
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 overflow-hidden py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[600px] flex flex-col gap-6 z-10">
            <h1 className="text-white text-4xl lg:text-5xl font-semibold leading-tight">
              Automate Compliance<br />Reduce Risk, Prove Control
            </h1>
            <p className="text-white/90 text-lg lg:text-xl font-normal leading-8 max-w-[550px]">
              Policy automation, continuous monitoring, and audit-ready evidence at enterprise scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="h-14 px-8 bg-white rounded-lg text-teal-700 text-base font-bold hover:bg-gray-50 transition-colors">
                Book a Compliance Assessment
              </button>
              <button className="h-14 px-8 rounded-lg border-2 border-white text-white text-base font-bold hover:bg-white/10 transition-colors">
                Download Compliance Matrix
              </button>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
            <div className="w-full max-w-[580px] bg-white/10 rounded-xl shadow-[0px_10px_30px_0px_rgba(0,0,0,0.10)] p-8">
              <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-8">
                <h3 className="text-white text-xl font-bold font-['Inter'] leading-8">Compliance Dashboard</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-md"></div>
                  <span className="text-white text-base font-normal font-['Inter'] leading-6">98% Complete</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="h-14 bg-green-600/50 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium font-['Inter'] leading-6">Access Control</span>
                </div>
                <div className="h-14 bg-yellow-400/50 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium font-['Inter'] leading-6">Data Privacy</span>
                </div>
                <div className="h-14 bg-green-600/50 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium font-['Inter'] leading-6">Encryption</span>
                </div>
                <div className="h-14 bg-red-500/50 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium font-['Inter'] leading-6">Vendor Risk</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-neutral-200 rounded-sm"></div>
                  <span className="text-white text-base font-normal font-['Inter'] leading-6">SOC 2 Audit - 45 days</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-neutral-200 rounded-sm"></div>
                  <span className="text-white text-base font-normal font-['Inter'] leading-6">ISO 27001 Review - 60 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-teal-400/20 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full bg-sky-50 py-20 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-3xl md:text-4xl font-semibold mb-16 text-center">Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1152px] mx-auto">
            {[
              { icon: "/images/comp/usecase-privacy.png", title: "Data Privacy & Subject Requests" },
              { icon: "/images/comp/usecase-vendor.png", title: "Vendor Risk Management\n(KYB/KYC advisory)" },
              { icon: "/images/comp/usecase-access.png", title: "JML (Joiner/Mover/Leaver)\nAccess Governance" },
              { icon: "/images/comp/usecase-sdlc.png", title: "Secure SDLC & Change\nManagement" },
              { icon: "/images/comp/usecase-incident.png", title: "Incident Response & DR Drills" },
              { icon: "/images/comp/usecase-policy.png", title: "Policy Lifecycle & Attestation" }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow min-h-[176px]">
                <div className="h-10 w-12 relative flex items-center justify-center mb-4">
                  <Image src={useCase.icon} alt="Use Case Icon" fill className="object-contain" />
                </div>
                <h3 className="text-sky-900 text-xl font-medium leading-8 whitespace-pre-line">
                  {useCase.title}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-slate-500 font-medium">
            Artifacts: Risk Register • Policy Library • Checklist Preview
          </div>
        </div>
      </section>

      {/* Platform & Integrations */}
      <section className="w-full py-20 px-6 bg-fuchsia-50">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-teal-700 text-3xl md:text-2xl font-semibold mb-12 text-center">Platform & Integrations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1152px]">
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col items-center">
              <h3 className="text-teal-700 text-xl font-bold mb-8">Cloud Providers</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-white shadow-sm border border-slate-100 rounded-[20px] px-4 py-2 flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-teal-700" />
                  <span className="text-teal-700 text-sm font-medium">AWS</span>
                </div>
                <div className="bg-white shadow-sm border border-slate-100 rounded-[20px] px-4 py-2 flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-teal-700" />
                  <span className="text-teal-700 text-sm font-medium">Azure</span>
                </div>
                <div className="bg-white shadow-sm border border-slate-100 rounded-[20px] px-4 py-2 flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-teal-700" />
                  <span className="text-teal-700 text-sm font-medium">GCP</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col items-center">
              <h3 className="text-teal-700 text-xl font-bold mb-8">Identity & Access</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-white shadow-sm border border-slate-100 rounded-[20px] px-4 py-2 flex items-center gap-2">
                  <Key className="w-4 h-4 text-teal-700" />
                  <span className="text-teal-700 text-sm font-medium">Okta</span>
                </div>
                <div className="bg-white shadow-sm border border-slate-100 rounded-[20px] px-4 py-2 flex items-center gap-2">
                  <Key className="w-4 h-4 text-teal-700" />
                  <span className="text-teal-700 text-sm font-medium">AD</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col items-center">
              <h3 className="text-teal-700 text-xl font-bold mb-8">Development</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-white shadow-sm border border-slate-100 rounded-[20px] px-4 py-2 flex items-center gap-2">
                  <Code className="w-4 h-4 text-teal-700" />
                  <span className="text-teal-700 text-sm font-medium">GitHub</span>
                </div>
                <div className="bg-white shadow-sm border border-slate-100 rounded-[20px] px-4 py-2 flex items-center gap-2">
                  <Code className="w-4 h-4 text-teal-700" />
                  <span className="text-teal-700 text-sm font-medium">GitLab</span>
                </div>
                <div className="bg-white shadow-sm border border-slate-100 rounded-[20px] px-4 py-2 flex items-center gap-2">
                  <Code className="w-4 h-4 text-teal-700" />
                  <span className="text-teal-700 text-sm font-medium">Jira</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-12 text-gray-500 font-normal text-base italic text-center">API-first, agentless where possible</p>
        </div>
      </section>

      {/* Controls & Evidence Vault */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl font-semibold mb-12 text-center">Controls & Evidence Vault</h2>
          
          <div className="w-full flex flex-col gap-4 mb-16">
            {["Logical Access", "Encryption", "Vulnerability Management", "Backups & Recovery", "Monitoring & Logging"].map((item, idx) => (
              <div key={idx} className="w-full h-16 flex items-center justify-between px-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200">
                <span className="text-sky-900 text-lg font-bold font-['Arial']">{item}</span>
                <svg className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-base font-normal">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-teal-700" />
              <span>Evidence export: CSV/JSON</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-teal-700" />
              <span>Immutable vault with timestamps</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-teal-700" />
              <span>Reviewer workflow & versioning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting & Dashboards */}
      <section className="w-full py-20 px-6 bg-sky-50">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl font-semibold mb-12 text-center">Reporting & Dashboards</h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-[1250px]">
            {/* Top row: 3 cards */}
            <div className="w-[384px] h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <span className="text-sky-900 text-lg font-medium font-['Inter'] leading-7">Compliance posture % complete</span>
            </div>
            
            <div className="w-[384px] h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 relative mb-4 flex items-center justify-center">
                <Image src="/images/comp/report-risk.png" alt="Risk scoring by domain" fill className="object-contain" />
              </div>
              <span className="text-sky-900 text-lg font-medium font-['Inter'] leading-7">Risk scoring by domain</span>
            </div>

            <div className="w-[384px] h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 relative mb-4 flex items-center justify-center">
                <Image src="/images/comp/report-auditor.png" alt="Auditor report pack" fill className="object-contain" />
              </div>
              <span className="text-sky-900 text-lg font-medium font-['Inter'] leading-7">Auditor report pack (SOC 2, ISO,<br/>GDPR, HIPAA)</span>
            </div>
            
            {/* Bottom row: 2 cards */}
            <div className="w-[384px] h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 relative mb-4 flex items-center justify-center">
                <Image src="/images/comp/report-board.png" alt="Board summary dashboards" fill className="object-contain" />
              </div>
              <span className="text-sky-900 text-lg font-medium font-['Inter'] leading-7">Board summary dashboards (traffic<br/>light view)</span>
            </div>

            <div className="w-[384px] h-44 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 relative mb-4 flex items-center justify-center">
                <Image src="/images/comp/report-export.png" alt="Export" fill className="object-contain" />
              </div>
              <span className="text-sky-900 text-lg font-medium font-['Inter'] leading-7">Export: PDF, CSV, API feed</span>
            </div>
          </div>
          
          <button className="h-14 px-16 rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900 text-sky-900 text-base font-bold font-['Arial'] hover:bg-sky-900 hover:text-white transition-colors">
            Request Demo Dashboard
          </button>
        </div>
      </section>

      {/* Compliance That Pays for Itself */}
      <section className="w-full py-20 px-6 bg-fuchsia-50">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl font-semibold mb-12 text-center">Compliance That Pays for Itself</h2>
          
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <div className="w-72 h-44 bg-white rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-teal-700 text-5xl font-bold font-['Inter'] leading-[76.80px] mb-2">-30%</span>
              <span className="text-gray-500 text-lg font-medium font-['Inter'] leading-7">audit prep hours</span>
            </div>
            <div className="w-72 h-44 bg-white rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-teal-700 text-5xl font-bold font-['Inter'] leading-[76.80px] mb-2">$120k</span>
              <span className="text-gray-500 text-lg font-medium font-['Inter'] leading-7">annual savings</span>
            </div>
            <div className="w-72 h-44 bg-white rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-teal-700 text-5xl font-bold font-['Inter'] leading-[76.80px] mb-2">40%</span>
              <span className="text-gray-500 text-lg font-medium font-['Inter'] leading-7">faster readiness</span>
            </div>
            <div className="w-72 h-44 bg-white rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-teal-700 text-5xl font-bold font-['Inter'] leading-[76.80px] mb-2">9/10</span>
              <span className="text-gray-500 text-lg font-medium font-['Inter'] leading-7">auditor satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored for Your Sector */}
      <section className="w-full py-20 px-6 bg-sky-50">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl font-semibold mb-8 text-center">Tailored for Your Sector</h2>
          
          <div className="flex justify-center gap-4 mb-12">
            {["Finance", "Healthcare", "SaaS & Tech"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-3xl text-sm font-normal font-['Arial'] outline outline-2 outline-offset-[-2px] transition-colors ${
                  activeTab === tab 
                    ? 'bg-sky-900 text-white outline-sky-900' 
                    : 'bg-white text-gray-500 outline-zinc-200 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="w-full max-w-[800px] bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-12 min-h-[384px] flex flex-col">
            {activeTab === "Finance" && (
              <div className="animate-fade-in flex flex-col h-full">
                <h3 className="text-sky-900 text-2xl font-bold font-['Inter'] leading-10 mb-8">Finance Sector Compliance</h3>
                <div className="flex flex-col gap-6 mb-12 flex-grow">
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">PCI DSS payment card data protection</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">SOX financial reporting controls</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">FINRA regulatory requirements</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">Bank regulatory compliance (FDIC, OCC)</span>
                  </div>
                </div>
                <a href="#" className="text-sky-900 text-base font-bold font-['Arial'] underline inline-block">
                  View Finance Case Study →
                </a>
              </div>
            )}
            {activeTab === "Healthcare" && (
              <div className="animate-fade-in flex flex-col h-full">
                <h3 className="text-sky-900 text-2xl font-bold font-['Inter'] leading-10 mb-8">Healthcare Compliance</h3>
                <div className="flex flex-col gap-6 mb-12 flex-grow">
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">HIPAA Security & Privacy Rules</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">HITRUST CSF Certification</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">PHI Data Handling Policies</span>
                  </div>
                </div>
                <a href="#" className="text-sky-900 text-base font-bold font-['Arial'] underline inline-block">
                  View Healthcare Case Study →
                </a>
              </div>
            )}
            {activeTab === "SaaS & Tech" && (
              <div className="animate-fade-in flex flex-col h-full">
                <h3 className="text-sky-900 text-2xl font-bold font-['Inter'] leading-10 mb-8">SaaS & Tech Compliance</h3>
                <div className="flex flex-col gap-6 mb-12 flex-grow">
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">SOC 2 Type I & II</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">ISO 27001 Information Security</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <span className="text-sky-900 text-base font-bold font-['Inter'] leading-6">✓</span>
                    <span className="text-gray-500 text-base font-normal font-['Inter'] leading-6">GDPR & CCPA Privacy Requirements</span>
                  </div>
                </div>
                <a href="#" className="text-sky-900 text-base font-bold font-['Arial'] underline inline-block">
                  View SaaS Case Study →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SOC 2 Readiness */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-sky-900 text-2xl font-semibold mb-2">SOC 2 Readiness in 10 Weeks</h2>
          <div className="w-full max-w-[768px] text-center text-gray-500 text-lg font-normal font-['Inter'] leading-7 mb-12">
            A growing SaaS company needed SOC 2 Type II certification to close enterprise deals. Our
          </div>
          
          <div className="flex flex-wrap justify-between w-full">
            <div className="flex flex-col items-center">
              <span className="text-teal-700 text-4xl font-bold mb-1">500+</span>
              <span className="text-gray-400 text-sm font-normal">evidence items auto-collected</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-teal-700 text-4xl font-bold mb-1">-30%</span>
              <span className="text-gray-400 text-sm font-normal">audit prep time</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-teal-700 text-4xl font-bold mb-1">$85k</span>
              <span className="text-gray-400 text-sm font-normal">cost savings quantified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-24 bg-zinc-100 flex justify-center px-4">
        <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left info column */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-zinc-800 text-3xl font-bold mb-6 font-['Inter'] leading-10">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-neutral-600 text-lg font-normal font-['Inter'] leading-7">
                Connect with our global team of experts to discuss your digital<br />transformation journey and discover how we can accelerate your<br />success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                </div>
                <div>
                  <h3 className="text-zinc-800 font-semibold text-lg font-['Inter'] leading-7">Email Us</h3>
                  <p className="text-zinc-400 text-base font-normal font-['Inter'] leading-6">hello@zoikodigital.com</p>
                  <p className="text-zinc-500 text-sm font-normal font-['Inter'] leading-6">Response within 4 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-zinc-800 font-semibold text-lg font-['Inter'] leading-7">Call Us</h3>
                  <p className="text-zinc-400 text-base font-normal font-['Inter'] leading-6">+1 (555) 123-4567</p>
                  <p className="text-zinc-500 text-sm font-normal font-['Inter'] leading-6">24/7 Support Available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-zinc-800 font-semibold text-lg font-['Inter'] leading-7">Live Chat</h3>
                  <p className="text-zinc-400 text-base font-normal font-['Inter'] leading-6">Instant Support</p>
                  <p className="text-zinc-500 text-sm font-normal font-['Inter'] leading-6">Online now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-400 p-10 w-full max-w-[572px]">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Full Name</label>
                  <input 
                    type="text" 
                    className="h-12 px-4 rounded-lg bg-neutral-100 border border-stone-300 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Business Email</label>
                  <input 
                    type="email" 
                    className="h-12 px-4 rounded-lg bg-neutral-100 border border-stone-300 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Company</label>
                  <input 
                    type="text" 
                    className="h-12 px-4 rounded-lg bg-neutral-100 border border-stone-300 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Service Interest</label>
                  <select className="h-14 px-4 rounded-lg bg-neutral-100 outline outline-1 outline-offset-[-1px] outline-stone-300 text-neutral-400 appearance-none">
                    <option>Select a service</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Budget</label>
                  <select className="h-14 px-4 rounded-lg bg-neutral-100 outline outline-1 outline-offset-[-1px] outline-stone-300 text-neutral-400 appearance-none">
                    <option>Select budget range</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project requirements, timeline, and objectives..."
                    className="p-4 rounded-lg bg-neutral-100 outline outline-1 outline-offset-[-1px] outline-stone-300 text-neutral-400 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-56 h-14 bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 rounded-xl text-white text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity"
                >
                  Start Your Project
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
}
