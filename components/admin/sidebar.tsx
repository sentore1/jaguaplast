"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutDashboard, Type, Users, Star, Link2, Image as ImageIcon,
  Package, Layers, BarChart2, Cpu, Settings, Factory, TrendingUp,
  BookOpen, Shield, LogOut, ChevronRight, Globe,
} from "lucide-react";

const NAV_SECTIONS = [
  {
    label: "Site",
    items: [
      { label: "Dashboard",     href: "/admin",                    icon: LayoutDashboard },
      { label: "Site Settings", href: "/admin/settings",           icon: Settings },
      { label: "Nav Links",     href: "/admin/table/nav_links",    icon: Link2 },
      { label: "Footer Links",  href: "/admin/table/footer_links", icon: Link2 },
    ],
  },
  {
    label: "Homepage",
    items: [
      { label: "Hero Slides",     href: "/admin/table/hero_slides",         icon: ImageIcon },
      { label: "Stats",           href: "/admin/table/stats",               icon: BarChart2 },
      { label: "Promo Cards",     href: "/admin/table/promo_cards",         icon: Layers },
      { label: "Craftsmanship",   href: "/admin/table/craftsmanship_cards", icon: Cpu },
      { label: "Eco Specs",       href: "/admin/table/sustainability_specs",icon: Globe },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "Products",        href: "/admin/table/products",    icon: Package },
      { label: "Gallery Images",  href: "/admin/table/gallery_images", icon: ImageIcon },
    ],
  },
  {
    label: "Social Proof",
    items: [
      { label: "Testimonials",   href: "/admin/table/testimonials", icon: Star },
      { label: "Partners",       href: "/admin/table/partners",     icon: Users },
    ],
  },
  {
    label: "Manufacturer",
    items: [
      { label: "Capabilities",   href: "/admin/table/manufacturer_capabilities",    icon: Factory },
      { label: "Process Steps",  href: "/admin/table/manufacturer_process_steps",   icon: Layers },
      { label: "Why Partner",    href: "/admin/table/manufacturer_reasons",         icon: Users },
      { label: "Sectors",        href: "/admin/table/sectors",                      icon: Type },
    ],
  },
  {
    label: "Pages",
    items: [
      { label: "Page Heroes",    href: "/admin/table/page_heroes",      icon: ImageIcon },
      { label: "About Values",   href: "/admin/table/about_values",     icon: BookOpen },
      { label: "Investor Pillars",href: "/admin/table/investor_pillars",icon: TrendingUp },
      { label: "Investor Roadmap",href: "/admin/table/investor_roadmap",icon: TrendingUp },
      { label: "Investor FAQs",  href: "/admin/table/investor_faqs",    icon: TrendingUp },
      { label: "Privacy Sections",href: "/admin/table/privacy_sections",icon: Shield },
    ],
  },
];

interface AdminSidebarProps {
  userEmail: string;
}

export function AdminSidebar({ userEmail }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-gray-100 px-5">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="relative h-8 w-28">
            <Image src="/image5/logogreen.png" alt="Jaguaplast" fill className="object-contain object-left" />
          </div>
        </Link>
        <span className="ml-2 rounded bg-[#0B7380]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#0B7380]">
          CMS
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label} className="mb-5">
            <p className="mb-1.5 px-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {section.label}
            </p>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-[#0B7380]/10 text-[#0B7380] font-medium"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <Icon size={15} className="shrink-0" />
                      <span className="flex-1 truncate">{item.label}</span>
                      {isActive && <ChevronRight size={12} className="shrink-0 opacity-50" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User + Logout */}
      <div className="border-t border-gray-100 p-4">
        <div className="mb-3 flex items-center gap-3 px-1">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B7380] text-xs font-bold text-white">
            {(userEmail?.[0] ?? "A").toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-gray-800">{userEmail}</p>
            <p className="text-[10px] text-gray-400">Administrator</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={14} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
