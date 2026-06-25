import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const categories = ["All", "Product", "Engineering", "Security", "UI", "Company"];

  const articles = [
    {
      id: 1,
      image: '/images/blog/featured.png',
      tag: 'PRODUCT',
      title: 'Introducing multi-region deployments',
      description: 'Deploy workloads closer to your users with one click across our new global regions.',
      date: 'May 28, 2026',
      readTime: '4 min read'
    },
    {
      id: 2,
      image: '/images/blog/article2.jpg',
      tag: 'ENGINEERING',
      title: 'How we cut cold starts by 60%',
      description: 'A deep-dive into the runtime changes that made our serverless platform dramatically faster.',
      date: 'May 20, 2026',
      readTime: '7 min read'
    },
    {
      id: 3,
      image: '/images/blog/article4.jpg',
      tag: 'SECURITY',
      title: 'Zero trust, explained simply',
      description: 'What zero trust really means and how to adopt it without slowing your teams down.',
      date: 'May 12, 2026',
      readTime: '6 min read'
    },
    {
      id: 4,
      image: '/images/blog/article6.jpg',
      tag: 'AI',
      title: 'Our approach to responsible AI',
      description: 'The principles and guardrails behind the AI features we ship.',
      date: 'May 5, 2026',
      readTime: '5 min read'
    },
    {
      id: 5,
      image: '/images/blog/article1.jpg',
      tag: 'ENGINEERING',
      title: 'Scaling Postgres to 10k tenants',
      description: 'Lessons from partitioning, connection pooling, and noisy-neighbor isolation.',
      date: 'Apr 27, 2026',
      readTime: '9 min read'
    },
    {
      id: 6,
      image: '/images/blog/article3.jpg',
      tag: 'SECURITY',
      title: 'A faster path through security review',
      description: 'How our Trust Center shortens enterprise procurement from weeks to days.',
      date: 'Apr 18, 2026',
      readTime: '4 min read'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Inter']">

      {/* Main Content */}
      <main className="w-full flex flex-col items-center py-16 px-4">
        <div className="max-w-[1000px] w-full">

          <div className="mb-12">
            <h4 className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-4">Blog</h4>
            <h1 className="text-zinc-900 text-4xl md:text-[44px] font-extrabold tracking-tight mb-4">
              Insights & updates
            </h1>
            <p className="text-gray-500 text-[15px] max-w-2xl leading-relaxed">
              Product news, engineering deep dives, and security guidance from the teams building Zoiko Web Services.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
            <div className="relative w-full md:w-[320px]">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-white border border-gray-200 rounded-full py-2.5 pl-11 pr-4 text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-[13px]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-colors ${index === 0 ? 'bg-zinc-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-zinc-900 border border-gray-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          <div className="bg-white border border-gray-200 rounded-[20px] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)] flex flex-col md:flex-row mb-16 group cursor-pointer hover:border-indigo-200 transition-colors">
            <div className="w-full md:w-3/5 h-[240px] md:h-[360px] relative overflow-hidden">
              <img src="/images/blog/featured.png" alt="Featured Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-md self-start mb-4">Featured Insight</span>
              <h2 className="text-zinc-900 text-2xl md:text-[28px] font-bold leading-tight mb-4 group-hover:text-indigo-600 transition-colors">
                Introducing multi-region deployments
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                Deploy, scale, and secure apps across 14 global regions with a single click. Reduce latency and improve reliability for your users everywhere.
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mr-3">M</div>
                <div className="flex flex-col">
                  <span className="text-zinc-900 text-[13px] font-semibold">Maya Smith</span>
                  <span className="text-gray-400 text-[12px]">Aug 18, 2026 · 6 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Articles */}
          <div className="mb-8">
            <h3 className="text-zinc-900 text-xl font-bold mb-8">Latest articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {articles.map((article) => (
                <div key={article.id} className="flex flex-col group cursor-pointer">
                  <div className="w-full h-[200px] rounded-[16px] overflow-hidden mb-5 border border-gray-100 shadow-sm relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-wider mb-2">{article.tag}</span>
                  <h4 className="text-zinc-900 text-[18px] font-bold leading-snug mb-3 group-hover:text-indigo-600 transition-colors">{article.title}</h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-4 flex-1">
                    {article.description}
                  </p>
                  <div className="text-gray-400 text-[12px] mt-auto flex items-center">
                    {article.date} · {article.readTime}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mb-24 mt-12">
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-zinc-900 text-[13px] font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm">
              Load more articles
            </button>
          </div>

          {/* Subscribe CTA */}
          <div className="w-full bg-[#0F172A] rounded-[24px] p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-transparent opacity-50 pointer-events-none"></div>

            <div className="mb-6 md:mb-0 relative z-10 md:mr-8 text-center md:text-left">
              <h3 className="text-white text-[22px] font-bold mb-2">Subscribe to the blog</h3>
              <p className="text-gray-400 text-[14px]">Get weekly product updates and technical deep dives.</p>
            </div>

            <div className="flex w-full md:w-auto relative z-10 gap-3">
              <input
                type="email"
                placeholder="Work email address"
                className="w-full md:w-[240px] bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-[13px]"
              />
              <button className="bg-white hover:bg-gray-100 text-zinc-900 text-[13px] font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap shadow-sm">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
