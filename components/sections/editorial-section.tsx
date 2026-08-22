"use client";

import type { SustainabilitySpec } from "@/lib/types/cms";

interface EditorialSectionProps {
  specs: SustainabilitySpec[];
}

export function EditorialSection({ specs }: EditorialSectionProps) {
  const filtered = specs.filter((s) => s.context === "homepage_editorial").sort((a, b) => a.sort_order - b.sort_order);

  return (
    <section className="bg-background">
      <div className="flex items-center justify-center gap-6 pb-20" />

      {/* Specs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {filtered.map((spec) => (
          <div key={spec.id} className="p-8 text-center">
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-medium text-foreground text-4xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
