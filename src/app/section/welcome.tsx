"use client";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import TextAnimation from "@/components/ui/text-animation";
import { INTRO_ANIMATION_DURATION_FACTOR } from "@/lib/config/constant";
import { getYear } from "@/lib/utils";

const SWIPE_UP_DELAY = 2 * INTRO_ANIMATION_DURATION_FACTOR;
const SWIPE_UP_DURATION = 0.84 * INTRO_ANIMATION_DURATION_FACTOR;
const SVG_LINE_DURATION = 1.6 * INTRO_ANIMATION_DURATION_FACTOR;

const Welcome = () => {
  const ref = React.useRef(null);

  const animatedValue = useMotionValue(0);
  useEffect(() => {
    const controls = animate(animatedValue, 1, {
      delay: 0.1,
      duration: SVG_LINE_DURATION,
      ease: [0.2, 0, 0.8, 1],
    });
    return controls.stop;
  }, [animatedValue]);

  const pathLengthFirst = useTransform(animatedValue, [0, 1], [0.2, 1.2]);
  const pathLengthSecond = useTransform(animatedValue, [0, 1], [0.15, 1.2]);
  const pathLengthThird = useTransform(animatedValue, [0, 1], [0.1, 1.2]);
  const pathLengthFourth = useTransform(animatedValue, [0, 1], [0.05, 1.2]);
  const pathLengthFifth = useTransform(animatedValue, [0, 1], [0, 1.2]);

  const title = <TextAnimation delay={0.4}>Welcome</TextAnimation>;
  const description = <TextAnimation delay={0.4}>{"© Folio " + getYear()}</TextAnimation>;

  const width = window.innerWidth;
  let curveValue;
  if (width < 640) {
    curveValue = 0.9;
  } else if (width >= 640 && width < 1024) {
    curveValue = 0.82;
  } else {
    curveValue = 0.74;
  }

  return (
    <>
      <svg className="w-0 h-0">
        <clipPath id="animated-clip" clipPathUnits="objectBoundingBox">
          <motion.path
            d="M0,0 L1,0 L1,1 Q0.5,1,0,1"
            animate={{
              d: `M0,0 L1,0 L1,1 Q0.5,${curveValue},0,1`,
            }}
            transition={{
              delay: SWIPE_UP_DELAY,
              duration: SWIPE_UP_DURATION,
              ease: "easeInOut",
            }}
          />
        </clipPath>
      </svg>
      <motion.div
        className="flex items-center bg-black w-full h-[calc(100%+1.6rem)] overflow-hidden origin-top fixed top-0 left-0 z-[999]"
        ref={ref}
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ delay: SWIPE_UP_DELAY, duration: SWIPE_UP_DURATION, ease: "easeInOut" }}
        style={{ clipPath: "url(#animated-clip)" }}
      >
        <GoogleGeminiEffect
          title={title}
          description={description}
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </motion.div>
    </>
  );
};

export default Welcome;
