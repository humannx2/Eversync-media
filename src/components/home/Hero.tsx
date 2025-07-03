"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
       <section
      className="bg-[url('/images/hero-image.jpg')] bg-cover bg-center min-h-screen w-full"
    >
                    <h1 className="text-[13rem] text-white mix-blend-difference font-bold pt-4 text-center px-8 flex flex-col justify-center pointer-events-none select-none">
            <span className="text-start">
                {"Brave".toUpperCase()}
            </span>
            <span className="text-end -mt-20">
                {"Studio".toUpperCase()}
            </span>
            </h1>
        <div className="flex items-center justify-between px-10 py-4 mt-2">
            <div className="flex flex-col gap-1 text-neutral-100/60 text-lg font-semibold">
                <span>What we do</span>
                <span>Branding</span>
                <span>Design</span>
                <span>Development</span>
                <span>Photography</span>
            </div>
            <div className="max-w-[300px] text-white/80">
                <p>Brave is a full-service creative studio creating beautiful digital experiences and products. We are an award winning design and art group specializing in branding, web design and engineering.</p>
            </div>
        </div>
    </section>
  )
}
