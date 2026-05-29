'use client'

import { useState } from 'react'
import { estimateRanges } from '@/lib/utils'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArrowRight } from 'lucide-react'

const prestations = Object.entries(estimateRanges).map(([key, val]) => ({
  value: key,
  label: val.label,
  range: val.range,
}))

const logements = [
  { value: 'appartement', label: 'Appartement' },
  { value: 'maison', label: 'Maison' },
  { value: 'commerce', label: 'Local commercial' },
]

const urgences = [
  { value: 'urgence', label: 'Urgence (< 24h)' },
  { value: 'semaine', label: 'Cette semaine' },
  { value: 'mois', label: 'Ce mois-ci' },
  { value: 'projet', label: 'Projet à planifier' },
]

export function EstimateSection() {
  const [prestation, setPrestation] = useState('')
  const [logement, setLogement] = useState('')
  const [urgence, setUrgence] = useState('')

  const estimate = prestation ? estimateRanges[prestation] : null

  return (
    <section id="estimation" className="py-[clamp(56px,8vw,100px)] bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — intro */}
          <div>
            <SectionHeader
              kicker="Estimation"
              title="Une première idée"
              titleEm="du budget"
              description="Renseignez votre besoin en quelques clics pour obtenir une fourchette indicative. L'estimation n'est pas contractuelle — un devis précis est établi après visite."
            />

            <ol className="flex flex-col gap-4 mt-6" role="list">
              {[
                'Décrivez votre besoin et votre logement.',
                'Recevez une première estimation indicative.',
                'Validez un devis clair avant intervention.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink">
                  <span className="w-6 h-6 rounded-full bg-amber text-white text-xs font-bold grid place-items-center shrink-0 mt-0.5" aria-hidden="true">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Right — estimator */}
          <div className="bg-green-50 border border-border rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col gap-5">
              {/* Prestation */}
              <div>
                <label htmlFor="prestation" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Type de prestation
                </label>
                <select
                  id="prestation"
                  value={prestation}
                  onChange={(e) => setPrestation(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-green-700 transition-colors"
                >
                  <option value="">Choisir une prestation…</option>
                  {prestations.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Logement */}
              <div>
                <label htmlFor="logement" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Type de logement
                </label>
                <select
                  id="logement"
                  value={logement}
                  onChange={(e) => setLogement(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-green-700 transition-colors"
                >
                  <option value="">Choisir…</option>
                  {logements.map((l) => (
                    <option key={l.value} value={l.value}>
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Urgence */}
              <div>
                <label htmlFor="urgence" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Délai souhaité
                </label>
                <select
                  id="urgence"
                  value={urgence}
                  onChange={(e) => setUrgence(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-green-700 transition-colors"
                >
                  <option value="">Choisir…</option>
                  {urgences.map((u) => (
                    <option key={u.value} value={u.value}>
                      {u.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Result */}
              {estimate && (
                <div className="bg-white border border-green-200 rounded-2xl p-4 text-center">
                  <p className="text-xs text-muted mb-1">Fourchette indicative pour</p>
                  <p className="font-semibold text-green-950 text-sm mb-2">{estimate.label}</p>
                  <p className="font-serif font-light text-green-700 text-2xl">{estimate.range}</p>
                  <p className="text-[11px] text-muted mt-2">
                    Estimation non contractuelle · Devis précis après visite
                  </p>
                </div>
              )}

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-amber text-white font-bold px-6 py-3.5 rounded-full text-sm hover:shadow-amber-hover hover:-translate-y-0.5 transition-all shadow-amber"
              >
                Envoyer ma demande de devis
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
