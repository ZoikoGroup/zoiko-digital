"use client";

import React from "react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-sky-900 dark:text-gray-100 transition-colors duration-300">
      
     

      {/* ================= HERO BANNER ================= */}
      <section className="w-full bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Cookie Policy
          </h1>
        </div>
      </section>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Section 1: Introduction */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">1. Introduction</h2>
          </div>
          <div className="space-y-3 text-base leading-relaxed text-sky-900/90 dark:text-gray-300 pl-1">
            <p>
              This Cookie Policy explains how Zoiko Digital (&quot;ZOIKO DIGITAL&quot;) uses cookies, pixels, and similar technologies across websites, apps, and platforms.
            </p>
            <p>
              It complies with <span className="text-teal-700 dark:text-teal-400 font-semibold">GDPR (EU/UK), CCPA/CPRA (California), PIPEDA (Canada), NDPR (Nigeria), POPIA (South Africa), and other global privacy laws</span>.
            </p>
            <p>
              This policy should be read with our <span className="text-teal-700 dark:text-teal-400 font-semibold hover:underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </section>

        {/* Section 2: What Are Cookies */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">2. What Are Cookies?</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-sky-900/90 dark:text-gray-300 pl-1">
            <p>
              <span className="text-teal-700 dark:text-teal-400 font-semibold">Cookies</span> are small files placed on your device to enable features, security, and performance.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-teal-700 dark:text-teal-400">Similar technologies include:</p>
              <ul className="list-none space-y-2 pl-4 border-l-2 border-slate-200 dark:border-gray-700">
                <li><span className="font-medium text-teal-700 dark:text-teal-400">Web Beacons / Pixels</span> — track engagement.</li>
                <li><span className="font-medium text-teal-700 dark:text-teal-400">Local Storage</span> — store settings in your browser.</li>
                <li><span className="font-medium text-teal-700 dark:text-teal-400">SDKs</span> — track app usage.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Types of Cookies Matrix */}
        <section className="space-y-6">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">3. Types of Cookies We Use</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-[0px_4px_20px_rgba(144,80,159,0.06)] border border-teal-700/30 dark:border-gray-700 flex flex-col justify-between">
              <h3 className="text-base sm:text-lg font-semibold text-teal-700 dark:text-teal-400 mb-4">1. Strictly Necessary Cookies</h3>
              <ul className="space-y-2 text-sm text-sky-900/90 dark:text-gray-300 list-disc pl-4">
                <li>Essential for security, logins, and transactions.</li>
                <li>Cannot be switched off in our systems.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-[0px_4px_20px_rgba(144,80,159,0.06)] border border-teal-700/30 dark:border-gray-700 flex flex-col justify-between">
              <h3 className="text-base sm:text-lg font-semibold text-teal-700 dark:text-teal-400 mb-4">2. Performance & Analytics</h3>
              <ul className="space-y-2 text-sm text-sky-900/90 dark:text-gray-300 list-disc pl-4">
                <li>Collect anonymized metrics (page visits, error tracking).</li>
                <li>Improve performance and reliability.</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-[0px_4px_20px_rgba(144,80,159,0.06)] border border-teal-700/30 dark:border-gray-700 flex flex-col justify-between">
              <h3 className="text-base sm:text-lg font-semibold text-teal-700 dark:text-teal-400 mb-4">3. Functional Cookies</h3>
              <ul className="space-y-2 text-sm text-sky-900/90 dark:text-gray-300 list-disc pl-4">
                <li>Remember preferences (language, region, login details).</li>
                <li>Provide personalization.</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-[0px_4px_20px_rgba(144,80,159,0.06)] border border-teal-700/30 dark:border-gray-700 flex flex-col justify-between">
              <h3 className="text-base sm:text-lg font-semibold text-teal-700 dark:text-teal-400 mb-4">4. Advertising & Targeting</h3>
              <ul className="space-y-2 text-sm text-sky-900/90 dark:text-gray-300 list-disc pl-4">
                <li>Deliver relevant advertising and measure effectiveness.</li>
                <li>May be set by ZOIKO DIGITAL or trusted partners (only with consent).</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Section 4: Legal Basis Callout */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">4. Legal Basis for Cookie Use</h2>
          </div>
          <div className="w-full bg-gradient-to-br from-fuchsia-700/5 to-sky-900/5 dark:from-gray-800 dark:to-gray-800/50 p-6 sm:p-8 rounded-xl border border-slate-100 dark:border-gray-800">
            <ul className="space-y-4 text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300">
              <li><strong className="text-teal-700 dark:text-teal-400">EU/UK (GDPR & ePrivacy Directive):</strong> Consent is required for non-essential cookies.</li>
              <li><strong className="text-teal-700 dark:text-teal-400">California (CCPA/CPRA):</strong> Cookies may be considered &quot;personal information.&quot; Users have opt-out rights.</li>
              <li><strong className="text-teal-700 dark:text-teal-400">Canada (PIPEDA):</strong> Consent required, except where obvious (essential cookies).</li>
              <li><strong className="text-teal-700 dark:text-teal-400">Nigeria (NDPR) & South Africa (POPIA):</strong> Explicit consent required for tracking cookies.</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Preference Management */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">5. Managing Your Cookie Preferences</h2>
          </div>
          <div className="space-y-6 pl-1 text-sm sm:text-base leading-relaxed text-sky-900/95 dark:text-gray-300">
            <div className="space-y-2">
              <h4 className="font-bold text-teal-700 dark:text-teal-400">EU/UK (GDPR):</h4>
              <p className="pl-4 border-l-2 border-slate-200 dark:border-gray-800">Consent banner shown at first visit. Options: &quot;Accept All&quot;, &quot;Reject All&quot;, &quot;Customize Settings.&quot; Consent can be withdrawn anytime via the <span className="text-teal-700 dark:text-teal-400 font-semibold underline cursor-pointer">Cookie Settings Center</span>.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-teal-700 dark:text-teal-400">California (CCPA/CPRA):</h4>
              <p className="pl-4 border-l-2 border-slate-200 dark:border-gray-800">Dedicated link: <span className="text-teal-700 dark:text-teal-400 font-semibold underline cursor-pointer">[Do Not Sell or Share My Personal Information]</span>. ZOIKO DIGITAL honors opt-out signals including <span className="text-teal-700 dark:text-teal-400 font-semibold">Global Privacy Control (GPC)</span>.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-teal-700 dark:text-teal-400">Canada (PIPEDA):</h4>
              <p className="pl-4 border-l-2 border-slate-200 dark:border-gray-800">Users may manage preferences via browser or banner.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-teal-700 dark:text-teal-400">Africa (NDPR/POPIA):</h4>
              <p className="pl-4 border-l-2 border-slate-200 dark:border-gray-800">Explicit opt-in required for advertising and tracking cookies.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-teal-700 dark:text-teal-400">General Browser Controls:</h4>
              <p className="pl-4 border-l-2 border-slate-200 dark:border-gray-800">Users can delete or block cookies via browser settings.</p>
            </div>
          </div>
        </section>

        {/* Section 6 & 7 & 8 Row Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-sky-900 dark:text-white border-b border-slate-200 dark:border-gray-800 pb-1">6. Third-Party Cookies</h3>
            <p className="text-sm leading-relaxed text-sky-900/80 dark:text-gray-300">Some cookies are set by trusted partners (analytics, ad-tech, social media). ZOIKO DIGITAL requires all partners to comply with data protection laws.</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-sky-900 dark:text-white border-b border-slate-200 dark:border-gray-800 pb-1">7. Data Retention</h3>
            <p className="text-sm leading-relaxed text-sky-900/80 dark:text-gray-300"><strong className="text-teal-700 dark:text-teal-400">Session Cookies:</strong> Expire when the browser closes.<br/><strong className="text-teal-700 dark:text-teal-400">Persistent Cookies:</strong> Retained for up to 13 months (EU GDPR standard).</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-sky-900 dark:text-white border-b border-slate-200 dark:border-gray-800 pb-1">8. Policy Updates</h3>
            <p className="text-sm leading-relaxed text-sky-900/80 dark:text-gray-300">ZOIKO DIGITAL may update this Cookie Policy periodically. Material changes will be communicated through cookie banners or service announcements.</p>
          </section>
        </div>

        {/* Section 9: Contact Banner */}
        <section className="w-full bg-sky-900 dark:bg-gray-800 text-white rounded-xl p-6 sm:p-8 space-y-6 shadow-md">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">9. Contact Our Privacy Office</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
            <div className="space-y-2">
              <p><strong>General inquiries:</strong> privacy@zoikoweb.com</p>
              <p><strong>Data Protection Officer:</strong> dpo@zoikoweb.com</p>
              <p><strong>Head Office:</strong> Zoiko Digital, Sacramento, California, USA</p>
            </div>
            <div className="space-y-2 sm:border-l sm:border-white/20 sm:pl-6">
              <p className="font-bold text-teal-400">Regional Contacts:</p>
              <p><strong>EU/UK:</strong> privacy.eu@zoikoweb.com</p>
              <p><strong>Africa:</strong> privacy.africa@zoikoweb.com</p>
              <p><strong>Canada/US:</strong> privacy.us@zoikoweb.com</p>
            </div>
          </div>
        </section>

      </main>

    

    </div>
  );
}