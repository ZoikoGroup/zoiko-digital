import React from 'react';
import Link from 'next/link';
import { Search, CreditCard, ShieldCheck, Server, Puzzle, Phone, Mail, MessageSquare, Ticket, FileText, ChevronRight, UploadCloud, Cloud, BarChart, ChevronUp, ChevronDown, CheckCircle2, Users, Check, Monitor, Activity, Clock, UserCheck, Globe, Star, BookOpen } from 'lucide-react';

export default function HelpSupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="w-full flex justify-center bg-slate-50">
        <div className="w-[1440px] h-[495px] relative bg-gradient-to-r from-sky-100 via-pink-100 to-green-100 overflow-hidden">
            <div className="w-56 h-10 left-[482px] top-[77px] absolute bg-white/40 rounded-[20px] shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px]">
                <div className="size-2 left-[16px] top-[16.79px] absolute bg-green-600 rounded-full"></div>
                <div className="w-44 h-4 left-[32px] top-[12px] absolute text-center justify-center text-zinc-800 text-[13px] font-normal font-['Inter'] leading-6">All Systems Operational</div>
            </div>
            <div className="w-56 h-10 left-[732.74px] top-[77px] absolute bg-white/40 rounded-[20px] shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px]">
                <div className="w-44 h-4 left-[20px] top-[12px] absolute text-center justify-center"><span className="text-zinc-800 text-[13px] font-normal font-['Inter'] leading-6">Avg. chat response: </span><span className="text-zinc-800 text-[13px] font-bold font-['Inter'] leading-6">2m</span></div>
            </div>
            <div className="w-[656.29px] h-20 left-[392px] top-[150.59px] absolute text-center justify-center text-[#2c5378] text-[36px] font-bold font-['Inter'] leading-[76.80px]">How can we help you today?</div>
            <div className="w-[822px] h-16 left-[309px] top-[242px] absolute bg-white rounded-2xl shadow-[0px_12px_40px_0px_rgba(144,80,159,0.20)] outline outline-2 outline-offset-[-2px] outline-[#9a5b9b] overflow-hidden">
                <div className="w-[818.09px] h-16 left-[2px] top-[2px] absolute overflow-hidden">
                    <div className="w-[668.09px] h-5 left-[70px] top-[20px] absolute overflow-hidden">
                        <div className="left-0 top-0 absolute justify-center text-stone-500 text-[15px] italic font-normal font-['Inter']">Describe your issue in natural language... e.g., 'My API calls are returning errors'</div>
                    </div>
                </div>
                <div className="size-10 left-[18px] top-[12.50px] absolute bg-[#9a5b9b] rounded-[20px] flex justify-center items-center cursor-pointer">
                    <Search className="w-4 h-4 text-white" />
                </div>
            </div>
            <div className="w-48 h-11 left-[470.23px] top-[395px] absolute bg-[#9a5b9b] rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex items-center justify-center cursor-pointer">
                <div className="text-center justify-center text-white text-[13px] font-bold font-['Inter']">Contact Support</div>
            </div>
            <div className="w-72 h-11 left-[691.56px] top-[395px] absolute bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-[#9a5b9b] flex items-center justify-center cursor-pointer">
                <div className="text-center justify-center text-[#9a5b9b] text-[13px] font-bold font-['Inter']">Explore Tutorials & Guides</div>
            </div>
        </div>
      </section>

      {/* Top Articles for You Section */}
      <section className="w-full flex justify-center bg-sky-50">
        <div className="w-[1440px] h-[745px] relative bg-sky-50">
            <div className="w-[1200px] h-[703.70px] left-[120px] top-[80px] absolute">
                <div className="w-96 h-16 left-[413px] top-[-30px] absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[64px]">Top Articles for You</div>
                <div className="left-[273px] top-[25px] absolute text-center justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Personalized recommendations based on your account, location, and recent activity</div>
                <div className="w-72 h-96 left-[20px] top-[92px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200">
                    <div className="w-28 h-8 left-[33px] top-[33px] absolute justify-center text-sky-900 text-lg font-bold font-['Inter'] leading-8">Curated for:</div>
                    <div className="w-60 h-9 left-[33px] top-[79.72px] absolute bg-sky-100 rounded-2xl">
                        <div className="w-24 h-4 left-[12px] top-[9px] absolute justify-center text-sky-900 text-xs font-medium font-['Inter'] leading-6">North America</div>
                    </div>
                    <div className="w-60 h-9 left-[33px] top-[122.77px] absolute bg-pink-100 rounded-2xl">
                        <div className="w-28 h-4 left-[12px] top-[9px] absolute justify-center text-fuchsia-700 text-xs font-medium font-['Inter'] leading-6">Enterprise Plan</div>
                    </div>
                    <div className="w-60 h-9 left-[33px] top-[165.81px] absolute bg-green-100 rounded-2xl">
                        <div className="w-28 h-4 left-[12px] top-[9px] absolute justify-center text-green-700 text-sm font-medium font-['Inter'] leading-6">Technical Lead</div>
                    </div>
                    <div className="w-64 h-10 left-[18px] top-[294px] absolute bg-fuchsia-700 rounded-lg">
                        <div className="left-[47px] top-[15px] absolute justify-center text-white text-base font-medium font-['Inter'] leading-6">Based on Recent Searches</div>
                        <div className="size-4 left-[23px] top-[12px] absolute justify-center text-white text-xs font-black font-['Font_Awesome_5_Free'] leading-4"></div>
                    </div>
                    <div className="w-64 h-10 left-[18px] top-[390px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200">
                        <div className="w-5 h-4 left-[22px] top-[12px] absolute justify-center text-zinc-800 text-xs font-black font-['Font_Awesome_5_Free'] leading-4"></div>
                        <div className="left-[47px] top-[15px] absolute justify-center text-zinc-700 text-base font-medium font-['Inter'] leading-6">Recommended for You</div>
                    </div>
                    <div className="w-64 h-10 left-[18px] top-[342px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200">
                        <div className="w-3.5 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-xs font-black font-['Font_Awesome_5_Free'] leading-4"></div>
                        <div className="left-[47px] top-[15px] absolute justify-center text-zinc-700 text-base font-medium font-['Inter'] leading-6">Most Viewed This Week</div>
                    </div>
                </div>
                <div className="w-[812px] h-80 left-[368px] top-[92px] absolute">
                    <div className="w-[812px] h-24 left-0 top-0 absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden">
                        <div className="left-[25px] top-[25px] absolute justify-center text-[#2c5378] text-[15px] font-bold font-['Inter'] leading-8">API Authentication Best Practices</div>
                        <div className="w-20 h-4 left-[406px] top-[28px] absolute justify-center text-stone-500 text-xs font-normal font-['Inter'] leading-6">👁 2.4K views</div>
                        <div className="w-36 h-4 left-[505px] top-[28px] absolute justify-center text-stone-500 text-xs font-normal font-['Inter'] leading-6">📅 Updated 2 days ago</div>
                        <div className="w-16 h-4 left-[700px] top-[30px] absolute justify-center text-green-600 text-[10px] font-normal font-['Inter'] leading-6">🟢 Beginner</div>
                        <div className="right-[25px] top-[30px] absolute flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#9a5b9b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <div className="w-[812px] h-28 left-0 top-[104.72px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden">
                        <div className="left-[25px] top-[23px] absolute justify-center text-[#2c5378] text-[15px] font-bold font-['Inter'] leading-8">Troubleshooting Cloud Deployment<br/>Issues</div>
                        <div className="w-20 h-4 left-[406px] top-[35px] absolute justify-center text-stone-500 text-xs font-normal font-['Inter'] leading-6">👁 1.8K views</div>
                        <div className="w-36 h-4 left-[505px] top-[35px] absolute justify-center text-stone-500 text-xs font-normal font-['Inter'] leading-6">📅 Updated 1 week ago</div>
                        <div className="w-28 h-7 left-[662px] top-[32px] absolute bg-yellow-50 rounded-xl">
                            <div className="w-24 h-4 left-[8px] top-[5px] absolute justify-center text-orange-500 text-xs font-normal font-['Inter'] leading-6">🟡 Intermediate</div>
                        </div>
                        <div className="right-[25px] top-[37px] absolute flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#9a5b9b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <div className="w-[812px] h-24 left-0 top-[240.16px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden">
                        <div className="left-[25px] top-[25px] absolute justify-center text-[#2c5378] text-[15px] font-bold font-['Inter'] leading-8">Database Performance Optimization</div>
                        <div className="w-20 h-4 left-[406px] top-[28px] absolute justify-center text-stone-500 text-xs font-normal font-['Inter'] leading-6">👁 3.1K views</div>
                        <div className="w-36 h-4 left-[505px] top-[28px] absolute justify-center text-stone-500 text-xs font-normal font-['Inter'] leading-6">📅 Updated 3 days ago</div>
                        <div className="w-24 h-7 left-[679px] top-[25px] absolute bg-pink-100 rounded-xl">
                            <div className="w-20 h-4 left-[8px] top-[5px] absolute justify-center text-red-600 text-xs font-normal font-['Inter'] leading-6">🔴 Advanced</div>
                        </div>
                        <div className="right-[25px] top-[30px] absolute flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#9a5b9b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>      {/* Guides & Tutorials Section */}
      <section className="w-full flex justify-center bg-slate-50">
        <div className="w-[1440px] h-[1073px] relative bg-slate-50">
            <div className="w-[1200px] h-[1033.14px] left-[120px] top-[26px] absolute">
                <div className="left-[492.67px] top-0 absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[64px]">Guides & Tutorials</div>
                <div className="left-[321.83px] top-[49px] absolute text-center justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Immersive and interactive learning experiences to master ZWS platform</div>
                
                {/* Card 1 */}
                <div className="w-[564px] h-96 left-[20px] top-[110.14px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] outline outline-2 outline-offset-[-2px] outline-[#9a5b9b]">
                    <div className="size-20 left-[34px] top-[34px] absolute bg-indigo-500 rounded-[40px] flex items-center justify-center">
                        <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-64 h-6 left-[34px] top-[143px] absolute justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">Cloud Infrastructure Setup</div>
                    <div className="w-96 h-11 left-[34px] top-[191.27px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Complete guide to setting up your cloud infrastructure with best<br/>practices and security configurations.</div>
                    
                    <div className="w-11 h-4 left-[52.39px] top-[265.46px] absolute justify-center text-[#2c5378] text-sm font-normal font-['Inter'] leading-6">45 min</div>
                    <div className="w-24 h-4 left-[111.59px] top-[265.46px] absolute justify-center text-zinc-800 text-xs font-bold font-['Inter'] leading-6">🟡 Intermediate</div>
                    <div className="w-16 h-4 left-[222.42px] top-[265.46px] absolute justify-center text-[#9a5b9b] text-xs font-normal font-['Inter'] leading-6">🔧 Hands-on</div>
                    
                    <div className="w-32 h-8 left-[34px] top-[309.50px] absolute bg-[#9a5b9b] rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">▶ Watch Video</div>
                    </div>
                    <div className="w-36 h-8 left-[171.59px] top-[309.50px] absolute bg-[#2c5378] rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">Try Simulator</div>
                    </div>
                    <div className="w-36 h-8 left-[318.83px] top-[309.50px] absolute bg-green-600 rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">Step-by-Step</div>
                    </div>
                    
                    <div className="w-40 h-8 left-[34px] top-[357.50px] absolute bg-neutral-100 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 flex items-center px-4">
                        <div className="text-zinc-800 text-xs font-normal font-['Inter']">Interactive Sandbox</div>
                    </div>
                    <div className="w-36 h-8 left-[198.33px] top-[357.50px] absolute bg-neutral-100 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 flex items-center px-4">
                        <div className="text-zinc-800 text-xs font-normal font-['Inter']">3D Configuration</div>
                    </div>
                    <div className="w-20 h-6 left-[461.92px] top-[18px] absolute bg-[#9a5b9b] rounded-xl flex items-center justify-center">
                        <div className="text-white text-xs font-bold font-['Inter'] leading-4">FEATURED</div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-[564px] h-96 left-[616px] top-[110.14px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                    <div className="size-20 left-[34px] top-[34px] absolute bg-fuchsia-300 rounded-[40px] flex items-center justify-center">
                        <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-72 h-6 left-[34px] top-[143px] absolute justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">Security & Compliance Setup</div>
                    <div className="w-96 h-11 left-[34px] top-[191.27px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Implement enterprise-grade security measures and ensure<br/>compliance with industry standards.</div>
                    
                    <div className="w-11 h-4 left-[52.39px] top-[265.46px] absolute justify-center text-[#2c5378] text-sm font-normal font-['Inter'] leading-6">60 min</div>
                    <div className="w-20 h-4 left-[111.59px] top-[265.46px] absolute justify-center text-zinc-800 text-xs font-bold font-['Inter'] leading-6">🔴 Advanced</div>
                    <div className="w-28 h-4 left-[205.09px] top-[265.46px] absolute justify-center text-[#9a5b9b] text-xs font-normal font-['Inter'] leading-6">📚 Comprehensive</div>
                    
                    <div className="w-32 h-8 left-[34px] top-[309.50px] absolute bg-[#9a5b9b] rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">▶ Watch Video</div>
                    </div>
                    <div className="w-36 h-8 left-[171.59px] top-[309.50px] absolute bg-[#2c5378] rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">Try Simulator</div>
                    </div>
                    <div className="w-36 h-8 left-[318.83px] top-[309.50px] absolute bg-green-600 rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">Step-by-Step</div>
                    </div>
                    <div className="w-40 h-8 left-[34px] top-[357.50px] absolute bg-neutral-100 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 flex items-center px-4">
                        <div className="text-zinc-800 text-xs font-normal font-['Inter']">Troubleshooting Flow</div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-[564px] h-96 left-[20px] top-[564.64px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                    <div className="size-20 left-[34px] top-[34px] absolute bg-blue-400 rounded-[40px] flex items-center justify-center">
                        <div className="text-white text-3xl font-black font-['Inter']">{'</>'}</div>
                    </div>
                    <div className="w-72 h-6 left-[34px] top-[143px] absolute justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">API Integration Masterclass</div>
                    <div className="w-[482.23px] h-11 left-[34px] top-[191.27px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Master API integration with real-world examples, authentication, and<br/>error handling strategies.</div>
                    
                    <div className="w-11 h-4 left-[52.39px] top-[265.46px] absolute justify-center text-[#2c5378] text-sm font-normal font-['Inter'] leading-6">30 min</div>
                    <div className="w-16 h-4 left-[111.59px] top-[265.46px] absolute justify-center text-zinc-800 text-xs font-bold font-['Inter'] leading-6">🟢 Beginner</div>
                    <div className="w-20 h-4 left-[199.22px] top-[265.46px] absolute justify-center text-[#9a5b9b] text-xs font-normal font-['Inter'] leading-6">⚡ Interactive</div>
                    
                    <div className="w-32 h-8 left-[34px] top-[309.50px] absolute bg-[#9a5b9b] rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">▶ Watch Video</div>
                    </div>
                    <div className="w-36 h-8 left-[171.59px] top-[309.50px] absolute bg-[#2c5378] rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">Try Simulator</div>
                    </div>
                    <div className="w-36 h-8 left-[318.83px] top-[309.50px] absolute bg-green-600 rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">Step-by-Step</div>
                    </div>
                    <div className="w-40 h-8 left-[34px] top-[357.50px] absolute bg-neutral-100 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 flex items-center px-4">
                        <div className="text-zinc-800 text-xs font-normal font-['Inter']">Interactive Sandbox</div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="w-[564px] h-96 left-[616px] top-[564.64px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                    <div className="size-20 left-[34px] top-[34px] absolute bg-green-400 rounded-[40px] flex items-center justify-center">
                        <BarChart className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-56 h-6 left-[34px] top-[143px] absolute justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">Analytics & Monitoring</div>
                    <div className="w-[487.56px] h-11 left-[34px] top-[191.27px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Set up comprehensive monitoring and analytics to track performance<br/>and identify issues.</div>
                    
                    <div className="w-11 h-4 left-[52.39px] top-[265.46px] absolute justify-center text-[#2c5378] text-sm font-normal font-['Inter'] leading-6">40 min</div>
                    <div className="w-24 h-4 left-[111.59px] top-[265.46px] absolute justify-center text-zinc-800 text-xs font-bold font-['Inter'] leading-6">🟡 Intermediate</div>
                    <div className="w-16 h-4 left-[222.42px] top-[265.46px] absolute justify-center text-[#9a5b9b] text-xs font-normal font-['Inter'] leading-6">🎯 Practical</div>
                    
                    <div className="w-32 h-8 left-[34px] top-[309.50px] absolute bg-[#9a5b9b] rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">▶ Watch Video</div>
                    </div>
                    <div className="w-36 h-8 left-[171.59px] top-[309.50px] absolute bg-[#2c5378] rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">Try Simulator</div>
                    </div>
                    <div className="w-36 h-8 left-[318.83px] top-[309.50px] absolute bg-green-600 rounded-md flex items-center justify-center">
                        <div className="text-white text-sm font-normal font-['Inter']">Step-by-Step</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Community Forum Section */}
      <section className="w-full flex justify-center bg-fuchsia-50">
        <div className="w-[1440px] h-[1087px] relative bg-fuchsia-50">
            <div className="w-[1200px] h-[1119.27px] left-[120px] top-0 absolute">
                <div className="left-[491.22px] top-[32px] absolute text-center justify-center text-[#2c5378] text-2xl font-bold font-['Inter'] leading-[64px]">Community Forum</div>
                <div className="left-[287.16px] top-[83px] absolute text-center justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Collaborative hub where developers and experts share knowledge and solutions</div>
                
                {/* Community Impact */}
                <div className="w-72 h-64 left-[20px] top-[152.29px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200">
                    <div className="w-44 h-8 left-[25px] top-[25px] absolute justify-center text-[#2c5378] text-lg font-bold font-['Inter'] leading-8">Community Impact</div>
                    <div className="w-16 h-7 left-[25px] top-[76.71px] absolute justify-center text-[#9a5b9b] text-2xl font-bold font-['Inter'] leading-10">15.2K</div>
                    <div className="w-24 h-4 left-[171.83px] top-[82.39px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Active Members</div>
                    <div className="w-16 h-7 left-[25px] top-[131.10px] absolute justify-center text-[#9a5b9b] text-xl font-bold font-['Inter'] leading-10">42.8K</div>
                    <div className="w-32 h-4 left-[143px] top-[136.78px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Questions Answered</div>
                    <div className="w-16 h-7 left-[25px] top-[185.50px] absolute justify-center text-[#9a5b9b] text-xl font-bold font-['Inter'] leading-10">98.5%</div>
                    <div className="w-24 h-4 left-[172.59px] top-[191.17px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Resolution Rate</div>
                </div>
                
                {/* Top Contributors */}
                <div className="w-72 h-96 left-[20px] top-[444.18px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200">
                    <div className="w-40 h-8 left-[25px] top-[25px] absolute justify-center text-[#2c5378] text-lg font-bold font-['Inter'] leading-8">Top Contributors</div>
                    <div className="w-64 h-24 left-[25px] top-[71.71px] absolute bg-white rounded-lg">
                        <div className="w-2 h-8 left-[19.48px] top-[29.04px] absolute text-center justify-center text-zinc-800 text-2xl font-normal font-['Inter'] leading-8">🏆</div>
                        <div className="w-24 h-4 left-[54px] top-[12px] absolute justify-center text-[#2c5378] text-base font-bold font-['Inter'] leading-6">Sarah Chen</div>
                        <div className="w-14 h-3.5 left-[54px] top-[35.60px] absolute justify-center text-stone-500 text-xs font-normal font-['Inter'] leading-5">2,450 pts</div>
                        <div className="w-12 h-5 left-[54px] top-[58.86px] absolute bg-green-100 rounded-lg flex items-center justify-center">
                            <div className="text-green-700 text-xs font-bold font-['Inter']">Expert</div>
                        </div>
                        <div className="w-12 h-5 left-[105.63px] top-[58.86px] absolute bg-sky-100 rounded-lg flex items-center justify-center">
                            <div className="text-[#2c5378] text-xs font-bold font-['Inter']">Helpful</div>
                        </div>
                    </div>
                    <div className="w-64 h-24 left-[25px] top-[176.50px] absolute bg-white rounded-lg">
                        <div className="w-2 h-8 left-[19.48px] top-[29.03px] absolute text-center justify-center text-zinc-800 text-2xl font-normal font-['Inter'] leading-8">🥈</div>
                        <div className="w-28 h-4 left-[54px] top-[12px] absolute justify-center text-[#2c5378] text-base font-bold font-['Inter'] leading-6">Mike Rodriguez</div>
                        <div className="w-14 h-3.5 left-[54px] top-[35.59px] absolute justify-center text-stone-500 text-xs font-normal font-['Inter'] leading-5">2,180 pts</div>
                        <div className="w-12 h-5 left-[54px] top-[58.86px] absolute bg-pink-100 rounded-lg flex items-center justify-center">
                            <div className="text-[#9a5b9b] text-xs font-bold font-['Inter']">Mentor</div>
                        </div>
                        <div className="w-24 h-5 left-[108.09px] top-[58.86px] absolute bg-yellow-50 rounded-lg flex items-center justify-center">
                            <div className="text-orange-500 text-xs font-bold font-['Inter']">Problem Solver</div>
                        </div>
                    </div>
                    <div className="w-64 h-24 left-[25px] top-[281.28px] absolute bg-white rounded-lg">
                        <div className="w-2 h-8 left-[19.48px] top-[29.03px] absolute text-center justify-center text-zinc-800 text-2xl font-normal font-['Inter'] leading-8">🥉</div>
                        <div className="w-28 h-4 left-[54px] top-[12px] absolute justify-center text-[#2c5378] text-base font-bold font-['Inter'] leading-6">Alex Johnson</div>
                        <div className="w-14 h-3.5 left-[54px] top-[35.59px] absolute justify-center text-stone-500 text-xs font-normal font-['Inter'] leading-5">1,920 pts</div>
                        <div className="w-16 h-5 left-[54px] top-[58.86px] absolute bg-pink-100 rounded-lg flex items-center justify-center">
                            <div className="text-red-600 text-xs font-bold font-['Inter']">Innovator</div>
                        </div>
                    </div>
                </div>
                
                {/* Feature Requests */}
                <div className="w-72 h-40 left-[20px] top-[871.24px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200">
                    <div className="w-40 h-8 left-[25px] top-[25px] absolute justify-center text-[#2c5378] text-lg font-bold font-['Inter'] leading-8">Feature Requests</div>
                    <div className="w-60 h-4 left-[25px] top-[61.76px] absolute justify-center text-zinc-800 text-base font-normal font-['Inter'] leading-6">Help shape our product roadmap</div>
                    <div className="w-64 h-9 left-[25px] top-[97.31px] absolute bg-[#9a5b9b] rounded-lg flex items-center justify-center cursor-pointer">
                        <div className="text-white text-sm font-normal font-['Inter']">Suggest a Feature</div>
                    </div>
                </div>
                
                {/* Discussions Area */}
                <div className="w-[812px] h-[878px] left-[368px] top-[152px] absolute bg-white rounded-xl">
                    <div className="w-40 h-9 left-[32px] top-[32px] absolute bg-[#9a5b9b] rounded-md outline outline-2 outline-offset-[-2px] outline-[#9a5b9b] flex items-center justify-center cursor-pointer">
                        <div className="text-white text-sm font-normal font-['Inter']">Recent Discussions</div>
                    </div>
                    <div className="w-32 h-9 left-[201.05px] top-[32px] absolute bg-white rounded-md outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center cursor-pointer hover:bg-slate-50">
                        <div className="text-black text-sm font-normal font-['Inter']">Popular Topics</div>
                    </div>
                    <div className="w-36 h-9 left-[340.23px] top-[32px] absolute bg-white rounded-md outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center cursor-pointer hover:bg-slate-50">
                        <div className="text-black text-sm font-normal font-['Inter']">Recently Answered</div>
                    </div>
                    <div className="w-40 h-9 left-[623.30px] top-[32px] absolute bg-green-600 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-green-700 transition">
                        <div className="text-white text-sm font-semibold font-['Inter'] leading-3">+</div>
                        <div className="text-white text-sm font-semibold font-['Inter']">Ask a Question</div>
                    </div>
                    
                    {/* Discussion 1 */}
                    <div className="w-[748px] h-52 left-[32px] top-[99px] absolute bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] border border-slate-100">
                        <div className="w-14 h-40 left-[24px] top-[24px] absolute flex flex-col items-center gap-2">
                            <div className="size-8 bg-neutral-100 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <ChevronUp className="w-4 h-4 text-stone-500" />
                            </div>
                            <div className="text-[#2c5378] text-base font-bold font-['Inter'] leading-7">42</div>
                            <div className="size-8 bg-neutral-100 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <ChevronDown className="w-4 h-4 text-stone-500" />
                            </div>
                        </div>
                        <div className="w-[479.66px] h-8 left-[100px] top-[24px] absolute">
                            <div className="w-96 h-5 left-0 top-[4px] absolute justify-center text-[#2c5378] text-lg font-bold font-['Inter'] leading-8 cursor-pointer hover:underline">How to handle rate limiting in API calls?</div>
                        </div>
                        <div className="w-[455.01px] h-11 left-[100px] top-[66.71px] absolute justify-center text-stone-500 text-base font-normal font-['Inter'] leading-6">I'm experiencing rate limiting issues when making bulk API calls.<br/>What's the best approach to handle this gracefully?</div>
                        <div className="w-28 h-4 left-[100px] top-[132.90px] absolute justify-center"><span className="text-stone-500 text-sm font-normal font-['Inter'] leading-6">by </span><span className="text-stone-500 text-sm font-bold font-['Inter'] leading-6 cursor-pointer hover:underline">DevMaster99</span></div>
                        <div className="w-20 h-4 left-[224px] top-[132.90px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">2 hours ago</div>
                        <div className="w-6 h-4 left-[316.02px] top-[132.90px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">API</div>
                        <div className="w-14 h-4 left-[355.22px] top-[132.90px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">8 replies</div>
                        <div className="h-7 px-3 left-[100px] top-[160.95px] absolute bg-neutral-100 rounded-xl flex items-center">
                            <div className="text-[#2c5378] text-xs font-medium font-['Inter'] leading-5">api</div>
                        </div>
                        <div className="h-7 px-3 left-[141.08px] top-[160.95px] absolute bg-neutral-100 rounded-xl flex items-center">
                            <div className="text-[#2c5378] text-xs font-medium font-['Inter'] leading-5">rate-limiting</div>
                        </div>
                        <div className="h-7 px-3 left-[231.22px] top-[160.95px] absolute bg-neutral-100 rounded-xl flex items-center">
                            <div className="text-[#2c5378] text-xs font-medium font-['Inter'] leading-5">best-practices</div>
                        </div>
                        <div className="w-36 h-7 left-[580px] top-[23.97px] absolute bg-green-100 rounded-xl flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
                            <div className="text-green-700 text-xs font-bold font-['Inter'] leading-5">Verified Answer</div>
                        </div>
                        <div className="w-36 h-7 left-[580px] top-[60.71px] absolute bg-sky-100 rounded-xl flex items-center justify-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#2c5378]" />
                            <div className="text-[#2c5378] text-xs font-bold font-['Inter'] leading-5">Staff Response</div>
                        </div>
                    </div>
                    
                    {/* Discussion 2 */}
                    <div className="w-[748px] h-52 left-[32px] top-[336.42px] absolute bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] border border-slate-100">
                        <div className="w-14 h-40 left-[24px] top-[24px] absolute flex flex-col items-center gap-2">
                            <div className="size-8 bg-neutral-100 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <ChevronUp className="w-4 h-4 text-stone-500" />
                            </div>
                            <div className="text-[#2c5378] text-base font-bold font-['Inter'] leading-7">28</div>
                            <div className="size-8 bg-neutral-100 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <ChevronDown className="w-4 h-4 text-stone-500" />
                            </div>
                        </div>
                        <div className="w-[479.66px] h-8 left-[100px] top-[24px] absolute">
                            <div className="w-96 h-5 left-0 top-[4px] absolute justify-center text-[#2c5378] text-lg font-bold font-['Inter'] leading-8 cursor-pointer hover:underline">Database connection pooling best practices</div>
                        </div>
                        <div className="w-96 h-11 left-[100px] top-[66.72px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Looking for recommendations on connection pool size and<br/>configuration for high-traffic applications.</div>
                        <div className="w-20 h-4 left-[100px] top-[132.90px] absolute justify-center"><span className="text-stone-500 text-sm font-normal font-['Inter'] leading-6">by </span><span className="text-stone-500 text-sm font-bold font-['Inter'] leading-6 cursor-pointer hover:underline">DataGuru</span></div>
                        <div className="w-20 h-4 left-[200.78px] top-[132.90px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">5 hours ago</div>
                        <div className="w-16 h-4 left-[292.80px] top-[132.90px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Database</div>
                        <div className="w-16 h-4 left-[370.41px] top-[132.90px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">12 replies</div>
                        <div className="h-7 px-3 left-[100px] top-[160.95px] absolute bg-neutral-100 rounded-xl flex items-center">
                            <div className="text-[#2c5378] text-xs font-medium font-['Inter'] leading-5">database</div>
                        </div>
                        <div className="h-7 px-3 left-[176.66px] top-[160.95px] absolute bg-neutral-100 rounded-xl flex items-center">
                            <div className="text-[#2c5378] text-xs font-medium font-['Inter'] leading-5">performance</div>
                        </div>
                        <div className="h-7 px-3 left-[272.50px] top-[160.95px] absolute bg-neutral-100 rounded-xl flex items-center">
                            <div className="text-[#2c5378] text-xs font-medium font-['Inter'] leading-5">scaling</div>
                        </div>
                        <div className="w-32 h-7 left-[595.66px] top-[24px] absolute bg-green-100 rounded-xl flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
                            <div className="text-green-700 text-xs font-bold font-['Inter'] leading-5">Verified Answer</div>
                        </div>
                    </div>
                    
                    {/* Discussion 3 */}
                    <div className="w-[748px] h-60 left-[32px] top-[573.84px] absolute bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] border border-slate-100">
                        <div className="w-14 h-48 left-[24px] top-[24px] absolute flex flex-col items-center gap-2">
                            <div className="size-8 bg-neutral-100 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <ChevronUp className="w-4 h-4 text-stone-500" />
                            </div>
                            <div className="text-[#2c5378] text-base font-bold font-['Inter'] leading-7">35</div>
                            <div className="size-8 bg-neutral-100 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <ChevronDown className="w-4 h-4 text-stone-500" />
                            </div>
                        </div>
                        <div className="w-96 h-16 left-[100px] top-[24px] absolute">
                            <div className="w-96 h-12 left-0 top-[4px] absolute justify-center text-[#2c5378] text-lg font-bold font-['Inter'] leading-8 cursor-pointer hover:underline">SSL certificate configuration for custom<br/>domains</div>
                        </div>
                        <div className="w-96 h-11 left-[100px] top-[97.44px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Need help setting up SSL certificates for multiple custom<br/>domains. Getting certificate validation errors.</div>
                        <div className="w-32 h-4 left-[100px] top-[163.62px] absolute justify-center"><span className="text-stone-500 text-sm font-normal font-['Inter'] leading-6">by </span><span className="text-stone-500 text-sm font-bold font-['Inter'] leading-6 cursor-pointer hover:underline">SecureDevOps</span></div>
                        <div className="w-16 h-4 left-[237.59px] top-[163.62px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">1 day ago</div>
                        <div className="w-14 h-4 left-[316.81px] top-[163.62px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Security</div>
                        <div className="w-14 h-4 left-[384.80px] top-[163.62px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">6 replies</div>
                        <div className="h-7 px-3 left-[100px] top-[191.67px] absolute bg-neutral-100 rounded-xl flex items-center">
                            <div className="text-[#2c5378] text-xs font-medium font-['Inter'] leading-5">ssl</div>
                        </div>
                        <div className="h-7 px-3 left-[139.64px] top-[191.67px] absolute bg-neutral-100 rounded-xl flex items-center">
                            <div className="text-[#2c5378] text-xs font-medium font-['Inter'] leading-5">security</div>
                        </div>
                        <div className="h-7 px-3 left-[207.73px] top-[191.67px] absolute bg-neutral-100 rounded-xl flex items-center">
                            <div className="text-[#2c5378] text-xs font-medium font-['Inter'] leading-5">domains</div>
                        </div>
                        <div className="w-44 h-7 left-[553.38px] top-[24px] absolute bg-pink-100 rounded-xl flex items-center justify-center gap-2">
                            <Users className="w-3.5 h-3.5 text-[#9a5b9b]" />
                            <div className="text-[#9a5b9b] text-xs font-bold font-['Inter'] leading-5">Community Answered</div>
                        </div>
                    </div>
                    <div className="w-80 h-14 left-[252px] top-[849.98px] absolute bg-[#9a5b9b] rounded-lg shadow-[0px_-10px_13.699999809265137px_0px_rgba(0,0,0,0.10)] flex items-center justify-center cursor-pointer hover:bg-fuchsia-800 transition">
                        <div className="text-white text-lg font-semibold font-['Inter']">Join the ZWS Community</div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/* Live Support Channels Section */}
      <section className="w-full flex justify-center bg-sky-50 pb-20">
        <div className="w-[1440px] h-[1992.80px] relative bg-sky-50">
            <div className="w-[1200px] h-[1832.80px] left-[120px] top-0 absolute">
                <div className="w-96 h-16 left-[382.19px] top-[60px] absolute text-center justify-center text-[#2c5378] text-2xl font-bold font-['Inter'] leading-[64px]">Live Support Channels</div>
                <div className="left-[258.02px] top-[113px] absolute text-center justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Choose the support channel that best fits your needs with transparent SLA commitments</div>
                
                {/* Live Chat */}
                <div className="w-[474px] h-[471px] left-[102px] top-[184px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                    <div className="size-20 left-[196.66px] top-[34px] absolute bg-[#2c5378] rounded-[40px] flex items-center justify-center">
                        <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-24 h-6 left-[189.86px] top-[143px] absolute text-center justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">Live Chat</div>
                    <div className="w-72 h-11 left-[99.23px] top-[191.27px] absolute text-center justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Instant support for quick questions and<br/>technical guidance</div>
                    <div className="w-20 h-4 left-[206.64px] top-[266.45px] absolute text-center justify-center text-[#2c5378] text-base font-bold font-['Inter'] leading-6">~2 minutes</div>
                    <div className="w-36 h-6 left-[165.88px] top-[304.05px] absolute bg-green-100 rounded-xl flex items-center justify-center">
                        <div className="text-green-700 text-sm font-bold font-['Inter'] leading-6">🟢 Available Now</div>
                    </div>
                    <div className="w-96 h-10 left-[34px] top-[353.64px] absolute bg-[#2c5378] rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-800 transition">
                        <div className="text-white text-sm font-semibold font-['Inter']">Start Chat</div>
                    </div>
                </div>

                {/* Phone Hotline */}
                <div className="w-[474px] h-[471px] left-[616px] top-[184px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                    <div className="size-20 left-[196.65px] top-[34px] absolute bg-[#2c5378] rounded-[40px] flex items-center justify-center">
                        <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-36 h-6 left-[166.75px] top-[143px] absolute text-center justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">Phone Hotline</div>
                    <div className="w-72 h-11 left-[97.50px] top-[191.27px] absolute text-center justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Direct voice support for complex issues<br/>and urgent matters</div>
                    <div className="w-20 h-4 left-[206.64px] top-[266.45px] absolute text-center justify-center text-[#2c5378] text-base font-bold font-['Inter'] leading-6">~5 minutes</div>
                    <div className="w-36 h-6 left-[165.87px] top-[304.05px] absolute bg-green-100 rounded-xl flex items-center justify-center">
                        <div className="text-green-700 text-sm font-bold font-['Inter'] leading-6">🟢 Available Now</div>
                    </div>
                    <div className="w-96 h-10 left-[34px] top-[353.64px] absolute bg-[#2c5378] rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-800 transition">
                        <div className="text-white text-sm font-semibold font-['Inter']">Call Now</div>
                    </div>
                    <div className="w-40 h-5 left-[160.14px] top-[412.64px] absolute text-center justify-center text-[#2c5378] text-base font-bold font-['Inter'] leading-7">+1 (555) 123-HELP</div>
                </div>

                {/* Screen Share */}
                <div className="w-[474px] h-96 left-[616px] top-[695px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] outline outline-2 outline-offset-[-2px] outline-yellow-400">
                    <div className="size-20 left-[196.67px] top-[34px] absolute bg-[#2c5378] rounded-[40px] flex items-center justify-center">
                        <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-32 h-6 left-[170.18px] top-[143px] absolute text-center justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">Screen Share</div>
                    <div className="w-64 h-11 left-[112.15px] top-[191.27px] absolute text-center justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Interactive troubleshooting with live<br/>screen sharing capability</div>
                    <div className="w-20 h-4 left-[206.65px] top-[266.45px] absolute text-center justify-center text-[#2c5378] text-base font-bold font-['Inter'] leading-6">~3 minutes</div>
                    <div className="w-36 h-6 left-[165.87px] top-[304.05px] absolute bg-green-100 rounded-xl flex items-center justify-center">
                        <div className="text-green-700 text-sm font-bold font-['Inter'] leading-6">🟢 Available Now</div>
                    </div>
                    <div className="w-96 h-10 left-[34px] top-[353.64px] absolute bg-yellow-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition">
                        <div className="text-zinc-800 text-sm font-semibold font-['Inter']">Start Session</div>
                    </div>
                    <div className="w-16 h-6 left-[384.47px] top-[18px] absolute bg-yellow-400 rounded-xl flex items-center justify-center">
                        <div className="text-zinc-800 text-xs font-bold font-['Inter'] leading-4">Premium</div>
                    </div>
                </div>

                {/* Email Support */}
                <div className="w-[474px] h-96 left-[102px] top-[695px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                    <div className="size-20 left-[196.66px] top-[34px] absolute bg-[#2c5378] rounded-[40px] flex items-center justify-center">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-36 h-6 left-[166.17px] top-[143px] absolute text-center justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">Email Support</div>
                    <div className="w-56 h-11 left-[127.70px] top-[191.27px] absolute text-center justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Detailed technical support with<br/>comprehensive documentation</div>
                    <div className="w-20 h-4 left-[207.98px] top-[266.46px] absolute text-center justify-center text-[#2c5378] text-sm font-bold font-['Inter'] leading-6">~2-4 hours</div>
                    <div className="w-40 h-6 left-[155.48px] top-[304.05px] absolute bg-sky-100 rounded-xl flex items-center justify-center">
                        <div className="text-[#2c5378] text-sm font-bold font-['Inter'] leading-6">📧 Always Available</div>
                    </div>
                    <div className="w-96 h-10 left-[34px] top-[353.64px] absolute bg-[#2c5378] rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-800 transition">
                        <div className="text-white text-sm font-semibold font-['Inter']">Send Email</div>
                    </div>
                </div>

                {/* Support Tier Comparison */}
                <div className="w-[1160px] h-[639.09px] left-[18px] top-[1193.70px] absolute bg-white rounded-2xl shadow-[0px_12px_40px_0px_rgba(144,80,159,0.20)]">
                    <div className="w-full h-8 top-[55px] absolute text-center text-[#2c5378] text-3xl font-bold font-['Inter'] leading-10">Support Tier Comparison</div>
                    
                    {/* Standard SLA */}
                    <div className="w-80 h-[465.03px] left-[48px] top-[126.07px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-neutral-200">
                        <div className="left-[96.91px] top-[33px] absolute text-center justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">Standard SLA</div>
                        <div className="left-[117.33px] top-[74.26px] absolute text-center justify-center text-[#2c5378] text-2xl font-bold font-['Inter'] leading-10">Included</div>
                        <div className="w-64 h-10 left-[34px] top-[145.65px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-6">Business hours support</div>
                        </div>
                        <div className="w-64 h-10 left-[34px] top-[203.25px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-sm font-normal font-['Inter'] leading-6">48h response time</div>
                        </div>
                        <div className="w-64 h-10 left-[34px] top-[260.84px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-6">Chat & email support</div>
                        </div>
                        <div className="w-64 h-10 left-[34px] top-[318.43px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-6">Knowledge base access</div>
                        </div>
                    </div>
                    
                    {/* Premium SLA */}
                    <div className="w-80 h-[488.28px] left-[404.99px] top-[114.44px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-[#2c5378]">
                        <div className="left-[103.40px] top-[35.95px] absolute text-center justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-9">Premium SLA</div>
                        <div className="left-[104.97px] top-[78.28px] absolute text-center justify-center text-[#2c5378] text-2xl font-bold font-['Inter'] leading-10">$199/month</div>
                        <div className="w-72 h-11 left-[35.70px] top-[152.94px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-7">24/7 global coverage</div>
                        </div>
                        <div className="w-72 h-11 left-[35.70px] top-[213.41px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-7">2h critical response</div>
                        </div>
                        <div className="w-72 h-11 left-[35.70px] top-[273.89px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-7">Phone & screen share</div>
                        </div>
                        <div className="w-72 h-11 left-[35.70px] top-[334.36px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-7">Priority queue access</div>
                        </div>
                        <div className="w-72 h-10 left-[35.70px] top-[411.63px] absolute bg-[#2c5378] rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-800 transition">
                            <div className="text-white text-sm font-semibold font-['Inter']">Upgrade Now</div>
                        </div>
                    </div>
                    
                    {/* Enterprise SLA */}
                    <div className="w-80 h-[465.03px] left-[778.66px] top-[126.07px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-neutral-200">
                        <div className="left-[91.54px] top-[33px] absolute text-center justify-center text-[#2c5378] text-xl font-bold font-['Inter'] leading-8">Enterprise SLA</div>
                        <div className="left-[121px] top-[74.26px] absolute text-center justify-center text-[#2c5378] text-2xl font-bold font-['Inter'] leading-10">Custom</div>
                        <div className="w-64 h-10 left-[34px] top-[145.65px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-6">Dedicated CSM</div>
                        </div>
                        <div className="w-64 h-10 left-[34px] top-[203.25px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-6">Direct engineering escalation</div>
                        </div>
                        <div className="w-64 h-10 left-[34px] top-[260.84px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-sm font-normal font-['Inter'] leading-6">Proactive monitoring</div>
                        </div>
                        <div className="w-64 h-10 left-[34px] top-[318.43px] absolute bg-white rounded-lg flex items-center gap-2 px-4">
                            <Check className="w-4 h-4 text-[#2c5378]" />
                            <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-6">Custom SLA terms</div>
                        </div>
                        <div className="w-64 h-10 left-[34px] top-[392.03px] absolute bg-[#2c5378] rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-800 transition">
                            <div className="text-white text-sm font-semibold font-['Inter']">Contact Sales</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Submit a Support Ticket Section */}
      <section className="w-full flex justify-center bg-slate-50 py-20">
        <div className="w-[1440px] flex justify-center relative">
            <div className="w-[1200px] h-auto min-h-[1047px] pb-20 relative">
                <div className="w-full top-0 text-center flex flex-col items-center mb-16">
                    <h2 className="text-[#2c5378] text-2xl font-bold font-['Inter'] leading-[64px]">Submit a Support Ticket</h2>
                    <p className="text-stone-500 text-base font-normal font-['Inter'] leading-7">Get escalation-ready support with guaranteed SLA response times</p>
                </div>
                
                <div className="w-[1000px] flex gap-[47px] justify-center mx-auto relative">
                    {/* Support Ticket Form */}
                    <div className="w-[635px] h-auto pb-8 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-8">
                        
                        {/* Row 1 */}
                        <div className="flex justify-between mb-6">
                            <div className="w-[280px]">
                                <label className="block text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-2">Issue Type *</label>
                                <div className="w-full h-12 bg-zinc-100 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 px-4 flex items-center">
                                    <span className="text-neutral-500 text-sm font-normal font-['Inter']">Select issue type</span>
                                </div>
                            </div>
                            <div className="w-[280px]">
                                <label className="block text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-2">Severity Level *</label>
                                <div className="w-full h-12 bg-zinc-100 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 px-4 flex items-center">
                                    <span className="text-neutral-500 text-sm font-normal font-['Inter']">Select severity</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex justify-between mb-6">
                            <div className="w-[280px]">
                                <label className="block text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-2">Affected Service</label>
                                <div className="w-full h-12 bg-zinc-100 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 px-4 flex items-center">
                                    <span className="text-neutral-500 text-sm font-normal font-['Inter']">Select service</span>
                                </div>
                            </div>
                            <div className="w-[280px]">
                                <label className="block text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-2">Region</label>
                                <div className="w-full h-12 bg-zinc-100 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 px-4 flex items-center">
                                    <span className="text-neutral-500 text-sm font-normal font-['Inter']">Select region</span>
                                </div>
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="mb-6 mt-10">
                            <label className="block text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-2">Subject *</label>
                            <div className="w-full h-11 bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 px-4 flex items-center">
                                <span className="text-neutral-400 text-sm font-normal font-['Inter']">Brief description of your issue</span>
                            </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="mb-6 mt-6">
                            <label className="block text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-2">Detailed Description *</label>
                            <div className="w-full h-32 bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 p-4">
                                <span className="text-neutral-400 text-base font-normal font-['Inter'] leading-6">
                                    Please provide detailed information about your issue, including steps to <br/>reproduce, error messages, and any relevant context...
                                </span>
                            </div>
                        </div>

                        {/* Attachments */}
                        <div className="mb-8 mt-10">
                            <label className="block text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-2">Attachments</label>
                            <div className="w-full h-44 rounded-lg border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-slate-50 transition">
                                <UploadCloud className="w-8 h-8 text-[#9a5b9b]" />
                                <div className="text-center">
                                    <p className="text-zinc-800 text-base font-bold font-['Inter'] leading-6">Drop files here or click to browse</p>
                                    <p className="text-neutral-400 text-xs font-normal font-['Inter'] leading-5 mt-1">Supported formats: PDF, DOC, TXT, Images, Log files (Max 10MB each)</p>
                                </div>
                            </div>
                        </div>

                        {/* SLA Notice */}
                        <div className="w-full h-20 bg-green-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-green-500 flex items-center px-6 mb-8 mt-10">
                            <p className="text-green-700 text-base font-bold font-['Inter'] leading-6">Your ticket will be acknowledged within 48 hours based on selected<br/>severity</p>
                        </div>

                        {/* Submit Button */}
                        <div className="w-full h-14 bg-[#9a5b9b] rounded-lg flex items-center justify-center cursor-pointer hover:bg-fuchsia-800 transition mt-6">
                            <span className="text-white text-lg font-semibold font-['Inter']">Submit Support Ticket</span>
                        </div>
                    </div>

                    {/* What to Expect */}
                    <div className="w-80 h-[524.13px] bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 p-8">
                        <h3 className="text-[#2c5378] text-xl font-bold font-['Inter'] leading-8 mb-8">What to Expect</h3>
                        
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <Ticket className="w-5 h-5 text-[#2c5378] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-1">Instant Confirmation</h4>
                                    <p className="text-stone-500 text-sm font-normal font-['Inter'] leading-5">You'll receive a unique ticket<br/>number and confirmation email<br/>immediately</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <Activity className="w-5 h-5 text-[#2c5378] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-1">Live Status Tracking</h4>
                                    <p className="text-stone-500 text-sm font-normal font-['Inter'] leading-5">Monitor progress in real-time<br/>through your dashboard</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Clock className="w-5 h-5 text-[#2c5378] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-1">SLA Guarantee</h4>
                                    <p className="text-stone-500 text-sm font-normal font-['Inter'] leading-5">Guaranteed response within<br/>committed timeframes</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <UserCheck className="w-5 h-5 text-[#2c5378] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-[#2c5378] text-base font-bold font-['Inter'] leading-6 mb-1">Expert Assignment</h4>
                                    <p className="text-stone-500 text-sm font-normal font-['Inter'] leading-5">Routed to specialist based on<br/>issue type and complexity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Ensure 24/7 Peace of Mind */}
      <section className="w-full flex justify-center bg-[#114769]">
        <div className="w-[1440px] h-96 relative bg-[#114769]">
            <div className="w-[504.84px] h-16 left-[140px] top-[80px] absolute text-white text-4xl font-bold font-['Inter'] leading-[64px]">Ensure 24/7 Peace of Mind</div>
            <div className="w-[552.68px] h-12 left-[140px] top-[164px] absolute opacity-90 text-white text-lg font-normal font-['Inter'] leading-8">Upgrade to Premium Support for guaranteed response times and<br/>priority access</div>
            
            <Clock className="w-4 h-4 left-[140px] top-[258.23px] absolute text-yellow-400" />
            <div className="left-[164px] top-[257.44px] absolute text-white text-sm font-medium font-['Inter'] leading-6">2-hour critical response</div>
            
            <Globe className="w-4 h-4 left-[426px] top-[258.23px] absolute text-yellow-400" />
            <div className="left-[450px] top-[257.44px] absolute text-white text-sm font-medium font-['Inter'] leading-6">24/7 global coverage</div>
            
            <Phone className="w-4 h-4 left-[140px] top-[299.64px] absolute text-yellow-400" />
            <div className="left-[164px] top-[299.03px] absolute text-white text-base font-medium font-['Inter'] leading-6">Phone & screen share support</div>
            
            <Star className="w-4 h-4 left-[426px] top-[299.83px] absolute text-yellow-400" />
            <div className="left-[452px] top-[299.03px] absolute text-white text-sm font-medium font-['Inter'] leading-6">Priority queue access</div>
            
            <div className="w-96 h-14 left-[894px] top-[117px] absolute bg-yellow-400 rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition">
                <div className="text-black text-lg font-semibold font-['Inter']">Upgrade to Premium Support</div>
            </div>
            <div className="w-48 h-11 left-[894.31px] top-[200px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
                <div className="text-white text-sm font-semibold font-['Inter']">Submit a Ticket Now</div>
            </div>
            <div className="w-48 h-11 left-[1145px] top-[200px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
                <div className="text-white text-sm font-semibold font-['Inter']">Explore Self-Service</div>
            </div>
        </div>
      </section>

      {/* Trust & Excellence */}
      <section className="w-full flex justify-center bg-white border-t border-neutral-200">
        <div className="w-[1440px] h-[550.33px] relative">
            <div className="w-52 h-7 left-[140px] top-[28px] absolute text-[#2c5378] text-2xl font-bold font-['Inter'] leading-10">Trust & Excellence</div>
            <div className="size-14 left-[140px] top-[71.40px] absolute bg-[#9a5b9b] rounded-[30px] flex justify-center items-center">
                <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="left-[216px] top-[75.40px] absolute text-[#2c5378] text-base font-bold font-['Inter'] leading-7">Technical Documentation</div>
            <div className="left-[216px] top-[110.54px] absolute text-stone-500 text-base font-normal font-['Inter'] leading-6">Comprehensive developer resources<br/>and API guides</div>
            <div className="left-[216px] top-[171.54px] absolute flex items-center gap-2 cursor-pointer hover:underline text-[#9a5b9b]">
                <div className="text-sm font-semibold font-['Inter']">Access Dev Resources</div>
                <ChevronRight className="w-3.5 h-3.5" />
            </div>

            <div className="size-14 left-[140px] top-[218.54px] absolute bg-[#9a5b9b] rounded-[30px] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="left-[216px] top-[222.54px] absolute text-[#2c5378] text-lg font-bold font-['Inter'] leading-7">Trust & Security</div>
            <div className="left-[216px] top-[257.68px] absolute text-stone-500 text-sm font-normal font-['Inter'] leading-6">Security certifications and real-time<br/>uptime dashboard</div>
            <div className="left-[216px] top-[318.68px] absolute flex items-center gap-2 cursor-pointer hover:underline text-[#9a5b9b]">
                <div className="text-sm font-semibold font-['Inter']">View Trust Center</div>
                <ChevronRight className="w-3.5 h-3.5" />
            </div>

            <div className="size-14 left-[140px] top-[365.68px] absolute bg-[#9a5b9b] rounded-[30px] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="left-[216px] top-[369.68px] absolute text-[#2c5378] text-lg font-bold font-['Inter'] leading-7">Knowledge Hub</div>
            <div className="left-[216px] top-[404.82px] absolute text-stone-500 text-base font-normal font-['Inter'] leading-6">Whitepapers, webinars, and case<br/>studies</div>
            <div className="left-[216px] top-[465.82px] absolute flex items-center gap-2 cursor-pointer hover:underline text-[#9a5b9b]">
                <div className="text-sm font-semibold font-['Inter']">Explore Knowledge Hub</div>
                <ChevronRight className="w-3.5 h-3.5" />
            </div>

            <div className="left-[542.66px] top-[16px] absolute text-[#2c5378] text-2xl font-bold font-['Inter'] leading-10">Support Performance</div>
            <div className="w-44 h-32 left-[542.66px] top-[71px] absolute bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200">
                <div className="w-full top-[22px] absolute text-center text-[#9a5b9b] text-2xl font-bold font-['Inter'] leading-10">2.1m</div>
                <div className="w-full top-[63.18px] absolute text-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Avg. Response Time</div>
                <div className="w-full top-[90px] absolute text-center text-green-600 text-base font-bold font-['Inter'] leading-5">↗ 15% faster</div>
            </div>
            <div className="w-44 h-32 left-[735.99px] top-[71px] absolute bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200">
                <div className="w-full top-[22px] absolute text-center text-[#9a5b9b] text-2xl font-bold font-['Inter'] leading-10">99.2%</div>
                <div className="w-full top-[63.60px] absolute text-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">SLA Adherence</div>
                <div className="w-full top-[90px] absolute text-center text-green-600 text-base font-bold font-['Inter'] leading-5">↗ +0.8%</div>
            </div>
            <div className="w-44 h-32 left-[929.33px] top-[71px] absolute bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200">
                <div className="w-full top-[22px] absolute text-center text-[#9a5b9b] text-xl font-bold font-['Inter'] leading-10">4.8/5</div>
                <div className="w-full top-[64.45px] absolute text-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Customer Satisfaction</div>
                <div className="w-full top-[90px] absolute text-center text-green-600 text-base font-bold font-['Inter'] leading-5">↗ Stable</div>
            </div>
            <div className="w-44 h-32 left-[1122.33px] top-[71px] absolute bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200">
                <div className="w-full top-[22px] absolute text-center text-[#9a5b9b] text-xl font-bold font-['Inter'] leading-10">94%</div>
                <div className="w-full top-[64.45px] absolute text-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">First Contact Resolution</div>
                <div className="w-full top-[90px] absolute text-center text-green-600 text-base font-bold font-['Inter'] leading-5">↗ +3%</div>
            </div>

            <div className="left-[543px] top-[239px] absolute text-[#2c5378] text-2xl font-bold font-['Inter'] leading-10">Customer Success Stories</div>
            <div className="w-96 h-48 left-[543px] top-[290px] absolute bg-white rounded-lg border-l-4 border-[#9a5b9b]">
                <div className="w-72 h-24 left-[28px] top-[28px] absolute text-stone-500 text-sm font-normal font-['Inter'] leading-6 italic">"ZWS support team resolved our critical<br/>production issue in under 30 minutes.<br/>Their expertise saved us from potential<br/>downtime."</div>
                <div className="w-80 h-4 left-[28px] top-[146.37px] absolute text-[#2c5378] text-sm font-bold font-['Inter'] leading-6">— Sarah Chen, CTO at TechFlow</div>
            </div>
            <div className="w-96 h-48 left-[938px] top-[290px] absolute bg-white rounded-lg border-l-4 border-[#9a5b9b]">
                <div className="w-80 h-16 left-[28px] top-[28px] absolute text-stone-500 text-sm font-normal font-['Inter'] leading-6 italic">"The screen sharing session helped us<br/>identify and fix our integration issues<br/>quickly. Outstanding technical support."</div>
                <div className="w-80 h-11 left-[28px] top-[120.79px] absolute text-[#2c5378] text-sm font-bold font-['Inter'] leading-6">— Mike Rodriguez, Lead Developer at<br/>DataCorp</div>
            </div>
        </div>
      </section>

      {/* Ready to Transform Form Section */}
      <section className="w-full flex justify-center bg-zinc-100">
        <div className="w-[1440px] h-[1094.34px] relative bg-zinc-100">
            <div className="w-[461.06px] h-28 left-[108px] top-[219.78px] absolute text-zinc-800 text-2xl font-bold font-['Inter'] leading-9">Ready to Transform<br/>Your Business?</div>
            <div className="w-[552.34px] h-20 left-[108px] top-[326.57px] absolute text-neutral-600 text-lg font-normal font-['Inter'] leading-7">Connect with our global team of experts to discuss your digital<br/>transformation journey and discover how we can accelerate your<br/>success.</div>
            
            {/* Email Us */}
            <div className="size-14 left-[108px] top-[457.96px] absolute bg-sky-900 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="left-[186px] top-[457.96px] absolute text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Email Us</div>
            <div className="left-[186px] top-[492.76px] absolute text-zinc-400 text-base font-normal font-['Inter'] leading-6">hello@zws.com</div>
            <div className="left-[186px] top-[522.36px] absolute text-zinc-500 text-sm font-normal font-['Inter'] leading-6">Response within 4 hours</div>
            
            {/* Call Us */}
            <div className="size-14 left-[108px] top-[574.75px] absolute bg-sky-900 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="left-[186px] top-[574.75px] absolute text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Call Us</div>
            <div className="left-[186px] top-[609.54px] absolute text-zinc-400 text-base font-normal font-['Inter'] leading-6">+1 (555) 123-4567</div>
            <div className="left-[186px] top-[639.14px] absolute text-zinc-500 text-sm font-normal font-['Inter'] leading-6">24/7 Support Available</div>
            
            {/* Live Chat */}
            <div className="size-14 left-[108px] top-[691.53px] absolute bg-sky-900 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="left-[186px] top-[691.53px] absolute text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Live Chat</div>
            <div className="left-[186px] top-[726.32px] absolute text-zinc-400 text-base font-normal font-['Inter'] leading-6">Instant Support</div>
            <div className="left-[186px] top-[755.92px] absolute text-zinc-500 text-sm font-normal font-['Inter'] leading-6">Online now</div>
            
            {/* Form Container */}
            <div className="w-[572px] h-[854.34px] left-[760px] top-[120px] absolute bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-400">
                <div className="w-[490px] h-[772.34px] left-[41px] top-[41px] absolute">
                    <div className="left-0 top-[2px] absolute text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Full Name</div>
                    <input type="text" className="w-[490px] h-12 left-0 top-[30.39px] absolute bg-neutral-100 rounded-lg border border-stone-300 px-4 outline-none focus:ring-1 focus:ring-fuchsia-700" />
                    
                    <div className="left-0 top-[108.39px] absolute text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Business Email</div>
                    <input type="email" className="w-[490px] h-12 left-0 top-[136.78px] absolute bg-neutral-100 rounded-lg border border-stone-300 px-4 outline-none focus:ring-1 focus:ring-fuchsia-700" />
                    
                    <div className="left-0 top-[214.78px] absolute text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Company</div>
                    <input type="text" className="w-[490px] h-12 left-0 top-[243.17px] absolute bg-neutral-100 rounded-lg border border-stone-300 px-4 outline-none focus:ring-1 focus:ring-fuchsia-700" />
                    
                    <div className="left-0 top-[321.17px] absolute text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Service Interest</div>
                    <div className="w-[490px] h-14 left-0 top-[349.56px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 flex items-center px-[21px]">
                        <span className="text-neutral-400 text-base font-normal font-['Inter'] leading-4">Select a service</span>
                    </div>
                    
                    <div className="left-0 top-[428.56px] absolute text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Budget</div>
                    <div className="w-[490px] h-14 left-0 top-[456.95px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 flex items-center px-[21px]">
                        <span className="text-neutral-400 text-base font-normal font-['Inter'] leading-4">Select budget range</span>
                    </div>
                    
                    <div className="left-0 top-[535.95px] absolute text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Details</div>
                    <textarea className="w-[490px] h-28 left-0 top-[564.34px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 p-4 resize-none outline-none focus:ring-1 focus:ring-fuchsia-700 text-neutral-800" placeholder="Tell us about your project requirements, &#10;timeline, and objectives..."></textarea>
                    
                    <button className="w-56 h-14 left-0 top-[716.34px] absolute bg-gradient-to-r from-[#9a5b9b] to-sky-900 rounded-xl flex items-center justify-center hover:opacity-90 transition">
                        <span className="text-white text-base font-semibold font-['Inter']">Start Your Project</span>
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
