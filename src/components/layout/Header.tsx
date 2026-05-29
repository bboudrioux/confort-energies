'use client'

import { useState } from 'react'
import { Phone, ChevronDown, X, Menu } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PHONE } from '@/lib/utils'

const navLinks = [
  { label: 'Prestations', href: '#prestations' },
  { label: 'Expertise', href: '#solutions' },
  { label: 'Aides', href: '#aides' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-md">
      <nav className="flex h-[72px] w-full items-center justify-between px-4 sm:px-6 lg:px-10 gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0" aria-label="Confort & Énergies — Accueil">
          <div className="w-10 h-[43px] shrink-0">
            <img src="/logo-icon.svg" alt="" aria-hidden="true" width="40" height="43" />
          </div>
          <div>
            <div className="text-[0.95rem] font-extrabold tracking-tight text-green-950 leading-tight">
              Confort <span className="text-amber">&</span> Énergies
            </div>
            <div className="text-[0.6rem] uppercase tracking-[0.15em] text-muted leading-none">
              Plombier · Chauffagiste
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.88rem] font-semibold text-ink/70 hover:text-green-800 transition-colors py-2 border-b-2 border-transparent hover:border-amber"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-sm font-bold text-green-800 hover:text-green-700 transition-colors"
          >
            <Phone size={15} aria-hidden="true" />
            {PHONE}
          </a>
          <Button href="#contact" size="md">
            Devis gratuit
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} className="text-green-900" /> : <Menu size={20} className="text-green-900" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white px-4 pb-5">
          <ul className="flex flex-col gap-1 pt-3" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 text-sm font-semibold text-ink/80 hover:text-green-800 border-b border-border/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-bold text-green-800"
            >
              <Phone size={15} aria-hidden="true" />
              {PHONE}
            </a>
            <Button href="#contact" size="md" className="w-full justify-center">
              Devis gratuit
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
