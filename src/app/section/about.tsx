import React from "react";
import TextAnimation from "@/components/ui/text-animation";

const About = () => {
  return (
    <section className="section-spacing pb-lg lg:pb-xl">
      <TextAnimation whileInView className="section-desc text-neutral-600">
        About Me “关于”
      </TextAnimation>
      <TextAnimation whileInView el="h2" className="section-heading mt-3xs text-black">
        A GLIMPSE OF MYSELF.
      </TextAnimation>

      <div className="grid grid-cols-12 mt-lg md:mt-xl lg:mt-2xl">
        <div className="col-span-12 md:col-span-4">
          <div className="w-full rounded-bento overflow-hidden shadow-[0_6px_24px_6px_rgba(0,0,0,.12)]">
            <img className="object-cover w-full" src="/img/background/tarumt.jpg" alt="TARUMT" />
          </div>
        </div>
        <div className="col-span-1 mb-md" />
        <div className="col-span-12 md:col-span-7">
          <p className="base-large lg:sub-heading font-medium">
            My main competence lies in full stack development. I have been coding since 2022, I have
            <span className="font-semibold bg-gradient-to-r from-[#8980ED] via-[#EC787F] to-[#FFC170] text-transparent bg-clip-text">
              &nbsp;2 years of experience&nbsp;
            </span>
            in web development. Additionally, I am a data scientist skilled in machine learning and
            data analysis, with a strong problem-solving skills.
          </p>
          <div className="mt-lg lg:mt-xl xl:mt-2xl flex flex-col lg:flex-row lg:space-x-lg text-neutral-800">
            <p className="font-mono whitespace-nowrap leading-relaxed base-small mb-2xs lg:mb-xs">
              (ABOUT ME)
            </p>
            <p className="base-normal font-medium max-w-[37ch] lg:max-w-[34ch]">
              Whether it’s building interactive web platforms or diving deep into data to extract
              meaningful insights, I approach every project with a blend of creativity and
              analytical precision.
              <br />
              <br />
              I’m always finding ways to improve myself, constantly learning—whether it’s mastering
              new coding techniques, expanding my knowledge in data science, or honing soft skills
              like sports and music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
