"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./ui";
import { Icon } from "./Icon";
import { nav } from "@/content/site";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <>
    {/* Outside the header: backdrop-blur would make it the containing block for this fixed element */}
    {open && <div className="fixed inset-0 z-30 md:hidden" onClick={() => setOpen(false)} aria-hidden="true" />}
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${scrolled || open ? "border-b border-line/70 bg-bg/85 backdrop-blur-lg" : ""}`}>
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Code Fix – דף הבית">
          <Logo size={40} />
          <span dir="ltr" className="text-lg font-extrabold tracking-tight">Code <span className="text-gradient">Fix</span></span>
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.slice(0, -1).map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={active(n.href) ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[15px] transition-colors hover:text-ink ${active(n.href) ? "text-ink" : "text-muted"}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex">בואו נדבר</Link>
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="ניווט ראשי" className="border-t border-line/70 px-4 pb-6 md:hidden">
          <ul className="flex flex-col pt-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} aria-current={active(n.href) ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 text-lg ${active(n.href) ? "text-cyan" : "text-ink"}`}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
    </>
  );
}
