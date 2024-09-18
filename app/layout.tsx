import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// For Layout Components
import { Navbar } from "./Layout/Navbar/Navbar";
import { Footer } from "./Layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Easy Yoga",
    default: "Easy Yoga"
  },
  description: "Where Every Breath Matters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
