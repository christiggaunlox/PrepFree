"use client"

import Image from "next/image"

const students = [
  {
    name: "Ananya Sharma",
    role: "Software Developer",
    imgSrc: "/images/frame1.svg",
    companyLogo: "/images/c-logo1.svg",
    companyName: "Netflix",
    desc: "PrepFree helped me crack my dream job at Google. The mock interviews were incredibly helpful! Verified Success"
  },
  {
    name: "Ananya Sharma",
    role: "Software Developer",
    imgSrc: "/images/frame2.svg",
    companyLogo: "/images/c-logo1.svg",
    companyName: "Infosys",
    desc: "PrepFree helped me crack my dream job at Google. The mock interviews were incredibly helpful! Verified Success"
  },
  {
    name: "Ananya Sharma",
    role: "Software Developer",
    imgSrc: "/images/frame2.svg",
    companyLogo: "/images/c-logo1.svg",
    companyName: "Infosys",
    desc: "PrepFree helped me crack my dream job at Google. The mock interviews were incredibly helpful! Verified Success"
  },
  {
    name: "Ananya Sharma",
    role: "Software Developer",
    imgSrc: "/images/frame1.svg",
    companyLogo: "/images/c-logo1.svg",
    companyName: "Netflix",
    desc: "PrepFree helped me crack my dream job at Google. The mock interviews were incredibly helpful! Verified Success"
  },
]

export function Students() {
  return (
    <section aria-label="students">
      <div className="mx-auto w-full px-4 py-16 md:py-24">
        <div className="mx-auto w-full text-center">
          <h2 className="text-pretty text-2xl font-semibold md:text-4xl">
            OUR STUDENTS ARE OUR PRIDE
          </h2>
          <p className="mt-2">
            Join thousands of successful students who transformed their <br />careers with PrepFree
          </p>
        </div>

        <div className="mt-10 flex items-start justify-center gap-8 w-full overflow-hidden">
          {students.map((s, i) => (
            <div
              key={i}
              className="group cursor-pointer relative h-[485px] flex flex-col flex-shrink-0 basis-[197px] hover:basis-[630px] transition-all duration-500 ease-in-out rounded-4xl bg-[#0B5B4D] shadow-md overflow-hidden"
            >
              {/* Inner card */}
              <div
                className="relative z-10 flex items-center justify-center w-[197px] h-[485px] rounded-3xl shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-[0.9] group-hover:ml-[15px] overflow-hidden"
              >
                {/* Main image */}
                <Image
                  src={s.imgSrc}
                  alt={`${s.name} photo`}
                  fill
                  className="object-cover rounded-3xl"
                />

                {/* Company logo - centered at bottom */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                  <div className="w-[145px] h-[42px] rounded-xl bg-white shadow-md">
                    <Image
                      src={s.companyLogo}
                      alt={`${s.companyName} logo`}
                      fill
                      className=""
                    />
                  </div>
                </div>
              </div>


              {/* Details panel */}
              <div
                className="absolute right-10 top-0 flex flex-col justify-between font-light h-full w-[360px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out py-20 text-white z-0"
              >
                <p className="text-gray-200 mb-4 text-xl">{s.desc}</p>
                <div className="text-sm">
                  <p className="text-white">{s.name}</p>
                  <p className="text-gray-200 text-yellow-500">{s.role} @{s.companyName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
