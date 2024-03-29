import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Apollo } from "@/components/Apollo";
import { ThemeProvider } from "@/context/theme/ThemContext";
import { useEffect } from "react";
import NextThemeProvider from "@/context/nextThemes/NextThemeProvider";
import ThemeChanger from "@/context/nextThemes/NextThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <NextThemeProvider>
          <header className="container mx-auto flex justify-between items-center p-5">
            <ul className="gap-6 text-3xl"><li>Home</li></ul>
            <ThemeChanger />
          </header>
          <Apollo>
            {/* <ThemeProvider>{children}</ThemeProvider> */}
            {children}
          </Apollo>
        </NextThemeProvider>
      </body>
    </html>
  );
}
