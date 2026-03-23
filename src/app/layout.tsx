import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import "./globals.scss";
import OG from "./opengraph-image.png";

const fraunces = Fraunces({ subsets: ["latin"] });

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
      <body className={`${fraunces.className} w-full mx-auto max-w-[1440px]`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
