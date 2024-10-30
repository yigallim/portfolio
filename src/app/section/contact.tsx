import React from "react";
import { Send } from "lucide-react";

const FlipButton = () => {
  return (
    <button className="group relative bg-neutral-700 py-sm px-lg lg:py-md lg:px-xl rounded-full overflow-hidden">
      <span className="overflow-hidden block">
        <span className="flex items-center space-x-2xs lg:space-x-xs group-hover:-translate-y-full duration-300 ease-expo">
          <span className="leading-normal base-normal lg:base-large font-semibold">MESSAGE ME</span>
          <Send className="size-5 stroke-[2.2px] lg:size-6 lg:stroke-[2.5px]" />
        </span>
      </span>
      <span className="absolute inset-0 block overflow-hidden">
        <span className="size-full block py-sm px-lg lg:py-md lg:px-xl bg-neutral-500 rounded-full translate-y-full group-hover:translate-y-0 duration-700 ease-expo">
          <span className="flex items-center space-x-2xs lg:space-x-x">
            <span className="leading-normal base-normal lg:base-large font-semibold">
              MESSAGE ME
            </span>
            <Send className="size-5 stroke-[2.2px] lg:size-6 lg:stroke-[2.5px]" />
          </span>
        </span>
      </span>
    </button>
  );
};

const Contact = () => {
  return (
    <section className="section-spacing pt-xs">
      <div className="bg-black text-white max-sm:py-2xl max-sm:px-lg p-3xl rounded-bento text-center space-y-lg shadow-[0_6px_24px_6px_rgba(0,0,0,.18)] overflow-hidden">
        <p className="font-mono base-small text-neutral-400">(Need a cool project?)</p>
        <h2 className="text-[3.25rem] sm:heading-1 font-bold tracking-tight">
          <span className="flex flex-wrap justify-center gap-x-[0.275em]">
            <span>LET&apos;S</span>
            <span className="bg-gradient-to-r from-[#77d2ff] via-[#25A5E6] to-[#252FFF] text-transparent bg-clip-text">
              WORK
            </span>
          </span>
          <span>TOGETHER</span>
        </h2>
        <a className="block" href="mailto:yang@gmail.com">
          <FlipButton />
        </a>
      </div>
    </section>
  );
};

export default Contact;
