import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ArrowLeft } from "lucide-react";
import { ALLOWED_TABLES, tableLabel, TABLE_COLUMNS } from "@/lib/admin/tables";
import { RowForm } from "@/components/admin/row-form";

interface Props {
  params: Promise<{ table: string; id: string }>;
}

export default async function TableRowPage({ params }: Props) {
  const { table, id } = await params;

  if (!ALLOWED_TABLES.includes(table)) notFound();

  const isNew = id === "new";
  const supabase = await createClient();

  // Fetch schema columns by reading one existing row (or empty for new)
  let row: Record<string, unknown> | null = null;
  let columns: string[] = [];

  if (!isNew) {
    const { data, error } = await supabase.from(table).select("*").eq("id", id).single();
    if (error || !data) notFound();
    row = data;
    columns = Object.keys(data).filter((c) => c !== "id");
  } else {
    // Get columns from any existing row; fall back to the static schema map
    const { data } = await supabase.from(table).select("*").limit(1);
    if (data && data.length > 0) {
      columns = Object.keys(data[0]).filter((c) => c !== "id");
    } else {
      // Table is empty — use the pre-defined column list so the form still renders
      columns = TABLE_COLUMNS[table] ?? [];
    }
  }

  return (
    <div className="p-8 max-w-3xl">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <Link
          href={`/admin/table/${table}`}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={14} />
          {tableLabel(table)}
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-lg font-semibold text-gray-900">
          {isNew ? "New Row" : `Edit Row #${id}`}
        </h1>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <RowForm table={table} id={isNew ? null : Number(id)} row={row} columns={columns} />
      </div>
    </div>
  );
}
