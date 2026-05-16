'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function PhysicalGuide() {
  return (
    <section className="py-28 lg:py-44 bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Content */}
          <div className="flex flex-col justify-center pr-0 lg:pr-16 mb-12 lg:mb-0">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-6 bg-brago-gold/50" />
                <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Objeto editorial</span>
              </div>

              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight mb-6">
                BRAGO Guide<br />
                <em className="not-italic text-brago-cream/50">& Badge</em>
              </h2>

              <p className="text-base text-brago-cream-3 font-light leading-relaxed mb-4 max-w-md">
                Dos veces al año, BRAGO publica una guía física editorial con los negocios, propiedades y experiencias seleccionadas del Bajío. Diseñada como objeto de lujo.
              </p>
              <p className="text-base text-brago-cream-3 font-light leading-relaxed mb-10 max-w-md">
                Disponible en hoteles boutique, restaurantes de autor, galerías, inmobiliarias y espacios seleccionados. No en puntos de venta masivos.
              </p>

              {/* Badge section */}
              <div className="border border-brago-cream/10 p-7 mb-10 max-w-md">
                <p className="text-2xs tracking-widest uppercase text-brago-gold/70 font-medium mb-4">Distintivo físico BRAGO</p>
                <p className="text-sm text-brago-cream-2 font-light leading-relaxed mb-4">
                  Los negocios Founder Member reciben un distintivo físico premium para instalar en su establecimiento.
                </p>
                <p className="font-serif text-base text-brago-cream italic">
                  "No es una calcomanía. Es una señal de estatus."
                </p>
              </div>

              <div className="space-y-3">
                {[
                  'Diseño editorial de lujo — impresión premium',
                  'Distribución curada en puntos selectos del Bajío',
                  'Publicación semestral — dos ediciones al año',
                  'Integración con contenido digital de BRAGO',
                  'Co-branded con hoteles, galerías y desarrolladoras',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-brago-gold/60 mt-2 flex-shrink-0" />
                    <span className="text-sm text-brago-cream-3 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full min-h-[500px] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/brago-guide-physical/700/900"
                alt="BRAGO Guide"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brago-black/40 to-transparent" />

              {/* Edition badge */}
              <div className="absolute bottom-8 right-8 border border-brago-gold/40 bg-brago-black/80 backdrop-blur-sm px-5 py-4 text-right">
                <p className="text-2xs tracking-widest uppercase text-brago-gold/70 font-medium">Edición</p>
                <p className="font-serif text-2xl text-brago-cream">I · 2025</p>
                <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mt-1">Bajío</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
