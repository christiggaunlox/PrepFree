"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function Brands() {
  const brands = [
    { name: "Netflix", logo: "/images/c-logo1.svg" },
    { name: "Meta", logo: "/images/c-logo1.svg" },
    { name: "Amazon", logo: "/images/c-logo1.svg" },
    { name: "Adobe", logo: "/images/c-logo1.svg" },
    { name: "Accenture", logo: "/images/c-logo1.svg" },
    { name: "Infosys", logo: "/images/c-logo1.svg" },
  ];

  // Double the array to avoid gap at the end
  const seamlessBrands = [...brands, ...brands];

  return (
    <div className="bg-[#C9F7DB] py-10 flex flex-col items-center justify-center">
      <p className="text-center text-lg md:text-2xl text-gray-500 mb-10 whitespace-nowrap">
        Join <span className="text-black">200+</span> Companies Already Grow
      </p>

      <div
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <Marquee gradient={false} speed={50}>
          {seamlessBrands.map((b, index) => (
            <div key={index} className="mx-4 md:mx-8 flex items-center justify-center">
              <Image
                src={b.logo}
                alt={`${b.name} logo`}
                width={232}
                height={70}
                className="object-contain w-35 sm:w-40 md:w-56 h-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>

    </div>
  );
}
