import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { Settings } from "lucide-react";

async function getSettings(): Promise<Record<string, string>> {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from("site_settings").select("key,value").order("key");
    if (!data) return {};
    return Object.fromEntries(data.map((r: { key: string; value: string }) => [r.key, r.value]));
  } catch {
    return {};
  }
}

async function saveSettings(formData: FormData) {
  "use server";
  try {
    const supabase = await createClient();
    const entries = Array.from(formData.entries()) as [string, string][];
    await Promise.all(
      entries.map(([key, value]) =>
        supabase
          .from("site_settings")
          .update({ value })
          .eq("key", key)
      )
    );
  } catch {
    // silently continue
  }
  revalidatePath("/admin/settings");
}

const SETTING_LABELS: Record<string, string> = {
  site_title:             "Site Title",
  site_description:       "Site Description",
  company_email:          "Company Email",
  company_phone:          "Company Phone",
  company_address_line1:  "Address Line 1",
  company_address_line2:  "Address Line 2",
  working_hours_weekday:  "Weekday Hours",
  working_hours_weekend:  "Weekend Hours",
  email_reply_time:       "Email Reply Time",
  investor_email:         "Investor Email",
  footer_tagline:         "Footer Tagline",
  logo_white_src:         "Logo (White) Path",
  logo_green_src:         "Logo (Green) Path",
  qr_code_1_src:          "QR Code 1 Path",
  qr_code_2_src:          "QR Code 2 Path",
  privacy_last_updated:   "Privacy Last Updated",
};

const TEXTAREA_KEYS = new Set(["site_description", "footer_tagline"]);

export default async function SettingsPage() {
  const settings = await getSettings();

  return (
    <div className="p-8 max-w-3xl">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B7380]/10">
          <Settings size={18} style={{ color: "#0B7380" }} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Site Settings</h1>
          <p className="text-sm text-gray-500">Global configuration values used across the site.</p>
        </div>
      </div>

      <form action={saveSettings} className="space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-100">
          {Object.entries(settings).map(([key, value]) => (
            <div key={key} className="flex flex-col gap-1.5 px-6 py-5">
              <label
                htmlFor={key}
                className="text-xs font-semibold uppercase tracking-widest text-gray-400"
              >
                {SETTING_LABELS[key] ?? key.replace(/_/g, " ")}
              </label>
              {TEXTAREA_KEYS.has(key) ? (
                <textarea
                  id={key}
                  name={key}
                  defaultValue={value}
                  rows={3}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-[#0B7380] focus:outline-none focus:ring-1 focus:ring-[#0B7380] resize-none"
                />
              ) : (
                <input
                  id={key}
                  name={key}
                  type="text"
                  defaultValue={value}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-[#0B7380] focus:outline-none focus:ring-1 focus:ring-[#0B7380]"
                />
              )}
            </div>
          ))}

          {Object.keys(settings).length === 0 && (
            <div className="px-6 py-12 text-center text-sm text-gray-400">
              No settings found. Run the seed migration to populate site settings.
            </div>
          )}
        </div>

        {Object.keys(settings).length > 0 && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#0B7380" }}
            >
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
