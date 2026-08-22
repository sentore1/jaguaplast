"use client";

import { useActionState, useState } from "react";
import { Loader2, Save } from "lucide-react";
import { upsertRow } from "@/app/admin/(dashboard)/table/actions";
import { TEXTAREA_FIELDS, BOOLEAN_FIELDS, ARRAY_FIELDS, SELECT_FIELDS } from "@/lib/admin/tables";

interface Props {
  table: string;
  id: number | null; // null = new row
  row: Record<string, unknown> | null;
  columns: string[];
}

function initialValue(col: string, row: Record<string, unknown> | null): string | boolean {
  const v = row?.[col];
  if (BOOLEAN_FIELDS.has(col)) return typeof v === "boolean" ? v : false;
  if (ARRAY_FIELDS.has(col)) return Array.isArray(v) ? v.join("\n") : String(v ?? "");
  return v === null || v === undefined ? "" : String(v);
}

export function RowForm({ table, id, row, columns }: Props) {
  // Local controlled state for the fields so the UI stays responsive.
  const [fields, setFields] = useState<Record<string, string | boolean>>(() => {
    const init: Record<string, string | boolean> = {};
    for (const col of columns) {
      init[col] = initialValue(col, row);
    }
    return init;
  });

  // Bind table / id / columns into the server action.
  const boundAction = upsertRow.bind(null, table, id, columns);
  const [state, formAction, pending] = useActionState(boundAction, { error: null });

  const handleChange = (col: string, val: string | boolean) =>
    setFields((prev) => ({ ...prev, [col]: val }));

  // Ensure every column has a value even if state was initialised before columns arrived.
  const safeFields: Record<string, string | boolean> = { ...fields };
  for (const col of columns) {
    if (safeFields[col] === undefined) {
      safeFields[col] = BOOLEAN_FIELDS.has(col) ? false : "";
    }
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {state.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      {columns.length === 0 && (
        <p className="text-sm text-gray-500">
          No columns found. Add at least one row to infer the schema.
        </p>
      )}

      {columns.map((col) => {
        const isBoolean  = BOOLEAN_FIELDS.has(col);
        const isTextarea = TEXTAREA_FIELDS.has(col);
        const isArray    = ARRAY_FIELDS.has(col);
        const selectOpts = SELECT_FIELDS[`${table}.${col}`];
        const isSelect   = !!selectOpts;
        const val        = safeFields[col];

        return (
          <div
            key={col}
            className={isBoolean ? "flex items-center gap-3" : "flex flex-col gap-1.5"}
          >
            <label
              htmlFor={col}
              className={
                isBoolean
                  ? "text-sm font-medium text-gray-700 cursor-pointer select-none"
                  : "text-xs font-semibold uppercase tracking-widest text-gray-500"
              }
            >
              {col.replace(/_/g, " ")}
            </label>

            {isBoolean ? (
              <>
                {/* Hidden input so FormData always carries the field */}
                <input type="hidden" name={col} value={val === true ? "true" : "false"} />
                <input
                  id={col}
                  type="checkbox"
                  checked={val === true}
                  onChange={(e) => handleChange(col, e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-[#0B7380] focus:ring-[#0B7380]"
                />
              </>
            ) : isSelect ? (
              <select
                id={col}
                name={col}
                value={String(val)}
                onChange={(e) => handleChange(col, e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-[#0B7380] focus:outline-none transition-colors bg-white"
              >
                <option value="">— select —</option>
                {selectOpts.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : isTextarea || isArray ? (
              <>
                <textarea
                  id={col}
                  name={col}
                  rows={isArray ? 4 : 3}
                  value={String(val)}
                  onChange={(e) => handleChange(col, e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:border-[#0B7380] focus:outline-none transition-colors resize-y"
                />
                {isArray && (
                  <p className="text-xs text-gray-400">One item per line.</p>
                )}
              </>
            ) : (
              <input
                id={col}
                name={col}
                type="text"
                value={String(val)}
                onChange={(e) => handleChange(col, e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:border-[#0B7380] focus:outline-none transition-colors"
              />
            )}
          </div>
        );
      })}

      {columns.length > 0 && (
        <div className="mt-2 flex items-center gap-3 border-t border-gray-100 pt-5">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 disabled:opacity-60"
            style={{ backgroundColor: "#0B7380" }}
          >
            {pending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
            {pending ? "Saving…" : id === null ? "Create Row" : "Save Changes"}
          </button>
          <a
            href={`/admin/table/${table}`}
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            Cancel
          </a>
        </div>
      )}
    </form>
  );
}
