import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/ui/header";
import { Toaster } from "sonner";
import { SanityLive } from "@/sanity/live";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaf travel & events",
  description: "Gaf travel & events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Toaster position="top-right" />
        <Header />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
