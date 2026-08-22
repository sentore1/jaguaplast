import { getFooterLinks, getSettings } from "@/lib/cms";
import ContactClient from "./contact-client";

export const metadata = {
  title: "Contact | JAGUAPLAST",
  description: "Get in touch with the Jaguaplast team.",
};

export default async function ContactPage() {
  const [footerLinks, settings] = await Promise.all([getFooterLinks(), getSettings()]);
  return <ContactClient footerLinks={footerLinks} settings={settings} />;
}
