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

export const metadata: Metadata = {
  title: "Portfolio de Mickaël Desbiens",
  description: "Portfolio de Mickaël Desbiens",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body id="top" className={cn(inter.className, "flex")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
