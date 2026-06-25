import React from 'react';
import Link from 'next/link';

export default function HelpCenter() {
  const topics = [
    {
      id: 1,
      title: 'Getting started',
      description: 'Set up your account and deploy your first app.',
      icon: '/images/help/getting-started.svg',
      color: 'bg-gradient-to-br from-indigo-600 to-violet-500',
      articles: 8
    },
    {
      id: 2,
      title: 'Billing & plans',
      description: 'Invoices, payment methods, and upgrades.',
      icon: '/images/help/billing.svg',
      color: 'bg-gradient-to-br from-cyan-500 to-indigo-600',
      articles: 6
    },
    {
      id: 3,
      title: 'Deployments',
      description: 'Deploy, scale, and roll back your services.',
      icon: '/images/help/deployments.svg',
      color: 'bg-gradient-to-br from-emerald-500 to-indigo-600',
      articles: 10
    },
    {
      id: 4,
      title: 'Security & access',
      description: 'SSO, roles, tokens, and account security.',
      icon: '/images/help/security.svg',
      color: 'bg-gradient-to-br from-violet-500 to-indigo-600',
      articles: 7
    },
    {
      id: 5,
      title: 'Performance',
      description: 'Monitoring, scaling, and troubleshooting.',
      icon: '/images/help/performance.svg',
      color: 'bg-gradient-to-br from-amber-500 to-indigo-600',
      articles: 5
    },
    {
      id: 6,
      title: 'API & integrations',
      description: 'Use the API and connect other tools.',
      icon: '/images/help/api.svg',
      color: 'bg-gradient-to-br from-indigo-600 to-cyan-500',
      articles: 9
    }
  ];

  const popularArticles = [
    { title: 'How to deploy your first app', category: 'Getting started' },
    { title: 'Setting up a custom domain', category: 'Getting started' },
    { title: 'Understanding your invoice', category: 'Billing & plans' },
    { title: 'Upgrading or downgrading your plan', category: 'Billing & plans' },
    { title: 'Rolling back a deployment', category: 'Deployments' },
    { title: 'Configuring autoscaling', category: 'Deployments' },
    { title: 'Enabling single sign-on (SSO)', category: 'Security & access' },
    { title: 'Creating and rotating API tokens', category: 'Security & access' },
    { title: 'Reading logs and metrics', category: 'Performance' },
    { title: 'Troubleshooting slow responses', category: 'Performance' },
    { title: 'Authenticating with the API', category: 'API & integrations' },
    { title: 'Connecting a Git repository', category: 'API & integrations' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-['Inter']">
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-fuchsia-700 to-sky-900 relative overflow-hidden flex justify-center py-20 px-4">
        {/* Subtle radial glow matching the screenshot */}
        <div className="absolute top-[-100px] left-[-200px] w-[1000px] h-[500px] bg-radial-[at_25%_10%] from-indigo-600/60 to-indigo-600/0 opacity-60 blur-md pointer-events-none"></div>

        <div className="max-w-[760px] w-full flex flex-col items-center text-center relative z-10 pt-10 pb-16">
          <h1 className="text-white text-5xl md:text-6xl font-semibold leading-tight mb-4">
            How can we help?
          </h1>
          <p className="text-white/75 text-lg font-normal mb-10">
            Search our knowledge base or browse topics below.
          </p>
          
          <div className="w-full relative max-w-[600px] h-16 bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-y-0 left-[20px] flex items-center pointer-events-none z-10">
              <img src="/images/help/search-bar-icon.svg" alt="Search" className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search for answers…" 
              className="w-full h-full bg-transparent py-4 pl-[53px] pr-6 text-white placeholder:text-white/60 focus:outline-none transition-all text-base"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[1072px] w-full flex flex-col items-center">
          
          {/* Browse by topic */}
          <div className="w-full mb-16">
            <h2 className="text-zinc-900 text-2xl font-extrabold mb-8">Browse by topic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topics.map((topic) => (
                <div key={topic.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] hover:shadow-lg transition-shadow cursor-pointer group h-52 flex flex-col">
                  <div className={`w-11 h-11 ${topic.color} rounded-xl flex items-center justify-center mb-5`}>
                    <img src={topic.icon} alt={topic.title} className="w-5 h-5" />
                  </div>
                  <h3 className="text-zinc-900 text-lg font-bold mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm leading-6 mb-auto">
                    {topic.description}
                  </p>
                  <div className="flex items-center text-indigo-600 text-xs font-bold mt-4">
                    {topic.articles} articles →
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular articles */}
          <div className="w-full mb-20">
            <h2 className="text-zinc-900 text-2xl font-extrabold mb-8">Popular articles</h2>
            <div className="flex flex-col gap-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl h-20 px-5 border border-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] hover:border-indigo-200 transition-colors cursor-pointer flex items-center group">
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                    <img src="/images/help/popular-article.svg" alt="Article" className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-zinc-900 text-base font-semibold leading-6 group-hover:text-indigo-600 transition-colors">{article.title}</h4>
                    <p className="text-gray-600 text-xs mt-0.5">{article.category}</p>
                  </div>
                  <img src="/images/help/chevron-right.svg" alt="Go" className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Still need help CTA */}
          <div className="w-full bg-white rounded-[20px] p-9 border border-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-6 sm:mb-0 text-center sm:text-left">
              <h3 className="text-zinc-900 text-xl font-extrabold mb-2">Still need help?</h3>
              <p className="text-gray-600 text-base">Our support team is here for you.</p>
            </div>
            <button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white text-base font-bold py-3 px-6 rounded-xl transition-colors whitespace-nowrap shadow-sm">
              Contact support →
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
