"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckDoodle } from "@/components/doodles";
import { SketchBox } from "@/components/SketchBox";
import { SketchButton } from "@/components/SketchButton";
import { fadeUp, stagger } from "@/components/sketchMotion";
import { site } from "@/config/site";

export function Work() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="bg-paper-shade px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-hand text-3xl font-bold tracking-tight md:text-5xl">
          {site.work.title}
        </h2>
        <motion.ul
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reduce ? undefined : stagger}
        >
          {site.work.items.map((tier) => (
            <motion.li key={tier.name} variants={reduce ? undefined : fadeUp}>
              <SketchBox
                className="flex h-full flex-col p-6"
                shadow={tier.featured ? 6 : 4}
                wiggleOnHover
              >
                {tier.tag && (
                  <p className="mb-3 font-hand text-xl text-ink">{tier.tag}</p>
                )}
                <p className="font-hand text-3xl font-semibold">{tier.name}</p>
                <p className="mt-4 font-hand text-5xl leading-none">{tier.price}</p>
                <p className="mt-3 font-sans text-base leading-relaxed text-ink-muted">
                  {tier.blurb}
                </p>
                <ul className="mt-5 space-y-2">
                  {tier.features.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 font-sans text-sm leading-snug text-ink"
                    >
                      <CheckDoodle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <SketchButton
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={tier.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {tier.cta}
                  </SketchButton>
                </div>
              </SketchBox>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-8 font-sans text-sm text-ink-muted">{site.work.footnote}</p>
      </div>
    </section>
  );
}
