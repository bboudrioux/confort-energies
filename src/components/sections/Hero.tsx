import Image from 'next/image'
import { CheckCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PHONE } from '@/lib/utils'

const trustBadges = [
  'Devis gratuit',
  'Réponse sous 24h',
  'Zone Auxerre — 50 km',
]

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden"
      aria-label="Présentation Confort & Énergies"
    >
      {/* Background image */}
      <Image
        src="/images/hero-pompe-chaleur.jpg"
        alt="Pompe à chaleur installée à l'extérieur d'une maison autour d'Auxerre (89) — Confort & Énergies"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(9,28,12,0.90) 0%, rgba(9,28,12,0.72) 50%, rgba(9,28,12,0.20) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <p className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-green-100 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" aria-hidden="true" />
            Artisan plombier chauffagiste — Auxerre et environs
          </p>

          {/* H1 */}
          <h1 className="font-serif font-light text-white leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}>
            Plomberie, chauffage<br />
            <em className="not-italic text-amber">& rénovation énergétique</em>
          </h1>

          <p className="text-base sm:text-lg text-green-100/90 leading-relaxed mb-8 max-w-lg">
            Un artisan de confiance pour tous vos travaux : installation, dépannage, pompe à chaleur et salle de bain. Du devis à la mise en service, nous vous accompagnons.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Button href="#contact" size="lg">
              Demander un devis gratuit
            </Button>
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-6 py-4 rounded-full text-sm hover:bg-white/20 transition-colors"
            >
              <Phone size={16} aria-hidden="true" />
              {PHONE}
            </a>
          </div>

          {/* Trust badges */}
          <ul className="flex flex-wrap gap-4" role="list">
            {trustBadges.map((badge) => (
              <li key={badge} className="flex items-center gap-1.5 text-sm text-green-200">
                <CheckCircle size={15} className="text-amber shrink-0" aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
