'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { expertiseDomains } from '@/data/expertise'

export function ExpertiseSlider() {
  const [current, setCurrent] = useState(0)
  const total = expertiseDomains.length
  const touchStartX = useRef(0)

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const domain = expertiseDomains[current]

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) < 50) return
    if (delta > 0) next(); else prev()
  }

  return (
    <section id="solutions" className="py-[clamp(56px,8vw,100px)] bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-extrabold tracking-widest uppercase text-amber mb-2">
              Solutions adaptées
            </p>
            <h2 className="font-serif font-light text-green-950 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)' }}>
              Nos domaines <em className="not-italic text-green-700">d'expertise</em>
            </h2>
          </div>

          {/* Navigation arrows — desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:border-green-700 hover:bg-green-50 transition-colors"
              aria-label="Domaine précédent"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <span className="text-sm text-muted font-medium w-14 text-center">
              {current + 1} / {total}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:border-green-700 hover:bg-green-50 transition-colors"
              aria-label="Domaine suivant"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Slide */}
        <div
          className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image */}
          <div className="relative h-[280px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden bg-green-100">
            <Image
              key={domain.image}
              src={domain.image}
              alt={domain.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber mb-3">
              {domain.subtitle}
            </p>
            <h3 className="font-serif font-light text-green-950 leading-tight mb-4"
              style={{ fontSize: 'clamp(1.5rem,2.8vw,2.2rem)' }}>
              {domain.title}
            </h3>
            <p className="text-base text-muted leading-relaxed mb-6">{domain.description}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8" role="list">
              {domain.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink">
                  <Check size={15} className="text-green-700 shrink-0 mt-0.5" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber text-white font-bold px-6 py-3.5 rounded-full text-sm hover:-translate-y-0.5 hover:shadow-amber-hover transition-all shadow-amber"
            >
              Discuter de mon projet
            </a>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center"
            aria-label="Domaine précédent"
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
          <div className="flex gap-1.5" aria-label={`Slide ${current + 1} sur ${total}`}>
            {expertiseDomains.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? 'w-5 bg-green-700' : 'w-1.5 bg-border'
                }`}
                aria-label={`Aller au domaine ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center"
            aria-label="Domaine suivant"
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
