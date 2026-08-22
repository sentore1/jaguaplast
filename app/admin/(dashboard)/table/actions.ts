"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ALLOWED_TABLES, BOOLEAN_FIELDS, ARRAY_FIELDS } from "@/lib/admin/tables";

type AllowedTable = (typeof ALLOWED_TABLES)[number];

function isAllowed(table: string): table is AllowedTable {
  return ALLOWED_TABLES.includes(table as AllowedTable);
}

/** Coerce a flat FormData into a typed payload matching the DB row shape. */
function buildPayload(
  formData: FormData,
  columns: string[]
): Record<string, unknown> {
  const payload: Record<string, unknown> = {};

  for (const col of columns) {
    if (BOOLEAN_FIELDS.has(col)) {
      payload[col] = formData.get(col) === "true";
    } else if (ARRAY_FIELDS.has(col)) {
      const raw = String(formData.get(col) ?? "");
      payload[col] = raw
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
    } else if (col === "sort_order") {
      const raw = formData.get(col);
      payload[col] = raw === "" || raw === null ? 0 : Number(raw);
    } else {
      payload[col] = String(formData.get(col) ?? "");
    }
  }

  return payload;
}

export async function upsertRow(
  table: string,
  id: number | null,
  columns: string[],
  _prevState: { error: string | null },
  formData: FormData
): Promise<{ error: string | null }> {
  if (!isAllowed(table)) {
    return { error: "Table not allowed." };
  }

  const supabase = await createClient();
  const payload = buildPayload(formData, columns);

  if (id === null) {
    const { error } = await supabase.from(table).insert(payload);
    if (error) return { error: error.message };
  } else {
    const { error } = await supabase.from(table).update(payload).eq("id", id);
    if (error) return { error: error.message };
  }

  redirect(`/admin/table/${table}`);
}

export async function deleteRow(
  table: string,
  id: number
): Promise<{ error: string | null }> {
  if (!isAllowed(table)) return { error: "Table not allowed." };

  const supabase = await createClient();
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) return { error: error.message };

  redirect(`/admin/table/${table}`);
}
