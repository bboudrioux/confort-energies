import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { AidesSection } from '@/components/sections/AidesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

const ServicesSlider = dynamic(() =>
  import('@/components/sections/ServicesSlider').then((m) => m.ServicesSlider)
)
const ExpertiseSlider = dynamic(() =>
  import('@/components/sections/ExpertiseSlider').then((m) => m.ExpertiseSlider)
)
const EstimateSection = dynamic(() =>
  import('@/components/sections/EstimateSection').then((m) => m.EstimateSection)
)
const ContactSection = dynamic(() =>
  import('@/components/sections/ContactSection').then((m) => m.ContactSection)
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSlider />
      <ExpertiseSlider />
      <AidesSection />
      <EstimateSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
