import type { ReactNode } from "react";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/admin/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar userEmail={user?.email ?? ""} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
