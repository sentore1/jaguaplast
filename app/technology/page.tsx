import Image from "next/image";
import { Header } from "@/components/header";
import { TechnologySection } from "@/components/sections/technology-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata = {
  title: "Technology | JAGUAPLAST",
  description:
    "Discover the advanced materials and precision engineering behind every Jaguaplast product.",
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="mt-20 relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/image4/23.png"
          alt="Jaguaplast technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-10 md:px-12 lg:px-20 lg:pb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60">
            Sustainable Innovation
          </p>
          <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl">
            Engineering a Greener Step Forward
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Recycled compounds, bio-based materials, and zero-waste moulding — built into every product we make.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-8 border-t border-border pt-16 md:grid-cols-3">
          {[
            { label: "Recycled Materials", value: "Up to 60% post-consumer recycled PVC & TPR compounds in every sole component." },
            { label: "Zero-Waste Moulding", value: "Closed-loop injection moulding — scrap regrind re-enters the production cycle." },
            { label: "Eco Certification", value: "RoHS & REACH compliant. No heavy metals, phthalates, or harmful plasticisers." },
          ].map((item) => (
            <div key={item.label}>
              <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
                {item.label}
              </p>
              <p className="text-base leading-relaxed text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <TechnologySection />
      <EditorialSection />
      <FooterSection />
    </main>
  );
}
