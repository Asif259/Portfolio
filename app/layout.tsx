import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashraful Asif | Full Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, TypeScript, and Node.js. Building modern, responsive, and user-friendly web experiences.",
  keywords: "Ashraful Asif, Full Stack Developer, React Developer, Next.js Developer, TypeScript, Portfolio",
  authors: [{ name: "Ashraful Asif" }],
  openGraph: {
    title: "Ashraful Asif | Full Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, TypeScript, and Node.js.",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/img/asif.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}