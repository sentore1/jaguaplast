"use client";

import { FadeImage } from "@/components/fade-image";
import type { Product } from "@/lib/types/cms";

interface FeaturedProductsSectionProps {
  products: Product[];
}

const FALLBACK_PRODUCTS: Product[] = [
  { id: 1, title: "Arch-Support Sole",      description: "Comfort",       image_src: "/image5/16.png",  sort_order: 1, active: true },
  { id: 2, title: "All-Season Durability",  description: "Resilience",    image_src: "/image5/7.png",   sort_order: 2, active: true },
  { id: 3, title: "Ergonomic Last Design",  description: "Fit",           image_src: "/image5/4.png",   sort_order: 3, active: true },
  { id: 4, title: "Cushioned Footbed",      description: "Comfort",       image_src: "/image5/11.png",  sort_order: 4, active: true },
  { id: 5, title: "Handstitched Finishing", description: "Craftsmanship", image_src: "/image5/6.png",   sort_order: 5, active: true },
  { id: 6, title: "Precision Engineering",  description: "Quality",       image_src: "/image5/13.png",  sort_order: 6, active: true },
];

export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  // Deduplicate by image_src to handle repeated DB seeds, then fall back to
  // static list if nothing came back from the database.
  const seen = new Set<string>();
  const unique = products.filter((p) => {
    if (seen.has(p.image_src)) return false;
    seen.add(p.image_src);
    return true;
  });

  const items = unique.length > 0 ? unique : FALLBACK_PRODUCTS;

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
        {items.map((product) => (
          <div key={`${product.id}-${product.image_src}`} className="group border border-border shadow-md overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <FadeImage
                src={product.image_src || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20" />
    </section>
  );
}
