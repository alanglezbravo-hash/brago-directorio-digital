'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '180+', label: 'Lugares curados' },
  { value: '2',    label: 'Ciudades' },
  { value: '16',   label: 'Categorías' },
  { value: '100%', label: 'Selección editorial' },
]

export function Hero() {
  const [city, setCity] = useState<'SMA' | 'León'>('SMA')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/brago-hero-main/1920/1080"
          alt="BRAGO"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brago-black/85 via-brago-black/55 to-brago-black" />
        <div className="absolute inset-0 bg-brago-black/20" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto pt-32 pb-24">

        {/* Issue marker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="h-px w-10 bg-brago-gold/50" />
          <span className="text-2xs tracking-widest-3 uppercase text-brago-gold font-medium">
            Guía editorial · San Miguel de Allende
          </span>
          <span className="h-px w-10 bg-brago-gold/50" />
        </motion.div>

        {/* Wordmark */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(5rem,16vw,11rem)] leading-none tracking-tight text-brago-cream"
          >
            BRAGO
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif italic text-lg lg:text-2xl text-brago-cream/55 mb-4 font-light tracking-wide max-w-2xl"
        >
          San Miguel de Allende no se visita.<br className="hidden lg:block" />
          <em className="not-italic text-brago-cream/35">Se interpreta.</em>
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-sm text-brago-cream/40 font-light mb-12 max-w-lg leading-relaxed"
        >
          Real estate, cultura, hospitalidad e inversión bajo una sola capa de inteligencia editorial.
        </motion.p>

        {/* Two-path CTAs — clearly separated */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-4"
        >
          {/* Visitor path */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/directorio"
              className="group flex items-center gap-3 px-7 py-3.5 border border-brago-cream/20 text-brago-cream hover:border-brago-gold/60 hover:text-brago-gold transition-all duration-400"
            >
              <span className="text-2xs tracking-widest uppercase font-medium">Explorar la ciudad</span>
              <span className="text-brago-cream/30 group-hover:text-brago-gold/50 transition-colors">→</span>
            </Link>
            <Link
              href="/real-estate"
              className="group flex items-center gap-3 px-7 py-3.5 border border-brago-cream/15 text-brago-cream/70 hover:border-brago-gold/40 hover:text-brago-gold transition-all duration-400"
            >
              <span className="text-2xs tracking-widest uppercase font-medium">Ver Real Estate</span>
              <span className="text-brago-cream/20 group-hover:text-brago-gold/40 transition-colors">→</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden sm:flex items-center gap-3 text-brago-cream/15">
            <div className="w-px h-6 bg-brago-cream/15" />
          </div>

          {/* Business path */}
          <Link
            href="/membresias"
            className="px-7 py-3.5 bg-brago-gold text-brago-black text-2xs tracking-widest uppercase font-medium hover:bg-brago-gold-light transition-colors duration-400"
          >
            Aplicar como miembro
          </Link>
        </motion.div>

        {/* Micro-labels for paths */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-14 mb-10"
        >
          <span className="text-2xs tracking-widest uppercase text-brago-cream/20 font-light">
            Para visitantes e inversionistas
          </span>
          <span className="hidden sm:block text-brago-cream/10">·</span>
          <span className="text-2xs tracking-widest uppercase text-brago-cream/20 font-light">
            Para negocios y marcas
          </span>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-xl relative"
        >
          <input
            type="text"
            placeholder="Buscar restaurantes, colonias, hoteles, propiedades…"
            readOnly
            onClick={() => window.location.href = '/directorio'}
            className="w-full bg-brago-black/50 backdrop-blur-md border border-brago-cream/15 text-brago-cream placeholder:text-brago-cream/25 px-6 py-4 text-xs font-light focus:outline-none focus:border-brago-gold/40 transition-colors duration-400 cursor-pointer"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brago-cream/25">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="6.5" cy="6.5" r="5" />
              <line x1="10.5" y1="10.5" x2="14" y2="14" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 w-full border-t border-brago-cream/8"
      >
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-brago-cream/8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center lg:items-start lg:px-10 first:pl-0">
              <span className="font-serif text-2xl lg:text-3xl text-brago-cream">{stat.value}</span>
              <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-brago-cream/25 to-transparent"
        />
      </motion.div>
    </section>
  )
}
