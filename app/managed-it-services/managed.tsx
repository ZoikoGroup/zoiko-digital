import React from 'react';

export default function ManagedITServicesPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-50 antialiased text-zinc-700 selection:bg-emerald-200 lg:selection:bg-fuchsia-200">
      
      {/* 1. BREADCRUMBS & BADGE */}
      <div className="max-w-7xl mx-auto px-6 pt-8 lg:hidden space-y-3">
        <div className="text-gray-600 text-xs font-normal">
          Home › Solutions › <span className="text-zinc-900 font-semibold">Managed IT</span>
        </div>
        <div className="inline-block bg-emerald-100 rounded-full px-4 py-1.5">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest block">Topic overview</span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-12 lg:pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Block */}
        <div className="lg:col-span-6 space-y-6">
          <h1 className="text-zinc-900 text-4xl lg:text-6xl font-black leading-tight tracking-tight">
            Managed IT<br />services,<br />explained.
          </h1>
          <p className="text-gray-600 text-xl font-normal leading-8 max-w-xl">
            What it means to hand day-to-day IT — monitoring, helpdesk, security, and backups — to a managed provider, and why organizations choose to.
          </p>
        </div>
        
        {/* Right Hero Graphic Asset Area */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="text-center z-10">
            {/* Mobile Image */}
            <img
              className="block lg:hidden"
              src="/images/managed-it-service/managed-mobile.png"
              alt="Mobile Hero"
            />
            {/* Desktop Image */}
            <img
              className="hidden lg:block"
              src="/images/managed-it-service/managed-desktop.png"
              alt="Desktop Hero"
            />
          </div>
        </div>
      </section>

      {/* 3. PROSE NARRATIVE & QUOTE BLOCK */}
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <p className="text-zinc-700 text-lg md:text-xl font-normal leading-8">
          Almost every organization now runs on technology — laptops, servers, cloud apps, networks, and the data flowing through them. Managed IT services is the practice of handing the day-to-day care of all that to a specialist provider, so it stays secure, up to date, and running.
        </p>
        <p className="text-zinc-700 text-base font-normal leading-7">
          That provider is usually called an <strong className="text-zinc-900 font-bold">MSP</strong> (managed service provider). Instead of fixing things only when they break, an MSP proactively monitors systems, applies updates, supports users, and backs up data — typically for a predictable monthly fee rather than unpredictable repair bills.
        </p>
        
        {/* Bordered Callout Quote */}
        <div className="border-l-[3px] border-emerald-500 lg:border-fuchsia-700 pl-6 py-2 my-10">
          <blockquote className="text-zinc-900 text-xl font-semibold leading-8">
            The goal of managed IT isn't to fix more problems faster — it's to quietly prevent most of them from happening at all.
          </blockquote>
        </div>
      </section>

      {/* 4. SECTOR BY THE NUMBERS */}
      <section className="max-w-3xl mx-auto px-6 py-10 space-y-10">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">The picture by the numbers</h2>
          <p className="text-zinc-700 text-base font-normal">
            A few figures that show why organizations outsource IT. <span className="text-gray-400 font-light">(Illustrative figures for context.)</span>
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-b from-white to-neutral-50 p-6 rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
            <div className="text-emerald-500 lg:text-fuchsia-700 text-4xl font-black">$5,600</div>
            <div className="mt-4 text-zinc-700 text-base font-normal leading-6">Frequently cited cost of a single minute of IT downtime</div>
            <div className="absolute -right-6 -top-6 w-28 h-28 opacity-10 rounded-[55px] bg-emerald-500 lg:bg-fuchsia-700"></div>
          </div>
          {/* Card 2 */}
          <div className="relative bg-gradient-to-b from-white to-neutral-50 p-6 rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
            <div className="text-emerald-500 lg:text-fuchsia-700 text-4xl font-black">60%+</div>
            <div className="mt-4 text-zinc-700 text-base font-normal leading-6">Of smaller organizations rely on a managed provider</div>
            <div className="absolute -right-6 -top-6 w-28 h-28 opacity-10 rounded-[55px] bg-emerald-500 lg:bg-fuchsia-700"></div>
          </div>
          {/* Card 3 */}
          <div className="relative bg-gradient-to-b from-white to-neutral-50 p-6 rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
            <div className="text-emerald-500 lg:text-fuchsia-700 text-4xl font-black">24/7</div>
            <div className="mt-4 text-zinc-700 text-base font-normal leading-6">Monitoring is now the baseline expectation</div>
            <div className="absolute -right-6 -top-6 w-28 h-28 opacity-10 rounded-[55px] bg-emerald-500 lg:bg-fuchsia-700"></div>
          </div>
        </div>
        <p className="text-gray-500 text-xs max-w-xl leading-relaxed">
          Figures are illustrative and provided for general context, not sourced from a specific report.
        </p>
      </section>

      {/* 5. WHY IT IS HARD TO RUN ALONE */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">Why IT is hard to run alone</h2>
          <p className="text-zinc-700 text-base max-w-2xl leading-relaxed mt-3">
            Running IT well in-house is demanding — it needs round-the-clock attention, broad expertise, and constant vigilance against threats.
          </p>
        </div>

        {/* Constraints 2x2 Feature Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-emerald-500 lg:bg-fuchsia-700 rounded-xl flex items-center justify-center text-white text-lg font-bold">
              <img
              src="/images/managed-it-service/SVG.png"
              alt="icon"
              ></img>
            </div>
            <h3 className="text-zinc-900 text-base font-bold">Round-the-clock demands</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">Systems run all day and night, but most teams can't realistically staff or monitor 24/7.</p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-emerald-500 lg:bg-fuchsia-700 rounded-xl flex items-center justify-center text-white text-lg font-bold">
              <img
              src="/images/non-profit/Frame (2).png"
              alt="icon"
              ></img>
            </div>
            <h3 className="text-zinc-900 text-base font-bold">Constant security threats</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">Phishing, ransomware, and unpatched software are relentless and evolving.</p>
          </div>

          {/* Block 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-emerald-500 lg:bg-fuchsia-700 rounded-xl flex items-center justify-center text-white text-lg font-bold">
              <img
              src="/images/non-profit/Frame (1).png"
              alt="icon"
              ></img>
            </div>
            <h3 className="text-zinc-900 text-base font-bold">Talent & coverage</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">Hiring and retaining broad IT expertise is costly, and small teams get stretched thin.</p>
          </div>

          {/* Block 4 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-emerald-500 lg:bg-fuchsia-700 rounded-xl flex items-center justify-center text-white text-lg font-bold">
              <img
              src="/images/non-profit/Frame (3).png"
              alt="icon"
              ></img>
            </div>
            <h3 className="text-zinc-900 text-base font-bold">Unpredictable costs</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">"Fix it when it breaks" leads to surprise bills and downtime at the worst moments.</p>
          </div>
        </div>
      </section>

      {/* 6. HOW MANAGED IT WORKS (PIPELINE) */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
  <div className="space-y-2">
    <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">How managed IT works</h2>
    <p className="text-zinc-700 text-base max-w-3xl leading-relaxed">
      A managed provider follows a continuous cycle — get to know your environment, watch it constantly, support and maintain it, and keep improving it over time.
    </p>
  </div>

  {/* Pipeline Wrapper */}
  <div className="bg-gradient-to-b from-white to-emerald-50 lg:to-fuchsia-50 rounded-[20px] border border-gray-200 shadow-sm p-6 md:p-8 space-y-8">
    <div className="flex flex-row justify-between items-center relative">
      
      {/* Step 1: Onboard (User Profile) */}
      <div className="text-center space-y-2 relative flex-1">
        <div className="w-14 h-14 bg-white border border-emerald-500 lg:border-fuchsia-700 rounded-full mx-auto flex items-center justify-center shadow-sm text-emerald-500 lg:text-fuchsia-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h4 className="text-zinc-900 text-sm font-bold">Onboard</h4>
        <p className="text-gray-600 text-xs">assess & map</p>
      </div>

      <div className="flex-1 border-t-2 border-dashed border-emerald-500 lg:border-fuchsia-700 md:mb-12 mb-16"></div>

      {/* Step 2: Monitor (Pulse / Activity Line) */}
      <div className="text-center space-y-2 relative flex-1">
        <div className="w-14 h-14 bg-white border border-emerald-500 lg:border-fuchsia-700 rounded-full mx-auto flex items-center justify-center shadow-sm text-emerald-500 lg:text-fuchsia-700">
         <img className="w-6 h-6 md:block hidden "
                src="/images/managed-it-service/Vector.svg"
                alt="icon"
          />
          <img className="w-6 h-6 md:hidden block"
                src="/images/managed-it-service/Vector (1).svg"
                alt="icon"
          />
        </div>
        <h4 className="text-zinc-900 text-sm font-bold">Monitor</h4>
        <p className="text-gray-600 text-xs">24/7 watch</p>
      </div>

      <div className="flex-1 border-t-2 border-dashed border-emerald-500 lg:border-fuchsia-700 md:mb-12 mb-16"></div>

      {/* Step 3: Support (Headset) */}
      <div className="text-center space-y-2 relative flex-1">
        <div className="w-14 h-14 bg-white border border-emerald-500 lg:border-fuchsia-700 rounded-full mx-auto flex items-center justify-center shadow-sm text-emerald-500 lg:text-fuchsia-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M4 16h2a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1zm14 0h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 011-1z" />
          </svg>
        </div>
        <h4 className="text-zinc-900 text-sm font-bold">Support</h4>
        <p className="text-gray-600 text-xs">helpdesk & fix</p>
      </div>

      <div className="flex-1 border-t-2 border-dashed border-emerald-500 lg:border-fuchsia-700 md:mb-12 mb-16"></div>

      {/* Step 4: Improve (Trending Growth Line) */}
      <div className="text-center space-y-2 relative flex-1">
        <div className="w-14 h-14 bg-white border border-emerald-500 lg:border-fuchsia-700 rounded-full mx-auto flex items-center justify-center shadow-sm text-emerald-500 lg:text-fuchsia-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h4 className="text-zinc-900 text-sm font-bold">Improve</h4>
        <p className="text-gray-600 text-xs">review & plan</p>
      </div>
      
    </div>

    <div className="text-center text-gray-600 text-xs pt-4 border-t border-emerald-100 lg:border-fuchsia-100">
      The managed IT lifecycle — a continuous loop of monitoring, support, and improvement.
    </div>
  </div>

  <p className="text-zinc-700 text-base leading-relaxed">
    Five capabilities make up most managed IT engagements: <strong className="text-zinc-900 font-bold">proactive monitoring</strong> (catching issues early), <strong className="text-zinc-900 font-bold">helpdesk support</strong> (helping users), <strong className="text-zinc-900 font-bold">patching & maintenance</strong> (keeping software current), <strong className="text-zinc-900 font-bold">backup & recovery</strong> (protecting data), and <strong className="text-zinc-900 font-bold">security</strong> (defending against threats).
  </p>
</section>

      {/* 7. KEY BUILDING BLOCKS */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">Key building blocks</h2>
          <p className="text-zinc-700 text-base">The terms you'll hear most often when people talk about managed IT:</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm divide-y divide-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">MSP — Managed Service Provider</h3>
            <p className="text-zinc-700 text-base leading-relaxed">The company that takes responsibility for monitoring, maintaining, and supporting your IT, usually for a recurring fee.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">SLA — Service Level Agreement</h3>
            <p className="text-zinc-700 text-base leading-relaxed">The contract that defines what's covered and the promised standards — for example, response times and uptime targets.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">RMM — Remote Monitoring & Management</h3>
            <p className="text-zinc-700 text-base leading-relaxed">The tooling an MSP uses to watch devices, push updates, and fix issues remotely.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Helpdesk & tiers</h3>
            <p className="text-zinc-700 text-base leading-relaxed">The support function, often organized in tiers — Tier 1 handles common requests; higher tiers handle complex problems.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Patch management</h3>
            <p className="text-zinc-700 text-base leading-relaxed">Scheduling and applying software updates to close security gaps and keep systems stable.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Backup & DR</h3>
            <p className="text-zinc-700 text-base leading-relaxed">Backup keeps copies of your data; disaster recovery (DR) is the plan to restore systems quickly after an outage.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Co-managed IT</h3>
            <p className="text-zinc-700 text-base leading-relaxed">A shared model where an MSP works alongside your internal IT team rather than replacing it.</p>
          </div>
        </div>
      </section>

      {/* 8. WHERE IT'S HEADING */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">Where it's heading</h2>
          <p className="text-zinc-700 text-base">A few shifts shaping the next chapter of managed IT:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-5 h-5 bg-emerald-500 lg:bg-fuchsia-700 rounded-full shrink-0 mt-1"></div>
            <div>
              <h3 className="text-zinc-900 text-base font-bold mb-2">Cloud-first management</h3>
              <p className="text-zinc-700 text-base leading-relaxed">As workloads move to the cloud, MSPs increasingly manage cloud estates and SaaS, not just on-site hardware.</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-5 h-5 bg-emerald-500 lg:bg-fuchsia-700 rounded-full shrink-0 mt-1"></div>
            <div>
              <h3 className="text-zinc-900 text-base font-bold mb-2">Security convergence</h3>
              <p className="text-zinc-700 text-base leading-relaxed">Managed IT and managed security are merging, with providers offering deeper threat detection and response.</p>
            </div>
          </div>
          {/* Box 3 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-5 h-5 bg-emerald-500 lg:bg-fuchsia-700 rounded-full shrink-0 mt-1"></div>
            <div>
              <h3 className="text-zinc-900 text-base font-bold mb-2">Automation & AIOps</h3>
              <p className="text-zinc-700 text-base leading-relaxed">Automation and AI handle routine fixes and surface issues before they cause downtime.</p>
            </div>
          </div>
          {/* Box 4 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-5 h-5 bg-emerald-500 lg:bg-fuchsia-700 rounded-full shrink-0 mt-1"></div>
            <div>
              <h3 className="text-zinc-900 text-base font-bold mb-2">Remote & hybrid support</h3>
              <p className="text-zinc-700 text-base leading-relaxed">Supporting distributed teams and devices anywhere is now a core part of the job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">Frequently asked questions</h2>
        
        <div className="space-y-4">
          {[
            'What exactly is an MSP?', 
            'What\'s the difference between managed and "break-fix" IT?', 
            'What is co-managed IT?', 
            'What does an SLA cover?'
          ].map((q, i) => (
            <div key={i} className="bg-white px-6 py-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-gray-300 transition-colors">
              <span className="text-zinc-900 text-base font-bold">{q}</span>
              <span className="text-emerald-500 lg:text-fuchsia-700 text-2xl font-light leading-none">+</span>
            </div>
          ))}
        </div>
        <div className="bg-[#041E16] text-white p-8 rounded-2xl shadow-sm space-y-6 mt-8">
    <div className="space-y-2">
      <h3 className="text-white text-xs font-bold uppercase tracking-widest">
        Explore related
      </h3>
      <p className="text-[#FFFFFFB8] text-base font-medium">
        Want to go deeper, or talk through IT support for your organization?
      </p>
    </div>

    {/* Inline Links/Badges Row */}
    <div className="flex flex-wrap gap-3 pt-2">
      {[
        "Cybersecurity",
        "Service levels & SLAs",
        "Trust Center",
        "Contact us"
      ].map((label, index) => (
        <a
          key={index}
          href="#"
          className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/10 transition-colors"
        >
          {label}
          <span className="text-zinc-400 font-light text-xs">→</span>
        </a>
      ))}
    </div>
  </div>
      </section>

    </div>
  );
}