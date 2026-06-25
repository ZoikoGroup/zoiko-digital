import React from 'react';

export default function MobileAppDevelopmentPage() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-50 bg-radial-[at_92%_-8%] from-lime-500/10 to-transparent to-60%  overflow-x-hidden">
    
        <img className="lg:col-span-5 w-full h-[400px] rounded-[20px]  relative overflow-hidden flex items-center justify-center p-4 md:hidden block" 
                src="/images/mobile-app-development/pearson-mobile.jpg"
                alt="icon"
        />
      {/* 2. HERO HEADER SECTION */}
      <header className="w-full max-w-7xl mx-auto px-4 md:px-28 pt-16 md:pt-24 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <h1 className="text-zinc-900 text-5xl md:text-6xl font-black leading-tight tracking-tight">
            Apps people <br/>love to use.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
            Native and cross-platform mobile apps with beautiful UX, fast performance, and a clear path to the app stores.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-indigo-600 md:bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold text-base px-6 h-14 rounded-xl shadow-md transition">
              Start your app
            </button>
            <button className="text-zinc-900 font-bold text-base px-6 h-14 rounded-xl border border-gray-200 hover:bg-slate-50 transition">
              How we work
            </button>
          </div>
        </div>
        
        {/* Mockup Canvas */}
        <img className=" md:block hidden lg:col-span-5 w-full h-[400px] rounded-[20px]  relative overflow-hidden flex items-center justify-center p-4" 
                src="/images/mobile-app-development/Person using a mobile app.png"
                alt="icon"
        />
        
          
      </header>

      {/* 3. KEY STATS SUB-BAR */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-28 mb-24">
        <div className="w-full bg-white rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 text-center">
            <div className="text-[#6D51F4] md:text-fuchsia-700 text-3xl font-black mb-1">90+</div>
            <div className="text-gray-600 text-sm font-semibold">Apps launched</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-[#6D51F4] md:text-fuchsia-700 text-3xl font-black mb-1">4.8★</div>
            <div className="text-gray-600 text-sm font-semibold">Avg. store rating</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-[#6D51F4] md:text-fuchsia-700 text-3xl font-black mb-1">2</div>
            <div className="text-gray-600 text-sm font-semibold">Platforms, 1 codebase</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-[#6D51F4] md:text-fuchsia-700 text-3xl font-black mb-1">60fps</div>
            <div className="text-gray-600 text-sm font-semibold">Smooth by default</div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES CAPABILITIES MATRIX */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-28 py-12">
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">What we deliver</span>
          <h2 className="text-zinc-900 text-3xl md:text-4xl font-extrabold tracking-tight">From idea to App Store</h2>
          <p className="text-gray-600 text-base max-w-xl">Design, engineering, and release — for iOS, Android, or both.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
            <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
            <img 
                src="/mobile-app-development/Frame.png" 
                alt="Native iOS icon" 
                className="w-6 h-6 text-white"
            />
            </div>

            <h3 className="text-zinc-900 text-lg font-bold">Native iOS</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">Swift and SwiftUI apps that feel right at home on Apple devices.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
            <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
            <img 
                src="/mobile-app-development/Frame (1).png" 
                alt="Native iOS icon" 
                className="w-6 h-6 text-white"
            />
            </div>            <h3 className="text-zinc-900 text-lg font-bold">Native Android</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">Kotlin and Jetpack Compose for the full Android ecosystem.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
                <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
            <img 
                src="/mobile-app-development/Frame (2).png" 
                alt="Native iOS icon" 
                className="w-6 h-6 text-white"
            />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">Cross-platform</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">React Native and Flutter to ship both platforms from one codebase.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
                <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
            <img 
                src="/mobile-app-development/Frame (3).png" 
                alt="Native iOS icon" 
                className="w-6 h-6 text-white"
            />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">UX & product design</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">Research, prototyping, and interfaces tuned for engagement.</p>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
                <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 rounded-xl flex items-center justify-center">
            <img 
                src="/mobile-app-development/Frame (4).png" 
                alt="Native iOS icon" 
                className="w-6 h-6 text-white"
            />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">APIs & backend</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">Secure backends, push notifications, and real-time sync.</p>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4">
                <div className="w-11 h-11 bg-[#6D51F4] md:bg-fuchsia-700 md:rounded-xl flex items-center justify-center">
            <img 
                src="/mobile-app-development/Frame (5).png" 
                alt="Native iOS icon" 
                className="w-6 h-6 text-white"
            />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold">Store launch</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">App Store and Play Store submission, review, and release management.</p>
          </div>
        </div>
      </section>

      {/* 5. WORKFLOW DEVELOPMENT STAGES */}
      <section id="work" className="w-full max-w-7xl mx-auto px-4 md:px-28 py-16">
        <div className="flex flex-col gap-3 mb-12">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">How we work</span>
          <h2 className="text-zinc-900 text-3xl md:text-4xl font-extrabold">A clear path to launch</h2>
          <p className="text-gray-600 text-base">Milestones you can see and test along the way.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="w-8 h-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">1</div>
            <div className="md:text-fuchsia-700  text-[#14161C] text-base font-bold">Discover</div>
            <p className="text-gray-600 text-sm leading-relaxed">Audience, goals, and platform decisions.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="w-8 h-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">2</div>
            <div className="md:text-fuchsia-700  text-[#14161C] text-base font-bold">Design</div>
            <p className="text-gray-600 text-sm leading-relaxed">Wireframes to a polished, interactive prototype.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="w-8 h-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">3</div>
            <div className="md:text-fuchsia-700  text-[#14161C] text-base font-bold">Build</div>
            <p className="text-gray-600 text-sm leading-relaxed">Iterative sprints with TestFlight/beta builds.</p>
          </div>
          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="w-8 h-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">4</div>
            <div className="md:text-fuchsia-700  text-[#14161C] text-base font-bold">Launch</div>
            <p className="text-gray-600 text-sm leading-relaxed">Store submission, release, and post-launch support.</p>
          </div>
        </div>
      </section>

      {/* 6. EXTENDED SHOWCASE PANEL */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-28 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    
    {/* Image column */}
    <div className="lg:col-span-6">
      {/* Desktop image */}
      <img 
        className="hidden md:block w-full rounded-3xl overflow-hidden"
        src="/images/mobile-app-development/Mobile app design on screens.png"
        alt="image"
      /> 
      {/* Mobile image */}
      <img 
        className="block md:hidden w-full rounded-3xl overflow-hidden"
        src="/images/mobile-app-development/Mobile app design mobile.jpg"
        alt="image"
      /> 
    </div>

    {/* Text column */}
    <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-4">
      <h3 className="text-zinc-900 text-2xl md:text-3xl font-extrabold leading-snug">
        Performance and polish in every interaction
      </h3>
      <p className="text-zinc-700 text-base leading-relaxed">
        We obsess over the details — smooth animations, offline support, and accessibility — so your app feels effortless.
      </p>
      
      <ul className="flex flex-col gap-4 text-zinc-700 text-base">
        <li className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] text-emerald-500 font-bold">✓</span>
          Offline-first and real-time sync
        </li>
        <li className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] text-emerald-500 font-bold">✓</span>
          Accessibility and localization
        </li>
        <li className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] text-emerald-500 font-bold">✓</span>
          Analytics and crash monitoring
        </li>
      </ul>
    </div>

  </div>
</section>


      {/* 7. PRICING PACKAGES & ENGAGEMENTS */}
      <section id="pricing" className="w-full max-w-7xl mx-auto px-4 md:px-28 py-20">
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">Engagements</span>
          <h2 className="text-zinc-900 text-4xl font-extrabold">Ways to work with us</h2>
          <p className="text-gray-600 text-base max-w-xl">Flexible options for every stage. Sample pricing for illustration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Tier 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-6 relative">
            <div>
              <h3 className="text-zinc-900 text-lg font-extrabold">Launch</h3>
              <div className="text-zinc-900 text-3xl font-black mt-2">from $30k</div>
              <span className="text-gray-600 text-xs block mt-1">8–10 weeks</span>
            </div>
            <ul className="space-y-3 pt-2 text-zinc-700 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> One platform, core features
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> UX design included
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Store submission
              </li>
            </ul>
            <button className="w-full h-14 rounded-xl border border-gray-200 text-zinc-900 font-bold hover:bg-slate-50 transition mt-4">
              Get a quote
            </button>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="bg-white p-8 rounded-2xl border-2 border:bg-[#4F46E5] md:border-fuchsia-700 shadow-xl flex flex-col gap-6 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4F46E5] md:bg-fuchsia-700 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full">
              Most popular
            </div>
            <div>
              <h3 className="text-zinc-900 text-lg font-extrabold">Both platforms</h3>
              <div className="text-zinc-900 text-3xl font-black mt-2">Custom</div>
              <span className="text-gray-600 text-xs block mt-1">Cross-platform</span>
            </div>
            <ul className="space-y-3 pt-2 text-zinc-700 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> iOS + Android
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Backend & APIs
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Ongoing iteration
              </li>
            </ul>
            <button className="w-full h-14 rounded-xl bg-[#4F46E5] md:bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold transition mt-4">
              Talk to us
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-6 relative">
            <div>
              <h3 className="text-zinc-900 text-lg font-extrabold">Scale</h3>
              <div className="text-zinc-900 text-3xl font-black mt-2">Custom</div>
              <span className="text-gray-600 text-xs block mt-1">Dedicated team</span>
            </div>
            <ul className="space-y-3 pt-2 text-zinc-700 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Dedicated squad
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> Roadmap & releases
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span> SLA support
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
            "Native or cross-platform — which is right?",
            "Do you handle App Store submission?",
            "Can you maintain the app after launch?",
            "Will I get the source code?"
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
        <div className="w-full bg-sky-950 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center gap-6 shadow-2xl">
          <div className="absolute inset-0 opacity-40 bg-radial-[at_18%_18%] from-violet-500 to-transparent to-60% blur-xl pointer-events-none" />
          
          <h2 className="text-white text-3xl font-extrabold relative z-10">Let's build your app</h2>
          <p className="text-white/80 text-base max-w-lg relative z-10">
            Share your idea and we'll recommend the right approach and a quote.
          </p>
          <button className="bg-white hover:bg-slate-100 text-zinc-950 font-bold text-base px-6 h-14 rounded-xl relative z-10 shadow-md transition mt-2">
            Start your app →
          </button>
        </div>
      </section>

     

    </div>
  );
}