import Image from "next/image";
import { Header } from "@/components/header";
import { TechnologySection } from "@/components/sections/technology-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { FooterSection } from "@/components/sections/footer-section";
import {
  getNavLinks, getFooterLinks, getSettings,
  getSustainabilitySpecs, getPageHero,
} from "@/lib/cms";

export const metadata = {
  title: "Technology | JAGUAPLAST",
  description: "Discover the advanced materials and precision engineering behind every Jaguaplast product.",
};

export default async function TechnologyPage() {
  const [navLinks, footerLinks, settings, techSpecs, editorialSpecs, hero] = await Promise.all([
    getNavLinks(), getFooterLinks(), getSettings(),
    getSustainabilitySpecs("technology_page"),
    getSustainabilitySpecs("homepage_editorial"),
    getPageHero("technology"),
  ]);

  const heroImage = hero?.image_src ?? "/image4/23.png";
  const heroHeadline = hero?.headline ?? "Engineering a Greener Step Forward";
  const heroSubheading = hero?.subheading ?? "Recycled compounds, bio-based materials, and zero-waste moulding — built into every product we make.";

  return (
    <main className="min-h-screen bg-background">
      <Header navLinks={navLinks} />

      {/* Hero Banner */}
      <div className="mt-20 relative h-[80vh] w-full overflow-hidden">
        <Image src={heroImage} alt="Jaguaplast technology" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-10 md:px-12 lg:px-20 lg:pb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60">Sustainable Innovation</p>
          <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl">
            {heroHeadline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">{heroSubheading}</p>
        </div>
      </div>

      {/* Tech specs grid */}
      {techSpecs.length > 0 && (
        <div className="px-6 py-16 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-8 border-t border-border pt-16 md:grid-cols-3">
            {techSpecs.map((item) => (
              <div key={item.id}>
                <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
                <p className="text-base leading-relaxed text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <TechnologySection />
      <EditorialSection specs={editorialSpecs} />
      <FooterSection links={footerLinks} settings={settings} />
    </main>
  );
}
