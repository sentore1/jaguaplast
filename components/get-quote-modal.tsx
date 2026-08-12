"use client";

import { useState } from "react";
import { X, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export function GetQuoteModal({ isOpen, onClose }: GetQuoteModalProps) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  };

  const handleClose = () => {
    setForm({ name: "", company: "", email: "", phone: "", quantity: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
    onClose();
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      {/* Panel */}
      <div className="relative w-full max-w-3xl max-h-[75vh] overflow-y-auto bg-white shadow-2xl">

        {/* Header bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-12 py-7" style={{ backgroundColor: "#0C6D7D" }}>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-0.5">Jaguaplast</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">Request a Quote</h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
            <CheckCircle size={52} className="mb-5" style={{ color: "#0C6D7D" }} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Thank you. Our team will review your request and get back to you within 1 business day.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-8 px-8 py-3 text-white text-xs font-bold uppercase tracking-widest transition-colors"
              style={{ backgroundColor: "#0C6D7D" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0a5c6a")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0C6D7D")}
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="px-12 py-6 space-y-4">

            {/* Row: Name + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0C6D7D] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Ltd."
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0C6D7D] transition-colors"
                />
              </div>
            </div>

            {/* Row: Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0C6D7D] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+250 700 000 000"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0C6D7D] transition-colors"
                />
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-2">
                Estimated Quantity (pieces)
              </label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={form.quantity}
                onChange={handleChange}
                placeholder="e.g. 500"
                className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0C6D7D] transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-2">
                Additional Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={2}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your requirements, specifications, or any questions…"
                className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0C6D7D] transition-colors resize-none"
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 px-4 py-3">
                {errorMsg}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-3 py-4 text-white text-xs font-bold uppercase tracking-widest transition-colors disabled:opacity-60"
              style={{ backgroundColor: "#0C6D7D" }}
              onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.backgroundColor = "#0a5c6a"; }}
              onMouseLeave={e => { if (status !== "loading") e.currentTarget.style.backgroundColor = "#0C6D7D"; }}
            >
              {status === "loading" ? (
                <><Loader2 size={15} className="animate-spin" /> Sending…</>
              ) : (
                <>Send Quote Request <ArrowRight size={14} /></>
              )}
            </button>

            <p className="text-center text-[11px] text-gray-400">
              We respond within 1 business day · No spam, ever.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
