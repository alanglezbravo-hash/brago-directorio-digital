import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'BRAGO — Directorio de Estilo de Vida',
    template: '%s — BRAGO',
  },
  description:
    'Directorio editorial curado de los mejores restaurantes, hoteles, galerías, spas y boutiques en San Miguel de Allende y León.',
  keywords: ['San Miguel de Allende', 'León', 'directorio', 'lujo', 'lifestyle', 'restaurantes', 'hoteles'],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'BRAGO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-brago-black text-brago-cream antialiased">
        {children}
      </body>
    </html>
  )
}
