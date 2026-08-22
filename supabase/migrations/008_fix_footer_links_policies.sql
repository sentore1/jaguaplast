-- Re-create RLS policies for footer_links in case they were missing
DO $$ BEGIN
  BEGIN
    CREATE POLICY "auth_insert_footer_links"
      ON footer_links FOR INSERT TO authenticated WITH CHECK (true);
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    CREATE POLICY "auth_update_footer_links"
      ON footer_links FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    CREATE POLICY "auth_delete_footer_links"
      ON footer_links FOR DELETE TO authenticated USING (true);
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
END $$;
