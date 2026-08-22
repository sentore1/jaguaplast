"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import type { GalleryImage } from "@/lib/types/cms";

const FALLBACK_IMAGES: GalleryImage[] = [
  { id: 1, src: "/shoes flyer/1.png", alt: "Product flyer 1", wide: false, context: "homepage_gallery", position: "left", sort_order: 1, active: true },
  { id: 2, src: "/shoes flyer/2.png", alt: "Product flyer 2", wide: false, context: "homepage_gallery", position: "left", sort_order: 2, active: true },
  { id: 3, src: "/shoes flyer/3.png", alt: "Product flyer 3", wide: false, context: "homepage_gallery", position: "left", sort_order: 3, active: true },
  { id: 4, src: "/shoes flyer/4.png", alt: "Product flyer 4", wide: false, context: "homepage_gallery", position: "left", sort_order: 4, active: true },
  { id: 5, src: "/shoes flyer/5.png", alt: "Product flyer 5", wide: false, context: "homepage_gallery", position: "left", sort_order: 5, active: true },
  { id: 6, src: "/shoes flyer/6.png", alt: "Product flyer 6", wide: false, context: "homepage_gallery", position: "left", sort_order: 6, active: true },
];

interface GallerySectionProps {
  images?: GalleryImage[];
}

export function GallerySection({ images }: GallerySectionProps) {
  const activeImages = images && images.length > 0 ? images : FALLBACK_IMAGES;

  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [translateX, setTranslateX] = useState(0);
  const rafRef = useRef<number | null>(null);

  // Calculate section height based on content width
  useEffect(() => {
    const calculateHeight = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const totalHeight = viewportHeight + (containerWidth - viewportWidth);
      setSectionHeight(`${totalHeight}px`);
    };

    const timer = setTimeout(calculateHeight, 100);
    window.addEventListener("resize", calculateHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  const updateTransform = useCallback(() => {
    if (!galleryRef.current || !containerRef.current) return;

    const rect = galleryRef.current.getBoundingClientRect();
    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const totalScrollDistance = containerWidth - viewportWidth;
    const scrolled = Math.max(0, -rect.top);
    const progress = Math.min(1, scrolled / totalScrollDistance);
    const newTranslateX = progress * -totalScrollDistance;

    setTranslateX(newTranslateX);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateTransform]);

  return (
    <section
      id="gallery"
      ref={galleryRef}
      className="relative bg-background"
      style={{ height: sectionHeight }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center">
          {/* Horizontal scrolling container */}
          <div
            ref={containerRef}
            className="flex gap-6 px-6"
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              WebkitTransform: `translate3d(${translateX}px, 0, 0)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              perspective: 1000,
              WebkitPerspective: 1000,
              touchAction: "pan-y",
            }}
          >
            {activeImages.map((image, index) => (
              <div
                key={image.id}
                className="relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden md:w-[60vw] lg:w-[45vw]"
                style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
