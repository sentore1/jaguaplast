import Link from "next/link";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import {
  TrendingUp,
  Globe2,
  ShieldCheck,
  BarChart2,
  Users,
  FileText,
  ArrowRight,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Investor Relations | JAGUAPLAST",
  description:
    "Explore Jaguaplast's investor relations — growth strategy, governance, sustainability, and partnership opportunities.",
};

const pillars = [
  {
    icon: TrendingUp,
    title: "Consistent Growth",
    description:
      "Jaguaplast has delivered sustained year-on-year growth backed by expanding manufacturing partnerships and new market penetration across Africa.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Our products are distributed across multiple countries. With strategically located manufacturing, we are positioned to scale into both developed and emerging markets.",
  },
  {
    icon: ShieldCheck,
    title: "Strong Governance",
    description:
      "We operate under internationally aligned corporate governance standards — transparent reporting, independent board oversight, and a robust compliance framework.",
  },
  {
    icon: BarChart2,
    title: "Diversified Revenue",
    description:
      "Our revenue spans plastic packaging, industrial containers, agricultural products, and custom moulded components — providing resilient and balanced cash flow.",
  },
  {
    icon: Users,
    title: "Experienced Leadership",
    description:
      "Our executive team brings decades of combined experience in plastics manufacturing, supply chain management, and international trade.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description:
      "We publish audited annual reports, operational updates, and ESG disclosures to keep shareholders fully informed on business performance.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Capacity Expansion",
    desc: "Expanding production capacity through new manufacturing lines and a planned second facility in East Africa.",
  },
  {
    step: "02",
    title: "Product Diversification",
    desc: "Launching a recycled-content product line targeting global brands seeking sustainable packaging partners.",
  },
  {
    step: "03",
    title: "Market Expansion",
    desc: "Entering new markets across East and Central Africa, leveraging existing distribution partnerships.",
  },
  {
    step: "04",
    title: "Strategic Listing",
    desc: "Targeting a primary listing on the Rwanda Stock Exchange (RSE) to access deeper capital markets and improve shareholder liquidity.",
  },
];

const faqs = [
  {
    q: "Is Jaguaplast publicly listed?",
    a: "Jaguaplast is currently a privately held company. We are actively exploring strategic investment partnerships and a future public listing. Interested institutional investors are encouraged to contact our investor relations team.",
  },
  {
    q: "How can I invest in Jaguaplast?",
    a: "We welcome strategic investors, private equity partners, and development finance institutions aligned with our vision. Please reach out via the contact section below and our IR team will respond within 3 business days.",
  },
  {
    q: "What is your dividend policy?",
    a: "As a growth-stage business, profits are reinvested into capacity expansion, R&D, and new market entry. A formal dividend policy will be established upon the completion of our next growth phase.",
  },
  {
    q: "What ESG commitments has Jaguaplast made?",
    a: "We are committed to reducing plastic waste through closed-loop recycling programmes, achieving carbon-neutral operations, and maintaining fair labour standards across all facilities.",
  },
];

export default function InvestorRelationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="mt-20 px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40" style={{ backgroundColor: "#0B7380" }}>
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-white/60">
          Investor Relations
        </p>
        <h1 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight text-white md:text-6xl">
          Building Value.<br />Sustaining Growth.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
          Jaguaplast is one of Africa's leading plastics manufacturers — a disciplined, growth-oriented business creating long-term value for shareholders, partners, and communities.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-white/90"
          style={{ color: "#0B7380" }}
        >
          Contact IR Team <ArrowRight size={14} />
        </a>
      </div>

      {/* ── Investment Case Intro ─────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-36">
        <p className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
          The Investment Case
        </p>
        <p className="max-w-4xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.2rem] lg:leading-snug">
          Jaguaplast occupies a unique position at the intersection of Africa's industrial growth, rising consumer demand, and the global shift toward sustainable packaging — making it a compelling opportunity for forward-looking investors.
        </p>
      </div>

      {/* ── Six Pillars ───────────────────────────────────────────────── */}
      <div className="px-6 pb-24 pt-16 md:px-12 md:pb-32 lg:px-20 bg-muted/30">
        <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">
          Why invest in Jaguaplast
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col gap-4">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#0C6D7D" }}
              >
                <p.icon size={14} color="white" />
              </div>
              <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Growth Roadmap ────────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
          Growth Strategy
        </p>
        <h2 className="mb-14 text-3xl font-medium text-foreground md:text-4xl">
          A clear roadmap to 2030.
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {roadmap.map((item) => (
            <div key={item.step} className="flex gap-6 border-t border-border pt-6">
              <span
                className="shrink-0 text-xs font-bold tracking-widest mt-1"
                style={{ color: "#0C6D7D" }}
              >
                {item.step}
              </span>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 bg-muted/30">
        <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">FAQ</p>
        <h2 className="mb-12 text-3xl font-medium text-foreground md:text-4xl">
          Investor Questions
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-t border-border pt-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">{faq.q}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── IR Contact ────────────────────────────────────────────────── */}
      <div
        id="contact"
        className="mx-6 my-24 md:mx-12 lg:mx-20"
        style={{ borderRadius: "1.5rem", backgroundColor: "#0B7380" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — info */}
          <div className="px-10 py-16 md:py-20 lg:px-14">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60">Get in Touch</p>
            <h2 className="text-3xl font-medium text-white md:text-4xl">
              Talk to our Investor Relations team.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Whether you're considering an investment, seeking partnership opportunities, or requesting further disclosures, our IR team is ready to assist.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
              <Mail size={15} style={{ color: "rgba(255,255,255,0.5)" }} />
              <a
                href="mailto:investors@jaguaplast.com"
                className="hover:text-white transition-colors"
              >
                investors@jaguaplast.com
              </a>
            </div>
            <p className="mt-2 ml-6 text-xs text-white/50">Response within 3 business days</p>
          </div>

          {/* Right — form */}
          <div className="flex items-center justify-center px-10 py-16 lg:px-14 border-t border-white/20 lg:border-t-0 lg:border-l border-white/20">
            <div className="w-full max-w-sm space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Organisation / Fund"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
              />
              <textarea
                rows={3}
                placeholder="Your enquiry…"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
              />
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-3 py-3.5 bg-white text-xs font-bold uppercase tracking-widest transition-colors hover:bg-white/90"
                style={{ color: "#0B7380" }}
              >
                Send Enquiry <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
