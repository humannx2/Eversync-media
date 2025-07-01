'use client';

import { ArrowUpIcon } from "lucide-react"
import Image from "next/image";

export default function Footer() {

  return (
    <footer className="bg-black text-white min-h-screen relative">
      <div className="flex items-center font-[500] justify-between bg-black text-white px-12 py-6">
        <span className="flex flex-col justify-start items-start">
          <span>HAVE A PROJECT IN MIND?</span>
          <span className="text-[.9rem] font-normal bg-white text-black rounded-2xl px-2">Let&apos;s Talk</span>
        </span>
        <span className="flex flex-col justify-center items-start">
          <span>FACEBOOK</span>
          <span>INSTAGRAM</span>
        </span>
        <span className="flex flex-col justify-center items-start">
          <span>X.COM</span>
          <span>LINKEDIN</span>
        </span>
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex justify-center items-center gap-2 cursor-pointer">
            <ArrowUpIcon className="bg-white text-black rounded-full"/>
            <span className="hover:underline" >BACK TO TOP</span>
        </span>
      </div>
      <div className="overflow-hidden py-12 relative">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 10s linear infinite'
          }}
        >
          <div className="flex space-x-8 shrink-0">
            <span className="font-bold text-[13rem]">BRAVE</span>
            <span className="font-bold text-[13rem]">BRAVE</span>
            <span className="font-bold text-[13rem]">BRAVE</span>
            <span className="font-bold text-[13rem]">BRAVE</span>
          </div>
          <div className="flex space-x-8 shrink-0">
            <span className="font-bold text-[13rem]">BRAVE</span>
            <span className="font-bold text-[13rem]">BRAVE</span>
            <span className="font-bold text-[13rem]">BRAVE</span>
            <span className="font-bold text-[13rem]">BRAVE</span>
          </div>
        </div>
        <div
          className="flex whitespace-nowrap -mt-36 transition duration-300"
          style={{
            animation: 'marquee-reverse 10s linear infinite'
          }}
        >
          <div className="flex space-x-8 shrink-0">
            <span className="font-bold text-[13rem]">STUDIO</span>
            <span className="font-bold text-[13rem]">STUDIO</span>
            <span className="font-bold text-[13rem]">STUDIO</span>
            <span className="font-bold text-[13rem]">STUDIO</span>
          </div>
          <div className="flex space-x-8 shrink-0">
            <span className="font-bold text-[13rem]">STUDIO</span>
            <span className="font-bold text-[13rem]">STUDIO</span>
            <span className="font-bold text-[13rem]">STUDIO</span>
            <span className="font-bold text-[13rem]">STUDIO</span>
            <span className="font-bold text-[13rem]">STUDIO</span>
          </div>
        </div>
        <Image
          src={"https://cdn.prod.website-files.com/6781045744beb95ee659d374/679b794310de1189f25b225f_footer-circle-text.svg"} alt="Footer Circle Text"
          className="object-cover absolute bg-black top-[30%] left-[43%] rounded-full border-0 border-white w-[250px] h-[250px] p-2"
          width={250}
          height={250}
          style={{
            animation: 'rotate 10s linear infinite'
          }}
        />
        <ArrowUpIcon className="absolute top-[49%] left-[50%] hover:scale-110 cursor-pointer " style={{
          transform: 'rotate(45deg)',
        }}/>
      </div>
      <div className="flex justify-between items-center absolute bottom-0 w-full px-12 py-6 text-[.95rem] font-[500]">
        <span>
          © 2024 Eversync Media. All rights reserved.
        </span>
        <span>
          {["Intructions", "Style Guide", "License", "Changelog"].map((item, index) => (
            <span key={index} className="mx-2 underline cursor-pointer">
              {item}
            </span>
          ))}
        </span>
      </div>
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </footer>
  )
}
