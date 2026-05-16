'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Business } from '@/types'

interface BusinessDetailProps {
  business: Business
}

export function BusinessDetail({ business }: BusinessDetailProps) {
  return (
    <section className="py-16 lg:py-24 bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Main content — 7 cols */}
          <div className="lg:col-span-7">

            {/* Story */}
            <AnimatedSection className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-6 bg-brago-gold/50" />
                <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Historia</span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl text-brago-cream mb-6 leading-snug">
                {business.name}
              </h2>
              <p className="text-sm text-brago-cream-3 leading-relaxed font-light mb-4">
                {business.description}
              </p>
              <p className="text-sm text-brago-cream-3 leading-relaxed font-light">
                {business.story}
              </p>
            </AnimatedSection>

            {/* Services */}
            <AnimatedSection delay={0.1} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-6 bg-brago-gold/50" />
                <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Servicios</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {business.services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex items-start gap-3 py-2.5 border-b border-brago-cream/8"
                  >
                    <span className="w-1 h-1 bg-brago-gold/60 rotate-45 mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-brago-cream-2 font-light">{service}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Tags */}
            <AnimatedSection delay={0.15}>
              <div className="flex flex-wrap gap-2">
                {business.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-2xs tracking-widest uppercase text-brago-cream/30 border border-brago-cream/10 px-3 py-1.5 font-medium hover:border-brago-gold/30 hover:text-brago-gold/60 transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar — 5 cols */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">

              {/* Hours */}
              <AnimatedSection direction="left" className="border border-brago-cream/8 p-6">
                <h3 className="text-2xs tracking-widest-2 uppercase text-brago-gold/70 font-medium mb-5">
                  Horarios
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between gap-4">
                    <span className="text-xs text-brago-cream/40 font-light flex-shrink-0">Entre semana</span>
                    <span className="text-xs text-brago-cream font-light text-right">{business.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-xs text-brago-cream/40 font-light flex-shrink-0">Fin de semana</span>
                    <span className="text-xs text-brago-cream font-light text-right">{business.hours.weekend}</span>
                  </div>
                  {business.hours.closed && (
                    <div className="flex justify-between gap-4">
                      <span className="text-xs text-brago-cream/30 font-light flex-shrink-0">Cierra</span>
                      <span className="text-xs text-brago-cream/50 font-light text-right">{business.hours.closed}</span>
                    </div>
                  )}
                </div>
              </AnimatedSection>

              {/* Contact */}
              <AnimatedSection direction="left" delay={0.1} className="border border-brago-cream/8 p-6">
                <h3 className="text-2xs tracking-widest-2 uppercase text-brago-gold/70 font-medium mb-5">
                  Contacto
                </h3>
                <div className="space-y-4">
                  <ContactRow label="Dirección" value={`${business.address}, ${business.city}`} />
                  <ContactRow label="Teléfono"  value={business.phone}   href={`tel:${business.phone}`} />
                  <ContactRow label="Email"     value={business.email}   href={`mailto:${business.email}`} />
                  {business.website && (
                    <ContactRow label="Web" value={business.website} href={business.website} external />
                  )}
                  {business.instagram && (
                    <ContactRow label="Instagram" value={business.instagram} />
                  )}
                </div>
              </AnimatedSection>

              {/* Map placeholder */}
              <AnimatedSection direction="left" delay={0.15}>
                <div className="relative overflow-hidden bg-brago-black-3 border border-brago-cream/8 h-48 flex items-center justify-center">
                  {/* Stylized map placeholder */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 39px, #C8A96E20 39px, #C8A96E20 40px),
                        repeating-linear-gradient(90deg, transparent, transparent 39px, #C8A96E20 39px, #C8A96E20 40px)
                      `,
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-3 h-3 bg-brago-gold rotate-45 mx-auto mb-3" />
                    <p className="text-2xs tracking-widest uppercase text-brago-cream/40 font-medium">
                      {business.neighborhood}
                    </p>
                    <p className="text-xs text-brago-cream/25 font-light mt-1">
                      {business.city}
                    </p>
                  </div>
                </div>
                <p className="text-2xs text-brago-cream/25 font-light mt-2 px-1">{business.address}</p>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  label,
  value,
  href,
  external,
}: {
  label:    string
  value:    string
  href?:    string
  external?: boolean
}) {
  const content = (
    <div className="flex justify-between gap-4 items-start">
      <span className="text-2xs tracking-widest uppercase text-brago-cream/30 font-medium flex-shrink-0 pt-0.5">
        {label}
      </span>
      <span className={`text-xs font-light text-right ${href ? 'text-brago-cream hover:text-brago-gold transition-colors duration-200' : 'text-brago-cream-2'}`}>
        {value}
      </span>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {content}
      </a>
    )
  }

  return <div>{content}</div>
}
