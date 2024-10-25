import TextAnimation from "@/components/ui/text-animation";
import React from "react";

const Journey = () => {
  return (
    <section className="section-spacing">
      <TextAnimation whileInView className="section-desc">
        Life Journey “旅途”
      </TextAnimation>
      <TextAnimation whileInView el="h2" className="section-heading mt-3xs">
        MY CAREER TIMELINE.
      </TextAnimation>
    </section>
  );
};

export default Journey;
