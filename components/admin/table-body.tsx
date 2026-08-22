"use client";

import Link from "next/link";
import { Pencil } from "lucide-react";
import { DeleteRowButton } from "@/components/admin/delete-row-button";

interface TableBodyProps {
  table: string;
  rows: Record<string, unknown>[];
  columns: string[];
}

export function TableBody({ table, rows, columns }: TableBodyProps) {
  return (
    <tbody className="divide-y divide-gray-50">
      {rows.map((row) => {
        const rowId = String(row.id);
        return (
          <tr key={rowId} className="hover:bg-gray-50/50 transition-colors">
            <td className="px-4 py-3 text-xs text-gray-400 font-mono">{rowId}</td>
            {columns.map((col) => {
              const val = row[col];
              let display: string;
              if (val === null || val === undefined) display = "—";
              else if (typeof val === "boolean") display = val ? "✓ Yes" : "✗ No";
              else if (Array.isArray(val)) display = `[${val.length} items]`;
              else display = String(val);

              return (
                <td
                  key={col}
                  className="px-4 py-3 text-gray-700 max-w-[200px] truncate"
                  title={display}
                >
                  {display}
                </td>
              );
            })}
            <td className="px-4 py-3">
              <div className="flex items-center justify-end gap-2">
                <Link
                  href={`/admin/table/${table}/${row.id}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Pencil size={11} />
                  Edit
                </Link>
                <DeleteRowButton table={table} id={Number(row.id)} />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
