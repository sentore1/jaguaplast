"use client";

import Image from "next/image";
import type { ManufacturerCapability } from "@/lib/types/cms";

const FALLBACK: ManufacturerCapability[] = [
  { id: 1, title: "Injection Moulding",     description: "High-precision injection moulding for complex geometries.", image_src: "/image4/1.png",  specs: ["±0.01 mm tolerance", "Multi-cavity tooling", "500T – 3,200T clamp force"], span_class: "col-span-1", is_tall: false, sort_order: 1 },
  { id: 2, title: "Blow Moulding",          description: "Extrusion and injection blow moulding for hollow forms.", image_src: "/image4/3.png",  specs: ["Up to 50L volume", "HDPE, PP, PET, PVC", "Custom wall thickness"],           span_class: "col-span-1", is_tall: false, sort_order: 2 },
  { id: 3, title: "Thermoforming",          description: "Vacuum and pressure thermoforming for large-area panels.", image_src: "/image4/6.png",  specs: ["2400 × 1200 mm sheets", "ABS, PETG, Acrylic", "Tooling in 2 weeks"],        span_class: "col-span-1", is_tall: false, sort_order: 3 },
  { id: 4, title: "CNC Finishing",          description: "Post-mould CNC machining for precision features.", image_src: "/image4/7.png",  specs: ["5-axis CNC centres", "ISO 2768 fine class", "Full GD&T reporting"],           span_class: "col-span-1", is_tall: false, sort_order: 4 },
  { id: 5, title: "Assembly & Sub-Assembly",description: "In-house assembly with ultrasonic welding and heat staking.", image_src: "/image4/8.png",  specs: ["Ultrasonic welding", "Clean-room assembly", "Outbound QC audit"],          span_class: "col-span-1", is_tall: false, sort_order: 5 },
  { id: 6, title: "Surface Treatment",      description: "Pad printing, spray painting, UV coating, and laser engraving.", image_src: "/image4/43.png", specs: ["Pantone colour matching", "UV & chemical resistance", "Laser engraving"], span_class: "col-span-1", is_tall: false, sort_order: 6 },
];

interface ManufacturerCapabilitiesProps {
  capabilities: ManufacturerCapability[];
}

export function ManufacturerCapabilities({ capabilities }: ManufacturerCapabilitiesProps) {
  const items = capabilities.length > 0 ? capabilities : FALLBACK;
  const sorted = [...items].sort((a, b) => a.sort_order - b.sort_order);

  return (
    <section id="capabilities" className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20">

      {/* Header */}
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Capabilities
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.05]">
            What We Make,
            <br />
            How We Make It.
          </h2>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            Six core manufacturing disciplines, all under one roof, all
            quality-certified to ISO 9001:2015.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-border" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </div>

      {/* Grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((cap) => (
          <div
            key={cap.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={cap.image_src}
                alt={cap.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-base font-semibold text-foreground">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground flex-1">{cap.description}</p>
              {cap.specs.length > 0 && (
                <ul className="mt-2 flex flex-col gap-1.5 border-t border-border pt-4">
                  {cap.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: "#0B7380" }} />
                      {spec}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
