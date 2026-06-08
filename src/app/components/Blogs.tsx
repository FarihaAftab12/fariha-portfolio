"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { blogs } from "../data";
import SectionHeading from "./SectionHeading";

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="snap-section flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24 md:px-12"
    >
      <SectionHeading className="mb-14">Also A Tech Writer.</SectionHeading>

      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2">
        {blogs.map((b, i) => (
          <motion.article
            key={b.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className="card flex flex-col rounded-xl p-8 md:p-10"
          >
            <h3
              className="font-display mb-4 text-xl font-bold uppercase leading-tight tracking-wide md:text-2xl"
              style={{ color: "var(--gold)" }}
            >
              {b.title}
            </h3>
            <p
              className="mb-8 flex-1 leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {b.description}
            </p>
            <div className="flex items-center justify-between">
              <span
                className="font-display rounded-full px-3 py-1 text-xs uppercase tracking-[0.15em]"
                style={{
                  border: "1px solid var(--border-strong)",
                  color: "var(--gold)",
                }}
              >
                {b.tag}
              </span>
              <a
                href={b.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--fg)" }}
              >
                View Post
                <FaLinkedin size={18} style={{ color: "var(--accent)" }} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
