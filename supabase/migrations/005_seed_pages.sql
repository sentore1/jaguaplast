-- SEED: gallery_images, about_values, investor tables, privacy, page_heroes

INSERT INTO gallery_images (src,alt,wide,context,sort_order) VALUES
  ('/image5/1.png','Jaguaplast 1',false,'gallery_page',1),
  ('/image5/2.png','Jaguaplast 2',true,'gallery_page',2),
  ('/image5/4.png','Jaguaplast 3',false,'gallery_page',3),
  ('/image5/5.png','Jaguaplast 4',false,'gallery_page',4),
  ('/image5/6.png','Jaguaplast 5',true,'gallery_page',5),
  ('/image5/7.png','Jaguaplast 6',false,'gallery_page',6),
  ('/image5/8.png','Jaguaplast 7',false,'gallery_page',7),
  ('/image5/11.png','Jaguaplast 8',true,'gallery_page',8),
  ('/image5/12.png','Jaguaplast 9',false,'gallery_page',9),
  ('/image5/13.png','Jaguaplast 10',false,'gallery_page',10),
  ('/image5/14.png','Jaguaplast 11',true,'gallery_page',11),
  ('/image5/15.png','Jaguaplast 12',false,'gallery_page',12),
  ('/image5/16.png','Jaguaplast 13',false,'gallery_page',13),
  ('/image5/17.png','Jaguaplast 14',true,'gallery_page',14),
  ('/image5/hero-image.png','Jaguaplast 16',true,'gallery_page',15),
  ('/image5/heroimage2.png','Jaguaplast 17',true,'gallery_page',16),
  ('/image5/heroimages5.png','Jaguaplast 18',true,'gallery_page',17),
  ('/shoes flyer/1.png','Product flyer 1',false,'homepage_gallery',1),
  ('/shoes flyer/2.png','Product flyer 2',false,'homepage_gallery',2),
  ('/shoes flyer/3.png','Product flyer 3',false,'homepage_gallery',3),
  ('/shoes flyer/4.png','Product flyer 4',false,'homepage_gallery',4),
  ('/shoes flyer/5.png','Product flyer 5',false,'homepage_gallery',5),
  ('/shoes flyer/6.png','Product flyer 6',false,'homepage_gallery',6),
  ('/image5/1.png','Jaguaplast shoe production line',false,'about_page',1),
  ('/image5/2.png','Handcrafted footwear finishing',false,'about_page',2),
  ('/image5/4.png','Quality control inspection',false,'about_page',3),
  ('/image5/5.png','Sole assembly workshop',false,'about_page',4),
  ('/image5/6.png','Footwear material cutting',false,'about_page',5),
  ('/image5/7.png','Finished shoe collection',false,'about_page',6),
  ('/image5/8.png','Jaguaplast factory floor',false,'about_page',7),
  ('/image5/11.png','Jaguaplast craftsmanship',false,'about_page',8),
  ('/image5/12.png','Shoe design and development',false,'about_page',9),
  ('/image5/13.png','Precision stitching process',false,'about_page',10),
  ('/image5/14.png','Footwear assembly line',false,'about_page',11),
  ('/image5/16.png','Sole bonding process',false,'about_page',12),
  ('/image5/17.png','Finished footwear collection',false,'about_page',13)
ON CONFLICT DO NOTHING;

INSERT INTO about_values (title,description,sort_order) VALUES
  ('Craftsmanship','Every pair we produce is shaped with precision - from last design to final stitching - ensuring fit, comfort, and finish that brands trust.',1),
  ('Durability','Our materials and construction methods are tested for thousands of wear cycles, delivering footwear that holds up in real-world conditions.',2),
  ('Innovation','From ergonomic sole engineering to sustainable material sourcing, we continuously evolve our processes to stay ahead of industry standards.',3),
  ('Partnership','We work side-by-side with brands, retailers, and OEM buyers to bring their footwear vision to life - on time, on spec, at scale.',4)
ON CONFLICT DO NOTHING;

INSERT INTO investor_pillars (icon_name,title,description,sort_order) VALUES
  ('TrendingUp','Consistent Growth','Jaguaplast has delivered sustained year-on-year growth backed by expanding manufacturing partnerships and new market penetration across Africa.',1),
  ('Globe2','Global Reach','Our products are distributed across multiple countries. With strategically located manufacturing, we are positioned to scale into both developed and emerging markets.',2),
  ('ShieldCheck','Strong Governance','We operate under internationally aligned corporate governance standards - transparent reporting, independent board oversight, and a robust compliance framework.',3),
  ('BarChart2','Diversified Revenue','Our revenue spans plastic packaging, industrial containers, agricultural products, and custom moulded components - providing resilient and balanced cash flow.',4),
  ('Users','Experienced Leadership','Our executive team brings decades of combined experience in plastics manufacturing, supply chain management, and international trade.',5),
  ('FileText','Transparent Reporting','We publish audited annual reports, operational updates, and ESG disclosures to keep shareholders fully informed on business performance.',6)
ON CONFLICT DO NOTHING;

INSERT INTO investor_roadmap (step,title,description,sort_order) VALUES
  ('01','Capacity Expansion','Expanding production capacity through new manufacturing lines and a planned second facility in East Africa.',1),
  ('02','Product Diversification','Launching a recycled-content product line targeting global brands seeking sustainable packaging partners.',2),
  ('03','Market Expansion','Entering new markets across East and Central Africa, leveraging existing distribution partnerships.',3),
  ('04','Strategic Listing','Targeting a primary listing on the Rwanda Stock Exchange (RSE) to access deeper capital markets and improve shareholder liquidity.',4)
ON CONFLICT DO NOTHING;

INSERT INTO investor_faqs (question,answer,sort_order) VALUES
  ('Is Jaguaplast publicly listed?','Jaguaplast is currently a privately held company. We are actively exploring strategic investment partnerships and a future public listing. Interested institutional investors are encouraged to contact our investor relations team.',1),
  ('How can I invest in Jaguaplast?','We welcome strategic investors, private equity partners, and development finance institutions aligned with our vision. Please reach out via the contact section below and our IR team will respond within 3 business days.',2),
  ('What is your dividend policy?','As a growth-stage business, profits are reinvested into capacity expansion, R&D, and new market entry. A formal dividend policy will be established upon the completion of our next growth phase.',3),
  ('What ESG commitments has Jaguaplast made?','We are committed to reducing plastic waste through closed-loop recycling programmes, achieving carbon-neutral operations, and maintaining fair labour standards across all facilities.',4)
ON CONFLICT DO NOTHING;

INSERT INTO privacy_sections (title,content,sort_order) VALUES
  ('1. Information We Collect','["We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with our team. This may include your name, email address, phone number, company name, and any details you choose to share about your project.","We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, pages visited, and time spent on pages. This data helps us improve our website and understand how visitors use it."]',1),
  ('2. How We Use Your Information','["We use the information we collect to respond to your enquiries and provide the services you request, to send you relevant product updates, manufacturing news, or promotional materials (only where you have consented), to improve and personalise your experience on our website, and to comply with our legal obligations.","We will never sell, rent, or share your personal data with third parties for their own marketing purposes."]',2),
  ('3. Data Sharing','["Jaguaplast may share your information with trusted third-party service providers who assist us in operating our website and conducting our business. These partners are contractually obligated to keep your information confidential.","We may also disclose your information if required by law, regulation, or a valid legal process."]',3),
  ('4. Data Retention','["We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When your data is no longer needed, we securely delete or anonymise it."]',4),
  ('5. Cookies','["Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. You can control or disable cookies through your browser settings at any time.","Disabling cookies may affect the functionality of certain parts of our website."]',5),
  ('6. Your Rights','["Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete the personal information we hold about you.","To exercise any of these rights, please contact us at info@jaguaplast.com. We will respond to your request within 30 days."]',6),
  ('7. Data Security','["We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. However, no method of transmission over the internet is 100% secure."]',7),
  ('8. Third-Party Links','["Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies."]',8),
  ('9. Changes to This Policy','["We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a revised date."]',9),
  ('10. Contact Us','["If you have any questions or concerns about this Privacy Policy or how we handle your data, please reach out to us:","Email: info@jaguaplast.com\nPhone: +250788306799\nAddress: Kigali, Rwanda - Industrial Area, Masoro"]',10)
ON CONFLICT DO NOTHING;

INSERT INTO page_heroes (page_slug,eyebrow,headline,subheading,image_src,image_alt,bg_color,cta_label,cta_href) VALUES
  ('about','Our Story','Built on Craftsmanship. Driven by People.','Jaguaplast is dedicated to perfecting the art and science of shoe manufacturing combining skilled craftsmanship with modern engineering and rigorous quality standards.','/image5/hero-image.png','Jaguaplast shoe factory',NULL,NULL,NULL),
  ('contact','Get in Touch','Let''s Work Together.','Have a question, a project in mind, or want to become a partner? Our team is ready to help.',NULL,NULL,'#0B7380',NULL,NULL),
  ('gallery','Visual Collection','Gallery','Every angle, every texture, every finish - a closer look at what Jaguaplast builds.','/image5/heroimages5.png','Gallery hero',NULL,NULL,NULL),
  ('products','Collection','Our Products','Lightweight, flexible, and built to last. Every pair starts with precision-grade plastic manufacturing.','/shoes flyer/5.png','Jaguaplast products',NULL,'View Collection','#collection'),
  ('technology','Sustainable Innovation','Engineering a Greener Step Forward','Recycled compounds, bio-based materials, and zero-waste moulding - built into every product we make.','/image4/23.png','Jaguaplast technology',NULL,NULL,NULL),
  ('privacy','Legal','Privacy Policy','Last updated: January 2026',NULL,NULL,'#0B7380',NULL,NULL),
  ('investor','Investor Relations','Building Value. Sustaining Growth.','Jaguaplast is one of Africa''s leading plastics manufacturers - a disciplined, growth-oriented business creating long-term value for shareholders, partners, and communities.',NULL,NULL,'#0B7380','Contact IR Team','#contact')
ON CONFLICT (page_slug) DO UPDATE
  SET eyebrow=EXCLUDED.eyebrow, headline=EXCLUDED.headline,
      subheading=EXCLUDED.subheading, image_src=EXCLUDED.image_src,
      image_alt=EXCLUDED.image_alt, bg_color=EXCLUDED.bg_color,
      cta_label=EXCLUDED.cta_label, cta_href=EXCLUDED.cta_href;
