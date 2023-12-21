import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

export const useScrollAnimation = <
  T extends HTMLElement = HTMLDivElement
>() => {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return { ref, controls: mainControls };
};
