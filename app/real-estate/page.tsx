import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RealEstateSection } from '@/components/home/RealEstateSection'
import { UrbanScorePanel } from '@/components/home/UrbanScorePanel'

export const metadata: Metadata = {
  title: 'Real Estate Intelligence',
  description: 'Propiedades, colonias y desarrollos en San Miguel de Allende y León leídos desde inversión, estilo de vida y valor patrimonial.',
}

const propertyTypes = [
  { name: 'Casas coloniales',         count: 24, city: 'SMA' },
  { name: 'Boutique hotels',           count: 8,  city: 'SMA' },
  { name: 'Departamentos premium',     count: 31, city: 'León' },
  { name: 'Haciendas',                 count: 6,  city: 'SMA / León' },
  { name: 'Terrenos',                  count: 14, city: 'SMA' },
  { name: 'Desarrollos inmobiliarios', count: 9,  city: 'León' },
  { name: 'Renta corta',               count: 18, city: 'SMA' },
  { name: 'Propiedades de campo',      count: 7,  city: 'SMA / León' },
  { name: 'Casas patrimoniales',       count: 11, city: 'SMA' },
  { name: 'Interiorismo de autor',     count: 5,  city: 'León' },
]

export default function RealEstatePage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-6 bg-brago-gold/50" />
          <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Inteligencia territorial</span>
        </div>
        <h1 className="font-serif text-5xl lg:text-7xl text-brago-cream leading-none mb-6">
          Real Estate<br /><span className="text-brago-cream/50 italic">Intelligence</span>
        </h1>
        <p className="text-base text-brago-cream-3 font-light leading-relaxed max-w-xl">
          BRAGO no solo recomienda lugares. Interpreta dónde vivir, comprar e invertir. Colonias, propiedades y dinámicas de mercado leídos desde inversión, estilo de vida y valor patrimonial.
        </p>
        <div className="h-px bg-brago-cream/8 mt-12" />
      </div>

      {/* Property type index */}
      <div className="px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-medium mb-6">Tipos de propiedad en BRAGO</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brago-cream/6">
          {propertyTypes.map((type) => (
            <div key={type.name} className="group bg-brago-black-2 hover:bg-brago-black-3 transition-colors duration-300 px-7 py-5 flex items-center justify-between">
              <div>
                <span className="font-serif text-lg text-brago-cream group-hover:text-brago-gold transition-colors duration-300">{type.name}</span>
                <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mt-0.5">{type.city}</p>
              </div>
              <span className="font-serif text-2xl text-brago-cream-3">{type.count}</span>
            </div>
          ))}
        </div>
      </div>

      <RealEstateSection />
      <UrbanScorePanel />

      {/* CTA */}
      <div className="py-24 lg:py-32 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-8 bg-brago-gold/40" />
          <span className="w-1.5 h-1.5 bg-brago-gold rotate-45 inline-block" />
          <span className="h-px w-8 bg-brago-gold/40" />
        </div>
        <h2 className="font-serif text-3xl lg:text-5xl text-brago-cream mb-6">
          Tu propiedad en el directorio más curado del Bajío
        </h2>
        <p className="text-sm text-brago-cream-3 font-light leading-relaxed mb-10 max-w-md mx-auto">
          Desarrolladoras, agentes inmobiliarios y propietarios pueden aplicar para presencia como miembros Founder dentro del ecosistema BRAGO Real Estate.
        </p>
        <a href="/membresias" className="inline-flex px-8 py-4 bg-brago-gold text-brago-black text-2xs tracking-widest uppercase font-medium hover:bg-brago-gold-light transition-colors duration-400">
          Solicitar partnership inmobiliario
        </a>
      </div>

      <Footer />
    </>
  )
}
