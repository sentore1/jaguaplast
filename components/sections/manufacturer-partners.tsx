"use client";

import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "Consistent Quality",
    description:
      "Every component leaves our facility having passed dimensional inspection, material testing, and surface audit — batch after batch.",
  },
  {
    number: "02",
    title: "Scalable Volume",
    description:
      "From 1,000-unit pilots to 20 million-unit annual runs, our production infrastructure flexes to match your exact demand curve.",
  },
  {
    number: "03",
    title: "Dedicated Account Team",
    description:
      "One point of contact. Your account manager owns your forecast, your tooling, and your delivery schedule end to end.",
  },
  {
    number: "04",
    title: "Fast Lead Times",
    description:
      "Rapid prototyping in days, production ramp in weeks. Our streamlined qualification process gets you to market faster.",
  },
];

const sectors = [
  "Footwear OEM",
  "Sports & Outdoor",
  "Fashion & Lifestyle",
  "Safety & Industrial",
  "Medical Footwear",
  "Children's Footwear",
];

const photos = [
  "/other image/WhatsApp Image 2026-07-30 at 7.14.24 PM.jpeg",
  "/other image/WhatsApp Image 2026-07-30 at 7.14.33 PM.jpeg",
  "/other image/WhatsApp Image 2026-07-30 at 7.14.45 PM.jpeg",
  "/other image/WhatsApp Image 2026-07-30 at 7.14.38 PM.jpeg",
];

export function ManufacturerPartners() {
  return (
    <section className="bg-background overflow-hidden">

      {/* ── Value Proposition ── */}
      <div className="px-6 pt-24 pb-0 md:px-12 md:pt-32 lg:px-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Why Partner With Us
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.05]">
              The Partner You've
              <br />
              Been Looking For.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            Jaguaplast supplies precision plastic footwear components to brands
            and OEMs across 15 countries — built on trust, speed, and zero
            compromise on quality.
          </p>
        </div>

        {/* Reason cards — horizontal list */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-border border-t border-border md:grid-cols-2 md:divide-y-0 md:divide-x">
          {reasons.map((r) => (
            <div
              key={r.number}
              className="group flex flex-col gap-4 px-0 py-10 md:px-10 md:first:pl-0 md:last:pr-0 hover:bg-muted/30 transition-colors"
            >
              <span className="text-xs font-medium tabular-nums text-muted-foreground/40">
                {r.number}
              </span>
              <h3 className="text-lg font-medium text-foreground">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sectors We Serve ── */}
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Sectors We Serve
        </p>
        <div className="flex flex-wrap gap-3">
          {sectors.map((s) => (
            <span
              key={s}
              className="border border-border px-4 py-2 text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ── Photo Strip ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {photos.map((src, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${
              i === 0 ? "aspect-[3/4]" : i === 3 ? "aspect-[3/4]" : "aspect-square"
            }`}
          >
            <Image
              src={src}
              alt={`Manufacturing facility ${i + 1}`}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>

    </section>
  );
}
