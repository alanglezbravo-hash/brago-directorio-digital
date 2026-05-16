'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const criteria = [
  {
    label: 'Estética',
    desc: 'La identidad visual, el espacio físico y la consistencia de la experiencia sensorial.',
  },
  {
    label: 'Reputación',
    desc: 'Trayectoria, consistencia de servicio y reconocimiento dentro de su categoría.',
  },
  {
    label: 'Propuesta',
    desc: 'Qué hace diferente a este lugar. Por qué importa. Por qué pertenece a la conversación.',
  },
  {
    label: 'Relevancia cultural',
    desc: 'Su papel dentro de la escena, la cultura y la economía de San Miguel.',
  },
  {
    label: 'Experiencia',
    desc: 'Estándar de atención, detalle y cuidado hacia el cliente, huésped o visitante.',
  },
  {
    label: 'Ubicación y contexto',
    desc: 'Zona, colonia, entorno urbano y la narrativa que el lugar construye desde su dirección.',
  },
]

const process = [
  {
    step: '01',
    action: 'Solicitud',
    desc: 'Completas el formulario de aplicación. No toda solicitud avanza.',
  },
  {
    step: '02',
    action: 'Evaluación',
    desc: 'Nuestro equipo editorial revisa el negocio contra los seis criterios BRAGO.',
  },
  {
    step: '03',
    action: 'Respuesta',
    desc: 'En 72 horas recibes una respuesta con evaluación y propuesta personalizada.',
  },
  {
    step: '04',
    action: 'Onboarding',
    desc: 'Si califica, se activa el perfil, la producción y la presencia dentro del ecosistema.',
  },
]

export function MembershipEntry() {
  return (
    <section className="py-20 lg:py-36 bg-brago-black relative overflow-hidden">

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brago-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Chapter intro ───────────────────────────────────────────────── */}
        <AnimatedSection className="mb-20 lg:mb-24 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-brago-gold/35" />
            <span className="w-1.5 h-1.5 bg-brago-gold rotate-45 inline-block" />
            <span className="h-px w-10 bg-brago-gold/35" />
          </div>
          <p className="text-2xs tracking-widest-3 uppercase text-brago-cantera font-medium mb-6">Capítulo IX · Para negocios</p>
          <h2 className="font-serif text-3xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight mb-6">
            Formar parte de BRAGO<br />
            <em className="not-italic text-brago-cream/40">no es comprar visibilidad.</em>
          </h2>
          <p className="text-base lg:text-lg text-brago-cream/55 font-light leading-relaxed">
            Es entrar a una selección.
          </p>
        </AnimatedSection>

        {/* ── Two columns ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 lg:mb-24">

          {/* Left — editorial statement */}
          <div>
            <AnimatedSection>
              <p className="text-base text-brago-cream-3 font-light leading-relaxed mb-5 max-w-lg">
                BRAGO no acepta solicitudes automáticas. Cada negocio es revisado por un equipo editorial que evalúa si pertenece al estándar que define la plataforma.
              </p>
              <p className="text-base text-brago-cream-3 font-light leading-relaxed mb-8 max-w-lg">
                No importa el tamaño, la antigüedad ni el presupuesto. Importa el criterio, la propuesta y la coherencia de la experiencia.
              </p>
              <p className="font-serif text-lg text-brago-cream/50 italic leading-relaxed mb-10 max-w-md">
                "La membresía no garantiza entrada. Garantiza que tu solicitud será revisada con criterio editorial."
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/membresias"
                  className="px-7 py-3.5 bg-brago-vino text-brago-cream text-2xs tracking-widest uppercase font-medium hover:bg-brago-vino-3 transition-colors duration-400"
                >
                  Formar parte de la guía
                </Link>
                <Link
                  href="/membresias#founder"
                  className="px-7 py-3.5 border border-brago-cantera/50 text-brago-cantera text-2xs tracking-widest uppercase font-medium hover:bg-brago-cantera/10 hover:border-brago-cantera transition-all duration-400"
                >
                  Entrar al círculo Founder
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — criteria list */}
          <div>
            <AnimatedSection delay={0.15}>
              <p className="text-2xs tracking-widest uppercase text-brago-cream/25 font-medium mb-7">
                Criterios de evaluación editorial
              </p>
              <div className="space-y-px bg-brago-cream/5">
                {criteria.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group bg-brago-black hover:bg-brago-black-2 transition-colors duration-300 px-6 py-4 flex items-start gap-4"
                  >
                    <span className="font-serif text-2xs text-brago-gold/25 group-hover:text-brago-gold/55 transition-colors duration-300 mt-1 flex-shrink-0 w-5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm text-brago-cream font-medium mb-0.5 group-hover:text-brago-gold transition-colors duration-300">
                        {item.label}
                      </p>
                      <p className="text-xs text-brago-cream/35 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ── Process strip ───────────────────────────────────────────────── */}
        <AnimatedSection delay={0.2}>
          <div className="border-t border-brago-cream/8 pt-12">
            <p className="text-2xs tracking-widest uppercase text-brago-cream/25 font-medium mb-10">
              El proceso
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brago-cream/6">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-brago-black px-6 py-7 group hover:bg-brago-black-2 transition-colors duration-300"
                >
                  <span className="font-serif text-4xl text-brago-gold/20 group-hover:text-brago-gold/40 transition-colors duration-300 block mb-5 leading-none">
                    {p.step}
                  </span>
                  <p className="text-sm text-brago-cream font-medium mb-2 group-hover:text-brago-gold transition-colors duration-300">
                    {p.action}
                  </p>
                  <p className="text-xs text-brago-cream/35 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Response time callout */}
            <div className="mt-px bg-brago-black-2 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-2xs tracking-widest uppercase text-brago-gold/55 font-medium mb-0.5">
                    Tiempo de respuesta
                  </p>
                  <p className="font-serif text-2xl text-brago-cream">72 horas</p>
                </div>
                <div className="h-8 w-px bg-brago-cream/10" />
                <p className="text-xs text-brago-cream/35 font-light leading-relaxed max-w-xs">
                  Si tu negocio cumple los estándares BRAGO, recibirás una propuesta personalizada.
                </p>
              </div>
              <Link
                href="/membresias"
                className="self-start sm:self-auto text-2xs tracking-widest uppercase font-medium px-6 py-3 border border-brago-gold/35 text-brago-gold hover:bg-brago-gold hover:text-brago-black transition-all duration-400 whitespace-nowrap"
              >
                Iniciar proceso
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
