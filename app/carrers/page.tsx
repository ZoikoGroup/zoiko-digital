import React from 'react';
import { ArrowRight, CheckCircle, ChevronRight, Play, Globe, Heart, Briefcase, GraduationCap, Users, MapPin, Leaf, Mail, Phone, MessageSquare } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="relative bg-[linear-gradient(42deg,#90509F,#0c4a6e)] py-[85px] px-6 overflow-hidden">
        <div className="max-w-[968px] mx-auto text-center relative z-10 flex flex-col items-center">
          <h1 className="text-[36px] font-semibold text-white leading-[55px] mb-[18px]">
            Careers Without Borders Futures Without Limits
          </h1>
          <p className="text-[20px] text-white/90 font-light leading-[36px] mb-[35px] max-w-[968px] mx-auto">
            At Zoiko Web Services, every role is a platform for global impact. Whether you're a student,<br className="hidden md:block" />innovator, or seasoned leader, your career here shapes industries and communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-[240px] h-[64px] flex items-center justify-center bg-white text-[#90509F] rounded-[50px] font-semibold text-[18px] shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] hover:bg-gray-50 transition-colors">
              Search Careers
            </button>
            <button className="w-full sm:w-[240px] h-[64px] flex items-center justify-center bg-transparent outline outline-2 outline-offset-[-2px] outline-white text-white rounded-[50px] font-semibold text-[18px] hover:bg-white/10 transition-colors">
              Why Join Zoiko
            </button>
          </div>
        </div>
      </section>

      {/* 2. Why Join Zoiko */}
      <section className="py-[92px] px-6 sm:px-12 lg:px-24 bg-sky-50 flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col items-center">
          <h2 className="text-[20px] font-semibold text-sky-900 text-center mb-[40px]">
            Why Join Zoiko
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] flex flex-col items-center px-[32px] py-[48px] text-center hover:-translate-y-1 transition-transform">
              <div className="w-[64px] h-[64px] rounded-full border-[2px] border-[#90509F] flex items-center justify-center mb-[24px]">
                <img src="/images/carrers/svg.svg" alt="Global Innovation" className="w-[24px] h-[24px]" />
              </div>
              <h3 className="text-[16px] font-semibold text-sky-900 mb-[16px]">Global Innovation at Scale</h3>
              <p className="text-[13px] text-stone-500 leading-[22px]">Be part of AI, cloud, and fintech projects redefining industries.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] flex flex-col items-center px-[32px] py-[48px] text-center hover:-translate-y-1 transition-transform">
              <div className="w-[64px] h-[64px] rounded-full border-[2px] border-[#90509F] flex items-center justify-center mb-[24px]">
                <img src="/images/carrers/svg1.svg" alt="Inclusive Collaboration" className="w-[24px] h-[24px]" />
              </div>
              <h3 className="text-[16px] font-semibold text-sky-900 mb-[16px]">Inclusive Collaboration</h3>
              <p className="text-[13px] text-stone-500 leading-[22px]">Work with colleagues across North America, Europe, Africa, and Asia-Pacific.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] flex flex-col items-center px-[32px] py-[48px] text-center hover:-translate-y-1 transition-transform">
              <div className="w-[64px] h-[64px] rounded-full border-[2px] border-[#90509F] flex items-center justify-center mb-[24px]">
                <img src="/images/carrers/svg2.svg" alt="Impact & Purpose" className="w-[24px] h-[24px]" />
              </div>
              <h3 className="text-[16px] font-semibold text-sky-900 mb-[16px]">Impact & Purpose</h3>
              <p className="text-[13px] text-stone-500 leading-[22px]">Deliver solutions that empower businesses, communities, and sustainability goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our People, Our Story */}
      <section className="py-[92px] px-6 sm:px-12 lg:px-24 bg-fuchsia-50">
        <div className="max-w-[1224px] mx-auto">
          <div className="text-center mb-[70px]">
            <h2 className="text-[24px] font-semibold text-[#90509F] mb-[18px] leading-[32px]">
              Our People, Our Story
            </h2>
            <p className="text-[20px] text-stone-500 font-normal leading-[32px]">
              From Lagos to Madrid to Sacramento, our people share one mission: to push boundaries,<br className="hidden md:block" />grow careers, and make the world more connected.
            </p>
          </div>

          <div className="bg-white rounded-[20px] shadow-[0px_16px_48px_0px_rgba(0,0,0,0.10)] overflow-hidden max-w-[1224px] mx-auto h-auto md:h-[384px] flex items-center mb-[46px]">
            <div className="flex flex-col md:flex-row items-center w-full px-6 md:px-[48px] py-12 md:py-0 gap-8 md:gap-[54px]">
              <div className="w-[144px] h-[144px] shrink-0 bg-zinc-400 rounded-[75px] overflow-hidden">
              </div>
              <div className="text-center md:text-left flex flex-col justify-center">
                <p className="text-[20px] text-sky-900 italic font-normal leading-[32px] mb-[24px]">
                  "Working on AI compliance frameworks here means my code impacts Fortune 500 companies<br className="hidden md:block" />globally. Every algorithm I write helps businesses grow responsibly."
                </p>
                <p className="text-[#90509F] font-semibold text-[16px] leading-[24px]">
                  Sarah Chen, Senior AI Engineer, Singapore
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[15px]">
            <div className="w-[14px] h-[14px] rounded-full bg-[#90509F]"></div>
            <div className="w-[12px] h-[12px] rounded-full border-[2px] border-[#90509F]"></div>
            <div className="w-[12px] h-[12px] rounded-full border-[2px] border-[#90509F]"></div>
          </div>
        </div>
      </section>

      {/* 4. Find Your Next Opportunity */}
      <section className="py-[92px] px-6 sm:px-12 lg:px-24 bg-sky-50">
        <div className="max-w-[1224px] mx-auto">
          <div className="text-center mb-[47px] flex flex-col items-center">
            <h2 className="text-[32px] font-semibold text-sky-900 leading-[64px]">
              Find Your Next Opportunity
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#90509F] to-emerald-400"></div>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-[20px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-[40px] mb-[75px] max-w-[1224px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] items-end mb-[32px]">
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold text-sky-900 leading-[24px] mb-[8px]">Location</label>
                <div className="bg-neutral-50 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 h-[48px] flex items-center px-[18px]">
                  <span className="text-[16px] font-medium text-black leading-[16px]">All Locations</span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold text-sky-900 leading-[24px] mb-[8px]">Department</label>
                <div className="bg-neutral-50 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 h-[48px] flex items-center px-[18px]">
                  <span className="text-[16px] font-medium text-black leading-[16px]">All Departments</span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold text-sky-900 leading-[24px] mb-[8px]">Experience Level</label>
                <div className="bg-neutral-50 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 h-[48px] flex items-center px-[18px]">
                  <span className="text-[16px] font-medium text-black leading-[16px]">All Levels</span>
                </div>
              </div>
              <div className="flex items-end pb-[4px]">
                <button className="w-full md:w-[256px] h-[40px] bg-sky-900 text-white text-[14px] font-semibold rounded-lg hover:bg-sky-800 transition-colors">
                  Search Jobs
                </button>
              </div>
            </div>

            <div className="w-full bg-[linear-gradient(84deg,rgba(144,80,159,0.05),rgba(52,211,153,0.05))] rounded-xl outline outline-1 outline-offset-[-1px] outline-sky-900 p-[24px] md:px-[28px] md:py-[24px]">
              <div className="inline-flex items-center justify-center bg-sky-900 rounded-[16px] w-[96px] h-[32px] mb-[10px]">
                <span className="text-white text-[12px] font-semibold leading-[20px]">AI Matched</span>
              </div>
              <p className="text-zinc-800 text-[16px] font-normal leading-[24px]">
                Based on your profile, we recommend exploring roles in AI Engineering and Product Management
              </p>
            </div>
          </div>

          <h3 className="text-[30px] font-semibold text-sky-900 mb-[40px] leading-[40px]">Featured Opportunities</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {/* Job Card 1 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] pt-[36px] px-[36px] pb-[29px] relative flex flex-col h-[384px]">
              <div className="absolute top-[26px] left-[36px] bg-red-700 h-[32px] px-[12px] rounded-2xl flex items-center justify-center">
                <span className="text-white text-[12px] font-semibold leading-[20px]">Urgent Hire</span>
              </div>
              <div className="h-[64px] flex items-end mt-[28px] mb-[2px]">
                <h4 className="text-[20px] font-semibold text-sky-900 leading-[32px] line-clamp-2">Senior AI Compliance Engineer</h4>
              </div>
              <p className="text-sky-900 text-[16px] font-semibold mb-[11px] leading-[24px]">Remote • Singapore</p>
              <div className="h-[72px] mb-[16px]">
                <p className="text-stone-500 text-[16px] font-normal leading-[24px] line-clamp-3">
                  Lead the development of next-generation AI governance frameworks for Fortune 500 clients across Asia-Pacific markets.
                </p>
              </div>
              <div className="flex flex-wrap gap-[8px] mb-[22px]">
                <span className="h-[32px] bg-sky-50 text-sky-900 text-[12px] font-semibold rounded-2xl flex items-center px-[12px]">AI/ML</span>
                <span className="h-[32px] bg-sky-50 text-sky-900 text-[12px] font-semibold rounded-2xl flex items-center px-[12px]">Compliance</span>
                <span className="h-[32px] bg-sky-50 text-sky-900 text-[12px] font-semibold rounded-2xl flex items-center px-[12px]">Remote</span>
              </div>
              <button className="w-[128px] h-[48px] bg-sky-900 text-white font-semibold text-[16px] rounded-lg hover:bg-sky-800 transition-colors">Apply Now</button>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] pt-[36px] px-[36px] pb-[29px] relative flex flex-col h-[384px]">
              <div className="absolute top-[26px] left-[36px] bg-yellow-600 px-[12px] h-[32px] rounded-2xl flex items-center justify-center">
                <span className="text-white text-[12px] font-semibold leading-[20px]">Strategic Role</span>
              </div>
              <div className="h-[64px] flex items-end mt-[28px] mb-[2px]">
                <h4 className="text-[20px] font-semibold text-sky-900 leading-[32px] line-clamp-2">Product Manager - Fintech Solutions</h4>
              </div>
              <p className="text-sky-900 text-[16px] font-semibold mb-[11px] leading-[24px]">Lagos • Hybrid</p>
              <div className="h-[72px] mb-[16px]">
                <p className="text-stone-500 text-[16px] font-normal leading-[24px] line-clamp-3">
                  Drive product strategy for financial technology solutions empowering African SMEs and entrepreneurs.
                </p>
              </div>
              <div className="flex flex-wrap gap-[8px] mb-[22px]">
                <span className="h-[32px] bg-sky-50 text-sky-900 text-[12px] font-semibold rounded-2xl flex items-center px-[12px]">Fintech</span>
                <span className="h-[32px] bg-sky-50 text-sky-900 text-[12px] font-semibold rounded-2xl flex items-center px-[12px]">Product</span>
                <span className="h-[32px] bg-sky-50 text-sky-900 text-[12px] font-semibold rounded-2xl flex items-center px-[12px]">Hybrid</span>
              </div>
              <button className="w-[128px] h-[48px] bg-sky-900 text-white font-semibold text-[16px] rounded-lg hover:bg-sky-800 transition-colors">Apply Now</button>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] pt-[36px] px-[36px] pb-[29px] relative flex flex-col h-[384px]">
              <div className="absolute top-[26px] left-[36px] bg-emerald-400 px-[12px] h-[32px] rounded-2xl flex items-center justify-center">
                <span className="text-white text-[12px] font-semibold leading-[20px]">High Growth</span>
              </div>
              <div className="h-[64px] flex items-end mt-[28px] mb-[2px]">
                <h4 className="text-[20px] font-semibold text-sky-900 leading-[32px] line-clamp-2">Cloud Infrastructure Architect</h4>
              </div>
              <p className="text-sky-900 text-[16px] font-semibold mb-[11px] leading-[24px]">Sacramento • On-site</p>
              <div className="h-[72px] mb-[16px]">
                <p className="text-stone-500 text-[16px] font-normal leading-[24px] line-clamp-3">
                  Architect scalable cloud infrastructure supporting global operations and Fortune 10 enterprise clients.
                </p>
              </div>
              <div className="flex flex-wrap gap-[8px] mb-[22px]">
                <span className="h-[32px] bg-sky-50 text-sky-900 text-[12px] font-semibold rounded-2xl flex items-center px-[12px]">Cloud</span>
                <span className="h-[32px] bg-sky-50 text-sky-900 text-[12px] font-semibold rounded-2xl flex items-center px-[12px]">Architecture</span>
                <span className="h-[32px] bg-sky-50 text-sky-900 text-[12px] font-semibold rounded-2xl flex items-center px-[12px]">Enterprise</span>
              </div>
              <button className="w-[128px] h-[48px] bg-sky-900 text-white font-semibold text-[16px] rounded-lg hover:bg-sky-800 transition-colors">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Where Future Leaders Begin */}
      <section className="py-[92px] px-6 sm:px-12 lg:px-24 bg-white flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col lg:flex-row justify-between items-center lg:items-start">

          <div className="flex-1 max-w-[580px] pt-[10px]">
            <h2 className="text-[32px] font-semibold text-sky-900 mb-[24px] leading-[40px]">Where Future Leaders Begin</h2>
            <p className="text-[18px] text-stone-500 mb-[40px] leading-[32px]">
              Dedicated hub for internships, graduate programs, apprenticeships,
              and Zoiko Academy coding/financial literacy courses.
            </p>

            <div className="flex flex-col gap-[20px] mb-[48px]">
              <div className="border border-[#90509F]/30 rounded-lg px-[24px] py-[20px]">
                <h4 className="text-[16px] font-semibold text-sky-900 mb-[8px] leading-[24px]">Graduate Programs</h4>
                <p className="text-[14px] text-stone-500 leading-[20px]">2-year rotational programs across all departments</p>
              </div>
              <div className="border border-[#90509F]/30 rounded-lg px-[24px] py-[20px]">
                <h4 className="text-[16px] font-semibold text-sky-900 mb-[8px] leading-[24px]">Zoiko Academy</h4>
                <p className="text-[14px] text-stone-500 leading-[20px]">Free coding bootcamps and financial literacy courses</p>
              </div>
              <div className="border border-[#90509F]/30 rounded-lg px-[24px] py-[20px]">
                <h4 className="text-[16px] font-semibold text-sky-900 mb-[8px] leading-[24px]">Global Internships</h4>
                <p className="text-[14px] text-stone-500 leading-[20px]">6-month paid internships across all regions</p>
              </div>
            </div>

            <button className="h-[56px] px-[32px] bg-[#90509F] text-white rounded-[50px] font-semibold text-[16px] shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] hover:bg-[#7a4286] transition-colors">
              Explore Student & Graduate Programs
            </button>
          </div>

          <div className="w-full lg:w-[562px] h-[585px] relative bg-neutral-500 flex-shrink-0 mt-[40px] lg:mt-0"></div>
        </div>
      </section>

      {/* 6. Engineered for Growth */}
      <section className="py-[32px] bg-sky-900 overflow-hidden flex flex-col items-center min-h-[384px]">
        <h2 className="text-[24px] font-semibold text-white leading-[64px]">Engineered for Growth</h2>
        <p className="text-[20px] font-normal text-white leading-[36px] text-center max-w-[900px] -mt-[4px]">
          Growth at Zoiko isn't accidental — it's engineered. With mentorship, Academy learning<br className="hidden md:block" />
          pathways, and executive leadership programs, we build tomorrow's leaders today.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-[48px] w-full max-w-[1200px] pb-[32px]">

          {/* Step 1 */}
          <div className="flex flex-col items-center w-[120px]">
            <div className="w-[56px] h-[56px] bg-white rounded-full shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] outline outline-1 outline-offset-[-1px] outline-white flex items-center justify-center relative z-10">
              <span className="text-sky-900 text-[24px] font-semibold leading-[40px]">1</span>
            </div>
            <div className="text-white text-[16px] font-semibold leading-[24px] mt-[19px]">Onboarding</div>
            <div className="text-white text-[14px] font-normal leading-[24px] text-center mt-[9px]">Comprehensive 30-<br />day program</div>
          </div>

          <div className="hidden md:block w-[128px] h-[2px] bg-white mt-[27px] mx-[21px]"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center w-[120px]">
            <div className="w-[56px] h-[56px] bg-white rounded-full shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] outline outline-1 outline-offset-[-1px] outline-white flex items-center justify-center relative z-10">
              <span className="text-sky-900 text-[24px] font-semibold leading-[40px]">2</span>
            </div>
            <div className="text-white text-[16px] font-semibold leading-[24px] mt-[19px]">Mentorship</div>
            <div className="text-white text-[14px] font-normal leading-[24px] text-center mt-[9px]">Paired with senior<br />leaders</div>
          </div>

          <div className="hidden md:block w-[128px] h-[2px] bg-white mt-[27px] mx-[21px]"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center w-[120px]">
            <div className="w-[56px] h-[56px] bg-white rounded-full shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] outline outline-1 outline-offset-[-1px] outline-white flex items-center justify-center relative z-10">
              <span className="text-sky-900 text-[24px] font-semibold leading-[40px]">3</span>
            </div>
            <div className="text-white text-[16px] font-semibold leading-[24px] mt-[19px]">Learning</div>
            <div className="text-white text-[14px] font-normal leading-[24px] text-center mt-[9px]">Zoiko Academy<br />pathways</div>
          </div>

          <div className="hidden md:block w-[128px] h-[2px] bg-white mt-[27px] mx-[21px]"></div>

          {/* Step 4 */}
          <div className="flex flex-col items-center w-[120px]">
            <div className="w-[56px] h-[56px] bg-white rounded-full shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] outline outline-1 outline-offset-[-1px] outline-white flex items-center justify-center relative z-10">
              <span className="text-sky-900 text-[24px] font-semibold leading-[40px]">4</span>
            </div>
            <div className="text-white text-[16px] font-semibold leading-[24px] mt-[19px]">Leadership</div>
            <div className="text-white text-[14px] font-normal leading-[24px] text-center mt-[9px]">Executive<br />development track</div>
          </div>

        </div>
      </section>

      {/* 7. Your Wellbeing, Our Priority */}
      <section className="py-[92px] px-6 sm:px-12 lg:px-24 bg-sky-50 flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col items-center">
          <h2 className="text-[32px] font-semibold text-sky-900 mb-[64px]">Your Wellbeing, Our Priority</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] px-[32px] py-[48px] flex flex-col justify-center items-center text-center h-[240px]">
              <h4 className="text-[18px] font-semibold text-sky-900 mb-[16px]">Global Health & Wellness</h4>
              <p className="text-[14px] text-stone-500 leading-[24px]">Comprehensive health coverage adapted to local markets with global consistency</p>
            </div>
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] px-[32px] py-[48px] flex flex-col justify-center items-center text-center h-[240px]">
              <h4 className="text-[18px] font-semibold text-sky-900 mb-[16px]">Retirement & Wealth Planning</h4>
              <p className="text-[14px] text-stone-500 leading-[24px]">401k matching, pension plans, and financial advisory services worldwide</p>
            </div>
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] px-[32px] py-[48px] flex flex-col justify-center items-center text-center h-[240px]">
              <h4 className="text-[18px] font-semibold text-sky-900 mb-[16px]">Flexible Work Models</h4>
              <p className="text-[14px] text-stone-500 leading-[24px]">Hybrid, remote, and flexible scheduling options tailored to role requirements</p>
            </div>
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] px-[32px] py-[48px] flex flex-col justify-center items-center text-center h-[240px]">
              <h4 className="text-[18px] font-semibold text-sky-900 mb-[16px]">Continuous Learning</h4>
              <p className="text-[14px] text-stone-500 leading-[24px]">Funded certifications, conference attendance, and Zoiko Academy courses</p>
            </div>
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] px-[32px] py-[48px] flex flex-col justify-center items-center text-center h-[240px]">
              <h4 className="text-[18px] font-semibold text-sky-900 mb-[16px]">Family Support</h4>
              <p className="text-[14px] text-stone-500 leading-[24px]">Parental leave, childcare assistance, and family wellness programs</p>
            </div>
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] px-[32px] py-[48px] flex flex-col justify-center items-center text-center h-[240px]">
              <h4 className="text-[18px] font-semibold text-sky-900 mb-[16px]">Global Mobility</h4>
              <p className="text-[14px] text-stone-500 leading-[24px]">International assignment opportunities with relocation support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Innovation Thrives on Diversity */}
      <section className="py-[92px] px-6 sm:px-12 lg:px-24 bg-white flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="flex-1 max-w-[580px] pt-[20px]">
            <h2 className="text-[32px] font-semibold text-sky-900 mb-[24px]">Innovation Thrives on Diversity</h2>
            <p className="text-[18px] text-stone-500 mb-[48px] leading-[32px]">
              50% of our leadership represents global regions — ensuring ideas and solutions as diverse as the clients we serve.
            </p>

            <div className="flex gap-[64px]">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[48px] font-semibold text-[#90509F] leading-[56px] mb-[8px]">50%</span>
                <span className="text-[13px] font-semibold text-stone-500">Global Leadership</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[48px] font-semibold text-[#90509F] leading-[56px] mb-[8px]">40+</span>
                <span className="text-[13px] font-semibold text-stone-500">Countries</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[48px] font-semibold text-[#90509F] leading-[56px] mb-[8px]">15+</span>
                <span className="text-[13px] font-semibold text-stone-500">Languages</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[562px] h-[384px] bg-neutral-500 rounded-xl relative flex-shrink-0 mt-[48px] lg:mt-0"></div>
        </div>
      </section>

      {/* 9. Work That Shapes a Better World */}
      <section className="py-[92px] px-6 sm:px-12 lg:px-24 bg-[#1B2333] flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col items-center">
          <h2 className="text-[24px] font-semibold text-white mb-[8px]">Work That Shapes a Better World</h2>
          <p className="text-[16px] text-sky-200 mb-[48px]">Careers aligned with Sustainability, ESG, and Responsible AI.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
            <div className="bg-[#243147] rounded-xl border border-white/5 px-[32px] py-[40px] flex flex-col items-center text-center h-[200px] justify-center shadow-lg hover:bg-[#2a3851] transition-colors">
              <h4 className="text-[16px] font-semibold text-white mb-[16px]">Sustainable Technology</h4>
              <p className="text-[14px] text-sky-100/70 leading-[24px]">Build green cloud solutions and carbon-neutral infrastructure</p>
            </div>
            <div className="bg-[#243147] rounded-xl border border-white/5 px-[32px] py-[40px] flex flex-col items-center text-center h-[200px] justify-center shadow-lg hover:bg-[#2a3851] transition-colors">
              <h4 className="text-[16px] font-semibold text-white mb-[16px]">Responsible AI</h4>
              <p className="text-[14px] text-sky-100/70 leading-[24px]">Develop ethical AI frameworks and bias-free algorithms</p>
            </div>
            <div className="bg-[#243147] rounded-xl border border-white/5 px-[32px] py-[40px] flex flex-col items-center text-center h-[200px] justify-center shadow-lg hover:bg-[#2a3851] transition-colors">
              <h4 className="text-[16px] font-semibold text-white mb-[16px]">Community Impact</h4>
              <p className="text-[14px] text-sky-100/70 leading-[24px]">Create technology solutions that empower underserved communities</p>
            </div>
          </div>

          <button className="mt-[48px] h-[48px] px-[24px] bg-[#90509F] text-white rounded-full font-semibold text-[14px] flex items-center justify-center hover:bg-[#7a4286] transition-colors">
            Join Our Impact Teams <span className="ml-[8px] font-bold">→</span>
          </button>
        </div>
      </section>

      {/* 10. Ready to Transform Your Business? */}
      <section className="py-[92px] px-6 sm:px-12 lg:px-24 bg-[#F2F1F0] flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-[480px]">
            <h2 className="text-[32px] font-semibold text-zinc-800 mb-[24px] leading-[44px]">
              Ready to Transform<br />Your Business?
            </h2>
            <p className="text-[16px] text-stone-500 mb-[48px] leading-[28px]">
              Connect with our global team of experts to discuss your digital transformation journey and discover how we can accelerate your success.
            </p>

            <div className="flex flex-col gap-[32px]">
              <div className="flex items-start gap-[16px]">
                <div className="w-[48px] h-[48px] bg-[#1B3B5A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-[20px] h-[20px] text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-zinc-800 mb-[4px]">Email Us</span>
                  <span className="text-[14px] text-stone-400 mb-[4px]">hello@zws.com</span>
                  <span className="text-[13px] text-stone-400">Response within 4 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-[16px]">
                <div className="w-[48px] h-[48px] bg-[#1B3B5A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-[20px] h-[20px] text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-zinc-800 mb-[4px]">Call Us</span>
                  <span className="text-[14px] text-stone-400 mb-[4px]">+1 (555) 123-4567</span>
                  <span className="text-[13px] text-stone-400">24/7 Support Available</span>
                </div>
              </div>

              <div className="flex items-start gap-[16px]">
                <div className="w-[48px] h-[48px] bg-[#1B3B5A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-[20px] h-[20px] text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-zinc-800 mb-[4px]">Live Chat</span>
                  <span className="text-[14px] text-stone-400 mb-[4px]">Instant Support</span>
                  <span className="text-[13px] text-stone-400">Online now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[560px] bg-white rounded-xl border border-neutral-200 p-[40px] shadow-sm mt-[48px] lg:mt-0">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col">
                <label className="text-[12px] font-semibold text-zinc-800 mb-[8px]">Full Name</label>
                <input type="text" className="w-full h-[48px] bg-neutral-50 rounded-lg border border-neutral-200 px-[16px] outline-none focus:border-sky-900" />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] font-semibold text-zinc-800 mb-[8px]">Business Email</label>
                <input type="email" className="w-full h-[48px] bg-neutral-50 rounded-lg border border-neutral-200 px-[16px] outline-none focus:border-sky-900" />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] font-semibold text-zinc-800 mb-[8px]">Company</label>
                <input type="text" className="w-full h-[48px] bg-neutral-50 rounded-lg border border-neutral-200 px-[16px] outline-none focus:border-sky-900" />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] font-semibold text-zinc-800 mb-[8px]">Service Interest</label>
                <input type="text" placeholder="Select a service" className="w-full h-[48px] bg-neutral-50 rounded-lg border border-neutral-200 px-[16px] outline-none focus:border-sky-900 placeholder:text-stone-400" />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] font-semibold text-zinc-800 mb-[8px]">Project Budget</label>
                <input type="text" placeholder="Select budget range" className="w-full h-[48px] bg-neutral-50 rounded-lg border border-neutral-200 px-[16px] outline-none focus:border-sky-900 placeholder:text-stone-400" />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] font-semibold text-zinc-800 mb-[8px]">Project Details</label>
                <textarea placeholder="Tell us about your project requirements, timeline, and objectives..." className="w-full h-[120px] bg-neutral-50 rounded-lg border border-neutral-200 px-[16px] py-[16px] outline-none focus:border-sky-900 placeholder:text-stone-400 resize-none"></textarea>
              </div>
              <button className="h-[48px] w-[200px] bg-gradient-to-r from-[#90509F] to-[#2B436D] text-white rounded-lg font-semibold text-[14px] mt-[8px] hover:opacity-90 transition-opacity">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
