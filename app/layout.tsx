import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins, Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Loïc Greco",
  description: "Freelance web developer based in Lyon, France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          questrial.variable,
          poppins.variable,
          "font-sans dark h-full"
        )}
      >
        {children}
      </body>
    </html>
  );
}
