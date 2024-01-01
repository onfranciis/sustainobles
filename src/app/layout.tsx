import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import OG from "@/app/opengraph-image.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sustainobles",
  description: "",
  openGraph: {
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-[72px]`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
