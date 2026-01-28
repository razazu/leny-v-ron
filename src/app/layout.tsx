import type { Metadata } from "next";
import { Rubik, Karantina, Secular_One } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

const secularOne = Secular_One({
  subsets: ["hebrew", "latin"],
  weight: ["400"],
  variable: "--font-secular",
  display: "swap",
});

const karantina = Karantina({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
  variable: "--font-karantina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leny V Ron - עוגות קונטידור מעוצבות",
  description: "עוגות קונטידור מעוצבות ומעולות מ-Leny V Ron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${rubik.variable} ${secularOne.variable} ${karantina.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
