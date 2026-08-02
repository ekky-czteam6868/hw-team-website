import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LangProvider } from "@/lib/lang";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HW Team | เว็บไซต์และเพจที่ขายได้",
  description:
    "HW Team ทีมเว็บไซต์ที่สร้างเพจที่ขายได้ :  เพจขาย, เว็บไซต์บริษัท, ร้านค้า COD, LMS และระบบ AI",
  metadataBase: new URL("https://ekky-czteam6868.github.io/hw-team-website"),
  openGraph: {
    title: "HW Team | เว็บไซต์และเพจที่ขายได้",
    description:
      "เพจขาย, ร้านค้า COD, LMS และระบบ AI :  สร้างโดยทีม + AI สควอด",
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
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} ${plexThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <LangProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
