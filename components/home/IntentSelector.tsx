'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

const intents = [
  {
    id: 'comer',
    label: 'Comer',
    icon: '◈',
    desc: 'Mesas, rooftops y conceptos que definen la vida social de San Miguel.',
    href: '/directorio?categoria=Restaurante',
    count: '24 seleccionados',
  },
  {
    id: 'hospedarte',
    label: 'Hospedarte',
    icon: '◇',
    desc: 'Hoteles boutique y haciendas curadas para quienes no quieren más de lo mismo.',
    href: '/directorio?categoria=Hotel',
    count: '12 seleccionados',
  },
  {
    id: 'vivir',
    label: 'Vivir',
    icon: '●',
    desc: 'Colonias, estilos de vida y comunidades para quienes vienen a quedarse.',
    href: '/real-estate',
    count: '9 zonas analizadas',
  },
  {
    id: 'invertir',
    label: 'Invertir',
    icon: '▲',
    desc: 'Colonias, propiedades y señales urbanas para leer el futuro de la ciudad.',
    href: '/real-estate#intelligence',
    count: 'Urban Score activo',
  },
  {
    id: 'arte',
    label: 'Arte & Cultura',
    icon: '○',
    desc: 'Galerías, museos, talleres y el pulso creativo que define el carácter de la ciudad.',
    href: '/directorio?categoria=Galería',
    count: '18 seleccionados',
  },
  {
    id: 'eventos',
    label: 'Eventos',
    icon: '◆',
    desc: 'La agenda privada y pública de San Miguel. Noches, cenas, openings y experiencias.',
    href: '/eventos',
    count: 'Agenda activa',
  },
  {
    id: 'experiencias',
    label: 'Experiencias',
    icon: '◉',
    desc: 'Rutas, talleres, degustaciones y vivencias que no aparecen en ninguna guía turística.',
    href: '/directorio?categoria=Experiencias',
    count: '11 seleccionados',
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    icon: '⬡',
    desc: 'Propiedades, desarrollos y patrimonio inmobiliario bajo la lupa editorial de BRAGO.',
    href: '/real-estate',
    count: 'Próximamente',
  },
]

export function IntentSelector() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="mb-14 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-6 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Explorar</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-brago-cream leading-tight">
              ¿Qué quieres descubrir<br />
              <em className="not-italic text-brago-cream/50">en San Miguel?</em>
            </h2>
            <p className="text-sm text-brago-cream-3 font-light max-w-xs leading-relaxed">
              Cada intención tiene su propia lectura de la ciudad.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brago-cream/6">
          {intents.map((intent, i) => (
            <motion.div
              key={intent.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={intent.href}
                onMouseEnter={() => setHovered(intent.id)}
                onMouseLeave={() => setHovered(null)}
                className="group flex flex-col p-7 lg:p-8 bg-brago-black hover:bg-brago-black-2 transition-all duration-400 min-h-[190px] lg:min-h-[230px]"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-auto">
                  <span className={cn(
                    'text-2xl transition-colors duration-400',
                    hovered === intent.id ? 'text-brago-gold' : 'text-brago-gold/30',
                  )}>
                    {intent.icon}
                  </span>
                  <span className={cn(
                    'text-2xs tracking-widest uppercase text-brago-cream/20 font-light transition-opacity duration-400',
                    hovered === intent.id ? 'opacity-100' : 'opacity-0',
                  )}>
                    {intent.count}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="mt-10">
                  <h3 className="font-serif text-xl lg:text-2xl text-brago-cream mb-3 group-hover:text-brago-gold transition-colors duration-300">
                    {intent.label}
                  </h3>
                  <p className="text-xs text-brago-cream/35 font-light leading-relaxed group-hover:text-brago-cream/55 transition-colors duration-300 line-clamp-2">
                    {intent.desc}
                  </p>
                </div>

                {/* Gold underline reveal */}
                <div className="h-px bg-brago-gold mt-5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* City note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex items-center justify-end gap-3"
        >
          <span className="text-2xs tracking-widest uppercase text-brago-cream/15 font-light">Ciudad activa</span>
          <span className="text-2xs tracking-widest uppercase text-brago-gold/40 font-medium">San Miguel de Allende</span>
        </motion.div>
      </div>
    </section>
  )
}
