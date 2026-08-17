"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar — transparent over the hero, frosted glass after scrolling.
 * Highlights the section currently in view and includes a responsive
 * mobile menu. Edit the links in src/data/site.ts → nav.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(siteConfig.nav.map((item) => item.id));

  /* Frosted-glass background once the page is scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock page scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-white/[0.06] bg-ink-950/85 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between">
        {/* Logo — click to return to top */}
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — back to top`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10 font-display text-sm font-semibold text-gold-300 transition-colors group-hover:border-gold-400/70 group-hover:bg-gold-500/20">
            {siteConfig.initials}
          </span>
          <span className="hidden font-display text-lg tracking-wide text-mist-100 sm:block">
            {siteConfig.name}
            <span className="text-gold-500">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                active === item.id
                  ? "text-gold-300"
                  : "text-mist-300 hover:text-mist-100",
              )}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
              {/* Animated gold underline that slides between links */}
              {active === item.id && (
                <motion.span
                  layoutId="nav-active-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            href={siteConfig.resume.path}
            download={siteConfig.resume.fileName}
            variant="outline"
            size="sm"
            icon={<Download className="h-4 w-4" />}
          >
            Download CV
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-200 transition-colors hover:border-gold-400/50 hover:text-gold-300 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-5">
              {siteConfig.nav.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    active === item.id
                      ? "bg-gold-500/10 text-gold-300"
                      : "text-mist-300 hover:bg-white/[0.04] hover:text-mist-100",
                  )}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-4 px-2 pb-2">
                <Button
                  href={siteConfig.resume.path}
                  download={siteConfig.resume.fileName}
                  variant="primary"
                  className="w-full"
                  icon={<Download className="h-4 w-4" />}
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
