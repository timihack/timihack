"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Enhances the server-rendered page; content stays visible if JS is disabled. */
export default function SiteAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });
      entrance
        .from(".site-header .header-inner", { y: -18, opacity: 0, duration: 0.65 })
        .from(".hero-status", { y: 18, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".hero h1", { y: 48, opacity: 0, duration: 0.85 }, "-=0.25")
        .from(".hero-summary", { y: 24, opacity: 0, duration: 0.65 }, "-=0.45")
        .from(".hero-actions > a", { y: 18, opacity: 0, stagger: 0.12, duration: 0.5 }, "-=0.35")
        .from(".hero-art", { opacity: 0, x: 35, duration: 1.05 }, "-=0.8");

      gsap.to(".hero-mono", {
        y: -14,
        rotation: -3,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // The panels themselves use native CSS sticky positioning.
      // ScrollTrigger provides a restrained, scroll-scrubbed depth effect
      // on the contents, so scrolling remains fully reversible.
      const desktop = window.matchMedia("(min-width: 751px)");
      if (desktop.matches) {
        gsap.utils.toArray<HTMLElement>(".stack-panel").slice(1).forEach((panel) => {
          const visual = panel.querySelector<HTMLElement>(
            ".section-top, .about-main, .contact-inner"
          );
          if (!visual) return;

          gsap.fromTo(
            visual,
            { y: 45 },
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "top top",
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            }
          );
        });
      }

      const groups = [
        [".about-index", ".about-section"],
        [".work-section .section-top", ".work-section"],
        [".expertise-section .section-top", ".expertise-section"],
        [".experience-section .section-top", ".experience-section"],
        [".contact-inner > *", ".contact-section"],
      ] as const;

      groups.forEach(([selector, trigger]) => {
        gsap.from(selector, {
          y: 35,
          opacity: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 83%", once: true },
        });
      });

      const cards = [
        [".project-card", ".projects-grid"],
        [".capability-card", ".capability-grid"],
        [".experience-row", ".experience-list"],
      ] as const;

      cards.forEach(([selector, trigger]) => {
        gsap.from(selector, {
          y: 36,
          opacity: 0,
          duration: 0.75,
          stagger: 0.11,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 85%", once: true },
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
