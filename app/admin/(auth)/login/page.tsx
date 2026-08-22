"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { Loader2, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B7380] px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-2xl">
        {/* Header */}
        <div className="px-10 pt-10 pb-8 border-b border-gray-100 text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative h-12 w-40">
              <Image
                src="/image5/logogreen.png"
                alt="Jaguaplast"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">CMS Admin Portal</h1>
          <p className="mt-1 text-sm text-gray-500">Sign in to manage your website content</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-10 py-8 flex flex-col gap-5">
          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:border-[#0B7380] focus:outline-none transition-colors"
              placeholder="admin@jaguaplast.com"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 px-4 py-3 pr-12 text-sm text-gray-900 placeholder:text-gray-300 focus:border-[#0B7380] focus:outline-none transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85 disabled:opacity-60"
            style={{ backgroundColor: "#0B7380" }}
          >
            {loading && <Loader2 size={15} className="animate-spin" />}
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <div className="px-10 pb-8 text-center">
          <p className="text-xs text-gray-400">
            This portal is restricted to authorised Jaguaplast administrators only.
          </p>
        </div>
      </div>
    </div>
  );
}
