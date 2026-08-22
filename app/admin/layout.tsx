export const metadata = {
  title: "Admin CMS | JAGUAPLAST",
};

// Intentionally minimal — route groups handle their own layouts:
// - (auth)/login     → no shell
// - (dashboard)/...  → sidebar shell via (dashboard)/layout.tsx
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
