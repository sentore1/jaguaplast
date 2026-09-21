import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSlideshow } from "./hero-slideshow";
import { CapabilitiesCarousel } from "./capabilities-carousel";
import { getNavLinks, getFooterLinks, getSettings } from "@/lib/cms";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Building2,
  Hash,
  Users,
  ShieldCheck,
  ArrowRight,
  Leaf,
  Zap,
  FileText,
  CheckCircle,
  Clock,
  Award,
  Truck,
  Settings,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Company Profile | JAGUAPLAST",
  description:
    "Jaguaplast company profile — legal details, manufacturing capabilities, core values, and contact information.",
};

const CORE_VALUES = [
  {
    Icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every product leaving our facility meets international standards. Our QA pipeline covers raw material inspection through to finished-goods verification.",
  },
  {
    Icon: Leaf,
    title: "Sustainability",
    description:
      "We invest in eco-responsible manufacturing — minimising waste, recycling offcuts, and progressively adopting bio-based and recycled-content materials.",
  },
  {
    Icon: Zap,
    title: "Innovation",
    description:
      "Continuous R&D keeps our processes ahead of industry norms. We develop new compounds, tooling methods, and production efficiencies in-house.",
  },
  {
    Icon: Users,
    title: "People First",
    description:
      "Our workforce is our greatest asset. We invest in skills development, safe working conditions, and employee wellbeing at every level.",
  },
];

const COMPANY_FACTS = [
  { value: "Up to 60%", label: "Recycled Content" },
  { value: "-42% vs 2019", label: "Carbon Reduction" },
  { value: "18L / Pair", label: "Water Saved" },
  { value: "Near Zero", label: "Landfill Waste" },
];

const CAPABILITIES = [
  "Injection Moulding",
  "Blow Moulding",
  "Extrusion",
  "Thermoforming",
  "Rotational Moulding",
  "Tooling & Die Design",
  "In-house Colour Compounding",
  "Custom Packaging Solutions",
];

const SECTORS = [
  "Athletic Shoes",
  "Casual Footwear",
  "Formal Shoes",
  "Boots & Work Shoes",
  "Sandals & Slippers",
  "Children's Footwear",
];

const MANUFACTURING_PROCESS = [
  {
    step: "01",
    title: "Design & Development",
    description: "Client consultation, 3D modeling, and prototype creation to finalize shoe design specifications.",
    icon: Target,
  },
  {
    step: "02",
    title: "Material Selection",
    description: "Sourcing premium raw materials including rubber compounds, textiles, and synthetic components.",
    icon: CheckCircle,
  },
  {
    step: "03",
    title: "Moulding & Cutting",
    description: "Precision injection moulding for soles, cutting patterns for uppers, and component fabrication.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Assembly & Stitching",
    description: "Expert assembly of shoe components, stitching uppers, and attaching soles with industrial-grade adhesives.",
    icon: Users,
  },
  {
    step: "05",
    title: "Quality Control",
    description: "Rigorous testing for durability, comfort, flexibility, and adherence to international quality standards.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Finishing & Packaging",
    description: "Final inspection, branding application, packaging, and preparation for shipment to clients.",
    icon: Truck,
  },
];

const WHY_CHOOSE_US = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient production processes ensure quick delivery without compromising quality.",
  },
  {
    icon: Award,
    title: "Proven Quality",
    description: "ISO-compliant manufacturing with rigorous testing at every production stage.",
  },
  {
    icon: Zap,
    title: "Custom Solutions",
    description: "Flexible manufacturing to meet unique design requirements and specifications.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Eco-friendly materials and processes that reduce environmental impact.",
  },
];

export default async function CompanyProfilePage() {
  const [navLinks, footerLinks, settings] = await Promise.all([
    getNavLinks(),
    getFooterLinks(),
    getSettings(),
  ]);

  const companyName = settings.company_name ?? "JAGUAPLAST LTD";
  const regNumber = settings.reg_number ?? "2010/045321/07";
  const tinNumber = settings.tin_number ?? "123289944";
  const vatNumber = settings.vat_number ?? "4530271845";
  const address =
    settings.company_address ??
    "3554+PJH Masoro Industrial Area, Kigali, Rwanda";
  const phone = settings.company_phone ?? "+250 788 882 888";
  const email = settings.company_email ?? "info@jaguaplast.com";
  const website = settings.company_website ?? "www.jaguaplast.com";

  return (
    <main className="min-h-screen bg-background">
      <Header navLinks={navLinks} />

      {/* ── Hero Slideshow ────────────────────────────────────────────────── */}
      <HeroSlideshow />

      {/* ── Logo + Intro ──────────────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mb-12">
          <Image
            src="/image5/logogreen.png"
            alt="Jaguaplast Logo"
            width={480}
            height={140}
            className="h-24 w-auto object-contain md:h-28 lg:h-32"
          />
        </div>
        <p className="max-w-5xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.4rem] lg:leading-snug">
          Jaguaplast is Rwanda&apos;s premier footwear manufacturer, specializing
          in premium shoe components that combine innovation, sustainability, and
          expert craftsmanship. From precision-molded soles and ergonomic insoles
          to durable upper materials and custom finishing, we deliver complete
          footwear solutions for leading brands across Africa and beyond.
        </p>
      </div>

      {/* ── Stats Strip ───────────────────────────────────────────────────── */}
      <div className="border-t border-b border-border px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {COMPANY_FACTS.map((fact) => (
            <div key={fact.label}>
              <p
                className="text-4xl font-semibold md:text-5xl"
                style={{ color: "#0B7380" }}
              >
                {fact.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Legal & Company Details ───────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">
          Legal &amp; Company Information
        </p>

        <div className="grid grid-cols-1 gap-0 divide-y divide-border border-t border-b border-border lg:grid-cols-2 lg:divide-y-0 lg:divide-x">
          {/* Left column — identity */}
          <div className="py-10 lg:pr-16">
            {/* Logo block inside the card */}
            <div className="mb-10 flex items-center gap-5">
              <div
                className="flex h-16 w-16 items-center justify-center shrink-0"
                style={{ backgroundColor: "#0B7380" }}
              >
                <Image
                  src="/image5/logowhite.png"
                  alt="Jaguaplast icon"
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">
                  {companyName}
                </p>
                <p className="text-sm text-muted-foreground">
                  Registered Rwandan Company
                </p>
              </div>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Building2
                  size={16}
                  className="mt-0.5 shrink-0 text-muted-foreground"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Registered Name
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {companyName}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Hash
                  size={16}
                  className="mt-0.5 shrink-0 text-muted-foreground"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Tax Identification Number (TIN)
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {tinNumber}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right column — contact */}
          <div className="py-10 lg:pl-16">
            <p className="mb-8 text-sm font-medium text-foreground">
              Head Office &amp; Contact Details
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-muted-foreground"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Physical Address
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    {address}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-muted-foreground"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Telephone
                  </p>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-[#0B7380]"
                  >
                    {phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-muted-foreground"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-[#0B7380]"
                  >
                    {email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Globe
                  size={16}
                  className="mt-0.5 shrink-0 text-muted-foreground"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Website
                  </p>
                  <a
                    href={`https://${website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-[#0B7380]"
                  >
                    {website}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Core Values ────────────────────────────────────────────────────── */}
      <div className="bg-muted/30 px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">
          Our Core Values
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value) => {
            const Icon = value.Icon;
            return (
              <div key={value.title} className="flex flex-col gap-4">
                <div
                  className="flex h-10 w-10 items-center justify-center"
                  style={{ backgroundColor: "#0B7380" }}
                >
                  <Icon size={16} color="white" />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Manufacturing Capabilities Carousel ─────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">
          Manufacturing Capabilities
        </p>
        
        <CapabilitiesCarousel />
      </div>

      {/* ── Industries We Serve ─────────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20" style={{ backgroundColor: "#0B7380" }}>
        <p className="mb-14 text-xs uppercase tracking-widest text-white/60">
          Footwear Categories We Manufacture
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {SECTORS.map((sector) => (
            <div
              key={sector}
              className="flex items-center justify-center border border-white/20 bg-white/10 px-6 py-8 text-center backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <p className="text-sm font-medium text-white">{sector}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Facility Gallery ────────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">
          Our Facility
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {[
            'IMG_3130.png',
            'IMG_3132.png',
            'IMG_3139.png',
            'IMG_3140.png',
            'IMG_3141.png',
            'IMG_3142.png',
            'IMG_3147.png',
            'IMG_3165.png',
            'IMG_3167.png',
            'IMG_3168.png',
            'IMG_3169.png',
            'IMG_3170.png',
            'IMG_3174.png',
            'IMG_3180.png',
            'IMG_3188 (1).png',
            '1.png',
            '6.png',
            'shoesjagua.png',
          ].map((img) => (
            <div
              key={img}
              className="relative aspect-square overflow-hidden bg-muted"
            >
              <Image
                src={`/edited/${img}`}
                alt="Jaguaplast manufacturing facility"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Manufacturing Process ────────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">
          Our Manufacturing Process
        </p>
        <div className="grid grid-cols-1 gap-0 divide-y divide-border md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-3">
          {MANUFACTURING_PROCESS.map((process) => {
            const Icon = process.icon;
            return (
              <div key={process.step} className="flex flex-col gap-4 py-10 md:px-8 md:first:pl-0 md:last:pr-0">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center"
                    style={{ backgroundColor: "#0B7380" }}
                  >
                    <Icon size={20} color="white" />
                  </div>
                  <span className="text-4xl font-light text-muted-foreground/30">{process.step}</span>
                </div>
                <h3 className="text-lg font-medium text-foreground">{process.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{process.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Why Choose Jaguaplast ────────────────────────────────────────────── */}
      <div className="bg-muted/30 px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">
          Why Choose Jaguaplast
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="flex flex-col gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center"
                  style={{ backgroundColor: "#0B7380" }}
                >
                  <Icon size={20} color="white" />
                </div>
                <h3 className="text-lg font-medium text-foreground">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Request a Quote CTA ──────────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20" style={{ backgroundColor: "#0B7380" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/60">Get Started</p>
          <h2 className="text-4xl font-medium text-white md:text-5xl">
            Ready to Place an Order?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80">
            Contact our team to discuss your footwear manufacturing needs. We provide
            custom quotes, samples, and technical specifications for all projects.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-sm font-medium transition-opacity hover:opacity-90"
              style={{ color: "#0B7380" }}
            >
              Request a Quote <ArrowRight size={16} />
            </a>
            <a
              href="tel:+250788882888"
              className="inline-flex items-center justify-center gap-3 border-2 border-white bg-transparent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* ── CTA Banner ──────────────────────────────────────────────────────── */}
      <div
        className="px-6 py-24 md:px-12 md:py-32 lg:px-20"
        style={{ backgroundColor: "#0B7380" }}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-white/60">
              Get in Touch
            </p>
            <h2 className="text-3xl font-medium text-white md:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Contact our team to discuss your project requirements. We respond
              within 24 hours.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white px-8 py-4 text-sm font-medium shrink-0 transition-opacity hover:opacity-90"
            style={{ color: "#0B7380" }}
          >
            Contact Us <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <FooterSection links={footerLinks} settings={settings} />
    </main>
  );
}
