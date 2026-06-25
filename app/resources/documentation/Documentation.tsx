import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Documentation() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Inter']">
      
      {/* Top Navbar (Docs specific) */}
      <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">Z</div>
            <span className="text-zinc-900 font-semibold text-[15px]">Zoiko Docs</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/resources/documentation" className="text-zinc-900 text-[14px] font-semibold">Docs</Link>
            <Link href="/resources/apis" className="text-gray-500 hover:text-zinc-900 text-[14px] font-medium transition-colors">API</Link>
            <Link href="/resources/help-center" className="text-gray-500 hover:text-zinc-900 text-[14px] font-medium transition-colors">Help Center</Link>
            <Link href="/contact" className="text-gray-500 hover:text-zinc-900 text-[14px] font-medium transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-[1400px] w-full mx-auto flex flex-1">
        
        {/* Left Sidebar */}
        <aside className="hidden md:block w-[260px] shrink-0 py-10 pr-6 border-r border-gray-200">
          <div className="sticky top-24">
            
            <div className="mb-2 w-full">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Filter docs..." 
                  className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-3 text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-[13px]"
                />
              </div>
            </div>

            <div className="mt-8 mb-6">
              <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2 px-3">Get Started</h4>
              <ul className="space-y-0.5">
                <li><a href="#introduction" className="block px-3 py-1.5 text-[13px] text-zinc-900 bg-gray-50 rounded-md font-medium">Introduction</a></li>
                <li><a href="#quickstart" className="block px-3 py-1.5 text-[13px] text-gray-500 hover:text-zinc-900 hover:bg-gray-50 rounded-md transition-colors">Quickstart</a></li>
                <li><a href="#core-concepts" className="block px-3 py-1.5 text-[13px] text-gray-500 hover:text-zinc-900 hover:bg-gray-50 rounded-md transition-colors">Core concepts</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2 px-3">Guides</h4>
              <ul className="space-y-0.5">
                <li><a href="#deploying" className="block px-3 py-1.5 text-[13px] text-gray-500 hover:text-zinc-900 hover:bg-gray-50 rounded-md transition-colors">Deploying an app</a></li>
                <li><a href="#env-vars" className="block px-3 py-1.5 text-[13px] text-gray-500 hover:text-zinc-900 hover:bg-gray-50 rounded-md transition-colors">Environment variables</a></li>
                <li><a href="#scaling" className="block px-3 py-1.5 text-[13px] text-gray-500 hover:text-zinc-900 hover:bg-gray-50 rounded-md transition-colors">Scaling</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2 px-3">Platform</h4>
              <ul className="space-y-0.5">
                <li><a href="#cli" className="block px-3 py-1.5 text-[13px] text-indigo-600 bg-indigo-50 font-medium rounded-md">CLI</a></li>
                <li><a href="#authentication" className="block px-3 py-1.5 text-[13px] text-gray-500 hover:text-zinc-900 hover:bg-gray-50 rounded-md transition-colors">Authentication</a></li>
                <li><a href="#limits" className="block px-3 py-1.5 text-[13px] text-gray-500 hover:text-zinc-900 hover:bg-gray-50 rounded-md transition-colors">Limits & quotas</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2 px-3">Reference</h4>
              <ul className="space-y-0.5">
                <li><Link href="/resources/apis" className="block px-3 py-1.5 text-[13px] text-gray-500 hover:text-zinc-900 hover:bg-gray-50 rounded-md transition-colors flex justify-between items-center">API reference <ChevronRight className="w-3 h-3"/></Link></li>
                <li><Link href="/resources/help-center" className="block px-3 py-1.5 text-[13px] text-gray-500 hover:text-zinc-900 hover:bg-gray-50 rounded-md transition-colors flex justify-between items-center">Help Center <ChevronRight className="w-3 h-3"/></Link></li>
              </ul>
            </div>

          </div>
        </aside>

        {/* Main Documentation Area */}
        <main className="flex-1 py-10 px-4 md:px-12 pb-32 max-w-[800px]">
          
          <div className="flex items-center gap-2 text-[12px] text-gray-500 font-medium mb-6">
            <span>Docs</span> <ChevronRight className="w-3 h-3 text-gray-300" />
            <span>Get started</span> <ChevronRight className="w-3 h-3 text-gray-300" />
            <span className="text-zinc-900">Introduction</span>
          </div>

          <h1 className="text-zinc-900 text-3xl md:text-4xl font-bold tracking-tight mb-4">Documentation</h1>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
            Everything you need to build, deploy, and operate on Zoiko Web Services. Replace this placeholder content with your real docs.
          </p>

          {/* Introduction */}
          <section id="introduction" className="mb-12">
            <h2 className="text-zinc-900 text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Zoiko Web Services (ZWS) is a cloud platform for building and running modern applications. These docs walk you through your first deploy to operating at scale.
            </p>
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-6 text-[14px] text-indigo-900 flex">
              <div className="w-1 bg-indigo-500 absolute left-0 top-0 bottom-0 rounded-l-xl"></div>
              <p>New here? Jump to the <a href="#quickstart" className="text-indigo-600 font-bold hover:underline">Quickstart</a> to deploy your first app in under five minutes.</p>
            </div>
          </section>

          {/* Quickstart */}
          <section id="quickstart" className="mb-12">
            <h2 className="text-zinc-900 text-2xl font-bold mb-4">Quickstart</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Install the CLI and deploy a sample application.
            </p>
            <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-lg border border-gray-800 mb-6">
              <div className="flex justify-between items-center bg-[#161B22] px-4 py-2 border-b border-gray-800">
                <span className="text-gray-400 text-[12px] font-mono">bash</span>
                <button className="text-gray-400 hover:text-white text-[12px] transition-colors">Copy</button>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-[13px] font-mono leading-relaxed"><code className="text-gray-300"><span className="text-gray-500"># Install and deploy</span>{"\n"}
<span className="text-blue-400">npm</span> install -g @zoiko/cli{"\n"}
zoiko login{"\n"}
zoiko init my-app{"\n"}
<span className="text-blue-400">cd</span> my-app{"\n"}
zoiko deploy</code></pre>
              </div>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Your app is now live at a generated URL. Configure a custom domain in the dashboard.
            </p>
          </section>

          {/* Core concepts */}
          <section id="core-concepts" className="mb-12">
            <h2 className="text-zinc-900 text-2xl font-bold mb-4">Core concepts</h2>
            <ul className="list-disc pl-5 space-y-3 text-[15px] text-gray-600">
              <li><strong className="text-zinc-900">Projects</strong> group related services and environments.</li>
              <li><strong className="text-zinc-900">Services</strong> are independently deployable units.</li>
              <li><strong className="text-zinc-900">Environments</strong> isolate development, staging, and production.</li>
            </ul>
          </section>

          {/* Deploying an app */}
          <section id="deploying" className="mb-12">
            <h2 className="text-zinc-900 text-2xl font-bold mb-4">Deploying an app</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              Deploy from the CLI or connect a Git repository for automatic deploys on push.
            </p>
            <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-lg border border-gray-800 mb-6">
              <div className="flex justify-between items-center bg-[#161B22] px-4 py-2 border-b border-gray-800">
                <span className="text-gray-400 text-[12px] font-mono">bash</span>
                <button className="text-gray-400 hover:text-white text-[12px] transition-colors">Copy</button>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-[13px] font-mono leading-relaxed"><code className="text-gray-300">zoiko deploy --env production</code></pre>
              </div>
            </div>
          </section>

          {/* Environment variables */}
          <section id="env-vars" className="mb-12">
            <h2 className="text-zinc-900 text-2xl font-bold mb-4">Environment variables</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              Store configuration and secrets per environment.
            </p>
            <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-lg border border-gray-800 mb-6">
              <div className="flex justify-between items-center bg-[#161B22] px-4 py-2 border-b border-gray-800">
                <span className="text-gray-400 text-[12px] font-mono">bash</span>
                <button className="text-gray-400 hover:text-white text-[12px] transition-colors">Copy</button>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-[13px] font-mono leading-relaxed"><code className="text-gray-300">zoiko env set <span className="text-emerald-400">DATABASE_URL=postgres://...</span>{"\n"}
zoiko env ls</code></pre>
              </div>
            </div>
          </section>

          {/* Scaling */}
          <section id="scaling" className="mb-12">
            <h2 className="text-zinc-900 text-2xl font-bold mb-4">Scaling</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              Scale horizontally with autoscaling or set fixed instance counts per service.
            </p>
            <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-lg border border-gray-800 mb-6">
              <div className="flex justify-between items-center bg-[#161B22] px-4 py-2 border-b border-gray-800">
                <span className="text-gray-400 text-[12px] font-mono">bash</span>
                <button className="text-gray-400 hover:text-white text-[12px] transition-colors">Copy</button>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-[13px] font-mono leading-relaxed"><code className="text-gray-300">zoiko scale web --min 3 --max 10</code></pre>
              </div>
            </div>
          </section>

          {/* CLI */}
          <section id="cli" className="mb-12">
            <h2 className="text-zinc-900 text-2xl font-bold mb-4">CLI</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              The Zoiko CLI manages projects, deploys, logs, and configuration. Run <code>zoiko help</code> for all commands.
            </p>
          </section>

          {/* Authentication */}
          <section id="authentication" className="mb-12">
            <h2 className="text-zinc-900 text-2xl font-bold mb-4">Authentication</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              Authenticate API requests with a bearer token. See the <Link href="/resources/apis" className="text-indigo-600 hover:underline">API reference</Link> for details.
            </p>
            <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-lg border border-gray-800 mb-6">
              <div className="flex justify-between items-center bg-[#161B22] px-4 py-2 border-b border-gray-800">
                <span className="text-gray-400 text-[12px] font-mono">bash</span>
                <button className="text-gray-400 hover:text-white text-[12px] transition-colors">Copy</button>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-[13px] font-mono leading-relaxed"><code className="text-gray-300">curl https://api.zoikoweb.com/v1/projects \{"\n"}
  -H <span className="text-emerald-400">"Authorization: Bearer $TOKEN"</span></code></pre>
              </div>
            </div>
          </section>

          {/* Limits & quotas */}
          <section id="limits" className="mb-16">
            <h2 className="text-zinc-900 text-2xl font-bold mb-4">Limits & quotas</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              Default rate limits and quotas apply per plan. See <Link href="/pricing-packages" className="text-indigo-600 hover:underline">Pricing</Link> for plan details and the <Link href="/resources/service-levels" className="text-indigo-600 hover:underline">Service Levels</Link> page for availability commitments.
            </p>
          </section>

          <hr className="border-gray-200 mb-8" />

          {/* Next/Prev Navigation */}
          <div className="flex justify-between items-center mb-8">
            <a href="#introduction" className="flex flex-col group">
              <span className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">Previous</span>
              <span className="text-zinc-900 font-semibold group-hover:text-indigo-600 transition-colors flex items-center"><ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Introduction</span>
            </a>
            <Link href="/resources/apis" className="flex flex-col text-right group">
              <span className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">Next</span>
              <span className="text-zinc-900 font-semibold group-hover:text-indigo-600 transition-colors flex items-center">API reference <ChevronRight className="w-4 h-4 ml-1" /></span>
            </Link>
          </div>

        </main>

        {/* Right Sidebar (On this page) */}
        <aside className="hidden lg:block w-[240px] shrink-0 py-10 pl-8 border-l border-gray-200">
          <div className="sticky top-24">
            <h4 className="text-zinc-900 text-[12px] font-bold uppercase tracking-wider mb-4">On this page</h4>
            <ul className="space-y-3">
              <li><a href="#introduction" className="block text-[13px] text-gray-500 hover:text-zinc-900 transition-colors">Introduction</a></li>
              <li><a href="#quickstart" className="block text-[13px] text-gray-500 hover:text-zinc-900 transition-colors">Quickstart</a></li>
              <li><a href="#core-concepts" className="block text-[13px] text-gray-500 hover:text-zinc-900 transition-colors">Core concepts</a></li>
              <li><a href="#deploying" className="block text-[13px] text-gray-500 hover:text-zinc-900 transition-colors">Deploying</a></li>
              <li><a href="#env-vars" className="block text-[13px] text-gray-500 hover:text-zinc-900 transition-colors">Env variables</a></li>
              <li><a href="#scaling" className="block text-[13px] text-gray-500 hover:text-zinc-900 transition-colors">Scaling</a></li>
              <li><a href="#cli" className="block text-[13px] text-indigo-600 font-semibold transition-colors">CLI</a></li>
              <li><a href="#authentication" className="block text-[13px] text-gray-500 hover:text-zinc-900 transition-colors">Authentication</a></li>
              <li><a href="#limits" className="block text-[13px] text-gray-500 hover:text-zinc-900 transition-colors">Limits</a></li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}
