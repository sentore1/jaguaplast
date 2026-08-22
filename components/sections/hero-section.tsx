"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroSlide } from "@/lib/types/cms";

interface HeroSectionProps {
  slide: HeroSlide;
}

export function HeroSection({ slide }: HeroSectionProps) {
  return (
    <section>
      <div className="relative w-full overflow-hidden bg-[#c0c4cc] rounded-none" style={{ height: "100vh" }}>
        <Image
          src={slide.image_src}
          alt={slide.image_alt}
          fill
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
          priority
        />

        {/* Bottom-left text block */}
        <div className="absolute bottom-0 left-0 pb-16 pl-8 md:pl-12 lg:pl-16 z-20">
          <h1
            className="font-black uppercase text-white leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            {slide.headline_line1}
            <br />
            {slide.headline_line2}
          </h1>
          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
            {slide.subheading}
          </p>
        </div>

        {/* Bottom-right CTA bar */}
        <Link
          href={slide.cta_href}
          className="group absolute bottom-0 right-0 flex items-center gap-5 px-16 py-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 z-20"
          style={{ backgroundColor: "#0C6D7D" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0a5c6a")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0C6D7D")}
        >
          {slide.cta_label}
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
