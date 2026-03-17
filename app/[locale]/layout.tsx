import { Toaster } from "@/components/ui/sonner";
import { SiteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins, Questrial } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-questrial",
  preload: true,
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  metadataBase: new URL(SiteConfig.prodUrl),
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body
        className={cn(questrial.variable, poppins.variable, "h-full font-sans")}
      >
        <Providers locale={locale}>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
