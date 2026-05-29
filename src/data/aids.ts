export type Aid = {
  name: string
  description: string
  icon: string
}

export const aids: Aid[] = [
  {
    name: "MaPrimeRénov'",
    description:
      "Aide de l'État pour les travaux de rénovation énergétique. Montant variable selon les revenus et le type de travaux réalisés.",
    icon: 'Home',
  },
  {
    name: "CEE — Certificats d'Économies d'Énergie",
    description:
      "Financés par les fournisseurs d'énergie, ces certificats sont cumulables avec d'autres dispositifs d'aide.",
    icon: 'Zap',
  },
  {
    name: 'TVA à 5,5 %',
    description:
      'Taux réduit applicable sur les travaux de rénovation énergétique dans les logements de plus de 2 ans.',
    icon: 'Percent',
  },
  {
    name: 'Éco-prêt à taux zéro',
    description:
      "Financement sans intérêts jusqu'à 50 000 € pour financer des travaux de rénovation énergétique éligibles.",
    icon: 'PiggyBank',
  },
]
