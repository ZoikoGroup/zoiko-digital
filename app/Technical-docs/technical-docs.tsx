"use client"
import React, { useState } from 'react';
import { 
  Search, Terminal, Shield, ArrowUpRight, CheckCircle, 
  Code, Download, Play, Copy, Check, Cpu, Server, 
  Layers, MessageSquare, Send, Rss, Mail, Webhook, 
  Phone, Globe, Clock,  AlertTriangle
} from 'lucide-react';

export default function DocumentationPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [apiType, setApiType] = useState<'REST' | 'GraphQL'>('REST');
  const [selectedSnippet, setSelectedSnippet] = useState<'Python' | 'Node' | 'Go'>('Python');

  // API Explorer Side-Navigation/Endpoints Configuration
  const [activeEndpoint, setActiveEndpoint] = useState<string>('/auth/token');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const codeCards = [
    {
      category: "Authentication",
      title: "OAuth 2.0 Flow",
      id: "oauth-flow",
      code: `# OAuth 2.0 Authentication Flow\nimport requests\nfrom urllib.parse import urlencode\n\ndef get_access_token(client_id, client_secret, code):\n    url = "https://api.ZoikoDigital.com/oauth/token"\n    data = {\n        "grant_type": "authorization_code",\n        "client_id": client_id,\n        "client_secret": client_secret,\n        "code": code\n    }\n    response = requests.post(url, data=data)\n    return response.json()["access_token"]`
    },
    {
      category: "Compliance APIs",
      title: "GDPR Data Export",
      id: "gdpr-export",
      code: `# GDPR Data Export\nimport requests\n\ndef export_user_data(user_id, api_key):\n    url = f"https://api.ZoikoDigital.com/v1/compliance/gdpr/export"\n    headers = {"Authorization": f"Bearer {api_key}"}\n    payload = {"user_id": user_id}\n    \n    response = requests.post(url, json=payload, headers=headers)\n    return response.json()["export_url"]`
    },
    {
      category: "AI Models",
      title: "Fraud Detection API",
      id: "fraud-detection",
      code: `# AI Fraud Detection\nimport requests\n\ndef detect_fraud(transaction_data, api_key):\n    url = "https://api.ZoikoDigital.com/v1/ai/fraud-detection"\n    headers = {"Authorization": f"Bearer {api_key}"}\n    \n    response = requests.post(url, json=transaction_data, headers=headers)\n    return response.json()["risk_score"]`
    },
    {
      category: "Cloud Integrations",
      title: "Multi-Cloud Deployment",
      id: "multicloud-deploy",
      code: `# Multi-Cloud Deployment\nimport requests\n\ndef deploy_to_cloud(app_config, target_cloud, api_key):\n    url = f"https://api.ZoikoDigital.com/v1/cloud/deploy/{target_cloud}"\n    headers = {"Authorization": f"Bearer {api_key}"}\n    \n    response = requests.post(url, json=app_config, headers=headers)\n    return response.json()["deployment_id"]`
    },
    {
      category: "Payments",
      title: "Payment Processing",
      id: "payment-proc",
      code: `# Payment Processing\nimport requests\n\ndef process_payment(payment_data, api_key):\n    url = "https://api.ZoikoDigital.com/v1/payments/process"\n    headers = {"Authorization": f"Bearer {api_key}"}\n    \n    response = requests.post(url, json=payment_data, headers=headers)\n    return response.json()["transaction_id"]`
    }
  ];

  const templates = [
    {
      title: "Microservices Starter",
      description: "Complete microservices architecture with ZOIKO DIGITAL integration."
    },
    {
      title: "E-commerce Backend",
      description: "Full e-commerce backend with payment and inventory APIs."
    },
    {
      title: "Healthcare Portal",
      description: "HIPAA-compliant patient management system with telemedicine features."
    }
  ];

  const changelogData = [
    {
      version: "v2.1.4",
      date: "December 15, 2024",
      description: "Added GraphQL API support with real-time subscriptions. Enhanced authentication with MFA support.",
      isLatest: true,
      badges: [
        { label: "New Feature", color: "bg-green-600 text-white" },
        { label: "Security Patch", color: "bg-yellow-400 text-zinc-800" }
      ],
      points: [
        "GraphQL endpoint at /graphql with full schema introspection",
        "Multi-factor authentication for enhanced security",
        "Performance improvements for data processing APIs",
        "New webhook events for real-time notifications"
      ]
    },
    {
      version: "v2.1.3",
      date: "December 1, 2024",
      description: "Deprecated v1 authentication endpoints. Migration guide available.",
      isLatest: false,
      badges: [
        { label: "Breaking Change", color: "bg-red-500 text-white" },
        { label: "Deprecation Notice", color: "bg-yellow-400 text-zinc-800" }
      ],
      points: [
        "⚠️ /v1/auth/* endpoints deprecated (removal: March 2025)",
        "New /v2/auth/* endpoints with improved security",
        "Automatic migration tool available in developer dashboard",
        "Backward compatibility maintained until March 2025"
      ]
    },
    {
      version: "v2.1.2",
      date: "November 20, 2024",
      description: "Fixed rate limiting issues and improved error responses.",
      isLatest: false,
      badges: [
        { label: "Bug Fix", color: "bg-cyan-600 text-white" }
      ],
      points: [
        "Resolved intermittent rate limiting false positives",
        "Enhanced error messages with actionable guidance",
        "Improved API response time by 15%"
      ]
    },
    {
      version: "v2.1.1",
      date: "November 10, 2024",
      description: "Added support for batch operations and improved SDK performance.",
      isLatest: false,
      badges: [
        { label: "New Feature", color: "bg-green-600 text-white" }
      ],
      points: [
        "Batch API endpoints for bulk operations",
        "SDK performance improvements across all languages",
        "New monitoring and analytics dashboard"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-teal-900 to-teal-600 py-10 text-white text-center px-4">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical Documentation & APIs
          </h1>
          
          {/* Status Bar */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/10">
            <span className="flex h-2.5 w-2.5 rounded-full bg-neutral-500/60 animate-pulse" />
            <span className="text-slate-200 ">All Systems Operational - 99.999% uptime</span>
            <span className="text-white/40">|</span>
            <a href="#trust" className="hover:text-teal-300 font-medium transition">Trust Center</a>
          </div>
          <div className="text-center justify-center text-white text-lg font-semibold ">Start Building with Your Free API Key</div>
          <p className="text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto">
            Everything developers need to build, scale, and integrate with Zoiko Digital.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search Documentation, APIs, and SDKs..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-slate-900 shadow-xl focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* CTA */}
          <div className="pt-2">
            <p className="text-sm text-slate-300/80 mt-1">
              Trusted by 5,000+ developers across 40+ countries
            </p>
          </div>
        </div>
      </header>

      {/* QUICK START GUIDES */}
      <section className="py-20 max-w-full mx-auto px-4 bg-fuchsia-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Quick Start Guides</h2>
            <p className="text-slate-600 dark:text-gray-300 mt-2">Get up and running in minutes with our industry-specific starter packs</p>
          </div>

          {/* Industry Starter Packs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Telecom Starter Pack", desc: "Complete integration for telecom providers with billing, network monitoring, and customer APIs", color: "from-red-400 to-rose-500", time: "2-min video",icon:"/images/technical-docs/Symbol (2).png" },
              { title: "Finance Starter Pack", desc: "Banking and fintech APIs with compliance, payments, and fraud detection", color: "from-teal-400 to-cyan-600", time: "2-min video",icon:"/images/technical-docs/Symbol (3).png" },
              { title: "Healthcare Starter Pack", desc: "HIPAA-compliant APIs for patient data, billing, and telemedicine integration", color: "from-fuchsia-400 to-pink-600", time: "1-min video",icon:"/images/technical-docs/Symbol (4).png" },
              { title: "Retail Starter Pack", desc: "E-commerce APIs for inventory, payments, analytics, and customer management", color: "from-blue-400 to-indigo-600", time: "2-min video",icon:"/images/technical-docs/Symbol (5).png" }
            ].map((pack, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition">
                <div className="h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600" />
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pack.color} flex items-center justify-center text-white mb-4 shadow-sm`}>
                    <img className="w-8 h-8" 
                        src={pack.icon}
                        alt=""
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#114769] dark:text-teal-400 mb-2">{pack.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">{pack.desc}</p>
                  
                  <div className="flex gap-2 w-full mb-4">
                    <span className="text-xs font-medium bg-[#207373] text-[#FFFFFF] px-3.5 py-1 rounded-md flex-1 text-center">{pack.time}</span>
                    <span className="text-xs font-medium bg-[#207373] text-[#FFFFFF] px-2.5 py-1 rounded-md flex-1 text-center">Live sandbox</span>
                  </div>

                  <div className="space-y-2 w-full">
                    <button className="w-full py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 transition">
                      Watch Guide
                    </button>
                    <button className="w-full py-2 bg-slate-900 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition">
                      Launch in Sandbox
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Universal Guides */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-8">Universal Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Hello World API Call", desc: "Your first API call in under 5 minutes", icon:"/images/technical-docs/Symbol (6).png", time: "1-min guide" },
                { title: "Authentication in 3 Steps", desc: "Secure API authentication setup", icon:"/images/technical-docs/Symbol (7).png", time: "2-min guide" },
                { title: "Your First Data Push", desc: "Send data to ZOIKO DIGITAL platform efficiently", icon:"/images/technical-docs/Symbol (8).png", time: "2-min guide" }
              ].map((guide, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700 rounded-2xl p-6 text-center hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-700 to-sky-900 flex items-center justify-center text-teal-700 mx-auto mb-4">
                    <img className="w-6 h-6" 
                      src={guide.icon}
                      alt=""
                    />
                  </div>
                  <h4 className="text-lg font-bold text-[#114769] dark:text-teal-400">{guide.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-300 mt-1 mb-6">{guide.desc}</p>
                  <div className="flex gap-3 justify-center">
                    <button className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium rounded-lg transition">
                      {guide.time}
                    </button>
                    <button className="px-4 py-2 bg-slate-900 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition">
                      Try Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API EXPLORER & AI INTERACTION */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 border-y border-neutral-200 dark:border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-[#114769] dark:text-teal-400 text-center text-2xl md:text-3xl font-semibold tracking-normal mb-10 font-sans">
            API Explorer
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Sidebar Navigation Controller */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl border border-neutral-200 dark:border-gray-700 p-5 space-y-6 shadow-sm min-h-[420px]">
              {/* Type Switches */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setApiType('REST')} 
                  className={`flex-1 py-1.5 text-center text-sm font-normal rounded-md border transition ${apiType === 'REST' ? 'bg-[#207373] border-[#207373] text-white' : 'bg-neutral-100 dark:bg-gray-700 border-neutral-200 dark:border-gray-600 text-black dark:text-white'}`}
                >
                  REST API
                </button>
                <button 
                  onClick={() => setApiType('GraphQL')} 
                  className={`flex-1 py-1.5 text-center text-sm font-normal rounded-md border transition ${apiType === 'GraphQL' ? 'bg-[#207373] border-[#207373] text-white' : 'bg-neutral-100 dark:bg-gray-700 border-neutral-200 dark:border-gray-600 text-black dark:text-white'}`}
                >
                  GraphQL
                </button>
              </div>

              {/* Endpoint Categories */}
              <div className="space-y-5">
                <div>
                  <span className="text-[#114769] dark:text-teal-400 text-xs font-semibold uppercase tracking-wide block mb-2.5">
                    Authentication
                  </span>
                  <button 
                    onClick={() => setActiveEndpoint('/auth/token')}
                    className={`w-full flex items-center gap-3 p-2 rounded-md transition text-left ${activeEndpoint === '/auth/token' ? 'bg-[#207373] text-white' : 'hover:bg-neutral-50 dark:hover:bg-gray-700 text-zinc-800 dark:text-gray-200'}`}
                  >
                    <span className="bg-[#114769] text-white text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-sm tracking-tight shrink-0">
                      POST
                    </span>
                    <span className="text-xs font-mono">/auth/token</span>
                  </button>
                </div>

                <div>
                  <span className="text-[#114769] dark:text-teal-400 text-xs font-semibold uppercase tracking-wide block mb-2.5">
                    Users
                  </span>
                  <div className="space-y-2">
                    <button 
                      onClick={() => setActiveEndpoint('/users-get')}
                      className={`w-full flex items-center gap-3 p-2 rounded-md transition text-left ${activeEndpoint === '/users-get' ? 'bg-[#207373] text-white' : 'hover:bg-neutral-50 dark:hover:bg-gray-700 text-zinc-800 dark:text-gray-200'}`}
                    >
                      <span className="bg-green-600 text-white text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-sm tracking-tight shrink-0">
                        GET
                      </span>
                      <span className="text-xs font-mono">/v1/users</span>
                    </button>
                    <button 
                      onClick={() => setActiveEndpoint('/users-post')}
                      className={`w-full flex items-center gap-3 p-2 rounded-md transition text-left ${activeEndpoint === '/users-post' ? 'bg-[#207373] text-white' : 'hover:bg-neutral-50 dark:hover:bg-gray-700 text-zinc-800 dark:text-gray-200'}`}
                    >
                      <span className="bg-[#114769] text-white text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-sm tracking-tight shrink-0">
                        POST
                      </span>
                      <span className="text-xs font-mono">/v1/users</span>
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[#114769] dark:text-teal-400 text-xs font-semibold uppercase tracking-wide block mb-2.5">
                    Data
                  </span>
                  <button 
                    onClick={() => setActiveEndpoint('/data/push')}
                    className={`w-full flex items-center gap-3 p-2 rounded-md transition text-left ${activeEndpoint === '/data/push' ? 'bg-[#207373] text-white' : 'hover:bg-neutral-50 dark:hover:bg-gray-700 text-zinc-800 dark:text-gray-200'}`}
                  >
                    <span className="bg-[#114769] text-white text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-sm tracking-tight shrink-0">
                      POST
                    </span>
                    <span className="text-xs font-mono">/data/push</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Request & Response Live Workspace Panel */}
            <div className="lg:col-span-9 bg-white dark:bg-gray-800 border border-neutral-200 dark:border-gray-700 rounded-xl grid grid-cols-1 md:grid-cols-12 shadow-sm min-h-[500px] overflow-hidden">
              
              {/* Left Column: Request Builder & Live Code Snippets */}
              <div className="md:col-span-7 p-6 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-gray-700 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#114769] dark:text-teal-400 text-lg font-semibold">Request</h3>
                    <span className="bg-[#114769] text-white text-[11px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {activeEndpoint === '/users-get' ? 'GET' : 'POST'}
                    </span>
                  </div>

                  {/* Dynamic Base URL Endpoint display */}
                  <div className="bg-neutral-100 dark:bg-gray-900 border border-neutral-200 dark:border-gray-700 rounded-md p-2 px-3 text-black dark:text-gray-200 font-mono text-xs overflow-x-auto select-all whitespace-nowrap">
                    https://api.ZoikoDigital.com/v1{activeEndpoint.replace('-get','').replace('-post','')}
                  </div>

                  {activeEndpoint !== '/users-get' && (
                    <>
                      <h4 className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">Request Body</h4>
                      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 font-mono text-xs text-zinc-100 overflow-x-auto leading-relaxed">
                        {activeEndpoint === '/auth/token' && `{ \n  "username": "your-username",\n  "password": "your-password",\n  "client_id": "your-client-id"\n}`}
                        {activeEndpoint === '/users-post' && `{ \n  "email": "user@domain.com",\n  "role": "developer"\n}`}
                        {activeEndpoint === '/data/push' && `{ \n  "metric": "sales_target",\n  "value": 42000\n}`}
                      </div>
                    </>
                  )}
                </div>

                {/* Framework Code Language Hub */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">Code Snippets</h4>
                  
                  {/* Selectable tab headers */}
                  <div className="flex flex-wrap gap-1 bg-neutral-100 dark:bg-gray-900 p-1 rounded-md border border-neutral-200 dark:border-gray-700 text-xs">
                    {(['Python', 'Node.js', 'Java', 'Go', '.NET', 'PHP', 'Ruby'] as const).map((lang) => (
                      <button 
                        key={lang}
                        onClick={() => setSelectedSnippet(lang.startsWith('Node') ? 'Node' : lang === 'Go' ? 'Go' : 'Python')} 
                        className={`px-3 py-1.5 font-sans font-normal rounded-sm transition flex-1 text-center whitespace-nowrap ${
                          (lang === 'Python' && selectedSnippet === 'Python') || 
                          (lang === 'Node.js' && selectedSnippet === 'Node') || 
                          (lang === 'Go' && selectedSnippet === 'Go') 
                            ? 'bg-[#207373] text-white' : 'bg-neutral-100 dark:bg-gray-900 text-black dark:text-gray-300 hover:bg-neutral-200 dark:hover:bg-gray-800'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  {/* Output Terminal Console */}
                  <div className="relative group bg-neutral-50 dark:bg-gray-900 border border-neutral-200 dark:border-gray-700 rounded-lg p-4 font-mono text-xs text-zinc-800 dark:text-gray-300 max-h-52 overflow-y-auto">
                    <button 
                      onClick={() => handleCopy('import requests...', 'snippet')}
                      className="absolute right-3 top-3 border-2 border-black dark:border-gray-600 bg-zinc-100 dark:bg-gray-800 text-black dark:text-white px-2 py-0.5 rounded text-[11px] font-sans font-medium flex items-center gap-1 hover:bg-zinc-200 dark:hover:bg-gray-700 transition"
                    >
                      {copiedId === 'snippet' ? <Check className="w-3 h-3 text-green-600" /> : '📋'} Copy
                    </button>
                    
                    <pre className="whitespace-pre-wrap leading-relaxed pr-12 text-zinc-700 dark:text-gray-300">
                      {selectedSnippet === 'Python' && `import requests\nurl = "https://api.ZoikoDigital.com/v1/auth/token"\npayload = {\n    "username": "your-username",\n    "password": "your-password",\n    "client_id": "your-client-id"\n}\n\nresponse = requests.post(url, json=payload)\ntoken = response.json()["access_token"]`}
                      {selectedSnippet === 'Node' && `const axios = require('axios');\nconst res = await axios.post(\n  'https://api.ZoikoDigital.com/v1/auth/token',\n  { username: 'your-username', password: 'your-password' }\n);`}
                      {selectedSnippet === 'Go' && `package main\nimport "net/http"\nfunc main() {\n    resp, _ := http.Post("https://api.ZoikoDigital.com/v1/auth/token", "application/json", nil)\n}`}
                    </pre>
                  </div>
                </div>

                <button className="w-full bg-[#207373] hover:bg-[#195a5a] text-white py-2.5 rounded-lg font-semibold transition flex items-center justify-center gap-2 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.1)]">
                  <Play className="w-3.5 h-3.5 fill-current" /> Try it out
                </button>
              </div>

              {/* Right Column: Execution Response Terminal */}
              <div className="md:col-span-5 p-6 bg-neutral-900 font-mono text-xs text-zinc-300 flex flex-col space-y-4">
                <div className="flex flex-wrap items-center justify-between border-b border-neutral-800 pb-3 gap-2">
                  <h3 className="text-[#114769] dark:text-teal-400 font-semibold text-base font-sans">Response</h3>
                  <div className="flex gap-4 text-xs font-sans">
                    <span>Status: <span className="text-green-600 font-semibold">200 OK</span></span>
                    <span>Time: <span className="text-[#114769] dark:text-teal-400 font-semibold">142ms</span></span>
                  </div>
                </div>
                
                <div className="bg-neutral-900 rounded-lg overflow-x-auto leading-relaxed flex-1 pt-1">
                  <pre className="text-zinc-100">
{`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "def502004b8c..."
}`}
                  </pre>
                </div>
              </div>

            </div>
          </div>

          {/* AI Companion Engine Block Context */}
          <div className="mt-8 border-2 border-[#207373] rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-[#207373] dark:text-teal-400 font-semibold text-base mb-3 font-sans">
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>AI Assistant</span>
            </div>
            
            <div className="bg-neutral-100 dark:bg-gray-900 rounded-lg p-4 text-zinc-800 dark:text-gray-200 text-sm mb-4 leading-relaxed font-sans">
              Hi! I can help you write code snippets, explain API responses, or assist with integration. Try asking: <span className="italic font-medium text-[#207373]">"Write me a Python snippet for authentication"</span>
            </div>
            
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Ask me anything about the APIs..." 
                className="w-full pl-4 pr-14 py-2.5 border border-neutral-200 dark:border-gray-700 rounded-md text-sm outline-none bg-transparent focus:border-neutral-300 dark:focus:border-gray-500 text-zinc-900 dark:text-white placeholder-neutral-500 font-sans"
              />
              <button className="absolute right-2 bg-[#207373] hover:bg-[#195a5a] text-white p-2 rounded-md transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SDK DOWNLOADS SECTION */}
      <section className="py-16 md:py-24 bg-sky-50 dark:bg-gray-900 border-b border-neutral-200 dark:border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          {/* Section Headers */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[#114769] dark:text-teal-400 text-2xl md:text-3xl font-semibold tracking-normal mb-2 font-sans">
              SDK Downloads
            </h2>
            <p className="text-stone-500 dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed">
              Official SDKs and infrastructure tools for seamless integration
            </p>
          </div>

          <h3 className="text-[#114769] dark:text-teal-400 text-center text-xl font-semibold tracking-wide mb-8">
            Language SDKs
          </h3>

          {/* Grid Container for Language Packs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { 
                lang: "Python SDK", 
                version: "v2.1.4", 
                bgGradient: "from-cyan-700 to-yellow-300", 
                tags: ["Cloud", "On-prem", "Hybrid"] ,
                icon:"/images/technical-docs/Symbol (9).png"
              },
              { 
                lang: "Node.js SDK", 
                version: "v3.0.2", 
                bgGradient: "from-yellow-400 to-zinc-800", 
                tags: ["Cloud", "On-prem", "Hybrid"] ,
                icon:"/images/technical-docs/Symbol (10).png"
              },
              { 
                lang: "Java SDK", 
                version: "v1.8.9", 
                bgGradient: "from-amber-500 to-slate-500", 
                tags: ["Cloud", "On-prem"] ,
                icon:"/images/technical-docs/Symbol (11).png"
              },
              { 
                lang: "Go SDK", 
                version: "v1.2.3", 
                bgGradient: "from-cyan-500 to-white", 
                tags: ["Cloud", "Hybrid"],
                icon:"/images/technical-docs/Symbol (12).png",
                darkIcon: true 
              },
              { 
                lang: ".NET SDK", 
                version: "v2.0.1", 
                bgGradient: "from-indigo-700 to-green-700", 
                icon:"/images/technical-docs/Symbol (13).png",
                tags: ["Cloud", "Hybrid"] 
              },
              { 
                lang: "PHP SDK", 
                version: "v1.5.8", 
                bgGradient: "from-slate-500 to-slate-400", 
                icon:"/images/technical-docs/Symbol (14).png",
                tags: ["Cloud", "Hybrid"] 
              },
              { 
                lang: "Ruby SDK", 
                version: "v1.3.2", 
                bgGradient: "from-red-600 to-red-900", 
                tags: ["Cloud", "On-prem"] ,
                icon:"/images/technical-docs/Symbol (15).png"
              }
            ].map((sdk, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-gray-800 rounded-xl border border-neutral-200 dark:border-gray-700 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative min-h-[224px]"
              >
                {/* Header Info Block */}
                <div className="flex items-start justify-between">
                  <div className={`size-14 rounded-xl bg-gradient-to-br ${sdk.bgGradient} flex items-center justify-center shadow-inner shrink-0`}>
                    <img className={`w-7 h-7 ${sdk.darkIcon ? 'text-zinc-800' : 'text-white'}`}  src={sdk.icon} alt=""/>
                  </div>

                  {/* Deployment Platform Badges */}
                  <div className="flex flex-wrap gap-1.5 justify-end max-w-[200px]">
                    {sdk.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[#114769] dark:text-teal-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-white dark:bg-gray-900 border border-[#114769] dark:border-teal-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Core Metadata */}
                <div className="flex items-end justify-between mt-6">
                  <div className="space-y-1">
                    <h4 className="text-[#114769] dark:text-teal-400 text-lg font-semibold tracking-tight">{sdk.lang}</h4>
                    <span className="text-[#114769] dark:text-teal-300 text-sm font-semibold opacity-80 block font-mono">{sdk.version}</span>
                  </div>

                  <button className="bg-[#114769] hover:bg-[#0d3650] text-white px-4 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2 transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="text-left leading-none text-xs">Download<br/>SDK</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Framework Tools Grid Section */}
          <div className="space-y-6">
            <h3 className="text-[#114769] dark:text-teal-400 text-center text-xl font-semibold tracking-wide">
              Infrastructure Tools
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Docker Hub Artifact Container */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-neutral-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm min-h-[160px]">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-xl bg-gradient-to-br from-sky-500 to-sky-400 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Layers className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[#114769] dark:text-teal-400 text-lg font-semibold">Docker Images</h4>
                    <span className="text-[#114769] dark:text-teal-300 text-sm font-semibold opacity-80 font-mono">v2024.12</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[#114769] dark:text-teal-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-white dark:bg-gray-900 border border-[#114769] dark:border-teal-400">Cloud</span>
                  <span className="text-[#114769] dark:text-teal-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-white dark:bg-gray-900 border border-[#114769] dark:border-teal-400">On-prem</span>
                </div>
              </div>

              {/* Kubernetes Helm Cluster Chart Container */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-neutral-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm min-h-[160px]">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-xl bg-gradient-to-br from-blue-600 to-slate-100 flex items-center justify-center text-zinc-800 shrink-0 shadow-sm">
                    <Server className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[#114769] dark:text-teal-400 text-lg font-semibold">Kubernetes Helm Charts</h4>
                    <span className="text-[#114769] dark:text-teal-300 text-sm font-semibold opacity-80 font-mono">v1.5.2</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[#114769] dark:text-teal-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-white dark:bg-gray-900 border border-[#114769] dark:border-teal-400">Cloud</span>
                  <span className="text-[#114769] dark:text-teal-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-white dark:bg-gray-900 border border-[#114769] dark:border-teal-400">Hybrid</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CODE SAMPLES & TEMPLATES SECTION */}
      <section className="bg-fuchsia-50 dark:bg-gray-900 py-16 md:py-24 border-b border-neutral-200 dark:border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sky-900 dark:text-teal-400 text-2xl md:text-3xl font-semibold tracking-tight font-sans mb-3">
              Code Samples & Templates
            </h2>
            <p className="text-stone-500 dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed">
              Ready-to-use code examples and deployable templates
            </p>
          </div>

          {/* Content Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            
            {/* Code Block Snippet Cards */}
            {codeCards.map((card) => (
              <div 
                key={card.id} 
                className="bg-white dark:bg-gray-800 rounded-xl border border-neutral-200 dark:border-gray-700 p-6 flex flex-col shadow-sm hover:shadow-md transition-all duration-200 min-h-[580px]"
              >
                <span className="text-sky-900/60 dark:text-teal-400/70 font-mono text-xs uppercase tracking-wider mb-1 block">
                  {card.category}
                </span>
                <h3 className="text-sky-900 dark:text-white text-xl font-semibold mb-4">
                  {card.title}
                </h3>
                
                {/* Actions Bar */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <button 
                    onClick={() => handleCopy(card.code, card.id)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedId === card.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === card.id ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button className="bg-sky-900 hover:bg-sky-950 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer">
                    <span>Run in Sandbox</span>
                  </button>

                  <button className="bg-zinc-900 hover:bg-black text-white px-3 py-1.5 rounded-md text-xs font-normal flex items-center gap-1.5 transition-colors cursor-pointer ml-auto sm:ml-0">
                    <span>GitHub</span>
                  </button>
                </div>

                {/* Syntax Code Editor Container */}
                <div className="bg-neutral-900 rounded-lg p-4 flex-1 font-mono text-xs leading-relaxed overflow-x-auto text-zinc-100 border border-neutral-800 shadow-inner">
                  <div className="flex items-center gap-1.5 mb-3 opacity-40 border-b border-neutral-800 pb-2 select-none">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>main.py</span>
                  </div>
                  <pre className="whitespace-pre">{card.code}</pre>
                </div>
              </div>
            ))}

            {/* Architectural Deployable Templates Pack Container */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-neutral-200 dark:border-gray-700 p-6 flex flex-col shadow-sm min-h-[580px] lg:h-full justify-between">
              <div>
                <span className="text-teal-700/60 dark:text-teal-400/70 font-mono text-xs uppercase tracking-wider mb-1 block">
                  Architecture Packs
                </span>
                <h3 className="text-sky-900 dark:text-white text-xl font-semibold mb-6">
                  Deployable Templates
                </h3>
                
                <div className="space-y-6">
                  {templates.map((template, tIdx) => (
                    <div 
                      key={tIdx} 
                      className="border border-neutral-200 dark:border-gray-700 rounded-xl p-5 hover:border-neutral-300 dark:hover:border-gray-600 bg-neutral-50/50 dark:bg-gray-900/50 transition-colors"
                    >
                      <h4 className="text-sky-900 dark:text-teal-400 text-base font-semibold mb-2">
                        {template.title}
                      </h4>
                      <p className="text-stone-500 dark:text-gray-300 text-sm font-normal leading-relaxed mb-4">
                        {template.description}
                      </p>
                      <button className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer">
                        <span>Deploy to Sandbox</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* VERSION UPDATES & CHANGELOG SECTION */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="max-w-[860px] mx-auto px-4">
          
          {/* Section Heading Group */}
          <div className="text-center mb-12">
            <h2 className="text-sky-900 dark:text-teal-400 text-2xl md:text-3xl font-semibold font-sans mb-2">
              Version Updates & Changelog
            </h2>
            <p className="text-sky-900/80 dark:text-gray-300 text-base md:text-lg font-semibold font-sans mb-6">
              Stay Updated
            </p>
            
            {/* Feed Channels Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-gray-800 hover:bg-neutral-200 dark:hover:bg-gray-700 text-black dark:text-white text-sm font-normal px-4 py-2 rounded-md border border-neutral-200 dark:border-gray-700 transition cursor-pointer">
                <Rss className="w-4 h-4 text-black dark:text-white" />
                <span>RSS Feed</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-gray-800 hover:bg-neutral-200 dark:hover:bg-gray-700 text-black dark:text-white text-sm font-normal px-4 py-2 rounded-md border border-neutral-200 dark:border-gray-700 transition cursor-pointer">
                <Mail className="w-4 h-4 text-black dark:text-white" />
                <span>Email Updates</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-gray-800 hover:bg-neutral-200 dark:hover:bg-gray-700 text-black dark:text-white text-sm font-normal px-4 py-2 rounded-md border border-neutral-200 dark:border-gray-700 transition cursor-pointer">
                <MessageSquare className="w-4 h-4 text-black dark:text-white" />
                <span>Slack</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-gray-800 hover:bg-neutral-200 dark:hover:bg-gray-700 text-black dark:text-white text-sm font-normal px-4 py-2 rounded-md border border-neutral-200 dark:border-gray-700 transition cursor-pointer">
                <Webhook className="w-4 h-4 text-black dark:text-white" />
                <span>Webhooks</span>
              </button>
            </div>
          </div>

          {/* Timeline Stream Base */}
          <div className="relative pl-8 border-l-2 border-neutral-200 dark:border-gray-700 ml-4 space-y-12">
            {changelogData.map((release, index) => (
              <div key={index} className="relative group">
                
                {/* Milestone Node Target Ring */}
                <span className={`absolute -left-[41px] top-1.5 flex h-4 w-4 rounded-full border-4 border-white dark:border-gray-900 shadow-[0_0_0_3px_#e5e5e5] dark:shadow-[0_0_0_3px_#374151] ${
                  release.isLatest ? 'bg-green-600' : 'bg-sky-900 dark:bg-teal-500'
                }`} />

                {/* Changelog Entry Dashboard Panel Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-neutral-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* Card Title & Meta Info Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 dark:border-gray-700 pb-4 mb-4">
                    <h3 className="text-sky-900 dark:text-white text-lg font-semibold font-sans">
                      {release.version} — {release.date}
                    </h3>
                    
                    {/* Badge Attribute Group */}
                    <div className="flex flex-wrap gap-2">
                      {release.badges.map((badge, bIdx) => (
                        <span 
                          key={bIdx} 
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm font-sans ${badge.color}`}
                        >
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Operational Summary Description */}
                  <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-relaxed font-sans mb-4">
                    {release.description}
                  </p>

                  {/* Bullet Points Matrix */}
                  <ul className="space-y-2.5">
                    {release.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-stone-500 dark:text-gray-300 text-base font-normal leading-relaxed font-sans">
                        <span className="text-teal-700 dark:text-teal-400 text-lg font-semibold leading-none select-none">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      {/* TRANSFORMATION INTAKE FORM SECTION */}
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