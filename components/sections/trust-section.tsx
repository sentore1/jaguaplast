"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Testimonial, Partner } from "@/lib/types/cms";

interface TrustSectionProps {
  testimonials: Testimonial[];
  partners: Partner[];
}

export function TrustSection({ testimonials, partners }: TrustSectionProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  if (!testimonials.length) return null;

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
        </div>

        <div className="mt-10">
          <div className="mb-6 h-px bg-white/15" />
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-white">
                {testimonials[current].name}
              </p>
              <p className="mt-1 text-xs text-white/50">
                {testimonials[current].role}
              </p>
            </div>
            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-white/60 hover:text-white"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={14} />
              </button>
              <span className="text-xs tabular-nums text-white/40">
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-white/60 hover:text-white"
                aria-label="Next testimonial"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
