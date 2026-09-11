"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SketchBox } from "@/components/SketchBox";
import { fadeUp, stagger } from "@/components/sketchMotion";
import { site } from "@/config/site";

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-hand text-3xl font-bold tracking-tight md:text-5xl">
          {site.testimonials.title}
        </h2>
        <motion.ul
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reduce ? undefined : stagger}
        >
          {site.testimonials.items.map((item) => (
            <motion.li key={item.name} variants={reduce ? undefined : fadeUp}>
              <SketchBox className="h-full p-6" wiggleOnHover>
                <p className="font-sans text-base leading-relaxed text-ink">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span
                    className="relative flex h-10 w-10 items-center justify-center font-hand text-lg"
                    aria-hidden
                  >
                    <span
                      className="absolute inset-0 border-2 border-ink"
                      style={{
                        filter: "url(#sketch-wobble)",
                        borderRadius: "999px",
                      }}
                    />
                    <span className="relative">{item.initials}</span>
                  </span>
                  <p className="font-sans text-sm text-ink-muted">
                    {item.name}, {item.role}
                  </p>
                </div>
              </SketchBox>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
