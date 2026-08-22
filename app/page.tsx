import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsCardsSection } from "@/components/sections/stats-cards-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { ScrollStackedCards } from "@/components/sections/scroll-stacked-cards";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustSection } from "@/components/sections/trust-section";
import { FooterSection } from "@/components/sections/footer-section";
import {
  getNavLinks, getFooterLinks, getSettings, getHeroSlide,
  getStats, getPromoCards, getTestimonials, getPartners,
  getProducts, getCraftsmanshipCards, getSustainabilitySpecs,
  getGalleryImages,
} from "@/lib/cms";

// Fallback hero slide used when Supabase is not yet configured
const FALLBACK_HERO = {
  id: 1,
  headline_line1: "LUXURY",
  headline_line2: "FOOTWEAR",
  subheading: "CRAFTED FOR COMFORT. DESIGNED FOR EXCELLENCE.",
  image_src: "/image5/21.jfif",
  image_alt: "Jaguaplast precision plastic components",
  cta_label: "EXPLORE COLLECTION",
  cta_href: "/products",
  sort_order: 1,
  active: true,
};

export default async function Home() {
  const [
    navLinks, footerLinks, settings, heroSlide,
    stats, promoCards, testimonials, partners,
    products, cards, specs, galleryImages, techImages,
  ] = await Promise.all([
    getNavLinks(), getFooterLinks(), getSettings(), getHeroSlide(),
    getStats(), getPromoCards(), getTestimonials(), getPartners(),
    getProducts(), getCraftsmanshipCards(), getSustainabilitySpecs(),
    getGalleryImages("homepage_gallery"),
    getGalleryImages("homepage_technology"),
  ]);

  return (
    <main className="min-h-screen bg-background">
      <Header navLinks={navLinks} />
      <div>
        <HeroSection slide={heroSlide ?? FALLBACK_HERO} />
        <StatsCardsSection stats={stats} promoCards={promoCards} />
        <PhilosophySection />
        <FeaturedProductsSection products={products} />
        <ScrollStackedCards cards={cards} />
        <TechnologySection images={techImages} />
        <GallerySection images={galleryImages} />
        <EditorialSection specs={specs} />
        <TestimonialsSection />
        <TrustSection testimonials={testimonials} partners={partners} />
        <FooterSection links={footerLinks} settings={settings} />
      </div>
    </main>
  );
}
