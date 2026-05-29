export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export const estimateRanges: Record<string, { label: string; range: string }> = {
  plomberie: { label: 'Plomberie', range: '150 € – 800 €' },
  chauffage: { label: 'Chauffage', range: '800 € – 4 500 €' },
  'pompe-a-chaleur': { label: 'Pompe à chaleur', range: '8 000 € – 15 000 €' },
  climatisation: { label: 'Climatisation', range: '1 500 € – 6 000 €' },
  'salle-de-bain': { label: 'Salle de bain', range: '6 000 € – 18 000 €' },
  entretien: { label: 'Entretien & dépannage', range: '80 € – 300 €' },
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://confort-energies.fr'
export const PHONE = '06 42 05 22 14'
export const EMAIL = 'confortetenergies@gmail.com'
export const ZONE = 'Auxerre et environs (rayon 50 km)'
export const ZONE_DETAIL = 'Auxerre · Joigny · Sens · Tonnerre · Saint-Florentin'
