import React from "react";
import { cn } from "../../lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white/95 p-5 shadow-xl backdrop-blur sm:p-7",
        className
      )}
      {...props}
    />
  );
}
