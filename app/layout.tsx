import type { Metadata, Viewport } from "next";
import {  Bai_Jamjuree, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SEOJsonLD from "../components/SEOJsonLD";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const isProd = process.env.NODE_ENV === "production" && !siteUrl.includes("localhost");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VMB Advisor | Consultoria Financeira e Planejamento Patrimonial",
    template: "%s | VMB Advisor",
  },
  description:
    "Consultoria financeira completa: investimentos, planejamento patrimonial, imobiliário, empresarial e familiar. VMB Advisor – excelência e resultados.",
  keywords: [
    "consultoria financeira",
    "planejamento financeiro",
    "investimentos",
    "planejamento patrimonial",
    "assessoria imobiliária",
    "planejamento empresarial",
    "planejamento familiar",
    "VMB Advisor",
  ],
  applicationName: "VMB Advisor",
  authors: [{ name: "VMB Advisor" }],
  creator: "VMB Advisor",
  publisher: "VMB Advisor",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VMB Advisor",
    title: "VMB Advisor | Consultoria Financeira e Planejamento Patrimonial",
    description:
      "Consultoria financeira completa: investimentos, planejamento patrimonial, imobiliário, empresarial e familiar.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "VMB Advisor",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "VMB Advisor | Consultoria Financeira",
    description:
      "Consultoria financeira completa: investimentos, planejamento patrimonial e mais.",
    images: ["/twitter-image"],
  },
  robots: {
    index: isProd,
    follow: isProd,
    googleBot: {
      index: isProd,
      follow: isProd,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    languages: {
      "pt-BR": "/",
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  category: "finance",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0ea5b7",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${baiJamjuree.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <SEOJsonLD />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
