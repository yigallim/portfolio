import React from "react";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TechIconProps = {
  icon: string;
  className?: string;
};

const TechIcon = ({ icon, className }: TechIconProps) => {
  return (
    <div
      className={cn(
        "bg-white box-border z-10 border rounded-[12%] size-[clamp(4.5rem,2.86rem+4.545vi,6.5rem)] p-[clamp(0.69rem,0.44rem+0.705vi,1rem)]",
        className
      )}
    >
      <Image
        className="size-full object-cover"
        src={`/img/tech-stack/${icon}.svg`}
        width={64}
        height={64}
        alt="Tech"
      />
    </div>
  );
};

const softwareSlugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "tailwindcss",
  "react",
  "redux",
  "vuedotjs",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "mysql",
  "mongodb",
  "vercel",
  "spring",
  "git",
  "github",
  "visualstudiocode",
  "postman",
  "figma",
];
const dataScienceSlugs = [
  "python",
  "jupyter",
  "anaconda",
  "pandas",
  "numpy",
  "matplotlib",
  "scikitlearn",
  "tensorflow",
  "pytorch",
  "keras",
  "opencv",
  "r",
];

const splitSlugs = (slugs: string[]) => {
  const halfLength = Math.ceil(slugs.length / 2);
  return [slugs.slice(0, halfLength), slugs.slice(halfLength)];
};

const [softwareFirstRow, softwareSecondRow] = splitSlugs(softwareSlugs);
const [dataScienceFirstRow, dataScienceSecondRow] = splitSlugs(dataScienceSlugs);

export const SoftwareTechStack = () => {
  return (
    <>
      <Marquee className="[--duration:38s] p-[clamp(0.375rem,0.25rem+0.313vi,0.5rem)] [--gap:clamp(0.75rem,0.5rem+0.625vi,1rem)]">
        {softwareFirstRow.map((slug: string) => (
          <TechIcon key={slug} icon={slug} />
        ))}
      </Marquee>
      <Marquee
        reverse
        className="mb-3xs [--duration:38s] p-[clamp(0.375rem,0.25rem+0.313vi,0.5rem)] [--gap:clamp(0.75rem,0.5rem+0.625vi,1rem)]"
      >
        {softwareSecondRow.map((slug: string) => (
          <TechIcon key={slug} icon={slug} />
        ))}
      </Marquee>
    </>
  );
};

export const DataScienceStack = () => {
  return (
    <>
      <Marquee className="[--duration:28s] p-[clamp(0.375rem,0.25rem+0.313vi,0.5rem)] [--gap:clamp(0.75rem,0.5rem+0.625vi,1rem)]">
        {dataScienceFirstRow.map((slug: string) => (
          <TechIcon key={slug} icon={slug} />
        ))}
      </Marquee>
      <Marquee
        reverse
        className="mb-3xs [--duration:28s] p-[clamp(0.375rem,0.25rem+0.313vi,0.5rem)] [--gap:clamp(0.75rem,0.5rem+0.625vi,1rem)]"
      >
        {dataScienceSecondRow.map((slug: string) => (
          <TechIcon key={slug} icon={slug} />
        ))}
      </Marquee>
    </>
  );
};
