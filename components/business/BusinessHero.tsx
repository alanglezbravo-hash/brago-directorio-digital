'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { TierBadge, CategoryBadge } from '@/components/ui/Badge'
import { Business } from '@/types'

interface BusinessHeroProps {
  business: Business
}

export function BusinessHero({ business }: BusinessHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div ref={ref} className="relative h-[85vh] min-h-[560px] overflow-hidden">

      {/* Parallax image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src={business.heroImage}
          alt={business.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brago-black via-brago-black/30 to-brago-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-brago-black/40 to-transparent" />

      {/* Back link */}
      <div className="absolute top-24 left-6 lg:left-8 z-10">
        <Link
          href="/directorio"
          className="flex items-center gap-2 text-2xs tracking-widest uppercase text-brago-cream/50 hover:text-brago-cream transition-colors duration-300 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Directorio
        </Link>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-0 left-0 right-0 pb-12 lg:pb-20 px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Badges */}
          <div className="flex items-center gap-3 mb-5">
            <CategoryBadge category={business.category} />
            <TierBadge tier={business.tier} />
          </div>

          {/* Name */}
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-none text-brago-cream mb-4 max-w-2xl">
            {business.name}
          </h1>

          {/* Tagline */}
          <p className="font-serif italic text-lg lg:text-xl text-brago-cream/60 font-light max-w-xl">
            {business.tagline}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-2xs tracking-widest uppercase text-brago-cream/40 font-medium">
              {business.city}
            </span>
            <span className="w-1 h-1 bg-brago-gold/40 rounded-full" />
            <span className="text-2xs tracking-widest uppercase text-brago-cream/40 font-medium">
              {business.neighborhood}
            </span>
            <span className="w-1 h-1 bg-brago-gold/40 rounded-full" />
            <span className="text-2xs tracking-widest uppercase text-brago-cream/40 font-medium">
              Desde {business.since}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
