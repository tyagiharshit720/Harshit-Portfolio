import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Harshit Kumar Tyagi - Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack, React.js, Node.js, and modern web technologies. Available for freelance projects.",
  keywords: "Full Stack Developer, React.js, Node.js, MERN Stack, JavaScript, Web Development",
  authors: [{ name: "Harshit Kumar Tyagi" }],
  creator: "Harshit Kumar Tyagi",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
