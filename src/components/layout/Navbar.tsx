"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { HiMenu, HiTranslate, HiX } from "react-icons/hi";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { scrollDirection, scrollY } = useScrollDirection();

  const navLinks = t.nav;
  const sectionIds = useMemo(
    () => navLinks.map((l) => l.href.replace("#", "")),
    [navLinks]
  );
  const activeSection = useActiveSection(sectionIds);

  const isScrolled = scrollY > 50;
  const isHidden = scrollDirection === "down" && scrollY > 200 && !mobileOpen;

  const navRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const ulRef = useRef<HTMLUListElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const activeEl = navRefs.current.get(activeSection);
    const container = ulRef.current;
    if (!activeEl || !container) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();

    setIndicator({
      left: activeRect.left - containerRect.left + activeRect.width * 0.2,
      width: activeRect.width * 0.6,
    });
  }, [activeSection]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        isScrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#inicio" className="text-xl font-bold">
          <span className="text-primary">&lt;</span>
          JM
          <span className="text-primary">/&gt;</span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <ul ref={ulRef} className="relative hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    ref={(el) => {
                      if (el) navRefs.current.set(id, el);
                    }}
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-text-secondary hover:text-text"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <motion.div
              className="pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-primary"
              animate={{
                left: indicator.left,
                width: indicator.width,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          </ul>

          <div className="flex items-center gap-1 rounded-full border border-border bg-surface/80 p-1 shadow-[0_0_0_1px_rgba(15,23,42,0.4)] backdrop-blur-sm">
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all",
                language === "en"
                  ? "bg-primary text-background"
                  : "text-text-secondary hover:text-text"
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all",
                language === "es"
                  ? "bg-primary text-background"
                  : "text-text-secondary hover:text-text"
              )}
            >
              ES
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 rounded-full border border-border bg-surface/80 px-2 py-1 text-[11px] font-semibold text-text-secondary shadow-[0_0_0_1px_rgba(15,23,42,0.4)] backdrop-blur-sm"
            aria-label="Language selector"
          >
            <HiTranslate className="text-sm" />
            {language.toUpperCase()}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-text-secondary transition-colors hover:text-primary"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col px-4 py-4">
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-text-secondary hover:text-text"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}

              <li className="mt-3 border-t border-border pt-3">
                <div className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface p-1">
                  {(["en", "es"] as const).map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setLanguage(item);
                        setMobileOpen(false);
                      }}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
                        language === item
                          ? "bg-primary text-background"
                          : "text-text-secondary"
                      )}
                    >
                      {item.toUpperCase()}
                    </button>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
