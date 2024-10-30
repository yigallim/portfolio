import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { github, linkedin, note } from "@/lib/config/constant";
import { easeExpo } from "@/lib/global/ease-expo";
import useSmoothNavigate from "@/lib/global/use-smooth-navigate";

type LinkTagProps = {
  href: string;
  label: string;
};

const LinkTag = ({ href, label }: LinkTagProps) => {
  return (
    <a
      className="py-2xs px-sm base-small text-neutral-300 font-medium border border-neutral-400 rounded-full"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

type LinkAnchorProps = {
  href: string;
  label: string;
  gradient: string;
  onClick: () => void;
};

const LinkAnchor = ({ href, label, gradient, onClick }: LinkAnchorProps) => {
  const isInternalLink = href.startsWith("#");
  const smoothScroll = useSmoothNavigate();

  const toInternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick();
    if (isInternalLink) {
      e.preventDefault();
      smoothScroll(href.slice(1));
    }
  };

  return (
    <a onClick={toInternalLink} href={href} className={`text-gradient ${gradient}`}>
      {label}
    </a>
  );
};

const links = [linkedin, github, note];

const sidebar: Variants = {
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      ease: easeExpo,
      duration: 1.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.2,
      },
    },
    transitionEnd: {
      x: "100%",
    },
  },
  initial: {
    x: "100%",
    opacity: 0,
  },
};

const mask: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

const navItems = [
  {
    label: "Intro",
    href: "#intro",
    gradient: "bg-gradient-to-l from-[#DD5E89] to-[#F7BB97]",
  },
  {
    label: "Services",
    href: "#services",
    gradient: "from-[#91D1F1] via-[#25A5E6] to-[#252FFF]",
  },
  {
    label: "Works",
    href: "#works",
    gradient: "bg-gradient-to-l from-[#FFB7C5] via-[#FFDDB7] to-[#076EFF]",
  },
  {
    label: "Journey",
    href: "#journey",
    gradient: "from-[#8980ED] via-[#EC787F] to-[#FFC170]",
  },
  {
    label: "About",
    href: "#about",
    gradient: "from-[#DC79FF] to-[#256BFA]",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0);

  const handleToggle = () => {
    setIsOpen((value) => !value);
    setKey((prevKey) => prevKey + 1);
  };

  const handleLinkAnchorClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`mask-${key}`}
            className="bg-neutral-900/50 fixed inset-0 z-40"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mask}
            onClick={handleToggle}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div
            key={`sidebar-${key}`}
            className="z-50 fixed top-2xs bottom-2xs right-0 pl-2xs max-w-[32rem] md:max-w-[33.5rem] lg:max-w-[36rem] w-full"
          >
            <motion.nav
              className="z-50 size-full rounded-l-xl bg-[#1C1C1C] relative overflow-hidden"
              variants={sidebar}
              animate="open"
              exit="closed"
              initial="initial"
            >
              <div className="z-40 relative size-full py-xl px-lg sm:px-xl md:px-2xl flex flex-col justify-between overflow-hidden">
                <ul className="heading-2 font-bold space-y-2xs leading-none">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <LinkAnchor
                        onClick={handleLinkAnchorClick}
                        href={item.href}
                        label={item.label}
                        gradient={item.gradient}
                      />
                    </li>
                  ))}
                </ul>
                <div className="mt-md">
                  <div className="leading-normal font-semibold">
                    <p className="text-neutral-400 base-normal">EMAIL ADDRESS</p>
                    <p className="text-neutral-200 font-mono base-small">yigallim@gmail.com</p>
                  </div>
                  <div className="space-x-2xs flex mt-md">
                    {links.map((link, index) => (
                      <LinkTag key={index} href={link.href} label={link.label} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute rounded-full h-[24rem] w-[24rem] md:h-[32rem] md:w-[32rem] bg-neutral-500/20 z-0 -right-[8%] top-[14%] md:top-[18%] translate-x-[45%] -translate-y-[40%]"></div>
              <div className="absolute rounded-full h-[26rem] w-[26rem] md:h-[36rem] md:w-[36rem] bg-neutral-800/90 z-0 right-0 top-0 translate-x-[45%] -translate-y-[40%]"></div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        className={cn(
          `z-50 duration-700 ease-expo bg-neutral-300 p-[2rem] sm:p-lg top-md right-md md:top-lg md:right-xl hover:scale-[85%] rounded-full flex-col flex justify-center items-center fixed`
        )}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 3,
          ease: easeExpo,
        }}
        onClick={handleToggle}
      >
        <div
          className={cn(
            "duration-700 h-[0.125rem] w-[2rem] sm:w-lg bg-neutral-600 absolute ease-expo",
            isOpen ? "rotate-45" : "-translate-y-1"
          )}
        />
        <div
          className={cn(
            "duration-700 h-[0.125rem] w-[2rem] sm:w-lg bg-neutral-600 absolute ease-expo",
            isOpen ? "-rotate-45" : "translate-y-1"
          )}
        />
      </motion.button>
    </>
  );
};

export default Navigation;
