import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});


export const metadata: Metadata = {
  title: "Sacred Cleanliness",
  description: "A Sacred Collection of Cleanliness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-red-500`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
