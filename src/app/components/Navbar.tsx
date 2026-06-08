"use client";
/* eslint-disable react-hooks/set-state-in-effect -- intentional mount-time sync for SSR-safe theme + persisted likes */

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Heart, Moon, Sun } from "lucide-react";

const links = [
  { id: "tools", label: "Tools" },
  { id: "work", label: "Work" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [likes, setLikes] = useState(108);
  const [liked, setLiked] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // restore like state
  useEffect(() => {
    const stored = localStorage.getItem("fa_likes");
    const didLike = localStorage.getItem("fa_liked") === "1";
    if (stored) setLikes(parseInt(stored, 10));
    setLiked(didLike);
  }, []);

  // track which section is in view
  useEffect(() => {
    const ids = ["hero", "tools", "work", "blogs", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.55 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleLike = () => {
    const next = liked ? likes - 1 : likes + 1;
    setLikes(next);
    setLiked(!liked);
    localStorage.setItem("fa_likes", String(next));
    localStorage.setItem("fa_liked", !liked ? "1" : "0");
  };

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12"
        style={{ backdropFilter: "blur(6px)" }}
      >
        <button
          onClick={() => go("hero")}
          className="font-display text-lg font-semibold tracking-wide"
          style={{ color: "var(--fg)" }}
        >
          Fariha Aftab
        </button>

        <nav className="flex items-center gap-5 md:gap-8">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="font-display text-sm uppercase tracking-[0.18em] transition-colors"
                  style={{
                    color:
                      active === l.id ? "var(--accent)" : "var(--muted)",
                    borderBottom:
                      active === l.id
                        ? "1px solid var(--accent)"
                        : "1px solid transparent",
                    paddingBottom: 2,
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLike}
            className="flex items-center gap-1.5 font-display text-sm"
            style={{ color: "var(--fg)" }}
            aria-label="like this site"
          >
            <span>{likes}</span>
            <Heart
              size={17}
              className="transition-transform active:scale-125"
              fill={liked ? "#e0245e" : "none"}
              color={liked ? "#e0245e" : "#e0245e"}
            />
          </button>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center gap-2"
            aria-label="toggle theme"
          >
            <span
              className="relative inline-flex h-[18px] w-9 items-center rounded-full transition-colors"
              style={{
                background: isDark ? "var(--accent)" : "var(--faint)",
              }}
            >
              <span
                className="inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform"
                style={{
                  transform: isDark ? "translateX(20px)" : "translateX(2px)",
                }}
              />
            </span>
            {isDark ? (
              <Moon size={16} style={{ color: "var(--muted)" }} />
            ) : (
              <Sun size={16} style={{ color: "var(--gold)" }} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
