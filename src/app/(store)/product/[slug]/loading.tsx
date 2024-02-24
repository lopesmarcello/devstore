import { Skeleton } from "@/components/skeleton";

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 items-center">
      <Skeleton className="col-span-2 h-[860px]" />
      <Skeleton className="h-[420px]" />
    </div>
  );
}
