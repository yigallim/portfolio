import { useCallback } from "react";
import { easeExpo } from "./ease-expo";
import { useScrollTo } from "framer-motion-scroll-to-hook";

const useSmoothNavigate = () => {
  const scrollTo = useScrollTo({ duration: 1.36, ease: easeExpo });

  return useCallback(
    (scrollTarget: string | number) => {
      if (typeof scrollTarget === "string") {
        const element = document.getElementById(scrollTarget);
        if (element) scrollTo(element);
      } else if (typeof scrollTarget === "number") {
        scrollTo(scrollTarget);
      }
    },
    [scrollTo]
  );
};

export default useSmoothNavigate;
