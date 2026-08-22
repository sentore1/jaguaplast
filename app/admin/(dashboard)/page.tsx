import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  Type, Users, Star, Link2, Image as ImageIcon, Package, Layers,
  BarChart2, Cpu, Settings, Factory, TrendingUp, BookOpen, Shield, Globe,
  ExternalLink, ArrowRight,
} from "lucide-react";

const CMS_TABLES = [
  { table: "hero_slides",                  label: "Hero Slides",         icon: ImageIcon, color: "#0B7380" },
  { table: "stats",                        label: "Stats",               icon: BarChart2, color: "#0B7380" },
  { table: "promo_cards",                  label: "Promo Cards",         icon: Layers,    color: "#0B7380" },
  { table: "craftsmanship_cards",          label: "Craftsmanship Cards", icon: Cpu,       color: "#0B7380" },
  { table: "sustainability_specs",         label: "Eco Specs",           icon: Globe,     color: "#0B7380" },
  { table: "products",                     label: "Products",            icon: Package,   color: "#095560" },
  { table: "gallery_images",              label: "Gallery Images",       icon: ImageIcon, color: "#095560" },
  { table: "testimonials",                 label: "Testimonials",        icon: Star,      color: "#235B63" },
  { table: "partners",                     label: "Partners",            icon: Users,     color: "#235B63" },
  { table: "manufacturer_capabilities",    label: "Capabilities",        icon: Factory,   color: "#679BA1" },
  { table: "manufacturer_process_steps",   label: "Process Steps",       icon: Layers,    color: "#679BA1" },
  { table: "manufacturer_reasons",         label: "Why Partner",         icon: Users,     color: "#679BA1" },
  { table: "sectors",                      label: "Sectors",             icon: Type,      color: "#679BA1" },
  { table: "page_heroes",                  label: "Page Heroes",         icon: ImageIcon, color: "#0a5c6a" },
  { table: "about_values",                 label: "About Values",        icon: BookOpen,  color: "#0a5c6a" },
  { table: "investor_pillars",             label: "Investor Pillars",    icon: TrendingUp,color: "#0a5c6a" },
  { table: "investor_roadmap",             label: "Investor Roadmap",    icon: TrendingUp,color: "#0a5c6a" },
  { table: "investor_faqs",               label: "Investor FAQs",        icon: TrendingUp,color: "#0a5c6a" },
  { table: "privacy_sections",             label: "Privacy Sections",    icon: Shield,    color: "#0a5c6a" },
  { table: "nav_links",                    label: "Nav Links",           icon: Link2,     color: "#333" },
  { table: "footer_links",                 label: "Footer Links",        icon: Link2,     color: "#333" },
];

async function getRowCounts(tables: string[]): Promise<Record<string, number>> {
  try {
    const supabase = await createClient();
    const counts: Record<string, number> = {};
    await Promise.all(
      tables.map(async (t) => {
        const { count } = await supabase.from(t).select("*", { count: "exact", head: true });
        counts[t] = count ?? 0;
      })
    );
    return counts;
  } catch {
    return {};
  }
}

export default async function AdminDashboard() {
  const counts = await getRowCounts(CMS_TABLES.map((t) => t.table));

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Content Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage all website content. Changes are live immediately after saving.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
          >
            <ExternalLink size={14} />
            View Site
          </Link>
          <Link
            href="/admin/settings"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#0B7380" }}
          >
            <Settings size={14} />
            Site Settings
          </Link>
        </div>
      </div>

      {/* Quick stats banner */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { label: "Total Tables", value: CMS_TABLES.length },
          { label: "Products", value: counts["products"] ?? "—" },
          { label: "Testimonials", value: counts["testimonials"] ?? "—" },
          { label: "Gallery Images", value: counts["gallery_images"] ?? "—" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-3xl font-semibold text-gray-900">{item.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      {/* All content tables grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CMS_TABLES.map((item) => {
          const Icon = item.icon;
          const count = counts[item.table];
          return (
            <Link
              key={item.table}
              href={`/admin/table/${item.table}`}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-[#0B7380]/40 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon size={16} style={{ color: item.color }} />
                </div>
                {count !== undefined && (
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                    {count} rows
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-gray-900">{item.label}</p>
              <p className="mt-0.5 text-xs text-gray-400 font-mono">{item.table}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#0B7380] opacity-0 transition-opacity group-hover:opacity-100">
                Edit content <ArrowRight size={12} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
