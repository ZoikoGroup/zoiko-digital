import React from 'react';

export default function CybersecurityPage() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-50 overflow-x-hidden ">
      
      {/* 2. HERO HEADER SECTION */}
      <header className="w-full max-w-7xl mx-auto px-4 md:px-28 pt-16 md:pt-24 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
         <img className="w-full h-full object-cover md:hidden block" src="/images/cybersecurity/cyber-hero-mobile.jpg" alt="Security Illustration" />

          <div className="bg-violet-100 px-4 py-1.5 rounded-full">
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider block">
              Cybersecurity
            </span>
          </div>
          <h1 className="text-zinc-900 text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Defend what <br/>you've built.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
            Assessments, testing, monitoring, and incident response — a complete program to find risks, fix them, and respond fast when it counts.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Responsive Color Appended Here */}
            <button className="bg-indigo-600 md:bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold text-base px-6 h-14 rounded-xl shadow-md transition">
              Talk to security
            </button>
            <button className="text-zinc-900 font-bold text-base px-6 h-14 rounded-xl border border-gray-200 hover:bg-slate-50 transition">
              Visit Trust Center
            </button>
          </div>
        </div>
        
        {/* Mockup / Image Column */}
        <div className="lg:col-span-5  md:block hidden w-full h-[384px] bg-linear-51 from-indigo-500 to-cyan-400 rounded-[20px] shadow-xl overflow-hidden relative">
          <img className="w-full h-full object-cover md:block hidden" src="/images/cybersecurity/cybersection-desktop.jpg" alt="Security Illustration" />
        </div>
      </header>

      {/* 3. KEY STATS SUB-BAR */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-28 mb-24">
        <div className="w-full bg-white rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 shadow-xl border border-slate-100 overflow-hidden">
          {/* Responsive Text Colors Appended to Stats Titles */}
          <div className="p-6 text-center">
            <div className="text-[#6D51F4] md:text-fuchsia-700 text-3xl font-black mb-1">24/7</div>
            <div className="text-gray-600 text-sm font-semibold">SOC monitoring</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-[#6D51F4] md:text-fuchsia-700 text-3xl font-black mb-1">&lt;1h</div>
            <div className="text-gray-600 text-sm font-semibold">Incident response</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-[#6D51F4] md:text-fuchsia-700 text-3xl font-black mb-1">1,000+</div>
            <div className="text-gray-600 text-sm font-semibold">Tests run</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-[#6D51F4] md:text-fuchsia-700 text-3xl font-black mb-1">SOC 2</div>
            <div className="text-gray-600 text-sm font-semibold">Aligned practices</div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES CAPABILITIES MATRIX */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-28 py-12">
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">What we deliver</span>
          <h2 className="text-zinc-900 text-3xl md:text-4xl font-extrabold tracking-tight">A complete security program</h2>
          <p className="text-gray-600 text-base max-w-2xl">Find, fix, monitor, and respond — across your people, processes, and technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
            <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
              <img className="w-5 h-5 relative overflow-hidden flex items-center justify-center"
                        src="/images/cybersecurity/Frame (18).png"
                        alt="icon"
              />
                
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">Security assessments</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">Risk assessments and gap analysis against recognized frameworks.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
            <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
              <img className="w-5 h-5 relative overflow-hidden flex items-center justify-center"
                        src="/images/cybersecurity/Frame (19).png"
                        alt="icon"
              />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">Penetration testing</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">Ethical hacking of apps, networks, and cloud to find weaknesses first.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
            <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
              <img className="w-5 h-5 relative overflow-hidden flex items-center justify-center"
                        src="/images/cybersecurity/Frame (20).png"
                        alt="icon"
              />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">24/7 monitoring (SOC)</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">Continuous threat detection and managed response.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
            <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
              <img className="w-5 h-5 relative overflow-hidden flex items-center justify-center"
                        src="/images/cybersecurity/Frame (21).png"
                        alt="icon"
              />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">Identity & access</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">SSO, MFA, and least-privilege access management.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
            <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
              <img className="w-5 h-5 relative overflow-hidden flex items-center justify-center"
                        src="/images/cybersecurity/Frame (22).png"
                        alt="icon"
              />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">Compliance</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">Readiness for SOC 2, ISO 27001, HIPAA, PCI, and GDPR.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
            <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
              <img className="w-5 h-5 relative overflow-hidden flex items-center justify-center"
                        src="/images/cybersecurity/Frame (23).png"
                        alt="icon"
              />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">Incident response</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">Rapid containment, recovery, and post-incident review.</p>
          </div>
        </div>
      </section>

      {/* 5. WORKFLOW DEVELOPMENT STAGES */}
      <section id="work" className="w-full max-w-7xl mx-auto px-4 md:px-28 py-16">
        <div className="flex flex-col gap-3 mb-12">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">How we work</span>
          <h2 className="text-zinc-900 text-3xl md:text-4xl font-extrabold">From exposure to resilience</h2>
          <p className="text-gray-600 text-base">A continuous cycle that keeps you ahead of threats.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="w-8 h-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">1</div>
            <div className="text-[#14161C] md:text-fuchsia-700 text-base font-bold">Assess</div>
            <p className="text-gray-600 text-sm leading-relaxed">Identify assets, risks, and vulnerabilities.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="w-8 h-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">2</div>
            <div className="text-[#14161C] md:text-fuchsia-700 text-base font-bold">Harden</div>
            <p className="text-gray-600 text-sm leading-relaxed">Remediate and strengthen controls.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="w-8 h-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">3</div>
            <div className="text-[#14161C] md:text-fuchsia-700 text-base font-bold">Monitor</div>
            <p className="text-gray-600 text-sm leading-relaxed">Detect threats around the clock.</p>
          </div>
          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="w-8 h-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">4</div>
            <div className="text-[#14161C] md:text-fuchsia-700 text-base font-bold">Respond</div>
            <p className="text-gray-600 text-sm leading-relaxed">Contain, recover, and learn.</p>
          </div>
        </div>
      </section>

      {/* 6. EXTENDED SHOWCASE PANEL */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-28 py-12">
        <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md">
          {/* Image box */}
          <div className="lg:col-span-6 w-full h-80 md:h-96 bg-linear-53 from-indigo-500 to-cyan-400 rounded-[20px] shadow-sm overflow-hidden">
          <img className="md:hidden block w-full h-full object-cover" src="/images/cybersecurity/cybersection-mobile.jpg" alt="Trust Hub visual" />
            <img className="md:block hidden w-full h-full object-cover" src="/images/cybersecurity/cyber-hero-desktop.jpg" alt="Trust Hub visual" />
          </div>

          {/* Text content box */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-4">
            <h3 className="text-zinc-900 text-2xl md:text-3xl font-extrabold leading-snug">
              Security that earns trust
            </h3>
            <p className="text-zinc-700 text-base leading-relaxed">
              We align with the same standards we hold ourselves to. Explore our own posture in the Trust Center to see how we operate.
            </p>
            
            <ul className="flex flex-col gap-4 text-zinc-700 text-base">
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] text-emerald-500 font-bold">✓</span>
                Framework-aligned controls
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] text-emerald-500 font-bold">✓</span>
                Clear, prioritized findings
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] text-emerald-500 font-bold">✓</span>
                Coordinated vulnerability disclosure
              </li>
            </ul>
            
            <a href="#trust" className="text-indigo-600 font-semibold hover:underline mt-2 inline-block">
              Explore our Trust Center →
            </a>
          </div>
        </div>
      </section>

      {/* 7. PRICING PACKAGES & ENGAGEMENTS */}
      <section id="pricing" className="w-full max-w-7xl mx-auto px-4 md:px-28 py-20">
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">Engagements</span>
          <h2 className="text-zinc-900 text-4xl font-extrabold">Ways to work with us</h2>
          <p className="text-gray-600 text-base max-w-xl">From a one-time test to a fully managed program. Sample pricing for illustration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Tier 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-6 relative">
            <div>
              <h3 className="text-zinc-900 text-lg font-extrabold">Assessment</h3>
              <div className="text-zinc-900 text-3xl font-black mt-2">from $8k</div>
              <span className="text-gray-600 text-xs block mt-1">One-time</span>
            </div>
            <ul className="space-y-3 pt-2 text-zinc-700 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Risk & gap analysis
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Penetration test
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Prioritized report
              </li>
            </ul>
            <button className="w-full h-14 rounded-xl border border-gray-200 text-zinc-900 font-bold hover:bg-slate-50 transition mt-4">
              Get a quote
            </button>
          </div>

          {/* Tier 2 (Highlighted) - Fixed Mobile/Desktop conditional styling */}
          <div className="bg-white p-8 rounded-2xl border-2 border-[#4F46E5] md:border-fuchsia-700 shadow-xl flex flex-col gap-6 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4F46E5] md:bg-fuchsia-700 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full">
              Most popular
            </div>
            <div>
              <h3 className="text-zinc-900 text-lg font-extrabold">Managed</h3>
              <div className="text-zinc-900 text-3xl font-black mt-2">Custom</div>
              <span className="text-gray-600 text-xs block mt-1">Ongoing SOC</span>
            </div>
            <ul className="space-y-3 pt-2 text-zinc-700 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> 24/7 monitoring
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Managed response
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Recurring testing
              </li>
            </ul>
            <button className="w-full h-14 rounded-xl bg-[#4F46E5] md:bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold transition mt-4">
              Talk to us
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-6 relative">
            <div>
              <h3 className="text-zinc-900 text-lg font-extrabold">Compliance</h3>
              <div className="text-zinc-900 text-3xl font-black mt-2">Custom</div>
              <span className="text-gray-600 text-xs block mt-1">Audit readiness</span>
            </div>
            <ul className="space-y-3 pt-2 text-zinc-700 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> SOC 2 / ISO prep
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Policy & controls
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Audit support
              </li>
            </ul>
            <button className="w-full h-14 rounded-xl border border-gray-200 text-zinc-900 font-bold hover:bg-slate-50 transition mt-4">
              Contact sales
            </button>
          </div>
        </div>
      </section>

      {/* 8. COMMON ACCORDION FAQS */}
      <section className="w-full max-w-4xl mx-auto px-4 py-16">
        <div className="text-center flex flex-col items-center gap-3 mb-12">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">FAQ</span>
          <h2 className="text-zinc-900 text-3xl font-extrabold">Common questions</h2>
        </div>

        <div className="space-y-4">
          {[
            "How often should we run a penetration test?",
            "Can you help us get SOC 2 or ISO 27001?",
            "What happens during an incident?",
            "Do you only test, or also monitor?"
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition">
              <span className="text-zinc-900 text-base font-bold">{faq}</span>
              <span className="text-indigo-600 text-xl font-medium">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CALL TO ACTION BLOCK BANNER */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-28 py-16">
        <div className="w-full bg-sky-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center gap-6 shadow-2xl">
          <div className="absolute inset-0 opacity-50 bg-radial-[at_18%_18%] from-indigo-500 to-indigo-500/0 to-60% blur-[5px] pointer-events-none" />
          
          <h2 className="text-white text-3xl font-extrabold relative z-10">Let's strengthen your defenses</h2>
          <p className="text-white/75 text-base max-w-lg relative z-10">
            Tell us your concerns and we'll recommend the right starting point.
          </p>
          <button className="bg-white hover:bg-slate-100 text-sky-900 font-bold text-base px-6 h-14 rounded-xl relative z-10 shadow-md transition mt-2">
            Talk to security →
          </button>
        </div>
      </section>

    </div>
  );
}