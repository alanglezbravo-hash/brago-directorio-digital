'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const helicesBranches = [
  {
    name: 'Hélices Films',
    tagline: 'Fotografía · Video cinematográfico · Drone · Reels',
    desc: 'Contenido para perfiles, revista, campañas y hospitalidad. Una producción. Múltiples usos dentro del ecosistema BRAGO.',
    icon: '◈',
  },
  {
    name: 'Hélices Geo',
    tagline: 'Mapeo · Datos territoriales · Urban Score',
    desc: 'La inteligencia detrás del mapa BRAGO. Análisis territorial, colonias y señales de inversión con rigor editorial.',
    icon: '▲',
  },
  {
    name: 'Hélices Seguridad',
    tagline: 'Eventos · Cobertura perimetral',
    desc: 'Infraestructura de seguridad para eventos BRAGO, activaciones de marca y experiencias privadas.',
    icon: '◆',
  },
  {
    name: 'Hélices Agro',
    tagline: 'Haciendas · Campo · Agroproyectos · Rural',
    desc: 'Propiedades rurales, haciendas y proyectos de campo leídos desde inversión, patrimonio y estilo de vida.',
    icon: '◇',
  },
]

export function PoweredByHelices() {
  return (
    <section className="py-28 lg:py-44 bg-brago-black-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/helices-production/800/1000"
                alt="Hélices Films"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brago-black-3/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 bg-brago-black/90 backdrop-blur-sm border border-brago-cream/10 px-6 py-4">
              <p className="text-2xs tracking-widest uppercase text-brago-gold/70 font-medium mb-1">Producción interna</p>
              <p className="font-serif text-lg text-brago-cream">Hélices Films</p>
            </div>
          </motion.div>

          {/* Right — content */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-6 bg-brago-malaquita-2/70" />
                <span className="text-2xs tracking-widest-3 uppercase text-brago-malaquita-2 font-medium">Powered by</span>
                <span className="w-1 h-1 bg-brago-petroleo rotate-45 inline-block" />
              </div>

              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight mb-6">
                Hélices
              </h2>

              <p className="text-base text-brago-cream-3 font-light leading-relaxed mb-4 max-w-md">
                Hélices es el brazo interno de producción visual y territorial de BRAGO. No es una agencia externa. Es parte del ecosistema.
              </p>
              <p className="text-sm text-brago-cream/50 font-light leading-relaxed mb-12 max-w-md italic">
                "Una producción. Múltiples usos dentro del ecosistema BRAGO."
              </p>

              {/* Branches */}
              <div className="space-y-px bg-brago-cream/6">
                {helicesBranches.map((branch, i) => (
                  <motion.div
                    key={branch.name}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                    className="group bg-brago-black-3 hover:bg-brago-black-4 transition-colors duration-300 p-5 flex items-start gap-4"
                  >
                    <span className="text-lg text-brago-gold/40 group-hover:text-brago-gold/70 transition-colors duration-300 flex-shrink-0 mt-0.5">
                      {branch.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-serif text-base text-brago-cream group-hover:text-brago-gold transition-colors duration-300">
                          {branch.name}
                        </span>
                        <span className="text-2xs tracking-widest uppercase text-brago-cream-3/60 font-light hidden sm:block">
                          {branch.tagline}
                        </span>
                      </div>
                      <p className="text-xs text-brago-cream-3 font-light leading-relaxed">{branch.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
