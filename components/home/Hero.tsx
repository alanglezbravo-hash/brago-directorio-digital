'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const stats = [
  { value: '180+', label: 'Lugares curados' },
  { value: '2',    label: 'Ciudades' },
  { value: '16',   label: 'Categorías' },
  { value: '100%', label: 'Selección editorial' },
]

const cities = [
  {
    id: 'SMA' as const,
    name: 'San Miguel de Allende',
    short: 'San Miguel',
    tagline: 'San Miguel de Allende no se visita. Se interpreta.',
  },
  {
    id: 'León' as const,
    name: 'León, Guanajuato',
    short: 'León',
    tagline: 'León no se cuenta. Se mueve.',
  },
]

export function Hero() {
  const [activeCity, setActiveCity] = useState<'SMA' | 'León'>('SMA')
  const city = cities.find((c) => c.id === activeCity)!

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brago-black">

      {/* Background image with cinematic layering */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/brago-hero-cadillac/1920/1080"
          alt="BRAGO"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Cadillac wash — vino bottom, obsidiana top */}
        <div className="absolute inset-0 bg-gradient-to-b from-brago-black/90 via-brago-black/60 to-brago-black" />
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(74, 15, 31, 0.35) 0%, transparent 65%)',
          }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto pt-32 pb-24">

        {/* Issue marker — editorial banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-4 mb-10 flex-wrap justify-center"
        >
          <span className="h-px w-10 bg-brago-cantera/50" />
          <span className="text-2xs tracking-widest-3 uppercase text-brago-cantera font-medium">
            Interfaz de ciudad · BRAGO
          </span>
          <span className="w-1 h-1 bg-brago-vino-3 rotate-45 inline-block" />
          <span className="text-2xs tracking-widest uppercase text-brago-cream/40 font-light">
            Issue I · {new Date().getFullYear()}
          </span>
          <span className="h-px w-10 bg-brago-cantera/50" />
        </motion.div>

        {/* Wordmark */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(4.5rem,15vw,10.5rem)] leading-none tracking-tight text-brago-cream"
          >
            BRAGO
          </motion.h1>
        </div>

        {/* City toggle — sub-wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center gap-0 mb-10 border border-brago-cantera/20"
        >
          {cities.map((c) => {
            const isActive = activeCity === c.id
            return (
              <button
                key={c.id}
                onClick={() => setActiveCity(c.id)}
                className={cn(
                  'px-5 py-2 text-2xs tracking-widest uppercase transition-all duration-400 font-medium',
                  isActive
                    ? 'bg-brago-cantera text-brago-black'
                    : 'text-brago-cream-3 hover:text-brago-cream',
                )}
              >
                {c.short}
              </button>
            )
          })}
        </motion.div>

        {/* Power tagline — main editorial promise */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-2xl lg:text-4xl xl:text-5xl text-brago-cream leading-tight max-w-3xl mb-6"
        >
          Una ciudad premium<br className="hidden sm:block" /> necesita una <em className="not-italic text-brago-cantera">interfaz premium.</em>
        </motion.h2>

        {/* City tagline — dynamic per city */}
        <AnimatePresence mode="wait">
          <motion.p
            key={city.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.5 }}
            className="font-serif italic text-base lg:text-lg text-brago-cream/45 mb-3 font-light tracking-wide max-w-xl"
          >
            {city.tagline}
          </motion.p>
        </AnimatePresence>

        {/* Sub-tagline with vino accent */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="mb-12 max-w-xl flex flex-col items-center"
        >
          <p className="text-sm text-brago-cream/45 font-light leading-relaxed text-center">
            BRAGO convierte <span className="text-brago-cream/65">{city.name}</span> en una experiencia navegable.
            <br className="hidden sm:block" />
            <span className="text-brago-cream/30">No mostramos negocios. Mostramos la ciudad como debería verse.</span>
          </p>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="block h-px w-24 mt-5 origin-center"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(74,15,31,0.9), transparent)',
            }}
          />
        </motion.div>

        {/* CTAs — Cadillac hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-4"
        >
          {/* Primary — vino tinto */}
          <Link
            href={`/directorio?ciudad=${city.name}`}
            className="group flex items-center gap-3 px-7 py-3.5 bg-brago-vino text-brago-cream hover:bg-brago-vino-3 transition-all duration-400"
          >
            <span className="text-2xs tracking-widest uppercase font-medium">
              Explorar {city.short}
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>

          {/* Secondary — cantera outline (map) */}
          <Link
            href="/#mapa"
            className="group flex items-center gap-3 px-7 py-3.5 border border-brago-cantera/40 text-brago-cantera hover:bg-brago-cantera/10 hover:border-brago-cantera transition-all duration-400"
          >
            <span className="text-2xs tracking-widest uppercase font-medium">Abrir mapa BRAGO</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>

          {/* Tertiary — premium black */}
          <Link
            href="/membresias"
            className="group flex items-center gap-3 px-7 py-3.5 border border-brago-cream/15 text-brago-cream/70 hover:border-brago-cantera/50 hover:text-brago-cantera transition-all duration-400"
          >
            <span className="text-2xs tracking-widest uppercase font-medium">Publicar mi negocio</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        {/* Micro-labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-10"
        >
          <span className="text-2xs tracking-widest uppercase text-brago-cream/20 font-light">
            Visitar
          </span>
          <span className="text-brago-cream/10">·</span>
          <span className="text-2xs tracking-widest uppercase text-brago-cream/20 font-light">
            Vivir
          </span>
          <span className="text-brago-cream/10">·</span>
          <span className="text-2xs tracking-widest uppercase text-brago-cream/20 font-light">
            Invertir
          </span>
          <span className="text-brago-cream/10">·</span>
          <span className="text-2xs tracking-widest uppercase text-brago-cream/20 font-light">
            Pertenecer
          </span>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="w-full max-w-xl relative"
        >
          <input
            type="text"
            placeholder="Buscar restaurantes, colonias, hoteles, propiedades…"
            readOnly
            onClick={() => window.location.href = '/directorio'}
            className="w-full bg-brago-black/60 backdrop-blur-md border border-brago-cantera/15 text-brago-cream placeholder:text-brago-cream/25 px-6 py-4 text-xs font-light focus:outline-none focus:border-brago-cantera/40 transition-colors duration-400 cursor-pointer"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brago-cantera/40">
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
        transition={{ duration: 1, delay: 1.6 }}
        className="relative z-10 w-full border-t border-brago-cantera/12"
      >
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-brago-cantera/10">
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
          className="w-px h-12 bg-gradient-to-b from-brago-cantera/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
