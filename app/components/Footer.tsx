"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const footerSections = [
  {
    title: "Services",
    links: [
      "Web & App Development",
      "SaaS Development",
      "Mobile App Development",
      "E-Commerce Development",
      "IT Infrastructure & Cloud",
      "Managed IT Services",
      "Cybersecurity",
      "Branding & Marketing",
      "SEO & AEO",
      "Printing & Signage",
      "Compliance Technology",
      "AI Automation",
    ],
  },
  {
    title: "Industries",
    links: [
      "Telecommunications",
      "Financial Services",
      "Healthcare",
      "Travel & Mobility",
      "Logistics",
      "Media & Entertainment",
      "Retail & E-Commerce",
      "Enterprise SaaS",
      "Professional Services",
      "Public Sector",
      "Nonprofits",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Global Presence",
      "Leadership",
      "Careers",
      "Partners",
      "Newsroom",
      "Sustainability",
      "Investor Relations",
      "Contact",
    ],
  },
  {
    title: "Resources",
    links: [
      "Case Studies",
      "White Papers",
      "Blog",
      "Documentation",
      "APIs",
      "Webinars",
      "Pricing",
      "Help Center",
      "Procurement",
      "Service Levels",
    ],
  },
];

const trustAndSecurity = [
  "Trust Center",
  "Security",
  "Data Protection",
  "Cloud Security",
  "AI Governance",
  "Responsible AI",
  "Compliance",
  "Business Continuity",
  "Incident Response",
  "Vendor Risk",
  "Accessibility",
  "Security Contact",
];

const legalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "Acceptable Use Policy",
  "Data Processing Addendum",
  "Subprocessors",
  "Service Level Agreement",
  "Website Terms",
  "Accessibility Statement",
  "Trademark Notice",
  "Modern Slavery Statement",
  "Anti-Bribery Policy",
  "Regulatory Notices",
];

const complianceBadges = [
  { name: "ISO 27001", style: "bg-indigo-500/10 border border-indigo-500/30 text-violet-400" },
  { name: "SOC 2", style: "bg-indigo-500/10 border border-indigo-500/30 text-violet-400" },
  { name: "PCI DSS", style: "bg-blue-500/10 border border-blue-500/30 text-blue-300" },
  { name: "GDPR", style: "bg-teal-700/10 border border-teal-700/40 text-teal-500" },
  { name: "CCPA / CPRA", style: "bg-teal-700/10 border border-teal-700/40 text-teal-500 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" },
  { name: "HIPAA", style: "bg-orange-400/10 border border-orange-400/30 text-orange-300" },
  { name: "FedRAMP Readiness", style: "bg-orange-400/10 border border-orange-400/30 text-orange-300" },
  { name: "WCAG", style: "bg-lime-600/10 border border-lime-600/30 text-lime-400" },
  { name: "Data Protection", style: "bg-blue-500/10 border border-blue-500/30 text-blue-300" },
  { name: "Vendor Risk", style: "bg-indigo-500/10 border border-indigo-500/30 text-violet-400" },
];

export default function Footer() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <footer className="w-full bg-slate-900 text-white font-['Segoe_UI'] selection:bg-white/10">
      
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full max-w-[1440px] mx-auto">
        
        {/* TOP BRAND BAND */}
        <div className="w-full border-b border-white/5 py-12 px-8 flex flex-col items-center text-center bg-slate-900">
          {/* Main Logo Graphic Frame */}
          <div className="w-64 h-24 mb-6  rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
            <img 
              className="w-56 h-20 object-contain" 
              src="/images/ZoikoDigital_Logo-2048x737.png" 
              alt="Zoiko Digital Logo" 
            />
          </div>
          
          <h3 className="text-slate-50 text-xs font-bold uppercase tracking-wider mb-3">
            AI-Powered Web, Cloud & Compliance Technology
          </h3>

          <p className="max-w-[1127px] text-white/40 text-xs font-normal leading-6">
            Zoiko Web Services (ZWS) is the AI-powered global technology services and digital transformation arm of Zoiko Tech Inc., delivering secure websites, scalable applications, cloud infrastructure, brand systems, compliance technology, managed IT services, and enterprise digital solutions for startups, SMEs, regulated organizations, public sector bodies, and global enterprises.
          </p>
        </div>

        {/* 7-COLUMN NAVIGATION */}
        <div className="border-b border-white/5 bg-slate-900">
          <div className="mx-auto grid grid-cols-7 gap-6 px-10 py-14 max-w-[1421.87px]">
            
            {/* Dynamic Mapped Columns (Services, Industries, Company, Resources) */}
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h4 className="border-b border-white/5 pb-2 text-white/90 text-xs font-black uppercase tracking-wide mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3.5 text-white/80 text-xs font-normal leading-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors block">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Column 5: Trust & Security */}
            <div className="flex flex-col">
              <h4 className="border-b border-white/5 pb-2 text-white/90 text-xs font-black uppercase tracking-wide mb-4">
                Trust & Security
              </h4>
              <ul className="space-y-3.5 text-white/80 text-xs font-normal leading-4">
                {trustAndSecurity.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 6: Legal */}
            <div className="flex flex-col">
              <h4 className="border-b border-white/5 pb-2 text-white/90 text-xs font-black uppercase tracking-wide mb-4">
                Legal
              </h4>
              <ul className="space-y-3.5 text-white/80 text-xs font-normal leading-4">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 7: Global Offices */}
            <div className="flex flex-col">
              <h4 className="border-b border-white/5 pb-2 text-white/90 text-xs font-black uppercase tracking-wide mb-4">
                Global Offices
              </h4>
              <div className="space-y-6 text-xs font-normal leading-5">
                <div>
                  <div className="flex items-center gap-1.5 text-white/70 font-semibold mb-1">
                    <span>Global HQ — USA</span>
                  </div>
                  <p className="text-white/40 pl-4">
                    Zoiko Tech Inc.<br />
                    1401 21st Street, Suite R<br />
                    Sacramento, CA 95811<br />
                    United States
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-white/70 font-semibold mb-1">
                    <span>European HQ — UK</span>
                  </div>
                  <p className="text-white/40 pl-4">
                    Zoiko Tech Inc.<br />
                    167–169 Great Portland Street<br />
                    5th Floor<br />
                    London W1W 5PF<br />
                    United Kingdom
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 cursor-pointer group">
                  <span className="text-indigo-500 font-bold group-hover:text-indigo-400 transition-colors">
                    View Global Presence
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECURITY & COMPLIANCE STRIP */}
        <div className="border-b border-white/5 bg-slate-950 py-7 px-8">
          <div className="mx-auto max-w-[1421.87px] flex flex-col items-center text-center">
            <h4 className="text-white text-[10px] font-black uppercase tracking-wide mb-1">
              Security & Compliance
            </h4>
            <p className="text-white text-[10px] font-normal leading-4 opacity-70 mb-5 max-w-2xl">
              Framework alignment indicators. Do not construe as certified or attested unless formally confirmed.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {complianceBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`px-3 py-1 text-xs font-bold tracking-tight rounded-md ${badge.style}`}
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="bg-gray-950 py-8 px-8 text-center border-t border-white/5">
          <p className="text-white text-xs font-normal">
            © 2026 <span className="font-bold">Zoiko Web Services</span> · ZWS is a trading name of Zoiko Tech Inc. · All rights reserved.
          </p>
          <p className="mx-auto mt-4 max-w-[950.67px] text-white text-xs font-normal leading-5">
            Zoiko Web Services provides AI-powered web development, SaaS development, cloud infrastructure, managed IT services, cybersecurity, branding, marketing, printing, signage, compliance technology, and digital transformation services worldwide.
          </p>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block md:hidden bg-slate-900 px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-44 h-16 mb-5 bg-white rounded-lg overflow-hidden flex items-center justify-center shadow-md">
            <img className="w-36 h-12 object-contain" src="/images/ZoikoDigital_Logo-2048x737.png" alt="Logo" />
          </div>

          <p className="text-xs leading-6 text-slate-300 max-w-md">
            Zoiko Web Services (ZWS) is the AI-powered global transformation engine — delivering scalable web, cloud, compliance, and creative solutions across governments, enterprises, and startups in 20+ countries worldwide.
          </p>

          <h4 className="mt-6 mb-3 text-xs font-semibold tracking-wider uppercase text-white/80">
            Connect with us
          </h4>

          <div className="flex gap-3 mb-8">
            {[FaLinkedin, FaYoutube, FaInstagram, FaFacebook].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Icon size={16} className="text-white/80" />
              </a>
            ))}
          </div>
        </div>

        {/* Collapsible Section Accordions */}
        <div className="space-y-1 border-t border-white/5 pt-4">
          {[
            ...footerSections,
            { title: "Trust & Security", links: trustAndSecurity },
            { title: "Legal", links: legalLinks }
          ].map((section) => {
            const isOpen = !!openSections[section.title];
            return (
              <div key={section.title} className="border-b border-white/5 py-3">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-sm font-bold uppercase tracking-wider text-white/90">
                    {section.title}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-white/60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                
                {isOpen && (
                  <ul className="mt-3 pl-2 space-y-2 text-xs text-slate-400 border-l border-white/10 transition-all">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="hover:text-white py-1 block">{link}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Compliance Section Mobile */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <h4 className="mb-3 text-[10px] font-black uppercase tracking-wide text-white">
            Security & Compliance
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {complianceBadges.map((badge) => (
              <span
                key={badge.name}
                className={`px-2.5 py-1 text-[11px] font-bold rounded ${badge.style}`}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>

        {/* Legal bar bottom Mobile */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-white/40 space-y-3">
          <p>© 2026 <strong>Zoiko Web Services</strong></p>
          <p className="text-[11px] px-4 leading-5">
            ZWS is a trading name for Zoiko Tech Inc. All rights reserved. Global digital transformation technologies, web deployment, security framework alignment structures.
          </p>
        </div>
      </div>
    </footer>
  );
}