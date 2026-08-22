"use client";

import Link from "next/link";
import Image from "next/image";
import type { FooterLink, SiteSetting } from "@/lib/types/cms";

interface FooterSectionProps {
  links: FooterLink[];
  settings: Record<string, string>;
}

export function FooterSection({ links, settings }: FooterSectionProps) {
  const pagesLinks = links.filter((l) => l.grp === "pages").sort((a, b) => a.sort_order - b.sort_order);
  const companyLinks = links.filter((l) => l.grp === "company").sort((a, b) => a.sort_order - b.sort_order);

  return (
    <footer style={{ backgroundColor: "#0B7380" }}>
      <div className="border-t border-white/20 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

          {/* Brand */}
          <div className="max-w-xs shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src={settings.logo_white_src || "/logo white.png"}
                alt="JAGUAPLAST"
                width={160}
                height={48}
                className="object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {settings.footer_tagline || "Luxury footwear crafted with precision and passion."}
            </p>
          </div>

          {/* Links + QR */}
          <div className="flex flex-wrap gap-8 md:gap-10">
            {/* Pages */}
            <div>
              <h4 className="mb-4 text-sm font-medium text-white">Pages</h4>
              <ul className="space-y-3">
                {pagesLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-medium text-white">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* QR Codes */}
            {(settings.qr_code_1_src || settings.qr_code_2_src) && (
              <div>
                <h4 className="mb-4 text-sm font-medium text-white">Scan Us</h4>
                <div className="flex gap-4">
                  {settings.qr_code_1_src && (
                    <div className="relative h-20 w-20 bg-white p-1">
                      <Image src={settings.qr_code_1_src} alt="QR Code 1" fill className="object-contain p-1" />
                    </div>
                  )}
                  {settings.qr_code_2_src && (
                    <div className="relative h-20 w-20 bg-white p-1">
                      <Image src={settings.qr_code_2_src} alt="QR Code 2" fill className="object-contain p-1" />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} JAGUAPLAST. All rights reserved.
          </p>
          <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
