import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import "./globals.scss";
import OG from "./opengraph-image.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sustainobles",
  description: "",
  metadataBase: new URL("https://sustainobles.com.ng/"),
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
