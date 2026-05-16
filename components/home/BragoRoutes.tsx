'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

const routes = [
  {
    id: '01',
    title: '24 horas en San Miguel',
    type: 'Visitante premium',
    duration: '1 día',
    icon: '◈',
    stops: [
      'Desayuno en mercado El Nigromante',
      'Recorrido por Centro Histórico y galerías',
      'Comida en restaurante de autor en Guadiana',
      'Cóctel en rooftop con vista al Parroquia',
      'Cena privada en patio colonial',
    ],
    mood: 'Primera vez · Máximo impacto · Un día completo',
    forWhom: 'Para quien visita San Miguel por primera vez y quiere su mejor versión posible.',
    cta: 'Ver ruta',
  },
  {
    id: '02',
    title: 'Fin de semana premium',
    type: 'Viajero curado',
    duration: '2–3 días',
    icon: '◇',
    stops: [
      'Hotel boutique BRAGO selection',
      'Brunch editorial dominical en San Antonio',
      'Galería contemporánea + visita a taller de artista',
      'Spa en hacienda histórica a 20 minutos del centro',
      'Cena chef en mesa privada con maridaje',
      'Sunday open house inmobiliario selectivo',
    ],
    mood: 'Escapada · Experiencia completa · Hospitalidad premium',
    forWhom: 'Para quienes buscan una experiencia completa y sin concesiones en San Miguel.',
    cta: 'Ver ruta',
  },
  {
    id: '03',
    title: 'Ruta inmobiliaria',
    type: 'Inversionista',
    duration: 'Medio día',
    icon: '▲',
    stops: [
      'Briefing de colonias con análisis Urban Score BRAGO',
      'Visita guiada a Atascadero y zonas de plusvalía emergente',
      'Propiedad colonial en venta en Centro Histórico',
      'Desarrollo nuevo en Los Frailes con proyección',
      'Cierre con sesión de análisis de mercado y criterio editorial',
    ],
    mood: 'Real Estate · Análisis territorial · Criterio de inversión',
    forWhom: 'Para compradores, inversionistas y desarrolladoras que quieren leer la ciudad antes de invertir.',
    cta: 'Solicitar ruta',
  },
  {
    id: '04',
    title: 'Ruta de galerías',
    type: 'Arte & Cultura',
    duration: '4–5 horas',
    icon: '○',
    stops: [
      'Galería contemporánea latinoamericana en Centro',
      'Estudio privado de artista local — visita con cita',
      'Espacio multidisciplinar emergente en Guadiana',
      'Colección privada en residencia patrimonial',
      'Café con galería integrada y librería de arte',
    ],
    mood: 'Arte · Cultura · Conversación · Criterio visual',
    forWhom: 'Para coleccionistas, galeristas, creativos y cualquiera que entienda el arte como forma de habitar.',
    cta: 'Ver ruta',
  },
  {
    id: '05',
    title: 'Para vivir en SMA',
    type: 'Futuro residente',
    duration: 'Full day',
    icon: '●',
    stops: [
      'Recorrido por colonias curadas con perfil de vida local',
      'Desayuno en mercado de barrio — sin turistas',
      'Visita a coworking y espacios de comunidad creativa',
      'Reunión con agente inmobiliario BRAGO selection',
      'Cena informal con residentes internacionales establecidos',
    ],
    mood: 'Residencia · Comunidad · Lifestyle · Arraigo',
    forWhom: 'Para quienes están considerando mudarse y necesitan entender la ciudad desde dentro, no desde afuera.',
    cta: 'Solicitar sesión',
  },
  {
    id: '06',
    title: 'Ruta gastronómica',
    type: 'Gastronomía',
    duration: '6–8 horas',
    icon: '◆',
    stops: [
      'Mercado histórico al amanecer con productores locales',
      'Brunch en patio colonial con ingredientes de temporada',
      'Cata de mezcal artesanal en destilería seleccionada',
      'Comida en restaurante de autor con menú de degustación',
      'Visita a vinícola regional cercana con cata privada',
      'Cena aperitivo con chef residente al anochecer',
    ],
    mood: 'Mesa · Sabor · Territorio · Producto local',
    forWhom: 'Para gourmets, foodies de criterio y quienes entienden que comer bien es entender una ciudad.',
    cta: 'Ver ruta',
  },
]

export function BragoRoutes() {
  const [active, setActive] = useState(0)
  const route = routes[active]

  return (
    <section className="py-20 lg:py-32 bg-brago-black-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="mb-14 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-6 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">BRAGO Routes</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-brago-cream leading-tight">
              San Miguel<br />
              <em className="not-italic text-brago-cream/50">interpretado.</em>
            </h2>
            <p className="text-sm text-brago-cream-3 font-light max-w-sm leading-relaxed">
              Rutas editoriales curadas para cada tipo de viajero, inversionista o futuro residente. No son itinerarios. Son lecturas de ciudad.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brago-cream/6">

          {/* ── Route selector list ─────────────────────────────────────── */}
          <div className="bg-brago-black-3 divide-y divide-brago-cream/6">
            {routes.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActive(i)}
                className={cn(
                  'w-full text-left px-6 lg:px-8 py-5 lg:py-6 flex items-start gap-5 group transition-all duration-300 relative',
                  active === i ? 'bg-brago-black-4' : 'hover:bg-brago-black-4/60',
                )}
              >
                {/* Active bar */}
                {active === i && (
                  <motion.div
                    layoutId="route-bar"
                    className="absolute left-0 top-0 bottom-0 w-px bg-brago-gold"
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}

                {/* Number */}
                <span className={cn(
                  'font-serif text-3xl leading-none flex-shrink-0 w-10 transition-colors duration-300',
                  active === i
                    ? 'text-brago-gold'
                    : 'text-brago-cream/15 group-hover:text-brago-cream/30',
                )}>
                  {r.id}
                </span>

                {/* Labels */}
                <div className="text-left pt-0.5">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className={cn(
                      'text-2xs tracking-widest uppercase font-medium transition-colors duration-300',
                      active === i
                        ? 'text-brago-gold/70'
                        : 'text-brago-cream/18 group-hover:text-brago-cream/35',
                    )}>
                      {r.type}
                    </span>
                    <span className="text-brago-cream/10">·</span>
                    <span className={cn(
                      'text-2xs tracking-widest uppercase font-light transition-colors duration-300',
                      active === i
                        ? 'text-brago-cream-3'
                        : 'text-brago-cream/14',
                    )}>
                      {r.duration}
                    </span>
                  </div>
                  <h3 className={cn(
                    'font-serif text-lg transition-colors duration-300',
                    active === i
                      ? 'text-brago-cream'
                      : 'text-brago-cream/35 group-hover:text-brago-cream/55',
                  )}>
                    {r.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* ── Route detail ────────────────────────────────────────────── */}
          <div className="bg-brago-black flex flex-col min-h-[400px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col h-full px-8 lg:px-10 pt-10 pb-8"
              >
                {/* Icon + duration */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl text-brago-gold/25 font-serif leading-none">
                    {route.icon}
                  </span>
                  <span className="text-2xs tracking-widest uppercase text-brago-cream/20 font-light">
                    {route.duration}
                  </span>
                </div>

                {/* Title */}
                <span className="text-2xs tracking-widest uppercase text-brago-gold/60 font-medium mb-2 block">
                  {route.type}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-brago-cream mb-4 leading-tight">
                  {route.title}
                </h3>

                {/* For whom */}
                <p className="text-xs text-brago-cream/35 font-light leading-relaxed mb-6 max-w-sm italic">
                  {route.forWhom}
                </p>

                {/* Stops */}
                <div className="space-y-3.5 flex-1">
                  {route.stops.map((stop, i) => (
                    <motion.div
                      key={stop}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.055 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex items-center gap-2.5 flex-shrink-0 mt-0.5">
                        <span className="font-serif text-2xs text-brago-gold/35 leading-none">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="w-px h-3.5 bg-brago-cream/10" />
                      </div>
                      <span className="text-sm text-brago-cream-2 font-light leading-relaxed">
                        {stop}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Mood tags */}
                <div className="mt-6 mb-6 flex flex-wrap gap-2">
                  {route.mood.split(' · ').map((tag) => (
                    <span
                      key={tag}
                      className="text-2xs tracking-widest uppercase px-2.5 py-1 border border-brago-cream/8 text-brago-cream/30 font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-5 border-t border-brago-cream/8">
                  <button className="text-2xs tracking-widest uppercase font-medium px-6 py-3 border border-brago-gold/40 text-brago-gold hover:bg-brago-gold hover:text-brago-black transition-all duration-400">
                    {route.cta}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.3} className="mt-8 text-center">
          <p className="text-2xs tracking-widest uppercase text-brago-cream/15 font-medium">
            Rutas editoriales curadas por el equipo BRAGO · No son tours genéricos
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
