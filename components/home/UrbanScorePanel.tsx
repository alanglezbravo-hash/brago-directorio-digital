'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { neighborhoods } from '@/data/neighborhoods'
import { cn } from '@/lib/utils'

const metricLabels: Record<string, string> = {
  seguridad:       'Seguridad',
  plusvalia:       'Plusvalía',
  conectividad:    'Conectividad',
  gastronomia:     'Gastronomía',
  cultura:         'Cultura',
  hospitality:     'Hospitality',
  vidaSocial:      'Vida social',
  walkability:     'Walkability',
  estetica:        'Estética urbana',
  inversion:       'Inversión',
  comunidadInt:    'Comunidad int.',
  actividadNocturna: 'Vida nocturna',
}

function ScoreBar({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light group-hover:text-brago-cream transition-colors duration-200">{label}</span>
        <span className="font-serif text-lg text-brago-cream leading-none">{value}</span>
      </div>
      <div className="h-px bg-brago-cream/8 relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-y-0 left-0 origin-left"
          style={{
            width: `${value}%`,
            background: value >= 90 ? '#C8A96E' : value >= 75 ? '#D8D6D0' : '#A8A69F',
          }}
        />
      </div>
    </div>
  )
}

export function UrbanScorePanel() {
  const [selected, setSelected] = useState(neighborhoods[0])

  return (
    <section className="py-28 lg:py-44 bg-brago-black-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-6 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Inteligencia urbana</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight max-w-2xl">
            Urban Score
          </h2>
          <p className="mt-4 text-sm text-brago-cream-3 font-light max-w-md">
            Una puntuación editorial de colonias, zonas y territorios. No es un índice. Es una lectura.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brago-cream/6">

          {/* Left — neighborhood selector */}
          <div className="bg-brago-black-3 p-0">
            <div className="border-b border-brago-cream/8 px-6 py-4">
              <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">Seleccionar zona</p>
            </div>
            <div className="divide-y divide-brago-cream/6">
              {neighborhoods.map((hood) => (
                <button
                  key={hood.id}
                  onClick={() => setSelected(hood)}
                  className={cn(
                    'w-full text-left px-6 py-5 transition-all duration-300 flex items-center justify-between group',
                    selected.id === hood.id
                      ? 'bg-brago-black-4'
                      : 'hover:bg-brago-black-4/50',
                  )}
                >
                  <div>
                    <p className={cn(
                      'font-serif text-base leading-tight transition-colors duration-200',
                      selected.id === hood.id ? 'text-brago-gold' : 'text-brago-cream group-hover:text-brago-cream',
                    )}>
                      {hood.name}
                    </p>
                    <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mt-0.5">
                      {hood.city === 'San Miguel de Allende' ? 'SMA' : 'León'}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span className={cn(
                      'font-serif text-2xl block',
                      selected.id === hood.id ? 'text-brago-gold' : 'text-brago-cream-2',
                    )}>
                      {hood.urbanScore}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right — score detail */}
          <div className="lg:col-span-2 bg-brago-black-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-8 lg:p-10 h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-10 pb-8 border-b border-brago-cream/8">
                  <div>
                    <h3 className="font-serif text-3xl lg:text-4xl text-brago-cream mb-2">{selected.name}</h3>
                    <p className="text-sm text-brago-cream-3 font-light leading-relaxed max-w-md">
                      {selected.description}
                    </p>
                    <p className="text-xs text-brago-cream/50 font-light mt-3 italic">
                      {selected.lifestyleProfile}
                    </p>
                  </div>
                  <div className="text-center flex-shrink-0 ml-8">
                    <span className="font-serif text-6xl lg:text-7xl text-brago-gold leading-none block">
                      {selected.urbanScore}
                    </span>
                    <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mt-1 block">Urban Score</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                  {Object.entries(selected.metrics).map(([key, val], i) => (
                    <ScoreBar
                      key={key}
                      label={metricLabels[key] ?? key}
                      value={val}
                      delay={i * 0.04}
                    />
                  ))}
                </div>

                {/* Footer info */}
                <div className="mt-10 pt-8 border-t border-brago-cream/8 grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mb-1">Investment Signal</p>
                    <p className="text-sm text-brago-gold font-medium">{selected.investmentSignal}</p>
                  </div>
                  <div>
                    <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mb-1">Precio referencia</p>
                    <p className="text-xs text-brago-cream font-light">{selected.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mb-1">Propiedades</p>
                    <p className="text-xs text-brago-cream font-light">{selected.propertyTypes[0]}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
