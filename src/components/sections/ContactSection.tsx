'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PHONE, EMAIL, ZONE } from '@/lib/utils'

const prestationOptions = [
  'Plomberie',
  'Chauffage',
  'Pompe à chaleur',
  'Climatisation',
  'Salle de bain',
  'Entretien & dépannage',
  'Autre',
]

export function ContactSection() {
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get('name') as string
    const phone = data.get('phone') as string
    const email = data.get('email') as string
    const message = data.get('message') as string
    const consent = data.get('consent')

    if (!name || !phone || !email || !message || !consent) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Adresse email invalide.')
      return
    }

    setPending(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          prestation: data.get('prestation'),
          message,
        }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
    } catch {
      setError(`Une erreur est survenue. Appelez-nous au ${PHONE}.`)
    } finally {
      setPending(false)
    }
  }

  return (
    <section id="contact" className="py-[clamp(56px,8vw,100px)] bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <SectionHeader
              kicker="Contact"
              title="Parlons de votre"
              titleEm="projet"
              description="Décrivez votre besoin en quelques lignes. Vous serez recontacté rapidement pour préciser le projet et établir un devis."
            />

            <address className="flex flex-col gap-5 not-italic mt-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 grid place-items-center text-green-800 shrink-0" aria-hidden="true">
                  <Phone size={16} />
                </div>
                <div>
                  <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="font-bold text-green-950 hover:text-green-700 transition-colors">
                    {PHONE}
                  </a>
                  <p className="text-xs text-muted mt-0.5">Lun–Ven 8h–19h · Sam 9h–17h</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 grid place-items-center text-green-800 shrink-0" aria-hidden="true">
                  <Mail size={16} />
                </div>
                <div>
                  <a href={`mailto:${EMAIL}`} className="font-bold text-green-950 hover:text-green-700 transition-colors text-sm">
                    {EMAIL}
                  </a>
                  <p className="text-xs text-muted mt-0.5">Réponse sous 24h ouvrées</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 grid place-items-center text-green-800 shrink-0" aria-hidden="true">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-bold text-green-950 text-sm">{ZONE}</p>
                  <p className="text-xs text-muted mt-0.5">Rayon 50 km autour d'Auxerre</p>
                </div>
              </div>
            </address>
          </div>

          {/* Right — form */}
          <div className="bg-green-50 border border-border rounded-3xl p-6 sm:p-8">
            {success ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-green-100 grid place-items-center mx-auto mb-4">
                  <Send size={20} className="text-green-700" />
                </div>
                <h3 className="font-semibold text-green-950 mb-2">Message envoyé !</h3>
                <p className="text-sm text-muted">Nous vous recontactons dans les 24h ouvrées.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-green-700 transition-colors"
                        placeholder="Marie Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                        Téléphone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-green-700 transition-colors"
                        placeholder="06 00 00 00 00"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-green-700 transition-colors"
                      placeholder="marie@exemple.fr"
                    />
                  </div>

                  <div>
                    <label htmlFor="prestation" className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                      Type de prestation
                    </label>
                    <select
                      id="prestation"
                      name="prestation"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-green-700 transition-colors"
                    >
                      <option value="">Choisir…</option>
                      {prestationOptions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-green-700 transition-colors resize-none"
                      placeholder="Décrivez votre projet ou problème en quelques lignes…"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-0.5 shrink-0 accent-green-700"
                    />
                    <span className="text-xs text-muted leading-relaxed">
                      J'accepte que mes données soient utilisées pour traiter ma demande. Aucune donnée n'est partagée avec des tiers.
                    </span>
                  </label>

                  {error && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="flex items-center justify-center gap-2 bg-amber text-white font-bold px-6 py-3.5 rounded-full text-sm hover:shadow-amber-hover hover:-translate-y-0.5 transition-all shadow-amber disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    <Send size={15} aria-hidden="true" />
                    {pending ? 'Envoi en cours…' : 'Envoyer ma demande'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
