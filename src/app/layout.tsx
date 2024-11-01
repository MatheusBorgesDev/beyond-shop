import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Header } from "./components/header";

const roboto = Roboto({
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Beyond Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} text-text flex min-h-screen flex-col items-center justify-center overflow-y-hidden bg-background antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
