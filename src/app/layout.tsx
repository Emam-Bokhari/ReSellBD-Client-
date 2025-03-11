import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/Providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppinsClassName: string = poppins.className;

export const metadata: Metadata = {
  title: "ResellBD - Buy & Sell Used Products in Bangladesh",
  description:
    "ResellBD is the leading platform for buying and selling second-hand products in Bangladesh. Find the best deals on used electronics, furniture, vehicles, and more.",
  keywords: [
    "buy and sell",
    "second-hand",
    "used products",
    "resell",
    "Bangladesh",
    " electronics",
    "furniture",
    "vehicles",
    "online marketplace",
  ],
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  publisher: "ResellBD Inc.",
  authors: [
    { name: "Moshfiqur Rahman", url: "https://www.facebook.com/emambokhari99" },
  ],
  creator: "Moshfiqur Rahman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsClassName} antialiased bg-[#F8F9FA]`}>
        <Providers>
          {children}
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
