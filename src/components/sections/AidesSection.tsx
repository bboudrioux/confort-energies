import { Home, Zap, Percent, PiggyBank } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { aids } from '@/data/aids'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = { Home, Zap, Percent, PiggyBank }

export function AidesSection() {
  return (
    <section id="aides" className="py-[clamp(56px,8vw,100px)] bg-green-950 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <SectionHeader
            kicker="Aides & financement"
            title="Réduire le coût de vos"
            titleEm="travaux de rénovation"
            light
          />
          <p className="text-sm text-green-300 max-w-sm lg:text-right">
            Selon votre logement, vos revenus et les travaux réalisés, certaines aides peuvent alléger votre investissement. Nous vous aidons à identifier les dispositifs applicables.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aids.map((aid) => {
            const Icon = iconMap[aid.icon] ?? Home
            return (
              <article
                key={aid.name}
                className="bg-green-900/50 border border-green-800 rounded-2xl p-5 hover:border-green-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-800 grid place-items-center text-amber mb-4" aria-hidden="true">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2 leading-snug">{aid.name}</h3>
                <p className="text-xs text-green-300 leading-relaxed">{aid.description}</p>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-xs text-green-500 border-t border-green-900 pt-5">
          * Les aides dépendent de votre situation personnelle, de votre type de logement et des travaux réalisés. Elles ne sont pas garanties sans vérification préalable. Nous vous accompagnons dans les démarches.
        </p>
      </div>
    </section>
  )
}
