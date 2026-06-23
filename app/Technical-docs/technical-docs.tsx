import React from "react";

export default function TechnicalDocs() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* =========================================================
          SECTION 1: HERO HEADER
          ========================================================= */}
      <section className="relative w-full bg-[#112338] text-white py-24 px-6 sm:px-12 lg:px-[108px] overflow-hidden flex flex-col items-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(315deg,rgba(162,28,175,0)_40%,rgba(162,28,175,0.1)_50%,rgba(162,28,175,0)_60%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[40px] font-semibold leading-tight mb-8 tracking-tight">
            Technical Documentation & APIs
          </h1>

          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-10 border border-white/5 shadow-sm">
            <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
            <span className="text-zinc-200 text-sm font-medium">All Systems Operational - 99.999% uptime</span>
            <span className="text-white/30 px-1">|</span>
            <a href="#" className="text-zinc-200 text-sm font-medium hover:text-white transition-colors">Trust Center</a>
          </div>

          <div className="mb-12">
            <h2 className="text-white text-base font-semibold mb-2">Start Building with Your Free API Key</h2>
            <p className="text-zinc-300 text-base font-normal">
              Everything developers need to build, scale, and integrate with ZWS.
            </p>
          </div>

          <div className="w-full max-w-[600px] mb-4">
            <div className="relative flex items-center bg-white rounded-lg overflow-hidden shadow-lg h-[52px]">
              <input
                type="text"
                placeholder="Search Documentation, APIs, and SDKs"
                className="w-full h-full bg-transparent text-zinc-800 text-sm placeholder-zinc-500 focus:outline-none pl-6 pr-4"
              />
            </div>
          </div>

          <p className="text-zinc-400 text-xs font-normal">
            Trusted by 5,000+ developers across 40+ countries
          </p>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: QUICK START GUIDES
          ========================================================= */}
      <section className="w-full bg-fuchsia-50 py-20 px-4 sm:px-8 lg:px-[108px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-[32px] font-semibold text-fuchsia-700 tracking-tight mb-2">
              Quick Start Guides
            </h2>
            <p className="text-stone-500 text-lg">
              Get up and running in minutes with our industry-specific starter packs
            </p>
          </div>

          {/* Industry Starter Packs */}
          <div className="mb-20">
            <h3 className="text-[28px] font-semibold text-fuchsia-700 mb-10 text-center">
              Industry Starter Packs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {[
                { title: "Telecom Starter\nPack", desc: "Complete integration for\ntelecom providers with\nbilling, network\nmonitoring, and customer\nAPIs", gradient: "from-red-400 to-rose-400", videoText: "2-min video", iconPath: "M13 10V3L4 14h7v7l9-11h-7z" },
                { title: "Finance Starter\nPack", desc: "Banking and fintech APIs\nwith compliance,\npayments, and fraud\ndetection", gradient: "from-teal-400 to-slate-500", videoText: "2-min video", iconPath: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
                { title: "Healthcare Starter\nPack", desc: "HIPAA-compliant APIs for\npatient data, billing,\nand telemedicine\nintegration", gradient: "from-fuchsia-300 to-red-400", videoText: "1-min video", iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { title: "Retail Starter Pack", desc: "E-commerce APIs for\ninventory, payments,\nanalytics, and customer\nmanagement", gradient: "from-blue-400 to-cyan-400", videoText: "2-min video", iconPath: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }
              ].map((pack, idx) => (
                <div key={idx} className="w-full max-w-xs bg-white rounded-2xl outline outline-2 outline-offset-[-2px] outline-neutral-200 overflow-hidden relative flex flex-col items-center pb-8 pt-8 px-6 shadow-sm hover:shadow-md transition-shadow h-[540px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-700 to-sky-900"></div>

                  <div className={`w-20 h-20 rounded-[40px] bg-gradient-to-br ${pack.gradient} flex items-center justify-center mb-6 text-white shrink-0`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={pack.iconPath}></path></svg>
                  </div>

                  <h4 className="text-sky-900 text-xl font-semibold mb-4 text-center leading-8 whitespace-pre-line min-h-[64px]">
                    {pack.title}
                  </h4>

                  <p className="text-stone-500 text-base font-normal text-center leading-6 whitespace-pre-line mb-8 flex-1">
                    {pack.desc}
                  </p>

                  <div className="flex gap-3 justify-center mb-6 w-full shrink-0">
                    <span className="bg-[#9c27b0]/80 text-white text-xs font-normal px-3 py-1 rounded-xl">{pack.videoText}</span>
                    <span className="bg-[#9c27b0]/80 text-white text-xs font-normal px-3 py-1 rounded-xl">Live sandbox</span>
                  </div>

                  <div className="flex flex-col gap-3 w-full max-w-[200px] shrink-0">
                    <button className="w-full bg-[#9c27b0]/80 hover:bg-fuchsia-800 text-white text-sm font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                      Watch Guide
                    </button>
                    <button className="w-full bg-[#112a46] hover:bg-sky-950 text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                      Launch in Sandbox
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Universal Guides */}
          <div>
            <h3 className="text-[28px] font-semibold text-fuchsia-700 mb-10 text-center">
              Universal Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {[
                { title: "Hello World API Call", desc: "Your first API call in under 5 minutes", timeText: "1-min guide", iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
                { title: "Authentication in 3 Steps", desc: "Secure API authentication setup", timeText: "2-min guide", iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                { title: "Your First Data Push", desc: "Send data to ZWS platform efficiently", timeText: "2-min guide", iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" }
              ].map((guide, idx) => (
                <div key={idx} className="w-full max-w-[384px] h-80 bg-white rounded-2xl outline outline-2 outline-offset-[-2px] outline-neutral-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 rounded-[40px] bg-gradient-to-br from-fuchsia-700 to-sky-900 flex items-center justify-center mb-6 text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={guide.iconPath}></path></svg>
                  </div>
                  <h4 className="text-sky-900 text-xl font-semibold mb-2">
                    {guide.title}
                  </h4>
                  <p className="text-stone-500 text-base font-normal mb-8 flex-1">
                    {guide.desc}
                  </p>
                  <div className="flex items-center gap-4 justify-center w-full">
                    <button className="bg-[#9c27b0]/80 hover:bg-fuchsia-800 text-white text-sm font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                      {guide.timeText}
                    </button>
                    <button className="bg-[#112a46] hover:bg-sky-950 text-white text-sm font-semibold py-2 px-6 rounded-lg transition-colors">
                      Try Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: API EXPLORER
          ========================================================= */}
      <section className="w-full bg-[#FAF5FF]/50 py-20 px-4 sm:px-8 lg:px-[108px] relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-[32px] font-semibold text-sky-900 tracking-tight">
              API Explorer
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Sidebar */}
            <div className="w-full lg:w-72 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col shrink-0 shadow-sm">
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-[#9c27b0]/80 hover:bg-fuchsia-800 text-white text-sm font-normal py-2 rounded-md transition-colors outline outline-1 outline-offset-[-1px] outline-fuchsia-700">REST API</button>
                <button className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-black text-sm font-normal py-2 rounded-md transition-colors outline outline-1 outline-offset-[-1px] outline-neutral-200">GraphQL</button>
              </div>
              <div className="flex flex-col gap-6">
                {/* Auth */}
                <div>
                  <h5 className="text-sky-900 text-sm font-semibold uppercase tracking-wide mb-3">Authentication</h5>
                  <div className="bg-[#9c27b0]/80 text-white rounded-md p-2 flex items-center gap-3">
                    <span className="bg-[#112a46] text-white text-xs font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">POST</span>
                    <span className="text-xs font-normal">/auth/token</span>
                  </div>
                </div>
                {/* Users */}
                <div>
                  <h5 className="text-sky-900 text-sm font-semibold uppercase tracking-wide mb-3">Users</h5>
                  <div className="hover:bg-neutral-100 text-zinc-800 rounded-md p-2 flex items-center gap-3 mb-1 cursor-pointer transition-colors">
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">GET</span>
                    <span className="text-xs font-normal">/users</span>
                  </div>
                  <div className="hover:bg-neutral-100 text-zinc-800 rounded-md p-2 flex items-center gap-3 cursor-pointer transition-colors">
                    <span className="bg-[#112a46] text-white text-xs font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">POST</span>
                    <span className="text-xs font-normal">/users</span>
                  </div>
                </div>
                {/* Data */}
                <div>
                  <h5 className="text-sky-900 text-sm font-semibold uppercase tracking-wide mb-3">Data</h5>
                  <div className="hover:bg-neutral-100 text-zinc-800 rounded-md p-2 flex items-center gap-3 cursor-pointer transition-colors">
                    <span className="bg-[#112a46] text-white text-xs font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">POST</span>
                    <span className="text-xs font-normal">/data/push</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Explorer */}
            <div className="flex-1 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 flex flex-col lg:flex-row shadow-sm">
              {/* Request */}
              <div className="flex-1 border-b lg:border-b-0 lg:border-r border-neutral-200 p-8 flex flex-col">
                <h3 className="text-sky-900 text-xl font-semibold mb-6">Request</h3>

                <div className="flex items-center gap-3 mb-8 outline outline-1 outline-neutral-200 bg-neutral-100 rounded-md p-2">
                  <span className="bg-[#112a46] text-white text-xs font-semibold px-3 py-1 rounded-sm uppercase tracking-wider shrink-0">POST</span>
                  <span className="text-black text-sm font-normal truncate">https://api.zws.com/v1/auth/token</span>
                </div>

                <h4 className="text-zinc-800 text-base font-semibold mb-4">Request Body</h4>
                <div className="bg-[#111] rounded-lg p-4 mb-8 outline outline-1 outline-neutral-700">
                  <pre className="text-zinc-100 font-mono text-xs leading-5 overflow-x-auto">
                    <code>{`{
  "username": "your-username",
  "password": "your-password",
  "client_id": "your-client-id"
}`}</code>
                  </pre>
                </div>

                <h4 className="text-zinc-800 text-base font-semibold mb-4">Code Snippets</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'Node.js', 'Java', 'Go', '.NET', 'PHP', 'Ruby'].map((lang, idx) => (
                    <button key={idx} className={`${idx === 0 ? 'bg-[#9c27b0]/80 text-white outline-fuchsia-700' : 'bg-neutral-100 text-black outline-neutral-200 hover:bg-neutral-200'} text-xs font-normal px-4 py-1.5 rounded-sm outline outline-1 outline-offset-[-1px] transition-colors`}>
                      {lang}
                    </button>
                  ))}
                </div>

                <div className="relative mb-8 mt-2 flex-1 min-h-[140px]">
                  <pre className="text-zinc-800 text-xs font-normal font-mono leading-5 whitespace-pre-wrap">
                    <code>{`import requests

url = "https://api.zws.com/v1/auth/token"
payload = {
    "username": "your-username",
    "password": "your-password",
    "client_id": "your-client-id"
}

response = requests.post(url, json=payload)
token = response.json()["access_token"]`}</code>
                  </pre>
                  <button className="absolute right-0 top-0 bg-zinc-100 text-black text-xs font-normal px-2 py-0.5 outline outline-1 outline-black flex items-center gap-1 hover:bg-zinc-200">
                    Copy
                  </button>
                </div>

                <button className="w-full bg-[#9c27b0]/80 hover:bg-fuchsia-800 text-white text-base font-semibold py-3 rounded-lg shadow-sm transition-colors mt-auto">
                  Try it out
                </button>
              </div>

              {/* Response */}
              <div className="flex-1 p-8 flex flex-col">
                <h3 className="text-sky-900 text-xl font-semibold mb-6">Response</h3>

                <div className="flex items-center gap-8 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-500 text-sm font-normal">Status:</span>
                    <span className="text-green-600 text-sm font-semibold">200 OK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-stone-500 text-sm font-normal">Time:</span>
                    <span className="text-sky-900 text-sm font-semibold">142ms</span>
                  </div>
                </div>

                <div className="bg-[#111] rounded-lg p-4 outline outline-1 outline-neutral-700 h-40">
                  <pre className="text-zinc-100 font-mono text-xs leading-5 overflow-x-auto h-full">
                    <code>{`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "def502004b8c..."
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* AI Assistant */}
          <div className="mt-12 w-full max-w-[1360px] mx-auto bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-fuchsia-700 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-fuchsia-700" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 6.908V6a1 1 0 011-1h10a1 1 0 011 1v.908a3.62 3.62 0 012.392 3.39V15a1 1 0 01-1 1h-1a1 1 0 01-1-1v-.908a3.62 3.62 0 01-2.392-3.39V6.908zM10 8a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd"></path></svg>
              <h3 className="text-fuchsia-700 text-base font-semibold">AI Assistant</h3>
            </div>

            <div className="bg-neutral-100 rounded-lg p-4 mb-6">
              <p className="text-zinc-800 text-sm sm:text-base font-normal leading-6">
                Hi! I can help you write code snippets, explain API responses, or assist with integration. Try asking: "Write me a Python snippet<br className="hidden sm:block" />for authentication"
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Ask me anything about the APIs..."
                className="w-full bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 py-3 px-4 text-neutral-800 text-sm font-normal placeholder:text-neutral-500 focus:outline-fuchsia-700 focus:outline-2"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#9c27b0]/80 hover:bg-fuchsia-800 rounded-md flex items-center justify-center text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 4: SDK DOWNLOADS
          ========================================================= */}
      <section className="w-full bg-sky-50 py-20 px-4 sm:px-8 lg:px-[108px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-[32px] font-semibold text-sky-900 tracking-tight mb-4">
              SDK Downloads
            </h2>
            <p className="text-stone-500 text-lg">
              Official SDKs and infrastructure tools for seamless integration
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-sky-900 text-xl font-semibold text-center mb-12">Language SDKs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[76px] gap-y-12 justify-center max-w-[1300px] mx-auto">
              {[
                { name: "Python", version: "v2.1.4", badges: ["Cloud", "On-prem", "Hybrid"], gradient: "from-cyan-700 to-yellow-300", iconColor: "text-white", iconFont: "Font_Awesome_5_Brands" },
                { name: "Node.js", version: "v3.0.2", badges: ["Cloud", "On-prem", "Hybrid"], gradient: "from-yellow-400 to-zinc-800", iconColor: "text-white", iconFont: "Font_Awesome_5_Brands" },
                { name: "Java", version: "v1.8.9", badges: ["Cloud", "On-prem"], gradient: "from-amber-500 to-slate-500", iconColor: "text-white", iconFont: "Font_Awesome_5_Brands" },
                { name: "Go", version: "v1.2.3", badges: ["Cloud", "Hybrid"], gradient: "from-cyan-500 to-white", iconColor: "text-zinc-800", iconFont: "Font_Awesome_5_Free" },
                { name: ".NET", version: "v2.0.1", badges: ["Cloud", "Hybrid"], gradient: "from-indigo-700 to-green-700", iconColor: "text-white", iconFont: "Font_Awesome_5_Free" },
                { name: "PHP", version: "v1.5.8", badges: ["Cloud", "Hybrid"], gradient: "from-slate-500 to-slate-400", iconColor: "text-white", iconFont: "Font_Awesome_5_Brands" },
                { name: "Ruby", version: "v1.3.2", badges: ["Cloud", "On-prem"], gradient: "from-red-600 to-red-900", iconColor: "text-white", iconFont: "Font_Awesome_5_Free" }
              ].map((sdk, idx) => (
                <div key={idx} className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col justify-between h-56 w-full max-w-96 mx-auto shadow-sm">
                  <div className="flex justify-between items-center gap-4 mt-2">
                    <div className={`w-14 h-14 shrink-0 bg-gradient-to-br ${sdk.gradient} rounded-xl flex items-center justify-center`}>
                      <div className={`text-3xl font-normal ${sdk.iconColor} ${sdk.iconFont === 'Font_Awesome_5_Free' ? "font-['Font_Awesome_5_Free'] font-black" : "font-['Font_Awesome_5_Brands']"} leading-none`}></div>
                    </div>
                    <div className="flex flex-wrap justify-end gap-3">
                      {sdk.badges.map(b => (
                        <div key={b} className="bg-white rounded-sm outline outline-1 outline-offset-[-1px] outline-sky-900 px-2 sm:px-3 h-10 flex items-center justify-center">
                          <span className="text-sky-900 text-xs font-semibold uppercase leading-none tracking-wide">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-end gap-4 mb-2">
                    <div className="flex items-baseline gap-3 pb-2">
                      <h4 className="text-sky-900 text-lg font-semibold leading-none">{sdk.name} SDK</h4>
                      <span className="text-sky-900 text-sm font-semibold leading-none">{sdk.version}</span>
                    </div>
                    <button className="bg-sky-900 hover:bg-sky-800 text-white rounded-lg w-36 h-12 flex items-center justify-center gap-2 transition-colors shrink-0">
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span className="text-sm font-semibold leading-tight text-left">Download<br />SDK</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-sky-900 text-xl font-semibold text-center mb-12">Infrastructure Tools</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[103px] justify-center max-w-[1280px] mx-auto">
              {[
                { name: "Docker Images", version: "v2024.12", badges: ["Cloud", "On-prem"], gradient: "from-sky-500 to-sky-500", iconColor: "text-white" },
                { name: "Kubernetes Helm Charts", version: "v1.5.2", badges: ["Cloud", "Hybrid"], gradient: "from-blue-600 to-white", iconColor: "text-zinc-800" }
              ].map((tool, idx) => (
                <div key={idx} className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 sm:px-8 flex items-center justify-between h-40 w-full max-w-[589px] mx-auto shadow-sm gap-4">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 shrink-0 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center`}>
                      <div className={`text-3xl font-black font-['Font_Awesome_5_Free'] ${tool.iconColor} leading-none`}></div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sky-900 text-lg font-semibold leading-none">{tool.name}</h4>
                      <span className="text-sky-900 text-sm font-semibold leading-none">{tool.version}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-end gap-3">
                    {tool.badges.map(b => (
                      <div key={b} className="bg-white rounded-sm outline outline-1 outline-offset-[-1px] outline-sky-900 px-3 h-10 flex items-center justify-center">
                        <span className="text-sky-900 text-xs font-semibold uppercase leading-none tracking-wide">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: CODE SAMPLES & TEMPLATES
          ========================================================= */}
      <section className="w-full bg-fuchsia-50 py-20 px-4 sm:px-8 lg:px-[108px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-[32px] font-semibold text-sky-900 tracking-tight mb-4">
              Code Samples & Templates
            </h2>
            <p className="text-stone-500 text-lg">
              Ready-to-use code examples and deployable templates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center max-w-[1300px] mx-auto">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
              {/* Authentication */}
              <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col w-full shadow-sm">
                <h3 className="text-sky-900 text-xl font-semibold leading-8 mb-6">Authentication</h3>
                <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col flex-1">
                  <h4 className="text-sky-900 text-base font-semibold leading-6 mb-4">OAuth 2.0 Flow</h4>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex gap-2">
                      <button className="h-8 w-20 bg-cyan-600 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-xs font-semibold leading-none">Copy</span>
                      </button>
                      <button className="h-8 w-40 bg-sky-900 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-sm font-semibold leading-none">Run in Sandbox</span>
                      </button>
                    </div>
                    <button className="h-8 w-20 bg-zinc-900 rounded-sm flex items-center justify-center transition-opacity hover:opacity-90">
                      <span className="text-white text-xs font-normal leading-none">GitHub</span>
                    </button>
                  </div>
                  <div className="bg-neutral-900 rounded-lg p-4 w-full h-[320px] overflow-hidden flex flex-col">
                    <pre className="text-zinc-100 text-xs font-normal font-['Inter'] leading-5 whitespace-pre-wrap overflow-y-auto w-full pr-2 pb-2 scrollbar-thin scrollbar-thumb-neutral-700">
                      {`# OAuth 2.0 Authentication Flow
import requests
from urllib.parse import urlencode

def get_access_token(client_id, client_secret, code):
    url = "https://api.zws.com/oauth/token"
    data = {
        "grant_type": "authorization_code",
        "client_id": client_id,
        "client_secret": client_secret,
        "code": code
    }
    response = requests.post(url, data=data)
    return response.json()["access_token"]`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Cloud Integrations */}
              <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col w-full shadow-sm">
                <h3 className="text-sky-900 text-xl font-semibold leading-8 mb-6">Cloud Integrations</h3>
                <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col flex-1">
                  <h4 className="text-sky-900 text-base font-semibold leading-6 mb-4">Multi-Cloud Deployment</h4>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex gap-2">
                      <button className="h-8 w-20 bg-cyan-600 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-xs font-semibold leading-none">Copy</span>
                      </button>
                      <button className="h-8 w-40 bg-sky-900 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-sm font-semibold leading-none">Run in Sandbox</span>
                      </button>
                    </div>
                    <button className="h-8 w-20 bg-zinc-900 rounded-sm flex items-center justify-center transition-opacity hover:opacity-90">
                      <span className="text-white text-xs font-normal leading-none">GitHub</span>
                    </button>
                  </div>
                  <div className="bg-neutral-900 rounded-lg p-4 w-full h-[224px] overflow-hidden flex flex-col">
                    <pre className="text-zinc-100 text-xs font-normal font-['Inter'] leading-5 whitespace-pre-wrap overflow-y-auto w-full pr-2 pb-2 scrollbar-thin scrollbar-thumb-neutral-700">
                      {`# Multi-Cloud Deployment
import requests

def deploy_to_cloud(app_config, target_cloud, api_key):
    url = f"https://api.zws.com/v1/cloud/deploy/{target_cloud}"
    headers = {"Authorization": f"Bearer {api_key}"}
    
    response = requests.post(url, json=app_config, headers=headers)
    return response.json()["deployment_id"]`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
              {/* Compliance APIs */}
              <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col w-full shadow-sm">
                <h3 className="text-sky-900 text-xl font-semibold leading-8 mb-6">Compliance APIs</h3>
                <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col flex-1">
                  <h4 className="text-sky-900 text-base font-semibold leading-6 mb-4">GDPR Data Export</h4>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex gap-2">
                      <button className="h-8 w-20 bg-cyan-600 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-xs font-semibold leading-none">Copy</span>
                      </button>
                      <button className="h-8 w-40 bg-sky-900 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-sm font-semibold leading-none">Run in Sandbox</span>
                      </button>
                    </div>
                    <button className="h-8 w-20 bg-zinc-900 rounded-sm flex items-center justify-center transition-opacity hover:opacity-90">
                      <span className="text-white text-xs font-normal leading-none">GitHub</span>
                    </button>
                  </div>
                  <div className="bg-neutral-900 rounded-lg p-4 w-full h-[240px] overflow-hidden flex flex-col">
                    <pre className="text-zinc-100 text-xs font-normal font-['Inter'] leading-5 whitespace-pre-wrap overflow-y-auto w-full pr-2 pb-2 scrollbar-thin scrollbar-thumb-neutral-700">
                      {`# GDPR Data Export
import requests

def export_user_data(user_id, api_key):
    url = f"https://api.zws.com/v1/compliance/gdpr/export"
    headers = {"Authorization": f"Bearer {api_key}"}
    payload = {"user_id": user_id}
    
    response = requests.post(url, json=payload, headers=headers)
    return response.json()["export_url"]`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Payments */}
              <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col w-full shadow-sm">
                <h3 className="text-sky-900 text-xl font-semibold leading-8 mb-6">Payments</h3>
                <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col flex-1">
                  <h4 className="text-sky-900 text-base font-semibold leading-6 mb-4">Payment Processing</h4>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex gap-2">
                      <button className="h-8 w-20 bg-cyan-600 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-xs font-semibold leading-none">Copy</span>
                      </button>
                      <button className="h-8 w-40 bg-sky-900 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-sm font-semibold leading-none">Run in Sandbox</span>
                      </button>
                    </div>
                    <button className="h-8 w-20 bg-zinc-900 rounded-sm flex items-center justify-center transition-opacity hover:opacity-90">
                      <span className="text-white text-xs font-normal leading-none">GitHub</span>
                    </button>
                  </div>
                  <div className="bg-neutral-900 rounded-lg p-4 w-full h-[224px] overflow-hidden flex flex-col">
                    <pre className="text-zinc-100 text-xs font-normal font-['Inter'] leading-5 whitespace-pre-wrap overflow-y-auto w-full pr-2 pb-2 scrollbar-thin scrollbar-thumb-neutral-700">
                      {`# Payment Processing
import requests

def process_payment(payment_data, api_key):
    url = "https://api.zws.com/v1/payments/process"
    headers = {"Authorization": f"Bearer {api_key}"}
    
    response = requests.post(url, json=payment_data, headers=headers)
    return response.json()["transaction_id"]`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
              {/* AI Models */}
              <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col w-full shadow-sm">
                <h3 className="text-sky-900 text-xl font-semibold leading-8 mb-6">AI Models</h3>
                <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col flex-1">
                  <h4 className="text-sky-900 text-base font-semibold leading-6 mb-4">Fraud Detection API</h4>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex gap-2">
                      <button className="h-8 w-20 bg-cyan-600 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-xs font-semibold leading-none">Copy</span>
                      </button>
                      <button className="h-8 w-40 bg-sky-900 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                        <span className="text-white text-sm font-semibold leading-none">Run in Sandbox</span>
                      </button>
                    </div>
                    <button className="h-8 w-20 bg-zinc-900 rounded-sm flex items-center justify-center transition-opacity hover:opacity-90">
                      <span className="text-white text-xs font-normal leading-none">GitHub</span>
                    </button>
                  </div>
                  <div className="bg-neutral-900 rounded-lg p-4 w-full h-[224px] overflow-hidden flex flex-col">
                    <pre className="text-zinc-100 text-xs font-normal font-['Inter'] leading-5 whitespace-pre-wrap overflow-y-auto w-full pr-2 pb-2 scrollbar-thin scrollbar-thumb-neutral-700">
                      {`# AI Fraud Detection
import requests

def detect_fraud(transaction_data, api_key):
    url = "https://api.zws.com/v1/ai/fraud-detection"
    headers = {"Authorization": f"Bearer {api_key}"}
    
    response = requests.post(url, json=transaction_data, headers=headers)
    return response.json()["risk_score"]`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Deployable Templates */}
              <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col w-full shadow-sm h-full">
                <h3 className="text-sky-900 text-xl font-semibold leading-8 mb-6">Deployable Templates</h3>
                <div className="flex flex-col gap-4 flex-1">
                  {/* Template 1 */}
                  <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col justify-between min-h-[224px]">
                    <div>
                      <h4 className="text-sky-900 text-base font-semibold leading-6 mb-2">Microservices Starter</h4>
                      <p className="text-stone-500 text-base font-normal leading-6 mb-6">
                        Complete microservices architecture with ZWS integration
                      </p>
                    </div>
                    <button className="w-56 h-9 bg-fuchsia-700 rounded-lg flex items-center justify-center transition-colors hover:bg-fuchsia-800">
                      <span className="text-white text-base font-semibold font-['Inter']">Deploy to Sandbox</span>
                    </button>
                  </div>

                  {/* Template 2 */}
                  <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col justify-between min-h-[192px]">
                    <div>
                      <h4 className="text-sky-900 text-base font-semibold leading-6 mb-2">E-commerce Backend</h4>
                      <p className="text-stone-500 text-base font-normal leading-6 mb-6">
                        Full e-commerce backend with payment and inventory APIs
                      </p>
                    </div>
                    <button className="w-56 h-9 bg-fuchsia-700 rounded-lg flex items-center justify-center transition-colors hover:bg-fuchsia-800">
                      <span className="text-white text-base font-semibold font-['Inter']">Deploy to Sandbox</span>
                    </button>
                  </div>

                  {/* Template 3 */}
                  <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 flex flex-col justify-between min-h-[224px]">
                    <div>
                      <h4 className="text-sky-900 text-base font-semibold leading-6 mb-2">Healthcare Portal</h4>
                      <p className="text-stone-500 text-base font-normal leading-6 mb-6">
                        HIPAA-compliant patient management system with telemedicine features
                      </p>
                    </div>
                    <button className="w-56 h-9 bg-fuchsia-700 rounded-lg flex items-center justify-center transition-colors hover:bg-fuchsia-800">
                      <span className="text-white text-base font-semibold font-['Inter']">Deploy to Sandbox</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: VERSION UPDATES & CHANGELOG
          ========================================================= */}
      <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-[108px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-[32px] font-semibold text-sky-900 tracking-tight mb-4">
              Version Updates & Changelog
            </h2>
            <p className="text-sky-900 text-lg font-semibold mb-8">
              Stay Updated
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="h-8 px-4 bg-neutral-100 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 flex items-center justify-center transition-colors hover:bg-neutral-200">
                <svg className="w-3.5 h-3.5 text-black mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
                <span className="text-black text-sm font-normal tracking-wide">RSS Feed</span>
              </button>
              <button className="h-8 px-4 bg-neutral-100 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 flex items-center justify-center transition-colors hover:bg-neutral-200">
                <span className="text-black text-sm font-normal tracking-wide">Email Updates</span>
              </button>
              <button className="h-8 px-4 bg-neutral-100 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 flex items-center justify-center transition-colors hover:bg-neutral-200">
                <span className="text-black text-sm font-normal tracking-wide">Slack</span>
              </button>
              <button className="h-8 px-4 bg-neutral-100 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 flex items-center justify-center transition-colors hover:bg-neutral-200">
                <span className="text-black text-sm font-normal tracking-wide">Webhooks</span>
              </button>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-12 w-full max-w-[800px] mx-auto">
            {/* The vertical timeline line */}
            <div className="absolute left-[15px] sm:left-[23px] top-6 bottom-0 w-0.5 bg-neutral-200"></div>

            <div className="flex flex-col gap-8">
              {/* Item 1 */}
              <div className="relative">
                {/* Node */}
                <div className="absolute -left-[24px] sm:-left-[32px] top-7 sm:top-9 w-4 h-4 rounded-full bg-green-600 border-[3px] border-white shadow-[0_0_0_3px_rgba(224,224,224,1)] z-10"></div>

                {/* Card */}
                <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
                    <h3 className="text-sky-900 text-lg font-semibold leading-7">v2.1.4 - December 15, 2024</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-600 text-white text-[10px] sm:text-xs font-semibold uppercase px-2 rounded-sm h-6 flex items-center">New Feature</span>
                      <span className="bg-yellow-400 text-zinc-800 text-[10px] sm:text-xs font-semibold uppercase px-2 rounded-sm h-6 flex items-center">Security Patch</span>
                    </div>
                  </div>
                  <p className="text-stone-500 text-sm sm:text-base font-normal leading-6 mb-6">
                    Added GraphQL API support with real-time subscriptions. Enhanced authentication with MFA support.
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">GraphQL endpoint at /graphql with full schema introspection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">Multi-factor authentication for enhanced security</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">Performance improvements for data processing APIs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">New webhook events for real-time notifications</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute -left-[24px] sm:-left-[32px] top-7 sm:top-9 w-4 h-4 rounded-full bg-sky-900 border-[3px] border-white shadow-[0_0_0_3px_rgba(224,224,224,1)] z-10"></div>
                <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
                    <h3 className="text-sky-900 text-lg font-semibold leading-7">v2.1.3 - December 1, 2024</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-500 text-white text-[10px] sm:text-xs font-semibold uppercase px-2 rounded-sm h-6 flex items-center">Breaking Change</span>
                      <span className="bg-yellow-400 text-zinc-800 text-[10px] sm:text-xs font-semibold uppercase px-2 rounded-sm h-6 flex items-center">Deprecation Notice</span>
                    </div>
                  </div>
                  <p className="text-stone-500 text-sm sm:text-base font-normal leading-6 mb-6">
                    Deprecated v1 authentication endpoints. Migration guide available.
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">⚠️ /v1/auth/* endpoints deprecated (removal: March 2025)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">New /v2/auth/* endpoints with improved security</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">Automatic migration tool available in developer dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">Backward compatibility maintained until March 2025</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute -left-[24px] sm:-left-[32px] top-7 sm:top-9 w-4 h-4 rounded-full bg-sky-900 border-[3px] border-white shadow-[0_0_0_3px_rgba(224,224,224,1)] z-10"></div>
                <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
                    <h3 className="text-sky-900 text-lg font-semibold leading-7">v2.1.2 - November 20, 2024</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-cyan-600 text-white text-[10px] sm:text-xs font-semibold uppercase px-2 rounded-sm h-6 flex items-center">Bug Fix</span>
                    </div>
                  </div>
                  <p className="text-stone-500 text-sm sm:text-base font-normal leading-6 mb-6">
                    Fixed rate limiting issues and improved error responses.
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">Resolved intermittent rate limiting false positives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">Enhanced error messages with actionable guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">Improved API response time by 15%</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative">
                <div className="absolute -left-[24px] sm:-left-[32px] top-7 sm:top-9 w-4 h-4 rounded-full bg-sky-900 border-[3px] border-white shadow-[0_0_0_3px_rgba(224,224,224,1)] z-10"></div>
                <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
                    <h3 className="text-sky-900 text-lg font-semibold leading-7">v2.1.1 - November 10, 2024</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-600 text-white text-[10px] sm:text-xs font-semibold uppercase px-2 rounded-sm h-6 flex items-center">New Feature</span>
                    </div>
                  </div>
                  <p className="text-stone-500 text-sm sm:text-base font-normal leading-6 mb-6">
                    Added support for batch operations and improved SDK performance.
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">Batch API endpoints for bulk operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">SDK performance improvements across all languages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-fuchsia-700 text-base font-semibold mt-0.5">•</span>
                      <span className="text-stone-500 text-sm sm:text-base font-normal leading-6">New monitoring and analytics dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: READY TO TRANSFORM (CONTACT SUPPORT)
          ========================================================= */}
      <section className="w-full bg-zinc-100 dark:bg-gray-950 py-20 px-6 sm:px-12 lg:px-[108px] transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="flex flex-col gap-12 pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-[34px]">
              <h2 className="text-zinc-800 dark:text-white text-xl lg:text-[32px] font-bold leading-8 lg:leading-9">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-neutral-600 dark:text-gray-400 text-base lg:text-lg font-normal leading-7">
                Connect with our global team of experts to discuss your digital<br className="hidden lg:block" />transformation journey and discover how we can accelerate your<br className="hidden lg:block" />success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">Email Us</h4>
                  <a href="mailto:hello@zws.com" className="text-zinc-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-sky-400 transition-colors">hello@zws.com</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">Response within 4 hours</span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">Call Us</h4>
                  <a href="tel:+15551234567" className="text-zinc-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-sky-400 transition-colors">+1 (555) 123-4567</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">24/7 Support Available</span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-sky-900 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">Live Chat</h4>
                  <span className="text-zinc-400 text-sm lg:text-base font-normal leading-6">Instant Support</span>
                  <div className="flex items-center gap-2 mt-0 lg:mt-1">
                    <span className="text-zinc-500 text-xs lg:text-sm font-normal leading-6">Online now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-[20px] p-8 md:p-10 border border-neutral-400 dark:border-gray-700 w-full lg:max-w-[572px] lg:ml-auto shadow-xl">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Full Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-800 rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-sky-500 focus:border-transparent transition-all text-zinc-800 dark:text-white"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Business Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-800 rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-sky-500 focus:border-transparent transition-all text-zinc-800 dark:text-white"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Company</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-800 rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-sky-500 focus:border-transparent transition-all text-zinc-800 dark:text-white"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Service Interest</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-800 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-sky-500 focus:border-transparent transition-all">
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">Select a service</option>
                    <option value="api">API Integration</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="compliance">Security & Compliance</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Project Budget</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-800 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-sky-500 focus:border-transparent transition-all">
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">Select budget range</option>
                    <option value="small">Under $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="large">$50,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Project Details</label>
                <textarea
                  className="w-full h-28 p-4 bg-neutral-100 dark:bg-gray-800 rounded-lg border border-stone-300 dark:border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-sky-500 focus:border-transparent transition-all text-zinc-800 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-56 h-14 self-start bg-gradient-to-r from-fuchsia-700 to-sky-900 hover:from-fuchsia-800 hover:to-sky-950 text-white text-base font-semibold rounded-xl transition-all"
              >
                Start Your Project
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
