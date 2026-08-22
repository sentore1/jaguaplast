-- SEED: manufacturer_capabilities, process_steps, reasons, sectors

INSERT INTO manufacturer_capabilities (title,description,image_src,specs,span_class,is_tall,sort_order) VALUES
  ('Injection Moulding','High-precision injection moulding for complex geometries across a full range of thermoplastics and engineering polymers.','/image4/1.png',ARRAY['+-0.01 mm tolerance','Multi-cavity tooling','500T - 3,200T clamp force'],'col-span-1 md:col-span-2',true,1),
  ('Blow Moulding','Extrusion and injection blow moulding for hollow forms - containers, ducts, and complex fluid-path components.','/image4/3.png',ARRAY['Up to 50L volume','HDPE, PP, PET, PVC','Custom wall thickness'],'col-span-1',false,2),
  ('Thermoforming','Vacuum and pressure thermoforming for large-area panels and enclosures with rapid, cost-effective tooling.','/image4/6.png',ARRAY['2400 x 1200 mm sheets','ABS, PETG, Acrylic','Tooling in 2 weeks'],'col-span-1',false,3),
  ('CNC Finishing','Post-mould CNC machining for precision holes, threads, and surface features beyond mould capability.','/image4/7.png',ARRAY['5-axis CNC centres','ISO 2768 fine class','Full GD&T reporting'],'col-span-1',false,4),
  ('Assembly & Sub-Assembly','In-house assembly lines with ultrasonic welding, heat staking, and mechanical fastening for multi-component products.','/image4/8.png',ARRAY['Ultrasonic welding','Clean-room assembly','Outbound QC audit'],'col-span-1',false,5),
  ('Surface Treatment','Pad printing, spray painting, UV coating, and laser engraving for branding and functional surface requirements.','/image4/43.png',ARRAY['Pantone colour matching','UV & chemical resistance','Laser engraving'],'col-span-1 md:col-span-2',false,6)
ON CONFLICT DO NOTHING;

INSERT INTO manufacturer_process_steps (step_number,title,description,tag,sort_order) VALUES
  ('01','Initial Consultation','We begin with a detailed technical consultation to understand your component requirements, tolerances, volumes, and timeline. No generic proposals - just a focused conversation about your exact needs.','Week 1',1),
  ('02','Design & Prototyping','Our engineering team produces rapid prototypes using advanced CAD tooling. You receive physical samples before any full production run - no surprises, no wasted budgets.','Week 2 - 3',2),
  ('03','Quality Validation','Every prototype undergoes dimensional inspection, material testing, and stress analysis against your exact specification sheets. Sign-off only when you are satisfied.','Week 3 - 4',3),
  ('04','Production Ramp','Once approved, we scale to full production. Dedicated line managers ensure consistency across every batch and every delivery window - from first run to ten-thousandth.','Week 5+',4),
  ('05','Ongoing Supply & Support','A dedicated account manager handles repeat orders, inventory forecasting, and continuous improvement. Your supply chain keeps moving, and we keep optimising it.','Ongoing',5)
ON CONFLICT DO NOTHING;

INSERT INTO manufacturer_reasons (number,title,description,sort_order) VALUES
  ('01','Consistent Quality','Every component leaves our facility having passed dimensional inspection, material testing, and surface audit - batch after batch.',1),
  ('02','Scalable Volume','From 1,000-unit pilots to 20 million-unit annual runs, our production infrastructure flexes to match your exact demand curve.',2),
  ('03','Dedicated Account Team','One point of contact. Your account manager owns your forecast, your tooling, and your delivery schedule end to end.',3),
  ('04','Fast Lead Times','Rapid prototyping in days, production ramp in weeks. Our streamlined qualification process gets you to market faster.',4)
ON CONFLICT DO NOTHING;

INSERT INTO sectors (name,sort_order) VALUES
  ('Footwear OEM',1),('Sports & Outdoor',2),('Fashion & Lifestyle',3),
  ('Safety & Industrial',4),('Medical Footwear',5),('Children''s Footwear',6)
ON CONFLICT DO NOTHING;
