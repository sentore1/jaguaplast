"use client";

import Image from "next/image";

const capabilities = [
  {
    title: "Injection Moulding",
    description:
      "High-precision injection moulding for complex geometries across a full range of thermoplastics and engineering polymers.",
    specs: ["±0.01 mm tolerance", "Multi-cavity tooling", "500T – 3,200T clamp force"],
    image: "/image4/1.png",
    span: "col-span-1 md:col-span-2",
    tall: true,
  },
  {
    title: "Blow Moulding",
    description:
      "Extrusion and injection blow moulding for hollow forms — containers, ducts, and complex fluid-path components.",
    specs: ["Up to 50L volume", "HDPE, PP, PET, PVC", "Custom wall thickness"],
    image: "/image4/3.png",
    span: "col-span-1",
    tall: false,
  },
  {
    title: "Thermoforming",
    description:
      "Vacuum and pressure thermoforming for large-area panels and enclosures with rapid, cost-effective tooling.",
    specs: ["2400 × 1200 mm sheets", "ABS, PETG, Acrylic", "Tooling in 2 weeks"],
    image: "/image4/6.png",
    span: "col-span-1",
    tall: false,
  },
  {
    title: "CNC Finishing",
    description:
      "Post-mould CNC machining for precision holes, threads, and surface features beyond mould capability.",
    specs: ["5-axis CNC centres", "ISO 2768 fine class", "Full GD&T reporting"],
    image: "/image4/7.png",
    span: "col-span-1",
    tall: false,
  },
  {
    title: "Assembly & Sub-Assembly",
    description:
      "In-house assembly lines with ultrasonic welding, heat staking, and mechanical fastening for multi-component products.",
    specs: ["Ultrasonic welding", "Clean-room assembly", "Outbound QC audit"],
    image: "/image4/8.png",
    span: "col-span-1",
    tall: false,
  },
  {
    title: "Surface Treatment",
    description:
      "Pad printing, spray painting, UV coating, and laser engraving for branding and functional surface requirements.",
    specs: ["Pantone colour matching", "UV & chemical resistance", "Laser engraving"],
    image: "/image4/43.png",
    span: "col-span-1 md:col-span-2",
    tall: false,
  },
];

export function ManufacturerCapabilities() {
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

      {/* Capabilities grid */}
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((cap, i) => (
          <div
            key={cap.title}
            className={`group relative bg-background overflow-hidden ${cap.span} ${
              i === 0 ? "lg:row-span-2" : ""
            }`}
          >
            {/* Image */}
            <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" />

              {/* Floating title over image */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-base font-semibold text-white">{cap.title}</h3>
              </div>
            </div>

            {/* Text below image */}
            <div className="p-6">
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.specs.map((spec) => (
                  <span
                    key={spec}
                    className="border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
