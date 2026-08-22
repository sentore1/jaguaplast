-- SEED: stats, promo_cards, testimonials, partners, products

INSERT INTO stats (value, label, context, sort_order) VALUES
  ('100%','Every pair is crafted with 100% premium-grade materials for lasting luxury and performance','homepage_top',1),
  ('90%','90% of our clients report superior comfort levels compared to conventional footwear','homepage_top',2),
  ('10+','Years of Manufacturing','manufacturer_hero',1),
  ('50+','Active Partners','manufacturer_hero',2),
  ('20M+','Units / Year','manufacturer_hero',3),
  ('15','Countries Served','manufacturer_hero',4),
  ('25+','Years of manufacturing','about_page',1),
  ('40M+','Pairs produced per year','about_page',2),
  ('18','Countries served','about_page',3),
  ('120+','Active brand partners','about_page',4),
  ('Zero-Defect','Quality Policy','manufacturer_trust',1),
  ('4-6 Weeks','Avg. Time to Delivery','manufacturer_trust',2),
  ('ISO 9001','2015 Certified','manufacturer_trust',3),
  ('15+','Countries Supplied','manufacturer_trust',4)
ON CONFLICT DO NOTHING;

INSERT INTO promo_cards (eyebrow,title,href,bg_color,image_src,sort_order) VALUES
  ('Our Collection','FOOTWEAR CRAFTED FOR THE DISCERNING FEW','/products','#095560',NULL,1),
  ('Innovation','REDEFINING COMFORT IN LUXURY FOOTWEAR','/technology','#0B7380','/image3/8.png',2),
  ('Craftsmanship','WHERE ARTISTRY MEETS PRECISION ENGINEERING','/about','#679BA1',NULL,3)
ON CONFLICT DO NOTHING;

INSERT INTO testimonials (quote,name,role,sort_order) VALUES
  ('Jaguaplast takes on the challenge of producing luxury footwear components for our premium line with exceptional precision. Their reliable process and attention to detail allow us to maintain the highest standards at all times.','AHMED AL-RASHIDI','Head of Procurement at Gulf Fashion Group',1),
  ('Working with Jaguaplast has elevated our footwear brand. Their mastery of comfort engineering and consistent quality craftsmanship have made them an invaluable partner for our luxury collections.','SARAH MENSAH','Creative Director at Afrique Luxe',2),
  ('From first sketch to full production run, the Jaguaplast team delivers on time and to the highest spec every single time. Their in-house design capabilities are truly world-class.','CARLOS FERREIRA','Head of Product at Nova Footwear',3)
ON CONFLICT DO NOTHING;

INSERT INTO partners (name,sort_order) VALUES
  ('LORO PIANA.',1),('BERLUTI.',2),('MAGNANNI',3),('SANTONI',4),('SCAROSSO.',5)
ON CONFLICT DO NOTHING;

INSERT INTO products (title,description,image_src,sort_order) VALUES
  ('Arch-Support Sole','Comfort','/image5/16.png',1),
  ('All-Season Durability','Resilience','/image5/7.png',2),
  ('Ergonomic Last Design','Fit','/image5/4.png',3),
  ('Cushioned Footbed','Comfort','/image5/11.png',4),
  ('Handstitched Finishing','Craftsmanship','/image5/6.png',5),
  ('Precision Engineering','Quality','/image5/13.png',6)
ON CONFLICT DO NOTHING;

INSERT INTO craftsmanship_cards (label,title,description,image_src,href,sort_order) VALUES
  ('SOLE ENGINEERING','Precision Sole\nCrafting','Our state-of-the-art sole manufacturing facility delivers high-precision footwear components at scale. We handle complex contoured geometries, superior cushioning profiles, and a wide range of premium compounds to meet your exact comfort specifications.','/image5/6.png','/technology',1),
  ('UPPER CONSTRUCTION','Premium Upper\nAssembly','From single-layer to structured multi-layer uppers, our construction capabilities produce durable, breathable footwear with refined surface finish and consistent quality.','/image5/2.png','/technology',2),
  ('LAST & DESIGN','In-House Last\n& Design','Our footwear engineering team designs and develops precision lasts in-house, ensuring faster lead times, superior fit accuracy, and seamless iteration from concept prototype to full production run.','/image5/4.png','/technology',3),
  ('QUALITY ASSURANCE','Rigorous Quality\nControl','Every pair undergoes comprehensive testing and inspection. Our quality management system ensures consistent comfort, dimensional accuracy, and material integrity across every batch.','/image5/5.png','/technology',4)
ON CONFLICT DO NOTHING;

INSERT INTO sustainability_specs (label,value,context,sort_order) VALUES
  ('Recycled Content','Up to 60%','homepage_editorial',1),
  ('Carbon Reduction','-42% vs 2019','homepage_editorial',2),
  ('Water Saved','18L / Pair','homepage_editorial',3),
  ('Landfill Waste','Near Zero','homepage_editorial',4),
  ('Recycled Materials','Up to 60% post-consumer recycled PVC & TPR compounds in every sole component.','technology_page',1),
  ('Zero-Waste Moulding','Closed-loop injection moulding - scrap regrind re-enters the production cycle.','technology_page',2),
  ('Eco Certification','RoHS & REACH compliant. No heavy metals, phthalates, or harmful plasticisers.','technology_page',3)
ON CONFLICT DO NOTHING;
