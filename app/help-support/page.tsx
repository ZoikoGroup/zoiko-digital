"use client";

import React, { useState } from "react";
import { 
  Search, ShieldCheck, Phone, Mail, MessageSquare, Ticket, FileText, 
  ChevronRight, UploadCloud, ChevronUp, ChevronDown, 
  CheckCircle2, Check, Monitor, Activity, Clock, UserCheck, 
  Globe, Star, Cloud
} from "lucide-react";

export default function HelpSupportPage() {
  return (
    <div className="w-full bg-white dark:bg-zinc-950 text-slate-800 dark:text-zinc-100 transition-colors">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full py-16 px-4 md:px-8 bg-gradient-to-tr from-teal-50 via-sky-50 to-emerald-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 overflow-hidden border-b border-teal-100/60 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Top Operational Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/75 dark:bg-zinc-800/80 backdrop-blur-md rounded-full shadow-sm border border-teal-100/50 dark:border-zinc-700/50">
              <span className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">All Systems Operational</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/75 dark:bg-zinc-800/80 backdrop-blur-md rounded-full shadow-sm border border-teal-100/50 dark:border-zinc-700/50">
              <Clock size={14} className="text-teal-600 dark:text-teal-400" />
              <span className="text-xs text-zinc-800 dark:text-zinc-200">
                Avg. chat response: <strong className="font-bold text-teal-600 dark:text-teal-400">2m</strong>
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-teal-900 dark:text-white tracking-tight mb-8">
            How can we help you today?
          </h1>

          {/* Search Box */}
          <div className="w-full max-w-3xl relative mb-10 group">
            <div className="absolute inset-y-0 left-4 flex items-center">
              <div className="h-10 w-10 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-md">
                <Search size={16} />
              </div>
            </div>
            <input 
              type="text" 
              placeholder="Describe your issue in natural language... e.g., 'My API calls are returning errors'"
              className="w-full h-16 pl-16 pr-6 rounded-2xl bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border-2 border-teal-600/30 focus:border-teal-600 placeholder-zinc-400 dark:placeholder-zinc-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-600/10 transition-all text-sm md:text-base"
            />
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="h-12 px-8 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer">
              Contact Support
            </button>
            <button className="h-12 px-8 bg-white dark:bg-zinc-800 text-teal-700 dark:text-teal-400 border-2 border-teal-600/20 dark:border-teal-500/30 text-sm font-bold rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors cursor-pointer">
              Explore Tutorials & Guides
            </button>
          </div>
        </div>
      </section>

      {/* ================= TOP ARTICLES SECTION ================= */}
      <section className="w-full py-20 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-900/40 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-950 dark:text-teal-400">Top Articles for You</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mt-2">
              Personalized recommendations based on your account, location, and recent activity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Curated Curation Panel */}
            <div className="lg:col-span-4 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 shadow-sm">
              <h3 className="text-base font-bold text-teal-950 dark:text-white mb-4">Curated for:</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="px-3 py-1.5 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 text-xs font-semibold rounded-lg">North America</div>
                <div className="px-3 py-1.5 bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 text-xs font-semibold rounded-lg">Enterprise Plan</div>
                <div className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold rounded-lg">Technical Lead</div>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left py-2.5 px-4 bg-teal-600 text-white font-semibold text-xs rounded-xl shadow-sm">
                  Based on Recent Searches
                </button>
                <button className="w-full text-left py-2.5 px-4 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-xs rounded-xl border border-zinc-200 dark:border-zinc-700 transition-colors">
                   Most Viewed This Week
                </button>
                <button className="w-full text-left py-2.5 px-4 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-xs rounded-xl border border-zinc-200 dark:border-zinc-700 transition-colors">
                  Recommended for You
                </button>
              </div>
            </div>

            {/* Right Accordion Articles List */}
            <div className="lg:col-span-8 space-y-4">
              {/* Card 1 */}
              <div className="p-5 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-teal-900 dark:text-white text-base md:text-lg hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition-colors">API Authentication Best Practices</h4>
                </div>
                <div className="flex flex-wrap items-center gap-4 justify-between md:justify-end">
                  <span className="text-xs text-zinc-400">👁 2.4K views</span>
                  <span className="text-xs text-zinc-400">📅 Updated 2 days ago</span>
                  <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full">Beginner</span>
                  <ChevronDown className="text-zinc-400 hover:text-teal-600 cursor-pointer" size={18} />
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-5 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-teal-900 dark:text-white text-base md:text-lg hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition-colors">Troubleshooting Cloud Deployment Issues</h4>
                </div>
                <div className="flex flex-wrap items-center gap-4 justify-between md:justify-end">
                  <span className="text-xs text-zinc-400">👁 1.8K views</span>
                  <span className="text-xs text-zinc-400">📅 Updated 1 week ago</span>
                  <span className="text-xs text-sky-700 dark:text-sky-400 font-semibold bg-sky-50 dark:bg-sky-950/30 px-2.5 py-1 rounded-full">Intermediate</span>
                  <ChevronDown className="text-zinc-400 hover:text-teal-600 cursor-pointer" size={18} />
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-5 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-teal-900 dark:text-white text-base md:text-lg hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition-colors">Database Performance Optimization</h4>
                </div>
                <div className="flex flex-wrap items-center gap-4 justify-between md:justify-end">
                  <span className="text-xs text-zinc-400">👁 3.1K views</span>
                  <span className="text-xs text-zinc-400">📅 Updated 3 days ago</span>
                  <span className="text-xs text-amber-700 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-full">Advanced</span>
                  <ChevronDown className="text-zinc-400 hover:text-teal-600 cursor-pointer" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GUIDES & TUTORIALS SECTION ================= */}
      <section className="w-full py-20 px-4 md:px-8 bg-white dark:bg-zinc-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-950 dark:text-teal-400">Guides & Tutorials</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mt-2">
              Immersive and interactive learning experiences to master the platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guide Card 1 */}
            <div className="relative p-6 md:p-8 bg-white dark:bg-zinc-800 border-2 border-teal-600/20 dark:border-teal-500/30 rounded-2xl shadow-md flex flex-col justify-between hover:border-teal-600 transition-all">
              <span className="absolute top-4 right-4 bg-teal-600 text-white text-[10px] tracking-wider font-extrabold px-2.5 py-1 rounded-full">FEATURED</span>
              <div>
                <div className="h-14 w-14 bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-teal-100 dark:border-teal-900/50">
                  <Cloud size={24} />
                </div>
                <h3 className="text-xl font-bold text-teal-950 dark:text-white mb-3">Cloud Infrastructure Setup</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Complete guide to setting up your cloud infrastructure with best practices and security configurations.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium mb-6">
                  <span className="bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-2.5 py-1 rounded-lg">⏱ 45 min</span>
                  <span className="bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 px-2.5 py-1 rounded-lg">Intermediate</span>
                  <span className="bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-lg">🔧 Hands-on</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <button className="py-2.5 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-colors">▶ Video</button>
                  <button className="py-2.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors">Simulator</button>
                  <button className="py-2.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors">Steps</button>
                </div>
              </div>
            </div>

            {/* Guide Card 2 */}
            <div className="p-6 md:p-8 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm flex flex-col justify-between hover:border-teal-600/40 transition-all">
              <div>
                <div className="h-14 w-14 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-sky-100 dark:border-sky-900/50">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-teal-950 dark:text-white mb-3">Security & Compliance Setup</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Implement enterprise-grade security measures and ensure compliance with industry standards.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium mb-6">
                  <span className="bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-2.5 py-1 rounded-lg">⏱ 60 min</span>
                  <span className="bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 px-2.5 py-1 rounded-lg">Advanced</span>
                  <span className="bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 px-2.5 py-1 rounded-lg">Comprehensive</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-2.5 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-colors">▶ Video</button>
                <button className="py-2.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors">Simulator</button>
                <button className="py-2.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors">Steps</button>
              </div>
            </div>

            {/* Guide Card 3 */}
            <div className="p-6 md:p-8 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm flex flex-col justify-between hover:border-teal-600/40 transition-all">
              <div>
                <div className="h-14 w-14 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center font-mono font-extrabold text-lg mb-6 shadow-sm border border-emerald-100 dark:border-emerald-900/50">
                  {"</>"}
                </div>
                <h3 className="text-xl font-bold text-teal-950 dark:text-white mb-3">API Integration Masterclass</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Master API integration with real-world examples, authentication, and error handling strategies.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium mb-6">
                  <span className="bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-2.5 py-1 rounded-lg">⏱ 30 min</span>
                  <span className="bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-lg">Beginner</span>
                  <span className="bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 px-2.5 py-1 rounded-lg">⚡ Interactive</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-2.5 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-colors">▶ Video</button>
                <button className="py-2.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors">Simulator</button>
                <button className="py-2.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors">Steps</button>
              </div>
            </div>

            {/* Guide Card 4 */}
            <div className="p-6 md:p-8 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm flex flex-col justify-between hover:border-teal-600/40 transition-all">
              <div>
                <div className="h-14 w-14 bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-teal-100 dark:border-teal-900/50">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-bold text-teal-950 dark:text-white mb-3">Analytics & Monitoring</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Set up comprehensive monitoring and analytics to track performance and identify issues before they affect users.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium mb-6">
                  <span className="bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-2.5 py-1 rounded-lg">⏱ 40 min</span>
                  <span className="bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 px-2.5 py-1 rounded-lg">Intermediate</span>
                  <span className="bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 px-2.5 py-1 rounded-lg">🎯 Practical</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-2.5 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-colors">▶ Video</button>
                <button className="py-2.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors">Simulator</button>
                <button className="py-2.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors">Steps</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY FORUM SECTION ================= */}
      <section className="w-full py-20 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-900/20 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-950 dark:text-teal-400">Community Forum</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mt-2">
              Collaborative hub where developers and experts share knowledge and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Community Stats Panel */}
            <div className="lg:col-span-4 space-y-6">
              {/* Box 1: Impact */}
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <h3 className="font-bold text-teal-950 dark:text-white mb-4 text-sm uppercase tracking-wider">Community Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 dark:text-zinc-400 text-sm">Active Members</span>
                    <strong className="text-teal-600 dark:text-teal-400 text-lg font-extrabold">15.2K</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 dark:text-zinc-400 text-sm">Questions Answered</span>
                    <strong className="text-teal-600 dark:text-teal-400 text-lg font-extrabold">42.8K</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 dark:text-zinc-400 text-sm">Resolution Rate</span>
                    <strong className="text-teal-600 dark:text-teal-400 text-lg font-extrabold">98.5%</strong>
                  </div>
                </div>
              </div>

              {/* Box 2: Contributors */}
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <h3 className="font-bold text-teal-950 dark:text-white mb-4 text-sm uppercase tracking-wider">Top Contributors</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-base">🏆</span>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 dark:text-white">Sarah Chen</h4>
                      <p className="text-xs text-zinc-400">2,450 pts</p>
                    </div>
                    <span className="ml-auto text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-md">Expert</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-base">🥈</span>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 dark:text-white">Mike Rodriguez</h4>
                      <p className="text-xs text-zinc-400">2,180 pts</p>
                    </div>
                    <span className="ml-auto text-[10px] font-bold bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 px-2 py-0.5 rounded-md">Mentor</span>
                  </div>
                </div>
              </div>

              {/* Box 3: Feature Roadmap */}
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm text-center">
                <h3 className="font-bold text-teal-950 dark:text-white text-sm mb-1">Feature Requests</h3>
                <p className="text-xs text-zinc-400 mb-4">Help shape our product roadmap</p>
                <button className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors">
                  Suggest a Feature
                </button>
              </div>
            </div>

            {/* Right Feed Area */}
            <div className="lg:col-span-8 bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm space-y-6">
              {/* Header Toggles */}
              <div className="flex flex-wrap gap-2 justify-between items-center pb-4 border-b border-zinc-100 dark:border-zinc-700">
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-teal-600 text-white text-xs font-bold rounded-lg shadow-sm">Recent</button>
                  <button className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors">Popular</button>
                </div>
                <button className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1 transition-colors">
                  <span>+</span> Ask a Question
                </button>
              </div>

              {/* Discussion Thread Item 1 */}
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 flex gap-4">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <button className="p-1 text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg"><ChevronUp size={16} /></button>
                  <span className="text-sm font-bold text-teal-900 dark:text-white">42</span>
                  <button className="p-1 text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg"><ChevronDown size={16} /></button>
                </div>
                <div className="w-full">
                  <div className="flex flex-wrap gap-2 items-center justify-between mb-2">
                    <h4 className="font-bold text-teal-950 dark:text-white hover:text-teal-600 transition-colors text-base cursor-pointer">How to handle rate limiting in API calls?</h4>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 size={12} /> Verified
                    </span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                    I'm experiencing rate limiting issues when making bulk API calls. What's the best approach to handle this gracefully?
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-zinc-400 items-center">
                    <span>by <strong className="text-zinc-600 dark:text-zinc-300 font-semibold hover:underline cursor-pointer">DevMaster99</strong></span>
                    <span>• 2 hours ago</span>
                    <span>• 8 replies</span>
                    <div className="flex gap-1.5 ml-auto">
                      <span className="px-2 py-0.5 bg-zinc-200/60 dark:bg-zinc-700 text-[11px] rounded-md text-teal-800 dark:text-teal-300">api</span>
                      <span className="px-2 py-0.5 bg-zinc-200/60 dark:bg-zinc-700 text-[11px] rounded-md text-teal-800 dark:text-teal-300">rate-limiting</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discussion Thread Item 2 */}
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 flex gap-4">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <button className="p-1 text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg"><ChevronUp size={16} /></button>
                  <span className="text-sm font-bold text-teal-900 dark:text-white">28</span>
                  <button className="p-1 text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg"><ChevronDown size={16} /></button>
                </div>
                <div className="w-full">
                  <div className="flex flex-wrap gap-2 items-center justify-between mb-2">
                    <h4 className="font-bold text-teal-950 dark:text-white hover:text-teal-600 transition-colors text-base cursor-pointer">Database connection pooling best practices</h4>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 size={12} /> Verified
                    </span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                    Looking for recommendations on connection pool size and configuration for high-traffic applications.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                    <span>by <strong className="text-zinc-600 dark:text-zinc-300 font-semibold hover:underline cursor-pointer">DataGuru</strong></span>
                    <span>• 5 hours ago</span>
                    <span>• 12 replies</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-md transition-colors text-sm">
                Join the Developer Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIVE SUPPORT CHANNELS ================= */}
      <section className="w-full py-20 px-4 md:px-8 bg-white dark:bg-zinc-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-950 dark:text-teal-400">Live Support Channels</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mt-2">
              Choose the support channel that best fits your needs with transparent SLA commitments
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Box 1 */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700 text-center flex flex-col justify-between hover:border-teal-600/40 transition-all">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-teal-100 dark:border-teal-900/50">
                  <MessageSquare size={20} />
                </div>
                <h3 className="font-bold text-teal-950 dark:text-white text-base mb-2">Live Chat</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-4">Instant support for quick updates and documentation query paths.</p>
              </div>
              <div>
                <span className="block font-bold text-sm text-teal-700 dark:text-teal-400 mb-2">~2 minutes</span>
                <span className="inline-block text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-300 px-2.5 py-1 rounded-full mb-4">🟢 Available Now</span>
                <button className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg transition-colors">Start Chat</button>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700 text-center flex flex-col justify-between hover:border-teal-600/40 transition-all">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-teal-100 dark:border-teal-900/50">
                  <Phone size={20} />
                </div>
                <h3 className="font-bold text-teal-950 dark:text-white text-base mb-2">Phone Hotline</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-4">Direct voice support for architecture-level roadblocks.</p>
              </div>
              <div>
                <span className="block font-bold text-sm text-teal-700 dark:text-teal-400 mb-1">~5 minutes</span>
                <span className="block text-[11px] text-zinc-400 font-mono mb-2">+1 (555) 123-HELP</span>
                <button className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg transition-colors">Call Now</button>
              </div>
            </div>

            {/* Box 3 */}
            <div className="relative bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border-2 border-teal-600 text-center flex flex-col justify-between">
              <span className="absolute top-3 right-3 bg-teal-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md">PREMIUM</span>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-teal-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Monitor size={20} />
                </div>
                <h3 className="font-bold text-teal-950 dark:text-white text-base mb-2">Screen Share</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-4">Interactive real-time debugging directly over standard calls.</p>
              </div>
              <div>
                <span className="block font-bold text-sm text-teal-700 dark:text-teal-400 mb-2">~3 minutes</span>
                <button className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg transition-colors">Start Session</button>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700 text-center flex flex-col justify-between hover:border-teal-600/40 transition-all">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-teal-100 dark:border-teal-900/50">
                  <Mail size={20} />
                </div>
                <h3 className="font-bold text-teal-950 dark:text-white text-base mb-2">Email Support</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-4">Detailed technical routing tickets tracked via dashboard integration.</p>
              </div>
              <div>
                <span className="block font-bold text-sm text-teal-700 dark:text-teal-400 mb-2">~2-4 hours</span>
                <button className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg transition-colors">Send Email</button>
              </div>
            </div>
          </div>

          {/* Support Tier Comparison Grid Container */}
          <div className="bg-white dark:bg-zinc-800 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-lg max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-extrabold text-center text-teal-950 dark:text-white mb-8">Support Tier Comparison</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Box A */}
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-teal-950 dark:text-white text-lg">Standard SLA</h4>
                  <span className="text-xl font-extrabold text-teal-600 dark:text-teal-400 block mt-2 mb-4">Included</span>
                  <ul className="space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> Business hours support</li>
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> 48h response time</li>
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> Chat & email access</li>
                  </ul>
                </div>
              </div>

              {/* Box B: Featured Pricing Box */}
              <div className="p-6 bg-white dark:bg-zinc-900 border-2 border-teal-600 rounded-xl relative flex flex-col justify-between shadow-md md:scale-105">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">RECOMMENDED</span>
                <div>
                  <h4 className="font-bold text-teal-950 dark:text-white text-lg">Premium SLA</h4>
                  <span className="text-xl font-extrabold text-teal-600 dark:text-teal-400 block mt-2 mb-4">$199/month</span>
                  <ul className="space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> 24/7 global coverage</li>
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> 2h critical response</li>
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> Phone & screen share</li>
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> Priority queue access</li>
                  </ul>
                </div>
                <button className="w-full mt-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm">Upgrade Now</button>
              </div>

              {/* Box C */}
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-teal-950 dark:text-white text-lg">Enterprise SLA</h4>
                  <span className="text-xl font-extrabold text-teal-600 dark:text-teal-400 block mt-2 mb-4">Custom</span>
                  <ul className="space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> Dedicated CSM Manager</li>
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> Direct engineering pipelines</li>
                    <li className="flex gap-2 items-center"><Check size={14} className="text-teal-600" /> Proactive edge monitoring</li>
                  </ul>
                </div>
                <button className="w-full mt-6 py-2.5 bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-bold rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUPPORT TICKET FORM ================= */}
      <section className="w-full py-20 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-900/40 transition-colors">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-950 dark:text-teal-400">Submit a Support Ticket</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2">Get escalation-ready support with guaranteed SLA response times</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Big Form */}
            <div className="lg:col-span-8 bg-white dark:bg-zinc-800 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-2">Issue Type *</label>
                  <select className="w-full h-11 px-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs focus:ring-2 focus:ring-teal-600 focus:bg-white outline-none text-zinc-700 dark:text-zinc-300 transition-all">
                    <option>Select issue type</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-2">Severity Level *</label>
                  <select className="w-full h-11 px-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs focus:ring-2 focus:ring-teal-600 focus:bg-white outline-none text-zinc-700 dark:text-zinc-300 transition-all">
                    <option>Select severity</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-2">Affected Service</label>
                  <select className="w-full h-11 px-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs focus:ring-2 focus:ring-teal-600 focus:bg-white outline-none text-zinc-700 dark:text-zinc-300 transition-all">
                    <option>Select service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-2">Region</label>
                  <select className="w-full h-11 px-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs focus:ring-2 focus:ring-teal-600 focus:bg-white outline-none text-zinc-700 dark:text-zinc-300 transition-all">
                    <option>Select region</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-2">Subject *</label>
                <input type="text" placeholder="Brief description of your issue" className="w-full h-11 px-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm focus:ring-2 focus:ring-teal-600 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-2">Detailed Description *</label>
                <textarea rows={4} placeholder="Please provide detailed information about your issue, including steps to reproduce, error logs, and metrics configurations..." className="w-full p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm focus:ring-2 focus:ring-teal-600 outline-none resize-none transition-all"></textarea>
              </div>

              {/* Upload Drag area */}
              <div>
                <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-2">Attachments</label>
                <div className="w-full py-8 border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
                  <UploadCloud size={28} className="text-teal-600" />
                  <div className="text-center px-4">
                    <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Drop files here or click to browse</p>
                    <p className="text-[11px] text-zinc-400 mt-1">Supported formats: PDF, DOC, TXT, Log files (Max 10MB each)</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900 text-xs md:text-sm text-emerald-800 dark:text-emerald-300 font-semibold">
                Your ticket will be acknowledged within 48 hours based on selected core parameters.
              </div>

              <button className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white text-base font-bold rounded-xl shadow-md transition-colors cursor-pointer">
                Submit Support Ticket
              </button>
            </div>

            {/* Right sidebar info widgets */}
            <div className="lg:col-span-4 bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-teal-950 dark:text-white pb-3 border-b border-zinc-100 dark:border-zinc-700 uppercase tracking-wider">What to Expect</h3>
              
              <div className="space-y-5">
                <div className="flex gap-3 items-start">
                  <Ticket className="text-teal-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-sm font-bold text-teal-950 dark:text-white">Instant Confirmation</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">You'll receive a unique tracking token and email immediately.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Activity className="text-teal-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-sm font-bold text-teal-950 dark:text-white">Live Status Tracking</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Monitor response loops globally within your personal console dashboard.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Clock className="text-teal-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-sm font-bold text-teal-950 dark:text-white">SLA Guarantee</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Guaranteed responses mapped directly inside tier specifications.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <UserCheck className="text-teal-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-sm font-bold text-teal-950 dark:text-white">Expert Assignment</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Routed to direct field specialists matching system logs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 24/7 PEACE OF MIND BLUE BANNER ================= */}
      <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-r from-teal-900 to-cyan-950 text-white transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">Ensure 24/7 Peace of Mind</h2>
            <p className="text-teal-100 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
              Upgrade to Premium Support for guaranteed response times, mission-critical operations oversight, and priority routing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-xs md:text-sm text-teal-200">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-emerald-400" /> 2-hour critical response loops
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-emerald-400" /> 24/7 round-the-clock coverage
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400" /> Phone & screen share pipelines
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-emerald-400" /> Dedicated priority queues
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
            <button className="py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition-all cursor-pointer text-sm">
              Upgrade to Premium Support
            </button>
            <button className="py-2.5 px-6 bg-transparent border-2 border-white/20 hover:border-white text-white font-semibold text-xs rounded-xl transition-all cursor-pointer">
              Submit a Ticket Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= TRUST & SUPPORT PERFORMANCE ================= */}
      <section className="w-full py-20 px-4 md:px-8 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column Links */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-extrabold text-teal-950 dark:text-teal-400">Trust & Excellence</h3>
            
            {/* Box 1 */}
            <div className="flex gap-4 items-start">
              <div className="h-11 w-11 bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-teal-100 dark:border-teal-900/40">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="font-bold text-teal-950 dark:text-white text-base">Technical Documentation</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-2 leading-relaxed">Comprehensive developer reference suites and endpoint maps.</p>
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1 cursor-pointer">
                  Access Dev Resources <ChevronRight size={12} />
                </span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex gap-4 items-start">
              <div className="h-11 w-11 bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-teal-100 dark:border-teal-900/40">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-teal-950 dark:text-white text-base">Trust & Security Hub</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-2 leading-relaxed">Real-time infrastructure cluster status monitors.</p>
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1 cursor-pointer">
                  View Trust Center <ChevronRight size={12} />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Metrics Cards Grid */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-extrabold text-teal-950 dark:text-teal-400">Support Performance</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-center shadow-sm">
                <span className="block text-xl font-extrabold text-teal-600">2.1m</span>
                <span className="block text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Avg Response</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block mt-1 font-semibold">↗ 15% faster</span>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-center shadow-sm">
                <span className="block text-xl font-extrabold text-teal-600">99.2%</span>
                <span className="block text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">SLA Adherence</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block mt-1 font-semibold">↗ +0.8%</span>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-center shadow-sm">
                <span className="block text-xl font-extrabold text-teal-600">4.8/5</span>
                <span className="block text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Satisfaction</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block mt-1 font-semibold">↗ Stable</span>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-center shadow-sm">
                <span className="block text-xl font-extrabold text-teal-600">94%</span>
                <span className="block text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">First Contact Fix</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block mt-1 font-semibold">↗ +3%</span>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-zinc-50 dark:bg-zinc-800 border-l-4 border-teal-600 rounded-r-xl">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                  "The support team resolved our production roadblock in under 30 minutes. Their expertise saved us from massive data delays."
                </p>
                <strong className="block text-[11px] text-teal-950 dark:text-white mt-3">— Sarah Chen, CTO at TechFlow</strong>
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-zinc-800 border-l-4 border-teal-600 rounded-r-xl">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                  "The real-time screen sharing layout sandbox pinpointed authentication bugs instantly. Exceptionally deep technical infrastructure tier."
                </p>
                <strong className="block text-[11px] text-teal-950 dark:text-white mt-3">— Mike Rodriguez, Lead Dev at DataCorp</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROJECT CONTACT FORM SECTION ================= */}
      <section className="w-full py-20 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-950 transition-colors">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-teal-950 dark:text-white tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Connect with our global team of experts to discuss your digital transition metrics and discover optimization infrastructure paths.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-teal-900 dark:bg-zinc-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email Us</h4>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">hello@zoikodigital.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-teal-900 dark:bg-zinc-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Call Us</h4>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right White Form Box */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-800 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-xl space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-1.5">Full Name</label>
              <input type="text" className="w-full h-11 px-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm focus:ring-2 focus:ring-teal-600 outline-none transition-all" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-1.5">Business Email</label>
              <input type="email" className="w-full h-11 px-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm focus:ring-2 focus:ring-teal-600 outline-none transition-all" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-1.5">Service Interest</label>
                <select className="w-full h-11 px-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-500 outline-none focus:ring-2 focus:ring-teal-600 transition-all">
                  <option>Select a service</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-1.5">Project Budget</label>
                <select className="w-full h-11 px-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-500 outline-none focus:ring-2 focus:ring-teal-600 transition-all">
                  <option>Select budget range</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-teal-900 dark:text-teal-400 mb-1.5">Project Details</label>
              <textarea rows={3} placeholder="Tell us about your architectural specifications..." className="w-full p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm focus:ring-2 focus:ring-teal-600 outline-none resize-none transition-all"></textarea>
            </div>

            <button className="w-full sm:w-auto px-8 h-12 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow transition-all cursor-pointer">
              Start Your Project
            </button>
          </div>

        </div>
      </section>

    </div>  
  );
}