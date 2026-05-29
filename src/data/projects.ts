export type Project = {
  title: string
  category: string
  location: string
  image: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    title: 'Rénovation salle de bain complète',
    category: 'Salle de bain',
    location: 'Auxerre (89)',
    image: '/images/salle-de-bain-bois.jpg',
    imageAlt: 'Rénovation complète salle de bain à Auxerre — plomberie et carrelage',
  },
  {
    title: 'Installation pompe à chaleur air/eau',
    category: 'Pompe à chaleur',
    location: 'Joigny (89)',
    image: '/images/pac-jardin.jpg',
    imageAlt: 'Installation pompe à chaleur air/eau à Joigny',
  },
  {
    title: 'Salle de bain haut de gamme',
    category: 'Salle de bain',
    location: 'Sens (89)',
    image: '/images/salle-de-bain-carrelage.jpg',
    imageAlt: 'Rénovation salle de bain haut de gamme à Sens',
  },
  {
    title: "Réfection salle d'eau",
    category: 'Salle de bain',
    location: 'Tonnerre (89)',
    image: '/images/salle-de-bain-carrelage.jpg',
    imageAlt: "Salle d'eau rénovée avec carrelage moderne à Tonnerre",
  },
  {
    title: 'Pompe à chaleur extérieure',
    category: 'Chauffage',
    location: 'Saint-Florentin (89)',
    image: '/images/hero-pompe-chaleur.jpg',
    imageAlt: 'Pompe à chaleur extérieure installée à Saint-Florentin',
  },
]
