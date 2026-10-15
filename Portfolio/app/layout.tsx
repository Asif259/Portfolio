import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="short icon" type="x-icon" href="/img/asif.jpg" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white antialiased selection:bg-[#FF630F] selection:text-black">
        {children}
      </body>
    </html>
  );
}
