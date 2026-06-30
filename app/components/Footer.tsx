"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { label: "Web & App Development", href: "/web-app-development" },
      { label: "IT Infrastructure & Cloud", href: "/it-infrastructure" },
      { label: "Branding & Marketing", href: "/branding-and-marketing" },
      { label: "Printing & Signage", href: "/printing-signage" },
      { label: "Compliance & Regulatory Technology", href: "/compliance-technology" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Telecommunications", href: "/telecommunication" },
      { label: "Financial Services & Fintech", href: "/financial-services-fintech" },
      { label: "Healthcare & Life Sciences", href: "/healthcare-life-science" },
      { label: "Travel & Mobility", href: "/travel-mobility" },
      { label: "Media & Entertainment", href: "/media-entertainment" },
      { label: "SMEs & Enterprise SaaS", href: "/enterprise-saas" },
      { label: "Government & Public Sector", href: "/government-public-sector" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Global Presence", href: "/company/global-presence" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/carrers" },
      { label: "News & Media", href: "/news-and-media" },
      { label: "Partners & Affiliations", href: "/partners" },
      { label: "Sustainability & ESG", href: "/sustainability" },
      { label: "Investor Relations", href: "/investor-relations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies & Clients", href: "/case-studies" },
      { label: "Whitepapers & Reports", href: "/white-paper" },
      { label: "Technical Docs & APIs", href: "/Technical-docs" },
      { label: "Webinars & Events", href: "/Webinar-and-digital" },
      { label: "Pricing & Packages", href: "/pricing-packages" },
      { label: "Help & Support", href: "/help-support" },
      { label: "Trust & Security", href: "/trust-center" },
    ],
  },
];

const complianceBadges = [
  { name: "ISO 27001" },
  { name: "SOC 2" },
  { name: "PCI DSS" },
  { name: "GDPR" },
  { name: "CCPA/CPRA" },
  { name: "HIPAA" },
  { name: "FedRAMP" },
];

const bottomLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <footer className="w-full bg-indigo-950 text-slate-400 font-sans selection:bg-white/10">
      
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block w-full max-w-[1440px] mx-auto px-[108px] pt-16 pb-12">
        
        {/* TOP LAYER: Logo, Description, Social Media */}
        <div className="grid grid-cols-12 gap-8 pb-12 items-start">
          {/* Logo */}
          <div className="col-span-4 max-w-[288px] h-28 bg-white rounded-lg flex items-center justify-center overflow-hidden p-4 shadow-md">
            <img
              className="w-full h-full object-contain"
              src="/images/ZoikoDigital_Logo-2048x737.png"
              alt="Zoiko Digital Logo"
            />
          </div>

          {/* Description Paragraph */}
          <div className="col-span-5 text-slate-400 text-base font-normal leading-7 pt-1">
            Zoiko Digital is the AI-powered global transformation engine — delivering scalable web, cloud, compliance, and creative solutions across governments, enterprises, and startups in 20+ countries worldwide.
          </div>

          {/* Connect Component */}
          <div className="col-span-3 flex flex-col items-end">
            <h4 className="text-slate-200 text-lg font-semibold leading-7 mb-4">
              Connect with us on social media
            </h4>
            <div className="flex gap-3.5">
              {[
                { Icon: FaLinkedin, href: "https://linkedin.com" },
                { Icon: FaTwitter, href: "https://twitter.com" },
                { Icon: FaYoutube, href: "https://youtube.com" },
                { Icon: FaInstagram, href: "https://instagram.com" },
                { Icon: FaFacebook, href: "https://facebook.com" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-slate-400 border border-slate-700 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE LAYER: 4-Column Dynamic Link Matrix */}
        <div className="grid grid-cols-4 gap-6 py-12 border-b border-slate-700">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="text-slate-200 text-lg font-semibold leading-7 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-base font-normal hover:text-slate-200 transition-colors block leading-6"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* LOWER LAYER: Certifications & Compliance Strip */}
        <div className="py-4 border-b border-slate-700 text-center relative">
          <h4 className="text-slate-200 text-lg font-semibold leading-3 mb-6">
            Certifications & Compliance
          </h4>
          <div className="flex flex-wrap   gap-6">
            {complianceBadges.map((badge) => (
              <div
                key={badge.name}
                className="w-30 h-14 flex items-center justify-center bg-white/5 border border-slate-700 rounded-lg text-slate-200 text-sm font-semibold tracking-wide"
              >
                {badge.name}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM LAYER: Legal Bar & Copyright */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-center text-sm font-normal text-slate-400 gap-4">
          <div>
            © 2026 Zoiko Digital. Zoiko Digital is a trading name for Zoiko Tech Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {bottomLegalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-slate-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block md:hidden px-6 py-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-52 h-20 mb-6 bg-white rounded-lg flex items-center justify-center p-3 shadow-md">
            <img className="w-full h-full object-contain" src="/images/ZoikoDigital_Logo-2048x737.png" alt="Logo" />
          </div>

          <p className="text-sm leading-6 text-slate-400 max-w-md mb-6">
            Zoiko Digital is the AI-powered global transformation engine — delivering scalable web, cloud, compliance, and creative solutions across governments, enterprises, and startups in 20+ countries worldwide.
          </p>

          <h4 className="text-slate-200 text-base font-semibold mb-3">
            Connect with us on social media
          </h4>

          <div className="flex gap-3 mb-8">
            {[
              { Icon: FaLinkedin, href: "https://linkedin.com" },
              { Icon: FaTwitter, href: "https://twitter.com" },
              { Icon: FaYoutube, href: "https://youtube.com" },
              { Icon: FaInstagram, href: "https://instagram.com" },
              { Icon: FaFacebook, href: "https://facebook.com" },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-slate-700 text-slate-400"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Accordions */}
        <div className="border-t border-slate-800 space-y-1 pt-4">
          {footerSections.map((section) => {
            const isOpen = !!openSections[section.title];
            return (
              <div key={section.title} className="border-b border-slate-800 py-3">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-sm font-semibold text-slate-200 tracking-wide">
                    {section.title}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <ul className="mt-3 pl-3 space-y-2 text-xs border-l border-slate-700">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-slate-400 hover:text-white py-1 block">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Compliance badges */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center">
          <h4 className="text-slate-200 text-sm font-semibold mb-4">
            Certifications & Compliance
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {complianceBadges.map((badge) => (
              <span
                key={badge.name}
                className="px-3 py-2 text-xs font-medium rounded-md bg-white/5 border border-slate-700 text-slate-300"
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Bottom Footer details */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 space-y-4">
          <p>© 2026 Zoiko Digital. Zoiko Digital is a trading name for Zoiko Tech Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 font-medium text-slate-400">
            {bottomLegalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}