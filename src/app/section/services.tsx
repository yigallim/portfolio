import React from "react";
import TextAnimation from "@/components/ui/text-animation";
import { cn } from "@/lib/utils";

type ServiceProps = {
  classname?: string;
  style?: React.CSSProperties;
  alignEnd?: boolean;
  count: number;
  title: React.ReactNode;
  description: string;
  details: string[];
  icon: string;
};

const Service = ({
  classname,
  style,
  count,
  title,
  description,
  details,
  alignEnd = false,
  icon,
}: ServiceProps) => {
  return (
    <div
      style={style}
      className={cn(
        "sticky top-0 border-t border-neutral-600 pt-[1.75rem] overflow-hidden bg-black",
        classname,
        alignEnd && "md:ml-auto md:text-end"
      )}
    >
      <h3
        className={cn(
          "min-h-[3.75rem] flex items-start text-neutral-200 heading-3 font-bold mb-[1.75rem] justify-start",
          alignEnd && "md:justify-end"
        )}
      >
        <span className={cn("mr-xs", alignEnd && "md:order-2 md:ml-xs")}>{`(${
          count < 10 ? "0" + count : count
        })`}</span>
        <span>{title}</span>
      </h3>
      <p
        className={cn(
          "text-neutral-400 base-normal font-normal mb-md max-w-[50ch]",
          alignEnd && "md:ml-auto"
        )}
      >
        {description}
      </p>
      <ul className={cn("md:w-[clamp(25rem,50%,30rem)]", alignEnd && "md:ml-auto")}>
        {details.map((detail, index) => (
          <li
            className={cn(
              "flex py-sm justify-start",
              alignEnd && "md:justify-end",
              index !== details.length - 1 && "border-b border-b-neutral-600"
            )}
            key={index}
          >
            <span
              className={cn(
                "font-mono text-neutral-500 base-normal mr-md",
                alignEnd && "md:order-2 md:ml-md"
              )}
            >{`0${index + 1}`}</span>
            <span className="text-neutral-200 heading-6 font-bold tracking-normal leading-none">
              {detail}
            </span>
          </li>
        ))}
      </ul>
      <img
        className={cn(
          "hidden md:block absolute bottom-sm right-0 size-2xl z-50",
          alignEnd && "md:left-0"
        )}
        src={icon}
        alt=""
      />
    </div>
  );
};

const fullstackTitle = (
  <span className="bg-gradient-to-r from-[#E14E38] to-[#ED826E] text-gradient">
    Fullstack Web Development
  </span>
);

const mobileTitle = (
  <span className="bg-gradient-to-r from-[#AFFFC5] to-[#37CB70] text-gradient">
    Mobile App Development
  </span>
);

const mlAiTitle = (
  <span className="bg-gradient-to-r from-[#7549F2] to-[#DE53F7] text-gradient">
    ML & AI Solutions
  </span>
);

const Services = () => {
  return (
    <section className="section-spacing">
      <TextAnimation whileInView className="section-desc">
        Services Provided “服务”
      </TextAnimation>
      <TextAnimation whileInView el="h2" className="section-heading mt-3xs">
        HOW CAN I HELP YOU.
      </TextAnimation>
      <div className="mt-3xl">
        <Service
          classname="top-[10vh] mb-[14.5rem]"
          count={1}
          title={fullstackTitle}
          description="I build robust, scalable web applications designed to boost your brand's online presence. Each solution is optimized for both performance and user experience, ensuring your audience is engaged and your business grows smoothly."
          details={["Custom Solutions", "Scalable Architecture", "API Integration"]}
          icon="/img/svg/32.svg"
        />
        <Service
          classname="top-[calc(10vh+7.25rem)] mb-[7.25rem]"
          alignEnd
          count={2}
          title={mobileTitle}
          description="I design and develop mobile apps that provide a seamless, intuitive user experience across all devices. Whether it's iOS or Android, I ensure your app stands out with cutting-edge features and user-centric design."
          details={["Cross-Platform", "Optimized UX", "Performance Focused"]}
          icon="/img/svg/217.svg"
        />
        <Service
          classname="top-[calc(10vh+14.5rem)]"
          count={3}
          title={mlAiTitle}
          description="I deliver data-driven solutions powered by advanced machine learning techniques. From predictive models to NLP and AI integrations, I help businesses automate processes, gain insights, and make smarter decisions."
          details={["Predictive Models", "NLP & Chatbots", "Custom AI Integration"]}
          icon="/img/svg/17.svg"
        />
      </div>
    </section>
  );
};

export default Services;
