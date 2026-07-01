"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function InfrastructureClient() {
  const [activeTab, setActiveTab] = useState('Enterprise SaaS');

  return (
    <div className="min-h-screen font-['Inter']">
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 overflow-hidden py-20 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-white text-4xl lg:text-5xl font-semibold leading-tight">
              Cloud Done Right Secure, Resilient, Cost-Optimized
            </h1>
            <p className="text-white text-lg font-normal leading-7 max-w-[550px]">
              Architecture, migration, and operations delivered with Tier-1 rigor across AWS, Azure, and Google Cloud.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" className="bg-white text-teal-700 text-base font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Schedule an Architecture Review
              </a>
              <a href="#" className="border-2 border-white text-white text-base font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors">
                Get a Cloud Cost Audit
              </a>
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:justify-end relative h-[400px]">
            <div className="flex items-center gap-6 xl:gap-10">
              {/* Background floating badges */}
              <div className="flex flex-col gap-5">
                <div className="bg-white/10 rounded-[20px] px-5 py-2 border border-white/20 self-start">
                  <span className="text-white text-sm font-bold">Up to 35% cost savings</span>
                </div>
                <div className="bg-white/10 rounded-[20px] px-5 py-2 border border-white/20 self-end">
                  <span className="text-white text-sm font-bold">99.99% HA</span>
                </div>
                <div className="bg-white/10 rounded-[20px] px-5 py-2 border border-white/20 self-center ml-8">
                  <span className="text-white text-sm font-bold">CIS Benchmarks</span>
                </div>
              </div>

              {/* Core capability cards */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="w-[180px] h-[120px] bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] border border-white/20 flex flex-col items-center justify-center backdrop-blur-sm">
                  <Image src="/images/infra/hero-network.png" alt="Network" width={40} height={40} className="mb-2 object-contain" />
                  <span className="text-white text-lg font-bold">Network</span>
                </div>
                <div className="w-[180px] h-[120px] bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] border border-white/20 flex flex-col items-center justify-center backdrop-blur-sm">
                  <Image src="/images/infra/hero-compute.png" alt="Compute" width={40} height={40} className="mb-2 object-contain" />
                  <span className="text-white text-lg font-bold">Compute</span>
                </div>
                <div className="w-[180px] h-[120px] bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] border border-white/20 flex flex-col items-center justify-center backdrop-blur-sm">
                  <Image src="/images/infra/hero-data.png" alt="Data" width={40} height={40} className="mb-2 object-contain" />
                  <span className="text-white text-lg font-bold">Data</span>
                </div>
                <div className="w-[180px] h-[120px] bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] border border-white/20 flex flex-col items-center justify-center backdrop-blur-sm">
                  <Image src="/images/infra/hero-observability.png" alt="Observability" width={40} height={40} className="mb-2 object-contain" />
                  <span className="text-white text-lg font-bold">Observability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Deliver */}
      <section className="w-full bg-fuchsia-50 py-20 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-teal-700 text-3xl font-bold mb-12">What We Deliver</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-[1100px]">
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40">
              <Image src="/images/infra/deliver-strategy.png" alt="Cloud Strategy & Landing Zones" width={48} height={40} className="mb-4 object-contain" />
              <h3 className="text-teal-700 text-xl font-medium text-center">Cloud Strategy & Landing Zones</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40">
              <Image src="/images/infra/deliver-migration.png" alt="Migration Services" width={40} height={40} className="mb-4 object-contain" />
              <h3 className="text-teal-700 text-xl font-medium text-center leading-tight">Migration Services (rehost,<br/>replatform, refactor)</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40">
              <Image src="/images/infra/deliver-containers.png" alt="Containers & Kubernetes" width={44} height={40} className="mb-4 object-contain" />
              <h3 className="text-teal-700 text-xl font-medium text-center leading-tight">Containers & Kubernetes (EKS,<br/>AKS, GKE)</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40">
              <Image src="/images/infra/deliver-devops.png" alt="DevOps & CI/CD Automation" width={36} height={40} className="mb-4 object-contain" />
              <h3 className="text-teal-700 text-xl font-medium text-center">DevOps & CI/CD Automation</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40">
              <Image src="/images/infra/deliver-sre.png" alt="SRE & Observability" width={44} height={40} className="mb-4 object-contain" />
              <h3 className="text-teal-700 text-xl font-medium text-center">SRE & Observability (SLIs/SLOs)</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40">
              <Image src="/images/infra/deliver-backup.png" alt="Backup/DR & Multi-region HA" width={40} height={40} className="mb-4 object-contain" />
              <h3 className="text-teal-700 text-xl font-medium text-center">Backup/DR & Multi-region HA</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40 xl:col-start-1 xl:col-span-1 xl:translate-x-1/2">
              <Image src="/images/infra/deliver-zerotrust.png" alt="Zero Trust" width={36} height={40} className="mb-4 object-contain" />
              <h3 className="text-teal-700 text-xl font-medium text-center">Zero Trust (IAM, MFA, SSO)</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40 xl:col-start-2 xl:col-span-1 xl:translate-x-1/2">
              <Image src="/images/infra/deliver-finops.png" alt="FinOps & Cost Governance" width={32} height={40} className="mb-4 object-contain" />
              <h3 className="text-teal-700 text-xl font-medium text-center">FinOps & Cost Governance</h3>
            </div>
          </div>
          
          <p className="mt-12 text-center">
            <span className="text-gray-500 text-base font-bold">Artifacts shown: </span>
            <span className="text-gray-500 text-base font-normal">Readiness Report · Migration Plan · SRE Runbooks</span>
          </p>
        </div>
      </section>
      
      {/* Architectures You Can Trust */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl font-bold mb-12">Architectures You Can Trust</h2>
          
          <div className="flex gap-4 mb-16 overflow-x-auto max-w-full pb-2">
            <button 
              onClick={() => setActiveTab('Enterprise SaaS')}
              className={`px-8 py-3 rounded-3xl text-sm font-normal whitespace-nowrap transition-colors outline outline-2 outline-offset-[-2px] ${
                activeTab === 'Enterprise SaaS' 
                  ? 'bg-teal-700 text-white outline-teal-700' 
                  : 'bg-white text-gray-500 outline-zinc-200 hover:bg-gray-50'
              }`}
            >
              Enterprise SaaS
            </button>
            <button 
              onClick={() => setActiveTab('Data Analytics')}
              className={`px-8 py-3 rounded-3xl text-sm font-normal whitespace-nowrap transition-colors outline outline-2 outline-offset-[-2px] ${
                activeTab === 'Data Analytics' 
                  ? 'bg-teal-700 text-white outline-teal-700' 
                  : 'bg-white text-gray-500 outline-zinc-200 hover:bg-gray-50'
              }`}
            >
              Data Analytics
            </button>
            <button 
              onClick={() => setActiveTab('E-Commerce')}
              className={`px-8 py-3 rounded-3xl text-sm font-normal whitespace-nowrap transition-colors outline outline-2 outline-offset-[-2px] ${
                activeTab === 'E-Commerce' 
                  ? 'bg-teal-700 text-white outline-teal-700' 
                  : 'bg-white text-gray-500 outline-zinc-200 hover:bg-gray-50'
              }`}
            >
              E-Commerce
            </button>
          </div>

          <div className="w-full max-w-[1000px] bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-8 lg:p-12 flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <div className="flex items-center gap-6 bg-white h-20 px-6 rounded-lg">
                <Image src="/images/infra/arch-kubernetes.png" alt="Kubernetes" width={28} height={24} className="object-contain" />
                <span className="text-sky-900 text-base font-bold">Kubernetes</span>
              </div>
              <div className="flex items-center gap-6 bg-white h-20 px-6 rounded-lg">
                <Image src="/images/infra/arch-servicemesh.png" alt="Service Mesh" width={28} height={24} className="object-contain" />
                <span className="text-sky-900 text-base font-bold">Service Mesh</span>
              </div>
              <div className="flex items-center gap-6 bg-white h-20 px-6 rounded-lg">
                <Image src="/images/infra/arch-manageddb.png" alt="Managed DB" width={20} height={24} className="object-contain" />
                <span className="text-sky-900 text-base font-bold">Managed DB</span>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col gap-8">
              <p className="text-gray-500 text-lg leading-7">
                Multi-tenant SaaS platform with auto-scaling, service discovery, and data isolation for enterprise customers.
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <span className="text-teal-700 font-bold">✓</span>
                  <span className="text-gray-500">Auto-scaling based on demand</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-700 font-bold">✓</span>
                  <span className="text-gray-500">Multi-tenant data isolation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-700 font-bold">✓</span>
                  <span className="text-gray-500">Zero-downtime deployments</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-700 font-bold">✓</span>
                  <span className="text-gray-500">Comprehensive monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-700 font-bold">✓</span>
                  <span className="text-gray-500">Disaster recovery ready</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="w-full bg-slate-50 py-20 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl font-bold mb-16">Security & Compliance</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full mb-16">
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 h-40">
              <Image src="/images/infra/sec-network.png" alt="Network segmentation" width={32} height={32} className="mb-4 object-contain" />
              <h3 className="text-sky-900 font-medium text-center leading-tight">Network<br/>segmentation</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 h-40">
              <Image src="/images/infra/sec-key.png" alt="Key management" width={32} height={32} className="mb-4 object-contain" />
              <h3 className="text-sky-900 font-medium text-center leading-tight">Key management<br/>(KMS/HSM)</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 h-40">
              <Image src="/images/infra/sec-audit.png" alt="Audit logging" width={32} height={32} className="mb-4 object-contain" />
              <h3 className="text-sky-900 font-medium text-center">Audit logging</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 h-40">
              <Image src="/images/infra/sec-siem.png" alt="SIEM integration" width={32} height={32} className="mb-4 object-contain" />
              <h3 className="text-sky-900 font-medium text-center">SIEM integration</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 h-40">
              <Image src="/images/infra/sec-vuln.png" alt="Vulnerability scans" width={32} height={32} className="mb-4 object-contain" />
              <h3 className="text-sky-900 font-medium text-center">Vulnerability scans</h3>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6 mb-12">
            <h4 className="text-sky-900 text-lg font-bold">Compliance mapping:</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-6 py-2 bg-fuchsia-700/10 text-sky-900 text-sm font-bold rounded-[20px]">SOC 2</span>
              <span className="px-6 py-2 bg-fuchsia-700/10 text-sky-900 text-sm font-bold rounded-[20px]">HIPAA</span>
              <span className="px-6 py-2 bg-fuchsia-700/10 text-sky-900 text-sm font-bold rounded-[20px]">GDPR</span>
              <span className="px-6 py-2 bg-fuchsia-700/10 text-sky-900 text-sm font-bold rounded-[20px]">PCI DSS</span>
            </div>
          </div>
          
          <a href="#" className="w-full max-w-[384px] text-center py-4 rounded-lg outline outline-2 outline-sky-900 text-sky-900 font-bold hover:bg-sky-50 transition-colors mb-4">
            Download Cloud Security Checklist (PDF)
          </a>
          <p className="text-gray-500 text-sm font-normal">*SOC 2-ready = aligned, not audited</p>
        </div>
      </section>

      {/* SRE & SLAs */}
      <section className="w-full bg-fuchsia-50 py-20 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-teal-700 text-xl font-bold mb-12">SRE & SLAs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px] mb-12">
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40">
              <span className="text-teal-700 text-4xl font-bold mb-2">99.9–99.99%</span>
              <span className="text-gray-500 text-lg font-medium">Uptime targets</span>
            </div>
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40">
              <span className="text-teal-700 text-4xl font-bold mb-2">≤ 15 min</span>
              <span className="text-gray-500 text-lg font-medium">Incident response</span>
            </div>
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-8 h-40">
              <span className="text-teal-700 text-4xl font-bold mb-2">≤ 5 days</span>
              <span className="text-gray-500 text-lg font-medium">RCA delivery</span>
            </div>
          </div>
          
          <p className="text-teal-700 text-base font-bold mb-4">
            Observability: OpenTelemetry, Datadog dashboards
          </p>
          <p className="text-center">
            <span className="text-gray-500 text-sm font-bold">Artifact: </span>
            <span className="text-gray-500 text-sm font-normal">Sample SLA + Error Budget Graph</span>
          </p>
        </div>
      </section>

      {/* Optimize Spend */}
      <section className="w-full bg-sky-50 py-20 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl font-bold mb-12 text-center">Optimize Spend Without Sacrificing Scale</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 h-44">
              <Image src="/images/infra/opt-rightsizing.png" alt="Rightsizing workloads" width={40} height={40} className="mb-4 object-contain" />
              <h3 className="text-sky-900 font-medium text-lg text-center">Rightsizing workloads</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 h-44">
              <Image src="/images/infra/opt-reserved.png" alt="Reserved/spot instances" width={40} height={40} className="mb-4 object-contain" />
              <h3 className="text-sky-900 font-medium text-lg text-center">Reserved/spot instances</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 h-44">
              <Image src="/images/infra/opt-storage.png" alt="Storage tiering" width={40} height={40} className="mb-4 object-contain" />
              <h3 className="text-sky-900 font-medium text-lg text-center">Storage tiering</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-6 h-44">
              <Image src="/images/infra/opt-autoscaling.png" alt="Autoscaling & enforcement policies" width={40} height={40} className="mb-4 object-contain" />
              <h3 className="text-sky-900 font-medium text-lg text-center leading-tight">Autoscaling &<br/>enforcement policies</h3>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-8 mb-12">
            <h4 className="text-sky-900 text-lg font-bold text-center">Sample monthly report: before/after graph showing ≥ 20% savings</h4>
            <div className="flex items-end gap-16 h-32 relative">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sky-900 text-xl font-bold">$50k</span>
                <div className="w-14 h-20 bg-sky-900 rounded-sm"></div>
                <span className="text-gray-500 font-bold">Before</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sky-900 text-xl font-bold">$30k</span>
                <div className="w-14 h-11 bg-sky-900 rounded-sm"></div>
                <span className="text-gray-500 font-bold">After</span>
              </div>
            </div>
          </div>
          
          <a href="#" className="bg-sky-900 text-white text-base font-bold w-64 h-12 flex items-center justify-center rounded-lg hover:bg-sky-800 transition-colors">
            Request a Free Cost Audit
          </a>
        </div>
      </section>

      {/* Case Study */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-teal-700 text-2xl font-bold mb-16">40% Cloud Cost Reduction + 99.98% Availability</h2>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
            <div className="flex flex-col items-center">
              <span className="text-teal-700 text-4xl font-bold mb-4">40%</span>
              <span className="text-gray-500 text-base font-normal">Cost saved</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-teal-700 text-4xl font-bold mb-4">99.98%</span>
              <span className="text-gray-500 text-base font-normal">Uptime achieved</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-teal-700 text-4xl font-bold mb-4">{"<"} 30s</span>
              <span className="text-gray-500 text-base font-normal">DR failover time</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-lg font-normal leading-7 mb-12">
            A growing fintech company faced escalating cloud costs and reliability concerns. Our team implemented a comprehensive cloud optimization strategy, including rightsizing, reserved instances, and automated scaling policies. The migration to a multi-region architecture improved availability while significantly reducing operational costs.
          </p>
          
          <a href="#" className="w-64 h-12 flex items-center justify-center bg-teal-700 text-white text-base font-bold rounded-lg hover:bg-teal-600 transition-colors">
            Read Full Case Study →
          </a>
        </div>
      </section>

      {/* Pricing Anchors */}
      <section className="w-full bg-fuchsia-50 py-20 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl font-bold mb-12">Pricing Anchors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1100px]">
            <div className="bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-gray-200 flex flex-col items-center justify-center p-8 h-60">
              <h3 className="text-sky-900 text-2xl font-bold mb-4">Migration Starter</h3>
              <span className="text-teal-700 text-3xl font-bold mb-4">$40k–$90k</span>
              <span className="text-gray-500 text-base font-normal">8–12 weeks</span>
            </div>
            
            <div className="bg-white rounded-xl shadow-[0px_10px_30px_0px_rgba(144,80,159,0.20)] outline outline-2 outline-offset-[-2px] outline-teal-700 flex flex-col items-center justify-center p-8 h-60">
              <h3 className="text-sky-900 text-2xl font-bold mb-4 text-center">Enterprise Cloud<br/>Build</h3>
              <span className="text-teal-700 text-3xl font-bold mb-4">$100k–$250k</span>
              <span className="text-gray-500 text-base font-normal">16–28 weeks</span>
            </div>
            
            <div className="bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-gray-200 flex flex-col items-center justify-center p-8 h-60">
              <h3 className="text-sky-900 text-2xl font-bold mb-4 text-center">Managed Ops<br/>(SRE)</h3>
              <span className="text-teal-700 text-3xl font-bold mb-4">$15k+/mo</span>
              <span className="text-gray-500 text-base font-normal">with SLAs</span>
            </div>
            
            <div className="bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-gray-200 flex flex-col items-center justify-center p-8 h-60">
              <h3 className="text-sky-900 text-2xl font-bold mb-4 text-center">FinOps Retainer</h3>
              <span className="text-teal-700 text-3xl font-bold mb-4">$5k+/mo</span>
              <span className="text-gray-500 text-base font-normal">guarantee ≥ 20% savings</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-sky-900 text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          
          <div className="w-full flex flex-col gap-4">
            {[
              "What are downtime expectations during migration?",
              "What's your rollback plan if something goes wrong?",
              "How does shared responsibility work?",
              "How do you prevent vendor lock-in?",
              "Do you provide audit support?",
              "What about data residency requirements?"
            ].map((question, index) => (
              <div key={index} className="w-full bg-white rounded-lg outline outline-1 outline-zinc-300 p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-sky-900 text-lg font-bold">{question}</h3>
                <svg className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            ))}
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
                  className="w-56 h-14 bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 rounded-xl text-white text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity mt-4"
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
