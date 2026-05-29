"use client";

import {
  Droplets,
  Flame,
  Leaf,
  Wind,
  Bath,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Flame,
  Leaf,
  Wind,
  Bath,
  Wrench,
};

export function ServicesSlider() {
  return (
    <section id="prestations" className="py-[clamp(56px,8vw,100px)] bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <SectionHeader
            kicker="Nos prestations"
            title="Un interlocuteur pour"
            titleEm="tout le confort de la maison"
          />
        </div>

        {/* Slider */}
        <div
          className="slider-track pb-4"
          role="list"
          aria-label="Liste des prestations"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            return (
              <article
                key={service.slug}
                className="slider-item w-[min(320px,82vw)] bg-white border border-border rounded-3xl p-6 shadow-card flex flex-col justify-between min-h-[240px]"
                role="listitem"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl bg-green-100 grid place-items-center text-green-800 mb-5"
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-[1.25rem] font-light text-green-950 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
                    {service.tag}
                  </span>
                  <a
                    href="#contact"
                    className="text-amber font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    aria-label={`Demander un devis pour ${service.title}`}
                  >
                    Devis <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Scroll hint on mobile */}
        <p className="mt-3 text-xs text-muted sm:hidden text-center">
          Faites glisser pour voir toutes les prestations →
        </p>
      </div>
    </section>
  );
}
