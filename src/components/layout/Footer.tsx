import { Phone, Mail, MapPin } from 'lucide-react'
import { PHONE, EMAIL, ZONE } from '@/lib/utils'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-green-950 text-green-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-[39px] shrink-0">
                <img src="/logo-icon.svg" alt="" aria-hidden="true" width="36" height="39" />
              </div>
              <div>
                <div className="font-bold text-white leading-tight text-sm">
                  Confort <span className="text-amber">& </span>Énergies
                </div>
                <div className="text-[0.6rem] uppercase tracking-widest text-green-400 leading-none">
                  Plombier · Chauffagiste
                </div>
              </div>
            </div>
            <p className="text-sm text-green-300 leading-relaxed max-w-xs">
              Artisan plombier chauffagiste autour d'Auxerre (89), mobile toute la France. Travaux soignés, devis gratuit, accompagnement aux aides à la rénovation énergétique.
            </p>
          </div>

          {/* Prestations */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Prestations</h3>
            <ul className="flex flex-col gap-2 text-sm text-green-300">
              {['Plomberie', 'Chauffage', 'Pompe à chaleur', 'Climatisation', 'Salle de bain', 'Entretien & dépannage'].map((s) => (
                <li key={s}>
                  <a href="#prestations" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-green-300">
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} aria-hidden="true" />
                  <span className="font-semibold text-white">{PHONE}</span>
                </a>
                <p className="mt-1 text-xs text-green-400 pl-[22px]">Lun–Ven 8h–19h · Sam 9h–17h</p>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
                <span>Auxerre · Joigny · Sens · Tonnerre et environs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-green-500">
          <p>© {year} Confort & Énergies. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="/mentions-legales" className="hover:text-green-300 transition-colors">Mentions légales</a>
            <a href="/politique-confidentialite" className="hover:text-green-300 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
