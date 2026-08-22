// ─── CMS TypeScript types for all Supabase tables ───────────────────────────

export interface SiteSetting {
  id: number;
  key: string;
  value: string;
}

export interface NavLink {
  id: number;
  label: string;
  href: string;
  sort_order: number;
  active: boolean;
}

export interface FooterLink {
  id: number;
  label: string;
  href: string;
  group: "pages" | "company";
  sort_order: number;
}

export interface HeroSlide {
  id: number;
  headline_line1: string;
  headline_line2: string;
  subheading: string;
  image_src: string;
  image_alt: string;
  cta_label: string;
  cta_href: string;
  sort_order: number;
  active: boolean;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  context: string;
  sort_order: number;
}

export interface PromoCard {
  id: number;
  eyebrow: string;
  title: string;
  href: string;
  bg_color: string;
  image_src: string | null;
  sort_order: number;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  sort_order: number;
  active: boolean;
}

export interface Partner {
  id: number;
  name: string;
  sort_order: number;
  active: boolean;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image_src: string;
  sort_order: number;
  active: boolean;
}

export interface CraftsmanshipCard {
  id: number;
  label: string;
  title: string;
  description: string;
  image_src: string;
  href: string;
  sort_order: number;
  active: boolean;
}

export interface SustainabilitySpec {
  id: number;
  label: string;
  value: string;
  context: string;
  sort_order: number;
}

export interface ManufacturerCapability {
  id: number;
  title: string;
  description: string;
  image_src: string;
  specs: string[];
  span_class: string;
  is_tall: boolean;
  sort_order: number;
}

export interface ManufacturerProcessStep {
  id: number;
  step_number: string;
  title: string;
  description: string;
  tag: string;
  sort_order: number;
}

export interface ManufacturerReason {
  id: number;
  number: string;
  title: string;
  description: string;
  sort_order: number;
}

export interface Sector {
  id: number;
  name: string;
  sort_order: number;
  active: boolean;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  wide: boolean;
  context: string;
  position?: string;
  sort_order: number;
  active: boolean;
}

export interface AboutValue {
  id: number;
  title: string;
  description: string;
  sort_order: number;
}

export interface InvestorPillar {
  id: number;
  icon_name: string;
  title: string;
  description: string;
  sort_order: number;
}

export interface InvestorRoadmapItem {
  id: number;
  step: string;
  title: string;
  description: string;
  sort_order: number;
}

export interface InvestorFaq {
  id: number;
  question: string;
  answer: string;
  sort_order: number;
}

export interface PrivacySection {
  id: number;
  title: string;
  content: string[];
  sort_order: number;
}

export interface PageHero {
  id: number;
  page_slug: string;
  eyebrow: string;
  headline: string;
  subheading: string;
  image_src: string | null;
  image_alt: string | null;
  bg_color: string | null;
  cta_label: string | null;
  cta_href: string | null;
}
