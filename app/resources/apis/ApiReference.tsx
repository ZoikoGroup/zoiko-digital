import React from 'react';
import Link from 'next/link';

export default function ApiReference() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-['Inter']">

      {/* Main Content Area */}
      <div className="max-w-[1440px] w-full mx-auto flex flex-1 relative">
        
        {/* Left Sidebar */}
        <aside className="hidden md:block w-[280px] shrink-0 py-12 pl-12 pr-6">
          <div className="sticky top-32">
            
            <div className="mb-10">
              <h4 className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-4 px-2">Overview</h4>
              <ul className="space-y-1">
                <li><a href="#introduction" className="block px-2 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 rounded-md transition-colors">Introduction</a></li>
                <li><a href="#authentication" className="block px-2 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 rounded-md transition-colors">Authentication</a></li>
                <li><a href="#errors" className="block px-2 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 rounded-md transition-colors">Errors</a></li>
              </ul>
            </div>

            <div className="mb-10">
              <h4 className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-4 px-2">Projects</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#list-projects" className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 rounded-md transition-colors">
                    <span className="bg-emerald-500 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">GET</span> 
                    List projects
                  </a>
                </li>
                <li>
                  <a href="#create-project" className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 rounded-md transition-colors">
                    <span className="bg-indigo-600 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">POST</span> 
                    Create project
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h4 className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-4 px-2">Deployments</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#get-deployment" className="flex items-center gap-3 px-2 py-2 text-sm text-indigo-600 bg-violet-100 rounded-lg font-semibold transition-colors">
                    <span className="bg-emerald-500 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">GET</span> 
                    Get deployment
                  </a>
                </li>
                <li>
                  <a href="#create-deployment" className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 rounded-md transition-colors">
                    <span className="bg-indigo-600 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">POST</span> 
                    Create deploy
                  </a>
                </li>
                <li>
                  <a href="#delete-deployment" className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 rounded-md transition-colors">
                    <span className="bg-rose-500 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">DEL</span> 
                    Delete deploy
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </aside>

        {/* Main Documentation Area */}
        <main className="flex-1 py-12 px-6 lg:pl-16 lg:pr-32 max-w-[1020px]">
          
          <h1 className="text-zinc-900 text-4xl font-extrabold mb-6">API reference</h1>
          <p className="text-zinc-700 text-lg leading-7 mb-10 max-w-[700px]">
            The Zoiko REST API lets you manage projects, deployments, and configuration programmatically. Placeholder spec — replace endpoints and fields with your real API.
          </p>

          <div className="inline-flex items-center bg-white rounded-lg outline outline-1 outline-gray-200 px-4 py-2.5 mb-14">
            <span className="text-zinc-900 text-xs font-bold font-['JetBrains_Mono'] mr-3">Base URL</span>
            <span className="text-zinc-900 text-xs font-extrabold font-['JetBrains_Mono']">https://api.zoikoweb.com/v1</span>
          </div>

          {/* Introduction */}
          <section id="introduction" className="py-10 border-t border-gray-200">
            <h2 className="text-zinc-900 text-xl font-bold mb-6">Introduction</h2>
            <p className="text-zinc-700 text-base leading-7">
              All requests use HTTPS and return JSON. Timestamps are ISO 8601. The API is versioned in the path (<code className="text-slate-800 text-xs font-bold font-['JetBrains_Mono'] bg-gray-100 px-1.5 py-0.5 rounded mx-1">/v1</code>).
            </p>
          </section>

          {/* Authentication */}
          <section id="authentication" className="py-10 border-t border-gray-200">
            <h2 className="text-zinc-900 text-xl font-bold mb-6">Authentication</h2>
            <p className="text-zinc-700 text-base leading-7 mb-8 max-w-[700px]">
              Authenticate with a bearer token from your dashboard. Include it in the <code className="text-slate-800 text-xs font-bold font-['JetBrains_Mono'] bg-gray-100 px-1.5 py-0.5 rounded mx-1">Authorization</code> header on every request.
            </p>
            
            <div className="bg-sky-900 rounded-xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] overflow-hidden max-w-full">
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                <span className="text-gray-400 text-xs font-bold font-['JetBrains_Mono']">Authorization header</span>
                <button className="bg-white/5 rounded-md outline outline-1 outline-white/20 px-3 py-1.5 text-slate-300 text-xs font-semibold hover:bg-white/10 transition-colors">Copy</button>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-xs font-medium font-['JetBrains_Mono'] leading-5"><code className="text-slate-200"><span className="text-cyan-300">Authorization</span>: Bearer <span className="text-emerald-300">YOUR_API_TOKEN</span></code></pre>
              </div>
            </div>
          </section>

          {/* Errors */}
          <section id="errors" className="py-10 border-t border-gray-200">
            <h2 className="text-zinc-900 text-xl font-bold mb-6">Errors</h2>
            <p className="text-zinc-700 text-base leading-7 mb-8 max-w-[700px]">
              The API uses standard HTTP status codes. Errors return a JSON body with a <code className="text-slate-800 text-xs font-bold font-['JetBrains_Mono'] bg-gray-100 px-1.5 py-0.5 rounded mx-1">code</code> and <code className="text-slate-800 text-xs font-bold font-['JetBrains_Mono'] bg-gray-100 px-1.5 py-0.5 rounded mx-1">message</code>.
            </p>
            
            <div className="bg-white rounded-[10px] outline outline-1 outline-gray-200 overflow-hidden max-w-[800px]">
              <div className="flex bg-neutral-100 border-b border-gray-100 px-4 py-3">
                <div className="w-1/4 text-zinc-900 text-xs font-bold uppercase tracking-wide">Status</div>
                <div className="w-3/4 text-zinc-900 text-xs font-bold uppercase tracking-wide">Meaning</div>
              </div>
              <div className="flex border-b border-gray-100 px-4 py-3 items-center">
                <div className="w-1/4 text-zinc-900 text-xs font-bold font-['JetBrains_Mono']">400</div>
                <div className="w-3/4 text-zinc-700 text-sm">Bad request — invalid parameters</div>
              </div>
              <div className="flex border-b border-gray-100 px-4 py-3 items-center">
                <div className="w-1/4 text-zinc-900 text-xs font-bold font-['JetBrains_Mono']">401</div>
                <div className="w-3/4 text-zinc-700 text-sm">Unauthorized — missing or invalid token</div>
              </div>
              <div className="flex border-b border-gray-100 px-4 py-3 items-center">
                <div className="w-1/4 text-zinc-900 text-xs font-bold font-['JetBrains_Mono']">404</div>
                <div className="w-3/4 text-zinc-700 text-sm">Not found</div>
              </div>
              <div className="flex border-b border-gray-100 px-4 py-3 items-center">
                <div className="w-1/4 text-zinc-900 text-xs font-bold font-['JetBrains_Mono']">429</div>
                <div className="w-3/4 text-zinc-700 text-sm">Rate limited</div>
              </div>
              <div className="flex px-4 py-3 items-center">
                <div className="w-1/4 text-zinc-900 text-xs font-bold font-['JetBrains_Mono']">500</div>
                <div className="w-3/4 text-zinc-700 text-sm">Server error</div>
              </div>
            </div>
          </section>

          {/* List Projects */}
          <section id="list-projects" className="py-12 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-emerald-500 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">GET</span>
              <h2 className="text-zinc-900 text-xl font-bold">List projects</h2>
            </div>
            
            <div className="inline-flex items-center bg-white rounded-[10px] outline outline-1 outline-gray-200 px-4 py-2.5 mb-8">
              <span className="bg-emerald-500 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px] mr-3">GET</span>
              <span className="text-zinc-900 text-sm font-bold font-['JetBrains_Mono']">/v1/projects</span>
            </div>
            
            <p className="text-zinc-700 text-base leading-7 mb-8 max-w-[700px]">
              Returns a paginated list of projects for the authenticated account.
            </p>
            
            <div className="bg-white rounded-[10px] outline outline-1 outline-gray-200 overflow-hidden mb-10 max-w-[800px]">
              <div className="flex bg-neutral-100 border-b border-gray-100 px-4 py-3">
                <div className="w-1/3 text-zinc-900 text-xs font-bold uppercase tracking-wide">Query param</div>
                <div className="w-1/4 text-zinc-900 text-xs font-bold uppercase tracking-wide">Type</div>
                <div className="w-5/12 text-zinc-900 text-xs font-bold uppercase tracking-wide">Description</div>
              </div>
              <div className="flex border-b border-gray-100 px-4 py-3 items-center">
                <div className="w-1/3 text-zinc-900 text-xs font-bold font-['JetBrains_Mono']">limit</div>
                <div className="w-1/4 text-zinc-700 text-sm">integer</div>
                <div className="w-5/12 text-zinc-700 text-sm">Max items (default 20, max 100)</div>
              </div>
              <div className="flex px-4 py-3 items-center">
                <div className="w-1/3 text-zinc-900 text-xs font-bold font-['JetBrains_Mono']">cursor</div>
                <div className="w-1/4 text-zinc-700 text-sm">string</div>
                <div className="w-5/12 text-zinc-700 text-sm">Pagination cursor</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-sky-900 rounded-xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] overflow-hidden">
                <div className="flex items-center border-b border-white/10 px-4 pt-3">
                  <div className="bg-white/10 rounded-t-lg px-3 py-1.5 mr-2 text-white text-xs font-semibold">cURL</div>
                  <div className="text-gray-400 text-xs font-semibold px-3 py-1.5">JavaScript</div>
                </div>
                <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                  <span className="text-gray-400 text-xs font-bold font-['JetBrains_Mono']">Request</span>
                  <button className="bg-white/5 rounded-md outline outline-1 outline-white/20 px-3 py-1.5 text-slate-300 text-xs font-semibold hover:bg-white/10 transition-colors">Copy</button>
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="text-xs font-medium font-['JetBrains_Mono'] leading-5"><code className="text-slate-200">curl https://api.zoikoweb.com/v1/projects \{"\n"}  <span className="text-violet-300">-H</span> <span className="text-emerald-300">"Authorization: Bearer $TOKEN"</span></code></pre>
                </div>
              </div>
              
              <div className="bg-sky-900 rounded-xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs font-bold font-['JetBrains_Mono']">Response</span>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold font-['JetBrains_Mono'] px-2 py-0.5 rounded-md">200 OK</span>
                  </div>
                  <button className="bg-white/5 rounded-md outline outline-1 outline-white/20 px-3 py-1.5 text-slate-300 text-xs font-semibold hover:bg-white/10 transition-colors">Copy</button>
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="text-xs font-medium font-['JetBrains_Mono'] leading-5"><code className="text-slate-200">&#123;{"\n"}  <span className="text-cyan-300">"data"</span>: [{"\n"}    &#123; <span className="text-cyan-300">"id"</span>: <span className="text-emerald-300">"prj_123"</span>, <span className="text-cyan-300">"name"</span>: <span className="text-emerald-300">"my-app"</span> &#125;{"\n"}  ],{"\n"}  <span className="text-cyan-300">"next"</span>: <span className="text-orange-300">null</span>{"\n"}&#125;</code></pre>
                </div>
              </div>
            </div>
          </section>

          {/* Create Project */}
          <section id="create-project" className="py-12 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-indigo-600 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">POST</span>
              <h2 className="text-zinc-900 text-xl font-bold">Create project</h2>
            </div>
            
            <div className="inline-flex items-center bg-white rounded-[10px] outline outline-1 outline-gray-200 px-4 py-2.5 mb-8">
              <span className="bg-indigo-600 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px] mr-3">POST</span>
              <span className="text-zinc-900 text-sm font-bold font-['JetBrains_Mono']">/v1/projects</span>
            </div>
            
            <div className="bg-white rounded-[10px] outline outline-1 outline-gray-200 overflow-hidden mb-10 max-w-[800px]">
              <div className="flex bg-neutral-100 border-b border-gray-100 px-4 py-3">
                <div className="w-1/3 text-zinc-900 text-xs font-bold uppercase tracking-wide">Body field</div>
                <div className="w-1/4 text-zinc-900 text-xs font-bold uppercase tracking-wide">Type</div>
                <div className="w-5/12 text-zinc-900 text-xs font-bold uppercase tracking-wide">Description</div>
              </div>
              <div className="flex border-b border-gray-100 px-4 py-3 items-center">
                <div className="w-1/3 flex items-center gap-2">
                  <span className="text-zinc-900 text-xs font-bold font-['JetBrains_Mono']">name</span>
                  <span className="text-rose-500 text-[10px] font-bold font-['JetBrains_Mono']">required</span>
                </div>
                <div className="w-1/4 text-zinc-700 text-sm">string</div>
                <div className="w-5/12 text-zinc-700 text-sm">Project name</div>
              </div>
              <div className="flex px-4 py-3 items-center">
                <div className="w-1/3 text-zinc-900 text-xs font-bold font-['JetBrains_Mono']">region</div>
                <div className="w-1/4 text-zinc-700 text-sm">string</div>
                <div className="w-5/12 text-zinc-700 text-sm">Deployment region</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-sky-900 rounded-xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                  <span className="text-gray-400 text-xs font-bold font-['JetBrains_Mono']">Request</span>
                  <button className="bg-white/5 rounded-md outline outline-1 outline-white/20 px-3 py-1.5 text-slate-300 text-xs font-semibold hover:bg-white/10 transition-colors">Copy</button>
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="text-xs font-medium font-['JetBrains_Mono'] leading-5"><code className="text-slate-200">curl <span className="text-violet-300">-X</span> POST https://api.zoikoweb.com/v1/projects \{"\n"}  <span className="text-violet-300">-H</span> <span className="text-emerald-300">"Authorization: Bearer $TOKEN"</span> \{"\n"}  <span className="text-violet-300">-d</span> <span className="text-emerald-300">'&#123;"name":"my-app"&#125;'</span></code></pre>
                </div>
              </div>
              
              <div className="bg-sky-900 rounded-xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs font-bold font-['JetBrains_Mono']">Response</span>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold font-['JetBrains_Mono'] px-2 py-0.5 rounded-md">201 Created</span>
                  </div>
                  <button className="bg-white/5 rounded-md outline outline-1 outline-white/20 px-3 py-1.5 text-slate-300 text-xs font-semibold hover:bg-white/10 transition-colors">Copy</button>
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="text-xs font-medium font-['JetBrains_Mono'] leading-5"><code className="text-slate-200">&#123;{"\n"}  <span className="text-cyan-300">"id"</span>: <span className="text-emerald-300">"prj_456"</span>,{"\n"}  <span className="text-cyan-300">"name"</span>: <span className="text-emerald-300">"my-app"</span>,{"\n"}  <span className="text-cyan-300">"created"</span>: <span className="text-emerald-300">"2026-06-01T10:00:00Z"</span>{"\n"}&#125;</code></pre>
                </div>
              </div>
            </div>
          </section>

          {/* Get deployment */}
          <section id="get-deployment" className="py-12 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-emerald-500 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">GET</span>
              <h2 className="text-zinc-900 text-xl font-bold">Get deployment</h2>
            </div>
            
            <div className="inline-flex items-center bg-white rounded-[10px] outline outline-1 outline-gray-200 px-4 py-2.5 mb-8">
              <span className="bg-emerald-500 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px] mr-3">GET</span>
              <span className="text-zinc-900 text-sm font-bold font-['JetBrains_Mono']">/v1/deployments/&#123;id&#125;</span>
            </div>
            
            <p className="text-zinc-700 text-base leading-7 mb-8 max-w-[700px]">
              Retrieve the status and metadata of a deployment.
            </p>

            <div className="bg-sky-900 rounded-xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] overflow-hidden max-w-[800px]">
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-xs font-bold font-['JetBrains_Mono']">Response</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold font-['JetBrains_Mono'] px-2 py-0.5 rounded-md">200 OK</span>
                </div>
                <button className="bg-white/5 rounded-md outline outline-1 outline-white/20 px-3 py-1.5 text-slate-300 text-xs font-semibold hover:bg-white/10 transition-colors">Copy</button>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-xs font-medium font-['JetBrains_Mono'] leading-5"><code className="text-slate-200">&#123;{"\n"}  <span className="text-cyan-300">"id"</span>: <span className="text-emerald-300">"dep_789"</span>,{"\n"}  <span className="text-cyan-300">"status"</span>: <span className="text-emerald-300">"ready"</span>,{"\n"}  <span className="text-cyan-300">"url"</span>: <span className="text-emerald-300">"https://my-app.zoikoweb.app"</span>{"\n"}&#125;</code></pre>
              </div>
            </div>
          </section>

          {/* Create deployment */}
          <section id="create-deployment" className="py-12 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-indigo-600 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">POST</span>
              <h2 className="text-zinc-900 text-xl font-bold">Create deployment</h2>
            </div>
            
            <div className="inline-flex items-center bg-white rounded-[10px] outline outline-1 outline-gray-200 px-4 py-2.5 mb-8">
              <span className="bg-indigo-600 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px] mr-3">POST</span>
              <span className="text-zinc-900 text-sm font-bold font-['JetBrains_Mono']">/v1/deployments</span>
            </div>
            
            <p className="text-zinc-700 text-base leading-7">
              Trigger a new deployment for a project.
            </p>
          </section>

          {/* Delete deployment */}
          <section id="delete-deployment" className="py-12 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-rose-500 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px]">DELETE</span>
              <h2 className="text-zinc-900 text-xl font-bold">Delete deployment</h2>
            </div>
            
            <div className="inline-flex items-center bg-white rounded-[10px] outline outline-1 outline-gray-200 px-4 py-2.5 mb-8">
              <span className="bg-rose-500 text-white text-[9px] font-bold font-['JetBrains_Mono'] px-1.5 py-0.5 rounded-[5px] mr-3">DELETE</span>
              <span className="text-zinc-900 text-sm font-bold font-['JetBrains_Mono']">/v1/deployments/&#123;id&#125;</span>
            </div>
            
            <p className="text-zinc-700 text-base leading-7 mb-8 max-w-[700px]">
              Remove a deployment. Returns <span className="bg-emerald-100 text-emerald-700 text-xs font-bold font-['JetBrains_Mono'] px-2 py-0.5 rounded-md mx-1">204 No Content</span> on success.
            </p>
          </section>

        </main>

      </div>
    </div>
  );
}
