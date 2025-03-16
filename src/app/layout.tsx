import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechSolutions IT Agency",
  description:
    "Veb-sayt va mobil ilovalar ishlab chiqish bo‘yicha IT agentligi. E-tijorat, sog‘liqni saqlash, moliya, ta’lim va boshqa sohalar uchun professional IT yechimlari. Biznesingiz rivoji uchun yuqori samarali, kengaytiriladigan va xavfsiz raqamli echimlar yaratamiz.",
    icons: {
      icon: "/assets/icons/logo.jpg",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
