"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "@/components/sketchMotion";
import { site } from "@/config/site";

export function FAQ() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-hand text-3xl font-bold tracking-tight md:text-5xl">
          {site.faq.title}
        </h2>
        <motion.ul
          className="mt-10 space-y-4"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reduce ? undefined : stagger}
        >
          {site.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.li key={item.q} variants={reduce ? undefined : fadeUp}>
                <div className="relative">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 border-2 border-ink"
                    style={{ filter: "url(#sketch-wobble)", borderRadius: 0 }}
                  />
                  <button
                    type="button"
                    className="relative flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-hand text-2xl leading-tight">{item.q}</span>
                    <span className="font-hand text-3xl leading-none" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="relative px-5 pb-5 font-sans text-base leading-relaxed text-ink-muted">
                      {item.a}
                    </p>
                  )}
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
