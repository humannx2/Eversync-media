"use client";

import useGetLocation from "@/hooks/useGetLocation";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MenuIcon, SunIcon, X } from "lucide-react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {

    const currentPath = useGetLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navElements = [
        { label : "Home", href: "/" },
        { label : "About", href: "/about" },
        { label : "Services", href: "/services" },
        { label : "Portfolio", href: "/portfolio" },
        { label : "Contact", href: "/contact" }
    ];

    const menuDialog = (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-16 left-0 z-50">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navElements.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    )

    return (
    <header className={cn("absolute flex items-center justify-between px-10 w-full",`${currentPath === "/" ? "bg-transparent text-white" : "bg-white shadow-md"}`,
        `${inter.className}`
    )}>
        <div className="flex items-center justify-between py-4 gap-4">
            <div className="text-2xl font-bold">Brave.</div>
            <div className="">50.4509° N, 30.5225° E</div>
        </div>
        <nav className="">
            <ul className="hidden md:flex gap-x-4 items-center justify-center text-lg font-semibold">
                {navElements.map((element, index) => (
                    <li key={index} className={`${inter.className} text-[.9rem] px-3`}>
                        <Link href={element.href}>{element.label.toUpperCase()}</Link>
                    </li>
                ))}
                <li className={`${inter.className} pl-4`}>
                    <SunIcon className="w-6 h-6 cursor-pointer" />
                </li>
            </ul>
            <div className="block md:hidden border-2 border-white rounded-lg p-2 transition-all duration-300" onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? (
                    <X className="w-8 h-8 cursor-pointer" />
                ) : (
                    <MenuIcon className="w-8 h-8 cursor-pointer" />
                )}
            </div>
            {isOpen && menuDialog}
        </nav>
    </header>
  )
}
