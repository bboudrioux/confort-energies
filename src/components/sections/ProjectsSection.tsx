import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section id="realisations" className="py-[clamp(56px,8vw,100px)] bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeader
            kicker="Réalisations"
            title="Des chantiers propres,"
            titleEm="bien finis"
            description="Quelques exemples de travaux réalisés en Bourgogne-Franche-Comté."
          />
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl bg-green-100 ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-56 sm:h-64 lg:h-72">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2.5 py-1 bg-amber text-white text-[0.65rem] font-bold uppercase tracking-wider rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm leading-snug">{project.title}</h3>
                  <p className="text-white/70 text-xs mt-0.5">{project.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
