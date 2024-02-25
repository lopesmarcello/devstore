"use client";

import { useSearchParams } from "next/navigation";

export function CurrentSearch() {
  const search = useSearchParams();
  return (
    <p className="text-sm">
      Resultados para: <span className="font-semibold">{search.get("q")}</span>
    </p>
  );
}
