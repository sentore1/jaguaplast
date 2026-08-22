"use client";

import Image from "next/image";
import type { ManufacturerProcessStep } from "@/lib/types/cms";

const FALLBACK: ManufacturerProcessStep[] = [
  { id: 1, step_number: "01", title: "Initial Consultation",    description: "We begin with a detailed technical consultation to understand your component requirements, tolerances, volumes, and timeline.", tag: "Week 1",    sort_order: 1 },
  { id: 2, step_number: "02", title: "Design & Prototyping",    description: "Our engineering team produces rapid prototypes using advanced CAD tooling. You receive physical samples before any full production run.", tag: "Week 2–3",  sort_order: 2 },
  { id: 3, step_number: "03", title: "Quality Validation",      description: "Every prototype undergoes dimensional inspection, material testing, and stress analysis against your exact specification sheets.", tag: "Week 3–4",  sort_order: 3 },
  { id: 4, step_number: "04", title: "Production Ramp",         description: "Once approved, we scale to full production. Dedicated line managers ensure consistency across every batch and delivery window.", tag: "Week 5+",   sort_order: 4 },
  { id: 5, step_number: "05", title: "Ongoing Supply & Support","description": "A dedicated account manager handles repeat orders, inventory forecasting, and continuous improvement.", tag: "Ongoing",  sort_order: 5 },
];

interface ManufacturerProcessProps {
  steps: ManufacturerProcessStep[];
}

export function ManufacturerProcess({ steps }: ManufacturerProcessProps) {
  const items = steps.length > 0 ? steps : FALLBACK;
  const sorted = [...items].sort((a, b) => a.sort_order - b.sort_order);

  return (
    <section className="bg-[#0B1A1C] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">

        {/* Left — sticky image panel */}
        <div className="relative hidden lg:block">
          <div className="sticky top-0 h-screen overflow-hidden">
            <Image
              src="/other image/mfg-8.jpg"
              alt="Manufacturing process"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1A1C]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A1C]/90 via-transparent to-transparent" />

            <div className="absolute bottom-16 left-10 right-10">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
                How It Works
              </p>
              <p className="text-4xl font-medium text-white leading-[1.1] tracking-tight">
                From Brief
                <br />
                to Batch
                <br />
                Delivery.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {["ISO 9001:2015 Certified", "Zero-defect policy", "On-time delivery guarantee"].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 text-xs text-white/45">
                    <span className="h-px w-6 shrink-0" style={{ backgroundColor: "#0B7380" }} />
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
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">How It Works</p>
            <p className="text-4xl font-medium text-white leading-[1.1] tracking-tight">
              From Brief to Batch Delivery.
            </p>
          </div>

          <div className="flex flex-col">
            {sorted.map((step, i) => (
              <div
                key={step.id}
                className="group relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {i < sorted.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-px bg-white/10" />
                )}

                {/* Step number bubble */}
                <div
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs font-semibold tabular-nums text-white/60"
                  style={{ backgroundColor: "#0B7380" + "22" }}
                >
                  {step.step_number}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1.5">
                  <div className="mb-2 flex items-center gap-3 flex-wrap">
                    <h3 className="text-base font-semibold text-white">{step.title}</h3>
                    <span
                      className="rounded-full px-3 py-0.5 text-[10px] uppercase tracking-widest text-white/60"
                      style={{ backgroundColor: "#0B7380" + "33", border: "1px solid #0B738033" }}
                    >
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
