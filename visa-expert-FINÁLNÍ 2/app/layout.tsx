import "./globals.css";
import { MacalySandboxBridge } from '../.sandbox/sandbox-bridge';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/hooks/use-language-v2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VisaExpert - Víza po celém světě | Rychlé a spolehlivé vyřízení",
  description: "Získejte vízum rychle a spolehlivě. Vyřizujeme víza do více než 50 zemí světa s 98% úspěšností schválení. Důvěryhodná služba s tisíci spokojených klientů.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <MacalySandboxBridge><body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body></MacalySandboxBridge>
    </html>
  );
}