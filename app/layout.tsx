import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import { PaperGrain } from "@/components/PaperGrain";
import { SketchFilter } from "@/components/SketchFilter";
import { site } from "@/config/site";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-hand",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${inter.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <SketchFilter />
        <PaperGrain />
        <div className="relative z-[2]">{children}</div>
      </body>
    </html>
  );
}
