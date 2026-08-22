import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { FooterSection } from "@/components/sections/footer-section";
import { getFooterLinks, getSettings, getProducts } from "@/lib/cms";

export const metadata = {
  title: "Products | JAGUAPLAST",
  description:
    "Explore Jaguaplast's full range of high-quality plastic shoe products — lightweight, durable, and engineered for every step.",
};

export default async function ProductsPage() {
  const [footerLinks, settings, products] = await Promise.all([getFooterLinks(), getSettings(), getProducts()]);
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="mt-20 relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/shoes flyer/5.png"
          alt="Jaguaplast products"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 pt-16 md:px-12 lg:px-20">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60">
            Collection
          </p>
          <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl">
            Our Products
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Lightweight, flexible, and built to last. Every pair starts with precision-grade plastic manufacturing.
          </p>
          <Link
            href="#collection"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/90"
          >
            View Collection
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Sections */}
      <div id="collection">
        <PhilosophySection />
        <FeaturedProductsSection products={products} />
      </div>

      <FooterSection links={footerLinks} settings={settings} />
    </main>
  );
}
