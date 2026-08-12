"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Technology", href: "/technology" },
    { label: "Gallery", href: "/gallery" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Manufacturers", href: "/manufacturer" },
    { label: "Investor Relations", href: "/investor-relations" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export function FooterSection() {
  return (
    <footer style={{ backgroundColor: "#0B7380" }}>
      {/* Main Footer Content */}
      <div className="border-t border-white/20 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand — left side */}
          <div className="max-w-xs shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/logo white.png"
                alt="JAGUAPLAST"
                width={160}
                height={48}
                className="object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Luxury footwear crafted with precision and passion. Engineered for unmatched comfort and timeless elegance.
            </p>
          </div>

          {/* Right group — Pages + Company + QR Codes, tightly spaced */}
          <div className="flex flex-wrap gap-8 md:gap-10">
            {/* Pages */}
            <div>
              <h4 className="mb-4 text-sm font-medium text-white">Pages</h4>
              <ul className="space-y-3">
                {footerLinks.pages.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
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
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* QR Codes */}
            <div className="flex flex-col gap-4">
              <Image
                src="/qr-code (8).png"
                alt="QR Code 1"
                width={130}
                height={130}
                className="rounded-md bg-white p-1"
              />
              <Image
                src="/qr-code (9).png"
                alt="QR Code 2"
                width={130}
                height={130}
                className="rounded-md bg-white p-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/60">
            2026 JAGUAPLAST. All rights reserved.
          </p>

          


        </div>
      </div>
    </footer>
  );
}
