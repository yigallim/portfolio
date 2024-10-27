import React from "react";
import Image from "next/image";
import { ChevronsLeftRightEllipsis, Code, Leaf } from "lucide-react";
import { DataScienceStack, SoftwareTechStack } from "@/components/global/tech-stack";
import { cn } from "@/lib/utils";
import mapImg from "@/app/assets/img/background/map.png";
import pfpImg from "@/app/assets/img/background/pfp.webp";
import Hobbies from "@/components/global/hobbies";
import createFadeInProps from "@/lib/global/fade-in";
import { motion } from "framer-motion";

type BentoBoxProps = {
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  icon?: React.ComponentType;
};

const BentoBox = ({ className, children, title, subtitle, icon: Icon }: BentoBoxProps) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col overflow-hidden bg-white border py-md rounded-bento shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.04),0_12px_24px_rgba(0,0,0,.04)]",
        className
      )}
      {...createFadeInProps({ amount: 0.36 })}
    >
      {title && subtitle && Icon && (
        <div className="px-md mb-sm lg:mb-md">
          <div className="flex items-center space-x-sm mb-2xs">
            {Icon && (
              <>
                {/* 
                // @ts-ignore */}
                <Icon className="min-h-8 min-w-8 md:size-lg text-neutral-800" />
              </>
            )}
            {title && (
              <h5 className="base-large md:sub-heading font-bold text-neutral-800">{title}</h5>
            )}
          </div>
          {subtitle && <p className="text-neutral-600 font-medium base-normal">{subtitle}</p>}
        </div>
      )}
      <div className="flex-1 flex items-center">{children}</div>
    </motion.div>
  );
};

const AboutGrid = () => {
  return (
    <section className="section-inner">
      <div className="md:flex max-md:space-y-xs md:space-x-xs mb-xs">
        <BentoBox
          title="Software Stack"
          subtitle="A curated set of tools and technologies for building robust applications."
          icon={Code}
          className="flex-[0.55] md:flex-[0.7]"
        >
          <div>
            <SoftwareTechStack />
          </div>
        </BentoBox>
        <BentoBox className="max-md:hidden relative flex-[0.45] lg:flex-[0.3] !p-2xs">
          <>
            <Image
              src={mapImg}
              alt="Map"
              className="w-full h-full object-cover rounded-[clamp(0.4375rem,1.094vi,0.875rem)]"
            />
            <Image
              src={pfpImg}
              alt="Profile Picture"
              className="size-xl rounded-full z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shaodw border-2 border-neutral-300 p-1"
            />
          </>
        </BentoBox>
      </div>
      <div className="md:flex max-md:space-y-xs md:space-x-xs">
        <BentoBox
          title="Beyond The Tech"
          subtitle="Interests and hobbies beyond the digital stream."
          icon={Leaf}
          className="flex-[0.4]"
        >
          <Hobbies />
        </BentoBox>
        <BentoBox
          title="Data Science Stack"
          subtitle="My go-to tools and libraries for data analysis and machine learning."
          icon={ChevronsLeftRightEllipsis}
          className="flex-[0.6]"
        >
          <div>
            <DataScienceStack />
          </div>
        </BentoBox>
        <BentoBox className="md:hidden relative aspect-[3/2] !p-2xs">
          <>
            <Image
              src={mapImg}
              alt="Map"
              className="size-full object-cover rounded-[clamp(0.625rem,1.094vi,0.875rem)]"
            />
            <Image
              src={pfpImg}
              alt="Profile Picture"
              className="size-xl rounded-full z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shaodw border-2 border-neutral-300 p-1"
            />
          </>
        </BentoBox>
      </div>
    </section>
  );
};

export default AboutGrid;
