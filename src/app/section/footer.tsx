import { useEffect, useState } from "react";
import moment from "moment-timezone";
import {
  github,
  linkedin,
  facebook,
  instagram,
  figma,
  aceternity,
  huynguyen,
} from "@/lib/config/constant";
import { ArrowUp, CornerDownLeft } from "lucide-react";
import useSmoothNavigate from "@/lib/global/use-smooth-navigate";

type FlipLinkProps = {
  label: string;
  href: string;
};

const FlipLink = ({ label, href }: FlipLinkProps) => {
  const isInternalLink = href.startsWith("#");
  const smoothScroll = useSmoothNavigate();

  const toInternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isInternalLink) {
      e.preventDefault();
      smoothScroll(href.slice(1));
    }
  };

  return (
    <a
      className="leading-normal lg:leading-tight block relative h-fit overflow-hidden group [&>*]:duration-700 [&>*]:ease-expo"
      href={href}
      target={isInternalLink ? "_self" : "_blank"}
      rel={isInternalLink ? undefined : "noopener noreferrer"}
      onClick={toInternalLink}
    >
      <span className="block group-hover:-translate-y-6">{label}</span>
      <span className="absolute top-0 bottom-0 left-0 right-0 translate-y-6 group-hover:translate-y-0">
        {label}
      </span>
    </a>
  );
};

type LinkEntry = {
  label: string;
  href: string;
};

type NavigateColumnProps = {
  className?: string;
  title: string;
  links: LinkEntry[];
};

const NavigateColumn = ({ className, title, links }: NavigateColumnProps) => {
  return (
    <div className={className}>
      <h4 className="base-large w-fit font-semibold flex items-center space-x-2xs">
        <span>{title}</span>
        <CornerDownLeft className="size-[clamp(1.25rem,1rem+0.625vi,1.5rem)]" />
      </h4>
      <ul className="font-medium base-normal mt-3xs md:mt-2xs lg:mt-xs text-neutral-600 space-y-0.5 md:space-y-3xs lg:space-y-2xs">
        {links.map((link, index) => (
          <li key={index}>
            <FlipLink label={link.label} href={link.href} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const navigationLinks: LinkEntry[] = [
  { label: "Intro", href: "#intro" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
];
const socialLinks: LinkEntry[] = [linkedin, instagram, facebook, github];
const resourceLinks: LinkEntry[] = [figma, aceternity, huynguyen];

const Footer = () => {
  const [time, setTime] = useState("");
  const smoothScroll = useSmoothNavigate();

  const updateTime = () => {
    const malaysiaTime = moment().tz("Asia/Kuala_Lumpur").format("h.mm A");
    setTime(malaysiaTime);
  };
  const navigateToTop = () => {
    smoothScroll(0);
  };

  useEffect(() => {
    updateTime();
    const now = moment();
    const nextMinute = moment(now).add(1, "minute").startOf("minute");
    const msUntilNextMinute = nextMinute.diff(now);
    const timeoutId = setTimeout(() => {
      updateTime();
      const intervalId = setInterval(updateTime, 60000);
      return () => clearInterval(intervalId);
    }, msUntilNextMinute + 50);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <footer className="section-inner pb-lg">
      <div className="max-md:flex-col flex max-md:space-y-lg md:space-x-sm pb-xl">
        <div className="flex-1">
          <NavigateColumn title="Navigation" links={navigationLinks} />
        </div>
        <div className="flex-1 flex space-x-sm">
          <NavigateColumn className="flex-1" title="Socials" links={socialLinks} />
          <NavigateColumn className="flex-1" title="Resources" links={resourceLinks} />
        </div>
      </div>
      <div className="flex max-md:flex-wrap max-md:justify-between gap-y-sm gap-x-lg">
        <div className="md:flex-1 font-bold text-neutral-700 heading-2 leading-[0.875] space-y-2xs tracking-[-0.025em]">
          <span className="font-semibold mr-3xs">&copy;</span>2024
          <span className="block w-fit text-gradient from-[#DC79FF] to-[#256BFA]">YUET YANG</span>
        </div>
        <div className="md:flex-1 flex items-end">
          <div className="flex-1 text-sm lg:base-small tracking-normal space-y-3xs">
            <p className="font-bold">LOCAL TIME</p>
            <p className="font-medium font-mono text-neutral-600">{time}, KUALA LUMPUR</p>
          </div>
          <div className="hidden md:block hover:scale-[85%] duration-700 ease-expo">
            <button onClick={navigateToTop} className="rounded-full bg-neutral-300 p-sm">
              <ArrowUp className="size-lg text-neutral-600" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
