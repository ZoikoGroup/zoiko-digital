'use client';

import React, { useState } from 'react';
import { 
  Search, ShieldCheck, Server, Phone, Mail, 
  MessageSquare, Ticket, FileText, ChevronRight, 
  UploadCloud, Cloud, BarChart, ChevronUp, ChevronDown, 
  CheckCircle2, Users, Check, Monitor, Activity, Clock, 
  UserCheck, Globe, Star, BookOpen 
} from 'lucide-react';

export default function HelpSupportPage() {
  const [ticketDescription, setTicketDescription] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 antialiased dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* ── HERO SECTION ── */}
      <section className="w-full bg-gradient-to-r from-sky-100 via-pink-100 to-green-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 py-16 px-4 border-b dark:border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Status Badges */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-full shadow-md backdrop-blur-md flex items-center gap-2 px-5 py-2 border dark:border-gray-700">
              <div className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse" />
              <span className="text-zinc-800 dark:text-gray-200 text-sm font-medium">All Systems Operational</span>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-full shadow-md backdrop-blur-md flex items-center px-5 py-2 text-sm text-zinc-800 dark:text-gray-200 border dark:border-gray-700">
              <span>Avg. chat response: <strong className="text-teal-800 dark:text-teal-400">2m</strong></span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-[#114769] dark:text-teal-400 text-2xl sm:text-3xl font-extrabold tracking-tight max-w-2xl mb-8 leading-tight">
            How can we help you today?
          </h1>

          {/* Search Bar */}
          <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-teal-700 dark:border-teal-500 p-2 flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-teal-700 dark:bg-teal-600 rounded-xl flex items-center justify-center shrink-0">
              <Search className="w-5 h-5 text-white" />
            </div>
            <input 
              type="text"
              placeholder="Describe your issue in natural language... e.g., 'My API calls are returning errors'"
              className="w-full bg-transparent text-slate-800 dark:text-white placeholder-stone-400 dark:placeholder-gray-500 italic text-base outline-none pr-4 py-2"
            />
          </div>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="bg-teal-700 dark:bg-teal-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-teal-800 dark:hover:bg-teal-700 transition-all w-full sm:w-auto">
              Contact Support
            </button>
            <button className="bg-white dark:bg-gray-800 text-teal-700 dark:text-teal-400 font-bold px-8 py-3.5 rounded-xl border-2 border-teal-700 dark:border-teal-500 hover:bg-teal-50 dark:hover:bg-gray-700 transition-all w-full sm:w-auto">
              Explore Tutorials &amp; Guides
            </button>
          </div>

        </div>
      </section>

      {/* ── TOP ARTICLES ── */}
      <section className="w-full bg-sky-50 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sky-900 dark:text-white text-3xl font-bold mb-3">Top Articles for You</h2>
            <p className="text-stone-500 dark:text-gray-400 text-base">
              Personalized recommendations based on your account, location, and recent activity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Context */}
            <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl border border-neutral-200 dark:border-gray-700 p-6 shadow-sm h-fit">
              <h3 className="text-sky-900 dark:text-white text-lg font-bold mb-4">Curated for:</h3>
              <div className="space-y-2 mb-6">
                <div className="bg-sky-100 dark:bg-sky-950 rounded-xl px-3 py-1.5 text-sky-900 dark:text-sky-300 text-xs font-semibold w-max">North America</div>
                <div className="bg-pink-100 dark:bg-pink-950 rounded-xl px-3 py-1.5 text-teal-700 dark:text-teal-300 text-xs font-semibold w-max">Enterprise Plan</div>
                <div className="bg-green-100 dark:bg-green-950 rounded-xl px-3 py-1.5 text-green-700 dark:text-green-300 text-xs font-semibold w-max">Technical Lead</div>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left bg-teal-700 dark:bg-teal-600 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-all">
                  Based on Recent Searches
                </button>
                <button className="w-full text-left border border-neutral-200 dark:border-gray-700 text-zinc-700 dark:text-gray-300 text-sm font-medium py-2.5 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-700 transition-all">
                  Most Viewed This Week
                </button>
                <button className="w-full text-left border border-neutral-200 dark:border-gray-700 text-zinc-700 dark:text-gray-300 text-sm font-medium py-2.5 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-700 transition-all">
                  Recommended for You
                </button>
              </div>
            </div>

            {/* Article Items */}
            <div className="lg:col-span-3 space-y-4">
              {[
                { title: 'API Authentication Best Practices', views: '2.4K', updated: '2 days ago', level: '🟢 Beginner', levelBg: 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400' },
                { title: 'Troubleshooting Cloud Deployment Issues', views: '1.8K', updated: '1 week ago', level: '🟡 Intermediate', levelBg: 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400' },
                { title: 'Database Performance Optimization', views: '3.1K', updated: '3 days ago', level: '🔴 Advanced', levelBg: 'bg-pink-100 dark:bg-pink-950/40 text-red-600 dark:text-red-400' },
              ].map((a, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl border border-neutral-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all">
                  <span className="text-sky-900 dark:text-white text-lg font-bold hover:text-teal-700 dark:hover:text-teal-400 cursor-pointer transition-colors">{a.title}</span>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0 text-stone-500 dark:text-gray-400 text-xs">
                    <span>👁 {a.views} views</span>
                    <span>📅 Updated {a.updated}</span>
                    <span className={`px-2.5 py-1 rounded-full font-medium ${a.levelBg}`}>{a.level}</span>
                    <ChevronDown className="w-4 h-4 text-teal-700 dark:text-teal-400 cursor-pointer hidden sm:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GUIDES & TUTORIALS ── */}
      <section className="w-full bg-slate-50 dark:bg-gray-900/50 border-y dark:border-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sky-900 dark:text-white text-3xl font-bold mb-3">Guides &amp; Tutorials</h2>
            <p className="text-stone-500 dark:text-gray-400 text-base">
              Immersive and interactive learning experiences to master the ZOIKO DIGITAL platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Cloud className="w-8 h-8 text-white" />, bg: 'bg-indigo-500', title: 'Cloud Infrastructure Setup', desc: 'Complete guide to setting up your cloud infrastructure with best practices and security configurations.', time: '45 min', level: '🟡 Intermediate', type: '🔧 Hands-on', featured: true, extra: ['Interactive Sandbox', '3D Configuration'] },
              { icon: <ShieldCheck className="w-8 h-8 text-white" />, bg: 'bg-fuchsia-400', title: 'Security & Compliance Setup', desc: 'Implement enterprise-grade security measures and ensure compliance with industry standards.', time: '60 min', level: '🔴 Advanced', type: '📚 Comprehensive', extra: ['Troubleshooting Flow'] },
              { icon: <span className="text-white text-2xl font-black">{'</>'}</span>, bg: 'bg-blue-400', title: 'API Integration Masterclass', desc: 'Master API integration with real-world examples, authentication, and error handling strategies.', time: '30 min', level: '🟢 Beginner', type: '⚡ Interactive', extra: ['Interactive Sandbox'] },
              { icon: <BarChart className="w-8 h-8 text-white" />, bg: 'bg-green-400', title: 'Analytics & Monitoring', desc: 'Set up comprehensive monitoring and analytics to track performance and identify issues.', time: '40 min', level: '🟡 Intermediate', type: '🎯 Practical', extra: [] },
            ].map((card, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between relative ${card.featured ? 'border-2 border-teal-700 dark:border-teal-500 ring-4 ring-teal-50 dark:ring-teal-950/30' : 'border border-neutral-200 dark:border-gray-700'}`}>
                {card.featured && (
                  <span className="absolute top-4 right-4 bg-teal-700 dark:bg-teal-600 text-white text-[10px] tracking-wider font-extrabold px-2.5 py-1 rounded-full">
                    FEATURED
                  </span>
                )}
                <div>
                  <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                    {card.icon}
                  </div>
                  <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-stone-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{card.desc}</p>
                  
                  <div className="flex flex-wrap gap-4 items-center mb-6 text-xs font-semibold">
                    <span className="text-sky-900 dark:text-gray-300 flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{card.time}</span>
                    <span className="text-zinc-800 dark:text-gray-200">{card.level}</span>
                    <span className="text-teal-700 bg-teal-50 dark:bg-teal-950/40 dark:text-teal-400 px-2 py-0.5 rounded-md">{card.type}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button className="bg-teal-700 dark:bg-teal-600 text-white text-xs font-medium py-2 rounded-lg text-center hover:bg-teal-800 dark:hover:bg-teal-700 transition">▶ Watch Video</button>
                    <button className="bg-sky-900 dark:bg-slate-700 text-white text-xs font-medium py-2 rounded-lg text-center hover:bg-sky-950 dark:hover:bg-slate-600 transition">Try Simulator</button>
                    <button className="bg-green-600 dark:bg-green-700 text-white text-xs font-medium py-2 rounded-lg text-center hover:bg-green-700 dark:hover:bg-green-600 transition">Step-by-Step</button>
                  </div>
                  
                  {card.extra.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-gray-700">
                      {card.extra.map((e, j) => (
                        <span key={j} className="bg-neutral-100 dark:bg-gray-900 text-zinc-700 dark:text-gray-300 text-[11px] font-medium px-2.5 py-1 rounded-md border border-neutral-200 dark:border-gray-700">
                          {e}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY FORUM ── */}
      <section className="w-full bg-fuchsia-50 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sky-900 dark:text-white text-3xl font-bold mb-3">Community Forum</h2>
            <p className="text-stone-500 dark:text-gray-400 text-base">
              Collaborative hub where developers and experts share knowledge and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Sidebar Columns */}
            <div className="space-y-6 lg:col-span-1">
              {/* Community Impact */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-neutral-200 dark:border-gray-700 p-6 shadow-sm">
                <h3 className="text-sky-900 dark:text-white text-lg font-bold mb-4">Community Impact</h3>
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                  {[['15.2K', 'Active Members'], ['42.8K', 'Questions Answered'], ['98.5%', 'Resolution Rate']].map(([val, label], i) => (
                    <div key={i} className="border-r lg:border-r-0 lg:border-b last:border-0 border-neutral-100 dark:border-gray-700 pb-2">
                      <span className="text-teal-700 dark:text-teal-400 text-2xl font-black block">{val} </span>
                      <span className="text-stone-500 dark:text-gray-400 text-xs font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-neutral-200 dark:border-gray-700 p-6 shadow-sm">
                <h3 className="text-sky-900 dark:text-white text-lg font-bold mb-4">Top Contributors</h3>
                <div className="space-y-4">
                  {[
                    { medal: '🏆', name: 'Sarah Chen', pts: '2,450 pts', tags: [{ label: 'Expert', bg: 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400' }, { label: 'Helpful', bg: 'bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-300' }] },
                    { medal: '🥈', name: 'Mike Rodriguez', pts: '2,180 pts', tags: [{ label: 'Mentor', bg: 'bg-pink-50 dark:bg-pink-950/40 text-teal-700 dark:text-teal-400' }, { label: 'Problem Solver', bg: 'bg-yellow-50 dark:bg-yellow-950/20 text-orange-600 dark:text-orange-400' }] },
                    { medal: '🥉', name: 'Alex Johnson', pts: '1,920 pts', tags: [{ label: 'Innovator', bg: 'bg-pink-50 dark:bg-pink-950/40 text-red-600 dark:text-red-400' }] },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-3 border-b last:border-0 border-neutral-100 dark:border-gray-700 pb-3 last:pb-0">
                      <span className="text-2xl mt-0.5">{c.medal}</span>
                      <div>
                        <div className="text-sky-900 dark:text-white text-sm font-bold">{c.name}</div>
                        <div className="text-stone-500 dark:text-gray-400 text-xs mb-1.5">{c.pts}</div>
                        <div className="flex flex-wrap gap-1">
                          {c.tags.map((t, j) => (
                            <span key={j} className={`${t.bg} text-[10px] font-bold px-2 py-0.5 rounded`}>{t.label}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Requests */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-neutral-200 dark:border-gray-700 p-6 shadow-sm">
                <h3 className="text-sky-900 dark:text-white text-lg font-bold mb-2">Feature Requests</h3>
                <p className="text-zinc-600 dark:text-gray-300 text-sm mb-4">Help shape our product roadmap</p>
                <button className="w-full bg-teal-700 dark:bg-teal-600 text-white font-semibold py-2.5 rounded-xl hover:bg-teal-800 dark:hover:bg-teal-700 transition text-sm">
                  Suggest a Feature
                </button>
              </div>
            </div>

            {/* Discussions Panel */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 items-center justify-between mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    <button className="bg-teal-700 dark:bg-teal-600 text-white text-xs font-semibold px-3 py-2 rounded-lg">Recent Discussions</button>
                    <button className="border border-neutral-200 dark:border-gray-700 text-black dark:text-gray-200 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-gray-900">Popular Topics</button>
                    <button className="border border-neutral-200 dark:border-gray-700 text-black dark:text-gray-200 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-gray-900">Recently Answered</button>
                  </div>
                  <button className="bg-green-600 dark:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition mt-2 sm:mt-0">
                    + Ask a Question
                  </button>
                </div>

                {/* Forum List Items */}
                <div className="space-y-4">
                  {[
                    {
                      votes: 42, title: 'How to handle rate limiting in API calls?',
                      body: "I'm experiencing rate limiting issues when making bulk API calls. What's the best approach to handle this gracefully?",
                      by: 'DevMaster99', time: '2 hours ago', cat: 'API', replies: '8 replies',
                      tags: ['api', 'rate-limiting', 'best-practices'],
                      badges: [{ label: 'Verified Answer', bg: 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400' }, { label: 'Staff Response', bg: 'bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-300' }],
                    },
                    {
                      votes: 28, title: 'Database connection pooling best practices',
                      body: 'Looking for recommendations on connection pool size and configuration for high-traffic applications.',
                      by: 'DataGuru', time: '5 hours ago', cat: 'Database', replies: '12 replies',
                      tags: ['database', 'performance', 'scaling'],
                      badges: [{ label: 'Verified Answer', bg: 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400' }],
                    },
                    {
                      votes: 35, title: 'SSL certificate configuration for custom domains',
                      body: 'Need help setting up SSL certificates for multiple custom domains. Getting certificate validation errors.',
                      by: 'SecureDevOps', time: '1 day ago', cat: 'Security', replies: '6 replies',
                      tags: ['ssl', 'security', 'domains'],
                      badges: [{ label: 'Community Answered', bg: 'bg-pink-50 dark:bg-pink-950/40 text-teal-700 dark:text-teal-400' }],
                    },
                  ].map((d, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 rounded-xl border border-neutral-200 dark:border-gray-800 p-5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        {/* Vote Controls */}
                        <div className="flex sm:flex-col items-center gap-1.5 bg-neutral-50 dark:bg-gray-800 p-1.5 rounded-xl shrink-0 w-full sm:w-auto justify-center">
                          <button className="p-1 hover:bg-neutral-200 dark:hover:bg-gray-700 rounded"><ChevronUp className="w-4 h-4 text-stone-500" /></button>
                          <span className="text-sky-900 dark:text-teal-400 font-bold text-sm min-w-[20px] text-center">{d.votes}</span>
                          <button className="p-1 hover:bg-neutral-200 dark:hover:bg-gray-700 rounded"><ChevronDown className="w-4 h-4 text-stone-500" /></button>
                        </div>
                        
                        {/* Content Area */}
                        <div className="flex-1">
                          <h4 className="text-sky-900 dark:text-white font-bold text-base hover:underline cursor-pointer">{d.title}</h4>
                          <p className="text-stone-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed mt-1">{d.body}</p>
                          <div className="text-stone-400 dark:text-gray-500 text-xs mt-3 flex flex-wrap gap-x-2 gap-y-1">
                            <span>by <strong className="text-stone-600 dark:text-gray-400 hover:underline cursor-pointer">{d.by}</strong></span>
                            <span>• {d.time}</span>
                            <span>• {d.cat}</span>
                            <span className="text-teal-700 dark:text-teal-400 font-medium">• {d.replies}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {d.tags.map((t, j) => (
                              <span key={j} className="bg-neutral-100 dark:bg-gray-800 text-sky-900 dark:text-gray-300 text-[11px] font-medium px-2 py-0.5 rounded">
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap sm:flex-col gap-1 shrink-0 w-full sm:w-auto">
                          {d.badges?.map((b, j) => (
                            <div 
                              key={j} 
                              className={`${b.bg || ''} text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1`}
                            >
                              {b.label?.includes('Verified') ? (
                                <CheckCircle2 className="w-3 h-3" />
                              ) : b.label?.includes('Staff') ? (
                                <ShieldCheck className="w-3 h-3" />
                              ) : (
                                <Users className="w-3 h-3" />
                              )}
                              {b.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-teal-700 dark:bg-teal-600 text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-teal-800 dark:hover:bg-teal-700 transition mt-8 text-center">
                Join the ZOIKO DIGITAL Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE SUPPORT CHANNELS ── */}
      <section className="w-full bg-sky-50 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sky-900 dark:text-white text-3xl font-bold mb-3">Live Support Channels</h2>
            <p className="text-stone-500 dark:text-gray-400 text-base">
              Choose the support channel that best fits your needs with transparent SLA commitments
            </p>
          </div>

          {/* Grid Layout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {[
              { icon: <MessageSquare className="w-6 h-6 text-white" />, title: 'Live Chat', desc: 'Instant support for quick questions and technical guidance', time: '~2 minutes', avail: '🟢 Available Now', btn: 'Start Chat', accent: false },
              { icon: <Phone className="w-6 h-6 text-white" />, title: 'Phone Hotline', desc: 'Direct voice support for complex issues and urgent matters', time: '~5 minutes', avail: '🟢 Available Now', btn: 'Call Now', sub: '+1 (555) 123-HELP', accent: false },
              { icon: <Mail className="w-6 h-6 text-white" />, title: 'Email Support', desc: 'Detailed technical support with comprehensive documentation', time: '~2-4 hours', avail: '📧 Always Available', btn: 'Send Email', accent: false },
              { icon: <Monitor className="w-6 h-6 text-white" />, title: 'Screen Share', desc: 'Interactive troubleshooting with live screen sharing capability', time: '~3 minutes', avail: '🟢 Available Now', btn: 'Start Session', premium: true, accent: true },
            ].map((ch, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border flex flex-col justify-between items-center text-center relative ${ch.accent ? 'border-yellow-400 dark:border-yellow-500 ring-2 ring-yellow-100 dark:ring-yellow-950/50' : 'border-neutral-200 dark:border-gray-700'}`}>
                {ch.premium && <span className="absolute top-3 right-3 bg-yellow-400 text-zinc-900 font-black text-[9px] tracking-wide px-2 py-0.5 rounded-full">PREMIUM</span>}
                <div className="w-full flex flex-col items-center">
                  <div className="w-12 h-12 bg-sky-900 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4 shadow-inner">
                    {ch.icon}
                  </div>
                  <h3 className="text-sky-900 dark:text-white font-bold text-lg mb-2">{ch.title}</h3>
                  <p className="text-stone-500 dark:text-gray-400 text-xs leading-relaxed mb-4 min-h-[40px]">{ch.desc}</p>
                </div>
                <div className="w-full">
                  <div className="text-sky-900 dark:text-white font-bold text-sm mb-1">{ch.time}</div>
                  <div className="text-xs font-bold mb-4 inline-block px-3 py-1 bg-slate-50 dark:bg-gray-900 border dark:border-gray-700 rounded-full text-slate-700 dark:text-gray-300">{ch.avail}</div>
                  <button className={`w-full text-xs font-bold py-2.5 rounded-xl transition ${ch.accent ? 'bg-yellow-400 text-zinc-900 hover:bg-yellow-500 framework-colors' : 'bg-sky-900 dark:bg-teal-600 text-white hover:bg-sky-950 dark:hover:bg-teal-700'}`}>
                    {ch.btn}
                  </button>
                  {ch.sub && <div className="text-sky-900 dark:text-teal-400 font-bold text-xs mt-2">{ch.sub}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Tier Comparison Table-style Card layout */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-neutral-100 dark:border-gray-700 p-6 md:p-10 max-w-5xl mx-auto">
            <h3 className="text-center text-sky-900 dark:text-white text-2xl font-bold mb-8">Support Tier Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Standard SLA', price: 'Included', features: ['Business hours support', '48h response time', 'Chat & email support', 'Knowledge base access'], cta: null, highlight: false },
                { name: 'Premium SLA', price: '$199/month', features: ['24/7 global coverage', '2h critical response', 'Phone & screen share', 'Priority queue access'], cta: 'Upgrade Now', highlight: true },
                { name: 'Enterprise SLA', price: 'Custom', features: ['Dedicated CSM', 'Direct engineering escalation', 'Proactive monitoring', 'Custom SLA terms'], cta: 'Contact Sales', highlight: false },
              ].map((tier, i) => (
                <div key={i} className={`rounded-2xl p-6 flex flex-col justify-between border-2 ${tier.highlight ? 'border-sky-900 dark:border-teal-500 bg-sky-50/50 dark:bg-gray-900/40' : 'border-neutral-200 dark:border-gray-700'}`}>
                  <div>
                    <h4 className="text-sky-900 dark:text-white font-bold text-lg text-center mb-1">{tier.name}</h4>
                    <div className="text-sky-900 dark:text-teal-400 text-2xl font-black text-center mb-6">{tier.price}</div>
                    <ul className="space-y-3">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm">
                          <span className="text-zinc-700 dark:text-gray-300">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {tier.cta && (
                    <button className="w-full bg-sky-900 dark:bg-teal-600 text-white text-xs font-bold py-2.5 rounded-xl hover:bg-sky-950 dark:hover:bg-teal-700 transition mt-6">
                      {tier.cta}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBMIT A TICKET ── */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 border-t dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sky-900 dark:text-white text-3xl font-bold mb-3">Submit a Support Ticket</h2>
            <p className="text-stone-500 dark:text-gray-400 text-base">
              Get escalation-ready support with guaranteed SLA response times
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Ticket Submission Form */}
            <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-neutral-200 dark:border-gray-700 p-6 md:p-8 shadow-sm space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sky-900 dark:text-gray-200 text-sm font-bold mb-2">Issue Type *</label>
                  <select className="w-full h-11 bg-zinc-50 dark:bg-gray-900 rounded-xl border border-neutral-200 dark:border-gray-700 px-3 text-sm text-neutral-700 dark:text-gray-300 focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-500 outline-none">
                    <option>Select issue type</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sky-900 dark:text-gray-200 text-sm font-bold mb-2">Severity Level *</label>
                  <select className="w-full h-11 bg-zinc-50 dark:bg-gray-900 rounded-xl border border-neutral-200 dark:border-gray-700 px-3 text-sm text-neutral-700 dark:text-gray-300 focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-500 outline-none">
                    <option>Select severity</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sky-900 dark:text-gray-200 text-sm font-bold mb-2">Affected Service</label>
                  <select className="w-full h-11 bg-zinc-50 dark:bg-gray-900 rounded-xl border border-neutral-200 dark:border-gray-700 px-3 text-sm text-neutral-700 dark:text-gray-300 focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-500 outline-none">
                    <option>Select service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sky-900 dark:text-gray-200 text-sm font-bold mb-2">Region</label>
                  <select className="w-full h-11 bg-zinc-50 dark:bg-gray-900 rounded-xl border border-neutral-200 dark:border-gray-700 px-3 text-sm text-neutral-700 dark:text-gray-300 focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-500 outline-none">
                    <option>Select region</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sky-900 dark:text-gray-200 text-sm font-bold mb-2">Subject *</label>
                <input 
                  type="text" 
                  placeholder="Brief description of your issue"
                  className="w-full h-11 bg-white dark:bg-gray-900 rounded-xl border border-neutral-200 dark:border-gray-700 px-4 text-sm text-neutral-800 dark:text-white focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sky-900 dark:text-gray-200 text-sm font-bold mb-2">Detailed Description *</label>
                <textarea 
                  value={ticketDescription}
                  onChange={(e) => setTicketDescription(e.target.value)}
                  placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and any relevant context..."
                  className="w-full h-32 bg-white dark:bg-gray-900 rounded-xl border border-neutral-200 dark:border-gray-700 p-4 text-sm text-neutral-800 dark:text-white focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-500 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sky-900 dark:text-gray-200 text-sm font-bold mb-2">Attachments</label>
                <div className="w-full border-2 border-dashed border-neutral-300 dark:border-gray-600 rounded-xl py-8 px-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-gray-900 transition">
                  <UploadCloud className="w-8 h-8 text-teal-700 dark:text-teal-400 mb-2" />
                  <p className="text-zinc-800 dark:text-gray-200 text-sm font-bold">Drop files here or click to browse</p>
                  <p className="text-neutral-400 dark:text-gray-500 text-[11px] mt-1">Supported: PDF, DOC, TXT, Images, Log files (Max 10MB each)</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/40 border border-green-300 dark:border-green-800 rounded-xl p-4 text-green-800 dark:text-green-400 text-sm font-bold">
                Your ticket will be acknowledged within 48 hours based on selected severity
              </div>

              <button className="w-full bg-teal-700 dark:bg-teal-600 text-white font-bold py-3.5 rounded-xl hover:bg-teal-800 dark:hover:bg-teal-700 transition shadow-md">
                Submit Support Ticket
              </button>
            </form>

            {/* Sidebar "What to Expect" Content */}
            <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl border border-neutral-200 dark:border-gray-700 p-6 md:p-8 shadow-sm">
              <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-6">What to Expect</h3>
              <div className="space-y-6">
                {[
                  { Icon: Ticket, title: 'Instant Confirmation', desc: "You'll receive a unique ticket number and confirmation email immediately" },
                  { Icon: Activity, title: 'Live Status Tracking', desc: 'Monitor progress in real-time through your dashboard' },
                  { Icon: Clock, title: 'SLA Guarantee', desc: 'Guaranteed response within committed timeframes' },
                  { Icon: UserCheck, title: 'Expert Assignment', desc: 'Routed to specialist based on issue type and complexity' },
                ].map(({ Icon, title, desc }, i) => (
                  <div key={i} className="flex gap-3.5">
                    <div className="w-9 h-9 bg-sky-50 dark:bg-gray-900 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-sky-100 dark:border-gray-700">
                      <Icon className="w-4 h-4 text-sky-900 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-sky-900 dark:text-white text-sm font-bold mb-0.5">{title}</h4>
                      <p className="text-stone-500 dark:text-gray-400 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 24/7 PEACE OF MIND ── */}
      <section className="w-full bg-sky-900 dark:bg-slate-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Ensure 24/7 Peace of Mind</h2>
            <p className="text-sky-100 dark:text-gray-300 text-base leading-relaxed">
              Upgrade to Premium Support for guaranteed response times and priority access to dedicated systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-sky-100 dark:text-gray-300">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-yellow-400 shrink-0" /> 2-hour critical response</div>
              <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-yellow-400 shrink-0" /> 24/7 global coverage</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-yellow-400 shrink-0" /> Phone &amp; screen share support</div>
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 shrink-0" /> Priority queue access</div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
            <button className="bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-xl hover:bg-yellow-500 transition shadow-lg text-center w-full sm:w-64">
              Upgrade to Premium
            </button>
            <button className="border border-white/40 text-white font-semibold px-8 py-2.5 rounded-xl hover:bg-white/10 dark:hover:bg-gray-800 transition text-center text-sm w-full sm:w-64">
              Submit a Ticket Now
            </button>
            <button className="border border-white/40 text-white font-semibold px-8 py-2.5 rounded-xl hover:bg-white/10 dark:hover:bg-gray-800 transition text-center text-sm w-full sm:w-64">
              Explore Self-Service
            </button>
          </div>
        </div>
      </section>

      {/* ── TRUST & EXCELLENCE ── */}
      <section className="w-full bg-white dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column Left: Resources Info */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="text-sky-900 dark:text-white text-2xl font-bold mb-1">Trust &amp; Excellence</h3>
              <p className="text-stone-500 dark:text-gray-400 text-sm">Our structural frameworks ensure transparency</p>
            </div>

            {[
              { Icon: FileText, label: 'Technical Documentation', desc: 'Comprehensive developer resources and API guides', link: 'Access Dev Resources' },
              { Icon: ShieldCheck, label: 'Trust & Security', desc: 'Security certifications and real-time uptime dashboard', link: 'View Trust Center' },
              { Icon: BookOpen, label: 'Knowledge Hub', desc: 'Whitepapers, webinars, and case studies', link: 'Explore Knowledge Hub' },
            ].map(({ Icon, label, desc, link }, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-teal-700 dark:bg-teal-600 rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sky-900 dark:text-white text-base font-bold">{label}</h4>
                  <p className="text-stone-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  <button className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400 hover:underline mt-2 text-xs font-bold transition-all">
                    <span>{link}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Column Right: Stats & Stories */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h3 className="text-sky-900 dark:text-white text-2xl font-bold mb-4">Support Performance</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { val: '2.1m', label: 'Avg. Response Time', trend: '↗ 15% faster' },
                  { val: '99.2%', label: 'SLA Adherence', trend: '↗ +0.8%' },
                  { val: '4.8/5', label: 'Customer Satisfaction', trend: '↗ Stable' },
                  { val: '94%', label: 'First Contact Resolution', trend: '↗ +3%' },
                ].map((s, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-neutral-200 dark:border-gray-700 p-4 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-teal-700 dark:text-teal-400 text-xl font-black">{s.val}</span>
                    <span className="text-stone-400 dark:text-gray-400 text-[11px] font-medium my-1 min-h-[32px] flex items-center justify-center">{s.label}</span>
                    <span className="text-green-600 dark:text-green-400 text-xs font-extrabold bg-green-50 dark:bg-green-950/40 px-2 py-0.5 rounded">{s.trend}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sky-900 dark:text-white text-2xl font-bold mb-4">Customer Success Stories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { quote: '"ZOIKO DIGITAL support team resolved our critical production issue in under 30 minutes. Their expertise saved us from potential downtime."', author: '— Sarah Chen, CTO at TechFlow' },
                  { quote: '"The screen sharing session helped us identify and fix our integration issues quickly. Outstanding technical support."', author: '— Mike Rodriguez, Lead Developer at DataCorp' },
                ].map((s, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border-l-4 border-teal-700 dark:border-teal-500 p-5 shadow-sm border border-neutral-100 dark:border-gray-700 flex flex-col justify-between">
                    <p className="text-stone-500 dark:text-gray-400 text-xs md:text-sm italic leading-relaxed mb-4">{s.quote}</p>
                    <p className="text-sky-900 dark:text-teal-400 text-xs font-bold">{s.author}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── READY TO TRANSFORM ── */}
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
                    href="mailto:hello@zoikodigital.com"
                    className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                  >
                    hello@zoikodigital.com
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