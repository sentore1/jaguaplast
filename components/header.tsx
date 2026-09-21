"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, Home, Info, Cpu, Package, Phone, Image as ImageIcon, Factory, TrendingUp, Lock } from "lucide-react";
import { GetQuoteModal } from "@/components/get-quote-modal";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import type { NavLink } from "@/lib/types/cms";

const searchItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  { label: "Company Profile", href: "/company-profile", icon: Info },
  { label: "Solutions / Technology", href: "/technology", icon: Cpu },
  { label: "Products", href: "/products", icon: Package },
  { label: "Contact Us", href: "/contact", icon: Phone },
  { label: "Gallery", href: "/gallery", icon: ImageIcon },
  { label: "Manufacturer", href: "/manufacturer", icon: Factory },
  { label: "Investor Relations", href: "/investor-relations", icon: TrendingUp },
  { label: "Privacy Policy", href: "/privacy", icon: Lock },
];

// Fallback nav links used if Supabase is unavailable
const fallbackNavLinks = [
  { id: 1, label: "HOME", href: "/", sort_order: 1, active: true },
  { id: 2, label: "ABOUT", href: "/about", sort_order: 2, active: true },
  { id: 3, label: "COMPANY PROFILE", href: "/company-profile", sort_order: 3, active: true },
  { id: 4, label: "SOLUTIONS", href: "/technology", sort_order: 4, active: true },
  { id: 5, label: "PRODUCTS", href: "/products", sort_order: 5, active: true },
  { id: 6, label: "CONTACT US", href: "/contact", sort_order: 6, active: true },
];

interface HeaderProps {
  navLinks?: NavLink[];
}

export function Header({ navLinks: navLinksProp }: HeaderProps) {
  const navLinks = (navLinksProp && navLinksProp.length > 0 ? navLinksProp : fallbackNavLinks)
    .filter((l) => l.active)
    .sort((a, b) => a.sort_order - b.sort_order);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/" || pathname === "/gallery";

  // Open search with Ctrl+K / Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        {/* Single row: logo | nav | search | CTA button */}
        <div className="flex items-stretch h-20">

          {/* Logo — left side, flush to edge */}
          <Link href="/" className="flex items-center pl-4 pr-10 shrink-0">
            <Image
              src="/image5/logogreen.png"
              alt="Jaguaplast Logo"
              width={580}
              height={160}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav — bottom-aligned, takes all available space */}
          <nav className="hidden md:flex flex-1 items-end justify-center gap-6 pb-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors ${
                    isActive
                      ? isHome ? "text-white" : "text-black"
                      : isHome ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* GET A QUOTE — opens modal, flush right edge, fills full height */}
          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="hidden md:flex items-center gap-3 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-200 shrink-0 cursor-pointer"
            style={{ backgroundColor: "#0C6D7D" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0a5c6a")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0C6D7D")}
          >
            GET A QUOTE
            <ArrowRight size={14} />
          </button>

          {/* Mobile hamburger */}
          <div className="flex items-center ml-auto pr-5 md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-black/80 backdrop-blur-sm px-6 py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`px-4 py-3 text-sm font-semibold tracking-widest uppercase transition-colors ${
                      isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Mobile GET A QUOTE — opens modal */}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="mt-4 flex items-center justify-center gap-2 text-white px-5 py-3 text-xs font-bold uppercase tracking-widest w-full"
                style={{ backgroundColor: "#0C6D7D" }}
              >
                GET A QUOTE <ArrowRight size={13} />
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Quote Modal — rendered outside header so it overlays everything */}
      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      {/* Search Command Palette */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} title="Search" description="Search pages and content">
        <CommandInput placeholder="Search pages…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {searchItems.map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.href}
                  value={item.label}
                  onSelect={() => {
                    setIsSearchOpen(false);
                    router.push(item.href);
                  }}
                >
                  <Icon className="mr-2 size-4 opacity-60" />
                  {item.label}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
