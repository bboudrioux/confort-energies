export type ExpertiseDomain = {
  title: string
  subtitle: string
  description: string
  points: string[]
  image: string
  imageAlt: string
}

export const expertiseDomains: ExpertiseDomain[] = [
  {
    title: 'Rénovation de salle de bain',
    subtitle: 'Du projet à la finition',
    description:
      'Transformation complète ou partielle de votre salle de bain. De la dépose à la pose du carrelage, en passant par la plomberie et les finitions, chaque détail est soigné.',
    points: [
      'Plomberie & évacuations',
      'Carrelage & faïence',
      'Douche italienne & baignoire',
      'Meuble vasque & robinetterie',
      'Finitions soignées',
    ],
    image: '/images/salle-de-bain-carrelage.jpg',
    imageAlt: 'Rénovation salle de bain avec carrelage moderne — Auxerre et environs',
  },
  {
    title: "Pompe à chaleur & économies d'énergie",
    subtitle: 'Réduire sa facture, durablement',
    description:
      "Installation de pompes à chaleur air/eau et air/air avec bilan thermique préalable. Accompagnement pour les aides à la rénovation énergétique disponibles selon votre situation.",
    points: [
      'Bilan thermique & audit',
      'Installation PAC air/eau',
      'Aides MaPrimeRénov & CEE',
      'Éco-PTZ',
      'Entretien & maintenance',
    ],
    image: '/images/pac-jardin.jpg',
    imageAlt: "Pompe à chaleur installée dans le jardin d'une maison",
  },
  {
    title: 'Chauffage & confort thermique',
    subtitle: "Le bon équilibre toute l'année",
    description:
      'Remplacement de chaudière, installation de radiateurs à inertie, plancher chauffant hydraulique. Des solutions adaptées à votre logement et à vos habitudes.',
    points: [
      'Chaudière gaz & fioul',
      'Radiateurs & plancher chauffant',
      'Régulation & thermostat',
      "Contrat d'entretien annuel",
      'Mise aux normes',
    ],
    image: '/images/hero-pompe-chaleur.jpg',
    imageAlt: 'Unité extérieure de pompe à chaleur — chauffage haute performance',
  },
  {
    title: 'Dépannage plomberie',
    subtitle: 'Réactivité et transparence',
    description:
      'Intervention rapide pour fuite, canalisation bouchée, robinetterie défaillante ou pression insuffisante. Tarif annoncé avant intervention, sans mauvaise surprise.',
    points: [
      'Recherche de fuite',
      'Débouchage canalisations',
      'Robinetterie & joints',
      'Ballon eau chaude',
      'Urgences 24/48h',
    ],
    image: '/images/salle-de-bain-bois.jpg',
    imageAlt: 'Salle de bain rénovée — plomberie et sanitaires',
  },
]
