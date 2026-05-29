import { SITE_URL, PHONE, EMAIL } from '@/lib/utils'

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${SITE_URL}/#organization`,
    name: 'Confort & Énergies',
    description:
      "Artisan plombier chauffagiste à Auxerre (89) et environs : plomberie, chauffage, pompe à chaleur, climatisation et rénovation de salle de bain.",
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    areaServed: [
      { '@type': 'State', name: 'Auxerre et environs' },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 47.7979,
        longitude: 3.5714,
      },
      geoRadius: '55000',
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
