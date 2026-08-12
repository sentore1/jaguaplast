import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata = {
  title: "Privacy Policy | JAGUAPLAST",
  description:
    "Learn how Jaguaplast collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with our team. This may include your name, email address, phone number, company name, and any details you choose to share about your project.",
      "We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, pages visited, and time spent on pages. This data helps us improve our website and understand how visitors use it.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect to respond to your enquiries and provide the services you request, to send you relevant product updates, manufacturing news, or promotional materials (only where you have consented), to improve and personalise your experience on our website, and to comply with our legal obligations.",
      "We will never sell, rent, or share your personal data with third parties for their own marketing purposes.",
    ],
  },
  {
    title: "3. Data Sharing",
    content: [
      "Jaguaplast may share your information with trusted third-party service providers who assist us in operating our website and conducting our business — such as hosting providers, email platforms, and analytics tools. These partners are contractually obligated to keep your information confidential and use it only for the purposes we specify.",
      "We may also disclose your information if required by law, regulation, or a valid legal process.",
    ],
  },
  {
    title: "4. Data Retention",
    content: [
      "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When your data is no longer needed, we securely delete or anonymise it.",
    ],
  },
  {
    title: "5. Cookies",
    content: [
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and understand where our visitors are coming from. You can control or disable cookies through your browser settings at any time.",
      "Disabling cookies may affect the functionality of certain parts of our website.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete the personal information we hold about you, the right to object to or restrict certain processing activities, and the right to data portability.",
      "To exercise any of these rights, please contact us at info@jaguaplast.com. We will respond to your request within 30 days.",
    ],
  },
  {
    title: "7. Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a revised date. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or how we handle your data, please reach out to us:",
      "Email: info@jaguaplast.com\nPhone: +250788306799\nAddress: Kigali, Rwanda — Industrial Area, Masoro",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="mt-20 relative h-[45vh] w-full overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "#0B7380" }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-16 md:px-12 lg:px-20 lg:pb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60">
            Legal
          </p>
          <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tight text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/60">
            Last updated: January 2026
          </p>
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
            <div key={section.title} className="border-t border-border pt-10">
              <h2 className="mb-5 text-lg font-medium text-foreground">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
