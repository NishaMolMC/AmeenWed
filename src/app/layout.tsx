import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://ameenresmiyawedding.vercel.app"),
  title: "Ameen & Resmiya",
  description:
    "In the name of Allah. Your gracious presence is requested at our Wedding Reception.",
  openGraph: {
    type: "website",
    url: "https://ameenresmiyawedding.vercel.app",
    title: "Ameen & Resmiya",
    description:
      "Your gracious presence is requested at our Wedding Reception.",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Reception invitation preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ameen & Resmiya",
    description:
      "Your gracious presence is requested at our Wedding Reception.",
    images: ["/img1.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
