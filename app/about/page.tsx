import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata = {
  title: "About | JAGUAPLAST",
  description:
    "Learn about Jaguaplast — our story, mission, and commitment to precision shoe manufacturing for global brands.",
};

const values = [
  {
    title: "Craftsmanship",
    description:
      "Every pair we produce is shaped with precision — from last design to final stitching — ensuring fit, comfort, and finish that brands trust.",
  },
  {
    title: "Durability",
    description:
      "Our materials and construction methods are tested for thousands of wear cycles, delivering footwear that holds up in real-world conditions.",
  },
  {
    title: "Innovation",
    description:
      "From ergonomic sole engineering to sustainable material sourcing, we continuously evolve our processes to stay ahead of industry standards.",
  },
  {
    title: "Partnership",
    description:
      "We work side-by-side with brands, retailers, and OEM buyers to bring their footwear vision to life — on time, on spec, at scale.",
  },
];

const stats = [
  { value: "25+", label: "Years of manufacturing" },
  { value: "40M+", label: "Pairs produced per year" },
  { value: "18", label: "Countries served" },
  { value: "120+", label: "Active brand partners" },
];

const galleryImages = [
  { src: "/image5/1.png", alt: "Jaguaplast shoe production line" },
  { src: "/image5/2.png", alt: "Handcrafted footwear finishing" },
  { src: "/image5/4.png", alt: "Quality control inspection" },
  { src: "/image5/5.png", alt: "Sole assembly workshop" },
  { src: "/image5/6.png", alt: "Footwear material cutting" },
  { src: "/image5/7.png", alt: "Finished shoe collection" },
  { src: "/image5/8.png", alt: "Jaguaplast factory floor" },
  { src: "/image5/11.png", alt: "Jaguaplast craftsmanship" },
  { src: "/image5/12.png", alt: "Shoe design and development" },
  { src: "/image5/13.png", alt: "Precision stitching process" },
  { src: "/image5/14.png", alt: "Footwear assembly line" },
  { src: "/image5/16.png", alt: "Sole bonding process" },
  { src: "/image5/17.png", alt: "Finished footwear collection" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="mt-20 relative h-[85vh] w-full overflow-hidden">
        <Image
          src="/image5/hero-image.png"
          alt="Jaguaplast shoe factory"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-10 md:px-12 lg:px-20 lg:pb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60">
            Our Story
          </p>
          <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl">
            Built on Craftsmanship. Driven by People.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Jaguaplast is dedicated to perfecting the art and science of shoe manufacturing combining skilled craftsmanship with modern engineering and rigorous quality standards.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          Jaguaplast is a dedicated shoe manufacturer combining expert craftsmanship, advanced materials, and precision engineering to produce footwear that global brands and retailers rely on.
        </p>
      </div>



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
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our facility is equipped with state-of-the-art machinery for cutting, stitching, lasting, and finishing all operated by a skilled workforce dedicated to consistency and quality. We support OEM and ODM programmes, giving brands the flexibility to bring their own designs or collaborate with our in-house development team.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/image3/3.png"
              alt="Jaguaplast manufacturing facility"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 bg-muted/30">
        <p className="mb-16 text-xs uppercase tracking-widest text-muted-foreground">
          What drives us
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="mb-4 text-xl font-medium text-foreground">{v.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Inside Jaguaplast</p>
        <h2 className="mb-12 text-3xl font-medium text-foreground md:text-4xl">
          From factory floor to finished pair.
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div
        className="mx-6 mb-24 overflow-hidden md:mx-12 lg:mx-20"
        style={{ borderRadius: "1.5rem", backgroundColor: "#0B7380" }}
      >
        <div className="px-10 py-16 text-center md:py-20">
          <h2 className="text-3xl font-medium text-white md:text-4xl">
            Ready to build your next shoe line with us?
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Whether you're a brand seeking an OEM manufacturing partner or a retailer looking to source quality footwear, we're ready to deliver.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/manufacturer"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium transition hover:bg-white/90"
              style={{ color: "#0B7380" }}
            >
              Become a Partner
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:border-white/70"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
