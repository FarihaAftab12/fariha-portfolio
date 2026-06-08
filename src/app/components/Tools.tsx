"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toolCategories } from "../data";
import SectionHeading from "./SectionHeading";

export default function Tools() {
  const [active, setActive] = useState(0);
  const tools = toolCategories[active].tools;

  return (
    <section
      id="tools"
      className="snap-section flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24 md:px-12"
    >
      <SectionHeading color="var(--muted)" className="mb-12">
        The Toolbox
      </SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="card w-full max-w-[1100px] rounded-2xl p-6 md:p-12"
      >
        {/* tabs */}
        <div
          className="mb-12 flex flex-wrap justify-between gap-4 border-b pb-1"
          style={{ borderColor: "var(--border)" }}
        >
          {toolCategories.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              className="font-display relative flex-1 pb-3 text-xs uppercase tracking-[0.2em] transition-colors md:text-sm"
              style={{ color: active === i ? "var(--accent)" : "var(--muted)" }}
            >
              {c.label}
              {active === i && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute -bottom-[5px] left-0 h-[2px] w-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-3 gap-y-12 gap-x-6 py-4 md:gap-y-16"
          >
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3"
              >
                <t.Icon
                  size={46}
                  color={t.color}
                  style={{
                    filter:
                      t.color === "#FFFFFF"
                        ? "drop-shadow(0 0 1px rgba(0,0,0,0.4))"
                        : "none",
                  }}
                />
                <span
                  className="text-sm md:text-base"
                  style={{ color: "var(--muted)" }}
                >
                  {t.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p
          className="font-display mt-8 text-right text-xs uppercase tracking-[0.25em]"
          style={{ color: "var(--faint)" }}
        >
          Scroll to explore · {active + 1} / {toolCategories.length}
        </p>
      </motion.div>
    </section>
  );
}
