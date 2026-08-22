-- Add position column to gallery_images for technology section layout
ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS position text DEFAULT 'left';

-- Seed homepage_technology images (5 images used in TechnologySection)
INSERT INTO gallery_images (src, alt, wide, context, position, sort_order, active) VALUES
  ('/image5/12.png', 'Luxury footwear manufacturing showcase', false, 'homepage_technology', 'center', 1, true),
  ('/image4/1.png',  'Product image 1',                       false, 'homepage_technology', 'left',   2, true),
  ('/image4/3.png',  'Product image 3',                       false, 'homepage_technology', 'left',   3, true),
  ('/image5/11.png', 'Product image 7',                       false, 'homepage_technology', 'right',  4, true),
  ('/image5/8.png',  'Product image 8',                       false, 'homepage_technology', 'right',  5, true)
ON CONFLICT DO NOTHING;
