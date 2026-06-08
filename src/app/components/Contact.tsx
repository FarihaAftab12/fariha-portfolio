"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { social } from "../data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="snap-section flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24 md:px-12"
    >
      <SectionHeading className="mb-14">Let&apos;s Have ☕</SectionHeading>

      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2">
        {/* form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="card flex flex-col gap-6 rounded-xl p-8 md:p-10"
        >
          <div className="flex flex-col gap-2">
            <label
              className="font-display text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--muted)" }}
            >
              Name
            </label>
            <input className="field rounded px-4 py-3" placeholder="Ada Lovelace…" />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-display text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--muted)" }}
            >
              Email
            </label>
            <input
              type="email"
              className="field rounded px-4 py-3"
              placeholder="ada@analytical.engine"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-display text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--muted)" }}
            >
              Message
            </label>
            <textarea
              rows={4}
              className="field rounded px-4 py-3"
              placeholder="Your message…"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="font-display mt-2 py-4 text-sm uppercase tracking-[0.25em] transition-colors"
            style={{ border: "1px solid var(--border-strong)", color: "var(--fg)" }}
          >
            {sent ? "Thanks — I'll be in touch!" : "Submit"}
          </button>
        </motion.div>

        {/* info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card flex flex-col justify-center gap-8 rounded-xl p-8 md:p-12"
        >
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--fg)" }}>
            If you have an awesome idea, let&apos;s put my engineering skills and
            your creativity on the table and build a great application
            together! 🙌
          </p>
          <div>
            <p className="mb-4" style={{ color: "var(--muted)" }}>
              You can find me here as well:
            </p>
            <div className="flex items-center gap-6">
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={26} style={{ color: "var(--accent)" }} />
              </a>
              <a href={social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaXTwitter size={26} style={{ color: "var(--accent)" }} />
              </a>
              <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={28} style={{ color: "var(--fg)" }} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="mt-16 text-sm" style={{ color: "var(--faint)" }}>
        © {new Date().getFullYear()} Fariha Aftab · Built with Next.js &amp; Framer Motion
      </p>
    </section>
  );
}
