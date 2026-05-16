'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const pillars = [
  {
    icon: '◈',
    title: 'Curaduría',
    desc: 'No cualquiera entra. Cada negocio pasa por un proceso de evaluación editorial que considera estética, reputación, propuesta y relevancia cultural.',
  },
  {
    icon: '◆',
    title: 'Presencia premium',
    desc: 'Un perfil en BRAGO no es un listing. Es una representación editorial de lo que el negocio es, para quién es y por qué importa.',
  },
  {
    icon: '◇',
    title: 'Contenido producido',
    desc: 'Para miembros Diamante y Founder, el brazo visual de BRAGO — Hélices Films — produce la historia visual del negocio.',
  },
  {
    icon: '▲',
    title: 'Inteligencia urbana',
    desc: 'BRAGO no solo lista lugares. Interpreta colonias, zonas de inversión, dinámicas culturales y movimientos de capital en tiempo real.',
  },
  {
    icon: '○',
    title: 'Comunidad',
    desc: 'Los miembros no compran un perfil. Entran a una red de negocios, propietarios, inversores y creadores que comparten un estándar.',
  },
  {
    icon: '●',
    title: 'Conversión comercial',
    desc: 'Desde reservaciones y leads hasta partnerships estratégicos. La presencia en BRAGO traduce estética y reputación en actividad comercial.',
  },
]

export function WhatIsBrago() {
  return (
    <section className="py-28 lg:py-44 bg-brago-black-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — editorial text */}
          <div className="lg:sticky lg:top-32">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-6 bg-brago-gold/50" />
                <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">
                  Qué es BRAGO
                </span>
              </div>

              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight mb-8">
                La ciudad no se recorre.<br />
                <em className="not-italic text-brago-cream/50">Se interpreta.</em>
              </h2>

              <p className="text-base lg:text-lg text-brago-cream-3 leading-relaxed font-light mb-6 max-w-lg">
                BRAGO es una plataforma premium donde negocios, propiedades, hoteles, restaurantes, galerías, servicios y proyectos seleccionados tienen presencia verificada dentro de una guía editorial de ciudad.
              </p>

              <p className="text-base text-brago-cream-3 leading-relaxed font-light mb-10 max-w-lg">
                La estética importa. La reputación importa. La experiencia importa. La curaduría es el filtro y la red es el verdadero activo.
              </p>

              <div className="space-y-4">
                {[
                  'BRAGO no lista negocios. Los selecciona.',
                  'No todo aparece. Solo lo que merece ser visto.',
                  'La membresía compra evaluación, presencia y distribución.',
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-brago-gold mt-2 flex-shrink-0" />
                    <p className="text-sm text-brago-cream-2 font-light leading-relaxed">{line}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brago-cream/6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-brago-black-2 p-8 lg:p-9 group hover:bg-brago-black-3 transition-colors duration-400"
              >
                <span className="block text-2xl text-brago-gold/60 mb-5 group-hover:text-brago-gold transition-colors duration-300">
                  {pillar.icon}
                </span>
                <h3 className="font-serif text-lg text-brago-cream mb-3 group-hover:text-brago-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brago-cream-3 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
