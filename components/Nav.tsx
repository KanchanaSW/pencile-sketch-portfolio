"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FoldedCornerDoodle } from "@/components/doodles";
import { SketchButton } from "@/components/SketchButton";
import { wiggle } from "@/components/sketchMotion";
import { site } from "@/config/site";

export function Nav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-10 bg-paper">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 text-ink">
          <FoldedCornerDoodle className="h-5 w-5" />
          <span className="font-hand text-2xl leading-none">
            {site.identity.monogram}
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {site.nav.links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="font-hand text-xl leading-none text-ink underline decoration-transparent underline-offset-4 hover:decoration-ink"
              variants={reduce ? undefined : wiggle}
              initial="rest"
              animate="rest"
              whileHover={reduce ? undefined : "hover"}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="relative px-3 py-2 font-hand text-xl md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 border-2 border-ink"
              style={{ filter: "url(#sketch-wobble)" }}
            />
            <span className="relative">{open ? "Close" : "Menu"}</span>
          </button>
          <SketchButton
            href={`mailto:${site.identity.email}`}
            className="px-5 py-2 text-xl md:px-6"
          >
            {site.nav.cta}
          </SketchButton>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="grid gap-3 px-4 pb-4 md:hidden"
          aria-label="Mobile"
        >
          {site.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-hand text-2xl text-ink underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-ink"
        style={{ filter: "url(#sketch-wobble)" }}
      />
    </header>
  );
}
