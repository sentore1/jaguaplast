"use client";

import { useTransition } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { deleteRow } from "@/app/admin/(dashboard)/table/actions";

interface Props {
  table: string;
  id: number;
}

export function DeleteRowButton({ table, id }: Props) {
  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm("Delete this row? This cannot be undone.")) return;
    startTransition(() => deleteRow(table, id));
  };

  return (
    <button
      onClick={handleDelete}
      disabled={pending}
      className="inline-flex items-center gap-1.5 rounded-lg border border-red-100 bg-white px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
    >
      {pending ? <Loader2 size={11} className="animate-spin" /> : <Trash2 size={11} />}
      Delete
    </button>
  );
}
