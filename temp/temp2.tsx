import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Intro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.275], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.275], [1, 0.95]);
  const translateY = useTransform(scrollYProgress, [0, 0.275], [0, 40]);

  return (
    <section ref={ref} className="text-5xl h-[200svh] mb-[-100svh] duration-300">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-grid-black/[0.088]">
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent,black)]" />
        <motion.div
          className="flex gap-4 mx-[8%] xl:mx-[9%] 3xl:mx-auto origin-bottom"
          style={{ opacity, scale, translateY }}
        >
          <div className="flex flex-col gap-10 relative">
            <p className="font-medium text-[108px] leading-none flex flex-col">
              <span className="font-bold tracking-tighter text-neutral-800">Lim Yuet Yang</span>
            </p>
            <div className="h-1.5 bg-neutral-400 mr-10" />
            <div className="flex gap-2 justify-between items-end">
              <p className="text-[154px] font-semibold tracking-normal leading-none text-neutral-800">
                林業陽
              </p>
              <p className="text-[28px] text-neutral-500 font-semibold">/lín yè yáng/</p>
            </div>
          </div>
          <div
            className="overflow-visible z-10 relative top-[-100px] h-[300px] flex-1 w-[800px] 
          [&>*]:rounded-xl [&>*]:overflow-hidden [&>*]:bg-neutral-100 [&>*]:absolute"
          >
            <div className="top-[150px] left-[40px] w-[200px] h-[280px]">
              <Image
                className="w-full h-full object-cover"
                src="/img/pool.jpg"
                alt="Pool"
                width={200}
                height={280}
              />
            </div>
            <div className="top-[30px] left-[256px] w-[270px] h-[340px]">
              <Image
                className="w-full h-full object-cover"
                src="/img/tarumt.jpg"
                alt="TARUMT"
                width={270}
                height={340}
              />
            </div>
            <div className="top-[-20px] left-[542px] w-[300px] h-[210px]">
              <Image
                className="w-full h-full object-cover"
                src="/img/palm.jpg"
                alt="Palm"
                width={300}
                height={210}
              />
            </div>
            <div className="top-[206px] left-[542px] w-[200px] h-[220px]">
              <Image
                className="object-cover"
                src="/img/thailand.jpg"
                alt="Thailand"
                width={200}
                height={220}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
