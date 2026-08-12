"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    label: "SOLE ENGINEERING",
    title: "Precision Sole\nCrafting",
    description:
      "Our state-of-the-art sole manufacturing facility delivers high-precision footwear components at scale. We handle complex contoured geometries, superior cushioning profiles, and a wide range of premium compounds to meet your exact comfort specifications.",
    image: "/image5/6.png",
    href: "/technology",
  },
  {
    label: "UPPER CONSTRUCTION",
    title: "Premium Upper\nAssembly",
    description:
      "From single-layer to structured multi-layer uppers, our construction capabilities produce durable, breathable footwear with refined surface finish and consistent quality — for both luxury and performance applications.",
    image: "/image5/2.png",
    href: "/technology",
  },
  {
    label: "LAST & DESIGN",
    title: "In-House Last\n& Design",
    description:
      "Our footwear engineering team designs and develops precision lasts in-house, ensuring faster lead times, superior fit accuracy, and seamless iteration from concept prototype to full production run.",
    image: "/image5/4.png",
    href: "/technology",
  },
  {
    label: "QUALITY ASSURANCE",
    title: "Rigorous Quality\nControl",
    description:
      "Every pair undergoes comprehensive testing and inspection. Our quality management system ensures consistent comfort, dimensional accuracy, and material integrity across every batch — so every step feels exceptional.",
    image: "/image5/5.png",
    href: "/technology",
  },
];

// Each card sticks at this top value — they all pile up at the same anchor
const STICKY_TOP = 80; // px from top of viewport
// How much each card is offset downward so you can see cards beneath
const CARD_PEEK = 18; // px

export function ScrollStackedCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        // How many px has this card been pinned (scrolled past its sticky point)
        const pinnedAmount = STICKY_TOP + i * CARD_PEEK - rect.top;

        if (pinnedAmount > 0) {
          // Shrink slightly as later cards stack on top
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
      {/* Section heading — scrolls normally */}
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

      {/* Sticky cards container — tall enough to scroll through all cards */}
      <div
        ref={sectionRef}
        className="relative px-6 md:px-12 lg:px-20"
        /* Each card needs ~70vh of scroll space to feel distinct */
        style={{ paddingBottom: "8vh" }}
      >
        {cards.map((card, i) => (
          <div
            key={card.label}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="sticky will-change-transform"
            style={{
              top: `${STICKY_TOP + i * CARD_PEEK}px`,
              zIndex: i + 1,
              marginTop: i === 0 ? 0 : `-${CARD_PEEK * 2}px`,
            }}
          >
            <div className="flex flex-col overflow-hidden bg-white shadow-2xl md:flex-row" style={{ minHeight: "42vh" }}>
              {/* Text side */}
              <div className="flex flex-1 flex-col justify-between p-8 md:p-12 lg:p-16">
                <div>
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A7280]">
                    {card.label}
                  </p>
                  <h3
                    className="font-black uppercase leading-[1.0] tracking-tight text-zinc-900"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
                  >
                    {card.title.split("\n").map((line, j, arr) => (
                      <span key={j}>
                        {line}
                        {j < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-500">
                    {card.description}
                  </p>
                </div>

                <a
                  href={card.href}
                  className="group mt-10 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 transition-colors hover:text-[#E8440A]"
                >
                  LEARN MORE
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Image side */}
              <div className="relative h-56 w-full md:h-auto md:w-[45%] lg:w-[48%]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
