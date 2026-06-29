"use client";
import React from "react";

// Importing your standalone dynamic sub-modules
import PricingTierGrid from "./pricingtier";
import PricingCalculator from "./pricingcalculator";
import ContactTransformationSection from "../services-solutions/components/contactsection";

export default function PricingPackagesPage() {
  const comparisonRows = [
    { 
      feature: "Compliance", 
      smb: "GDPR-ready", 
      mid: "GDPR + SOC2", 
      enterprise: "Global (HIPAA, PCI DSS, ISO 27001)" 
    },
    { 
      feature: "Support", 
      smb: "Email Support", 
      mid: "Business Hours SLA", 
      enterprise: "24/7 Global SLA, 2-hr Response" 
    },
    { 
      feature: "Scalability", 
      smb: "10–25 users", 
      mid: "50–200 users", 
      enterprise: "Unlimited / Multi-region" 
    },
    { 
      feature: "Branding & Marketing", 
      smb: "Starter Kit", 
      mid: "Advanced Marketing", 
      enterprise: "Co-Branded Campaigns" 
    },
    { 
      feature: "Cloud Infrastructure", 
      smb: "Basic Hosting", 
      mid: "Multi-cloud", 
      enterprise: "Global Hybrid Cloud + Redundancy" 
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* =========================================================
          SECTION 1: HERO CONTAINER
          ========================================================= */}
      <section className="w-full bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 dark:from-gray-950 dark:to-zinc-900 text-white py-16 px-6 sm:px-12 lg:px-[108px] transition-all">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Scale Smarter. Pay<br />Only for What You Need
            </h1>
            <p className="text-white/90 dark:text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8">
              From fast-moving startups to regulated global enterprises, Zoiko Web Services provides transparent, flexible, and scalable pricing aligned to your growth stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#packages" className="inline-flex items-center justify-center h-12 px-6 bg-[#207373] hover:bg-[#207373] text-white font-semibold text-base rounded-lg shadow-sm transition-colors duration-200">
                See Packages
              </a>
              <a href="#contact" className="inline-flex items-center justify-center h-12 px-6 border border-white hover:bg-white/10 text-white font-semibold text-base rounded-lg transition-colors duration-200">
                Get a Custom Quote
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[547px] aspect-[547/320] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                className="w-full h-full object-cover" 
                src="/images/pricing-packages/engineers-wearing-safety-gear-including-hard-hats-2025-03-16-03-21-16-utc 1.png" 
                alt="Pricing and packaging overview illustration" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: CALLING DYNAMIC PRICING TIERS GRID
          ========================================================= */}
      <section id="packages" className="w-full py-16 border-b border-slate-200 dark:border-gray-800">
        <PricingTierGrid />
      </section>

      {/* =========================================================
          SECTION 3: CALLING DYNAMIC PRICING CALCULATOR
          ========================================================= */}
      <section className="w-full">
        <PricingCalculator />
      </section>

      {/* =========================================================
          SECTION 4: COMPARE BUSINESS OUTCOMES TABLE
          ========================================================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-sky-900 dark:text-sky-400">
              Compare Business Outcomes
            </h2>
          </div>

          <div className="w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
            <table className="w-full border-collapse text-left min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-gray-800 text-sky-900 dark:text-white font-semibold border-b border-slate-200 dark:border-gray-700">
                  <th className="p-5 text-base">Feature</th>
                  <th className="p-5 text-base">SMB <span className="block text-xs font-normal text-slate-400">Starter/Growth</span></th>
                  <th className="p-5 text-base">Mid-Market <span className="block text-xs font-normal text-slate-400">Scaling Plans</span></th>
                  <th className="p-5 text-base">Enterprise <span className="block text-xs font-normal text-slate-400">Custom Solutions</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="p-5 text-sky-900 dark:text-sky-400 font-semibold text-sm sm:text-base">{row.feature}</td>
                    <td className="p-5 text-slate-600 dark:text-gray-300 text-sm sm:text-base">{row.smb}</td>
                    <td className="p-5 text-slate-600 dark:text-gray-300 text-sm sm:text-base">{row.mid}</td>
                    <td className="p-5 text-slate-600 dark:text-gray-300 text-sm sm:text-base">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: CORPORATE PROOF & CREDENTIALS
          ========================================================= */}
      <section className="w-full bg-sky-900 dark:bg-gray-950 text-white py-16 px-6 sm:px-12 lg:px-[108px] transition-colors">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center">
            Trusted by Global Enterprises
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mb-14">
            {["AWS", "Microsoft", "Salesforce", "BT Wholesale"].map((brand, i) => (
              <div key={i} className="h-24 bg-white dark:bg-gray-900 rounded-lg border border-slate-200 dark:border-gray-800 flex items-center justify-center p-4 shadow-sm">
                <span className="text-slate-500 dark:text-slate-400 text-base font-semibold">{brand}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-6 tracking-wide text-center">Certifications & Compliance</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14 w-full">
            {["ISO 27001", "SOC 2 Type II", "GDPR", "HIPAA", "PCI DSS"].map((cert, i) => (
              <div key={i} className="h-14 px-6 bg-white dark:bg-gray-900 rounded-lg border border-slate-200 dark:border-gray-800 flex items-center justify-center shadow-sm">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold whitespace-nowrap">{cert}</span>
              </div>
            ))}
          </div>

          <div className="w-full max-w-3xl text-center pt-8 border-t border-white/10">
            <p className="text-white text-lg sm:text-xl font-normal italic leading-relaxed mb-4">
              &ldquo;ZWS reduced our compliance costs by 30% while accelerating global scale.&rdquo;
            </p>
            <span className="text-zinc-300 text-sm sm:text-base font-medium">
              CFO, Mid-Market Financial Services Firm
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: CONVERTING SIGNPOST PANELS
          ========================================================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-[108px]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white mb-10">
            Ready to Get Started?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "SMB", desc: "Quick setup and immediate value", btn: "Start Today" },
              { title: "Mid-Market", desc: "Scaling solutions and strategic guidance", btn: "Book Consultation" },
              { title: "Enterprise", desc: "Custom solutions and executive partnership", btn: "Schedule Strategy Session" },
            ].map((box, i) => (
              <div key={i} className="bg-slate-50 dark:bg-gray-800 rounded-xl p-8 border border-slate-200 dark:border-gray-700 flex flex-col justify-between items-center text-center shadow-sm min-h-[240px]">
                <div>
                  <h3 className="text-slate-800 dark:text-white text-xl font-semibold mb-2">{box.title}</h3>
                  <p className="text-slate-500 dark:text-gray-300 text-sm font-normal mb-6 leading-relaxed max-w-[200px] mx-auto">{box.desc}</p>
                </div>
                <button className="h-11 px-6 bg-[#207373] hover:bg-[#207373] text-white text-sm font-semibold rounded-lg w-full transition-colors duration-200">
                  {box.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: INTAKE CONSULTATION FORM
          ========================================================= */}
      <ContactTransformationSection/>
    </div>
  );
}