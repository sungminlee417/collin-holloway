import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Collin Holloway - Classical Guitarist",
  description: "Classical guitarist Collin Holloway brings to life the intimate nature and inherent poetry of the guitar through beautiful tone and little-known repertoire.",
  keywords: "classical guitar, Collin Holloway, guitarist, classical music, The Muse Duo, chamber music",
  authors: [{ name: "Collin Holloway" }],
  creator: "Collin Holloway",
  openGraph: {
    title: "Collin Holloway - Classical Guitarist",
    description: "Classical guitarist bringing poetry to life through beautiful tone and little-known repertoire.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collin Holloway - Classical Guitarist",
    description: "Classical guitarist bringing poetry to life through beautiful tone and little-known repertoire.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
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
        <Script
          src="https://kit.fontawesome.com/db311df611.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
