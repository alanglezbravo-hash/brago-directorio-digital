'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Directorio',  href: '/directorio' },
  { label: 'Mapa',        href: '/#mapa' },
  { label: 'Real Estate', href: '/real-estate' },
  { label: 'Journal',     href: '/journal' },
  { label: 'Eventos',     href: '/eventos' },
  { label: 'Membresías',  href: '/membresias' },
]

const categoryLinks = [
  { label: 'Restaurantes', href: '/directorio?categoria=restaurante' },
  { label: 'Hoteles',      href: '/directorio?categoria=hotel' },
  { label: 'Galerías',     href: '/directorio?categoria=galeria' },
  { label: 'Lifestyle',    href: '/directorio?categoria=lifestyle' },
  { label: 'Cultura',      href: '/directorio?categoria=cultura' },
  { label: 'Inversión',    href: '/directorio?categoria=inversion' },
  { label: 'Wellness',     href: '/directorio?categoria=wellness' },
  { label: 'Experiencias', href: '/directorio?categoria=experiencias' },
]

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [catOpen,   setCatOpen]   = useState(false)
  const [city,      setCity]      = useState<'SMA' | 'León'>('SMA')
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setCatOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-600',
          scrolled
            ? 'bg-brago-black/96 backdrop-blur-xl border-b border-brago-cream/6'
            : 'bg-transparent',
        )}
      >
        {/* Top bar — city signal */}
        <div className={cn(
          'border-b border-brago-cream/6 transition-all duration-500 overflow-hidden',
          scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100',
        )}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-full">
            <span className="text-2xs tracking-widest-3 uppercase text-brago-cream-3 font-light">
              San Miguel de Allende · León · Bajío
            </span>
            <span className="text-2xs tracking-widest-2 uppercase text-brago-gold/60 font-light">
              Selección editorial curada
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group flex items-center gap-3">
              <span className="font-serif text-xl lg:text-2xl tracking-widest-2 text-brago-cream group-hover:text-brago-gold transition-colors duration-400">
                BRAGO
              </span>
              <span className="hidden sm:block h-3 w-px bg-brago-cream/20" />
              <span className="hidden sm:block text-2xs tracking-widest uppercase text-brago-cream-3/60 group-hover:text-brago-gold/60 transition-colors duration-400 font-light">
                Directorio
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {/* Categorías dropdown */}
              <div className="relative" onMouseLeave={() => setCatOpen(false)}>
                <button
                  onMouseEnter={() => setCatOpen(true)}
                  className={cn(
                    'text-2xs tracking-widest uppercase font-medium transition-colors duration-300 flex items-center gap-1.5',
                    catOpen ? 'text-brago-gold' : 'text-brago-cream-2 hover:text-brago-cream',
                  )}
                >
                  Categorías
                  <motion.span animate={{ rotate: catOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    ↓
                  </motion.span>
                </button>

                <AnimatePresence>
                  {catOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-5 bg-brago-black-3 border border-brago-cream/10 min-w-[200px]"
                    >
                      <div className="p-4 grid grid-cols-2 gap-x-6 gap-y-0.5">
                        {categoryLinks.map((cat) => (
                          <Link
                            key={cat.label}
                            href={cat.href}
                            className="block text-2xs tracking-widest uppercase text-brago-cream-3 hover:text-brago-gold py-2 transition-colors duration-200 whitespace-nowrap"
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-brago-cream/8 px-4 py-3">
                        <Link href="/directorio" className="text-2xs tracking-widest uppercase text-brago-gold/70 hover:text-brago-gold transition-colors duration-200">
                          Ver todo el directorio →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-2xs tracking-widest uppercase font-medium transition-colors duration-300',
                    pathname === link.href || (link.href === '/#mapa' && pathname === '/')
                      ? 'text-brago-gold'
                      : 'text-brago-cream-2 hover:text-brago-cream',
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* City toggle */}
              <div className="flex items-center gap-0 border border-brago-cream/12 overflow-hidden">
                {(['SMA', 'León'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCity(c)}
                    className={cn(
                      'px-3 py-1.5 text-2xs tracking-widest uppercase transition-all duration-300',
                      city === c
                        ? 'bg-brago-gold text-brago-black font-medium'
                        : 'text-brago-cream-3 hover:text-brago-cream',
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link
                href="/directorio"
                className="hidden lg:inline-flex text-2xs tracking-widest uppercase font-medium px-4 py-2 text-brago-cream-2 hover:text-brago-cream transition-colors duration-300"
              >
                Explorar
              </Link>
              <Link
                href="/membresias"
                className="hidden lg:inline-flex text-2xs tracking-widest uppercase font-medium px-5 py-2.5 border border-brago-gold/50 text-brago-gold hover:bg-brago-gold hover:text-brago-black transition-all duration-400"
              >
                Aplicar para entrar
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-1"
                aria-label="Toggle menu"
              >
                <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block w-5 h-px bg-brago-cream" />
                <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-px bg-brago-cream" />
                <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block w-5 h-px bg-brago-cream" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-brago-black flex flex-col justify-center px-8 lg:hidden"
          >
            <div className="flex gap-4 mb-12">
              {(['SMA', 'León'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCity(c)}
                  className={cn(
                    'text-xs tracking-widest uppercase transition-colors',
                    city === c ? 'text-brago-gold' : 'text-brago-cream-3',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <nav className="flex flex-col gap-5">
              {[
                { label: 'Directorio',  href: '/directorio' },
                { label: 'Real Estate', href: '/real-estate' },
                { label: 'Journal',     href: '/journal' },
                { label: 'Eventos',     href: '/eventos' },
                { label: 'Membresías',  href: '/membresias' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="font-serif text-3xl text-brago-cream hover:text-brago-gold transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-brago-cream/10 my-3" />
              {categoryLinks.map((cat) => (
                <Link key={cat.href} href={cat.href} className="text-sm tracking-widest uppercase text-brago-cream-3 hover:text-brago-cream transition-colors">
                  {cat.label}
                </Link>
              ))}
            </nav>

            <div className="mt-14">
              <Link href="/membresias" className="inline-flex text-xs tracking-widest uppercase px-8 py-4 border border-brago-gold text-brago-gold hover:bg-brago-gold hover:text-brago-black transition-all duration-400">
                Aplicar para entrar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
