import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeExpo } from "@/lib/global/ease-expo";
import TextAnimation from "@/components/ui/text-animation";
import useLoaded from "@/lib/state/loaded-store";
import bulbsImg from "@/app/assets/img/background/bulbs.jpg";
import palmImg from "@/app/assets/img/background/palm.jpg";
import parisImg from "@/app/assets/img/background/paris.jpg";
import streetsSelfImg from "@/app/assets/img/background/streets_self.jpg";
import { INTRO_ANIMATION_DURATION_FACTOR } from "@/lib/config/constant";

const DELAY_1 = 2.4 * INTRO_ANIMATION_DURATION_FACTOR;
const DELAY_2 = 2.54 * INTRO_ANIMATION_DURATION_FACTOR;
const DELAY_3 = 2.86 * INTRO_ANIMATION_DURATION_FACTOR;
const DELAY_4 = 2.48 * INTRO_ANIMATION_DURATION_FACTOR;

const Intro = () => {
  const { loaded } = useLoaded();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.93]);
  const translateY = useTransform(scrollYProgress, [0, 0.55], [0, 80]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: "10%" },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        ease: easeExpo,
        delay: i * 0.34 + DELAY_4,
        duration: 2.8,
      },
    }),
  };

  return (
    <section
      id="intro"
      ref={ref}
      className={cn("bg-white static", loaded ? "h-[200svh] mb-[-100svh]" : "h-full")}
    >
      <motion.div
        className="section-inner h-0 relative top-lg z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: DELAY_3, duration: 2.8, ease: easeExpo }}
      >
        <div className="flex max-lg:flex-col max-lg:space-y-2xs lg:items-center lg:space-x-xl mr-3xl">
          <div className="text-neutral-700 base-large font-bold">
            By Yang<sup className="font-medium">&copy;</sup>
          </div>
          <div className="font-medium text-neutral-500 base-normal">
            (Software Engineer & Data Scientist)
          </div>
        </div>
      </motion.div>
      <div className="sticky top-0 h-dvh overflow-hidden flex lg:items-center bg-grid-black/[0.09]">
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent,black)]" />
        <div className="section-inner w-full max-lg:h-full">
          <motion.div
            className="h-full flex flex-col sm:justify-end h-origin-bottom relative lg:hidden pt-3xl pb-xl md:pb-lg"
            style={{ opacity, scale, translateY }}
          >
            <div className="max-sm:flex-1 items-center flex w-full">
              <div className="w-full flex items-start gap-x-2xs n">
                <motion.div
                  className="image-shadow max-sm:hidden mt-[12.8%] flex-[0.2597] aspect-[5/7] overflow-hidden bg-neutral-400 rounded-xl"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <Image className="size-full object-cover" src={parisImg} alt="Paris" />
                </motion.div>
                <motion.div
                  className="image-shadow flex-1 sm:flex-[0.3506] aspect-[10/11] xs:aspect-[27/34] overflow-hidden bg-neutral-400 rounded-xl"
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <Image className="size-full object-cover" src={streetsSelfImg} alt="Streets" />
                </motion.div>
                <div className="xs:flex-1 sm:flex-[0.3896]">
                  <motion.div
                    className="image-shadow max-xs:hidden w-full aspect-[11/7] overflow-hidden bg-neutral-400 rounded-xl"
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                  >
                    <Image className="size-full object-cover" src={palmImg} alt="Palm" />
                  </motion.div>
                  <motion.div
                    className="image-shadow max-xs:hidden mt-2xs overflow-hidden w-[70%] aspect-square bg-neutral-400 rounded-xl"
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                  >
                    <Image className="size-full object-cover" src={bulbsImg} alt="Bulbs" />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="mt-sm sm:mt-xl md:mt-lg flex max-sm:flex-col gap-x-md justify-between sm:items-end relative">
              <p className="heading-3 flex flex-col">
                <TextAnimation
                  delay={DELAY_1}
                  el="span"
                  className="font-bold tracking-tighter leading-tight text-neutral-800"
                >
                  Lim Yuet Yang
                </TextAnimation>
              </p>
              <motion.div
                custom={0.5}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                className="h-1 bg-neutral-400 mt-2 mb-3 rounded-lg"
              />
              <div className="flex sm:flex-col-reverse items-end gap-y-3xs sm:gap-y-xs">
                <TextAnimation
                  delay={DELAY_2}
                  el="p"
                  className="heading-1 font-bold tracking-normal leading-none text-neutral-800"
                >
                  林業陽
                </TextAnimation>
                <motion.p
                  custom={0.5}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                  className="base-normal sm:base-large text-neutral-500 font-semibold max-sm:ml-sm"
                >
                  /lín yè yáng/
                </motion.p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex space-x-xs origin-bottom max-lg:hidden"
            style={{ opacity, scale, translateY }}
          >
            <div className="flex flex-col relative">
              <p className="text-[6.75rem] flex flex-col">
                <TextAnimation
                  delay={DELAY_1}
                  el="span"
                  className="font-bold tracking-tighter leading-tight text-neutral-800"
                >
                  Lim Yuet Yang
                </TextAnimation>
              </p>
              <motion.div
                custom={0.5}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                className="h-1.5 bg-neutral-400 mr-10 mt-8 mb-10 rounded-lg"
              />
              <div className="flex space-x-3xs justify-between items-end">
                <TextAnimation
                  delay={DELAY_2}
                  el="p"
                  className="text-[10.25rem] font-bold tracking-normal leading-none text-neutral-800"
                >
                  林業陽
                </TextAnimation>
                <motion.p
                  custom={0.5}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                  className="text-[28px] text-neutral-500 font-semibold"
                >
                  /lín yè yáng/
                </motion.p>
              </div>
            </div>
            <div
              className="overflow-visible z-10 relative top-[-80px] h-[300px] flex-1 w-[800px] 
          [&>*]:rounded-xl [&>*]:overflow-hidden [&>*]:bg-neutral-400 [&>*]:absolute"
            >
              <motion.div
                className="image-shadow top-[150px] left-[40px] w-[200px] h-[280px]"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image className="size-full object-cover" src={parisImg} alt="Paris" />
              </motion.div>
              <motion.div
                className="image-shadow top-[30px] left-[256px] w-[270px] h-[340px]"
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image className="size-full object-cover" src={streetsSelfImg} alt="Streets" />
              </motion.div>
              <motion.div
                className="image-shadow top-[-20px] left-[542px] w-[300px] h-[210px]"
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image className="size-full object-cover" src={palmImg} alt="Palm" />
              </motion.div>
              <motion.div
                className="image-shadow top-[206px] left-[542px] w-[200px] h-[220px]"
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image className="size-full object-cover" src={bulbsImg} alt="Bulbs" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
