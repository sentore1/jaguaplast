"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

const contactDetails = [
  { icon: Mail,   label: "Email",   value: "info@jaguaplast.com" },
  { icon: Phone,  label: "Phone",   value: "0788882888" },
  { icon: MapPin, label: "Address", value: "Industrial Area, Masoro, Kigali, Rwanda" },
];

export function ManufacturerContact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    sector: "",
    volume: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a brief network delay
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0B1A1C] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Two-column header */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              Get in Touch
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.05]">
              Start a
              <br />
              Partnership.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-sm leading-relaxed text-white/50">
              Tell us about your project and volume requirements. Our team will
              respond within one business day with a tailored proposal.
            </p>
            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#0B7380" + "33" }}
                  >
                    <item.icon size={14} style={{ color: "#0B7380" }} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30">{item.label}</p>
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-12 h-px w-full bg-white/10" />

        {/* Form / Success */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 py-20 text-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
              style={{ backgroundColor: "#0B7380" + "44" }}
            >
              ✓
            </div>
            <p className="text-2xl font-medium text-white">Enquiry Received.</p>
            <p className="max-w-sm text-sm text-white/50">
              We&apos;ll review your submission and get back to you within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <label className="text-[11px] uppercase tracking-widest text-white/50" htmlFor="company">
                Company Name
              </label>
              <input
                id="company" name="company" type="text" required
                value={form.company} onChange={handleChange}
                className="border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder:text-white/20 focus:border-white/50 focus:outline-none transition-colors"
                placeholder="Acme Manufacturing Ltd"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] uppercase tracking-widest text-white/50" htmlFor="name">
                Contact Name
              </label>
              <input
                id="name" name="name" type="text" required
                value={form.name} onChange={handleChange}
                className="border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder:text-white/20 focus:border-white/50 focus:outline-none transition-colors"
                placeholder="Jane Smith"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] uppercase tracking-widest text-white/50" htmlFor="email">
                Email Address
              </label>
              <input
                id="email" name="email" type="email" required
                value={form.email} onChange={handleChange}
                className="border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder:text-white/20 focus:border-white/50 focus:outline-none transition-colors"
                placeholder="jane@acme.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] uppercase tracking-widest text-white/50" htmlFor="sector">
                Industry Sector
              </label>
              <select
                id="sector" name="sector" required
                value={form.sector} onChange={handleChange}
                className="border-b border-white/15 bg-transparent pb-3 text-sm text-white focus:border-white/50 focus:outline-none appearance-none transition-colors"
              >
                <option value="" disabled className="bg-[#0B1A1C]">Select sector</option>
                <option value="footwear"  className="bg-[#0B1A1C]">Footwear OEM</option>
                <option value="sports"    className="bg-[#0B1A1C]">Sports &amp; Outdoor</option>
                <option value="fashion"   className="bg-[#0B1A1C]">Fashion &amp; Lifestyle</option>
                <option value="safety"    className="bg-[#0B1A1C]">Safety &amp; Industrial</option>
                <option value="medical"   className="bg-[#0B1A1C]">Medical Footwear</option>
                <option value="children"  className="bg-[#0B1A1C]">Children&apos;s Footwear</option>
                <option value="other"     className="bg-[#0B1A1C]">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] uppercase tracking-widest text-white/50" htmlFor="volume">
                Annual Volume Estimate
              </label>
              <select
                id="volume" name="volume" required
                value={form.volume} onChange={handleChange}
                className="border-b border-white/15 bg-transparent pb-3 text-sm text-white focus:border-white/50 focus:outline-none appearance-none transition-colors"
              >
                <option value="" disabled className="bg-[#0B1A1C]">Select range</option>
                <option value="under-10k" className="bg-[#0B1A1C]">Under 10,000 units</option>
                <option value="10k-100k"  className="bg-[#0B1A1C]">10,000 – 100,000 units</option>
                <option value="100k-1m"   className="bg-[#0B1A1C]">100,000 – 1,000,000 units</option>
                <option value="over-1m"   className="bg-[#0B1A1C]">Over 1,000,000 units</option>
              </select>
            </div>

            {/* Spacer */}
            <div className="hidden md:block" />

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[11px] uppercase tracking-widest text-white/50" htmlFor="message">
                Project Details
              </label>
              <textarea
                id="message" name="message" rows={5}
                value={form.message} onChange={handleChange}
                className="border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder:text-white/20 focus:border-white/50 focus:outline-none resize-none transition-colors"
                placeholder="Describe your component, material requirements, tolerances, and timeline…"
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition-opacity hover:opacity-80 disabled:opacity-60"
              >
                {loading && <Loader2 size={15} className="animate-spin" />}
                {loading ? "Sending…" : "Submit Enquiry"}
              </button>
              <p className="text-xs text-white/30">
                We respond within 1 business day. All enquiries are confidential.
              </p>
            </div>

          </form>
        )}
      </div>
    </section>
  );
}
