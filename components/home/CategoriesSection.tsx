'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { directoryCategories } from '@/data/categories'
import { cn } from '@/lib/utils'

const badgeStyles: Record<string, string> = {
  'Curated':         'border-brago-gold/40 text-brago-gold',
  'Verified':        'border-brago-cream/30 text-brago-cream-2',
  'BRAGO Selection': 'border-brago-gold bg-brago-gold/10 text-brago-gold',
  'Coming Soon':     'border-brago-cream/15 text-brago-cream-3',
}

export function CategoriesSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? directoryCategories : directoryCategories.slice(0, 12)

  return (
    <section className="py-28 lg:py-44 bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-6 bg-brago-gold/50" />
              <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Directorio</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight max-w-lg">
              Una selección.<br />
              <em className="not-italic text-brago-cream/50">Dieciséis categorías.</em>
            </h2>
          </div>
          <p className="text-sm text-brago-cream-3 font-light leading-relaxed max-w-xs lg:max-w-sm">
            Real estate, cultura, hospitalidad e inversión bajo una misma capa de inteligencia urbana.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-brago-cream/6">
          {visible.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
            >
              <Link
                href={`/directorio?categoria=${cat.id}`}
                className="group relative block bg-brago-black overflow-hidden aspect-[4/3]"
              >
                {/* Image */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-1200 ease-brago-out group-hover:scale-105 opacity-60 group-hover:opacity-75"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brago-black via-brago-black/60 to-transparent" />
                <div className="absolute inset-0 bg-brago-black/0 group-hover:bg-brago-black/10 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <span className="text-xl text-brago-gold/50 group-hover:text-brago-gold transition-colors duration-300">
                      {cat.icon}
                    </span>
                    <span className={cn(
                      'text-2xs tracking-widest uppercase font-medium px-2 py-0.5 border',
                      badgeStyles[cat.badge],
                    )}>
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <p className="text-2xs tracking-widest uppercase text-brago-gold/60 mb-2 font-medium">
                      {cat.memberCount} miembros
                    </p>
                    <h3 className="font-serif text-xl text-brago-cream mb-2 group-hover:text-brago-gold transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-brago-cream/50 leading-relaxed font-light line-clamp-2 group-hover:text-brago-cream/70 transition-colors duration-300">
                      {cat.editorialDescription}
                    </p>
                  </div>
                </div>

                {/* Bottom border reveal */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-brago-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

        {!showAll && directoryCategories.length > 12 && (
          <AnimatedSection className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-2xs tracking-widest uppercase font-medium px-8 py-3 border border-brago-cream/20 text-brago-cream-2 hover:border-brago-gold/50 hover:text-brago-gold transition-all duration-400"
            >
              Ver todas las categorías ({directoryCategories.length})
            </button>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
