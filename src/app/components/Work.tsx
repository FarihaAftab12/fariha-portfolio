"use client";

import { motion } from "framer-motion";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section
      id="work"
      className="snap-section flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24 md:px-12"
    >
      <SectionHeading className="mb-14">See What I&apos;ve Built..</SectionHeading>

      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className="card group rounded-xl p-8 md:p-10"
          >
            <h3
              className="font-display mb-4 text-2xl font-bold uppercase leading-tight tracking-wide md:text-3xl"
              style={{ color: "var(--accent)" }}
            >
              {p.title}
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-display rounded-full px-3 py-1 text-xs uppercase tracking-[0.15em]"
                  style={{
                    border: "1px solid var(--border-strong)",
                    color: "var(--muted)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
