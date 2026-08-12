import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { ManufacturerHero } from "@/components/sections/manufacturer-hero";
import { ManufacturerPartners } from "@/components/sections/manufacturer-partners";
import { ManufacturerProcess } from "@/components/sections/manufacturer-process";
import { ManufacturerCapabilities } from "@/components/sections/manufacturer-capabilities";
import { ManufacturerContact } from "@/components/sections/manufacturer-contact";

export const metadata = {
  title: "Manufacturer Relations | JAGUAPLAST",
  description:
    "Partner with Jaguaplast. Explore our manufacturing capabilities, OEM programs, and supply chain solutions.",
};

export default function ManufacturerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ManufacturerHero />
      <ManufacturerPartners />
      <ManufacturerProcess />
      <ManufacturerCapabilities />

      {/* ── Quality Callout Banner ── */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src="/other image/WhatsApp Image 2026-07-30 at 7.14.47 PM.jpeg"
          alt="Jaguaplast production line"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#0B7380" }} />

        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-20">
          <span className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-8 bg-white/30" />
            ISO 9001:2015 Certified
          </span>
          <h2 className="max-w-3xl text-4xl font-medium text-white md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Quality isn't a
            <br />
            <span className="italic font-light">checkbox.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
            It's every measurement, every batch, every delivery. Our zero-defect
            policy isn't a goal — it's a guarantee.
          </p>
          <Link
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 bg-white px-8 py-4 text-sm font-medium text-black transition-opacity hover:opacity-85"
          >
            Start a Conversation
            <span className="text-base leading-none">→</span>
          </Link>
        </div>
      </div>

      {/* ── Trust Badges Strip ── */}
      <div className="border-y border-border bg-background">
        <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { value: "Zero-Defect", label: "Quality Policy" },
            { value: "4–6 Weeks", label: "Avg. Time to Delivery" },
            { value: "ISO 9001", label: "2015 Certified" },
            { value: "15+", label: "Countries Supplied" },
          ].map((item, i) => (
            <div key={item.label} className="flex flex-col gap-1 px-8 py-10">
              <p className="text-2xl font-medium text-foreground md:text-3xl">{item.value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <ManufacturerContact />
      <FooterSection />
    </main>
  );
}
