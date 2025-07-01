"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

export default function About() {
  return (
    <section className="flex items-center justify-start h-screen bg-white text-black px-12 md:p-24">
        <div className="relative px-20 flex flex-col justify-start gap-24 md:w-[70%] min-h-[70vh]">
            <div className="absolute w-[70vh] -left-60 top-60"
                style={{
                    transform: "rotate(270deg)",
                }}>
                <span className="flex justify-between items-center border-b border-black">
                    <span className="text-sm font-[500]">{"About Us".toUpperCase()}</span>
                    <span>{"(01)"}</span>
                </span>
            </div>
            <h2 className="text-6xl font-semibold flex flex-col text-start w-full"><span>{"Crafting ideas".toUpperCase() }</span><span>{"that inspire".toUpperCase()}</span></h2>
            <div>
                <p className="text-2xl font-[500] text-start mt-4 max-w-[80%]">
                    We are a creative studio that loves making beautiful websites and premium products. We&apos;ve won some awards for our work. We&apos;re really good at creating brands, designing cool stuff, and making things work just right. At our core, we believe in the power of simplicity and effectiveness. Our approach is all about understanding your business needs and bringing your ideas to life without complexity.
                </p>
                <Button variant="custom" className="w-fit mt-4 text-sm">
                    <span className="font-semibold">{"More About Us".toUpperCase()}</span>
                    <Star className="size-3" />
                </Button>
            </div>
        </div>
        <Image src="/images/home-about-image.jpg" alt="About Us" width={250} height={500} className="w-[400px] h-[600px] object-cover" />
    </section>
  )
}
