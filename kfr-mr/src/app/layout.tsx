import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Spectral } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-spectral",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Iskender Akkus Beyond Hair Studio",
  description: "Profesyonel saç tasarımı ve kuaför hizmetleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${spectral.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 sm:pt-20 lg:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
