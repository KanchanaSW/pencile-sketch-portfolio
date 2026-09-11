"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wiggle } from "@/components/sketchMotion";

export function SketchBox({
  children,
  className = "",
  shadow = 4,
  wiggleOnHover = false,
}: {
  children: React.ReactNode;
  className?: string;
  shadow?: 4 | 6;
  wiggleOnHover?: boolean;
}) {
  const reduce = useReducedMotion();
  const offset =
    shadow === 6
      ? "translate-x-[6px] translate-y-[6px]"
      : "translate-x-[4px] translate-y-[4px]";

  const inner = (
    <div className={`relative bg-paper ${className}`}>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-ink ${offset}`}
        style={{ filter: "url(#sketch-wobble)" }}
      />
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-paper" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 border-2 border-ink"
        style={{ filter: "url(#sketch-wobble)", borderRadius: 0 }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );

  if (!wiggleOnHover || reduce) {
    return inner;
  }

  return (
    <motion.div
      className="relative h-full"
      variants={wiggle}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {inner}
    </motion.div>
  );
}
