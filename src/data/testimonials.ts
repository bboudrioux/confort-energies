export type Testimonial = {
  text: string
  author: string
  service: string
  location: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    text: "Travail propre, délais tenus et très bonnes explications sur les choix techniques. L'équipe a su s'adapter à nos contraintes. Je recommande vivement.",
    author: 'Marie R.',
    service: 'Salle de bain',
    location: 'Auxerre (89)',
    rating: 5,
  },
  {
    text: "Installation de pompe à chaleur gérée de bout en bout, du devis à la mise en service. Accompagnement pour les aides très apprécié. Sérieux et compétent.",
    author: 'Pierre L.',
    service: 'Pompe à chaleur',
    location: 'Joigny (89)',
    rating: 5,
  },
  {
    text: "Intervention rapide pour une fuite, tarif annoncé avant les travaux. Pas de mauvaise surprise. Un artisan honnête et efficace, rare de nos jours.",
    author: 'Sophie C.',
    service: 'Plomberie',
    location: 'Sens (89)',
    rating: 5,
  },
]
