'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { articles } from '@/data/articles'

export function JournalSection() {
  const featured = articles.find((a) => a.featured) ?? articles[0]
  const rest = articles.filter((a) => a.id !== featured.id).slice(0, 4)

  return (
    <section className="py-28 lg:py-44 bg-brago-black-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-6 bg-brago-azul/60" />
              <span className="text-2xs tracking-widest-3 uppercase text-brago-azul/80 font-medium">Medio editorial</span>
              <span className="w-1 h-1 bg-brago-rosa rotate-45 inline-block" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight mb-2">
              BRAGO Journal
            </h2>
            <p className="text-xs tracking-widest uppercase text-brago-cream/30 font-medium">
              <span className="text-brago-azul">San Miguel Issue No. 01</span>
              <span className="text-brago-cream/20 mx-2">·</span>
              <span>{new Date().getFullYear()}</span>
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="text-sm text-brago-cream-3 font-light max-w-xs leading-relaxed text-left lg:text-right">
              Cultura, real estate, gastronomía e inversión leídos desde el criterio editorial.
            </p>
            <Link
              href="/journal"
              className="text-2xs tracking-widest uppercase font-medium text-brago-gold/70 hover:text-brago-gold transition-colors duration-300 flex items-center gap-2"
            >
              Leer todo el Journal <span>→</span>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brago-cream/6">

          {/* Featured article — large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-2"
          >
            <Link href={`/journal/${featured.slug}`} className="group relative block overflow-hidden bg-brago-black h-full">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[400px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-1200 ease-brago-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brago-black via-brago-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xs tracking-widest uppercase text-brago-gold font-medium">{featured.category}</span>
                    <span className="text-brago-cream/20">·</span>
                    <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{featured.city}</span>
                    <span className="text-brago-cream/20">·</span>
                    <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{featured.readTime} min</span>
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl text-brago-cream mb-4 group-hover:text-brago-gold transition-colors duration-300 leading-tight max-w-xl">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-brago-cream/60 font-light leading-relaxed max-w-lg hidden lg:block">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{featured.author}</span>
                    <span className="text-brago-cream/20">·</span>
                    <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{featured.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side articles */}
          <div className="flex flex-col divide-y divide-brago-cream/6">
            {rest.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link href={`/journal/${article.slug}`} className="group flex flex-col bg-brago-black-2 hover:bg-brago-black-3 transition-colors duration-400 block">
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-brago-black/40 group-hover:bg-brago-black/20 transition-colors duration-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xs tracking-widest uppercase text-brago-gold/60 font-medium">{article.category}</span>
                      <span className="text-brago-cream/15">·</span>
                      <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{article.readTime} min</span>
                    </div>
                    <h4 className="font-serif text-base text-brago-cream mb-2 group-hover:text-brago-gold transition-colors duration-300 leading-snug line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-brago-cream/40 font-light">{article.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
