"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Stat, PromoCard } from "@/lib/types/cms";

interface StatsCardsSectionProps {
  stats: Stat[];
  promoCards: PromoCard[];
}

export function StatsCardsSection({ stats, promoCards }: StatsCardsSectionProps) {
  const topStats = stats.filter((s) => s.context === "homepage_top").sort((a, b) => a.sort_order - b.sort_order);
  const cards = promoCards.sort((a, b) => a.sort_order - b.sort_order);

  return (
    <section className="px-0 py-0 bg-white">

      {/* TOP ROW: tagline + stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200">
        {/* Cell 1 — tagline */}
        <div className="px-12 py-20 md:border-r border-gray-200 min-h-[400px] flex flex-col">
          <p className="text-[13px] font-black uppercase leading-snug tracking-tight text-gray-900 max-w-[220px]">
            LUXURY FOOTWEAR ENGINEERED FOR COMFORT, CRAFTED FOR THOSE WHO DEMAND EXCELLENCE IN EVERY STEP.
          </p>
        </div>

        {/* Stat cells */}
        {topStats.map((stat, i) => (
          <div
            key={stat.id}
            className={`px-12 py-20 ${i < topStats.length - 1 ? "md:border-r border-gray-200" : ""} min-h-[400px] flex flex-col`}
          >
            <p className="text-[3.2rem] font-black leading-none text-gray-900 tracking-tight">{stat.value}</p>
            <p className="mt-3 text-[12px] text-gray-500 leading-snug max-w-[220px]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM ROW: promo cards */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`relative flex flex-col justify-between px-12 pt-8 pb-0 overflow-hidden min-h-[400px] ${i < cards.length - 1 ? "md:border-r border-gray-200" : ""}`}
            style={{ backgroundColor: card.bg_color }}
          >
            {/* Optional decorative image */}
            {card.image_src && (
              <div className="absolute bottom-16 right-6 w-40 h-40 pointer-events-none select-none">
                <Image
                  src={card.image_src}
                  alt={card.title}
                  fill
                  className="object-cover object-center opacity-60"
                />
              </div>
            )}

            <div className="relative z-10">
              <p className="text-[11px] text-white/70 font-medium mb-6">
                <span className="text-white mr-1">/</span> {card.eyebrow}
              </p>
              <h3 className="text-[1.55rem] font-black uppercase leading-tight tracking-tight text-white max-w-[210px]">
                {card.title}
              </h3>
            </div>

            <div className="relative z-10 mt-8 pb-8">
              <Link
                href={card.href}
                className="inline-flex items-center justify-center w-12 h-12 text-white transition-colors duration-200"
                style={{ backgroundColor: card.bg_color }}
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
