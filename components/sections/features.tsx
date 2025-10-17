import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featureData = [
    {
        title: "AI mock interviews",
        desc: "Experience industry-grade HR and technical simulations designed to mirror real-world interviews, complete with instant, actionable feedback to help you improve faster.",
        imgSrc: "/images/features/rectangle-3910.svg",
        imgAlt: "AI mock interview example",
        cornerIcon: "images/features/icon1.svg",
        cornerPosition: "bottom-left",
        iconSize: { base: "w-18 h-18", md: "md:w-24 md:h-24" },
    },
    {
        reverse: true,
        title: "AI mock interviews",
        desc: "Experience industry-grade HR and technical simulations designed to mirror real-world interviews, complete with instant, actionable feedback to help you improve faster.",
        imgSrc: "/images/features/rectangle-3911.svg",
        imgAlt: "AI mock interview example",
    },
    {
        title: "AI mock interviews",
        desc: "Experience industry-grade HR and technical simulations designed to mirror real-world interviews, complete with instant, actionable feedback to help you improve faster.",
        imgSrc: "/images/features/rectangle-3910.svg",
        imgAlt: "AI mock interview example",
        cornerIcon: "images/features/icon2.svg",
        cornerPosition: "bottom-left",
        iconSize: { base: "w-18 h-18", md: "md:w-20 md:h-20" },

    },
    {
        reverse: true,
        title: "AI mock interviews",
        desc: "Experience industry-grade HR and technical simulations designed to mirror real-world interviews, complete with instant, actionable feedback to help you improve faster.",
        imgSrc: "/images/features/rectangle-3911.svg",
        imgAlt: "AI mock interview example",
        cornerIcon: "images/features/icon3.svg",
        cornerPosition: "top-right",
        iconSize: { base: "w-20 h-20", md: "md:w-28 md:h-28" },

    },
    {
        title: "AI mock interviews",
        desc: "Experience industry-grade HR and technical simulations designed to mirror real-world interviews, complete with instant, actionable feedback to help you improve faster.",
        imgSrc: "/images/features/rectangle-3911.svg",
        imgAlt: "AI mock interview example",
        cornerIcon: "images/features/icon4.svg",
        cornerPosition: "top-left",
        iconSize: { base: "w-18 h-18", md: "md:w-20 md:h-20" },
    },
]

export function Features() {
    return (
        <section id="features" className="bg-gradient-to-b from-[#011310] to-[#0B5B4D] text-(--surface-strong-foreground)">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="mx-auto max-w-full text-center">
                    <h2 className="text-pretty text-4xl font-semibold w-full">EVERYTHING YOU NEED TO LAND YOUR DREAM JOB</h2>
                    <p className="mt-2 font-light text-sm text-white py-4">
                        Industry‑grade preparation powered by AI and expert insights
                    </p>
                </div>
                <div className="mt-10 space-y-12 md:mt-14">
                    {featureData.map((feature, index) => (
                        <div
                            key={index}
                            className={`grid items-center gap-8 md:grid-cols-2 ${feature.reverse ? "md:[&>div:first-child]:order-2" : ""}`}
                        >
                            <div className="relative">
                                <Image
                                    src={feature.imgSrc}
                                    alt={feature.imgAlt}
                                    width={629}
                                    height={409}
                                    className="h-auto w-full rounded-lg"
                                />
                                {feature.cornerIcon && (
                                    <Image
                                        src={feature.cornerIcon}
                                        alt="corner icon"
                                        width={122}
                                        height={122}
                                        className={`absolute -translate-x-1/2 -translate-y-1/2 ${feature.iconSize?.base} ${feature.iconSize?.md || ""}
                                            ${feature.cornerPosition === "top-left" && "top-0 left-3"}
                                            ${feature.cornerPosition === "top-right" && "top-0 -right-25"}
                                            ${feature.cornerPosition === "bottom-left" && "-bottom-25 left-0"}
                                            ${feature.cornerPosition === "bottom-right" && "-bottom-28 -right-28"}
                                        `}
                                    />
                                )}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold md:text-2xl">{feature.title}</h3>
                                <p className="mt-2 text-gray-300">{feature.desc}</p>
                                <div className="mt-4">
                                    <Button asChild size="lg" variant="white" className="px-10 py-6">
                                        <Link href="#how">Learn more</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
