import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const defaultFont = Rubik();

export const metadata: Metadata = {
  title: "YNYDev Portfolio",
  description: "Hello, I am a front-end engineer based in Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${defaultFont.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}