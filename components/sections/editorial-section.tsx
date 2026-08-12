"use client";

const specs = [
  { label: "Recycled Content", value: "Up to 60%" },
  { label: "Carbon Reduction", value: "−42% vs 2019" },
  { label: "Water Saved", value: "18L / Pair" },
  { label: "Landfill Waste", value: "Near Zero" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Newsletter Banner */}
      

      {/* Decorative Icons */}
      <div className="flex items-center justify-center gap-6 pb-20">
        
        
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="p-8 text-center"
          >
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
