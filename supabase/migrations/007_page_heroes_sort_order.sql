-- Add missing sort_order column to page_heroes
ALTER TABLE page_heroes ADD COLUMN IF NOT EXISTS sort_order integer NOT NULL DEFAULT 0;
