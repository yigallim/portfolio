"use client";
import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted && <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScrolling;
