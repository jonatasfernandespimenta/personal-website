import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JFP | Architecture & AI Engineering",
  description:
    "Senior Full-Stack Engineer & AI Architect. I help CTOs and technical founders design distributed systems and build production AI features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Berkeley+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-body bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
