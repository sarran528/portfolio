import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const motionTokens = {
  ease: {
    entrance: "power3.out",
    transition: "power2.inOut",
    hero: "expo.out",
    playful: "elastic.out(1, 0.6)",
  },
  duration: { micro: 0.2, base: 0.6, large: 1.1 },
  stagger: 0.08,
};

export const usePremiumMotion = (rootRef) => {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (reduceMotion) {
        gsap.set("[data-reveal]", { clearProps: "all" });
        return;
      }

      gsap.from("[data-hero-reveal]", {
        y: 36,
        opacity: 0,
        duration: motionTokens.duration.large,
        ease: motionTokens.ease.hero,
        stagger: motionTokens.stagger,
      });

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 28,
          opacity: 0,
          duration: motionTokens.duration.base,
          ease: motionTokens.ease.entrance,
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.from("[data-card]", {
        y: 24,
        opacity: 0,
        duration: motionTokens.duration.base,
        ease: motionTokens.ease.entrance,
        stagger: motionTokens.stagger,
        scrollTrigger: { trigger: "[data-card]", start: "top 84%", once: true },
      });

      gsap.from("[data-skill]", {
        scale: 0.94,
        opacity: 0,
        duration: motionTokens.duration.base,
        ease: motionTokens.ease.entrance,
        stagger: 0.06,
        scrollTrigger: { trigger: "[data-skill]", start: "top 84%", once: true },
      });
    }, root);

    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const sync = (time) => {
      lenis.raf(time * 1000);
      ScrollTrigger.update();
    };
    gsap.ticker.add(sync);
    gsap.ticker.lagSmoothing(1000, 16);

    return () => {
      gsap.ticker.remove(sync);
      lenis.destroy();
      context.revert();
    };
  }, [rootRef]);
};
