"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowScribble, Doodle, type DoodleKey } from "@/components/doodles";
import { fadeUp, stagger } from "@/components/sketchMotion";
import { site } from "@/config/site";

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section id="how-it-works" className="bg-paper-shade px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[22ch] font-hand text-3xl font-bold tracking-tight md:text-5xl">
          {site.howItWorks.title}
        </h2>
        <motion.ol
          className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reduce ? undefined : stagger}
        >
          {site.howItWorks.steps.map((step, i) => (
            <motion.li
              key={step.n}
              className="relative"
              variants={reduce ? undefined : fadeUp}
            >
              {i < site.howItWorks.steps.length - 1 && (
                <ArrowScribble className="pointer-events-none absolute -right-8 top-6 hidden h-8 w-14 text-ink md:block" />
              )}
              <Doodle name={step.doodle as DoodleKey} className="h-9 w-9 text-ink" />
              <p className="mt-5 font-hand text-4xl leading-none text-ink">{step.n}</p>
              <h3 className="mt-3 font-hand text-3xl font-semibold">{step.title}</h3>
              <p className="mt-2 max-w-[36ch] font-sans text-base leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
