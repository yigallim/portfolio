import { easeExpo } from "@/lib/ease-expo";
import { motion } from "framer-motion";
import { ComponentProps, ReactNode } from "react";
import { AnimationProps } from "framer-motion";
import "./kerning.min.css";

export function splitWord(input: string): string[] {
  return input.match(/\S+(?:\s+)?/g) || [];
}

export function splitLetter(input: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;
  let match;
  while ((match = regex.exec(input)) !== null) {
    characters.push(match[0]);
  }
  return characters;
}

export function splitStringWithSpan(
  input: string,
  motionProps?: ComponentProps<typeof motion.span>
): ReactNode {
  return (
    <>
      {splitWord(input).map((wordOrSpace, wordIndex) => (
        <span className="inline-flex overflow-y-clip [&>*]:inline-flex" key={wordIndex}>
          {splitLetter(wordOrSpace).map((letter, letterIndex) => (
            <span className={letter} key={letterIndex}>
              <motion.span {...motionProps}>{letter === " " ? "\u00A0" : letter}</motion.span>
            </span>
          ))}
        </span>
      ))}
    </>
  );
}

type TextAnimationProps = {
  el?: keyof JSX.IntrinsicElements;
  children: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
  whileInView?: boolean;
  childrenTransition?: AnimationProps["transition"];
};

const defaultAnimation = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TextAnimation = ({
  el: Wrapper = "p",
  children,
  className,
  duration = 0.34,
  delay = 0,
  whileInView = false,
  childrenTransition,
  style,
}: TextAnimationProps) => {
  const textLength = children.length;
  const staggerChildren = duration / textLength;

  return (
    <Wrapper style={style} className={className}>
      <motion.span
        className="inline-block"
        initial="hidden"
        animate={whileInView ? undefined : "visible"}
        whileInView={whileInView ? "visible" : undefined}
        viewport={whileInView ? { once: true, amount: 1 } : undefined}
        transition={{
          delayChildren: delay,
          staggerChildren,
        }}
        aria-hidden
      >
        {splitStringWithSpan(children, {
          variants: defaultAnimation,
          transition: {
            opacity: {
              duration: 0.6,
            },
            duration: 1,
            ease: easeExpo,
            ...childrenTransition,
          },
        })}
      </motion.span>
    </Wrapper>
  );
};

export default TextAnimation;
