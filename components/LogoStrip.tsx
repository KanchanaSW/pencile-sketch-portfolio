"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger, wiggle } from "@/components/sketchMotion";
import { site } from "@/config/site";

export function LogoStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-paper-shade px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-hand text-2xl text-ink-muted md:text-3xl">
          {site.logos.label}
        </p>
        <motion.ul
          className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reduce ? undefined : stagger}
        >
          {site.logos.marks.map((mark) => (
            <motion.li
              key={mark}
              variants={reduce ? undefined : fadeUp}
              className="font-hand text-2xl text-ink md:text-3xl"
            >
              <motion.span
                className="inline-block"
                variants={reduce ? undefined : wiggle}
                initial="rest"
                animate="rest"
                whileHover={reduce ? undefined : "hover"}
              >
                {mark}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
