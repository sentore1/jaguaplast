"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Jaguaplast takes on the challenge of producing luxury footwear components for our premium line with exceptional precision. Their reliable process and attention to detail allow us to maintain the highest standards at all times.",
    name: "AHMED AL-RASHIDI",
    role: "Head of Procurement at Gulf Fashion Group",
  },
  {
    quote:
      "Working with Jaguaplast has elevated our footwear brand. Their mastery of comfort engineering and consistent quality craftsmanship have made them an invaluable partner for our luxury collections.",
    name: "SARAH MENSAH",
    role: "Creative Director at Afrique Luxe",
  },
  {
    quote:
      "From first sketch to full production run, the Jaguaplast team delivers on time and to the highest spec every single time. Their in-house design capabilities are truly world-class.",
    name: "CARLOS FERREIRA",
    role: "Head of Product at Nova Footwear",
  },
];

const partners = [
  "LORO PIANA.",
  "BERLUTI.",
  "MAGNANNI",
  "SANTONI",
  "SCAROSSO.",
];

export function TrustSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="flex flex-col md:flex-row min-h-[340px]">
      {/* Left — dark panel */}
      <div className="flex flex-col justify-between px-8 py-12 md:px-14 md:py-16 md:w-1/2" style={{ backgroundColor: "#235B63" }}>
        <div>
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            BUILT FOR
            <br />
            THOSE WHO
            <br />
            DEMAND LUXURY
          </h2>
          <p className="mt-5 text-sm text-white/60">
            Partnering with luxury brands, fashion houses, and premium retailers across the region to deliver exceptional footwear craftsmanship at every scale.
          </p>
        </div>

        {/* Partner logos / names */}
        <div className="mt-10">
          <div className="mb-5 h-px bg-white/15" />
          <div className="flex flex-wrap items-center gap-6">
            {partners.map((p) => (
              <span
                key={p}
                className="text-[11px] font-bold uppercase tracking-widest text-white/40"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right — teal/accent panel */}
      <div
        className="flex flex-col justify-between px-8 py-12 md:px-14 md:py-16 md:w-1/2"
        style={{ backgroundColor: "#0A7280" }}
      >
        <div>
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            &ldquo;{testimonials[current].quote}&rdquo;
          </p>
          <div className="mt-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white">
              {testimonials[current].name}
            </p>
            <p className="mt-1 text-xs text-white/60">
              {testimonials[current].role}
            </p>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="mt-10 flex items-center gap-3">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/10"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/10"
            aria-label="Next testimonial"
          >
            <ArrowRight size={16} />
          </button>
          <span className="ml-2 text-xs text-white/40">
            {current + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </section>
  );
}
