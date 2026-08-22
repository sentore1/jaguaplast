import Link from "next/link";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import {
  TrendingUp, Globe2, ShieldCheck, BarChart2, Users, FileText, ArrowRight, Mail,
} from "lucide-react";
import {
  getNavLinks, getFooterLinks, getSettings,
  getInvestorPillars, getInvestorRoadmap, getInvestorFaqs, getPageHero,
} from "@/lib/cms";
import type { InvestorPillar } from "@/lib/types/cms";

export const metadata = {
  title: "Investor Relations | JAGUAPLAST",
  description: "Explore Jaguaplast's investor relations — growth strategy, governance, sustainability, and partnership opportunities.",
};

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  TrendingUp, Globe2, ShieldCheck, BarChart2, Users, FileText,
};

function PillarIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name] ?? TrendingUp;
  return <Icon size={14} color="white" />;
}

export default async function InvestorRelationsPage() {
  const [navLinks, footerLinks, settings, pillars, roadmap, faqs, hero] = await Promise.all([
    getNavLinks(), getFooterLinks(), getSettings(),
    getInvestorPillars(), getInvestorRoadmap(), getInvestorFaqs(), getPageHero("investor"),
  ]);

  const heroHeadline = hero?.headline ?? "Building Value. Sustaining Growth.";
  const heroSubheading = hero?.subheading ?? "Jaguaplast is one of Africa's leading plastics manufacturers — a disciplined, growth-oriented business creating long-term value for shareholders, partners, and communities.";

  return (
    <main className="min-h-screen bg-background">
      <Header navLinks={navLinks} />

      {/* Hero */}
      <div className="mt-20 px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40" style={{ backgroundColor: "#0B7380" }}>
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-white/60">Investor Relations</p>
        <h1 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight text-white md:text-6xl">
          {heroHeadline.split(".").map((part, i, arr) => (
            <span key={i}>{part}{i < arr.length - 1 ? "." : ""}{i < arr.length - 1 ? <br /> : null}</span>
          ))}
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">{heroSubheading}</p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-white/90"
          style={{ color: "#0B7380" }}
        >
          Contact IR Team <ArrowRight size={14} />
        </a>
      </div>

      {/* Investment Case Intro */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-36">
        <p className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">The Investment Case</p>
        <p className="max-w-4xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.2rem] lg:leading-snug">
          Jaguaplast occupies a unique position at the intersection of Africa&apos;s industrial growth, rising consumer demand, and the global shift toward sustainable packaging — making it a compelling opportunity for forward-looking investors.
        </p>
      </div>

      {/* Six Pillars */}
      {pillars.length > 0 && (
        <div className="px-6 pb-24 pt-16 md:px-12 md:pb-32 lg:px-20 bg-muted/30">
          <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">Why invest in Jaguaplast</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.id} className="flex flex-col gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl" style={{ backgroundColor: "#0C6D7D" }}>
                  <PillarIcon name={p.icon_name} />
                </div>
                <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Growth Roadmap */}
      {roadmap.length > 0 && (
        <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">Growth Roadmap</p>
          <div className="grid grid-cols-1 gap-0 divide-y divide-border border-t border-border md:grid-cols-2 md:divide-y-0 md:divide-x">
            {roadmap.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 py-10 md:px-10 md:first:pl-0 md:last:pr-0">
                <span className="text-xs font-medium tabular-nums text-muted-foreground/40">{item.step}</span>
                <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <div className="bg-muted/30 px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <p className="mb-14 text-xs uppercase tracking-widest text-muted-foreground">FAQs</p>
          <div className="mx-auto max-w-3xl space-y-10">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-t border-border pt-8">
                <h3 className="mb-4 text-base font-medium text-foreground">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div id="contact" className="px-6 py-24 md:px-12 md:py-32 lg:px-20" style={{ backgroundColor: "#0B7380" }}>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-white/60">Get in Touch</p>
            <h2 className="text-3xl font-medium text-white md:text-4xl">Ready to Invest?</h2>
            <p className="mt-3 max-w-md text-sm text-white/60">
              Reach our investor relations team directly. We respond within 3 business days.
            </p>
          </div>
          <a
            href="mailto:investors@jaguaplast.com"
            className="inline-flex items-center gap-3 bg-white px-8 py-4 text-sm font-medium shrink-0 transition-opacity hover:opacity-85"
            style={{ color: "#0B7380" }}
          >
            <Mail size={16} />
            {settings.investor_email ?? "investors@jaguaplast.com"}
          </a>
        </div>
      </div>

      <FooterSection links={footerLinks} settings={settings} />
    </main>
  );
}
