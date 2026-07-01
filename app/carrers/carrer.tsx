import React from 'react';

export default function CareersPage() {
  return (
    <div className="w-full bg-white text-slate-800 antialiased font-sans dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-950 via-teal-800 to-teal-500 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Careers Without Borders <br className="hidden md:inline" /> Futures Without Limits
          </h1>
          <p className="text-base md:text-xl font-light text-teal-50 max-w-3xl mx-auto mb-10 leading-relaxed">
            At Zoiko Digital, every role is a platform for global impact. Whether you're a student, innovator, or seasoned leader, your career here shapes industries and communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button className="w-full sm:w-56 bg-white hover:bg-teal-50 text-teal-800 font-semibold py-4 rounded-full shadow-lg transition">
              Search Careers
            </button>
            <button className="w-full sm:w-56 border-2 border-white hover:bg-white/10 text-white font-semibold py-4 rounded-full transition">
              Why Join Zoiko
            </button>
          </div>
        </div>
      </section>

      {/* WHY JOIN ZOIKO */}
      <section className="bg-sky-50/60 dark:bg-gray-800/40 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-sky-950 dark:text-teal-400 mb-12">Why Join Zoiko</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-slate-100 dark:border-gray-700 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full border-[3px] border-teal-700 flex items-center justify-center mb-6 bg-slate-50 dark:bg-gray-700">
                <img className="h-8 w-8 dark:brightness-0 dark:invert" src="/images/carrers/SVG (2).png" alt="Innovation Icon"/>
              </div>
              <h3 className="text-xl font-semibold text-sky-950 dark:text-white mb-3">Global Innovation at Scale</h3>
              <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed">
                Be part of AI, cloud, and fintech projects redefining industries.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-slate-100 dark:border-gray-700 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full border-[3px] border-teal-700 flex items-center justify-center mb-6 bg-slate-50 dark:bg-gray-700">
                <img className="h-8 w-8 dark:brightness-0 dark:invert" src="/images/carrers/SVG (1).png" alt="Collaboration Icon"/>
              </div>
              <h3 className="text-xl font-semibold text-sky-950 dark:text-white mb-3">Inclusive Collaboration</h3>
              <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed">
                Work with colleagues across North America, Europe, Africa, and Asia-Pacific.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-slate-100 dark:border-gray-700 flex flex-col items-center text-center sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto sm:w-full">
              <div className="h-16 w-16 rounded-full border-[3px] border-teal-700 flex items-center justify-center mb-6 bg-slate-50 dark:bg-gray-700">
                <img className="h-8 w-8 dark:brightness-0 dark:invert" src="/images/carrers/SVG.png" alt="Impact Icon"/>
              </div>
              <h3 className="text-xl font-semibold text-sky-950 dark:text-white mb-3">Impact & Purpose</h3>
              <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed">
                Deliver solutions that empower businesses, communities, and sustainability goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / STORY */}
      <section className="bg-fuchsia-50/50 dark:bg-gray-900 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-4">Our People, Our Story</h2>
          <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-sm md:text-base">
            From Lagos to Madrid to Sacramento, our people share one mission: to push boundaries, grow careers, and make the world more connected.
          </p>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-12 shadow-xl border border-fuchsia-100 dark:border-gray-700 flex flex-col sm:flex-row items-center gap-6 md:gap-8 text-center sm:text-left">
            <div className="h-20 w-20 md:h-32 md:w-32 bg-gradient-to-tr from-slate-200 to-slate-300 rounded-full flex-shrink-0" />
            <div>
              <blockquote className="text-lg md:text-xl text-sky-950 dark:text-slate-100 italic font-medium leading-relaxed mb-4">
                "Working on AI compliance frameworks here means my code impacts Fortune 500 companies globally. Every algorithm I write helps businesses grow responsibly."
              </blockquote>
              <cite className="not-italic font-semibold text-teal-700 dark:text-teal-400 block">
                Sarah Chen, Senior AI Engineer, Singapore
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* JOB OPPORTUNITIES & FILTER BOARD */}
      <section className="bg-sky-50 dark:bg-gray-800/40 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 dark:text-white mb-2">Find Your Next Opportunity</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-600 to-emerald-400 mx-auto rounded-full" />
          </div>

          {/* Search Controls Container */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-12 border border-slate-100 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-bold text-sky-950 dark:text-gray-300 uppercase mb-2 tracking-wider">Location</label>
                <select className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-zinc-800 dark:text-white rounded-lg p-3 text-sm focus:outline-teal-600">
                  <option>All Locations</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-sky-950 dark:text-gray-300 uppercase mb-2 tracking-wider">Department</label>
                <select className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-zinc-800 dark:text-white rounded-lg p-3 text-sm focus:outline-teal-600">
                  <option>All Departments</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-sky-950 dark:text-gray-300 uppercase mb-2 tracking-wider">Experience Level</label>
                <select className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-zinc-800 dark:text-white rounded-lg p-3 text-sm focus:outline-teal-600">
                  <option>All Levels</option>
                </select>
              </div>
              <div>
                <button className="w-full bg-sky-900 hover:bg-sky-950 dark:bg-teal-700 dark:hover:bg-teal-800 text-white font-semibold py-3 rounded-lg text-sm transition">
                  Search Jobs
                </button>
              </div>
            </div>

            {/* AI Banner Match inside Filters */}
            <div className="mt-6 bg-gradient-to-r from-fuchsia-50 to-emerald-50 dark:from-gray-700 dark:to-gray-750 border border-sky-900 dark:border-teal-500 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="bg-sky-900 dark:bg-teal-700 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md shrink-0">
                AI Matched
              </span>
              <p className="text-sm text-slate-700 dark:text-gray-200 font-medium">
                Based on your profile, we recommend exploring roles in AI Engineering and Product Management.
              </p>
            </div>
          </div>

          {/* Featured Cards */}
          <h3 className="text-xl md:text-2xl font-bold text-sky-950 dark:text-white mb-6">Featured Opportunities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Job Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-slate-100 dark:border-gray-700 flex flex-col justify-between relative pt-12">
              <span className="absolute top-4 left-6 bg-red-700 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                Urgent Hire
              </span>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-sky-950 dark:text-white mb-1">Senior AI Compliance Engineer</h4>
                <p className="text-sm text-teal-700 dark:text-teal-400 font-semibold mb-3">Remote • Singapore</p>
                <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Lead the development of next-generation AI governance frameworks for Fortune 500 clients across Asia-Pacific markets.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-sky-50 dark:bg-gray-900 text-sky-900 dark:text-teal-400 text-xs font-medium px-3 py-1 rounded-full">AI/ML</span>
                  <span className="bg-sky-50 dark:bg-gray-900 text-sky-900 dark:text-teal-400 text-xs font-medium px-3 py-1 rounded-full">Compliance</span>
                  <span className="bg-sky-50 dark:bg-gray-900 text-sky-900 dark:text-teal-400 text-xs font-medium px-3 py-1 rounded-full">Remote</span>
                </div>
                <button className="bg-sky-900 hover:bg-sky-950 dark:bg-teal-700 dark:hover:bg-teal-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition w-full sm:w-auto">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-slate-100 dark:border-gray-700 flex flex-col justify-between relative pt-12">
              <span className="absolute top-4 left-6 bg-yellow-600 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                Strategic Role
              </span>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-sky-950 dark:text-white mb-1">Product Manager - Fintech Solutions</h4>
                <p className="text-sm text-teal-700 dark:text-teal-400 font-semibold mb-3">Lagos • Hybrid</p>
                <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Drive product strategy for financial technology solutions empowering African SMEs and entrepreneurs.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-sky-50 dark:bg-gray-900 text-sky-900 dark:text-teal-400 text-xs font-medium px-3 py-1 rounded-full">Fintech</span>
                  <span className="bg-sky-50 dark:bg-gray-900 text-sky-900 dark:text-teal-400 text-xs font-medium px-3 py-1 rounded-full">Product</span>
                  <span className="bg-sky-50 dark:bg-gray-900 text-sky-900 dark:text-teal-400 text-xs font-medium px-3 py-1 rounded-full">Hybrid</span>
                </div>
                <button className="bg-sky-900 hover:bg-sky-950 dark:bg-teal-700 dark:hover:bg-teal-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition w-full sm:w-auto">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-slate-100 dark:border-gray-700 flex flex-col justify-between relative pt-12 sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto sm:w-full">
              <span className="absolute top-4 left-6 bg-emerald-500 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                High Growth
              </span>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-sky-950 dark:text-white mb-1">Cloud Infrastructure Architect</h4>
                <p className="text-sm text-teal-700 dark:text-teal-400 font-semibold mb-3">Sacramento • On-site</p>
                <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Architect scalable cloud infrastructure supporting global operations and Fortune 10 enterprise clients.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-sky-50 dark:bg-gray-900 text-sky-900 dark:text-teal-400 text-xs font-medium px-3 py-1 rounded-full">Cloud</span>
                  <span className="bg-sky-50 dark:bg-gray-900 text-sky-900 dark:text-teal-400 text-xs font-medium px-3 py-1 rounded-full">Architecture</span>
                  <span className="bg-sky-50 dark:bg-gray-900 text-sky-900 dark:text-teal-400 text-xs font-medium px-3 py-1 rounded-full">Enterprise</span>
                </div>
                <button className="bg-sky-900 hover:bg-sky-950 dark:bg-teal-700 dark:hover:bg-teal-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition w-full sm:w-auto">
                  Apply Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STUDENT AND GRADUATE HUB */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 dark:text-white mb-4">Where Future Leaders Begin</h2>
            <p className="text-slate-500 dark:text-gray-300 mb-8 max-w-xl text-sm md:text-base">
              Dedicated hub for internships, graduate programs, apprenticeships, and Zoiko Academy coding/financial literacy courses.
            </p>

            <div className="space-y-4 mb-8">
              <div className="border border-fuchsia-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 hover:shadow-sm transition">
                <h4 className="font-semibold text-sky-950 dark:text-white text-base">Graduate Programs</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">2-year rotational programs across all departments</p>
              </div>
              <div className="border border-fuchsia-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 hover:shadow-sm transition">
                <h4 className="font-semibold text-sky-950 dark:text-white text-base">Zoiko Academy</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Free coding bootcamps and financial literacy courses</p>
              </div>
              <div className="border border-fuchsia-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 hover:shadow-sm transition">
                <h4 className="font-semibold text-sky-950 dark:text-white text-base">Global Internships</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">6-month paid internships across all regions</p>
              </div>
            </div>

            <button className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3.5 rounded-full shadow-md transition text-sm">
              Explore Student & Graduate Programs
            </button>
          </div>

          <div className="h-64 sm:h-80 md:h-96 w-full bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl flex items-center justify-center text-slate-400 dark:text-gray-300 font-medium text-center p-4">
            
          </div>
        </div>
      </section>

      {/* GROWTH & ONBOARDING TIMELINE */}
      <section className="bg-sky-900 dark:bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Engineered for Growth</h2>
          <p className="text-teal-50/80 max-w-3xl mx-auto mb-12 text-sm md:text-base">
            Growth at Zoiko isn't accidental — it's engineered. With mentorship, Academy learning pathways, and executive leadership programs, we build tomorrow's leaders today.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-white text-sky-900 font-bold text-lg flex items-center justify-center shadow mb-4">1</div>
              <h4 className="font-semibold mb-1">Onboarding</h4>
              <p className="text-xs text-teal-100/70">Comprehensive 30-day program</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-white text-sky-900 font-bold text-lg flex items-center justify-center shadow mb-4">2</div>
              <h4 className="font-semibold mb-1">Mentorship</h4>
              <p className="text-xs text-teal-100/70">Paired with senior leaders</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-white text-sky-900 font-bold text-lg flex items-center justify-center shadow mb-4">3</div>
              <h4 className="font-semibold mb-1">Learning</h4>
              <p className="text-xs text-teal-100/70">Zoiko Academy pathways</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-white text-sky-900 font-bold text-lg flex items-center justify-center shadow mb-4">4</div>
              <h4 className="font-semibold mb-1">Leadership</h4>
              <p className="text-xs text-teal-100/70">Executive development track</p>
            </div>
          </div>
        </div>
      </section>

      {/* WELLBEING & PERKS */}
      <section className="bg-sky-50 dark:bg-gray-800/40 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-sky-950 dark:text-white mb-12">Your Wellbeing, Our Priority</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
              <h4 className="font-bold text-sky-950 dark:text-teal-400 mb-2">Global Health & Wellness</h4>
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-relaxed">Comprehensive health coverage adapted to local markets with global consistency</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
              <h4 className="font-bold text-sky-950 dark:text-teal-400 mb-2">Retirement & Wealth Planning</h4>
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-relaxed">401k matching, pension plans, and financial advisory services worldwide</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
              <h4 className="font-bold text-sky-950 dark:text-teal-400 mb-2">Flexible Work Models</h4>
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-relaxed">Hybrid, remote, and flexible scheduling options tailored to role requirements</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
              <h4 className="font-bold text-sky-950 dark:text-teal-400 mb-2">Continuous Learning</h4>
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-relaxed">Funded certifications, conference attendance, and Zoiko Academy courses</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
              <h4 className="font-bold text-sky-950 dark:text-teal-400 mb-2">Family Support</h4>
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-relaxed">Parental leave, childcare assistance, and family wellness programs</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
              <h4 className="font-bold text-sky-950 dark:text-teal-400 mb-2">Global Mobility</h4>
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-relaxed">International assignment opportunities with relocation support</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVERSITY & STATS */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 dark:text-white mb-4">Innovation Thrives on Diversity</h2>
            <p className="text-slate-500 dark:text-gray-300 mb-8 max-w-xl leading-relaxed text-sm md:text-base">
              50% of our leadership represents global regions — ensuring ideas and solutions as diverse as the clients we serve.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="text-3xl md:text-4xl font-extrabold text-teal-700 dark:text-teal-400 block">50%</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">Global Leadership</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-extrabold text-teal-700 dark:text-teal-400 block">40+</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">Countries</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-extrabold text-teal-700 dark:text-teal-400 block">15+</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">Languages</span>
              </div>
            </div>
          </div>

          <div className="h-48 sm:h-64 w-full bg-slate-200 dark:bg-gray-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-gray-300 font-medium">
            
          </div>
        </div>
      </section>

      {/* IMPACT TEAMS / SUSTAINABILITY */}
      <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Work That Shapes a Better World</h2>
          <p className="text-slate-300 text-sm md:text-base mb-10">Careers aligned with Sustainability, ESG, and Responsible AI.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-left">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">Sustainable Technology</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Build green cloud solutions and carbon-neutral infrastructure</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">Responsible AI</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Develop ethical AI frameworks and bias-free algorithms</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto sm:w-full">
              <h4 className="font-semibold text-lg mb-2">Community Impact</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Create technology solutions that empower underserved communities</p>
            </div>
          </div>

          <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-3.5 rounded-full transition shadow-md text-sm w-full sm:w-auto">
            Join Our Impact Teams &rarr;
          </button>
        </div>
      </section>

      {/* CONTACT & TRANSFORM SECTION */}
      <section className="w-full bg-zinc-100 py-16 px-4 sm:px-6 md:px-12 lg:px-15 transition-colors duration-300 dark:bg-gray-800/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* LEFT COLUMN: DETAILS */}
          <div className="flex flex-col gap-12 pt-4 lg:pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-zinc-800 dark:text-white text-2xl lg:text-[32px] font-bold leading-8 lg:leading-9">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-neutral-600 dark:text-gray-300 text-base lg:text-lg font-normal leading-7">
                Connect with our global team of experts to discuss your digital transformation journey and discover how we can accelerate your success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG.svg" alt="Email Icon" className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">Email Us</h4>
                  <a href="mailto:hello@zoikodigital.com" className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors break-all">
                    hello@zoikodigital.com
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">Response within 4 hours</span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-1.svg" alt="Phone Icon" className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">Call Us</h4>
                  <a href="tel:+15551234567" className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors">
                    +1 (555) 123-4567
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">24/7 Support Available</span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-2.svg" alt="Chat Icon" className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">Live Chat</h4>
                  <span className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6">Instant Support</span>
                  <div className="flex items-center gap-2 mt-0 lg:mt-1">
                    <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6">Online now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM */}
          <div className="bg-white dark:bg-gray-800 rounded-[20px] p-6 md:p-10 border border-neutral-300 dark:border-gray-700 w-full lg:max-w-[572px] lg:ml-auto shadow-sm dark:shadow-black/20 transition-colors duration-300">
            <form className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Full Name</label>
                <input type="text" className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all" />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Business Email</label>
                <input type="email" className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all" />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Company</label>
                <input type="text" className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all" />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Service Interest</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all">
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">Select a service</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="web">Web Development</option>
                    <option value="compliance">Compliance</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Project Budget</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all">
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">Select budget range</option>
                    <option value="small">Under $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="large">$50,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">Project Details</label>
                <textarea className="w-full h-28 p-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-zinc-800 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500" placeholder="Tell us about your project requirements, timeline, and objectives..."></textarea>
              </div>

              <button type="button" className="mt-4 w-full sm:w-56 h-14 bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 hover:from-teal-600 hover:to-indigo-900 dark:from-teal-600 dark:via-teal-700 dark:to-teal-500 text-white text-base font-semibold rounded-xl transition-all shadow-sm">
                Start Your Project
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}