import { SITE_URL, PHONE, EMAIL } from '@/lib/utils'

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${SITE_URL}/#organization`,
    name: 'Confort & Énergies',
    description:
      'Artisan plombier chauffagiste en Île-de-France : plomberie, chauffage, pompe à chaleur, climatisation et rénovation de salle de bain.',
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    areaServed: [
      { '@type': 'State', name: 'Île-de-France' },
      { '@type': 'City', name: 'Paris' },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 48.8566,
        longitude: 2.3522,
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations plomberie et chauffage',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plomberie' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chauffage' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pompe à chaleur' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Climatisation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rénovation salle de bain' } },
      ],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Chèque, Virement bancaire, Espèces',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
