"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setError(null);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@jaguaplast.com",
      sub: "We reply within 1 business day",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250788306799",
      sub: "Mon – Fri, 8 AM – 6 PM BRT",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Kigali, Rwanda",
      sub: "Industrial Area, Masoro",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon – Fri: 9 AM – 5 PM",
      sub: "Saturday: 9 AM – 5 PM",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="mt-20 relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "#0B7380" }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-10 md:px-12 lg:px-20 lg:pb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60">
            Get in Touch
          </p>
          <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl">
            Let's Work Together.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Have a question, a project in mind, or want to become a partner? Our team is ready to help.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {contactInfo.map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col gap-3 px-8 py-12 border-r border-border last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <item.icon size={20} className="text-muted-foreground" style={{ color: "#0B7380" }} />
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20" style={{ backgroundColor: "#0B7380" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white">
              Send a Message
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
              We'd Love to Hear From You.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/50">
              Fill in the form below and one of our team members will get back to you as soon as possible.
            </p>
          </div>

          {submitted ? (
            <div className="border border-white/10 p-12 text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Mail size={22} className="text-white" />
              </div>
              <p className="text-2xl font-medium text-white">Message Sent!</p>
              <p className="mt-3 text-sm text-white/50">
                Your message has been received. We'll be in touch shortly.
                Check your inbox — we've sent you a confirmation email too.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="border-b border-white/20 bg-transparent pb-3 text-sm text-white placeholder:text-white/20 focus:border-white/60 focus:outline-none"
                  placeholder="John Smith"
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
                  className="border-b border-white/20 bg-transparent pb-3 text-sm text-white placeholder:text-white/20 focus:border-white/60 focus:outline-none"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="border-b border-white/20 bg-transparent pb-3 text-sm text-white placeholder:text-white/20 focus:border-white/60 focus:outline-none"
                  placeholder="+250 788 306 799"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="border-b border-white/20 bg-transparent pb-3 text-sm text-white focus:border-white/60 focus:outline-none appearance-none"
                >
                  <option value="" disabled className="bg-zinc-900">Select a subject</option>
                  <option value="partnership" className="bg-zinc-900">Partnership Enquiry</option>
                  <option value="products" className="bg-zinc-900">Product Information</option>
                  <option value="quote" className="bg-zinc-900">Request a Quote</option>
                  <option value="support" className="bg-zinc-900">After-Sales Support</option>
                  <option value="other" className="bg-zinc-900">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-white" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="border-b border-white/20 bg-transparent pb-3 text-sm text-white placeholder:text-white/20 focus:border-white/60 focus:outline-none resize-none"
                  placeholder="Tell us about your project or enquiry…"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex flex-col gap-4">
                {error && (
                  <p className="text-sm text-red-300 border border-red-300/30 bg-red-500/10 px-4 py-3">
                    {error}
                  </p>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-white px-8 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading && <Loader2 size={16} className="animate-spin" />}
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
