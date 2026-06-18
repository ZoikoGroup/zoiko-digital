import React from "react";

export default function LogisticsIndustryOverview() {
  return (
    <div className="w-full min-h-screen bg-neutral-50 selection:bg-fuchsia-100 selection:text-fuchsia-700">
      
      {/* =========================================================================
          1. HERO SECTION
         ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[150px] pt-12 lg:pt-[118px] pb-16 lg:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-[999px]">
              <span className="text-fuchsia-700 text-xs font-bold uppercase tracking-widest block max-lg:text-sky-500">
                Industry Overview
              </span>
            </div>
            <h1 className="text-zinc-900 text-4xl lg:text-6xl font-black tracking-tight leading-tight lg:leading-[58.24px]">
              Technology in<br />logistics.
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl font-normal leading-relaxed lg:leading-8">
              Moving goods is now as much a software challenge as a physical one. This is a look at how logistics is changing — and the technology that keeps freight visible, efficient, and on time.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <img className="hidden lg:block w-[548px] h-[384px] rounded-3xl  overflow-hidden flex items-center justify-center text-stone-400 text-sm"
                src="/images/logistics/Illustration.png"
                alt="hero"
            >
            </img>

            {/* =========================================================================
                EXACT FIGMA MOBILE HERO IMAGE REPRODUCTION
               ========================================================================= */}
            <div className="lg:hidden w-full max-w-[343px] h-[312px] bg-[#020b14] rounded-2xl relative overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.4)] border border-slate-900">
              
              {/* Figma Background Radial Gradient Glows */}
              <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-[#06b6d4]/15 rounded-full blur-[40px] pointer-events-none" />
              <div className="absolute top-[20%] left-[20%] w-[120px] h-[120px] bg-sky-500/10 rounded-full blur-[30px] pointer-events-none" />

              {/* Exact Connected Vector Paths from Figma */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 343 312" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Path from Bottom-Left Node to Center Node */}
                <path d="M 64 212 C 90 180, 120 150, 166 142" stroke="#0ea5e9" strokeWidth="2" opacity="0.8" />
                {/* Path from Center Node to Top-Right Pin */}
                <path d="M 176 132 C 210 110, 240 100, 286 102" stroke="#0ea5e9" strokeWidth="2" opacity="0.8" />
                {/* Path from Center Node to Bottom-Right Node */}
                <path d="M 176 142 C 210 170, 240 200, 280 206" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.5" />
                {/* Soft secondary atmospheric path echo */}
                <path d="M 64 212 C 100 240, 200 240, 280 206" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
              </svg>

              {/* Node 1: Bottom Left Node (Home/Supplier Icon) */}
              <div className="absolute left-[48px] top-[196px] z-10 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#0284c7] rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(14,165,233,0.4)]">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Node 2: Center Highlight White Card Node (Dashboard Code/Icon) */}
              <div className="absolute left-[152px] top-[118px] z-20 flex items-center justify-center">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center border border-sky-400 shadow-[0_0_16px_rgba(6,182,212,0.5)]">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Node 3: Top Right Active Map Pin Node */}
              <div className="absolute left-[274px] top-[84px] z-10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#0ea5e9] drop-shadow-[0_0_8px_rgba(14,165,233,0.6)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Node 4: Bottom Right Node (Secondary Connected Endpoint) */}
              <div className="absolute left-[268px] top-[192px] z-10 flex items-center justify-center">
                <div className="w-6 h-6 bg-sky-950 border border-sky-500/50 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-sky-400 rounded-full" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          2. THE SHIFT TRANSITION
         ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[150px] py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-sky-500 lg:text-fuchsia-700 text-base font-bold uppercase tracking-widest">
            The shift
          </div>
          <h2 className="text-zinc-900 text-2xl lg:text-4xl font-extrabold tracking-tight leading-snug">
            From moving boxes to moving data
          </h2>
          <div className="text-zinc-700 text-base font-normal leading-7 space-y-6">
            <p>
              For decades, logistics competed on trucks, warehouses, and routes. Today it competes on information. Customers expect to know exactly where their order is and when it will arrive. Margins are thin, fuel and labor are expensive, and a single blind spot in the supply chain can ripple into late deliveries and lost trust.
            </p>
            <p>
              The operators pulling ahead are the ones treating their supply chain as a connected system — where every shipment, vehicle, and inventory item reports its status in real time, and where software handles the planning that used to live in spreadsheets and phone calls.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 flex items-start pt-6 lg:pt-[54px]">
          <div className="border-l-4 border-sky-500 lg:border-fuchsia-700 pl-6 py-2">
            <blockquote className="text-zinc-900 text-xl font-semibold leading-8">
              When you can see the whole network at once, problems become decisions you make early instead of surprises you explain later.
            </blockquote>
          </div>
        </div>
      </section>


      {/* =========================================================================
          3. MARKET PRESSURE TILES
         ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[150px] py-16">
        <div className="text-center space-y-3 mb-12">
          <div className="text-sky-500 lg:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">
            The pressures
          </div>
          <h2 className="text-zinc-900 text-2xl lg:text-4xl font-extrabold tracking-tight">
            What logistics teams are up against
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1140px] mx-auto">
          {[
            { title: "Fragmented visibility", desc: "Shipment, inventory, and fleet data live in separate systems, so no one has a single, trustworthy view." },
            { title: "Thin, volatile margins", desc: "Fuel, labor, and empty miles eat into profit, and small inefficiencies compound across thousands of moves." },
            { title: "Manual processes", desc: "Paperwork, re-keyed data, and phone-based exception handling slow everything down and invite errors." },
            { title: "Peak-season swings", desc: "Demand spikes test systems and staff, and capacity that's right in March can break in December." }
          ].map((pressure, index) => (
            <div key={index} className="bg-white p-6 lg:p-8 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30),0px_1px_2px_0px_rgba(16,18,24,0.04)] flex gap-4">
              <div className="w-2 h-2 mt-2.5 bg-fuchsia-700 max-lg:bg-gradient-to-br max-lg:from-sky-500 max-lg:to-cyan-500 rounded-sm shrink-0" />
              <div>
                <h3 className="text-zinc-900 text-base font-bold leading-7 mb-2">{pressure.title}</h3>
                <p className="text-zinc-700 text-base font-normal leading-6">{pressure.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          4. CONNECTED SUPPLY CHAIN (FIT TO MOBILE SCREEN WITH NO OVERFLOW)
         ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-[150px] py-16">
        <div className="text-center space-y-3 mb-12">
          <div className="text-sky-500 lg:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">
            How it fits together
          </div>
          <h2 className="text-zinc-900 text-2xl lg:text-4xl font-extrabold tracking-tight">
            The connected supply chain
          </h2>
        </div>

        {/* 100% visible on mobile screens inside container padding */}
        <div className="w-full bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] p-4 sm:p-6 lg:p-8">
          <div className="w-full relative py-4">
            
            {/* Visual background connection wire layer */}
            <div className="absolute top-7 left-[8%] right-[8%] h-0.5 bg-sky-500 lg:bg-fuchsia-700 z-0" />
            
            {/* Horizontal tracking nodes including Customer */}
            <div className="w-full flex justify-between items-start relative z-10 mb-6">
              {[
                { 
                  label: "Supplier", 
                  icon: (
                    <svg className="w-5 h-5 text-sky-500 lg:text-fuchsia-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                { 
                  label: "Warehouse", 
                  icon: (
                    <svg className="w-5 h-5 text-sky-500 lg:text-fuchsia-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                },
                { 
                  label: "Transport", 
                  icon: (
                    <svg className="w-5 h-5 text-sky-500 lg:text-fuchsia-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  )
                },
                { 
                  label: "Last mile", 
                  icon: (
                    <svg className="w-5 h-5 text-sky-500 lg:text-fuchsia-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                { 
                  label: "Customer", 
                  isCustom: true,
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                }
              ].map((node, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 flex-1 min-w-0">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl border flex items-center justify-center font-bold bg-white text-xs transition-all ${
                    node.isCustom 
                      ? 'bg-fuchsia-700 border-fuchsia-700 text-white lg:bg-fuchsia-700 shadow-md shadow-fuchsia-200' 
                      : 'border-sky-500 text-zinc-900 lg:border-fuchsia-700'
                  }`}>
                    {node.icon}
                  </div>
                  <span className="text-zinc-900 text-[9px] sm:text-xs font-bold tracking-tight text-center truncate w-full px-0.5">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Connected Data Infrastructure Box */}
            <div className="w-full bg-blue-50 border border-sky-500/30 rounded-xl p-3 sm:p-4 text-center space-y-1">
              <div className="text-sky-600 lg:text-fuchsia-700 text-[10px] sm:text-sm font-bold tracking-wider">
                CONNECTED DATA LAYER
              </div>
              <div className="text-zinc-700 text-[9px] sm:text-xs font-normal leading-normal">
                Real-time tracking · route optimization · inventory sync · automated exceptions
              </div>
            </div>

          </div>
          <p className="text-gray-600 text-[11px] sm:text-xs font-normal text-center mt-4">
            Illustrative model of a connected logistics operation. Stages vary by business.
          </p>
        </div>
      </section>


      {/* =========================================================================
          5. STRATEGIC DISCLOSURES
         ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[150px] py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="space-y-6">
          <div className="text-sky-500 lg:text-fuchsia-700 text-base font-bold uppercase tracking-widest">
            Where technology helps
          </div>
          <h2 className="text-zinc-900 text-2xl lg:text-4xl font-extrabold tracking-tight">
            Visibility, efficiency, automation
          </h2>
          <div className="text-zinc-700 text-base font-normal leading-7 space-y-6">
            <p>
              <span className="font-bold">Visibility</span> turns guesswork into facts — live tracking, accurate ETAs, and alerts the moment something slips. <span className="font-bold">Optimization</span> trims miles, fuel, and idle time by planning smarter routes and loads. <span className="font-bold">Automation</span> removes the re-keying and phone tag around documents, dispatch, and exceptions.
            </p>
            <p>
              Underpinning all of it is <span className="font-bold">integration</span>: carriers, ERPs, warehouse systems, and customer portals sharing one source of truth instead of arguing over conflicting numbers.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-sky-500 lg:text-fuchsia-700 text-base font-bold uppercase tracking-widest">
            How Zoiko approaches it
          </div>
          <h2 className="text-zinc-900 text-2xl lg:text-4xl font-extrabold tracking-tight">
            Built around your operation
          </h2>
          <div className="text-zinc-700 text-base font-normal leading-7 space-y-6">
            <p>
              We don't believe in ripping out what works. We map how your operation actually runs, then build or connect the systems that close your biggest gaps first — designed to scale through peak season and to integrate with the tools your partners already use.
            </p>
            <p>
              The goal is a supply chain you can see and trust end to end, without a multi-year replatforming project to get there.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================================
          6. RELATED SERVICES
         ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[150px] py-16">
        <div className="text-center space-y-3 mb-12">
          <div className="text-sky-500 lg:text-fuchsia-700 text-xs font-bold uppercase tracking-widest">
            Explore further
          </div>
          <h2 className="text-zinc-900 text-2xl lg:text-4xl font-extrabold tracking-tight">
            Related services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {[
            { title: "SaaS Development", text: "Custom TMS, WMS, and visibility platforms." },
            { title: "AI Automation", text: "Automate dispatch, documents, and exceptions." },
            { title: "Managed IT", text: "Keep warehouse and fleet systems running 24/7." }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 lg:p-8 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex flex-col justify-between items-start min-h-[160px]">
              <div className="space-y-2">
                <h3 className="text-zinc-900 text-base font-bold leading-7">{service.title}</h3>
                <p className="text-zinc-700 text-sm font-normal leading-6">{service.text}</p>
              </div>
              <a href="#" className="text-sky-500 lg:text-fuchsia-700 text-sm font-bold hover:underline mt-4 inline-block">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          7. ENGAGEMENT CTA
         ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[174px] py-16 mb-12">
        <div className="w-full bg-gradient-to-b from-white to-blue-50 rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] py-12 px-6 text-center space-y-6">
          <h2 className="text-zinc-900 text-2xl lg:text-3xl font-extrabold tracking-tight">
            Working on something in this space?
          </h2>
          <p className="text-gray-600 text-base font-normal max-w-[532px] mx-auto leading-relaxed">
            If you're exploring technology for a logistics operation, we're always happy to compare notes.
          </p>
          <button className="bg-sky-500 lg:bg-fuchsia-700 text-white text-base font-bold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity">
            Get in touch →
          </button>
        </div>
      </section>

    </div>
  );
}