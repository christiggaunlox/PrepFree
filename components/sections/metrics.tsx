export function Metrics() {
  const items = [
    { stat: "10,000+", label: "Candidates prepared Interview-ready across roles" },
    { stat: "90%", label: "Confidence Boost Say AI interviews boosted confidence" },
    { stat: "100+", label: "Companies Hiring Active employer network" },
    { stat: "50+", label: "Industry Experts Backed by FAANG & Fortune 500" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-[#C9F7DB] px-12 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold md:text-4xl">OUR IMPACT BY NUMBERS</h2>
        <p className="mt-2 text-gray-600">
          Industry‑grade preparation powered by AI and expert insights
        </p>
      </div>

      {/* Main card */}
      <div className="mt-10 flex flex-col items-center justify-center gap-6 rounded-xl bg-[#004D40] mx-6 py-10 text-white md:flex-row md:gap-0">
        {items.map((item, index) => (
          <div
            key={item.stat}
            className="relative flex w-full px-20 flex-col items-start p-8 text-left md:w-1/4"
          >
            <div className="text-2xl font-bold md:text-3xl">{item.stat}</div>
            <div className="mt-1 text-xs md:text-sm text-white/80 ">{item.label}</div>

            {/* Divider */}
            {index < items.length - 1 && (
              <div className="hidden md:block absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#1E413A] via-white to-[#1E413A]" />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
