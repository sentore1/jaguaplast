"use client";

import Image from "next/image";
import type { ManufacturerReason, Sector } from "@/lib/types/cms";

const photos = [
  "/other image/mfg-1.jpg",
  "/other image/mfg-3.jpg",
  "/other image/mfg-5.jpg",
  "/other image/mfg-4.jpg",
];

interface ManufacturerPartnersProps {
  reasons: ManufacturerReason[];
  sectors: Sector[];
}

export function ManufacturerPartners({ reasons, sectors }: ManufacturerPartnersProps) {
  return (
    <section className="bg-background overflow-hidden">

      {/* Value Proposition */}
      <div className="px-6 pt-24 pb-16 md:px-12 md:pt-32 lg:px-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Why Partner With Us
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.05]">
              The Partner You&apos;ve
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

        {/* Reason cards — 2x2 grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.id}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-6 transition-shadow hover:shadow-md"
            >
              <span
                className="text-3xl font-semibold tracking-tight"
                style={{ color: "#0B7380" }}
              >
                {r.number}
              </span>
              <h3 className="text-base font-semibold text-foreground">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sectors We Serve */}
      <div className="px-6 pb-16 md:px-12 lg:px-20">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Sectors We Serve
        </p>
        <div className="flex flex-wrap gap-3">
          {sectors.map((s) => (
            <span
              key={s.id}
              className="rounded-full border border-border px-5 py-2 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background cursor-default"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* Photo Strip — equal height, full bleed */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {photos.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={src}
              alt={`Manufacturing facility ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
