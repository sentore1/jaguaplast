"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

const allImages = [
  { src: "/image5/1.png", alt: "Jaguaplast 1", wide: false },
  { src: "/image5/2.png", alt: "Jaguaplast 2", wide: true },
  { src: "/image5/4.png", alt: "Jaguaplast 3", wide: false },
  { src: "/image5/5.png", alt: "Jaguaplast 4", wide: false },
  { src: "/image5/6.png", alt: "Jaguaplast 5", wide: true },
  { src: "/image5/7.png", alt: "Jaguaplast 6", wide: false },
  { src: "/image5/8.png", alt: "Jaguaplast 7", wide: false },
  { src: "/image5/11.png", alt: "Jaguaplast 8", wide: true },
  { src: "/image5/12.png", alt: "Jaguaplast 9", wide: false },
  { src: "/image5/13.png", alt: "Jaguaplast 10", wide: false },
  { src: "/image5/14.png", alt: "Jaguaplast 11", wide: true },
  { src: "/image5/15.png", alt: "Jaguaplast 12", wide: false },
  { src: "/image5/16.png", alt: "Jaguaplast 13", wide: false },
  { src: "/image5/17.png", alt: "Jaguaplast 14", wide: true },
  { src: "/image5/hero-image.png", alt: "Jaguaplast 16", wide: true },
  { src: "/image5/heroimage2.png", alt: "Jaguaplast 17", wide: true },
  { src: "/image5/heroimages5.png", alt: "Jaguaplast 18", wide: true },
  { src: "/image5/ChatGPT Image Aug 12, 2026, 02_27_30 PM.png", alt: "Jaguaplast 19", wide: false },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/image5/heroimages5.png"
          alt="Gallery hero"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/50">
            Visual Collection
          </p>
          <h1 className="text-6xl font-medium leading-none tracking-tight text-white md:text-8xl lg:text-[9rem]">
            Gallery
          </h1>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/60 md:max-w-sm">
            Every angle, every texture, every finish — a closer look at what Jaguaplast builds.
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-10 w-px bg-white/30" />
          <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 space-y-4">
          {allImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="group relative w-full overflow-hidden break-inside-avoid"
              style={{ borderRadius: "1rem" }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: img.wide ? "16/9" : "4/5" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="border-t border-border mx-6 mb-16 md:mx-12 lg:mx-20" />
      <div className="px-6 pb-24 text-center md:px-12 lg:px-20">
        <p className="text-2xl font-medium text-foreground md:text-3xl">
          Like what you see?
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Browse our full product range or get in touch with our team.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/products"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-75"
          >
            View Products
          </a>
          <a
            href="/manufacturer"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Partner With Us
          </a>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
