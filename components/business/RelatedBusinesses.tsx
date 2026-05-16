'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TierBadge, CategoryBadge } from '@/components/ui/Badge'
import { Business } from '@/types'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface RelatedBusinessesProps {
  businesses: Business[]
}

export function RelatedBusinesses({ businesses }: RelatedBusinessesProps) {
  if (!businesses.length) return null

  return (
    <section className="py-20 lg:py-32 bg-brago-black-2 border-t border-brago-cream/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-6 bg-brago-gold/50" />
              <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">
                También en BRAGO
              </span>
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl text-brago-cream">Lugares relacionados</h2>
          </div>
          <Link
            href="/directorio"
            className="hidden lg:flex items-center gap-2 text-2xs tracking-widest uppercase text-brago-cream/30 hover:text-brago-gold transition-colors group"
          >
            Ver directorio
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {businesses.map((biz, i) => (
            <motion.div
              key={biz.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href={`/negocio/${biz.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/3] bg-brago-black-3 mb-4">
                  <Image
                    src={biz.coverImage}
                    alt={biz.name}
                    fill
                    className="object-cover transition-transform duration-1200 ease-brago-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brago-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-brago-black/0 group-hover:bg-brago-black/25 transition-colors duration-500" />
                  <div className="absolute top-3 right-3">
                    <TierBadge tier={biz.tier} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-brago-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                </div>
                <CategoryBadge category={biz.category} className="mb-2" />
                <h3 className="font-serif text-lg text-brago-cream group-hover:text-brago-gold transition-colors duration-300 mb-1">
                  {biz.name}
                </h3>
                <p className="text-2xs tracking-widest uppercase text-brago-cream/30 font-medium">
                  {biz.city}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
