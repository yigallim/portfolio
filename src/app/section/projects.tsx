import React from "react";
import TextAnimation from "@/components/ui/text-animation";
import { cn } from "@/lib/utils";

type TechTagProps = {
  className?: string;
  children: string;
};

export const TechTag = ({ className, children }: TechTagProps) => {
  return (
    <div
      className={cn(
        "rounded-full text-[11px] lg:text-[12.5px] w-max border lg:border-2 border-transparent",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.96),rgba(0,0,0,0.96)), linear-gradient(to right,#8980ED, #EC787F, #FFC170)",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <div className="py-1 px-2.5 sm:py-1.5 sm:px-3 md:py-1 md:px-2.5 lg:py-1.5 lg:px-3">
        {children}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="section-spacing overflow-hidden">
      <TextAnimation whileInView className="section-desc">
        Selected Works “作品”
      </TextAnimation>
      <TextAnimation whileInView el="h2" className="section-heading mt-3xs">
        PROJECT SHOWCASE.
      </TextAnimation>
      <div className="mt-3xl w-full max-md:flex-col flex items-center max-md:space-y-xl md:space-x-lg lg:space-x-xl">
        <a className="w-full md:w-[57%]">
          <div className="w-full mb-xs lg:mb-sm rounded-[4%] aspect-[6/6.5] md:aspect-[6/7] relative overflow-hidden bg-neutral-700"></div>
          <div className="text-neutral-100 flex items-center justify-between flex-wrap gap-x-md lg:gap-x-lg gap-y-3xs lg:gap-y-2xs">
            <h3 className="heading-6 lg:heading-5 font-semibold">Food Ordering System</h3>
            <div className="flex space-x-3xs lg:space-x-2 items-start justify-end">
              <TechTag>HTML</TechTag>
              <TechTag>CSS</TechTag>
              <TechTag>Javascript</TechTag>
            </div>
          </div>
        </a>
        <a className="w-full flex-1">
          <div className="w-full mb-2xs lg:mb-xs rounded-[4%] aspect-[6/6.5] relative overflow-hidden bg-neutral-700"></div>
          <div className="text-neutral-100 flex items-center justify-between flex-wrap gap-x-md lg:gap-x-lg gap-y-3xs lg:gap-y-2xs">
            <h3 className="heading-6 lg:heading-5 font-semibold">Tetris Clone</h3>
            <div className="flex space-x-3xs lg:space-x-2 items-start justify-end">
              <TechTag>HTML</TechTag>
              <TechTag>CSS</TechTag>
              <TechTag>Javascript</TechTag>
            </div>
          </div>
        </a>
      </div>
      <div className="mt-xl lg:mt-3xl w-full max-md:flex-col flex items-center gap-xl md:gap-lg lg:gap-xl">
        <a className="w-full flex-1">
          <div className="w-full mb-2xs lg:mb-xs rounded-[4%] aspect-[6/6.5] relative overflow-hidden bg-neutral-700"></div>
          <div className="text-neutral-100 flex items-center justify-between flex-wrap gap-x-md lg:gap-x-lg gap-y-3xs lg:gap-y-2xs">
            <h3 className="heading-6 lg:heading-5 font-semibold">Tetris Clone</h3>
            <div className="flex space-x-3xs lg:space-x-2 items-start justify-end">
              <TechTag>HTML</TechTag>
              <TechTag>CSS</TechTag>
              <TechTag>Javascript</TechTag>
            </div>
          </div>
        </a>
        <a className="w-full md:w-[57%]">
          <div className="w-full mb-xs lg:mb-sm rounded-[4%] aspect-[6/6.5] md:aspect-[6/7] relative overflow-hidden bg-neutral-700"></div>
          <div className="text-neutral-100 flex items-center justify-between flex-wrap gap-x-md lg:gap-x-lg gap-y-3xs lg:gap-y-2xs">
            <h3 className="heading-6 lg:heading-5 font-semibold">Food Ordering System</h3>
            <div className="flex space-x-3xs lg:space-x-2 items-start justify-end">
              <TechTag>HTML</TechTag>
              <TechTag>CSS</TechTag>
              <TechTag>Javascript</TechTag>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
