"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wiggle } from "@/components/sketchMotion";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function SketchButton({
  children,
  variant = "primary",
  className = "",
  href,
  target,
  rel,
  type = "button",
  onClick,
}: Props) {
  const reduce = useReducedMotion();
  const filled = variant === "primary";

  const face = (
    <>
      {filled && (
        <span
          aria-hidden
          className="absolute inset-0 bg-ink"
          style={{ filter: "url(#sketch-wobble)" }}
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 border-2 border-ink"
        style={{ filter: "url(#sketch-wobble)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[4px] border border-ink"
        style={{
          filter: "url(#sketch-wobble)",
          borderColor: filled ? "#FAFAF7" : "#1A1A1A",
        }}
      />
      <span className={`relative ${filled ? "text-paper" : "text-ink"}`}>
        {children}
      </span>
    </>
  );

  const classes = `group relative inline-flex items-center justify-center px-7 py-3 font-hand text-2xl leading-none ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        variants={reduce ? undefined : wiggle}
        initial="rest"
        animate="rest"
        whileHover={reduce ? undefined : "hover"}
      >
        {face}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      variants={reduce ? undefined : wiggle}
      initial="rest"
      animate="rest"
      whileHover={reduce ? undefined : "hover"}
    >
      {face}
    </motion.button>
  );
}
