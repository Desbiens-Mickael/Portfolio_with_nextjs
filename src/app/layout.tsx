import type { Metadata, Viewport } from "next";

import "@/style/recaptcha.css";
import "./globals.css";

import Header from "@/components/header";
import MobileNavbar from "@/components/mobile-navbar/mobile-navbar";
import Navbar from "@/components/navbar/navbar";

import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import { NavbarProvider } from "@/components/navbar/navbar-context";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { inter } from "@/style/font";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata: Metadata = {
  title: "Portfolio de Mickaël Desbiens | Développeur Web Fullstack",
  description: "Portfolio de Mickaël Desbiens, développeur web fullstack. Découvrez mes projets, mes compétences et mon parcours.",
  keywords: "Portfolio, Mickaël Desbiens, Développeur, Web, Frontend, Backend, Fullstack, concepteur d'application",
  robots: process.env.NODE_ENV === "production" ? { index: true, follow: true } : { index: false, follow: false },
  authors: [{ name: "Mickaël Desbiens" }],
  creator: "Mickaël Desbiens",
  publisher: "Mickaël Desbiens",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  viewportFit: "cover",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body id="top" className={cn(inter.className, "flex")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} language="fr">
            <NavbarProvider>
              <Navbar />
              <div className="flex flex-col grow relative">
                <Header />
                <main className="w-full pb-12">{children}</main>
              </div>
              <MobileNavbar />
              <Toaster richColors />
            </NavbarProvider>
          </ReCaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
