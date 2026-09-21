-- Add Company Profile to navigation and footer, removing duplicates

-- Delete all existing nav links and re-insert with correct order
DELETE FROM nav_links;

INSERT INTO nav_links (label, href, sort_order, active) VALUES
  ('HOME','/',1,true),
  ('ABOUT','/about',2,true),
  ('COMPANY PROFILE','/company-profile',3,true),
  ('SOLUTIONS','/technology',4,true),
  ('PRODUCTS','/products',5,true),
  ('CONTACT US','/contact',6,true);

-- Delete all existing footer links and re-insert with correct order
DELETE FROM footer_links;

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
  ('Privacy Policy','/privacy',  'company', 6);

-- Add company profile related settings if they don't exist
INSERT INTO site_settings (key, value) VALUES
  ('company_name',         'JAGUAPLAST LTD'),
  ('reg_number',           '2010/045321/07'),
  ('tin_number',           '123289944'),
  ('vat_number',           '4530271845'),
  ('company_address',      '3554+PJH Masoro Industrial Area, Kigali, Rwanda'),
  ('company_address_line1','3554+PJH Masoro Industrial Area'),
  ('company_address_line2','Kigali, Rwanda'),
  ('company_phone',        '+250 788 882 888'),
  ('company_website',      'www.jaguaplast.com')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
