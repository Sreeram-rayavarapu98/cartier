import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";
import SuppressHydrationWarning from "./components/SuppressHydrationWarning";
import PageTransition from "./components/PageTransition";
import ScrollSmootherWrapper from "./components/ScrollSmootherWrapper";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "CASAVÉRA | Luxury Furniture Collections",
  description: "Discover our curated collection of luxury furniture pieces, crafted with precision and elegance.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${pinyon.variable} antialiased`}
        suppressHydrationWarning
      >
        <SuppressHydrationWarning />
        <ScrollSmootherWrapper>
          <PageTransition>{children}</PageTransition>
        </ScrollSmootherWrapper>
      </body>
    </html>
  );
}
