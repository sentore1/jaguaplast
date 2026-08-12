"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { value: "10+", label: "Years of Manufacturing" },
  { value: "50+", label: "Active Partners" },
  { value: "20M+", label: "Units / Year" },
  { value: "15", label: "Countries Served" },
];

export function ManufacturerHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/other image/WhatsApp Image 2026-07-30 at 7.14.52 PM.jpeg"
        alt="Jaguaplast manufacturing facility"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* Top label */}
      <div
        className={`absolute top-28 left-6 md:left-12 lg:left-20 transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
          <span className="h-px w-8 bg-white/30" />
          Manufacturer Relations
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 pb-0 pt-40 md:px-12 lg:px-20">
        {/* Headline */}
        <div
          className={`transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="max-w-5xl text-6xl font-medium leading-[1.0] tracking-tight text-white md:text-8xl lg:text-[7rem]">
            Built for
            <br />
            <span className="italic font-light">Those Who</span>
            <br />
            Build.
          </h1>
        </div>

        {/* Sub-row */}
        <div
          className={`mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between pb-16 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="max-w-md text-base leading-relaxed text-white/55 md:text-lg">
            Jaguaplast partners with manufacturers, OEMs, and supply chain
            integrators. Precision plastic footwear components — delivered at
            scale, on time, every time.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm font-medium text-black transition-opacity hover:opacity-85"
            >
              Become a Partner
            </Link>
            <Link
              href="#capabilities"
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-white/70 hover:bg-white/10"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className={`relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm transition-all duration-700 delay-300 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group px-6 py-8 md:px-10 ${
                i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <p className="text-4xl font-medium text-white md:text-5xl tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/35">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
