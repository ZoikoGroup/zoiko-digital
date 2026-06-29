export default function InsightsSection() {
  const insights = [
    {
      title: "Whitepapers",
      description:
        "AI in Compliance, Cloud Security, Emerging Tech",
    },
    {
      title: "Global Reports",
      description:
        "Digital Transformation Trends 2025",
    },
    {
      title: "Executive Blogs",
      description:
        "Written by Zoiko leadership",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-semibold text-zinc-800">
            Insights That Shape the Future.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                border border-stone-300
                shadow-[0px_10px_30px_rgba(0,0,0,0.10)]
                p-8
                min-h-[160px]
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <h3 className="text-lg font-semibold text-[#207373] mb-6">
                {item.title}
              </h3>

              <p className="text-zinc-800 text-base leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}