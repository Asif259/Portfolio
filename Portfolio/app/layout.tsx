import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Ashraful Asif",
  description: "Ashraful Asif Portfolio",
  keywords: "Asif Portfolio",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="short icon" type="x-icon" href="/img/asif.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
