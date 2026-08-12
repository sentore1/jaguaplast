"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function StatsCardsSection() {
  return (
    <section className="px-0 py-0 bg-white">

      {/* ── TOP ROW: 3 stat cells separated by vertical dividers ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200">

        {/* Cell 1 — tagline */}
        <div className="px-12 py-20 md:border-r border-gray-200 min-h-[400px] flex flex-col">
          <p className="text-[13px] font-black uppercase leading-snug tracking-tight text-gray-900 max-w-[220px]">
            LUXURY FOOTWEAR ENGINEERED FOR COMFORT, CRAFTED FOR THOSE WHO DEMAND EXCELLENCE IN EVERY STEP.
          </p>
        </div>

        {/* Cell 2 — 100% stat */}
        <div className="px-12 py-20 md:border-r border-gray-200 min-h-[400px] flex flex-col">
          <p className="text-[3.2rem] font-black leading-none text-gray-900 tracking-tight">100%</p>
          <p className="mt-3 text-[12px] text-gray-500 leading-snug max-w-[220px]">
            Every pair is crafted with 100% premium-grade materials for lasting luxury and performance
          </p>
        </div>

        {/* Cell 3 — 90% stat */}
        <div className="px-12 py-20 min-h-[400px] flex flex-col">
          <p className="text-[3.2rem] font-black leading-none text-gray-900 tracking-tight">90%</p>
          <p className="mt-3 text-[12px] text-gray-500 leading-snug max-w-[220px]">
            90% of our clients report superior comfort levels compared to conventional footwear
          </p>
        </div>

      </div>

      {/* ── BOTTOM ROW: 3 cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3">

        {/* Card 1 — Become a customer */}
        <div className="relative flex flex-col justify-between bg-[#095560] px-12 pt-8 pb-0 md:border-r border-gray-200 overflow-hidden min-h-[400px]">
          <div>
            <p className="text-[11px] text-white/70 font-medium mb-6">
              <span className="text-white mr-1">/</span> Our Collection
            </p>
            <h3 className="text-[1.55rem] font-black uppercase leading-tight tracking-tight text-white max-w-[200px]">
              FOOTWEAR CRAFTED FOR THE DISCERNING FEW
            </h3>
          </div>
          <div className="mt-8 pb-8">
            <Link
              href="/products"
              className="inline-flex items-center justify-center w-12 h-12 text-white transition-colors duration-200"
              style={{ backgroundColor: "#095560" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#073f47")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#095560")}
            >
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Card 2 — Comfort & Innovation */}
        <div className="relative flex flex-col justify-between bg-[#0B7380] px-12 pt-8 pb-0 md:border-r border-gray-200 overflow-hidden min-h-[400px]">
          {/* Small image — bottom-right corner */}
          <div className="absolute bottom-16 right-6 w-40 h-40 pointer-events-none select-none">
            <Image
              src="/image3/8.png"
              alt="Shoe components"
              fill
              className="object-cover object-center opacity-60"
            />
          </div>
          <div className="relative z-10">
            <p className="text-[11px] text-white/70 font-medium mb-6">
              <span className="text-white mr-1">/</span> Innovation
            </p>
            <h3 className="text-[1.55rem] font-black uppercase leading-tight tracking-tight text-white max-w-[210px]">
              REDEFINING COMFORT IN LUXURY FOOTWEAR
            </h3>
          </div>
          <div className="relative z-10 mt-8 pb-8">
            <Link
              href="/technology"
              className="inline-flex items-center justify-center w-12 h-12 text-white transition-colors duration-200"
              style={{ backgroundColor: "#0C6D7D" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0a5c6a")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0C6D7D")}
            >
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Card 3 — Craftsmanship */}
        <div className="relative flex flex-col justify-between bg-[#679BA1] px-12 pt-8 pb-0 overflow-hidden min-h-[400px]">
          <div>
            <p className="text-[11px] text-white/70 font-medium mb-6">
              <span className="text-white mr-1">/</span> Craftsmanship
            </p>
            <h3 className="text-[1.55rem] font-black uppercase leading-tight tracking-tight text-white max-w-[200px]">
              ARTISAN QUALITY AT MANUFACTURING SCALE
            </h3>
          </div>
          <div className="mt-8 pb-8">
            <Link
              href="/about"
              className="inline-flex items-center justify-center w-12 h-12 text-white transition-colors duration-200"
              style={{ backgroundColor: "#095560" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#073f47")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#095560")}
            >
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
