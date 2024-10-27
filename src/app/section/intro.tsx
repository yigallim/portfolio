import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeExpo } from "@/lib/global/ease-expo";
import TextAnimation from "@/components/ui/text-animation";
import useLoaded from "@/lib/state/loaded-store";
import poolImg from "@/app/assets/img/background/pool.jpg";
import tarumtImg from "@/app/assets/img/background/tarumt.jpg";
import palmImg from "@/app/assets/img/background/palm.jpg";
import thailandImg from "@/app/assets/img/background/thailand.jpg";

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
        delay: i * 0.34 + 2.48,
        duration: 2.8,
      },
    }),
  };

  return (
    <section
      id="intro"
      ref={ref}
      className={cn("bg-white static", loaded ? "h-[200svh] mb-[-100svh]" : "h-screen")}
    >
      <motion.div
        className="section-inner h-0 relative top-10 z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 3, duration: 2.8, ease: easeExpo }}
      >
        <div className="flex items-center space-x-14">
          <div className="text-neutral-700 base-large font-bold">
            By Yang<sup className="font-medium">&copy;</sup>
          </div>
          <div className="font-medium text-neutral-500 base-normal">
            (Software Engineer & Data Scientist)
          </div>
        </div>
      </motion.div>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-grid-black/[0.09]">
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent,black)]" />
        <div className="section-inner">
          <motion.div
            className="flex space-x-xs origin-bottom"
            style={{ opacity, scale, translateY }}
          >
            <div className="flex flex-col relative">
              <p className="font-medium text-[6.75rem] flex flex-col">
                <TextAnimation
                  delay={2.4}
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
                  delay={2.52}
                  el="p"
                  className="text-[10.25rem] font-semibold tracking-normal leading-none text-neutral-800"
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
          [&>*]:rounded-xl [&>*]:overflow-hidden [&>*]:bg-neutral-100 [&>*]:absolute"
            >
              <motion.div
                className="top-[150px] left-[40px] w-[200px] h-[280px]"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image
                  className="size-full object-cover"
                  src={poolImg}
                  alt="Pool"
                  width={200}
                  height={280}
                />
              </motion.div>
              <motion.div
                className="top-[30px] left-[256px] w-[270px] h-[340px]"
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image
                  className="size-full object-cover"
                  src={tarumtImg}
                  alt="TARUMT"
                  width={270}
                  height={340}
                />
              </motion.div>
              <motion.div
                className="top-[-20px] left-[542px] w-[300px] h-[210px]"
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image
                  className="size-full object-cover"
                  src={palmImg}
                  alt="Palm"
                  width={300}
                  height={210}
                />
              </motion.div>
              <motion.div
                className="top-[206px] left-[542px] w-[200px] h-[220px]"
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image
                  className="size-full object-cover"
                  src={thailandImg}
                  alt="Thailand"
                  width={200}
                  height={220}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
