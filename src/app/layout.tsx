import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import SmoothScrolling from "@/components/global/smooth-scrolling";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = localFont({
  src: "./assets/font/inter-font-v2.woff2",
  variable: "--font-inter",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Yang's Portfolio",
  description:
    "A software engineer and data scientist experienced in developing and maintaining web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans", inter.variable, jetbrainsMono.variable)}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
