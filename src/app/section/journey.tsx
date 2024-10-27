import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import TextAnimation from "@/components/ui/text-animation";
import createFadeInProps from "@/lib/global/fade-in";

type JorneyTagProps = {
  className?: string;
  children: string;
};

const JorneyTag = ({ className, children }: JorneyTagProps) => {
  return (
    <div
      className={cn(
        "rounded-full text-[11px] lg:text-[12.5px] w-max border lg:border-2 border-transparent",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(rgb(0,0,0),rgb(0,0,0)), linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
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

type JourneyNodeProps = {
  organization: string;
  role: string;
  duration: string;
  description: string;
  tags: string[];
  type: string;
};

const JourneyNode = ({
  organization,
  role,
  duration,
  description,
  tags,
  type,
}: JourneyNodeProps) => {
  return (
    <motion.div
      className="flex max-md:flex-col text-white max-md:space-y-xs md:space-x-xl"
      {...createFadeInProps({ amount: 0.4, yOffset: "40%" })}
    >
      <div className="flex-1 flex md:flex-col items-center md:items-start max-md:space-x-sm max-md:justify-between md:space-y-xs">
        <h5 className="heading-5 font-semibold">{organization}</h5>
        <div className="base-tiny md:base-small py-[0.75em] px-[1em] bg-neutral-800 text-neutral-300 inline-block rounded-lg font-medium tracking-normal font-mono">
          {type}
        </div>
      </div>
      <div className="flex-1">
        <p className="base-large md:sub-heading mb-2xs font-medium">{role}</p>
        <p className="mb-sm base-normal text-neutral-500 font-normal">{duration}</p>
        <p className="mb-sm base-normal text-neutral-400 font-normal">{description}</p>
        <div className="flex flex-wrap gap-2xs">
          {tags.map((tag, index) => {
            return <JorneyTag key={index} children={tag} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

const journeyData: JourneyNodeProps[] = [
  {
    organization: "TAR UMT",
    role: "Degree in Data Science",
    duration: "Jun 2024 - Present",
    tags: ["Ongoing"],
    type: "Education",
    description:
      "Studying advanced data science topics, including data engineering, and machine learning. Developed skills in data visualization, and statistics with hands-on projects and elective choices in areas like AI, image processing, and cloud computing.",
  },
  {
    organization: "OS HRS Sdn Bhd",
    role: "ESS Developer Intern",
    duration: "Nov 2023 - Jan 2024",
    type: "Career",
    tags: ["React", "Typescript", "Figma"],
    description:
      "Designed and developed user interfaces for new ESS web based system using Figma and ReactJS. Guided other interns in fostering collaboration, establishing daily objectives, issuing tasks, and achieving project milestones on time.",
  },
  {
    organization: "TAR UMT",
    role: "Diploma in Computer Science",
    duration: "Jun 2022 - Jun 2024",
    type: "Education",
    tags: ["CGPA : 3.8373", "First Class Distinction"],
    description:
      "Learned basic programming concepts through languages such as Java, C, and Assembly. Also took mathematics courses, including Algebra, Calculus, Statistics, and Discrete Math.",
  },
  {
    organization: "SMK Sinar Bintang",
    role: "SPM Science Stream",
    duration: "Jan 2017 - Mac 2022",
    type: "Education",
    tags: ["SPM : 5A"],
    description:
      "Completed Science Stream curriculum, gaining foundational knowledge in Physics, Chemistry, Biology, and Additional Mathematics.",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="section-spacing overflow-x-hidden">
      <TextAnimation whileInView className="section-desc">
        Life Journey “旅途”
      </TextAnimation>
      <TextAnimation whileInView el="h2" className="section-heading mt-3xs">
        MY CAREER TIMELINE.
      </TextAnimation>
      <div className="mt-3xl space-y-xl md:space-y-2xl">
        {journeyData.map((node, index) => (
          <JourneyNode key={index} {...node} />
        ))}
      </div>
    </section>
  );
};

export default Journey;
