import React from 'react';

export default function ProfessionalServicesPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-50 antialiased font-sans text-zinc-900 selection:bg-teal-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Copy Column */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center bg-emerald-50 text-fuchsia-700 md:text-fuchsia-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Industry Overview
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 leading-[1.1]">
            Technology in<br />
            professional<br />
            services.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            Law firms, accountancies, consultancies, and agencies sell expertise by the hour — yet much of the day is lost to admin. This is how technology gives that time back.
          </p>
        </div>
        
    <div className="md:col-span-5">
  {/* The Relative Container Box */}
  <div className="relative w-full aspect-[4/3] bg-emerald-950 rounded-3xl overflow-hidden shadow-[0px_30px_70px_-38px_rgba(8,32,29,0.70)]">
    
    {/* 1. MAIN BACKGROUND PICTURE */}
    <img 
      src="/images/professional/professional-hero.png" 
      alt="Professional services workplace"
      className="absolute inset-0 w-full h-full object-cover opacity-80"
    />
    </div>
    </div>
      </section>

      {/* 2. THE SHIFT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7 space-y-6">
            <div className="text-teal-600 md:text-fuchsia-700 text-base font-bold uppercase tracking-widest">
              The shift
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug">
              Expertise is the product — time is the constraint
            </h2>
            <div className="space-y-6 text-zinc-700 text-base leading-relaxed max-w-2xl">
              <p>
                In a professional services firm, the asset walks out the door every evening. Revenue is bounded by how many hours your experts can bill, which makes every hour spent on intake forms, document formatting, chasing approvals, and re-entering data a direct cost.
              </p>
              <p>
                Clients have also raised their expectations. They want a polished, self-service experience — secure portals, clear status, fast turnaround — the same convenience they get from the best consumer software.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-5 flex items-center">
            <div className="border-l-4 border-teal-600 pl-6 py-2">
              <p className="text-zinc-900 text-xl font-semibold leading-relaxed">
                Every hour automated out of admin is an hour your experts can spend on work clients actually pay for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PRESSURES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="text-teal-600 md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">The pressures</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">What firms are wrestling with</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex gap-4 items-start">
            <div className="mt-2.5 size-2 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-sm shrink-0"></div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">Admin overhead</h3>
              <p className="text-zinc-700 text-base leading-normal">Skilled people spend hours on intake, formatting, and follow-ups instead of billable work.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex gap-4 items-start">
            <div className="mt-2.5 size-2 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-sm shrink-0"></div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">Scattered information</h3>
              <p className="text-zinc-700 text-base leading-normal">Client details and documents live across email, drives, and disconnected tools.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex gap-4 items-start">
            <div className="mt-2.5 size-2 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-sm shrink-0"></div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">Client expectations</h3>
              <p className="text-zinc-700 text-base leading-normal">Clients expect a modern, transparent, self-service experience.</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex gap-4 items-start">
            <div className="mt-2.5 size-2 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-sm shrink-0"></div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">Confidentiality</h3>
              <p className="text-zinc-700 text-base leading-normal">Sensitive data carries strict obligations and little room for error.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON MATRIX BAR SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="text-teal-600 md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">How it fits together</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">From manual to automated</h2>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-md space-y-8">
          {/* Top Line Row: Manual Processing */}
          <div>
            <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Manual Today</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-zinc-100 border border-zinc-200 rounded-xl p-4 text-center text-sm font-bold text-gray-600">Email intake</div>
              <div className="bg-zinc-100 border border-zinc-200 rounded-xl p-4 text-center text-sm font-bold text-gray-600">Re-key data</div>
              <div className="bg-zinc-100 border border-zinc-200 rounded-xl p-4 text-center text-sm font-bold text-gray-600">Draft documents</div>
              <div className="bg-zinc-100 border border-zinc-200 rounded-xl p-4 text-center text-sm font-bold text-gray-600">Chase approval</div>
            </div>
          </div>

          <div className="h-px bg-gray-200 w-full my-2"></div>

          {/* Bottom Line Row: Automated Ecosystem */}
          <div>
            <div className="text-teal-700 md:text-fuchsia-700 text-xs font-bold uppercase tracking-wider mb-4">Automated with Zoiko</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-teal-600 md:border-fuchsia-700 rounded-xl p-4 text-center text-sm font-bold text-zinc-900">Self-service portal</div>
              <div className="bg-white border-2 border-teal-600 md:border-fuchsia-700 rounded-xl p-4 text-center text-sm font-bold text-zinc-900">Auto-populated record</div>
              <div className="bg-white border-2 border-teal-600 md:border-fuchsia-700 rounded-xl p-4 text-center text-sm font-bold text-zinc-900">Generated documents</div>
              <div className="bg-gradient-to-r from-teal-500 to-indigo-500 md:bg-none md:bg-fuchsia-700 rounded-xl p-4 text-center text-sm font-bold text-white flex items-center justify-center">Billed</div>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs max-w-lg mx-auto leading-relaxed pt-2">
            Illustrative comparison. Real workflows are tailored to each firm and practice area.
          </p>
        </div>
      </section>

      {/* 5. STRATEGY COLUMNS */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-gray-100">
        <div className="space-y-4">
          <div className="text-teal-600 md:text-fuchsia-700 text-base font-bold uppercase tracking-widest">Where technology helps</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">Portals, automation, one source of truth</h2>
          <p className="text-zinc-700 text-base leading-7">
            <span className="font-bold">Client portals</span> give clients a secure place to share documents, see status, and approve work. <span className="font-bold">Automation</span> handles intake, document generation, reminders, and time capture. A <span className="font-bold">connected practice system</span> keeps clients, matters, and billing in one place.
          </p>
          <p className="text-zinc-700 text-base leading-7">
            Done well, the technology fades into the background — your team simply spends more of the day on the work that matters.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-teal-600 md:text-fuchsia-700 text-base font-bold uppercase tracking-widest">How Zoiko approaches it</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">Fit to how your firm works</h2>
          <p className="text-zinc-700 text-base leading-7">
            We adapt to your processes and the tools you already rely on, rather than forcing a rigid platform on you. We start with the workflows that waste the most time, integrate with your existing systems, and treat confidentiality as a first-class requirement throughout.
          </p>
          <p className="text-zinc-700 text-base leading-7">
            And because adoption is everything, we include the training and support that make new tools actually stick.
          </p>
        </div>
      </section>

      {/* 6. RELATED SERVICES EXPLORER */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="text-teal-600 md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">Explore further</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">Related services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Module 1 */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-base font-bold text-zinc-900 mb-3">SaaS Development</h3>
              <p className="text-zinc-700 text-sm leading-relaxed mb-6">Custom portals, practice systems, and internal tools.</p>
            </div>
            <a href="#" className="text-teal-600 md:text-fuchsia-700 text-sm font-bold inline-flex items-center gap-1">
              Learn more →
            </a>
          </div>

          {/* Card Module 2 */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-base font-bold text-zinc-900 mb-3">AI Automation</h3>
              <p className="text-zinc-700 text-sm leading-relaxed mb-6">Automate intake, drafting, and follow-ups.</p>
            </div>
            <a href="#" className="text-teal-600 md:text-fuchsia-700 text-sm font-bold inline-flex items-center gap-1">
              Learn more →
            </a>
          </div>

          {/* Card Module 3 */}
          <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-base font-bold text-zinc-900 mb-3">Cybersecurity</h3>
              <p className="text-zinc-700 text-sm leading-relaxed mb-6">Protect confidential client data.</p>
            </div>
            <a href="#" className="text-teal-600 md:text-fuchsia-700 text-sm font-bold inline-flex items-center gap-1">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* 7. CTA INTERACTIVE CARD */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-b from-white to-emerald-50 rounded-3xl p-8 md:p-12 text-center border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Working on something in this space?
          </h2>
          <p className="text-gray-600 text-base max-w-lg mx-auto leading-relaxed">
            If admin is eating into your firm's billable time, we're happy to talk through ideas.
          </p>
          <div className="pt-2">
            <button className="px-6 py-3 bg-teal-600 md:bg-fuchsia-700 text-white font-bold text-base rounded-xl shadow-md transition-transform active:scale-95">
              Get in touch →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}