import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { getNavLinks, getFooterLinks, getSettings, getGalleryImages, getPageHero } from "@/lib/cms";

export const metadata = {
  title: "Gallery | JAGUAPLAST",
  description: "Browse the Jaguaplast product and manufacturing gallery.",
};

export default async function GalleryPage() {
  const [navLinks, footerLinks, settings, allImages, hero] = await Promise.all([
    getNavLinks(), getFooterLinks(), getSettings(),
    getGalleryImages("gallery_page"), getPageHero("gallery"),
  ]);

  const heroImage = hero?.image_src ?? "/image5/heroimages5.png";
  const heroHeadline = hero?.headline ?? "Gallery";
  const heroSubheading = hero?.subheading ?? "Every angle, every texture, every finish — a closer look at what Jaguaplast builds.";

  return (
    <main className="min-h-screen bg-background">
      <Header navLinks={navLinks} />

      {/* Hero */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <Image src={heroImage} alt="Gallery hero" fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/50">Visual Collection</p>
          <h1 className="text-6xl font-medium leading-none tracking-tight text-white md:text-8xl lg:text-[9rem]">
            {heroHeadline}
          </h1>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/60 md:max-w-sm">{heroSubheading}</p>
        </div>
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
              key={img.id}
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
                  priority={i < 4}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border mx-6 mb-16 md:mx-12 lg:mx-20" />
      <div className="px-6 pb-24 text-center md:px-12 lg:px-20">
        <p className="text-2xl font-medium text-foreground md:text-3xl">Like what you see?</p>
        <p className="mt-3 text-sm text-muted-foreground">Browse our full product range or get in touch with our team.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="/products" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-75">
            View Products
          </a>
          <a href="/manufacturer" className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted">
            Partner With Us
          </a>
        </div>
      </div>

      <FooterSection links={footerLinks} settings={settings} />
    </main>
  );
}
