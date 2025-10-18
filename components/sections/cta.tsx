"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function Cta() {
  const innerCircleImage = [
    { src: "/images/cta/p1.svg", top: "0%", left: "50%", offsetX: -17, offsetY: -15 },
    { src: "/images/cta/p2.svg", top: "50%", left: "50%", offsetX: 85, offsetY: -17 },
    { src: "/images/cta/p3.svg", top: "100%", left: "50%", offsetX: -18, offsetY: -25 },
    { src: "/images/cta/p4.svg", top: "50%", left: "0%", offsetX: -10, offsetY: -20 },
  ];

  const largeCircleImages = [
    { src: "/images/cta/p5.svg", top: "0%", left: "50%", offsetX: -17, offsetY: -10 },
    { src: "/images/cta/p6.svg", top: "15%", left: "85%", offsetX: -17, offsetY: -12 },
    { src: "/images/cta/p7.svg", top: "50%", left: "100%", offsetX: -25, offsetY: -19 },
    { src: "/images/cta/p8.svg", top: "85%", left: "85%", offsetX: -18, offsetY: -22 },
    { src: "/images/cta/p9.svg", top: "100%", left: "50%", offsetX: -15, offsetY: -25 },
    { src: "/images/cta/p10.svg", top: "85%", left: "15%", offsetX: -13, offsetY: -23 },
    { src: "/images/cta/p11.svg", top: "50%", left: "0%", offsetX: -10, offsetY: -17 },
    { src: "/images/cta/p12.svg", top: "15%", left: "15%", offsetX: -16, offsetY: -14 },
  ];

  const features = [
    {
      icon: "/images/cta/icon3.svg",
      title: "Grow Your Network",
      description:
        "Connect with industry professionals, tech leaders, and like-minded peers to build a powerful professional circle.",
    },
    {
      icon: "/images/cta/icon2.svg",
      title: "Boost Your Career",
      description:
        "Access expert guidance, personalized career planning, and skill development resources.",
    },
    {
      icon: "/images/cta/icon1.svg",
      title: "Your Gateway to Jobs",
      description:
        "Quickly navigate job opportunities and engage directly with recruiters.",
    },
    {
      icon: "/images/cta/icon1.svg",
      title: "Weekly Expert Bootcamps",
      description:
        "Join live sessions led by experts to sharpen your technical and soft skills.",
    },
    {
      icon: "/images/cta/icon1.svg",
      title: "Direct Company Connect",
      description:
        "Gain access to company representatives and expand your professional reach.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#FFFFFF] to-[#D6FFE8] py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 m-auto">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-4xl font-semibold pb-5 leading-tight text-gray-900">
              ACCELERATE YOUR CAREER GROWTH
            </h2>
            <p className="text-gray-600 mt-3 text-sm mb-8 w-full">
              Join thousands of professionals who’ve transformed their careers with Prepfree’s comprehensive ecosystem designed for success.
            </p>

            <div className="relative w-[360px] h-[360px] mt-10 flex items-center justify-center">
              {/* Circle Container */}
              <div className="relative w-full h-full scale-90">
                {/* Large Circle */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3ccircle cx='50' cy='50' r='48' fill='none' stroke='%23A7CEFC' stroke-width='0.4' stroke-dasharray='3,3'/%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                  {largeCircleImages.map((person, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-9 h-9 rounded-full scale-105"
                      style={{
                        top: person.top,
                        left: person.left,
                        x: person.offsetX,
                        y: person.offsetY,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    >
                      <img
                        src={person.src}
                        alt={`Person ${index + 1}`}
                        className="w-full h-full rounded-full scale-105"
                      />
                    </motion.div>
                  ))}
                </motion.div>


                {/* Inner Circle */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-[60%] h-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3ccircle cx='50' cy='50' r='48' fill='none' stroke='%23A7CEFC' stroke-width='0.4' stroke-dasharray='4,3'/%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                  {innerCircleImage.map((person, index) => (
                    <motion.div
                      key={index}
                      style={{
                        position: "absolute",
                        top: person.top,
                        left: person.left,
                        x: person.offsetX,
                        y: person.offsetY,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    >
                      <img
                        src={person.src}
                        alt={`Person ${index + 1}`}
                        className="w-9 h-9 rounded-full"
                      />
                    </motion.div>
                  ))}
                </motion.div>

              </div>

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/logo-prepfree.svg"
                  alt="Prepfree"
                  width={110}
                  height={28}
                  className="h-7 w-auto"
                  priority
                />
              </div>

              {/* Rating Badge */}
              <div className="absolute md:-right-[55%] top-1/3 -translate-y-1/2 bg-white shadow-md rounded-sm p-4 w-48 text-center space-y-2">
                <div className="flex justify-center text-[#FFC728] text-xl mb-1 scale-130">★★★★★</div>
                <p className="text-sm font-semibold text-gray-800">4.9 / 5 rating</p>
                <p className="text-sm font-semibold text-gray-400">By Students</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-14">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-white shadow-md p-3">
                  <Image src={feature.icon} alt={feature.title} width={28} height={28} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold pb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Center Button */}
        <div className="mt-16 flex justify-center">
          <Button
            asChild
            className="scale-130 border-3 rounded-xl font-light text-white bg-gradient-to-r from-[#0B5B4D] to-[#17C1A3] py-5"
          >
            <Link href="#">Join Our Community</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
