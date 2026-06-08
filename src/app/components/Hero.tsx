"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown } from "lucide-react";
import Skeleton from "./Skeleton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Apple-style: avatar drifts up + fades as you scroll past
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const avatarOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const word = (txt: string, delay: number, color?: string) => (
    <motion.span
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "block", color }}
    >
      {txt}
    </motion.span>
  );

  return (
    <section
      id="hero"
      ref={ref}
      className="snap-section relative flex min-h-[100dvh] items-center px-6 pt-24 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 md:grid-cols-12">
        {/* Left: layered name */}
        <div className="md:col-span-5">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display mb-2 text-base font-medium tracking-wide"
            style={{ color: "var(--fg)" }}
          >
            Fariha Aftab
          </motion.p>
          <h1 className="hero-name text-[18vw] leading-[0.82] md:text-[8.5vw]">
            {word("Fariha", 0.05, "var(--fg)")}
            {word("Aftab", 0.15, "var(--outline-text)")}
          </h1>
          <h2 className="hero-name mt-3 text-[7vw] md:text-[3vw]">
            {word("Senior", 0.3, "var(--outline-text)")}
            {word("Software", 0.4, "var(--outline-text)")}
            {word("Engineer", 0.5, "var(--outline-text)")}
          </h2>
        </div>

        {/* Center: avatar */}
        <div className="relative flex justify-center md:col-span-4">
          <motion.div
            style={{ y: avatarY, scale: avatarScale, opacity: avatarOpacity }}
            className="relative h-[340px] w-[280px] md:h-[560px] md:w-[487px]"
          >  
            {!loaded && (
              <Skeleton className="absolute inset-0 rounded-3xl" />
            )}
            <Image
              src="/fariha avtar.png"
              alt="Fariha Aftab avatar"
              fill
              priority
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(true)}
              className={`object-contain transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        </div>

        {/* Right: typewriter + CTA */}
        <div className="flex flex-col items-start gap-10 md:col-span-3">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl md:text-2xl"
            style={{ color: "var(--muted)" }}
          >
            <Typewriter
              words={[
                "React.js,",
                "Angular,",
                "Next.js,",
                "TypeScript,",
                "Node.js,",
                "Claude AI,",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1400}
            />
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-display group inline-flex items-center gap-3 px-7 py-4 text-sm uppercase tracking-[0.2em] transition-colors"
            style={{ border: "1px solid var(--border-strong)", color: "var(--fg)" }}
          >
            Let&apos;s Connect
            <span
              className="h-2 w-2 rounded-full transition-transform group-hover:scale-150"
              style={{ background: "var(--accent)" }}
            />
          </motion.a>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--muted)" }}
      >
        <span className="font-display text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
