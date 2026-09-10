import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SponsorSlider from "@/components/SponsorSlider";

const bodyFont = Inter({
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAV Luyksgestel De Prutsers",
  description:
    "Jongeren Activiteiten Vereniging Luyksgestel De Prutsers — carnavalsvereniging voor en door jongeren sinds 2003.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${bodyFont.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <SponsorSlider />
        <Footer />
      </body>
    </html>
  );
}
