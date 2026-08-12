"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="">
    <div className="relative w-full overflow-hidden bg-[#c0c4cc] rounded-none" style={{ height: "100vh" }}>
      {/* Full-width background image */}
      <Image
        src="/image5/heroimages5.png"
        alt="Jaguaplast precision plastic components"
        fill
        className="object-cover"
        style={{ objectPosition: "center 20%" }}
        priority
      />

      {/* Bottom-left text block — matches reference positioning */}
      <div className="absolute bottom-0 left-0 pb-16 pl-8 md:pl-12 lg:pl-16 z-20">
        <h1
          className="font-black uppercase text-white leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        >
          LUXURY
          <br />
          FOOTWEAR
        </h1>
        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
          CRAFTED FOR COMFORT. DESIGNED FOR EXCELLENCE.
        </p>
      </div>

      {/* Bottom-right dark CTA bar — dark/near-black like the reference */}
      <Link
        href="/products"
        className="group absolute bottom-0 right-0 flex items-center gap-5 px-16 py-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 z-20"
        style={{ backgroundColor: "#0C6D7D" }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0a5c6a")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0C6D7D")}
      >
        EXPLORE COLLECTION
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </div>
    </section>
  );
}
