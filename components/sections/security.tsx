import { Section } from "@/components/section"

const items = [
  { title: "Advanced Encryption", desc: "All your data is protected with bank-level encryption standards", imgSrc: "/images/security/icon1.svg" },
  { title: "Granular Controls", desc: "Manage visibility and retention within your account.", imgSrc: "/images/security/icon1.svg" },
  { title: "Private by Default", desc: "We never sell data—period.Best practices aligned with industry standards.", imgSrc: "/images/security/icon1.svg" },
  { title: "Compliance Ready", desc: "Best practices aligned with industry standards.", imgSrc: "/images/security/icon1.svg" },
]

export function Security() {
  return (
    <Section id="security" aria-label="security" className="bg-gradient-to-b from-[#011310] to-[#0B5B4D] py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-pretty text-4xl font-semibold text-white full:text-4xl">YOUR DATA IS SAFE WITH US</h2>
        <p className="mt-2 font-light text-sm text-white py-4">
          At PrepFree, your privacy comes first — all data is encrypted,<br></br> stored securely, and never shared with third parties.
        </p>
      </div>

      {/* 4 Large Gradient-Border Square Boxes */}
      <div className="mt-10 grid gap-10 sm:grid-cols-2 max-w-3xl mx-auto">
        {items.map((it) => (
          <div
            key={it.title}
            className="relative rounded-2xl p-[2px] aspect-3/2"
          >
            {/* Outer gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#AAFF93] to-[#FFFFFF]" />

            {/* Inner content box */}
            <div className="relative h-full w-full rounded-2xl bg-[#173731] flex flex-col justify-center items-start p-8">
              <div className="flex items-center">
                <img src={it.imgSrc} alt="icons" width={40} height={40} className="mr-3" />
                <h3 className="text-2xl font-semibold text-white">{it.title}</h3>
              </div>
              <p className="mt-3 text-gray-300">{it.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </Section>
  )
}
