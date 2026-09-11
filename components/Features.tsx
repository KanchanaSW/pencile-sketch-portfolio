"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Doodle, type DoodleKey } from "@/components/doodles";
import { SketchBox } from "@/components/SketchBox";
import { fadeUp, stagger } from "@/components/sketchMotion";
import { site } from "@/config/site";

export function Features() {
  const reduce = useReducedMotion();

  return (
    <section id="craft" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[16ch] font-hand text-3xl font-bold tracking-tight md:text-5xl">
          {site.features.title}
        </h2>
        <motion.ul
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reduce ? undefined : stagger}
        >
          {site.features.items.map((feature) => (
            <motion.li key={feature.title} variants={reduce ? undefined : fadeUp}>
              <SketchBox className="h-full p-6" wiggleOnHover>
                <Doodle name={feature.doodle as DoodleKey} />
                <h3 className="mt-4 font-hand text-2xl font-semibold leading-tight md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-2 font-sans text-base leading-relaxed text-ink-muted">
                  {feature.benefit}
                </p>
              </SketchBox>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
