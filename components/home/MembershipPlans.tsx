'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

const plans = [
  {
    tier: 'Estrella',
    price: '$2,900',
    period: 'MXN / mes',
    tagline: 'Presencia premium básica dentro del directorio más curado del Bajío.',
    badge: '◇',
    features: [
      'Perfil verificado en el directorio',
      'Fotografía destacada editorial',
      'Descripción de autor',
      'Categoría, ciudad y colonia',
      'Aparición en búsquedas BRAGO',
      'Badge "BRAGO Selection" en perfil',
      'Mención ocasional en listas editoriales',
      'Métricas básicas de visibilidad',
    ],
    cta: 'Aplicar para Estrella',
    highlight: false,
  },
  {
    tier: 'Diamante',
    price: '$7,900',
    period: 'MXN / mes',
    tagline: 'Posicionamiento fuerte, distribución editorial y presencia activa dentro del ecosistema BRAGO.',
    badge: '◆',
    features: [
      'Todo lo incluido en Estrella',
      'Perfil ampliado con historia de marca',
      'Prioridad en categorías y búsquedas',
      'Aparición en bloques "Destacados"',
      'Integración con BRAGO Journal',
      'Producción visual con Hélices Films',
      'Videos y reels integrables al perfil',
      'Publicación en redes BRAGO Media',
      'Analytics avanzados con métricas',
      'Acceso preferente a eventos BRAGO',
      'Reservaciones y leads desde plataforma',
    ],
    cta: 'Aplicar para Diamante',
    highlight: true,
  },
  {
    tier: 'Founder',
    price: 'A la medida',
    period: 'partnership estratégico',
    tagline: 'Para hoteles, desarrolladoras, restaurantes de autor, galerías y proyectos inmobiliarios que quieren ser parte fundacional del ecosistema BRAGO.',
    badge: '▲',
    features: [
      'Posicionamiento editorial prioritario',
      'Producción audiovisual premium',
      'Reportajes en BRAGO Journal',
      'Activaciones y eventos de marca',
      'Integración con Real Estate Intelligence',
      'Campañas completas con BRAGO Media',
      'Presencia en guía física semestral',
      'Distintivo físico premium en establecimiento',
      'Partnership estratégico activo',
      'Acceso directo a red de inversores',
    ],
    cta: 'Solicitar evaluación',
    highlight: false,
  },
]

function PlanCard({ plan, className }: { plan: typeof plans[number]; className?: string }) {
  return (
    <div className={cn(
      'relative flex flex-col p-8 lg:p-10',
      plan.highlight ? 'bg-brago-black-4' : 'bg-brago-black-2',
      className,
    )}>
      {plan.highlight && (
        <div className="absolute top-0 left-0 right-0 h-px bg-brago-gold" />
      )}

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xl text-brago-gold">{plan.badge}</span>
          <span className={cn(
            'text-2xs tracking-widest uppercase font-medium px-2 py-0.5 border',
            plan.highlight
              ? 'border-brago-gold/60 text-brago-gold'
              : 'border-brago-cream/20 text-brago-cream-2',
          )}>
            BRAGO {plan.tier}
          </span>
          {plan.highlight && (
            <span className="text-2xs tracking-widest uppercase text-brago-gold/60 font-medium">Recomendado</span>
          )}
        </div>

        <div className="mb-2">
          <span className="font-serif text-4xl text-brago-cream">{plan.price}</span>
          {plan.price !== 'A la medida' && (
            <span className="text-sm text-brago-cream-3 font-light ml-2">{plan.period}</span>
          )}
        </div>
        {plan.price === 'A la medida' && (
          <p className="text-sm text-brago-cream-3 font-light mb-1">{plan.period}</p>
        )}
        <p className="text-sm text-brago-cream-3 font-light leading-relaxed mt-3">
          {plan.tagline}
        </p>
      </div>

      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="w-1 h-1 rounded-full bg-brago-gold/60 mt-2 flex-shrink-0" />
            <span className="text-xs text-brago-cream-2 font-light leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/membresias"
        className={cn(
          'text-center text-2xs tracking-widest uppercase font-medium px-6 py-3.5 border transition-all duration-400 mt-auto',
          plan.highlight
            ? 'bg-brago-vino border-brago-vino text-brago-cream hover:bg-brago-vino-3'
            : 'border-brago-cantera/40 text-brago-cantera hover:bg-brago-cantera/10 hover:border-brago-cantera',
        )}
      >
        {plan.cta}
      </Link>
    </div>
  )
}

export function MembershipPlans() {
  const [active, setActive] = useState(1)

  return (
    <section className="py-28 lg:py-44 bg-brago-black-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-8 bg-brago-gold/40" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Membresías</span>
            <span className="h-px w-8 bg-brago-gold/40" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight max-w-2xl mx-auto mb-6">
            Tres niveles de presencia.<br />
            <em className="not-italic text-brago-cream/50">Un solo estándar.</em>
          </h2>
          <p className="text-sm text-brago-cream-3 font-light max-w-md mx-auto leading-relaxed">
            La membresía en BRAGO no garantiza entrada automática. Compra evaluación, presencia editorial y distribución — si el negocio califica.
          </p>
        </AnimatedSection>

        {/* Desktop — 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-px bg-brago-cream/6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <PlanCard plan={plan} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* Mobile — tabbed */}
        <div className="lg:hidden">
          <div className="flex items-center border border-brago-cream/12 overflow-hidden mb-0 w-full">
            {plans.map((plan, i) => (
              <button
                key={plan.tier}
                onClick={() => setActive(i)}
                className={cn(
                  'flex-1 py-3 text-2xs tracking-widest uppercase transition-all duration-300 font-medium border-r border-brago-cream/10 last:border-0',
                  active === i ? 'bg-brago-gold text-brago-black' : 'text-brago-cream-3',
                )}
              >
                {plan.tier}
              </button>
            ))}
          </div>
          <div className="bg-brago-cream/6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <PlanCard plan={plans[active]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Legal note */}
        <AnimatedSection className="mt-8">
          <p className="text-xs text-brago-cream-3/50 font-light text-center max-w-2xl mx-auto leading-relaxed">
            Los precios pueden variar según categoría, ciudad, visibilidad, producción de contenido, tráfico esperado y nivel de integración dentro del ecosistema BRAGO.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
