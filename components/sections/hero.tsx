import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative curved surface */}
      <div className="absolute w-[90%] [height:calc(100%*0.950)] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C9F7DB] to-[#FFFFFF] rounded-t-[1000px] z-0  border-gray-300 border-t-10 border-l-10 [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,1)_60%)] [mask-size:100%_100%] [mask-repeat:no-repeat] blur-sm"></div>
      <div className="absolute w-[80%] [height:calc(100%*0.859)] bottom-0 left-1/2 -translate-x-1/2 bg-[#C9F7DB] rounded-t-[1000px] z-10 border-gray-300 border-t-10 border-x-10 [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,1)_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] blur-sm backdrop-blur-md"></div>
      <img src="/images/hero/icon1.svg" alt="icon1" className="absolute left-[4%] bottom-[15%] lg:left-[8%] lg:bottom-[10%] scale-75"/>
      <img src="/images/hero/icon2.svg" alt="icon2" className="absolute left-[16%] top-[22%] scale-75"/>
      <img src="/images/hero/icon3.svg" alt="icon3" className="absolute left-[45%] top-[1%] scale-75 z-20"/>
      <img src="/images/hero/icon4.svg" alt="icon4" className="absolute right-[15%] top-[30%] scale-75 z-20"/>
      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-14 md:pt-70 md:pb-20 z-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border px-5 py-2 shadow-md text-xs text-muted-foreground bg-white ">
            Trusted By<span className="mx-1 text-[#0B5B4D]">20,000+</span>Learners Worldwide
          </span>
          <h1 className="mt-4 text-pretty text-3xl font-semibold leading-tight md:text-5xl">
            Ace Your Interviews with AI-Powered Prep
          </h1>
          <p className="mt-4 text-balance text-muted-foreground md:text-lg">
            A career acceleration platform that turns learning into hired-ready proof through AI guidance, real feedback, and portfolio‑grade projects.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 mt-15">
            <Button asChild className="scale-130 border-3 rounded-xl font-light text-white bg-gradient-to-r from-[#0B5B4D] to-[#17C1A3] py-5">
              <Link href="#">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}
