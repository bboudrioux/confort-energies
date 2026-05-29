import { testimonials } from '@/data/testimonials'

export function TestimonialsSection() {
  return (
    <section className="py-[clamp(56px,8vw,100px)] bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-extrabold tracking-widest uppercase text-amber mb-3">
            Avis clients
          </p>
          <h2 className="font-serif font-light text-green-950 leading-tight"
            style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)' }}>
            Ils nous font <em className="not-italic text-green-700">confiance</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article
              key={t.author}
              className="bg-green-50 border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`Note : ${t.rating} étoiles sur 5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber text-lg leading-none" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="text-sm text-ink leading-relaxed flex-1">
                "{t.text}"
              </blockquote>

              <footer className="border-t border-border pt-4">
                <p className="font-semibold text-green-950 text-sm">{t.author}</p>
                <p className="text-xs text-muted mt-0.5">
                  {t.service} · {t.location}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
