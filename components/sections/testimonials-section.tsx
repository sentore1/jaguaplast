"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/edited/IMG_3130.png", alt: "Jaguaplast luxury footwear" },
  { src: "/edited/IMG_3132.png", alt: "Jaguaplast craftsmanship" },
  { src: "/edited/IMG_3139.png", alt: "Jaguaplast footwear collection" },
  { src: "/edited/IMG_3167.png", alt: "Jaguaplast product detail" },
  { src: "/edited/IMG_3080.png", alt: "Jaguaplast manufacturing" },
  { src: "/edited/6.png",        alt: "Jaguaplast collection" },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          Jaguaplast unites artisan craftsmanship with advanced manufacturing technology
          creating luxury footwear that delivers uncompromising comfort, refined elegance, and enduring quality in every single pair.
        </p>
      </div>

      {/* Slider */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: index === current ? "2rem" : "0.375rem",
                backgroundColor: index === current ? "white" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
