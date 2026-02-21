"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks } from "@/data/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();

  const sectionIds = useMemo(
    () => navLinks.map((l) => l.href.replace("#", "")),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  const isScrolled = scrollY > 50;
  const isHidden = scrollDirection === "down" && scrollY > 200 && !mobileOpen;

  // Refs for measuring nav link positions
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

  // Recalculate on resize
  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

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
        {/* Logo */}
        <a href="#inicio" className="text-xl font-bold">
          <span className="text-primary">&lt;</span>
          JM
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop nav */}
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
          {/* Single indicator that slides horizontally */}
          <motion.div
            className="pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-primary"
            animate={{
              left: indicator.left,
              width: indicator.width,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-text-secondary transition-colors hover:text-primary md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
