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
  title: "Gift QR | Коледа 2025",
  description: "Специален коледен подарък, подготвен с много любов! 🎄✨",
  metadataBase: new URL('https://gift-qr.vercel.app/'), // Replace with actual URL if known, or use localhost for now/variable
  keywords: ["Christmas", "Gift", "2025", "Present", "Holiday"],
  authors: [{ name: "Santa's Helper" }],
  openGraph: {
    title: "Gift QR | Коледа 2025",
    description: "Специален коледен подарък, подготвен с много любов! 🎄✨",
    type: "website",
    locale: "bg_BG",
    siteName: "Gift QR",
    images: [
      {
        url: '/gift.webp', // Using the gift image as a fallback OG image
        width: 800,
        height: 600,
        alt: 'Christmas Gift',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift QR | Коледа 2025",
    description: "Специален коледен подарък, подготвен с много любов! 🎄✨",
    images: ['/gift.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/favicon_io/site.webmanifest',
      },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black `}
      >
        {children}
      </body>
    </html>
  );
}
