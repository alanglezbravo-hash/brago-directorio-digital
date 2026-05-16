'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { MembershipTier } from '@/types'

const plans = [
  {
    tier: 'Estrella' as MembershipTier,
    priceLabel: '$2,900',
    period: 'MXN / mes',
    annualLabel: '$31,320 MXN / año (2 meses de descuento)',
    description: 'Presencia premium básica dentro del directorio más curado del Bajío.',
    badge: '◇',
    highlight: false,
    features: [
      'Perfil verificado en el directorio',
      'Fotografía destacada editorial',
      'Descripción de autor redactada por BRAGO',
      'Categoría, ciudad y colonia',
      'Aparición en búsquedas BRAGO',
      'Badge "BRAGO Selection" en perfil',
      'Mención ocasional en listas editoriales',
      'Métricas básicas de visibilidad',
      'Panel de administración',
    ],
    notIncluded: [
      'Posición destacada en homepage',
      'Integración BRAGO Journal',
      'Producción visual con Hélices Films',
      'Acceso a eventos privados BRAGO',
    ],
    cta: 'Aplicar para Estrella',
  },
  {
    tier: 'Diamante' as MembershipTier,
    priceLabel: '$7,900',
    period: 'MXN / mes',
    annualLabel: '$85,320 MXN / año (2 meses de descuento)',
    description: 'Posicionamiento fuerte, distribución editorial y presencia activa dentro del ecosistema BRAGO.',
    badge: '◆',
    highlight: true,
    highlightLabel: 'Más seleccionado',
    features: [
      'Todo lo incluido en Estrella',
      'Perfil ampliado con historia de marca',
      'Prioridad en categorías y búsquedas',
      'Aparición en bloques "Destacados" del home',
      'Integración con BRAGO Journal',
      'Producción visual con Hélices Films',
      'Videos y reels integrables al perfil',
      'Publicación en redes BRAGO Media',
      'Analytics avanzados con métricas',
      'Acceso preferente a eventos BRAGO',
      'Reservaciones y leads desde plataforma',
      'Distintivo físico BRAGO Diamante',
    ],
    notIncluded: [],
    cta: 'Aplicar para Diamante',
  },
  {
    tier: 'Founder' as MembershipTier,
    priceLabel: 'A la medida',
    period: 'partnership estratégico',
    annualLabel: 'Propuesta personalizada',
    description: 'Para hoteles, desarrolladoras, restaurantes de autor, galerías y proyectos inmobiliarios que quieren ser parte fundacional del ecosistema BRAGO.',
    badge: '▲',
    highlight: false,
    features: [
      'Posicionamiento editorial prioritario',
      'Producción audiovisual premium (Hélices Films)',
      'Reportajes en BRAGO Journal',
      'Activaciones y eventos de marca',
      'Integración con Real Estate Intelligence',
      'Campañas completas con BRAGO Media',
      'Presencia en guía física semestral',
      'Distintivo físico premium en establecimiento',
      'Partnership estratégico activo',
      'Acceso directo a red de inversores',
      'Curación editorial completa de identidad',
    ],
    notIncluded: [],
    cta: 'Solicitar evaluación Founder',
  },
]

export function PricingSection() {
  return (
    <section className="py-24 lg:py-40 bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="text-center mb-20 lg:mb-28">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-8 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Membresías</span>
            <span className="h-px w-8 bg-brago-gold/50" />
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-brago-cream mb-6 leading-tight">
            Tres niveles.<br />Un estándar.
          </h2>
          <p className="text-sm text-brago-cream-3 font-light max-w-lg mx-auto leading-relaxed">
            Cada negocio en BRAGO es seleccionado por nuestro equipo editorial. La membresía formaliza esa selección, define la presencia y activa la distribución dentro del ecosistema.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brago-cream/6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative flex flex-col p-8 lg:p-10 ${
                plan.highlight
                  ? 'bg-brago-black-4'
                  : 'bg-brago-black-2'
              }`}
            >
              {/* Highlight bar */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-brago-gold" />
              )}
              {plan.highlight && 'highlightLabel' in plan && (
                <div className="absolute -top-3 right-8">
                  <span className="bg-brago-gold text-brago-black text-2xs tracking-widest uppercase font-medium px-3 py-1">
                    {(plan as typeof plan & { highlightLabel: string }).highlightLabel}
                  </span>
                </div>
              )}

              {/* Tier header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg text-brago-gold">{plan.badge}</span>
                <span className={`text-2xs tracking-widest-2 uppercase font-medium ${
                  plan.highlight ? 'text-brago-gold' : 'text-brago-cream-2'
                }`}>
                  BRAGO {plan.tier}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="font-serif text-4xl text-brago-cream">{plan.priceLabel}</span>
                {plan.priceLabel !== 'A la medida' && (
                  <span className="text-xs text-brago-cream/30 font-light ml-2">{plan.period}</span>
                )}
                {plan.priceLabel === 'A la medida' && (
                  <p className="text-sm text-brago-cream-3 font-light mt-1">{plan.period}</p>
                )}
                <p className="text-2xs text-brago-cream/20 font-light mt-1">{plan.annualLabel}</p>
              </div>

              <p className="text-sm text-brago-cream-3 font-light leading-relaxed mb-8 pb-8 border-b border-brago-cream/8">
                {plan.description}
              </p>

              <ul className="flex-1 space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-brago-gold/70 rotate-45 mt-2 flex-shrink-0" />
                    <span className="text-sm text-brago-cream-2 font-light">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 opacity-25">
                    <span className="w-1 h-1 border border-brago-cream/30 rotate-45 mt-2 flex-shrink-0" />
                    <span className="text-sm text-brago-cream/40 font-light line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#aplicar"
                className={`inline-flex items-center justify-center text-2xs tracking-widest uppercase font-medium py-4 transition-all duration-400 ${
                  plan.highlight
                    ? 'bg-brago-gold text-brago-black hover:bg-brago-gold-light'
                    : 'border border-brago-gold/40 text-brago-gold hover:bg-brago-gold hover:text-brago-black'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <p className="text-2xs tracking-widest uppercase text-brago-cream/20 font-medium">
            Cada negocio pasa por un proceso de selección editorial · BRAGO reserva el derecho de admisión
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
