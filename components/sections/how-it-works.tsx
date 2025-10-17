import { Section } from "@/components/section"

const steps = [
  {
    title: "Take a mock interview",
    desc: "Choose a role or upload a JD. Our AI creates a realistic interview tailored to you.",
    imgSrc: "/images/how-it-works/interview-amico1.svg",
    imgAlt: "Mock Interview",
  },
  {
    title: "Get instant feedback",
    desc: "Clarity, structure, depth, and delivery scored with specific suggestions to improve.",
    imgSrc: "/images/how-it-works/interview-amico3.svg",
    imgAlt: "Mock Interview",
  },
  {
    title: "Practice, iterate, win",
    desc: "Refine with targeted drills and watch your readiness score rise.",
    imgSrc: "/images/how-it-works/interview-amico2.svg",
    imgAlt: "Mock Interview",
  },
]

export function HowItWorks() {
  return (
    <Section id="how" aria-label="how it works" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFFFF] to-[#EEFCF3]">
      <div className="mx-auto max-w-2xl text-center">
        <img src="/images/how-it-works/icon1.svg" alt="" className="absolute h-0 w-0 md:h-25 md:w-25 object md:left-[10%]" />
        <img src="/images/how-it-works/icon2.svg" alt="" className="absolute h-0 w-0 md:h-25 md:w-25 object left-[70%] " />
        <h2 className="text-pretty text-2xl font-semibold md:text-4xl">HOW IT WORKS</h2>
        <p className="mt-3 text-[#319659]">
          Assess → Improve → Succeed
        </p>
        <p className="">
          Industry‑grade process built with recruiters
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-2xl border-2 bg-card p-6 flex flex-col items-center text-center bg-transparent border-[#0B5B4D]">
            {/* Image on top */}
            <img src={s.imgSrc} alt={s.imgAlt} className="mb-8 h-56 w-56 object" />
            <div className="text-left pl-3 mb-10">
              <h3 className="text-xl font-semibold text-[#0B5B4D]">{s.title}</h3>
              <p className="mt-2 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <img src="/images/how-it-works/icon3.svg" alt="" className="absolute h-0 w-0 md:h-30 md:w-30 object right-[10%] " />
    </Section>
  )
}
