import { Button } from "@/components/ui/button"

export function SocialProof() {
  const quotes = [
    {
      image: "/images/virtual-assistant1.svg",
      text: "Get detailed feedback on your technical knowledge, communication style, and problem-solving approach.",
      name: "Comprehensive Skill Analysis",
    },
    {
      image: "/images/virtual-assistant1.svg",
      text: "Monitor your improvement over time with detailed metrics and performance indicators.",
      name: "Progress Tracking",
    },
    {
      image: "/images/virtual-assistant1.svg",
      text: "Receive tailored advice on areas to improve and resources to help you grow.",
      name: "Personalized Recommendations",
    },
  ]

  return (
    <section aria-label="proof" className="bg-gradient-to-b from-[#EEFCF3] to-[#FFFFFF]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-2xl font-semibold md:text-4xl">
            GET REAL FEEDBACK. GROW YOUR REAL SKILLS.
          </h2>
          <p className="mt-2 text-muted-foreground">
            Our smart AI system evaluates your confidence, domain knowledge, articulation,
            problem-solving ability, and more. Get detailed feedback and tips to improve —
            before your real interviews.
          </p>
        </div>

        {/* Cards */}
        <div className="sm:mt-20 flex flex-wrap justify-center items-center relative h-auto sm:grid-cols-3 ">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className={`
                relative w-80 h-80 rounded-2xl border-2 border-[#81EFAD] bg-white p-6 shadow-md
                transition-all duration-500 ease-out transform
                hover:scale-110 hover:shadow-2xl hover:z-20
                ${i === 0 ? 'rotate-0 mx-5 lg:mx-0 lg:left-6 lg:-rotate-3 z-0 mt-10 lg:mt-15': i === 2 ? 'rotate-0 mx-5 lg:mx-0 lg:right-6 lg:rotate-3 z-0 mt-10 lg:mt-15' : 'rotate-0 mx-5 lg:mx-0 z-10 mt-10 lg:mt-0'}
              `}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={q.image}
                alt={q.name}
                className="w-12 h-12 mx-auto mb-4"
              />
              <figcaption className="text-left font-semibold text-xl mb-2 mt-8 text-black px-2">
                {q.name}
              </figcaption>
              <blockquote className="text-left text-sm text-muted-foreground leading-relaxed px-2">
                {q.text}
              </blockquote>
            </figure>
          ))}
        </div>

        {/* Button */}
        <div className="mt-15 md:mt-30 flex justify-center">
          <Button className="scale-130 border-3 rounded-xl font-light text-white bg-gradient-to-r from-[#0B5B4D] to-[#17C1A3] py-5">
            Try Mock Interview
          </Button>
        </div>
      </div>
    </section>
  )
}
