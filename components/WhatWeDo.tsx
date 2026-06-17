import type { ReactNode } from "react";
import { ArrowRight, Globe, ShoppingBag, Zap } from "lucide-react";

import { industryTags } from "@/components/site-data";
import { SectionIntro } from "@/components/section-intro";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-block standard-section what-section">
      <div className="page-container">
        <SectionIntro
          label="// 03 WHAT WE DO"
          title={
            <>
              Websites built around <em>business outcomes.</em>
            </>
          }
          text="Every project starts with what the business needs - then design and code support that goal."
        />

        <div className="bento-grid">
          <article className="bento-card bento-landing">
            <BentoIcon icon={<Zap aria-hidden size={28} />} />
            <h3>Landing Pages</h3>
            <p>
              Focused one-pagers for promotions, service offers, events, and
              fast lead capture.
            </p>
            <a href="#contact">
              Start a landing page <ArrowRight aria-hidden size={15} />
            </a>
          </article>

          <article className="bento-card bento-business">
            <BentoIcon icon={<Globe aria-hidden size={28} />} />
            <h3>Business Websites</h3>
            <p>
              Multi-page sites with service details, booking links, Google Maps,
              contact forms, and clear customer journeys.
            </p>
            <a href="#contact">
              Plan a website <ArrowRight aria-hidden size={15} />
            </a>
          </article>

          <article className="bento-card bento-store">
            <BentoIcon icon={<ShoppingBag aria-hidden size={28} />} />
            <h3>Online Stores & Booking</h3>
            <p>
              Ecommerce, booking flows, menus, and catalog experiences that make
              it easy for customers to act.
            </p>
            <a href="#contact">
              Improve conversions <ArrowRight aria-hidden size={15} />
            </a>
          </article>

          <article className="bento-card bento-before-after">
            <div className="before-after-header">
              <h3>What a modernized site should fix.</h3>
            </div>
            <div className="before-after-grid">
              <div>
                <span className="state-label state-before">Before</span>
                <ul>
                  <li>Outdated visuals, weak mobile layout</li>
                  <li>Scattered information, unclear next steps</li>
                  <li>Low customer confidence</li>
                </ul>
              </div>
              <div>
                <span className="state-label state-after">After</span>
                <ul>
                  <li>Fresh presentation, fast loading</li>
                  <li>Simple flow, trust-building layout</li>
                  <li>Obvious ways to contact, book, or buy</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bento-card bento-industries">
            <h3>Built for businesses like yours.</h3>
            <div className="industry-pill-grid">
              {industryTags.map((tag) => (
                <span className="industry-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
        <p className="before-after-caption">
          A better website removes friction from the moment someone lands on it.
        </p>
      </div>
    </section>
  );
}

function BentoIcon({ icon }: { icon: ReactNode }) {
  return <div className="bento-icon">{icon}</div>;
}
