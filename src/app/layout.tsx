import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/utils'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Confort & Énergies | Plombier Chauffagiste Île-de-France — Devis Gratuit',
    template: '%s | Confort & Énergies',
  },
  description:
    'Artisan plombier chauffagiste en Île-de-France : plomberie, chauffage, pompe à chaleur, climatisation et rénovation de salle de bain. Devis gratuit, réponse sous 24h. Paris, 77, 91, 93, 94.',
  keywords: [
    'plombier chauffagiste Île-de-France',
    'installation pompe à chaleur Île-de-France',
    'rénovation salle de bain Île-de-France',
    'dépannage plomberie Paris',
    'chauffagiste autour de Paris',
    'installateur pompe à chaleur RGE',
    'climatisation Île-de-France',
    'MaPrimeRénov plombier',
  ],
  authors: [{ name: 'Confort & Énergies' }],
  creator: 'Confort & Énergies',
  publisher: 'Confort & Énergies',
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Confort & Énergies',
    title: 'Confort & Énergies | Plombier Chauffagiste Île-de-France',
    description:
      'Plomberie, chauffage, pompe à chaleur et rénovation de salle de bain en Île-de-France. Artisan fiable, devis gratuit, accompagnement aides énergie.',
    images: [
      {
        url: '/images/hero-pompe-chaleur.jpg',
        width: 1920,
        height: 1315,
        alt: 'Pompe à chaleur installée par Confort & Énergies en Île-de-France',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confort & Énergies | Plombier Chauffagiste Île-de-France',
    description:
      'Plomberie, chauffage, pompe à chaleur et rénovation de salle de bain en Île-de-France.',
    images: ['/images/hero-pompe-chaleur.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${jakarta.variable}`}>
      <head>
        <LocalBusinessJsonLd />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
