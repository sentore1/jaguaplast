/** All tables the CMS is allowed to manage. Used to guard dynamic routes. */
export const ALLOWED_TABLES = [
  "hero_slides",
  "stats",
  "promo_cards",
  "craftsmanship_cards",
  "sustainability_specs",
  "products",
  "gallery_images",
  "testimonials",
  "partners",
  "manufacturer_capabilities",
  "manufacturer_process_steps",
  "manufacturer_reasons",
  "sectors",
  "page_heroes",
  "about_values",
  "investor_pillars",
  "investor_roadmap",
  "investor_faqs",
  "privacy_sections",
  "nav_links",
  "footer_links",
  "site_settings",
] as const;

const LABELS: Record<string, string> = {
  hero_slides:                 "Hero Slides",
  stats:                       "Stats",
  promo_cards:                 "Promo Cards",
  craftsmanship_cards:         "Craftsmanship Cards",
  sustainability_specs:        "Eco Specs",
  products:                    "Products",
  gallery_images:              "Gallery Images",
  testimonials:                "Testimonials",
  partners:                    "Partners",
  manufacturer_capabilities:   "Capabilities",
  manufacturer_process_steps:  "Process Steps",
  manufacturer_reasons:        "Why Partner",
  sectors:                     "Sectors",
  page_heroes:                 "Page Heroes",
  about_values:                "About Values",
  investor_pillars:            "Investor Pillars",
  investor_roadmap:            "Investor Roadmap",
  investor_faqs:               "Investor FAQs",
  privacy_sections:            "Privacy Sections",
  nav_links:                   "Nav Links",
  footer_links:                "Footer Links",
  site_settings:               "Site Settings",
};

export function tableLabel(table: string): string {
  return LABELS[table] ?? table.replace(/_/g, " ");
}

/** Fields that should render as a textarea instead of a single-line input */
export const TEXTAREA_FIELDS = new Set([
  "description", "content", "quote", "answer", "subheading",
  "label", "value", "headline", "tag",
]);

/** Fields that should render as a checkbox (boolean) */
export const BOOLEAN_FIELDS = new Set([
  "active", "wide", "is_tall",
]);

/** Fields that are JSON arrays (text[]) */
export const ARRAY_FIELDS = new Set([
  "specs", "content",
]);

/**
 * Fields that should render as a <select> dropdown.
 * Key = "table.column", value = allowed options.
 */
export const SELECT_FIELDS: Record<string, string[]> = {
  "footer_links.grp": ["pages", "company"],
};

/**
 * Static column definitions for every table.
 * Used as a fallback when a table is empty and columns can't be inferred
 * from an existing row.
 */
export const TABLE_COLUMNS: Record<string, string[]> = {
  site_settings:               ["key", "value"],
  nav_links:                   ["label", "href", "sort_order", "active"],
  footer_links:                ["label", "href", "grp", "sort_order"],
  hero_slides:                 ["headline_line1", "headline_line2", "subheading", "image_src", "image_alt", "cta_label", "cta_href", "sort_order", "active"],
  stats:                       ["value", "label", "context", "sort_order"],
  promo_cards:                 ["eyebrow", "title", "href", "bg_color", "image_src", "sort_order"],
  testimonials:                ["quote", "name", "role", "sort_order", "active"],
  partners:                    ["name", "sort_order", "active"],
  products:                    ["title", "description", "image_src", "sort_order", "active"],
  craftsmanship_cards:         ["label", "title", "description", "image_src", "href", "sort_order", "active"],
  sustainability_specs:        ["label", "value", "context", "sort_order"],
  manufacturer_capabilities:   ["title", "description", "image_src", "specs", "span_class", "is_tall", "sort_order"],
  manufacturer_process_steps:  ["step_number", "title", "description", "tag", "sort_order"],
  manufacturer_reasons:        ["number", "title", "description", "sort_order"],
  sectors:                     ["name", "sort_order", "active"],
  gallery_images:              ["src", "alt", "wide", "context", "sort_order", "active"],
  about_values:                ["title", "description", "sort_order"],
  investor_pillars:            ["icon_name", "title", "description", "sort_order"],
  investor_roadmap:            ["step", "title", "description", "sort_order"],
  investor_faqs:               ["question", "answer", "sort_order"],
  privacy_sections:            ["title", "content", "sort_order"],
  page_heroes:                 ["page_slug", "eyebrow", "headline", "subheading", "image_src", "image_alt", "bg_color", "cta_label", "cta_href"],
};
