import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdalbast O. Khdhir — AI & Web Engineer",
  description: "High-quality AI & web projects for startups and teams.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  openGraph: {
    title: "Abdalbast O. Khdhir — AI & Web Engineer",
    description: "High-quality AI & web projects for startups and teams.",
    url: "/",
    siteName: "Abdalbast O. Khdhir",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Abdalbast portfolio" },
    ],
    locale: "en_GB",
    type: "website",
  },
};

import ThemeProvider from "@/components/ThemeProvider";

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
        <ThemeProvider>
          {children}
          <StructuredData />
        </ThemeProvider>
      </body>
    </html>
  );
}
