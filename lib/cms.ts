/**
 * CMS data-fetching helpers — all use the Supabase server client.
 * Each function has a fallback so pages still render if Supabase is not yet configured.
 */
import { createClient } from "@/lib/supabase/server";
import type {
  SiteSetting, NavLink, FooterLink, HeroSlide, Stat, PromoCard,
  Testimonial, Partner, Product, CraftsmanshipCard, SustainabilitySpec,
  ManufacturerCapability, ManufacturerProcessStep, ManufacturerReason,
  Sector, GalleryImage, AboutValue, InvestorPillar, InvestorRoadmapItem,
  InvestorFaq, PrivacySection, PageHero,
} from "@/lib/types/cms";

async function db() {
  return createClient();
}

/** Convert site_settings rows to a plain key→value record */
export async function getSettings(): Promise<Record<string, string>> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("site_settings").select("key,value");
    if (!data) return {};
    return Object.fromEntries(data.map((r: SiteSetting) => [r.key, r.value]));
  } catch { return {}; }
}

export async function getNavLinks(): Promise<NavLink[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("nav_links").select("*").eq("active", true).order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getFooterLinks(): Promise<FooterLink[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("footer_links").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getHeroSlide(): Promise<HeroSlide | null> {
  try {
    const supabase = await db();
    const { data } = await supabase
      .from("hero_slides").select("*").eq("active", true)
      .order("sort_order").limit(1).single();
    return data ?? null;
  } catch { return null; }
}

export async function getStats(context?: string): Promise<Stat[]> {
  try {
    const supabase = await db();
    let q = supabase.from("stats").select("*").order("sort_order");
    if (context) q = q.eq("context", context);
    const { data } = await q;
    return data ?? [];
  } catch { return []; }
}

export async function getPromoCards(): Promise<PromoCard[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("promo_cards").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("testimonials").select("*").eq("active", true).order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getPartners(): Promise<Partner[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("partners").select("*").eq("active", true).order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("products").select("*").eq("active", true).order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getCraftsmanshipCards(): Promise<CraftsmanshipCard[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("craftsmanship_cards").select("*").eq("active", true).order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getSustainabilitySpecs(context?: string): Promise<SustainabilitySpec[]> {
  try {
    const supabase = await db();
    let q = supabase.from("sustainability_specs").select("*").order("sort_order");
    if (context) q = q.eq("context", context);
    const { data } = await q;
    return data ?? [];
  } catch { return []; }
}

export async function getManufacturerCapabilities(): Promise<ManufacturerCapability[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("manufacturer_capabilities").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getManufacturerProcessSteps(): Promise<ManufacturerProcessStep[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("manufacturer_process_steps").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getManufacturerReasons(): Promise<ManufacturerReason[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("manufacturer_reasons").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getSectors(): Promise<Sector[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("sectors").select("*").eq("active", true).order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getGalleryImages(context?: string): Promise<GalleryImage[]> {
  try {
    const supabase = await db();
    let q = supabase.from("gallery_images").select("*").eq("active", true).order("sort_order");
    if (context) q = q.eq("context", context);
    const { data } = await q;
    return data ?? [];
  } catch { return []; }
}

export async function getAboutValues(): Promise<AboutValue[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("about_values").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getInvestorPillars(): Promise<InvestorPillar[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("investor_pillars").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getInvestorRoadmap(): Promise<InvestorRoadmapItem[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("investor_roadmap").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getInvestorFaqs(): Promise<InvestorFaq[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("investor_faqs").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getPrivacySections(): Promise<PrivacySection[]> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("privacy_sections").select("*").order("sort_order");
    return data ?? [];
  } catch { return []; }
}

export async function getPageHero(slug: string): Promise<PageHero | null> {
  try {
    const supabase = await db();
    const { data } = await supabase.from("page_heroes").select("*").eq("page_slug", slug).single();
    return data ?? null;
  } catch { return null; }
}
