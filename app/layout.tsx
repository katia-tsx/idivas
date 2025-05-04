import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ShopHeader } from "@/components/shop/shop-header"
import { ShopFooter } from "@/components/shop/shop-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "iDivas | Moda Premium en República Dominicana",
  description:
    "Tu tienda de moda favorita en República Dominicana. Encuentra las últimas tendencias de Shein con entrega rápida y segura.",
  keywords: ["moda", "ropa", "República Dominicana", "Shein", "iDivas", "tienda online"],
  authors: [{ name: "Idalenny Ramos", url: "https://idivas.com" }],
  metadataBase: new URL("https://idivas.com"),
  openGraph: {
    title: "iDivas | Moda Premium en República Dominicana",
    description:
      "Tu tienda de moda favorita en República Dominicana. Encuentra las últimas tendencias de Shein con entrega rápida y segura.",
    url: "https://idivas.com",
    siteName: "iDivas",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idivas%20metabanner-ej1JvxYEokJbCO4f1Yev5juufhOwoD.png",
        width: 1200,
        height: 630,
        alt: "iDivas - Moda Premium - Limited Stock, Massive Savings!",
      },
    ],
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iDivas | Moda Premium en República Dominicana",
    description:
      "Tu tienda de moda favorita en República Dominicana. Encuentra las últimas tendencias de Shein con entrega rápida y segura.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idivas%20metabanner-ej1JvxYEokJbCO4f1Yev5juufhOwoD.png",
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <ShopHeader />
            <main className="flex-1">{children}</main>
            <ShopFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

