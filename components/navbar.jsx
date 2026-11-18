"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/75 backdrop-blur-xl">
      <nav className="section-wrap flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <a
          className="font-mono text-lg font-semibold tracking-[-0.08em] text-white"
          href="#home"
          onClick={closeMenu}
          aria-label="Athul C home"
        >
          ATHUL<span className="text-accent">.</span>C
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? "nav-link-active" : ""}`}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
          <a className="button-outline !px-4 !py-2 text-xs" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
        <button
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/[0.06] bg-ink/95 px-6 pb-5 pt-3 md:hidden">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className={`block border-b border-white/[0.06] py-3 text-sm ${
                active === id ? "text-white" : "text-slate-400"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
