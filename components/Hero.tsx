"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/components/site-config";
import { trustChips } from "@/components/site-data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="grain" aria-hidden />
      <div className="hero-mesh" aria-hidden />
      <div className="page-container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>
            <span>
              Sharper <br className="mobile-break" />
              websites
            </span>
            <span>
              for small <br className="mobile-break" />
              businesses,
            </span>
            <span>
              <em>impossible</em> <br className="mobile-break" />
              to ignore.
            </span>
          </h1>
          <p>
            {siteConfig.name} builds polished, responsive web experiences that
            give local brands a premium first impression, customer flow, and
            easier paths to contact, book, or buy.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#work">
                See Our Work <ArrowRight aria-hidden size={18} />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">Get a Free Quote</a>
            </Button>
          </div>
          <div
            className="trust-chips"
            aria-label={`${siteConfig.name} project strengths`}
          >
            {trustChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
