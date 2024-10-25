import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { splitWord } from "./text-animation";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const splitWords = splitWord(words[index]) || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, [words, duration]);

  return (
    <>
      {splitWords.map((word, wordIndex) => (
        <motion.span
          key={`${words[index]}-${wordIndex}`}
          style={{ display: "inline-block" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -28, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 1000, damping: 200 },
            opacity: { duration: 0.38 },
          }}
          className={cn("text-neutral-900", className)}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </>
  );
};
