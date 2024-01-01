import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import OG from "./opengraph-image.png";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sustainobles",
  description: "Keep an eye for the launch",
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
      <body className={`${inter.className}`}>
        <Main />
      </body>
    </html>
  );
}
