'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TierBadge, CategoryBadge } from '@/components/ui/Badge'
import { Business } from '@/types'

interface BusinessCardProps {
  business: Business
  index?: number
  view?: 'grid' | 'list'
}

export function BusinessCard({ business, index = 0, view = 'grid' }: BusinessCardProps) {
  if (view === 'list') {
    return <BusinessListCard business={business} index={index} />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/negocio/${business.slug}`} className="group block">

        {/* Image container */}
        <div className="relative overflow-hidden aspect-[3/4] bg-brago-black-3 mb-4">
          <Image
            src={business.coverImage}
            alt={business.name}
            fill
            className="object-cover transition-transform duration-1200 ease-brago-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brago-black/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-brago-black/0 group-hover:bg-brago-black/25 transition-colors duration-500" />

          {/* Tier badge */}
          <div className="absolute top-3 right-3">
            <TierBadge tier={business.tier} />
          </div>

          {/* Category */}
          <div className="absolute bottom-3 left-3">
            <CategoryBadge category={business.category} />
          </div>

          {/* Hover: view label */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span className="text-2xs tracking-widest-2 uppercase text-brago-cream border border-brago-cream/30 px-4 py-2 bg-brago-black/60 backdrop-blur-sm font-medium">
              Ver perfil
            </span>
          </div>

          {/* Bottom gold line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-brago-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
        </div>

        {/* Text content */}
        <div className="px-0.5">
          <p className="text-2xs tracking-widest uppercase text-brago-cream/40 mb-1.5 font-medium">
            {business.city}
          </p>
          <h3 className="font-serif text-lg text-brago-cream group-hover:text-brago-gold transition-colors duration-300 leading-snug mb-2">
            {business.name}
          </h3>
          <p className="text-xs text-brago-cream-3 leading-relaxed line-clamp-2 font-light">
            {business.tagline}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

function BusinessListCard({ business, index }: { business: Business; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={`/negocio/${business.slug}`}
        className="group flex gap-5 lg:gap-8 border-b border-brago-cream/8 py-7 hover:border-brago-gold/20 transition-colors duration-400"
      >
        {/* Thumbnail */}
        <div className="relative flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 overflow-hidden bg-brago-black-3">
          <Image
            src={business.coverImage}
            alt={business.name}
            fill
            className="object-cover transition-transform duration-800 group-hover:scale-105"
            sizes="128px"
          />
          <div className="absolute inset-0 bg-brago-black/0 group-hover:bg-brago-black/20 transition-colors duration-400" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <CategoryBadge category={business.category} />
            <TierBadge tier={business.tier} />
          </div>
          <h3 className="font-serif text-xl lg:text-2xl text-brago-cream group-hover:text-brago-gold transition-colors duration-300 mb-1.5">
            {business.name}
          </h3>
          <p className="text-xs text-brago-cream-3 leading-relaxed line-clamp-2 font-light mb-3">
            {business.tagline}
          </p>
          <p className="text-2xs tracking-widest uppercase text-brago-cream/30 font-medium">
            {business.city} · {business.neighborhood}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 flex items-center">
          <span className="text-brago-cream/20 group-hover:text-brago-gold transition-all duration-300 group-hover:translate-x-1 inline-block">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
