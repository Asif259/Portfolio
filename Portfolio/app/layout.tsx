import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashraful Asif | Full-Stack Developer & Software Engineer",
  description:
    "Full-Stack Developer, Frontend Engineer, and Coding Instructor specializing in Next.js, React, TypeScript, Node.js, and PostgreSQL.",
  keywords: [
    "Ashraful Asif",
    "Moh. Asraful Hasan Asif",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
};

const monaSemi = localFont({
  src: [
    {
      path: "../public/fonts/MonaSansSemiCondensed-ExtraLight.woff2",
      weight: "250",
      style: "normal",
    },
    {
      path: "../public/fonts/MonaSansSemiCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MonaSansSemiCondensed-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const mona = localFont({
  src: [
    {
      path: "../public/fonts/MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-utility",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${monaSemi.variable} ${mona.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/img/asif.jpg" />
        <link rel="preload" as="image" href="/hero.webp" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </head>
      <body className="bg-black text-white antialiased selection:bg-[#FF630F] selection:text-black">
        {children}
      </body>
    </html>
  );
}
