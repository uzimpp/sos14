import type { Metadata } from "next";
import { Outfit, Pixelify_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "SOS14",
  description:
    "Welcome to the 14th SOS camp, a preparation camp for SKE23 students. We will take you through Python programming fundamentalsp",
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
      <body className={`${pixel.variable} ${outfit.variable} antialiased`}>
        <NavBar />
        {/* className="!pb-(--space-4xl) px-(--space-m) py-(--space-s)
        max-w-[1728px] w-full flex justify-self-center justify-center" */}
        <main className="min-h-screen bg-dark-purple">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
