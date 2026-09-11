"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SketchBox } from "@/components/SketchBox";
import { SketchButton } from "@/components/SketchButton";
import { fadeUp } from "@/components/sketchMotion";
import { site } from "@/config/site";

export function FinalCta() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="bg-paper-shade px-4 py-20 md:px-6 md:py-28">
      <motion.div
        className="mx-auto max-w-3xl"
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={reduce ? undefined : fadeUp}
      >
        <SketchBox className="px-6 py-12 text-center md:px-12 md:py-16" shadow={6}>
          <h2 className="font-hand text-3xl font-bold tracking-tight md:text-5xl">
            {site.cta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-[42ch] font-sans text-base leading-relaxed text-ink-muted">
            {site.cta.sub}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <SketchButton href={`mailto:${site.identity.email}`}>
              {site.cta.primary}
            </SketchButton>
            <a
              href={site.cta.secondaryHref}
              className="font-hand text-xl text-ink underline underline-offset-4"
            >
              {site.cta.secondary}
            </a>
          </div>
        </SketchBox>
      </motion.div>
    </section>
  );
}
