import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PWAScript from "@/components/PWAScript";
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
  title: "BuildSupply - Construction Materials & Solutions",
  description: "Premium construction materials, adhesives, grouts, waterproofing solutions, and formulas-based coverage calculator for construction professionals.",
  keywords: "construction materials, adhesive, grout, waterproofing, coverage calculator",
  openGraph: {
    title: "BuildSupply - Construction Materials & Solutions",
    description: "Premium construction materials and coverage calculator for professionals.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BuildSupply",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BuildSupply" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
        <PWAScript />
      </body>
    </html>
  );
}
