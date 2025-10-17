import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { Metrics } from "@/components/sections/metrics"
import { Brands } from "@/components/sections/brands"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { SocialProof } from "@/components/sections/social-proof"
import { Security } from "@/components/sections/security"
import { Cta } from "@/components/sections/cta"
import { Students } from "@/components/sections/students"
import { Faq } from "@/components/sections/faq"

export default function Page() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Metrics />

      <Brands />

      <Features />

      <HowItWorks />

      <SocialProof />

      <Security />

      <Cta />

      <Students />

      <Faq />
    </main>
  )
}
