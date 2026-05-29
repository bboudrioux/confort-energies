import type { Metadata } from 'next'
import { EMAIL, PHONE, SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Confort & Énergies, artisan plombier chauffagiste en Île-de-France.',
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <h1 className="font-serif font-light text-green-950 text-3xl mb-2">Mentions légales</h1>
      <p className="text-sm text-muted mb-10">Conformément à la loi n° 2004-575 du 21 juin 2004.</p>

      <div className="prose prose-sm max-w-none text-ink space-y-8">
        <section>
          <h2 className="font-semibold text-green-950 text-lg mb-3">Éditeur du site</h2>
          <p className="text-sm text-muted leading-relaxed">
            <strong className="text-ink">Confort & Énergies</strong><br />
            Artisan plombier chauffagiste<br />
            Île-de-France — Paris, 77, 91, 93, 94<br />
            Téléphone : <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-green-700 hover:underline">{PHONE}</a><br />
            Email : <a href={`mailto:${EMAIL}`} className="text-green-700 hover:underline">{EMAIL}</a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-green-950 text-lg mb-3">Hébergement</h2>
          <p className="text-sm text-muted leading-relaxed">
            Ce site est hébergé par <strong className="text-ink">Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">vercel.com</a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-green-950 text-lg mb-3">Propriété intellectuelle</h2>
          <p className="text-sm text-muted leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, graphismes) est la propriété de Confort & Énergies ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-green-950 text-lg mb-3">Responsabilité</h2>
          <p className="text-sm text-muted leading-relaxed">
            Les informations présentes sur ce site sont données à titre indicatif. Confort & Énergies ne saurait être tenu responsable d'erreurs ou d'omissions. Les estimations de coûts affichées sont non contractuelles.
          </p>
        </section>
      </div>

      <p className="mt-10 text-xs text-muted">
        <a href="/" className="text-green-700 hover:underline">← Retour à l'accueil</a>
      </p>
    </div>
  )
}
