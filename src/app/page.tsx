"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import Welcome from "./section/welcome";
import Intro from "./section/intro";
import useLoaded from "@/lib/state/loaded-store";
import Services from "./section/services";
import Projects from "./section/projects";
import Journey from "./section/journey";
import About from "./section/about";
import Contact from "./section/contact";
import AboutGrid from "./section/about-grid";
import Footer from "./section/footer";
import Navigation from "./section/navigation";

export default function Page() {
  const { loaded, load } = useLoaded();

  useEffect(() => {
    const loadTimer = setTimeout(load, 3800);
    return () => {
      clearTimeout(loadTimer);
    };
  });

  return (
    <>
      {!loaded && <Welcome />}
      <main className={cn("size-full", !loaded && "overflow-hidden")}>
        <Navigation />
        <Intro />
        <div className="bg-white bg-grid-black/[0.09]">
          <div className="bg-black min-h-[100rem] rounded-2xl lg:rounded-3xl z-30 relative pb-sm lg:pb-md">
            <Services />
            <Projects />
            <Journey />
          </div>
          <div className="overflow-hidden">
            <About />
            <AboutGrid />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
