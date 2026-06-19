import React from 'react';
import Image from 'next/image';

export default function EnterpriseSaaS() {
  return (
    <div className="w-full min-h-screen bg-neutral-50 text-zinc-900 font-sans antialiased selection:bg-indigo-600/10">
      
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-8 space-y-24">
        
        {/* 2. Hero Section */}
        <section className="grid lg:grid-cols-12 gap-12 items-center pt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-violet-100 px-4 py-1.5 rounded-full">
              {/* FIXED COLOR FOR KICKER */}
              <span className="text-[#5B53E8] md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">
                Industry Overview
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-zinc-900">
              What makes SaaS<br />enterprise-grade.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
              Selling software to large organizations raises the bar — on security, reliability, and proof. This is what "enterprise-grade" actually means under the hood, and why it matters from day one.
            </p>
          </div>
          <div className="flex-shrink-0 relative w-full max-w-[378px] aspect-[4/3] md:w-[458px] md:h-96 rounded-2xl overflow-hidden shadow-lg mx-auto lg:mx-0 lg:col-span-5">
            <Image 
              src="/images/retail/hero.png" 
              alt="Retail technology channel overview"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 458px"
              priority
            />
          </div>
        </section>

        {/* 3. The Shift Section */}
        <section className="grid md:grid-cols-2 gap-12 border-t border-gray-200/60 pt-12">
          <div className="space-y-4">
            {/* FIXED COLOR FOR KICKER */}
            <div className="text-[#5B53E8] md:text-fuchsia-700 text-base font-bold uppercase tracking-widest">
              The shift
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              The enterprise bar keeps rising
            </h2>
            <div className="text-zinc-700 text-base font-normal space-y-4 leading-relaxed">
              <p>
                Selling to an enterprise means passing through procurement, security reviews, and legal — often before anyone touches the product. Buyers expect single sign-on, audit logs, data residency options, and a stack of compliance certifications, and they expect uptime measured in "nines."
              </p>
              <p>
                These aren't features you bolt on later. Multi-tenancy, security, and observability shape the architecture from the first decision, and retrofitting them into a product built for small customers is slow and risky.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="border-l-4 border-indigo-600 pl-6 py-2">
              <blockquote className="text-zinc-900 text-xl font-semibold leading-relaxed">
                "In the enterprise, security and reliability aren't a tax on the roadmap — they're what unlocks the deal."
              </blockquote>
            </div>
          </div>
        </section>

        {/* 4. Pressures / Demands Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            {/* FIXED COLOR FOR KICKER */}
            <div className="text-[#5B53E8] md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">
              The pressures
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              What enterprise buyers demand
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl outline outline-1 outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#5B53E8] md:bg-fuchsia-700 rounded-xs" />
                <h3 className="text-zinc-900 text-base font-bold">Security & identity</h3>
              </div>
              <p className="text-zinc-700 text-base font-normal leading-relaxed pl-5">
                SSO, SCIM provisioning, encryption, and least-privilege access are table stakes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl outline outline-1 outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#5B53E8] md:bg-fuchsia-700 rounded-xs" />
                <h3 className="text-zinc-900 text-base font-bold">Compliance proof</h3>
              </div>
              <p className="text-zinc-700 text-base font-normal leading-relaxed pl-5">
                SOC 2, ISO 27001, HIPAA, or GDPR evidence, ready before the contract is signed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl outline outline-1 outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#5B53E8] md:bg-fuchsia-700 rounded-xs" />
                <h3 className="text-zinc-900 text-base font-bold">Reliability & scale</h3>
              </div>
              <p className="text-zinc-700 text-base font-normal leading-relaxed pl-5">
                High-availability, multi-region deployment, and SLAs that hold under real load.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl outline outline-1 outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#5B53E8] md:bg-fuchsia-700 rounded-xs" />
                <h3 className="text-zinc-900 text-base font-bold">Tenant isolation</h3>
              </div>
              <p className="text-zinc-700 text-base font-normal leading-relaxed pl-5">
                Confidence that one customer's data can never leak into another's.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Interactive Infrastructure Stack */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            {/* FIXED COLOR FOR KICKER */}
            <div className="text-[#5B53E8] md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">How it fits together</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900">The enterprise SaaS stack</h2>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl outline outline-1 outline-gray-200 shadow-sm space-y-6">
            {/* STACK BORDER GRADIENT CHANGER */}
            <div className="border-[2.93px] border-[#5B53E8] md:border-fuchsia-700 rounded-xl p-6 relative pt-12 space-y-4 max-w-4xl mx-auto">
              
              {/* STACK HEADER BADGE FROM FIGMA GRADIENT */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#5B53E8] to-[#8B5CF6] md:bg-none md:bg-fuchsia-700 text-white text-xs font-bold tracking-wider px-6 py-2 uppercase">
                Security & Compliance
              </div>
              
              {/* STACK LAYERS */}
              <div className="bg-gradient-to-r from-[#5B53E8] to-[#8B5CF6] md:bg-none md:bg-fuchsia-700 py-3 text-center text-white text-sm font-bold rounded shadow-xs">
                Experience layer — web & mobile UI, SSO sign-in
              </div>
              <div className="bg-white border-2 border-[#5B53E8] md:border-fuchsia-700 py-3 text-center text-zinc-900 text-sm font-bold rounded">
                API & integration layer — public API, webhooks, connectors
              </div>
              <div className="bg-white border-2 border-[#5B53E8] md:border-fuchsia-700 py-3 text-center text-zinc-900 text-sm font-bold rounded">
                Multi-tenant services — isolation, RBAC, billing, autoscaling
              </div>
              <div className="bg-white border-2 border-[#5B53E8] md:border-fuchsia-700 py-3 text-center text-zinc-900 text-sm font-bold rounded">
                Data layer — encrypted storage, backups, multi-region
              </div>
            </div>
            <p className="text-center text-gray-600 text-xs font-normal max-w-md mx-auto leading-relaxed">
              Illustrative reference stack. Real architectures vary by product and requirements.
            </p>
          </div>
        </section>

        {/* 6. Context Split Content Info Row */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="text-[#5B53E8] md:text-fuchsia-700 text-base font-bold uppercase tracking-widest">Where technology helps</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900">Designed-in, not bolted-on</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">
              <strong className="text-zinc-900 font-bold">Multi-tenancy</strong> keeps customers isolated while sharing infrastructure efficiently. <strong className="text-zinc-900 font-bold">Identity</strong> integrates with the SSO and provisioning tools enterprises already run. <strong className="text-zinc-900 font-bold">Observability</strong> — monitoring, audit logs, alerting — proves the system is healthy and accountable.
            </p>
            <p className="text-zinc-700 text-base font-normal leading-relaxed pt-2">
              Together they make security reviews faster, not slower, because the answers to the hard questions are already built in.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-[#5B53E8] md:text-fuchsia-700 text-base font-bold uppercase tracking-widest">How Zoiko approaches it</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900">Enterprise standards from day one</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">
              We build to the enterprise bar from the first line of code, and we maintain our own posture to the same standard — documented in our Trust Center. For teams modernizing a legacy platform, we re-architect incrementally to reduce risk while improving scalability.
            </p>
            <div className="pt-2">
              <a href="#" className="font-medium hover:underline transition-all">
                The aim is software that sails through procurement instead of stalling in it.<span className="text-indigo-600"> See our Trust Center →</span>
              </a>
            </div>
          </div>
        </section>

        {/* 7. Related Services Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="text-[#5B53E8] md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">Explore further</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900">Related services</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl outline outline-1 outline-gray-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-600 transition-colors">
              <div>
                <h4 className="text-zinc-900 text-base font-bold">SaaS Development</h4>
                <p className="text-zinc-700 text-sm font-normal mt-2 leading-relaxed">
                  End-to-end engineering for multi-tenant platforms.
                </p>
              </div>
              <a href="#" className="text-[#5B53E8] md:text-fuchsia-700 text-sm font-bold hover:underline">Learn more →</a>
            </div>

            <div className="bg-white p-6 rounded-2xl outline outline-1 outline-gray-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-600 transition-colors">
              <div>
                <h4 className="text-zinc-900 text-base font-bold">Cybersecurity</h4>
                <p className="text-zinc-700 text-sm font-normal mt-2 leading-relaxed">
                  Assessments, testing, and compliance readiness.
                </p>
              </div>
              <a href="#" className="text-[#5B53E8] md:text-fuchsia-700 text-sm font-bold hover:underline">Learn more →</a>
            </div>

            <div className="bg-white p-6 rounded-2xl outline outline-1 outline-gray-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-600 transition-colors">
              <div>
                <h4 className="text-zinc-900 text-base font-bold">Managed IT</h4>
                <p className="text-zinc-700 text-sm font-normal mt-2 leading-relaxed">
                  Operate and monitor your cloud estate 24/7.
                </p>
              </div>
              <a href="#" className="text-[#5B53E8] md:text-fuchsia-700 text-sm font-bold hover:underline">Learn more →</a>
            </div>
          </div>
        </section>

        {/* 8. Bottom CTA banner */}
        <section className="bg-gradient-to-b from-white to-violet-100 rounded-3xl outline outline-1 outline-gray-200 p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-xs">
          <h3 className="text-zinc-900 text-2xl md:text-3xl font-extrabold">
            Working on something in this space?
          </h3>
          <p className="text-gray-600 text-base font-normal max-w-lg mx-auto leading-relaxed">
            If you're building or scaling a SaaS platform for enterprise customers, we're glad to talk.
          </p>
          <button className="bg-[#5B53E8] md:bg-fuchsia-700 hover:opacity-90 text-white text-base font-bold px-6 py-3 rounded-xl shadow-md transition-all mx-auto block">
            Get in touch →
          </button>
        </section>

      </main>

    </div>
  );
}