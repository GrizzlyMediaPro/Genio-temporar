import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Right Grotesk font - folosim o alternativă similară din Google Fonts
const rightGrotesk = Geist({
  variable: "--font-right-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Genio - Arhitectură & Design",
  description: "Genio - Birou de arhitectură în dezvoltare. Contactează-ne pentru proiecte de arhitectură și design interior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rightGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
