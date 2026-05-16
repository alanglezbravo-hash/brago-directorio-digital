'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function FinalCTA() {
  return (
    <section className="relative py-36 lg:py-56 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/brago-cta-final/1920/1080"
          alt="BRAGO"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brago-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brago-black via-transparent to-brago-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-10 bg-brago-gold/40" />
            <span className="w-1.5 h-1.5 bg-brago-gold rotate-45 inline-block" />
            <span className="h-px w-10 bg-brago-gold/40" />
          </div>

          <h2 className="font-serif text-4xl lg:text-6xl xl:text-7xl text-brago-cream leading-tight mb-8 text-balance">
            Las ciudades no se conquistan por volumen.
            <em className="not-italic text-brago-cream/50"> Se conquistan por criterio.</em>
          </h2>

          <p className="text-base text-brago-cream-3 font-light leading-relaxed max-w-2xl mx-auto mb-14">
            BRAGO selecciona los lugares, propiedades, marcas y experiencias que definen el nuevo Bajío. Si tu negocio pertenece a esa conversación, aplica para entrar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/membresias"
              className="px-8 py-4 bg-brago-gold text-brago-black text-2xs tracking-widest uppercase font-medium hover:bg-brago-gold-light transition-colors duration-400"
            >
              Aplicar para entrar
            </Link>
            <Link
              href="/directorio"
              className="px-8 py-4 border border-brago-cream/25 text-brago-cream text-2xs tracking-widest uppercase font-medium hover:border-brago-cream/50 transition-colors duration-400"
            >
              Explorar directorio
            </Link>
            <Link
              href="/membresias#partnership"
              className="px-8 py-4 border border-brago-gold/30 text-brago-gold text-2xs tracking-widest uppercase font-medium hover:border-brago-gold/60 transition-colors duration-400"
            >
              Solicitar partnership
            </Link>
          </div>

          {/* Tagline bottom */}
          <p className="mt-16 text-2xs tracking-widest-2 uppercase text-brago-cream/30 font-light">
            San Miguel de Allende · León · Bajío
          </p>
        </motion.div>
      </div>
    </section>
  )
}
