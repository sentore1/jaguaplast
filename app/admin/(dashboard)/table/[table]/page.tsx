import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ArrowLeft, Plus } from "lucide-react";
import { ALLOWED_TABLES, tableLabel } from "@/lib/admin/tables";
import { TableBody } from "@/components/admin/table-body";

interface Props {
  params: Promise<{ table: string }>;
}

export default async function TableListPage({ params }: Props) {
  const { table } = await params;

  if (!ALLOWED_TABLES.includes(table)) notFound();

  const supabase = await createClient();
  // Some tables (e.g. page_heroes) don't have sort_order — fall back to id only
  const TABLES_WITHOUT_SORT_ORDER = ["page_heroes", "site_settings"];
  const query = supabase.from(table).select("*");
  const ordered = TABLES_WITHOUT_SORT_ORDER.includes(table)
    ? query.order("id", { ascending: true })
    : query.order("sort_order", { ascending: true }).order("id", { ascending: true });

  const { data: rows, error } = await ordered;

  const columns = rows && rows.length > 0
    ? Object.keys(rows[0]).filter((c) => c !== "id")
    : [];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={14} />
            Dashboard
          </Link>
          <span className="text-gray-300">/</span>
          <h1 className="text-lg font-semibold text-gray-900">{tableLabel(table)}</h1>
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-mono text-gray-500">{table}</span>
        </div>
        <Link
          href={`/admin/table/${table}/new`}
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-85"
          style={{ backgroundColor: "#0B7380" }}
        >
          <Plus size={14} />
          Add Row
        </Link>
      </div>

      {/* Error state */}
      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Failed to load data: {error.message}
        </div>
      )}

      {/* Empty state */}
      {!error && (!rows || rows.length === 0) && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white py-20 text-center">
          <p className="text-sm font-medium text-gray-500">No rows yet</p>
          <p className="mt-1 text-xs text-gray-400">Click &ldquo;Add Row&rdquo; to create the first entry.</p>
        </div>
      )}

      {/* Table */}
      {rows && rows.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400 w-12">
                  ID
                </th>
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400 max-w-[200px]"
                  >
                    {col.replace(/_/g, " ")}
                  </th>
                ))}
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <TableBody table={table} rows={rows} columns={columns} />
          </table>
        </div>
      )}
    </div>
  );
}
