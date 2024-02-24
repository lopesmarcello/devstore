import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge(className, "bg-zinc-50/25 animate-pulse rounded-md")}
      {...props}
    />
  );
}
