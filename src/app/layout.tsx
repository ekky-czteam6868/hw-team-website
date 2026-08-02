import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HW Team | Sales pages, e-commerce, LMS and automations",
  description:
    "HW Team is a Thai digital product studio. We build sales pages, COD e-commerce, LMS platforms and automations that convert.",
  metadataBase: new URL("https://hwteam.agency"),
  openGraph: {
    title: "HW Team | Digital product studio",
    description:
      "Sales pages, COD e-commerce, LMS and automations. Built to convert.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
