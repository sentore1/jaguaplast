-- Allow authenticated users (admins) to INSERT, UPDATE, DELETE on all CMS tables
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
    BEGIN
      EXECUTE format(
        'CREATE POLICY "auth_insert_%s" ON %I FOR INSERT TO authenticated WITH CHECK (true)', t, t
      );
    EXCEPTION WHEN duplicate_object THEN NULL;
    END;
    BEGIN
      EXECUTE format(
        'CREATE POLICY "auth_update_%s" ON %I FOR UPDATE TO authenticated USING (true) WITH CHECK (true)', t, t
      );
    EXCEPTION WHEN duplicate_object THEN NULL;
    END;
    BEGIN
      EXECUTE format(
        'CREATE POLICY "auth_delete_%s" ON %I FOR DELETE TO authenticated USING (true)', t, t
      );
    EXCEPTION WHEN duplicate_object THEN NULL;
    END;
  END LOOP;
END $$;
