"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import { GetQuoteModal } from "@/components/get-quote-modal";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SOLUTIONS", href: "/technology" },
  { label: "PRODUCTS", href: "/products" },
  { label: "CONTACT US", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/gallery";

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        {/* Single row: logo | nav | search | CTA button */}
        <div className="flex items-stretch h-20">

          {/* Logo — left side, flush to edge */}
          <Link href="/" className="flex items-center pl-4 pr-10 shrink-0">
            <Image
              src="/image5/logogreen.png"
              alt="Jaguaplast Logo"
              width={580}
              height={160}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav — centered, takes all available space */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors ${
                    isActive
                      ? isHome ? "text-white" : "text-black"
                      : isHome ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Search icon */}
          <div className="hidden md:flex items-center px-5">
            <button
              type="button"
              aria-label="Search"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Search size={17} />
            </button>
          </div>

          {/* GET A QUOTE — opens modal, flush right edge, fills full height */}
          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="hidden md:flex items-center gap-3 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-200 shrink-0 cursor-pointer"
            style={{ backgroundColor: "#0C6D7D" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0a5c6a")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0C6D7D")}
          >
            GET A QUOTE
            <ArrowRight size={14} />
          </button>

          {/* Mobile hamburger */}
          <div className="flex items-center ml-auto pr-5 md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-black/80 backdrop-blur-sm px-6 py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-sm font-semibold tracking-widest uppercase transition-colors ${
                      isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Mobile GET A QUOTE — opens modal */}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="mt-4 flex items-center justify-center gap-2 text-white px-5 py-3 text-xs font-bold uppercase tracking-widest w-full"
                style={{ backgroundColor: "#0C6D7D" }}
              >
                GET A QUOTE <ArrowRight size={13} />
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Quote Modal — rendered outside header so it overlays everything */}
      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
