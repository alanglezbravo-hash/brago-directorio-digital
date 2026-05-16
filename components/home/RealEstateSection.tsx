'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { neighborhoods } from '@/data/neighborhoods'
import { cn } from '@/lib/utils'

const signalStyles: Record<string, string> = {
  'Alto':        'text-brago-gold border-brago-gold/40',
  'Emergente':   'text-brago-cream-2 border-brago-cream/25',
  'Consolidado': 'text-brago-cream-3 border-brago-cream/15',
  'Medio':       'text-brago-cream-2 border-brago-cream/20',
}

export function RealEstateSection() {
  const [activeCity, setActiveCity] = useState<'SMA' | 'León'>('SMA')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = neighborhoods.filter((n) =>
    activeCity === 'SMA'
      ? n.city === 'San Miguel de Allende'
      : n.city === 'León',
  )

  return (
    <section className="py-28 lg:py-44 bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-6 bg-brago-gold/50" />
              <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Inteligencia territorial</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight">
              Real Estate<br />
              <em className="not-italic text-brago-cream/50">Intelligence</em>
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-start lg:items-end">
            <p className="text-sm text-brago-cream-3 font-light max-w-sm text-left lg:text-right">
              BRAGO interpreta dónde vivir, comprar e invertir. Colonias, propiedades y dinámicas de mercado leídos desde el criterio.
            </p>
            {/* City selector */}
            <div className="flex items-center gap-0 border border-brago-cream/12 overflow-hidden">
              {(['SMA', 'León'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCity(c)}
                  className={cn(
                    'px-5 py-2 text-2xs tracking-widest uppercase transition-all duration-300 font-medium',
                    activeCity === c
                      ? 'bg-brago-gold text-brago-black'
                      : 'text-brago-cream-3 hover:text-brago-cream',
                  )}
                >
                  {c === 'SMA' ? 'San Miguel' : 'León'}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Neighborhoods grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brago-cream/6"
          >
            {filtered.map((hood, i) => (
              <div
                key={hood.id}
                onMouseEnter={() => setHovered(hood.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative bg-brago-black overflow-hidden"
              >
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <Image
                    src={hood.image}
                    alt={hood.name}
                    fill
                    className={cn(
                      'object-cover transition-transform duration-1200 ease-brago-out',
                      hovered === hood.id ? 'scale-105' : 'scale-100',
                    )}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brago-black via-brago-black/40 to-transparent" />

                  {/* Urban Score badge */}
                  <div className="absolute top-5 right-5 text-center">
                    <div className="bg-brago-black/80 backdrop-blur-sm border border-brago-cream/10 px-4 py-3">
                      <span className="font-serif text-3xl text-brago-cream block leading-none">{hood.urbanScore}</span>
                      <span className="text-2xs tracking-widest uppercase text-brago-gold/70 font-medium mt-1 block">Urban Score</span>
                    </div>
                  </div>
                </div>

                <div className="p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-2xl text-brago-cream mb-1 group-hover:text-brago-gold transition-colors duration-300">
                        {hood.name}
                      </h3>
                      <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">
                        {hood.city === 'San Miguel de Allende' ? 'San Miguel de Allende' : 'León, Gto.'}
                      </p>
                    </div>
                    <span className={cn(
                      'text-2xs tracking-widest uppercase px-2.5 py-1 border font-medium whitespace-nowrap flex-shrink-0 mt-1',
                      signalStyles[hood.investmentSignal],
                    )}>
                      {hood.investmentSignal}
                    </span>
                  </div>

                  <p className="text-sm text-brago-cream-3 font-light leading-relaxed mb-6">
                    {hood.description}
                  </p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { key: 'Plusvalía',   val: hood.metrics.plusvalia },
                      { key: 'Cultura',     val: hood.metrics.cultura },
                      { key: 'Inversión',   val: hood.metrics.inversion },
                    ].map(({ key, val }) => (
                      <div key={key}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{key}</span>
                          <span className="text-2xs text-brago-cream font-medium">{val}</span>
                        </div>
                        <div className="h-px bg-brago-cream/10 relative overflow-hidden">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.2 + i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                            className="absolute inset-y-0 left-0 bg-brago-gold origin-left"
                            style={{ width: `${val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-brago-cream/8">
                    <div>
                      <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mb-0.5">Precio referencia</p>
                      <p className="text-xs text-brago-cream font-light">{hood.priceRange}</p>
                    </div>
                    <span className="text-2xs tracking-widest uppercase text-brago-gold/60 group-hover:text-brago-gold transition-colors duration-300 font-medium">
                      Ver análisis →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Property types row */}
        <AnimatedSection className="mt-16 lg:mt-20">
          <div className="border-t border-brago-cream/8 pt-12">
            <p className="text-2xs tracking-widest-2 uppercase text-brago-cream-3 font-medium mb-8">Tipos de propiedad en BRAGO</p>
            <div className="flex flex-wrap gap-3">
              {[
                'Casas coloniales', 'Boutique hotels', 'Departamentos premium',
                'Terrenos', 'Haciendas', 'Desarrollos inmobiliarios',
                'Renta corta', 'Renta larga', 'Casas patrimoniales',
                'Propiedades de campo', 'Interiorismo de autor',
              ].map((type) => (
                <span key={type} className="text-2xs tracking-widest uppercase px-3 py-1.5 border border-brago-cream/12 text-brago-cream-3 hover:border-brago-gold/40 hover:text-brago-gold transition-all duration-300 cursor-pointer font-light">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
