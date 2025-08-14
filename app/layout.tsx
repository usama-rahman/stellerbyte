import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StellerByte - Premier Software Development Agency",
  description:
    "Transform your ideas into exceptional software solutions. StellerByte delivers cutting-edge web applications, mobile apps, and custom software that drives business growth.",
  keywords:
    "software development, web development, mobile apps, custom software, digital solutions, technology agency",
  authors: [{ name: "StellerByte" }],
  openGraph: {
    title: "StellerByte - Premier Software Development Agency",
    description:
      "Transform your ideas into exceptional software solutions. StellerByte delivers cutting-edge web applications, mobile apps, and custom software that drives business growth.",
    type: "website",
    url: "https://stellerbyte.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
