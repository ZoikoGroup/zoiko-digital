"use client";

const caseStudies = [
  {
    category: "Banking",
    region: "Caribbean",
    title: "Regional Banking Network",
    description:
      "Connected banks across island nations with secure transactions and banking management systems.",
    stats: [
      { value: "150+", label: "Banking Facilities" },
      { value: "80%", label: "User Satisfaction" },
    ],
    tags: ["Easy Transferring", "Video Conferencing", "User Management"],
  },
  {
    category: "Healthcare",
    region: "Caribbean",
    title: "Regional Telemedicine Network",
    description:
      "Connected healthcare providers across island nations with secure telemedicine and patient management systems.",
    stats: [
      { value: "150+", label: "Healthcare Facilities" },
      { value: "80%", label: "Patient Satisfaction" },
    ],
    tags: ["HIPAA Compliance", "Video Conferencing", "EMR Integration"],
  },
  {
    category: "FinTech",
    region: "India",
    title: "Digital Banking Transformation",
    description:
      "Built a comprehensive digital banking platform processing millions of transactions with advanced fraud detection.",
    stats: [
      { value: "5M+", label: "Active Users" },
      { value: "$500M+", label: "Monthly Volume" },
    ],
    tags: ["Real-time Processing", "AI/ML", "Mobile Banking"],
  },
];

export default function TrustedByGlobalLeaders() {
  return (
    <section className="bg-[#114A69] py-20 lg:py-15">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">
            Trusted by Global Leaders
          </h2>

          <p className="text-white/80 text-lg leading-7 max-w-3xl mx-auto">
            Real results from our global partnerships, showcasing
            transformative solutions that drive measurable business outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] border border-zinc-200 shadow-sm p-8 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-8">
                <span className="px-4 py-2 rounded-full bg-teal-700/10 border border-[#A855F7]/20 text-[#207373] text-xs font-semibold">
                  {item.category}
                </span>

                <span className="text-sm text-zinc-600">
                  {item.region}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold text-zinc-900 mb-6 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-base leading-7 mb-10">
                {item.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {item.stats.map((stat, idx) => (
                  <div key={idx}>
                    <h4 className="text-[#207373] text-3xl font-bold">
                      {stat.value}
                    </h4>

                    <p className="text-zinc-500 text-sm mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-zinc-100 text-black text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}