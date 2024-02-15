import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import Navbar from "@/components/navbar/navbar";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { NavbarProvider } from "@/components/navbar/navbar-context";
import MobileNavbar from "@/components/mobile-navbar/mobile-navbar";
import { inter } from "@/style/font";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata: Metadata = {
  title: "Portfolio de Mickaël Desbiens | Développeur Web Fullstack",
  description: "Portfolio de Mickaël Desbiens, développeur web fullstack. Découvrez mes projets, mes compétences et mon parcours.",
  keywords: "Portfolio, Mickaël Desbiens, Développeur, Web, Frontend, Backend, Fullstack, concepteur d'application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body id="top" className={cn(inter.className, "flex")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} language="fr">
            <NavbarProvider>
              <Navbar />
              <div className="flex flex-col w-full">
                <Header />
                <main className="w-full relative">
                  {children}
                  <MobileNavbar />
                </main>
              </div>
              <Toaster richColors />
            </NavbarProvider>
          </ReCaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
