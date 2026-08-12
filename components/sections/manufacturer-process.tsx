"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a detailed technical consultation to understand your component requirements, tolerances, volumes, and timeline. No generic proposals — just a focused conversation about your exact needs.",
    tag: "Week 1",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our engineering team produces rapid prototypes using advanced CAD tooling. You receive physical samples before any full production run — no surprises, no wasted budgets.",
    tag: "Week 2 – 3",
  },
  {
    number: "03",
    title: "Quality Validation",
    description:
      "Every prototype undergoes dimensional inspection, material testing, and stress analysis against your exact specification sheets. Sign-off only when you're satisfied.",
    tag: "Week 3 – 4",
  },
  {
    number: "04",
    title: "Production Ramp",
    description:
      "Once approved, we scale to full production. Dedicated line managers ensure consistency across every batch and every delivery window — from first run to ten-thousandth.",
    tag: "Week 5+",
  },
  {
    number: "05",
    title: "Ongoing Supply & Support",
    description:
      "A dedicated account manager handles repeat orders, inventory forecasting, and continuous improvement. Your supply chain keeps moving, and we keep optimising it.",
    tag: "Ongoing",
  },
];

export function ManufacturerProcess() {
  return (
    <section className="bg-foreground overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">

        {/* Left — sticky image panel */}
        <div className="relative hidden lg:block">
          <div className="sticky top-0 h-screen overflow-hidden">
            <Image
              src="/other image/WhatsApp Image 2026-07-30 at 7.14.59 PM.jpeg"
              alt="Manufacturing process"
              fill
              className="object-cover opacity-50"
            />
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />

            {/* Overlay text */}
            <div className="absolute bottom-16 left-10 right-16">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/35">
                How It Works
              </p>
              <p className="text-4xl font-medium text-white leading-[1.1] tracking-tight">
                From Brief
                <br />
                to Batch
                <br />
                Delivery.
              </p>
              <div className="mt-10 flex flex-col gap-3">
                {["ISO 9001:2015 Certified", "Zero-defect policy", "On-time delivery guarantee"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 text-xs text-white/50"
                  >
                    <span className="h-px w-6 bg-white/30" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right — steps */}
        <div className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">

          {/* Mobile heading */}
          <div className="mb-16 lg:hidden">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/35">
              How It Works
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-white leading-[1.1]">
              From Brief to
              <br />
              Batch Delivery.
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-0 divide-y divide-white/10 border-t border-white/10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group py-10 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-start gap-6 md:gap-10">
                  {/* Number */}
                  <span className="mt-0.5 min-w-[2rem] text-xs font-medium tabular-nums text-white/20 group-hover:text-white/40 transition-colors">
                    {step.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="text-lg font-medium text-white">{step.title}</h3>
                      <span className="shrink-0 text-xs uppercase tracking-widest text-white/25 border border-white/10 px-3 py-1">
                        {step.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/45 group-hover:text-white/60 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <p className="text-xs uppercase tracking-widest text-white/25 mb-3">
              Average time to first delivery
            </p>
            <p className="text-3xl font-medium text-white">4 – 6 Weeks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
