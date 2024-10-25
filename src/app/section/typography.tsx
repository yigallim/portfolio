import React from "react";

const Typography = () => {
  return (
    <div className="section-inner bg-neutral-300/50">
      <div className="font-bold">
        <p className="heading-1">Heading 1</p>
        <p className="heading-2">Heading 2</p>
        <p className="heading-3">Heading 3</p>
        <p className="heading-4">Heading 4</p>
        <p className="heading-5">Heading 5</p>
        <p className="heading-6">Heading 6</p>
      </div>
      <div className="font-semibold">
        <p className="base-large">Base large</p>
        <p className="base-normal">Base norm</p>
        <p className="base-small">Base small</p>
      </div>
      <div
        className="text-6xl font-semibold flex gradient-test"
        // style={{
        //   backgroundImage: "linear-gradient(to right, #E34534, #CD18C2, #25A5E6, #252FFF)",
        // }}
      >
        <span>L</span>
        <span style={{ willChange: "transform", transform: "translateY(10px)" }}>o</span>
        <span>r</span>
        <span>e</span>
        <span>m</span>
        <span> </span>
        <span>I</span>
        <span>p</span>
        <span>s</span>
        <span>u</span>
        <span>m</span>
      </div>
    </div>
  );
};

export default Typography;
