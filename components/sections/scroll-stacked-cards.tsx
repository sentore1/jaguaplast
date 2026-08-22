"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CraftsmanshipCard } from "@/lib/types/cms";

interface ScrollStackedCardsProps {
  cards: CraftsmanshipCard[];
}

const STICKY_TOP = 80;
const CARD_PEEK = 18;

export function ScrollStackedCards({ cards }: ScrollStackedCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const pinnedAmount = STICKY_TOP + i * CARD_PEEK - rect.top;
        if (pinnedAmount > 0) {
          const scale = Math.max(0.90, 1 - pinnedAmount * 0.00025);
          card.style.transform = `scale(${scale})`;
          card.style.transformOrigin = "top center";
        } else {
          card.style.transform = "scale(1)";
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={{ backgroundColor: "#0A7280" }}>
      {/* Section heading */}
      <div className="px-6 pt-12 pb-8 md:px-12 md:pt-16 lg:px-20">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">
          OUR CRAFTSMANSHIP
        </p>
        <h2
          className="font-black uppercase leading-[0.95] tracking-tight text-white"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
        >
          LUXURY
          <br />
          CRAFTED TO
          <br />
          PERFECTION
        </h2>
      </div>

      {/* Sticky cards container */}
      <div
        ref={sectionRef}
        style={{ height: `${cards.length * 100 + 20}vh` }}
      >
        <div
          className="sticky flex flex-col gap-0"
          style={{ top: `${STICKY_TOP}px` }}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="relative mx-4 mb-0 overflow-hidden md:mx-8 lg:mx-12"
              style={{
                top: `${i * CARD_PEEK}px`,
                zIndex: i + 1,
                marginTop: i === 0 ? 0 : `-${CARD_PEEK * 2}px`,
              }}
            >
              <div className="grid grid-cols-1 bg-background md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[420px]">
                  <Image
                    src={card.image_src}
                    alt={card.title.replace(/\\n/g, " ")}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
                  <div>
                    <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                      {card.label}
                    </p>
                    <h3 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl whitespace-pre-line">
                      {card.title.replace(/\\n/g, "\n")}
                    </h3>
                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-10">
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-opacity hover:opacity-60"
                    >
                      Learn More <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
