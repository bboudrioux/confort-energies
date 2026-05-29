import type { Metadata } from 'next'
import { EMAIL, SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et traitement des données personnelles — Confort & Énergies.',
  alternates: { canonical: `${SITE_URL}/politique-confidentialite` },
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <h1 className="font-serif font-light text-green-950 text-3xl mb-2">Politique de confidentialité</h1>
      <p className="text-sm text-muted mb-10">Conforme au Règlement Général sur la Protection des Données (RGPD).</p>

      <div className="space-y-8">
        <section>
          <h2 className="font-semibold text-green-950 text-lg mb-3">Données collectées</h2>
          <p className="text-sm text-muted leading-relaxed">
            Via le formulaire de contact, nous collectons : nom, téléphone, adresse email, et le contenu de votre message. Ces données sont utilisées uniquement pour répondre à votre demande.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-green-950 text-lg mb-3">Finalité du traitement</h2>
          <p className="text-sm text-muted leading-relaxed">
            Vos données sont traitées dans le seul but de vous contacter en réponse à votre demande de devis ou d'information. Elles ne sont pas utilisées à des fins commerciales ni partagées avec des tiers.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-green-950 text-lg mb-3">Durée de conservation</h2>
          <p className="text-sm text-muted leading-relaxed">
            Vos données sont conservées le temps nécessaire au traitement de votre demande, et supprimées dans un délai maximum de 3 ans à compter du dernier contact.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-green-950 text-lg mb-3">Vos droits</h2>
          <p className="text-sm text-muted leading-relaxed">
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à{' '}
            <a href={`mailto:${EMAIL}`} className="text-green-700 hover:underline">{EMAIL}</a>.
          </p>
        </section>
      </div>

      <p className="mt-10 text-xs text-muted">
        <a href="/" className="text-green-700 hover:underline">← Retour à l'accueil</a>
      </p>
    </div>
  )
}
