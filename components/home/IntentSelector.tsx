'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

// Each intent has an accent drawn from the Cadillac/burgundy palette
const intents = [
  {
    id: 'comer',
    label: 'Comer',
    icon: '◈',
    accent: '#A65335',     // terracota
    desc: 'Mesas, rooftops y conceptos que definen la vida social.',
    href: '/directorio?categoria=Restaurante',
    count: '24 selecciones',
    cta: 'Descubrir mesa',
  },
  {
    id: 'hospedarte',
    label: 'Hospedarte',
    icon: '◇',
    accent: '#C2A77D',     // cantera
    desc: 'Hoteles boutique y haciendas curadas para quienes piden más.',
    href: '/directorio?categoria=Hotel',
    count: '12 selecciones',
    cta: 'Reservar refugio',
  },
  {
    id: 'vivir',
    label: 'Vivir',
    icon: '●',
    accent: '#0B4F46',     // zafiro-2
    desc: 'Colonias, comunidad y estilo de vida para residentes nuevos.',
    href: '/real-estate',
    count: '9 zonas leídas',
    cta: 'Explorar colonias',
  },
  {
    id: 'invertir',
    label: 'Invertir',
    icon: '▲',
    accent: '#063F3A',     // zafiro
    desc: 'Lectura territorial — Urban Score, plusvalía y patrimonio.',
    href: '/real-estate#intelligence',
    count: 'Urban Score activo',
    cta: 'Solicitar lectura',
  },
  {
    id: 'salir-hoy',
    label: 'Salir hoy',
    icon: '◑',
    accent: '#C2185B',     // rosa mexicano
    desc: 'La agenda viva — qué está pasando en la ciudad esta noche.',
    href: '/eventos',
    count: 'Agenda 24h',
    cta: 'Ver hoy',
  },
  {
    id: 'arte',
    label: 'Descubrir arte',
    icon: '○',
    accent: '#B45A3C',     // terracota-2
    desc: 'Galerías, museos, talleres y el pulso creativo de la ciudad.',
    href: '/directorio?categoria=Galería',
    count: '18 selecciones',
    cta: 'Ver galerías',
  },
  {
    id: 'eventos',
    label: 'Ver eventos',
    icon: '◆',
    accent: '#4A0F1F',     // vino tinto
    desc: 'Openings, cenas privadas, música y rooftops curados.',
    href: '/eventos',
    count: 'Agenda activa',
    cta: 'Abrir agenda',
  },
  {
    id: 'servicios',
    label: 'Servicios premium',
    icon: '◉',
    accent: '#003E7E',     // azul talavera
    desc: 'Wellness, concierge, transporte privado y servicios de autor.',
    href: '/directorio?categoria=Servicios',
    count: '14 selecciones',
    cta: 'Ver servicios',
  },
  {
    id: 'publicar',
    label: 'Publicar mi negocio',
    icon: '⬢',
    accent: '#5A1328',     // vino-2
    desc: 'Aplicar como miembro y entrar a la selección editorial BRAGO.',
    href: '/membresias',
    count: 'Para negocios',
    cta: 'Aplicar',
  },
  {
    id: 'circulo',
    label: 'Entrar al círculo',
    icon: '⬡',
    accent: '#B89B70',     // cantera-3 dorada
    desc: 'Red privada de miembros, eventos cerrados y accesos curados.',
    href: '/membresias#founder',
    count: 'Founder access',
    cta: 'Solicitar acceso',
  },
]

export function IntentSelector() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-brago-black relative">
      {/* Subtle terracota wash from top */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(166, 83, 53, 0.10) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        <AnimatedSection className="mb-14 lg:mb-16">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="h-px w-6 bg-brago-cantera/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-cantera font-medium">Capítulo I · Descubrir</span>
            <span className="w-1 h-1 bg-brago-vino-3 rotate-45 inline-block" />
            <span className="text-2xs tracking-widest uppercase text-brago-cream/30 font-light hidden sm:inline">
              10 intenciones · una sola lectura
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-brago-cream leading-tight max-w-2xl">
              ¿Qué quieres<br />
              <em className="not-italic text-brago-cream/45">hacer en la ciudad?</em>
            </h2>
            <p className="text-sm text-brago-cream-3 font-light max-w-sm leading-relaxed">
              Cada intención tiene su propia lectura. BRAGO traduce tu deseo en una selección editorial.
            </p>
          </div>
        </AnimatedSection>

        {/* 5x2 grid on desktop, 2x5 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-brago-cantera/8">
          {intents.map((intent, i) => (
            <motion.div
              key={intent.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
            >
              <Link
                href={intent.href}
                onMouseEnter={() => setHovered(intent.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex flex-col p-6 lg:p-7 bg-brago-black hover:bg-brago-black-2 transition-all duration-500 min-h-[200px] lg:min-h-[230px] overflow-hidden"
              >
                {/* Accent wash on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${intent.accent}22 0%, transparent 65%)`,
                  }}
                />

                {/* Top row — icon + count */}
                <div className="relative flex items-start justify-between mb-6">
                  <span
                    className="text-2xl transition-all duration-500"
                    style={{
                      color: hovered === intent.id ? intent.accent : 'rgba(194, 167, 125, 0.30)',
                    }}
                  >
                    {intent.icon}
                  </span>
                  <span className={cn(
                    'text-2xs tracking-widest uppercase text-brago-cream/25 font-light transition-opacity duration-400 text-right max-w-[70px] leading-tight',
                    hovered === intent.id ? 'opacity-100' : 'opacity-0',
                  )}>
                    {intent.count}
                  </span>
                </div>

                {/* Middle — label + desc */}
                <div className="relative mt-auto">
                  <h3 className="font-serif text-lg lg:text-xl text-brago-cream mb-2.5 leading-tight">
                    {intent.label}
                  </h3>
                  <p className="text-xs text-brago-cream/35 font-light leading-relaxed group-hover:text-brago-cream/55 transition-colors duration-300 line-clamp-2 mb-4">
                    {intent.desc}
                  </p>

                  {/* CTA underline */}
                  <div className="flex items-center gap-2 text-2xs tracking-widest uppercase font-medium transition-all duration-400"
                    style={{
                      color: hovered === intent.id ? intent.accent : 'rgba(244, 239, 231, 0.30)',
                    }}
                  >
                    <span>{intent.cta}</span>
                    <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left"
                  style={{ backgroundColor: intent.accent }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-3"
        >
          <p className="text-2xs tracking-widest uppercase text-brago-cantera/40 font-medium italic">
            "BRAGO no muestra negocios. Muestra la ciudad como debería verse."
          </p>
          <div className="flex items-center gap-3">
            <span className="text-2xs tracking-widest uppercase text-brago-cream/15 font-light">Ciudad activa</span>
            <span className="text-2xs tracking-widest uppercase text-brago-cantera/60 font-medium">San Miguel de Allende</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
