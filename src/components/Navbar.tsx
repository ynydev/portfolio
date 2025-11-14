"use client"
import Link from "next/link";
import { useState } from "react";
import { Space_Mono } from "next/font/google";

const mainNavLinks = [
  { "text": "Home", "href": "/" },
  { "text": "About", "href": "/about" },
  { "text": "Works", "href": "/works" },
];

const spaceMono = Space_Mono({ weight: "400" });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-14 fixed top-0 w-full flex w-full py-6">
      <div className="flex items-center justify-start">
        <Link
          className="text-xl"
          href="/"
        >YNYDev</Link>
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={() => setIsMenuOpen(prevState => !prevState)}
          className="relative w-6 h-4 flex flex-col justify-between items-center group z-120 outline-none cursor-pointer"
        >
          <span
            className={`
              block h-[1px] w-full bg-white transition-all duration-300
              ${isMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""}
            `}
          />
          <span
            className={`
              block h-[1px] w-full bg-white transition-all duration-300
              ${isMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}
            `}
          />
        </button>
        <nav className={`
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          fixed inset-0 z-100 flex items-center justify-center
          bg-[rgba(0,0,0,0.75)] w-full h-full duration-500 grid grid-rows-1 md:grid-cols-2
          backdrop-blur-sm
        `}>
          <div className="flex justify-center">
            <div className="group grid grid-rows-3 gap-8">
              {mainNavLinks.map((links) => (
                <Link
                  key={links.href}
                  href={links.href}
                  className={`${spaceMono.className} text-6xl group-hover:text-[#a1a1a1] hover:text-white duration-300`}
                >
                  {links.text}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
