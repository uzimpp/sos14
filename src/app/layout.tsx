import type { Metadata } from "next";
import { Outfit, Pixelify_Sans } from "next/font/google";
import "./globals.css";


const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SOS14",
  description:
    "Welcome to the 14th SOS camp, a preparation camp for SKE23 students. We prepare  will take you through Python programming fundamentalsp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixel.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
