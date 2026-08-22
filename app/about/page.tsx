import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import {
  getNavLinks, getFooterLinks, getSettings,
  getAboutValues, getStats, getGalleryImages, getPageHero,
} from "@/lib/cms";

export const metadata = {
  title: "About | JAGUAPLAST",
  description: "Learn about Jaguaplast — our story, mission, and commitment to precision shoe manufacturing for global brands.",
};

export default async function AboutPage() {
  const [navLinks, footerLinks, settings, values, allStats, galleryImages, hero] = await Promise.all([
    getNavLinks(), getFooterLinks(), getSettings(),
    getAboutValues(), getStats("about_page"), getGalleryImages("about_page"), getPageHero("about"),
  ]);

  const heroImage = hero?.image_src ?? "/image5/hero-image.png";
  const heroHeadline = hero?.headline ?? "Built on Craftsmanship. Driven by People.";
  const heroSubheading = hero?.subheading ?? "Jaguaplast is dedicated to perfecting the art and science of shoe manufacturing combining skilled craftsmanship with modern engineering and rigorous quality standards.";

  return (
    <main className="min-h-screen bg-background">
      <Header navLinks={navLinks} />

      {/* Hero Banner */}
      <div className="mt-20 relative h-[85vh] w-full overflow-hidden">
        <Image src={heroImage} alt="Jaguaplast shoe factory" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-10 md:px-12 lg:px-20 lg:pb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60">Our Story</p>
          <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl">
            {heroHeadline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">{heroSubheading}</p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          Jaguaplast is a dedicated shoe manufacturer combining expert craftsmanship, advanced materials, and precision engineering to produce footwear that global brands and retailers rely on.
        </p>
      </div>

      {/* Stats */}
      {allStats.length > 0 && (
        <div className="border-t border-border px-6 py-16 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {allStats.map((stat) => (
              <div key={stat.id}>
                <p className="text-4xl font-medium text-foreground md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Who We Are */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">Who We Are</p>
            <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
              A manufacturer you can build a brand on.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Founded with a passion for footwear excellence, Jaguaplast has grown into a full-service shoe manufacturing partner trusted by brands across the globe. From athletic sneakers and casual loafers to work boots and sandals, we have the expertise, capacity, and infrastructure to deliver at every scale.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/image5/12.png" alt="Jaguaplast manufacturing" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Values */}
      {values.length > 0 && (
        <div className="bg-muted/30 px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">Our Values</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.id} className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <div className="px-6 py-16 md:px-12 lg:px-20">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 space-y-4">
            {galleryImages.map((img) => (
              <div key={img.id} className="group relative w-full overflow-hidden break-inside-avoid rounded-xl">
                <div className="relative w-full overflow-hidden aspect-[4/5]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <FooterSection links={footerLinks} settings={settings} />
    </main>
  );
}
