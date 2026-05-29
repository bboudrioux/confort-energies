export type Service = {
  title: string
  description: string
  tag: string
  icon: string
  slug: string
}

export const services: Service[] = [
  {
    title: 'Plomberie',
    description:
      'Recherche de fuite, robinetterie, évacuations, alimentation eau chaude et froide. Intervention rapide, diagnostic précis.',
    tag: 'Dépannage & installation',
    icon: 'Droplets',
    slug: 'plomberie',
  },
  {
    title: 'Chauffage',
    description:
      'Installation et entretien de chaudières, radiateurs et planchers chauffants. Optimisation de votre confort thermique.',
    tag: 'Confort thermique',
    icon: 'Flame',
    slug: 'chauffage',
  },
  {
    title: 'Pompe à chaleur',
    description:
      'Installation de PAC air/eau et air/air. Accompagnement pour les aides disponibles : MaPrimeRénov, CEE, éco-PTZ.',
    tag: 'Rénovation énergétique',
    icon: 'Leaf',
    slug: 'pompe-a-chaleur',
  },
  {
    title: 'Climatisation',
    description:
      'Pose de systèmes split et multi-split réversibles, économiques et silencieux pour un intérieur agréable toute l\'année.',
    tag: 'Confort été & hiver',
    icon: 'Wind',
    slug: 'climatisation',
  },
  {
    title: 'Salle de bain',
    description:
      'Rénovation complète ou partielle : plomberie, carrelage, douche à l\'italienne, baignoire, meuble vasque et finitions.',
    tag: 'Rénovation',
    icon: 'Bath',
    slug: 'salle-de-bain',
  },
  {
    title: 'Entretien & dépannage',
    description:
      'Contrat d\'entretien annuel, vérification chaudière, détartrage, urgences plomberie. Intervention sous 24 à 48 h.',
    tag: 'Maintenance',
    icon: 'Wrench',
    slug: 'entretien-depannage',
  },
]
