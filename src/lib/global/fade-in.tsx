import { easeExpo } from "@/lib/global/ease-expo";

type FadeInOptions = {
  duration?: number;
  amount?: number;
  once?: boolean;
  opacity?: number;
  yOffset?: string | number;
};

const defaultOptions: FadeInOptions = {
  duration: 2.8,
  amount: 1,
  once: true,
  opacity: 0,
  yOffset: "10%",
};

const createFadeInProps = (options: FadeInOptions = {}) => {
  const { duration, amount, once, opacity, yOffset } = { ...defaultOptions, ...options };

  return {
    variants: {
      hidden: { opacity, y: yOffset },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          ease: easeExpo,
          duration,
        },
      },
    },
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      once,
      amount,
    },
  };
};

export default createFadeInProps;
