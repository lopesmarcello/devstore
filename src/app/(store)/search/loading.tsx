"use client";

import { Skeleton } from "@/components/skeleton";
import { useSearchParams } from "next/navigation";

export default function SearchLoading() {
  const search = useSearchParams();

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:{" "}
        <span className="font-semibold">{search.get("q")}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  );
}
