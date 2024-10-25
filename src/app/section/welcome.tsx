"use client";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import TextAnimation from "@/components/ui/text-animation";

const initialPath = "M0,0 L1,0 L1,1 Q0.5,1,0,1";
const finalPath = "M0,0 L1,0 L1,1 Q0.5,0.74,0,1";
const swipeUpDelay = 2;
const swipeUpDuration = 0.84;

const Welcome = () => {
  const ref = React.useRef(null);

  const animatedValue = useMotionValue(0);
  useEffect(() => {
    const controls = animate(animatedValue, 1, {
      delay: 0.1,
      duration: 1.6,
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
  const description = <TextAnimation delay={0.4}>&copy; Folio 2024</TextAnimation>;

  return (
    <>
      <svg className="w-0 h-0">
        <clipPath id="animated-clip" clipPathUnits="objectBoundingBox">
          <motion.path
            d={initialPath}
            animate={{
              d: finalPath,
            }}
            transition={{
              delay: swipeUpDelay,
              duration: swipeUpDuration,
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
        transition={{ delay: swipeUpDelay, duration: swipeUpDuration, ease: "easeInOut" }}
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
