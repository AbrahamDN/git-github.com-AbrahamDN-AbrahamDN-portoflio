import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "./fonts/Satoshi.ttf",
  display: "swap",
  variable: "--satoshi",
});

const generalSans = localFont({
  src: "./fonts/Satoshi.ttf",
  display: "swap",
  variable: "--general-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${satoshi.variable} ${generalSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
