"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckDoodle, UnderlineScribble } from "@/components/doodles";
import { SketchBox } from "@/components/SketchBox";
import { SketchButton } from "@/components/SketchButton";
import { fadeUp } from "@/components/sketchMotion";
import { site } from "@/config/site";

export function Hero() {
  const reduce = useReducedMotion();
  const variants = reduce ? undefined : fadeUp;
  const { hero, identity } = site;

  return (
    <section className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={variants}
        >
          <p className="font-hand text-xl text-ink-muted">{hero.eyebrow}</p>
          <h1 className="mt-3 font-hand text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <UnderlineScribble className="mt-2 h-3 w-48 md:w-72" />
          <p className="mt-5 max-w-[48ch] font-sans text-base leading-relaxed text-ink-muted">
            {hero.subhead}
          </p>
          <p className="mt-3 font-hand text-xl text-ink">
            {identity.name} · {identity.role}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <SketchButton href={hero.primaryHref}>{hero.primaryCta}</SketchButton>
            <SketchButton href={hero.secondaryHref} variant="secondary">
              {hero.secondaryCta}
            </SketchButton>
          </div>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <SketchBox className="p-6 md:p-8" shadow={6}>
            <p className="font-hand text-xl text-ink-muted">{hero.aside.kicker}</p>
            <ul className="mt-5 space-y-3">
              {hero.aside.notes.map((note) => (
                <li key={note.text} className="flex items-center gap-3">
                  <CheckDoodle
                    className={`h-5 w-5 shrink-0 ${note.checked ? "text-ink" : "text-ink-muted opacity-40"}`}
                  />
                  <span
                    className={`font-hand text-2xl leading-none ${note.checked ? "text-ink" : "text-ink-muted"}`}
                  >
                    {note.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rotate-[-2deg] font-hand text-3xl font-semibold">
              {hero.aside.stamp}
            </p>
          </SketchBox>
        </motion.div>
      </div>
    </section>
  );
}
