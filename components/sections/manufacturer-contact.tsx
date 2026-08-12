"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@jaguaplast.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+250 788 306 799",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Industrial Area, Masoro, Kigali, Rwanda",
  },
];

export function ManufacturerContact() {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-foreground px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Two-column header */}
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
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
            {/* Contact details */}
            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <item.icon size={15} className="shrink-0 text-white/30" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30">{item.label}</p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form / Success */}
        {submitted ? (
          <div className="border border-white/10 p-16 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <p className="text-2xl font-medium text-white">Enquiry Received.</p>
            <p className="mt-3 text-sm text-white/50">
              We'll review your submission and get back to you within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">

            {/* Company Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white" htmlFor="company">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={form.company}
                onChange={handleChange}
                className="border-b border-white/20 bg-transparent pb-3 text-sm text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none"
                placeholder="Acme Manufacturing Ltd"
              />
            </div>

            {/* Contact Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white" htmlFor="name">
                Contact Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="border-b border-white/20 bg-transparent pb-3 text-sm text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none"
                placeholder="Jane Smith"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="border-b border-white/20 bg-transparent pb-3 text-sm text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none"
                placeholder="jane@acme.com"
              />
            </div>

            {/* Industry Sector */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white" htmlFor="sector">
                Industry Sector
              </label>
              <select
                id="sector"
                name="sector"
                required
                value={form.sector}
                onChange={handleChange}
                className="border-b border-white/20 bg-transparent pb-3 text-sm text-white focus:border-white/60 focus:outline-none appearance-none"
              >
                <option value="" disabled className="bg-zinc-900">Select sector</option>
                <option value="footwear" className="bg-zinc-900">Footwear OEM</option>
                <option value="sports" className="bg-zinc-900">Sports & Outdoor</option>
                <option value="fashion" className="bg-zinc-900">Fashion & Lifestyle</option>
                <option value="safety" className="bg-zinc-900">Safety & Industrial</option>
                <option value="medical" className="bg-zinc-900">Medical Footwear</option>
                <option value="children" className="bg-zinc-900">Children's Footwear</option>
                <option value="other" className="bg-zinc-900">Other</option>
              </select>
            </div>

            {/* Annual Volume */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white" htmlFor="volume">
                Annual Volume Estimate
              </label>
              <select
                id="volume"
                name="volume"
                required
                value={form.volume}
                onChange={handleChange}
                className="border-b border-white/20 bg-transparent pb-3 text-sm text-white focus:border-white/60 focus:outline-none appearance-none"
              >
                <option value="" disabled className="bg-zinc-900">Select range</option>
                <option value="under-10k" className="bg-zinc-900">Under 10,000 units</option>
                <option value="10k-100k" className="bg-zinc-900">10,000 – 100,000 units</option>
                <option value="100k-1m" className="bg-zinc-900">100,000 – 1,000,000 units</option>
                <option value="over-1m" className="bg-zinc-900">Over 1,000,000 units</option>
              </select>
            </div>

            {/* Spacer on desktop */}
            <div className="hidden md:block" />

            {/* Project Details */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-white" htmlFor="message">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="border-b border-white/20 bg-transparent pb-3 text-sm text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none resize-none"
                placeholder="Describe your component, material requirements, tolerances, and timeline…"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="submit"
                className="bg-white px-10 py-4 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
              >
                Submit Enquiry
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
