import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { getNavLinks, getFooterLinks, getSettings, getPrivacySections, getPageHero } from "@/lib/cms";

export const metadata = {
  title: "Privacy Policy | JAGUAPLAST",
  description: "Learn how Jaguaplast collects, uses, and protects your personal information.",
};

export default async function PrivacyPage() {
  const [navLinks, footerLinks, settings, sections, hero] = await Promise.all([
    getNavLinks(), getFooterLinks(), getSettings(),
    getPrivacySections(), getPageHero("privacy"),
  ]);

  const lastUpdated = hero?.subheading ?? settings.privacy_last_updated ?? "January 2026";

  return (
    <main className="min-h-screen bg-background">
      <Header navLinks={navLinks} />

      {/* Hero Banner */}
      <div className="mt-20 relative h-[45vh] w-full overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "#0B7380" }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-16 md:px-12 lg:px-20 lg:pb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60">Legal</p>
          <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tight text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/60">{lastUpdated}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="border-b border-border px-6 py-16 md:px-12 lg:px-20">
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          At Jaguaplast, we are committed to protecting your privacy and handling your personal data
          with transparency and care. This Privacy Policy explains what information we collect, how we
          use it, and your rights with respect to your data when you use our website or interact with
          our business.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="border-t border-border pt-10">
              <h2 className="mb-5 text-lg font-medium text-foreground">{section.title}</h2>
              <div className="space-y-4">
                {(section.content as string[]).map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterSection links={footerLinks} settings={settings} />
    </main>
  );
}
