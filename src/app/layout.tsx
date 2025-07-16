import type { Metadata } from "next";
import { Outfit, Pixelify_Sans } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "@/components/global/NavBar";
import Footer from "@/components/global/Footer";
import "./globals.css";

const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const ta8bit = localFont({
  src: [
    {
      path: "../../public/font/TA 8 bit.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/TA 8 bit.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ta8bit",
});

export const metadata: Metadata = {
  title: "SOS14",
  description:
    "SOS14 is a student-led programming camp for SKE23 freshmen at Kasetsart University. Learn Python fundamentals, explore interactive challenges, and grow alongside peers in a fun and supportive environment.",
  keywords: [
    "SOS14",
    "SOS camp",
    "SKE23",
    "Kasetsart University",
    "Python programming",
    "programming camp",
    "student engineering camp",
    "Computer Engineering",
    "Software and Knowledge Engineering",
    "learn Python",
    "KU CPE",
    "SKE KU",
    "SKE major",
    "Bangkok university",
    "Thailand university",
    "coding bootcamp for students",
  ],
  openGraph: {
    title: "SOS14",
    description:
      "SOS14 is a student-led programming camp for SKE23 freshmen at Kasetsart University. Learn Python fundamentals, explore interactive challenges, and grow alongside peers in a fun and supportive environment.",
    url: "https://sos14.vercel.app/",
    siteName: "SOS14",
    images: [
      {
        url: "https://sos14.vercel.app/logo/logo_sos14_full.png",
        width: 1200,
        height: 630,
        alt: "SOS14 Python Camp Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS14",
    description:
      "SOS14 is a student-led programming camp for SKE23 freshmen at Kasetsart University. Learn Python fundamentals, explore interactive challenges, and grow alongside peers in a fun and supportive environment.",
    images: ["https://sos14.vercel.app/logo/logo_sos14_full.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(
    `
  ______     ___     ______    __  _    _    
.' ____ \\  .'   \`. .' ____ \\  /  || |  | |   
| (___ \\_|/  .-.  \\| (___ \\_| \`| || |__| |_  
 _.____\`. | |   | | _.____\`.   | ||____   _| 
| \\____) |\\  \`-'  /| \\____) | _| |_   _| |_  
 \\______.' \`.___.'  \\______.'|_____| |_____| 
                                             
` +
      "\nWelcome to the 14th SOS camp, a preparation camp for SKE23 students. We will take you through Python programming fundamentals\n" +
      "I recommend you to check this out: https://sos14.vercel.app/thelastriddle.png"
  );
  return (
    <html lang="en">
      <body
        className={`${pixel.variable} ${outfit.variable} ${ta8bit.variable} antialiased`}
      >
        <NavBar />
        {/* className="!pb-(--space-4xl) px-(--space-m) py-(--space-s)
        max-w-[1728px] mx-auto w-full flex justify-self-center justify-center" */}
        <main className="min-h-screen bg-dark-purple">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
