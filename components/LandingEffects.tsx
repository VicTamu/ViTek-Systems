"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LandingEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>(".section-block:not(.work-section)")
        .forEach((section) => {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          });
        });

      gsap.from(".bento-card", {
        scrollTrigger: { trigger: ".bento-grid", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
      });

      gsap.from(".industry-pill", {
        scrollTrigger: { trigger: ".bento-industries", start: "top 82%" },
        y: 10,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.06,
      });

      gsap.from(".build-card", {
        scrollTrigger: { trigger: ".pricing-section", start: "top 75%" },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });

      gsap.from(".maintenance-card", {
        scrollTrigger: { trigger: ".maintenance-grid", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
      });

      gsap.matchMedia().add("(min-width: 900px)", () => {
        const workTrack = document.querySelector<HTMLElement>(".work-track");
        const workSection = document.querySelector<HTMLElement>(".work-section");

        if (!workTrack || !workSection) {
          return undefined;
        }

        const distance = () =>
          Math.max(0, workTrack.scrollWidth - window.innerWidth + 120);

        const tween = gsap.to(workTrack, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: workSection,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => tween.kill();
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
