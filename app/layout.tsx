import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import './globals.css'
import { cn } from "@/lib/utils";
import { Navbar1 } from "@/components/navbar1";
import { Footer2 } from "@/components/footer2";
import Providers from "./providers";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "MediStore",
  description: "Your Trusted Online Medicine Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-380 mx-auto`}
      >
        <Providers>
          <Navbar1 />
          <div className="min-h-screen">
            {children}
          </div>
          <div>
            <Footer2 />
          </div>
        </Providers>
      </body>
    </html>
  );
}
