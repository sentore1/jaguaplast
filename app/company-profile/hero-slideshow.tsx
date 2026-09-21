"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HERO_IMAGES = [
  "/edited/IMG_3170.png",
  "/edited/IMG_3168.png",
  "/edited/IMG_3167.png",
  "/edited/IMG_3165.png",
  "/edited/IMG_3140.png",
  "/edited/IMG_3139.png",
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 relative h-[90vh] w-full overflow-hidden">
      {/* Images */}
      {HERO_IMAGES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Jaguaplast manufacturing facility ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-10 md:px-12 lg:px-20 lg:pb-16">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/60">
          Company Profile
        </p>
        <h1 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl">
          Crafting Excellence.
          <br />
          One Step at a Time.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90">
          Since 2024, Jaguaplast has been at the forefront of premium footwear
          manufacturing in Rwanda. We specialize in precision-engineered shoe
          components, from durable rubber soles and cushioned insoles to
          high-quality upper materials and finishing touches. Every product we
          manufacture combines cutting-edge technology with expert craftsmanship,
          delivering footwear solutions that meet the highest standards of
          comfort, durability, and style for global brands.
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
