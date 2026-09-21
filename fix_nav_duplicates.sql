-- Quick fix: Remove all nav and footer links and re-insert correctly

-- Fix navigation links
DELETE FROM nav_links;

INSERT INTO nav_links (label, href, sort_order, active) VALUES
  ('HOME','/',1,true),
  ('ABOUT','/about',2,true),
  ('COMPANY PROFILE','/company-profile',3,true),
  ('SOLUTIONS','/technology',4,true),
  ('PRODUCTS','/products',5,true),
  ('CONTACT US','/contact',6,true);

-- Fix footer links
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
