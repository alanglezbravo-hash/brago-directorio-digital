'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function EditorialSection() {
  return (
    <>
      <ManifestoSection />
      <MembershipTeaser />
      <CitiesSection />
    </>
  )
}

function ManifestoSection() {
  return (
    <section className="py-24 lg:py-36 bg-brago-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-10 bg-brago-gold/40" />
            <span className="w-1.5 h-1.5 bg-brago-gold rotate-45 inline-block" />
            <span className="h-px w-10 bg-brago-gold/40" />
          </div>
          <p className="font-serif text-2xl lg:text-4xl text-brago-cream leading-relaxed lg:leading-loose font-light italic max-w-3xl mx-auto text-balance">
            "BRAGO no lista negocios.<br />
            Los selecciona."
          </p>
          <p className="mt-10 text-sm text-brago-cream-3 leading-relaxed max-w-xl mx-auto font-light">
            La guía privada para entender dónde comer, invertir, vivir y pertenecer. Real estate, cultura, hospitalidad e inversión bajo una misma capa de inteligencia urbana.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

function MembershipTeaser() {
  return (
    <section className="bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] lg:min-h-[600px]">

          <div className="relative overflow-hidden min-h-[320px] lg:min-h-0">
            <Image
              src="https://picsum.photos/seed/brago-membership/1000/700"
              alt="BRAGO Membresía"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-brago-black/40" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-brago-black-3 flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-brago-gold/50" />
              <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">
                Membresía BRAGO
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-brago-cream leading-tight mb-6">
              Forma parte del directorio más selecto del Bajío
            </h2>
            <p className="text-sm text-brago-cream-3 leading-relaxed mb-10 font-light max-w-sm">
              Tres niveles de membresía. Presencia editorial, reputación digital, producción visual y un distintivo físico BRAGO. Curado. Exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/membresias">
                <Button variant="gold" size="md">Ver membresías</Button>
              </Link>
              <Link href="/directorio">
                <Button variant="outline" size="md">Explorar directorio</Button>
              </Link>
            </div>

            <div className="mt-12 flex gap-8">
              {[
                { tier: 'Estrella',  price: '$2,900' },
                { tier: 'Diamante',  price: '$7,900' },
                { tier: 'Founder',   price: 'A la medida' },
              ].map((t) => (
                <div key={t.tier} className="flex items-center gap-2.5">
                  <span className={`w-1.5 h-1.5 rotate-45 inline-block ${t.tier === 'Diamante' ? 'bg-brago-gold' : t.tier === 'Founder' ? 'bg-brago-gold/50' : 'border border-brago-cream-3'}`} />
                  <div>
                    <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-medium">{t.tier}</p>
                    <p className="text-xs text-brago-cream font-light">{t.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CitiesSection() {
  const cities = [
    {
      name: 'San Miguel de Allende',
      abbr: 'SMA',
      count: 82,
      image: 'https://picsum.photos/seed/brago-sma/900/600',
      description: 'Patrimonio UNESCO. La ciudad cultural más premiada de México. Real estate internacional y escena gastronómica de primer nivel.',
      signal: 'Real estate · Cultura · Hospitalidad · Inversión',
    },
    {
      name: 'León, Guanajuato',
      abbr: 'León',
      count: 97,
      image: 'https://picsum.photos/seed/brago-leon/900/600',
      description: 'Capital mundial del calzado. Motor industrial y creativo del Bajío. Familias empresariales y nueva hospitalidad de autor.',
      signal: 'Empresarial · Gastronomía · Industria · Diseño',
    },
  ]

  return (
    <section className="py-24 lg:py-36 bg-brago-black-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-14 lg:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-6 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Ciudades</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-serif text-4xl lg:text-5xl text-brago-cream">El Bajío es el primer mapa.<br /><span className="text-brago-cream/50">No el último.</span></h2>
            <p className="text-sm text-brago-cream-3 font-light max-w-xs lg:text-right">
              Próximamente: Querétaro, Guadalajara, Ciudad de México, Los Cabos y Mérida.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brago-cream/6">
          {cities.map((city, i) => (
            <motion.div
              key={city.abbr}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={`/directorio?ciudad=${city.name}`}
                className="group relative block overflow-hidden aspect-[16/10]"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-1200 ease-brago-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brago-black via-brago-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <p className="text-2xs tracking-widest-2 uppercase text-brago-gold mb-2 font-medium">
                    {city.count} lugares curados
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-brago-cream mb-3 group-hover:text-brago-gold transition-colors duration-300">
                    {city.name}
                  </h3>
                  <p className="text-sm text-brago-cream/50 font-light max-w-sm hidden lg:block mb-3">
                    {city.description}
                  </p>
                  <p className="text-2xs tracking-widest uppercase text-brago-gold/50 font-medium hidden lg:block">
                    {city.signal}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-brago-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
