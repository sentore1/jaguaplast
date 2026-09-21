"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAPABILITY_IMAGES = [
  "IMG_3058.png",
  "IMG_3064.png",
  "IMG_3070.png",
  "IMG_3073.png",
  "IMG_3086.png",
  "IMG_3094.png",
  "IMG_3123.png",
  "IMG_3125.png",
];

export function CapabilitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAPABILITY_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + CAPABILITY_IMAGES.length) % CAPABILITY_IMAGES.length
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Calculate visible images (show 4 on desktop, 2 on tablet, 1 on mobile)
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % CAPABILITY_IMAGES.length;
      images.push({
        src: CAPABILITY_IMAGES[index],
        index: index,
      });
    }
    return images;
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visibleImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="relative aspect-[3/4] overflow-hidden bg-muted animate-fade-in"
            >
              <Image
                src={`/edited/${img.src}`}
                alt="Jaguaplast manufacturing capability"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 flex items-center justify-center h-12 w-12 bg-white/90 hover:bg-white transition-colors"
        aria-label="Previous slide"
        style={{ color: "#0B7380" }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 flex items-center justify-center h-12 w-12 bg-white/90 hover:bg-white transition-colors"
        aria-label="Next slide"
        style={{ color: "#0B7380" }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {CAPABILITY_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 transition-all ${
              index === currentIndex
                ? "w-8"
                : "w-1.5 opacity-40 hover:opacity-60"
            }`}
            style={{ backgroundColor: "#0B7380" }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
