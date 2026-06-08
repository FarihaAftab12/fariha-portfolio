"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeading({
  children,
  color = "var(--fg)",
  className = "",
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`font-display text-center text-[13vw] font-bold uppercase leading-none tracking-tight md:text-[6vw] ${className}`}
      style={{ color }}
    >
      {children}
    </motion.h2>
  );
}
