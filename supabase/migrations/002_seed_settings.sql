-- SEED: site_settings, nav_links, footer_links, hero_slides

INSERT INTO site_settings (key, value) VALUES
  ('site_title',           'JAGUAPLAST | Precision Manufacturing'),
  ('site_description',     'Premium plastic manufacturing solutions engineered for modern industries.'),
  ('company_name',         'JAGUAPLAST LTD'),
  ('reg_number',           '2010/045321/07'),
  ('tin_number',           '123289944'),
  ('vat_number',           '4530271845'),
  ('company_email',        'info@jaguaplast.com'),
  ('company_phone',        '+250 788 882 888'),
  ('company_address',      '3554+PJH Masoro Industrial Area, Kigali, Rwanda'),
  ('company_address_line1','3554+PJH Masoro Industrial Area'),
  ('company_address_line2','Kigali, Rwanda'),
  ('company_website',      'www.jaguaplast.com'),
  ('working_hours_weekday','Mon - Fri: 9 AM - 5 PM'),
  ('working_hours_weekend','Saturday: 9 AM - 5 PM'),
  ('email_reply_time',     'We reply within 1 business day'),
  ('investor_email',       'investors@jaguaplast.com'),
  ('footer_tagline',       'Luxury footwear crafted with precision and passion. Engineered for unmatched comfort and timeless elegance.'),
  ('logo_white_src',       '/logo white.png'),
  ('logo_green_src',       '/image5/logogreen.png'),
  ('qr_code_1_src',        '/qr-code (8).png'),
  ('qr_code_2_src',        '/qr-code (9).png'),
  ('privacy_last_updated', 'January 2026')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

INSERT INTO nav_links (label, href, sort_order) VALUES
  ('HOME','/',1),('ABOUT','/about',2),('COMPANY PROFILE','/company-profile',3),
  ('SOLUTIONS','/technology',4),('PRODUCTS','/products',5),('CONTACT US','/contact',6)
ON CONFLICT DO NOTHING;

INSERT INTO footer_links (label, href, grp, sort_order) VALUES
  ('Home','/',                   'pages',   1),
  ('Products','/products',       'pages',   2),
  ('Technology','/technology',   'pages',   3),
  ('Gallery','/gallery',         'pages',   4),
  ('About','/about',             'company', 1),
  ('Company Profile','/company-profile','company',2),
  ('Manufacturers','/manufacturer','company',3),
  ('Investor Relations','/investor-relations','company',4),
  ('Contact','/contact',         'company', 5),
  ('Privacy Policy','/privacy',  'company', 6)
ON CONFLICT DO NOTHING;

INSERT INTO hero_slides (headline_line1,headline_line2,subheading,image_src,image_alt,cta_label,cta_href,sort_order) VALUES
  ('LUXURY','FOOTWEAR','CRAFTED FOR COMFORT. DESIGNED FOR EXCELLENCE.',
   '/image5/21.jfif','Jaguaplast precision plastic components',
   'EXPLORE COLLECTION','/products',1)
ON CONFLICT DO NOTHING;
