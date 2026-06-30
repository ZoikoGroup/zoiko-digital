import React from "react";

export default function WebinarsAndEvents() {
  return (
    <div className="w-full bg-white text-zinc-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================
          SECTION 1: HERO HEADER
          ========================================================= */}
      <section className="relative w-full bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 text-white py-24 px-6 sm:px-12 lg:px-[108px] overflow-hidden flex flex-col items-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-96 h-96 bg-white/30 rounded-full blur-[100px] opacity-60"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center w-full">
          {/* Notification Pill */}
          <div className="bg-rose-500 rounded-full px-6 py-2 shadow-[0px_4px_15px_0px_rgba(255,71,87,0.30)] mb-10">
            <span className="text-white text-sm sm:text-base font-medium">Limited Seats Remaining for Global AI Summit 2025</span>
          </div>

          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight sm:leading-[102.40px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-0">
            Learn. Connect. Lead.
          </h1>
          <p className="opacity-90 text-center text-white text-xl font-light leading-8 mb-12 max-w-4xl -mt-2">
            Featuring Fortune 500 leaders, global innovators, and ZOIKO DIGITAL experts live and on demand
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-[5px] outline outline-1 outline-offset-[-1px] outline-white/20 rounded-2xl py-8 px-6 sm:px-12 mb-16 max-w-[800px] w-full min-h-[208px] flex flex-col items-center justify-center shadow-lg">
            <h3 className="opacity-90 text-white text-base font-normal leading-7 mb-6">
              Next Flagship Event Starts In:
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="flex flex-col items-center bg-white/20 rounded-xl w-20 h-24 justify-center">
                <span className="text-white text-4xl font-bold leading-10">12</span>
                <span className="opacity-80 text-white text-sm font-normal leading-6 mt-1">Days</span>
              </div>
              <span className="opacity-60 text-white text-3xl font-bold leading-[51.20px] hidden sm:block pb-6">:</span>
              <div className="flex flex-col items-center bg-white/20 rounded-xl w-20 h-24 justify-center">
                <span className="text-white text-4xl font-bold leading-10">08</span>
                <span className="opacity-80 text-white text-sm font-normal leading-6 mt-1">Hours</span>
              </div>
              <span className="opacity-60 text-white text-3xl font-bold leading-[51.20px] hidden sm:block pb-6">:</span>
              <div className="flex flex-col items-center bg-white/20 rounded-xl w-20 h-24 justify-center">
                <span className="text-white text-4xl font-bold leading-10">45</span>
                <span className="opacity-80 text-white text-sm font-normal leading-6 mt-1">Minutes</span>
              </div>
              <span className="opacity-60 text-white text-3xl font-bold leading-[51.20px] hidden sm:block pb-6">:</span>
              <div className="flex flex-col items-center bg-white/20 rounded-xl w-24 h-24 justify-center">
                <span className="text-white text-4xl font-bold leading-10">30</span>
                <span className="opacity-80 text-white text-sm font-normal leading-6 mt-1">Seconds</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <button className="w-full sm:w-auto bg-white text-sky-900 hover:bg-neutral-100 text-base font-bold py-4 px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1">
              Reserve Your Seat Today
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 text-base font-bold py-4 px-8 rounded-xl transition-colors">
              Watch On-Demand Library
            </button>
          </div>
        </div>
      </section>

      {/* Hero Bottom Bar */}
      <div className="w-full bg-sky-900 shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.10)] py-5 px-6 sm:px-12 lg:px-[108px] flex flex-col md:flex-row justify-between items-center gap-4 border-b border-sky-800 dark:bg-gray-950 dark:border-gray-800">
        <div>
          <h3 className="text-white text-lg font-bold">Reserve Your Virtual Seat</h3>
          <p className="text-white/80 text-sm">Limited Seats Available for Upcoming Events</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button className="bg-[#207373] hover:bg-[#1a5e5e] text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors w-full sm:w-auto">
            Reserve Seat Now
          </button>
          <button className="border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto">
            Subscribe for Updates
          </button>
        </div>
      </div>

      {/* =========================================================
          SECTION 2: UPCOMING WEBINARS
          ========================================================= */}
      <section className="w-full bg-fuchsia-50 dark:bg-gray-900/40 py-20 px-4 sm:px-8 lg:px-[108px] transition-colors relative">
        <div className="max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-sky-900 dark:text-teal-400 text-2xl sm:text-[32px] font-bold leading-[64px] mb-2">
              Upcoming Webinars
            </h2>
            <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-7 max-w-2xl mx-auto">
              Join industry leaders and experts in live sessions tailored to your role
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-700 px-[17px] h-12 flex items-center shadow-sm">
              <span className="text-zinc-800 dark:text-gray-200 text-base font-normal leading-6">Times shown in your timezone:&nbsp;</span>
              <span className="text-zinc-800 dark:text-white text-base font-bold leading-6">EST</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-sky-900 dark:text-teal-400 text-base font-bold leading-6">Recommended for:</span>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="h-8 px-[18px] bg-[#207373] text-white rounded-[20px] text-sm font-normal flex items-center justify-center transition-opacity hover:opacity-90">CIOs</button>
                <button className="h-8 px-[16px] bg-white dark:bg-gray-800 text-black dark:text-white rounded-[20px] outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 text-sm font-normal flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors">Developers</button>
                <button className="h-8 px-[14px] bg-white dark:bg-gray-800 text-black dark:text-white rounded-[20px] outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 text-sm font-normal flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors">Compliance Leaders</button>
                <button className="h-8 px-[17px] bg-white dark:bg-gray-800 text-black dark:text-white rounded-[20px] outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 text-sm font-normal flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors">All Roles</button>
              </div>
            </div>
          </div>

          {/* Cards Grid - 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-start">
            
            {/* Left Column */}
            <div className="flex flex-col gap-8 w-full max-w-[484px] mx-auto">
               
               {/* Card 1 */}
               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_12px_40px_0px_rgba(144,80,159,0.20)] dark:shadow-black/40 flex flex-col relative w-full h-auto min-h-[533px] p-[34px] overflow-hidden group border border-transparent dark:border-gray-700">
                 <div className="absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-1 bg-gradient-to-b from-fuchsia-700 to-sky-900 rounded-tl-2xl rounded-tr-2xl"></div>
                 
                 <div className="flex justify-between items-start mb-5 relative z-10">
                   <div className="bg-[#207373] rounded-lg w-14 h-16 flex flex-col items-center justify-center text-white">
                     <span className="opacity-90 text-xs font-bold leading-5 mt-1">JAN</span>
                     <span className="text-xl font-bold leading-6 mt-[-2px]">28</span>
                   </div>
                   <div className="text-right">
                     <div className="text-sky-900 dark:text-teal-400 text-base font-bold leading-7">2:00 PM EST</div>
                     <div className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6">90 min</div>
                   </div>
                 </div>

                 <h3 className="text-sky-900 dark:text-white text-xl font-bold leading-9 mb-[16px] pr-2 relative z-10">
                   AI Strategy for Enterprise Leaders
                 </h3>
                 <p className="text-zinc-800 dark:text-gray-300 text-sm font-normal leading-6 mb-[28px] relative z-10">
                   Transform your organization with practical AI implementation strategies from Fortune 500 CIOs
                 </p>

                 <div className="w-full max-w-[384px] h-[112px] bg-white dark:bg-gray-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-700 flex items-center px-[17px] gap-[20px] mb-[30px] relative z-10">
                   <div className="w-14 h-14 rounded-full border-[3px] border-[#207373] shrink-0 bg-neutral-200 dark:bg-gray-700"></div>
                   <div className="flex flex-col justify-center">
                     <span className="text-sky-900 dark:text-teal-400 text-base font-bold leading-6">John Smith</span>
                     <span className="text-stone-500 dark:text-gray-400 text-sm font-bold leading-6">CIO, Global Tech Corp</span>
                   </div>
                 </div>

                 <div className="flex flex-wrap gap-2 mb-[24px] relative z-10">
                   <span className="bg-[#207373] text-white text-xs font-medium px-3 h-7 flex items-center rounded-xl">AI Strategy</span>
                   <span className="bg-[#207373] text-white text-xs font-medium px-3 h-7 flex items-center rounded-xl">Leadership</span>
                   <span className="bg-[#207373] text-white text-xs font-medium px-3 h-7 flex items-center rounded-xl">Digital Transformation</span>
                 </div>

                 <button className="w-full max-w-[384px] h-9 bg-[#207373] hover:opacity-90 text-white text-base font-bold rounded-lg transition-opacity mb-4 flex items-center justify-center relative z-10">
                   Register Free
                 </button>

                 <div className="w-full max-w-[384px] flex items-center justify-center gap-[11.5px] mt-auto pb-[2px] relative z-10">
                   <button className="w-20 h-7 bg-white dark:bg-gray-700 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 text-black dark:text-white text-xs font-normal flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">Google</button>
                   <button className="w-20 h-7 bg-white dark:bg-gray-700 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 text-black dark:text-white text-xs font-normal flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">Outlook</button>
                   <button className="w-16 h-7 bg-white dark:bg-gray-700 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 text-black dark:text-white text-xs font-semibold flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">iCal</button>
                 </div>
               </div>

               {/* Card 3 (Below Card 1) */}
               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/40 flex flex-col relative w-full h-auto min-h-[533px] p-[34px] border border-transparent dark:border-gray-700 group">
                 <div className="flex justify-between items-start mb-5">
                   <div className="bg-[#207373] rounded-lg w-14 h-16 flex flex-col items-center justify-center text-white">
                     <span className="opacity-90 text-xs font-bold leading-5 mt-1">FEB</span>
                     <span className="text-2xl font-bold leading-6 mt-[-2px]">12</span>
                   </div>
                   <div className="text-right">
                     <div className="text-sky-900 dark:text-teal-400 text-base font-bold leading-7">3:00 PM EST</div>
                     <div className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6">75 min</div>
                   </div>
                 </div>

                 <h3 className="text-sky-900 dark:text-white text-xl font-bold leading-9 mb-[16px] pr-2">
                   Compliance Automation in 2025
                 </h3>
                 <p className="text-zinc-800 dark:text-gray-300 text-sm font-normal leading-6 mb-[28px]">
                   Navigate evolving regulations with automated compliance frameworks and real-time monitoring
                 </p>

                 <div className="w-full max-w-[384px] h-[112px] bg-white dark:bg-gray-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-700 flex items-center px-[17px] gap-[20px] mb-[30px]">
                   <div className="w-14 h-14 rounded-full border-[3px] border-[#207373] shrink-0 bg-neutral-200 dark:bg-gray-700"></div>
                   <div className="flex flex-col justify-center">
                     <span className="text-sky-900 dark:text-teal-400 text-base font-bold leading-6">Sarah Chen</span>
                     <span className="text-stone-500 dark:text-gray-400 text-sm font-bold leading-6">Director of AI Research, MIT</span>
                   </div>
                 </div>

                 <div className="flex flex-wrap gap-2 mb-[24px]">
                   <span className="bg-[#207373] text-white text-xs font-medium px-3 h-7 flex items-center rounded-xl">Compliance</span>
                   <span className="bg-[#207373] text-white text-xs font-medium px-3 h-7 flex items-center rounded-xl">Automation</span>
                   <span className="bg-[#207373] text-white text-xs font-medium px-3 h-7 flex items-center rounded-xl">Risk Management</span>
                 </div>

                 <button className="w-full max-w-[384px] h-9 bg-[#207373] hover:opacity-90 text-white text-base font-bold rounded-lg transition-opacity mb-4 flex items-center justify-center">
                   Register Free
                 </button>

                 <div className="w-full max-w-[384px] flex items-center justify-center gap-[11.5px] mt-auto pb-[2px]">
                   <button className="w-20 h-7 bg-white dark:bg-gray-700 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 text-black dark:text-white text-xs font-normal flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">Google</button>
                   <button className="w-20 h-7 bg-white dark:bg-gray-700 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 text-black dark:text-white text-xs font-normal flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">Outlook</button>
                   <button className="w-16 h-7 bg-white dark:bg-gray-700 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 text-black dark:text-white text-xs font-semibold flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">iCal</button>
                 </div>
               </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8 w-full max-w-[484px] mx-auto">
               
               {/* Card 2 */}
               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/40 flex flex-col relative w-full h-auto min-h-[533px] p-[34px] border border-transparent dark:border-gray-700 group">
                 <div className="flex justify-between items-start mb-5">
                   <div className="bg-[#207373] rounded-lg w-14 h-16 flex flex-col items-center justify-center text-white">
                     <span className="opacity-90 text-xs font-bold leading-5 mt-1">FEB</span>
                     <span className="text-xl font-bold leading-6 mt-[-2px]">05</span>
                   </div>
                   <div className="text-right">
                     <div className="text-sky-900 dark:text-teal-400 text-lg font-bold leading-7">11:00 AM EST</div>
                     <div className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6">60 min</div>
                   </div>
                 </div>

                 <h3 className="text-sky-900 dark:text-white text-xl font-bold leading-9 mb-[16px] pr-2">
                   Advanced API Integration Patterns
                 </h3>
                 <p className="text-zinc-800 dark:text-gray-300 text-sm font-normal leading-6 mb-[28px]">
                   Master enterprise-grade API design and implementation with hands-on coding examples
                 </p>

                 <div className="w-full max-w-[384px] h-[112px] bg-white dark:bg-gray-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-700 flex items-center px-[17px] gap-[20px] mb-[30px]">
                   <div className="w-14 h-14 rounded-full border-[3px] border-[#207373] shrink-0 bg-neutral-200 dark:bg-gray-700"></div>
                   <div className="flex flex-col justify-center">
                     <span className="text-sky-900 dark:text-teal-400 text-base font-bold leading-6">Maria Johnson</span>
                     <span className="text-stone-500 dark:text-gray-400 text-sm font-bold leading-6">Lead Architect, ZOIKO DIGITAL</span>
                   </div>
                 </div>

                 <div className="flex flex-wrap gap-2 mb-[24px]">
                   <span className="bg-[#207373] text-white text-xs font-medium px-3 h-7 flex items-center rounded-xl">APIs</span>
                   <span className="bg-[#207373] text-white text-xs font-medium px-3 h-7 flex items-center rounded-xl">Development</span>
                   <span className="bg-[#207373] text-white text-xs font-medium px-3 h-7 flex items-center rounded-xl">Integration</span>
                 </div>

                 <button className="w-full max-w-[384px] h-9 bg-[#207373] hover:opacity-90 text-white text-base font-bold rounded-lg transition-opacity mb-4 flex items-center justify-center">
                   Register Free
                 </button>

                 <div className="w-full max-w-[384px] flex items-center justify-center gap-[11.5px] mt-auto pb-[2px]">
                   <button className="w-20 h-7 bg-white dark:bg-gray-700 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 text-black dark:text-white text-xs font-normal flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">Google</button>
                   <button className="w-20 h-7 bg-white dark:bg-gray-700 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 text-black dark:text-white text-xs font-normal flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">Outlook</button>
                   <button className="w-16 h-7 bg-white dark:bg-gray-700 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 text-black dark:text-white text-xs font-semibold flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">iCal</button>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: ON-DEMAND KNOWLEDGE HUB
          ========================================================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-20 px-4 sm:px-8 lg:px-[108px] transition-colors relative">
        <div className="max-w-[1160px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-sky-900 dark:text-teal-400 text-2xl sm:text-[32px] font-bold leading-[64px] mb-2">
              On-Demand Knowledge Hub
            </h2>
            <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-7 max-w-2xl mx-auto">
              Access our complete library of expert sessions anytime, anywhere
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-[600px] h-14 bg-white dark:bg-gray-800 rounded-xl outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 flex items-center px-[52px] relative overflow-hidden transition-all focus-within:outline-sky-900 dark:focus-within:outline-teal-500">
               <svg className="absolute left-[18px] top-1/2 -translate-y-1/2 w-6 h-6 text-stone-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
               <input type="text" placeholder="Search topics, speakers, or keywords..." className="w-full h-full text-neutral-500 dark:text-gray-200 text-lg font-normal bg-transparent outline-none border-none focus:ring-0" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-[70px]">
            <div className="w-full sm:w-48 h-11 bg-white dark:bg-gray-800 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 flex items-center justify-center sm:justify-start px-[22px] cursor-pointer hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors">
              <span className="text-black dark:text-gray-200 text-base font-normal leading-4">All Industries</span>
            </div>
            <div className="w-full sm:w-56 h-11 bg-white dark:bg-gray-800 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 flex items-center justify-center sm:justify-start px-[22px] cursor-pointer hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors">
              <span className="text-black dark:text-gray-200 text-base font-normal leading-4">All Solutions</span>
            </div>
            <div className="w-full sm:w-52 h-11 bg-white dark:bg-gray-800 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 flex items-center justify-center sm:justify-start px-[22px] cursor-pointer hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors">
              <span className="text-black dark:text-gray-200 text-base font-normal leading-4">All Roles</span>
            </div>
          </div>

          {/* Editor's Picks */}
          <div className="mb-16">
            <h3 className="text-sky-900 dark:text-white text-2xl font-bold leading-10 mb-6">
              Editor's Picks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/40 border border-transparent dark:border-gray-700 overflow-hidden flex flex-col h-auto sm:h-[531px]">
                <div className="h-48 bg-neutral-400 dark:bg-gray-700 relative shrink-0">
                   <div className="absolute right-[20px] bottom-[15px] bg-black/80 rounded-sm px-2 py-0.5">
                     <span className="text-white text-xs font-normal leading-5">58:42</span>
                   </div>
                </div>
                <div className="px-[26px] pt-[34px] pb-[20px] flex flex-col flex-1">
                  <h4 className="text-sky-900 dark:text-white text-lg font-bold leading-8 mb-1">
                    Building AI-First Organizations
                  </h4>
                  <p className="text-stone-500 dark:text-gray-300 text-sm font-normal leading-6 mb-4">
                    Strategic framework for enterprise AI adoption with real-world implementation examples
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 mt-auto">
                    <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6 truncate pr-2">Dr. Sarah Chen, MIT</span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6">12.4K views</span>
                      <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6">4.8</span>
                    </div>
                  </div>

                  <span className="text-[#207373] dark:text-teal-400 text-sm font-bold leading-6 mb-2">8 chapters</span>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                    <span className="bg-neutral-100 dark:bg-gray-700 rounded-sm px-[6px] py-[1px] text-stone-500 dark:text-gray-300 text-[11px] font-normal leading-4">Introduction</span>
                    <span className="bg-neutral-100 dark:bg-gray-700 rounded-sm px-[6px] py-[1px] text-stone-500 dark:text-gray-300 text-[11px] font-normal leading-4">Strategy Framework</span>
                    <span className="bg-neutral-100 dark:bg-gray-700 rounded-sm px-[6px] py-[1px] text-stone-500 dark:text-gray-300 text-[11px] font-normal leading-4">Implementation</span>
                  </div>
                </div>
                <button className="w-full h-11 bg-sky-900 dark:bg-teal-700 text-white text-base font-bold flex items-center justify-center hover:bg-sky-950 dark:hover:bg-teal-800 transition-colors shrink-0">
                  Watch Now
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/40 border border-transparent dark:border-gray-700 overflow-hidden flex flex-col h-auto sm:h-[531px]">
                <div className="h-48 bg-neutral-400 dark:bg-gray-700 relative shrink-0">
                   <div className="absolute right-[20px] bottom-[15px] bg-black/80 rounded-sm px-2 py-0.5">
                     <span className="text-white text-xs font-normal leading-5">45:20</span>
                   </div>
                </div>
                <div className="px-[26px] pt-[34px] pb-[20px] flex flex-col flex-1">
                  <h4 className="text-sky-900 dark:text-white text-lg font-bold leading-8 mb-1">
                    Zero Trust Security Architecture
                  </h4>
                  <p className="text-stone-500 dark:text-gray-300 text-sm font-normal leading-6 mb-4">
                    Complete guide to implementing zero trust security in enterprise environments
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 mt-auto">
                    <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6 truncate pr-2">Mike Rodriguez, CISO</span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6">8.9K views</span>
                      <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6">4.6</span>
                    </div>
                  </div>

                  <span className="text-[#207373] dark:text-teal-400 text-sm font-bold leading-6 mb-4 sm:mb-0">6 chapters</span>
                </div>
                <button className="w-full h-11 bg-sky-900 dark:bg-teal-700 text-white text-base font-bold flex items-center justify-center hover:bg-sky-950 dark:hover:bg-teal-800 transition-colors shrink-0">
                  Watch Now
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/40 border border-transparent dark:border-gray-700 overflow-hidden flex flex-col h-auto sm:h-[531px]">
                <div className="h-48 bg-neutral-400 dark:bg-gray-700 relative shrink-0">
                   <div className="absolute right-[20px] bottom-[15px] bg-black/80 rounded-sm px-2 py-0.5">
                     <span className="text-white text-xs font-normal leading-5">62:15</span>
                   </div>
                </div>
                <div className="px-[26px] pt-[34px] pb-[20px] flex flex-col flex-1">
                  <h4 className="text-sky-900 dark:text-white text-lg font-bold leading-8 mb-1">
                    Enterprise Cloud Migration Strategies
                  </h4>
                  <p className="text-stone-500 dark:text-gray-300 text-sm font-normal leading-6 mb-4">
                    Best practices for large-scale cloud migrations with minimal disruption
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 mt-auto">
                    <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6 truncate pr-2">Lisa Wang, Cloud Architect</span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6">15.2K views</span>
                      <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6">4.9</span>
                    </div>
                  </div>

                  <span className="text-[#207373] dark:text-teal-400 text-sm font-bold leading-6 mb-4 sm:mb-0">10 chapters</span>
                </div>
                <button className="w-full h-11 bg-sky-900 dark:bg-teal-700 text-white text-base font-bold flex items-center justify-center hover:bg-sky-950 dark:hover:bg-teal-800 transition-colors shrink-0">
                  Watch Now
                </button>
              </div>
            </div>
          </div>

          {/* Most Watched This Month */}
          <div className="mb-16">
            <h3 className="text-sky-900 dark:text-white text-2xl font-bold leading-10 mb-6">
              Most Watched This Month
            </h3>
            <div className="flex flex-col gap-4">
              
              {/* Row 1 */}
              <div className="w-full h-auto min-h-[80px] bg-[#fdf5ff] dark:bg-gray-800 rounded-lg flex flex-col sm:flex-row items-start sm:items-center px-4 py-4 sm:py-0 relative gap-4 shadow-sm border border-fuchsia-50/50 dark:border-gray-700">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-[#207373] dark:text-teal-400 text-lg font-bold min-w-[28px]">#1</span>
                  <div className="w-20 h-11 bg-neutral-200 dark:bg-gray-700 rounded-sm shrink-0 hidden xs:block"></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-sky-900 dark:text-white text-base font-bold leading-6">Digital Transformation ROI Metrics</span>
                    <span className="text-stone-500 dark:text-gray-400 text-xs font-normal leading-5">42:30 • 23.1K views</span>
                  </div>
                </div>
                <button className="w-20 h-7 bg-[#207373] hover:opacity-90 rounded-md text-white text-sm font-normal flex items-center justify-center transition-colors shrink-0 sm:ml-auto">
                  Watch
                </button>
              </div>

              {/* Row 2 */}
              <div className="w-full h-auto min-h-[80px] bg-[#fdf5ff] dark:bg-gray-800 rounded-lg flex flex-col sm:flex-row items-start sm:items-center px-4 py-4 sm:py-0 relative gap-4 shadow-sm border border-fuchsia-50/50 dark:border-gray-700">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-[#207373] dark:text-teal-400 text-lg font-bold min-w-[28px]">#2</span>
                  <div className="w-20 h-11 bg-neutral-200 dark:bg-gray-700 rounded-sm shrink-0 hidden xs:block"></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-sky-900 dark:text-white text-base font-bold leading-6">API Security Best Practices</span>
                    <span className="text-stone-500 dark:text-gray-400 text-xs font-normal leading-5">38:45 • 19.8K views</span>
                  </div>
                </div>
                <button className="w-20 h-7 bg-[#207373] hover:opacity-90 rounded-md text-white text-sm font-normal flex items-center justify-center transition-colors shrink-0 sm:ml-auto">
                  Watch
                </button>
              </div>

              {/* Row 3 */}
              <div className="w-full h-auto min-h-[80px] bg-[#fdf5ff] dark:bg-gray-800 rounded-lg flex flex-col sm:flex-row items-start sm:items-center px-4 py-4 sm:py-0 relative gap-4 shadow-sm border border-fuchsia-50/50 dark:border-gray-700">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-[#207373] dark:text-teal-400 text-lg font-bold min-w-[28px]">#3</span>
                  <div className="w-20 h-11 bg-neutral-200 dark:bg-gray-700 rounded-sm shrink-0 hidden xs:block"></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-sky-900 dark:text-white text-base font-bold leading-6">Machine Learning in Finance</span>
                    <span className="text-stone-500 dark:text-gray-400 text-xs font-normal leading-5">51:20 • 17.4K views</span>
                  </div>
                </div>
                <button className="w-20 h-7 bg-[#207373] hover:opacity-90 rounded-md text-white text-sm font-normal flex items-center justify-center transition-colors shrink-0 sm:ml-auto">
                  Watch
                </button>
              </div>

            </div>
          </div>

          {/* New Releases */}
          <div>
            <h3 className="text-sky-900 dark:text-white text-2xl font-bold leading-10 mb-6">
              New Releases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/25 overflow-hidden border border-transparent dark:border-gray-700 flex flex-col h-44 cursor-pointer hover:shadow-md transition-shadow group">
                <div className="h-28 bg-neutral-400 dark:bg-gray-700 relative shrink-0">
                  <div className="absolute left-2 top-2 w-11 h-6 bg-rose-500 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold leading-4">NEW</span>
                  </div>
                </div>
                <div className="px-4 pt-4 flex flex-col flex-1">
                  <span className="text-sky-900 dark:text-teal-400 text-sm font-bold leading-5 mb-0.5 group-hover:text-sky-700 dark:group-hover:text-teal-300 transition-colors">
                    Future of Work: Remote Team Leadership
                  </span>
                  <span className="text-stone-500 dark:text-gray-400 text-xs font-normal leading-5">
                    Added 2 days ago
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/25 overflow-hidden border border-transparent dark:border-gray-700 flex flex-col h-44 cursor-pointer hover:shadow-md transition-shadow group">
                <div className="h-28 bg-neutral-400 dark:bg-gray-700 relative shrink-0">
                  <div className="absolute left-2 top-2 w-11 h-6 bg-rose-500 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold leading-4">NEW</span>
                  </div>
                </div>
                <div className="px-4 pt-4 flex flex-col flex-1">
                  <span className="text-sky-900 dark:text-teal-400 text-sm font-bold leading-5 mb-0.5 group-hover:text-sky-700 dark:group-hover:text-teal-300 transition-colors">
                    Sustainable Technology Practices
                  </span>
                  <span className="text-stone-500 dark:text-gray-400 text-xs font-normal leading-5">
                    Added 5 days ago
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: FEATURED EVENTS
          ========================================================= */}
      <section className="w-full bg-sky-50 dark:bg-gray-950 py-24 px-4 sm:px-8 lg:px-[108px] transition-colors relative">
        <div className="max-w-[1160px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-sky-900 dark:text-teal-400 text-2xl sm:text-[32px] font-bold leading-[64px] mb-2">
              Featured Events
            </h2>
            <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-7 max-w-2xl mx-auto">
              Join our flagship experiences and industry-leading conferences
            </p>
          </div>

          {/* Main Card */}
          <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_12px_40px_0px_rgba(144,80,159,0.20)] dark:shadow-black/40 border border-transparent dark:border-gray-700 overflow-hidden flex flex-col md:flex-row">
            {/* Left Image Area */}
            <div className="w-full md:w-[500px] h-[384px] relative bg-neutral-800 shrink-0">
               <img src="/images/webin/one.jpg" alt="Event Audience" className="absolute inset-0 w-[500px] h-96 object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-[#207373] text-white text-xs font-bold px-3 py-1.5 rounded-xl w-fit mb-4">
                    Global Summit
                  </div>
                  <h3 className="text-white text-3xl sm:text-[32px] font-bold leading-10 mb-6">
                    Global AI Summit 2025
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white text-[#207373] text-sm font-normal px-3 py-1.5 rounded-xl">March 15-17, 2025</span>
                    <span className="bg-white text-[#207373] text-sm font-normal px-3 py-1.5 rounded-xl">San Francisco, CA</span>
                    <span className="bg-white text-[#207373] text-sm font-normal px-3 py-1.5 rounded-xl">Hybrid Event</span>
                  </div>
               </div>
            </div>
            
            {/* Right Content Area */}
            <div className="flex-1 p-8 md:p-10 flex flex-col">
              <span className="text-stone-500 dark:text-gray-400 text-sm font-normal leading-6 mb-3 block">In Partnership With:</span>
             

              <span className="text-sky-900 dark:text-teal-400 text-lg font-bold leading-7 mb-4 block">Event Tracks:</span>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-neutral-100 dark:bg-gray-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-700 px-4 py-1.5 text-zinc-800 dark:text-gray-200 text-sm font-normal">AI Strategy & Leadership</span>
                <span className="bg-neutral-100 dark:bg-gray-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-700 px-4 py-1.5 text-zinc-800 dark:text-gray-200 text-sm font-normal">Technical Implementation</span>
                <span className="bg-neutral-100 dark:bg-gray-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-700 px-4 py-1.5 text-zinc-800 dark:text-gray-200 text-sm font-normal">Ethics & Governance</span>
                <span className="bg-neutral-100 dark:bg-gray-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-700 px-4 py-1.5 text-zinc-800 dark:text-gray-200 text-sm font-normal">Industry Applications</span>
              </div>

              <div className="flex justify-between items-center mb-8 pr-4">
                <div className="flex flex-col items-center">
                  <span className="text-[#207373] dark:text-teal-400 text-2xl font-bold leading-8">50+</span>
                  <span className="text-stone-500 dark:text-gray-400 text-sm font-normal mt-1">Expert Speakers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#207373] dark:text-teal-400 text-2xl font-bold leading-8">2000+</span>
                  <span className="text-stone-500 dark:text-gray-400 text-sm font-normal mt-1">Expected Attendees</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#207373] dark:text-teal-400 text-3xl font-bold leading-8">3</span>
                  <span className="text-stone-500 dark:text-gray-400 text-sm font-normal mt-1">Days of Content</span>
                </div>
              </div>

              <button className="w-full mt-auto h-10 bg-white dark:bg-gray-700 rounded-lg shadow-sm outline outline-1 outline-offset-[-1px] outline-neutral-200 dark:outline-gray-600 flex items-center justify-center text-sky-900 dark:text-white text-base font-bold hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors">
                Explore Full Agenda
              </button>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
             <button className="w-12 h-12 bg-[#207373] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
             </button>
             <div className="flex items-center gap-2">
               <div className="w-3.5 h-3.5 bg-[#207373] rounded-full"></div>
               <div className="w-3 h-3 bg-zinc-300 dark:bg-gray-700 rounded-full"></div>
             </div>
             <button className="w-12 h-12 bg-[#207373] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
             </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: SPEAKER HIGHLIGHTS
          ========================================================= */}
      <section className="w-full bg-stone-50 dark:bg-gray-900 py-24 px-4 sm:px-8 lg:px-[108px] transition-colors relative">
        <div className="max-w-[1160px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-sky-900 dark:text-teal-400 text-2xl sm:text-[32px] font-bold leading-[64px] mb-2">
              Speaker Highlights
            </h2>
            <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-7 max-w-2xl mx-auto">
              Learn from industry thought leaders and subject matter experts
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            <button className="h-10 px-6 bg-teal-700 text-white rounded-lg font-semibold text-base shadow-sm">
              All Speakers
            </button>
            <button className="h-10 px-6 bg-white dark:bg-gray-800 outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 text-black dark:text-white rounded-lg font-semibold text-base hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors">
              Keynotes
            </button>
            <button className="h-10 px-6 bg-white dark:bg-gray-800 outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 text-black dark:text-white rounded-lg font-semibold text-base hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors">
              Industry Leaders
            </button>
            <button className="h-10 px-6 bg-white dark:bg-gray-800 outline outline-2 outline-offset-[-2px] outline-neutral-200 dark:outline-gray-700 text-black dark:text-white rounded-lg font-semibold text-base hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors">
               ZOIKO DIGITAL Experts
            </button>
          </div>

          {/* Speaker Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/40 border border-transparent dark:border-gray-700 p-[32px] flex flex-col w-full max-w-[384px] h-[511px] relative items-center">
               <div className="w-[56px] h-[56px] rounded-[30px] border-[3px] border-teal-700 shrink-0 bg-neutral-200 dark:bg-gray-700 overflow-hidden absolute top-[32px] left-1/2 -translate-x-1/2 z-10">
               </div>
               
               <div className="w-full border border-neutral-100 dark:border-gray-700 rounded-lg p-4 pt-[44px] flex flex-col relative mt-[28px] h-[264px] shrink-0">
                 <h4 className="text-sky-900 dark:text-white text-xl font-bold leading-8 mb-1 text-center">Dr. Sarah Chen</h4>
                 <p className="text-stone-500 dark:text-gray-400 text-sm font-bold leading-6 mb-3 text-center">Director of AI Research, MIT</p>
                 <p className="text-stone-500 dark:text-gray-300 text-sm font-normal leading-6 text-center line-clamp-3">
                   Leading researcher in enterprise AI applications with 15+ years experience in machine learning and neural networks...
                 </p>
                 <div className="flex flex-wrap gap-2.5 justify-center mt-auto">
                   <span className="bg-neutral-50 dark:bg-gray-900 rounded-xl px-2 py-[3px] text-sky-900 dark:text-teal-400 text-xs font-medium leading-5">Research</span>
                   <span className="bg-neutral-50 dark:bg-gray-900 rounded-xl px-2 py-[3px] text-sky-900 dark:text-teal-400 text-xs font-medium leading-5">AI Strategy</span>
                   <span className="bg-neutral-50 dark:bg-gray-900 rounded-xl px-2 py-[3px] text-sky-900 dark:text-teal-400 text-xs font-medium leading-5">Machine Learning</span>
                 </div>
               </div>

               <div className="w-full mt-auto flex flex-col gap-[10px]">
                 <button className="w-full h-[36px] bg-[#0c4a6e] hover:bg-[#082f49] text-white rounded-md text-sm font-normal flex items-center justify-center transition-colors">
                   Download Bio
                 </button>
                 <button className="w-full h-[36px] bg-[#10b981] hover:bg-[#059669] text-white rounded-md text-sm font-semibold flex items-center justify-center transition-colors">
                   Book 1:1 Session
                 </button>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/40 border border-transparent dark:border-gray-700 p-[32px] flex flex-col w-full max-w-[384px] h-[511px] relative items-center">
               <div className="w-[56px] h-[56px] rounded-[30px] border-[3px] border-teal-700 shrink-0 bg-neutral-200 dark:bg-gray-700 overflow-hidden absolute top-[32px] left-1/2 -translate-x-1/2 z-10">
               </div>
               
               <div className="w-full border border-neutral-100 dark:border-gray-700 rounded-lg p-4 pt-[44px] flex flex-col relative mt-[28px] h-[264px] shrink-0">
                 <h4 className="text-sky-900 dark:text-white text-xl font-bold leading-8 mb-1 text-center">John Smith</h4>
                 <p className="text-stone-500 dark:text-gray-400 text-sm font-bold leading-6 mb-3 text-center">CIO, Global Tech Corp</p>
                 <p className="text-stone-500 dark:text-gray-300 text-sm font-normal leading-6 text-center line-clamp-3">
                   Transformational technology leader with proven track record of scaling enterprise systems for Fortune 500 companies...
                 </p>
                 <div className="flex flex-wrap gap-2.5 justify-center mt-auto">
                   <span className="bg-neutral-50 dark:bg-gray-900 rounded-xl px-2 py-[3px] text-sky-900 dark:text-teal-400 text-xs font-medium leading-5">Digital Transformation</span>
                   <span className="bg-neutral-50 dark:bg-gray-900 rounded-xl px-2 py-[3px] text-sky-900 dark:text-teal-400 text-xs font-medium leading-5">Enterprise Architecture</span>
                   <span className="bg-neutral-50 dark:bg-gray-900 rounded-xl px-2 py-[3px] text-sky-900 dark:text-teal-400 text-xs font-medium leading-5">Leadership</span>
                 </div>
               </div>

               <div className="w-full mt-auto flex flex-col gap-[10px]">
                 <button className="w-full h-[36px] bg-[#0c4a6e] hover:bg-[#082f49] text-white rounded-md text-sm font-normal flex items-center justify-center transition-colors">
                   Download Bio
                 </button>
                 <button className="w-full h-[36px] bg-[#10b981] hover:bg-[#059669] text-white rounded-md text-sm font-semibold flex items-center justify-center transition-colors">
                   Book 1:1 Session
                 </button>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-black/40 border border-transparent dark:border-gray-700 p-[32px] flex flex-col w-full max-w-[384px] h-[511px] relative items-center">
               <div className="w-[56px] h-[56px] rounded-[30px] border-[3px] border-teal-700 shrink-0 bg-neutral-200 dark:bg-gray-700 overflow-hidden absolute top-[32px] left-1/2 -translate-x-1/2 z-10">
               </div>
               
               <div className="w-full border border-neutral-100 dark:border-gray-700 rounded-lg p-4 pt-[44px] flex flex-col relative mt-[28px] h-[264px] shrink-0">
                 <h4 className="text-sky-900 dark:text-white text-xl font-bold leading-8 mb-1 text-center">Maria Johnson</h4>
                 <p className="text-stone-500 dark:text-gray-400 text-sm font-bold leading-6 mb-3 text-center">Lead Architect, ZOIKO DIGITAL</p>
                 <p className="text-stone-500 dark:text-gray-300 text-sm font-normal leading-6 text-center line-clamp-3">
                   Senior technical architect specializing in cloud-native solutions and enterprise integration patterns...
                 </p>
                 <div className="flex flex-wrap gap-2.5 justify-center mt-auto">
                   <span className="bg-neutral-50 dark:bg-gray-900 rounded-xl px-2 py-[3px] text-sky-900 dark:text-teal-400 text-xs font-medium leading-5">Integration</span>
                   <span className="bg-neutral-50 dark:bg-gray-900 rounded-xl px-2 py-[3px] text-sky-900 dark:text-teal-400 text-xs font-medium leading-5">Cloud Architecture</span>
                   <span className="bg-neutral-50 dark:bg-gray-900 rounded-xl px-2 py-[3px] text-sky-900 dark:text-teal-400 text-xs font-medium leading-5">APIs</span>
                 </div>
               </div>

               <div className="w-full mt-auto flex flex-col gap-[10px]">
                 <button className="w-full h-[36px] bg-[#0c4a6e] hover:bg-[#082f49] text-white rounded-md text-sm font-normal flex items-center justify-center transition-colors">
                   Download Bio
                 </button>
                 <button className="w-full h-[36px] bg-[#10b981] hover:bg-[#059669] text-white rounded-md text-sm font-semibold flex items-center justify-center transition-colors">
                   Book 1:1 Session
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: DEEPER ENGAGEMENT
          ========================================================= */}
      <section className="w-full bg-white dark:bg-gray-950 py-24 px-4 sm:px-8 lg:px-[108px] transition-colors relative">
        <div className="max-w-[1160px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-sky-900 dark:text-teal-400 text-2xl sm:text-[32px] font-bold leading-[64px] mb-2">
              Deeper Engagement
            </h2>
            <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-7 max-w-2xl mx-auto">
              Connect, participate, and build meaningful professional relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Column 1 */}
            <div className="bg-fuchsia-50 dark:bg-gray-800 rounded-2xl w-full max-w-[320px] h-[519px] relative flex flex-col items-center border border-transparent dark:border-gray-700">
              <div className="w-20 h-20 rounded-[40px] bg-gradient-to-br from-fuchsia-700 to-sky-900 flex items-center justify-center absolute top-[34px] left-1/2 -translate-x-1/2 shrink-0">
                <img className="w-8 h-8"
                    src="/images/webin/Symbol (16).png"
                />
              </div>
              <h3 className="text-sky-900 dark:text-white text-xl font-bold text-center mt-[137px] mb-[26px]">
                Live Interactive Features
              </h3>
              
              <div className="w-full px-[34px] flex flex-col gap-[17px]">
                <div className="h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center px-[10px] w-full">
                  <span className="text-zinc-800 dark:text-gray-200 text-base font-normal leading-6 truncate">Live Q&A Sessions</span>
                </div>
                <div className="h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center px-[10px] w-full">
                  <span className="text-zinc-800 dark:text-gray-200 text-base font-normal leading-6 truncate">Real-time Polls</span>
                </div>
                <div className="h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center px-[10px] w-full">
                  <span className="text-zinc-800 dark:text-gray-200 text-base font-normal leading-6 truncate">Interactive Surveys</span>
                </div>
                <div className="h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center px-[10px] w-full">
                  <span className="text-zinc-800 dark:text-gray-200 text-base font-normal leading-6 truncate">Live Chat</span>
                </div>
              </div>

              <button className="absolute bottom-[37.14px] left-[34px] right-[34px] h-10 bg-[#207373] hover:opacity-90 text-white rounded-lg font-semibold text-sm transition-colors flex items-center justify-center">
                Join Live Session
              </button>
            </div>

            {/* Column 2 */}
            <div className="bg-fuchsia-50 dark:bg-gray-800 rounded-2xl w-full max-w-[320px] h-[519px] relative flex flex-col items-center border border-transparent dark:border-gray-700">
              <div className="w-20 h-20 rounded-[40px] bg-gradient-to-br from-fuchsia-700 to-sky-900 flex items-center justify-center absolute top-[34px] left-1/2 -translate-x-1/2 shrink-0">
                <img className="w-8 h-8"
                    src="/images/webin/Symbol (17).png"
                />              </div>
              <h3 className="text-sky-900 dark:text-white text-xl font-bold text-center mt-[137px] mb-[26px]">
                AI-Powered Networking
              </h3>
              
              <div className="w-full px-[34px] flex flex-col gap-[17px]">
                <div className="h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center px-[10px] w-full">
                  <span className="text-zinc-800 dark:text-gray-200 text-sm font-normal leading-6 truncate">Smart Attendee Matching</span>
                </div>
                <div className="h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center px-[10px] w-full">
                  <span className="text-zinc-800 dark:text-gray-200 text-sm font-normal leading-6 truncate">Virtual Industry Lounges</span>
                </div>
                <div className="h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center px-[10px] w-full">
                  <span className="text-zinc-800 dark:text-gray-200 text-sm font-normal leading-6 truncate">1:1 Meeting Scheduler</span>
                </div>
                <div className="h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center px-[10px] w-full">
                  <span className="text-zinc-800 dark:text-gray-200 text-sm font-normal leading-6 truncate">Virtual Coffee Chats</span>
                </div>
              </div>

              <button className="absolute bottom-[37.14px] left-[34px] right-[34px] h-10 bg-[#207373] hover:opacity-90 text-white rounded-lg font-semibold text-sm transition-colors flex items-center justify-center">
                Start Networking
              </button>
            </div>

            {/* Column 3 */}
            <div className="bg-fuchsia-50 dark:bg-gray-800 rounded-2xl w-full max-w-[320px] h-[519px] relative flex flex-col items-center border border-transparent dark:border-gray-700">
              <div className="w-20 h-20 rounded-[40px] bg-gradient-to-br from-fuchsia-700 to-sky-900 flex items-center justify-center absolute top-[34px] left-1/2 -translate-x-1/2 shrink-0">
                <img className="w-8 h-8"
                    src="/images/webin/Symbol (18).png"
                />
               </div>
              <h3 className="text-sky-900 dark:text-white text-xl font-bold text-center mt-[138px] mb-[26px]">
                Gamification &<br/>Recognition
              </h3>
              
              <div className="w-[240px] h-[160px] bg-white dark:bg-gray-900 rounded-xl shadow-sm absolute top-[229px] left-1/2 -translate-x-1/2 flex flex-col items-center border border-transparent dark:border-gray-700">
                <h4 className="text-sky-900 dark:text-teal-400 text-base font-bold mt-[10px] text-center leading-6">Most Active Participants</h4>
                <button className="w-[176px] h-10 rounded-sm outline outline-1 outline-fuchsia-700 dark:outline-teal-500 text-fuchsia-700 dark:text-teal-400 text-xs font-normal mt-[17px] hover:bg-fuchsia-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center">
                  View Full Leaderboard
                </button>
                <div className="w-[192px] h-16 bg-white dark:bg-gray-900 rounded-md mt-0 flex items-center justify-center relative">
                  <div className="text-3xl leading-6 ml-[-4px]">🏆</div>
                  <span className="text-zinc-800 dark:text-gray-200 text-sm font-medium ml-[18px]">Alex Chen</span>
                  <span className="text-stone-500 dark:text-gray-400 text-sm font-normal ml-[24px]">2,450 pts</span>
                </div>
              </div>

              <button className="absolute bottom-[37.14px] left-[34px] right-[34px] h-10 bg-[#207373] hover:opacity-90 text-white rounded-lg font-semibold text-sm transition-colors flex items-center justify-center">
                View My Progress
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: CONTINUE YOUR LEARNING JOURNEY
          ========================================================= */}
      <section className="w-full bg-sky-50 dark:bg-gray-900 py-20 px-4 sm:px-8 lg:px-[108px] transition-colors border-t border-neutral-200 dark:border-gray-800 relative">
        <div className="max-w-[1160px] mx-auto">
          <h2 className="text-sky-900 dark:text-white text-2xl font-semibold leading-[51.2px] text-center mb-12">
            Continue Your Learning Journey
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-[256px] h-72 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.05)] border border-transparent dark:border-gray-700 relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-[40px] bg-gradient-to-br from-fuchsia-700 to-sky-900 flex items-center justify-center absolute top-[32px] shrink-0 text-white">
                  <img className="w-8 h-8"
                    src="/images/webin/Symbol (19).png"
                />
              </div>
              <h3 className="text-sky-900 dark:text-white text-xl font-bold text-center absolute top-[135px]">Whitepapers</h3>
              <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-6 text-center absolute top-[176px]">
                Deep dive into research<br />from today's sessions
              </p>
              <a href="#" className="absolute top-[252px] text-[#207373] dark:text-teal-400 text-sm font-semibold hover:underline flex items-center justify-center gap-1 w-full text-center">
                Explore Research Library
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-[256px] h-72 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.05)] border border-transparent dark:border-gray-700 relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-[40px] bg-gradient-to-br from-fuchsia-700 to-sky-900 flex items-center justify-center absolute top-[32px] shrink-0 text-white">
                <img className="w-8 h-8"
                    src="/images/webin/Symbol (20).png"
                />              </div>
              <h3 className="text-sky-900 dark:text-white text-xl font-bold text-center absolute top-[135px]">Case Studies</h3>
              <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-6 text-center absolute top-[176px]">
                See how companies apply<br />what they learned
              </p>
              <a href="#" className="absolute top-[252px] text-[#207373] dark:text-teal-400 text-sm font-semibold hover:underline flex items-center justify-center gap-1 w-full text-center">
                View Success Stories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-[256px] h-72 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.05)] border border-transparent dark:border-gray-700 relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-[40px] bg-gradient-to-br from-fuchsia-700 to-sky-900 flex items-center justify-center absolute top-[32px] shrink-0 text-white">
                <img className="w-8 h-8"
                    src="/images/webin/Symbol (21).png"
                />                 </div>
              <h3 className="text-sky-900 dark:text-white text-xl font-bold text-center absolute top-[135px]">Technical Docs</h3>
              <p className="text-stone-500 dark:text-gray-300 text-sm font-normal leading-6 text-center absolute top-[176px]">
                Put insights into action with<br />our APIs
              </p>
              <a href="#" className="absolute top-[252px] text-[#207373] dark:text-teal-400 text-sm font-semibold hover:underline flex items-center justify-center gap-1 w-full text-center">
                Access Documentation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-[256px] h-72 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.05)] border border-transparent dark:border-gray-700 relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-[40px] bg-gradient-to-br from-fuchsia-700 to-sky-900 flex items-center justify-center absolute top-[32px] shrink-0 text-white">
                  <img className="w-8 h-8"
                    src="/images/webin/Symbol (22).png"
                />                 </div>
              <h3 className="text-sky-900 dark:text-white text-xl font-bold text-center absolute top-[135px]">Request a Demo</h3>
              <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-6 text-center absolute top-[176px]">
                Transform learning into<br />results with ZOIKO DIGITAL solutions
              </p>
              <a href="#" className="absolute top-[252px] text-[#207373] dark:text-teal-400 text-sm font-semibold hover:underline flex items-center justify-center gap-1 w-full text-center">
                Schedule Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 8: CONTACT FORM
          ========================================================= */}
      <section className="w-full bg-zinc-100 py-16 px-6 md:px-15 transition-colors duration-300 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ================= LEFT COLUMN: DETAILS ================= */}
          <div className="flex flex-col gap-12 pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-[34px]">
              <h2 className="text-zinc-800 dark:text-white text-xl lg:text-[32px] font-bold leading-8 lg:leading-9">
                Ready to Transform
                <br />
                Your Business?
              </h2>
              <p className="text-neutral-600 dark:text-gray-300 text-base lg:text-lg font-normal leading-7">
                Connect with our global team of experts to discuss your digital
                <br className="hidden lg:block" />
                transformation journey and discover how we can accelerate your
                <br className="hidden lg:block" />
                success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <img
                    src="/images/about/SVG.svg"
                    alt="Email Icon"
                    className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@zws.com"
                    className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                  >
                    hello@zws.com
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">
                    Response within 4 hours
                  </span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <img
                    src="/images/about/SVG-1.svg"
                    alt="Phone Icon"
                    className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">
                    Call Us
                  </h4>
                  <a
                    href="tel:+15551234567"
                    className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">
                    24/7 Support Available
                  </span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <img
                    src="/images/about/SVG-2.svg"
                    alt="Chat Icon"
                    className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">
                    Live Chat
                  </h4>
                  <span className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6">
                    Instant Support
                  </span>
                  <div className="flex items-center gap-2 mt-0 lg:mt-1">
                    <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6">
                      Online now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="bg-white dark:bg-gray-800 rounded-[20px] p-8 md:p-10 border border-neutral-300 dark:border-gray-700 w-full lg:max-w-[572px] lg:ml-auto shadow-sm dark:shadow-black/20 transition-colors duration-300">
            <form className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Business Email
                </label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Service Interest
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">
                      Select a service
                    </option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="web">Web Development</option>
                    <option value="compliance">Compliance</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-zinc-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Project Budget
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">
                      Select budget range
                    </option>
                    <option value="small">Under $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="large">$50,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-zinc-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Project Details
                </label>
                <textarea
                  className="w-full h-28 p-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-zinc-800 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-56 h-14 self-start bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 hover:from-teal-600 hover:to-indigo-900 dark:from-teal-600 dark:via-teal-700 dark:to-teal-500 text-white text-base font-semibold rounded-xl transition-all shadow-sm"
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