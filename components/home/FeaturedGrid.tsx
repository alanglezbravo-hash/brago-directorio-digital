'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { businesses } from '@/data/businesses'
import { cn } from '@/lib/utils'

const tierStyles = {
  Estrella: { label: 'Estrella',         class: 'text-brago-cream-3 border-brago-cream/20' },
  Diamante: { label: 'Diamante',         class: 'text-brago-gold border-brago-gold/40' },
  Founder:  { label: 'Founder Member',   class: 'text-brago-gold bg-brago-gold/10 border-brago-gold/60' },
}

export function FeaturedGrid() {
  const featured = businesses.filter((b) => b.featured).slice(0, 8)

  return (
    <section className="py-28 lg:py-44 bg-brago-black-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-6 bg-brago-gold/50" />
              <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Selección editorial</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight">
              Featured Selection
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-sm text-brago-cream-3 font-light max-w-xs hidden lg:block">
              Los lugares que BRAGO considera indispensables en este momento.
            </p>
            <Link
              href="/directorio"
              className="text-2xs tracking-widest uppercase font-medium text-brago-gold/70 hover:text-brago-gold transition-colors duration-300 whitespace-nowrap flex items-center gap-2"
            >
              Ver todo <span>→</span>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-brago-cream/6">
          {featured.map((biz, i) => {
            const tier = tierStyles[biz.tier] ?? tierStyles.Estrella
            return (
              <motion.div
                key={biz.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  href={`/negocio/${biz.slug}`}
                  className="group bg-brago-black-2 flex flex-col overflow-hidden hover:bg-brago-black-3 transition-colors duration-400 block"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={biz.coverImage}
                      alt={biz.name}
                      fill
                      className="object-cover transition-transform duration-1200 ease-brago-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-brago-black/20 group-hover:bg-brago-black/10 transition-colors duration-500" />

                    {/* Tier badge */}
                    <div className="absolute top-4 left-4">
                      <span className={cn(
                        'text-2xs tracking-widest uppercase px-2 py-0.5 border font-medium',
                        tier.class,
                      )}>
                        {tier.label}
                      </span>
                    </div>

                    {/* Verified mark */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-brago-black/60 backdrop-blur-sm px-2 py-1">
                      <span className="w-1 h-1 bg-brago-gold rounded-full" />
                      <span className="text-2xs tracking-widest uppercase text-brago-gold font-medium">Verified</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xs tracking-widest uppercase text-brago-gold/60 font-medium">{biz.category}</span>
                      <span className="text-brago-cream/20">·</span>
                      <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{biz.city === 'San Miguel de Allende' ? 'SMA' : biz.city}</span>
                    </div>

                    <h3 className="font-serif text-xl text-brago-cream mb-2 group-hover:text-brago-gold transition-colors duration-300 leading-tight">
                      {biz.name}
                    </h3>
                    <p className="text-xs text-brago-cream/50 font-light italic mb-4 leading-relaxed">
                      {biz.tagline}
                    </p>

                    {/* Tags */}
                    {biz.tags && biz.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {biz.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-2xs tracking-widest uppercase px-2 py-0.5 border border-brago-cream/10 text-brago-cream-3 font-light">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-4 border-t border-brago-cream/8 flex items-center justify-between">
                      <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">
                        {biz.neighborhood}
                      </span>
                      <span className="text-2xs tracking-widest uppercase text-brago-gold/60 group-hover:text-brago-gold transition-colors duration-300 font-medium">
                        Ver perfil →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
