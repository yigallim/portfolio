import React from "react";
import TextAnimation from "@/components/ui/text-animation";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

type ServiceProps = {
  classname?: string;
  style?: React.CSSProperties;
  count: number;
  title: React.ReactNode;
  description: string;
  details: string[];
  alignEnd?: boolean;
};

const Service = ({
  classname,
  style,
  count,
  title,
  description,
  details,
  alignEnd = false,
}: ServiceProps) => {
  return (
    <div
      style={style}
      className={cn(
        "sticky top-0 border-t border-neutral-600 pt-md overflow-hidden bg-black",
        classname,
        alignEnd && "ml-auto text-end"
      )}
    >
      <h3
        className={cn(
          "flex text-neutral-200 heading-3 font-bold mb-lg",
          alignEnd ? "justify-end" : "justify-start"
        )}
      >
        <span className={cn(alignEnd ? "order-2 ml-xs" : "mr-xs")}>{`(${
          count < 10 ? "0" + count : count
        })`}</span>
        <span>{title}</span>
      </h3>
      <p
        className={cn(
          "text-neutral-400 base-normal font-normal mb-md max-w-[50ch]",
          alignEnd && "ml-auto"
        )}
      >
        {description}
      </p>
      <ul className={cn("md:w-[clamp(25rem,50%,30rem)]", alignEnd && "ml-auto")}>
        {details.map((detail, index) => (
          <li
            className={cn(
              "flex py-sm",
              alignEnd ? "justify-end" : "justify-start",
              index !== details.length - 1 && "border-b border-b-neutral-600"
            )}
            key={index}
          >
            <span
              className={cn(
                "font-mono text-neutral-500 base-normal",
                alignEnd ? "order-2 ml-md" : "mr-md"
              )}
            >{`0${index + 1}`}</span>
            <span className="text-neutral-200 heading-6 font-bold tracking-normal leading-none">
              {detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
          style={{ top: "calc(10vh + 0em)", marginBottom: "16em" }}
          count={1}
          title={
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #ED826E, #E14E38)",
              }}
              className="text-gradient"
            >
              Fullstack Web Development
            </span>
          }
          description="I build robust, scalable web applications designed to boost your brand's online presence. Each solution is optimized for both performance and user experience, ensuring your audience is engaged and your business grows smoothly."
          details={["Custom Solutions", "Scalable Architecture", "API Integration"]}
        />
        <Service
          style={{ top: "calc(10vh + 8em)", marginBottom: "8em" }}
          alignEnd
          count={2}
          title={
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,203,112,1) 0%, rgba(175,255,197,1) 100%)",
              }}
              className="text-gradient"
            >
              Mobile App Development
            </span>
          }
          description="I design and develop mobile apps that provide a seamless, intuitive user experience across all devices. Whether it's iOS or Android, I ensure your app stands out with cutting-edge features and user-centric design."
          details={["Cross-Platform", "Optimized UX", "Performance Focused"]}
        />
        <Service
          style={{ top: "calc(10vh + 8em)" }}
          count={3}
          title={
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #7549F2, #DE53F7)",
              }}
              className="text-gradient"
            >
              Machine Learning & AI Solutions
            </span>
          }
          description="I deliver data-driven solutions powered by advanced machine learning techniques. From predictive models to NLP and AI integrations, I help businesses automate processes, gain insights, and make smarter decisions."
          details={["Predictive Models", "NLP & Chatbots", "Custom AI Integration"]}
        />
      </div>
    </section>
  );
};

export default Services;
