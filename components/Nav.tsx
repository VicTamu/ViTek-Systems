"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/components/site-config";
import { navLinks } from "@/components/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionId = (href: string) => href.slice(href.indexOf("#") + 1);

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((link) =>
        document.querySelector<HTMLElement>(`#${sectionId(link.href)}`)
      )
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.12, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.toggleAttribute("data-menu-open", isMenuOpen);

    return () => {
      document.body.removeAttribute("data-menu-open");
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={cn("site-header", isScrolled && "is-scrolled")}>
        <a
          className="wordmark"
          href="/#home"
          onClick={closeMenu}
          aria-label={`${siteConfig.name} home`}
        >
          <span className="wordmark-lockup">
            <span className="wordmark-bracket">&lt;</span>
            <svg
              className="wordmark-mark"
              viewBox="1.3 1.3 17.4 18.4"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient
                  id="wordmark-gradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0" stopColor="#7c5cfc" />
                  <stop offset="1" stopColor="#9b7fff" />
                </linearGradient>
              </defs>
              <path
                d="M3 3 L10 18 L17 3"
                fill="none"
                stroke="url(#wordmark-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="wordmark-text">
              iTek <span className="wordmark-s">S</span>ystems
              <span className="wordmark-bracket">&gt;</span>
              <span className="wordmark-cursor" aria-hidden="true">
                |
              </span>
            </span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(activeSection === sectionId(link.href) && "active")}
              onClick={() => setActiveSection(sectionId(link.href))}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild className="desktop-quote" size="sm">
          <a href="/#contact">Free Quote</a>
        </Button>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08 } },
                closed: { transition: { staggerChildren: 0.04 } },
              }}
            >
              <motion.div
                className="mobile-menu-mark"
                aria-hidden="true"
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: 24, opacity: 0 },
                }}
              >
                <svg viewBox="0 0 48 36" focusable="false">
                  <defs>
                    <linearGradient
                      id="mobile-menu-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0" stopColor="#7c5cfc" />
                      <stop offset="1" stopColor="#9b7fff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M7 10 L24 33 L41 10"
                    fill="none"
                    stroke="url(#mobile-menu-gradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(sectionId(link.href));
                    closeMenu();
                  }}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 24, opacity: 0 },
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                className="mobile-quote"
                href="/#contact"
                onClick={closeMenu}
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: 24, opacity: 0 },
                }}
              >
                Get a Free Quote
              </motion.a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
