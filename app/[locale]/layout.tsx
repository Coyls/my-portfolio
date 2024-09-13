import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins, Questrial } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body
        className={cn(questrial.variable, poppins.variable, "h-full font-sans")}
      >
        <Providers locale={params.locale}>{children}</Providers>
      </body>
    </html>
  );
}
