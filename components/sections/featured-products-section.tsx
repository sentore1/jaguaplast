"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Arch-Support Sole",
    description: "Comfort",
    image: "/image5/16.png",
  },
  {
    title: "All-Season Durability",
    description: "Resilience",
    image: "/image5/7.png",
  },
  {
    title: "Ergonomic Last Design",
    description: "Fit",
    image: "/image5/4.png",
  },
  {
    title: "Cushioned Footbed",
    description: "Comfort",
    image: "/image5/11.png",
  },
  {
    title: "Handstitched Finishing",
    description: "Craftsmanship",
    image: "/image5/6.png",
  },
  {
    title: "Precision Engineering",
    description: "Quality",
    image: "/image5/13.png",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Where Luxury Meets
          <br />
          Unmatched Comfort.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Every detail engineered. Every material chosen with purpose.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group border border-border shadow-md overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
