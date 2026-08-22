-- JAGUAPLAST CMS SCHEMA
-- Run this first in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS site_settings (
  id serial PRIMARY KEY, key text NOT NULL UNIQUE, value text NOT NULL
);
CREATE TABLE IF NOT EXISTS nav_links (
  id serial PRIMARY KEY, label text NOT NULL, href text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0, active boolean NOT NULL DEFAULT true
);
CREATE TABLE IF NOT EXISTS footer_links (
  id serial PRIMARY KEY, label text NOT NULL, href text NOT NULL,
  grp text NOT NULL, sort_order integer NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS hero_slides (
  id serial PRIMARY KEY, headline_line1 text, headline_line2 text,
  subheading text, image_src text, image_alt text,
  cta_label text, cta_href text, sort_order integer DEFAULT 0, active boolean DEFAULT true
);
CREATE TABLE IF NOT EXISTS stats (
  id serial PRIMARY KEY, value text NOT NULL, label text NOT NULL,
  context text NOT NULL, sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS promo_cards (
  id serial PRIMARY KEY, eyebrow text, title text, href text,
  bg_color text, image_src text, sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS testimonials (
  id serial PRIMARY KEY, quote text NOT NULL, name text NOT NULL,
  role text NOT NULL, sort_order integer DEFAULT 0, active boolean DEFAULT true
);
CREATE TABLE IF NOT EXISTS partners (
  id serial PRIMARY KEY, name text NOT NULL,
  sort_order integer DEFAULT 0, active boolean DEFAULT true
);
CREATE TABLE IF NOT EXISTS products (
  id serial PRIMARY KEY, title text NOT NULL, description text NOT NULL,
  image_src text NOT NULL, sort_order integer DEFAULT 0, active boolean DEFAULT true
);
CREATE TABLE IF NOT EXISTS craftsmanship_cards (
  id serial PRIMARY KEY, label text, title text, description text,
  image_src text, href text, sort_order integer DEFAULT 0, active boolean DEFAULT true
);
CREATE TABLE IF NOT EXISTS sustainability_specs (
  id serial PRIMARY KEY, label text NOT NULL, value text NOT NULL,
  context text NOT NULL, sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS manufacturer_capabilities (
  id serial PRIMARY KEY, title text, description text, image_src text,
  specs text[] DEFAULT '{}', span_class text DEFAULT 'col-span-1',
  is_tall boolean DEFAULT false, sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS manufacturer_process_steps (
  id serial PRIMARY KEY, step_number text, title text,
  description text, tag text, sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS manufacturer_reasons (
  id serial PRIMARY KEY, number text, title text,
  description text, sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS sectors (
  id serial PRIMARY KEY, name text NOT NULL,
  sort_order integer DEFAULT 0, active boolean DEFAULT true
);
CREATE TABLE IF NOT EXISTS gallery_images (
  id serial PRIMARY KEY, src text NOT NULL, alt text NOT NULL,
  wide boolean DEFAULT false, context text NOT NULL,
  sort_order integer DEFAULT 0, active boolean DEFAULT true
);
CREATE TABLE IF NOT EXISTS about_values (
  id serial PRIMARY KEY, title text NOT NULL,
  description text NOT NULL, sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS investor_pillars (
  id serial PRIMARY KEY, icon_name text, title text,
  description text, sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS investor_roadmap (
  id serial PRIMARY KEY, step text, title text,
  description text, sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS investor_faqs (
  id serial PRIMARY KEY, question text, answer text,
  sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS privacy_sections (
  id serial PRIMARY KEY, title text,
  content jsonb DEFAULT '[]', sort_order integer DEFAULT 0
);
CREATE TABLE IF NOT EXISTS page_heroes (
  id serial PRIMARY KEY, page_slug text NOT NULL UNIQUE,
  eyebrow text, headline text, subheading text,
  image_src text, image_alt text, bg_color text,
  cta_label text, cta_href text
);

-- RLS: enable + public read on all tables
DO $$ DECLARE t text;
BEGIN
  FOR t IN SELECT unnest(ARRAY[
    'site_settings','nav_links','footer_links','hero_slides','stats',
    'promo_cards','testimonials','partners','products','craftsmanship_cards',
    'sustainability_specs','manufacturer_capabilities','manufacturer_process_steps',
    'manufacturer_reasons','sectors','gallery_images','about_values',
    'investor_pillars','investor_roadmap','investor_faqs',
    'privacy_sections','page_heroes'
  ]) LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t);
    BEGIN
      EXECUTE format(
        'CREATE POLICY "public_read_%s" ON %I FOR SELECT USING (true)', t, t
      );
    EXCEPTION WHEN duplicate_object THEN NULL;
    END;
  END LOOP;
END $$;
