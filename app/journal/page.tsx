import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { articles } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'BRAGO Journal — Inteligencia editorial sobre real estate, cultura, inversión y estilo de vida en el Bajío.',
}

export default function JournalPage() {
  const featured = articles.filter((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-6 bg-brago-gold/50" />
          <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Medio editorial</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h1 className="font-serif text-5xl lg:text-7xl text-brago-cream leading-none">
            BRAGO Journal
          </h1>
          <p className="text-sm text-brago-cream-3 font-light max-w-sm leading-relaxed">
            Inteligencia de ciudad sobre real estate, cultura, inversión, hospitalidad y estilo de vida en el Bajío.
          </p>
        </div>
        <div className="h-px bg-brago-cream/8 mt-12" />
      </div>

      {/* Featured */}
      <div className="px-6 lg:px-8 max-w-7xl mx-auto pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brago-cream/6">
          {featured.map((article) => (
            <Link key={article.id} href={`/journal/${article.slug}`} className="group relative block overflow-hidden bg-brago-black min-h-[420px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-1200 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brago-black via-brago-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xs tracking-widest uppercase text-brago-gold font-medium">{article.category}</span>
                  <span className="text-brago-cream/20">·</span>
                  <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{article.city}</span>
                  <span className="text-brago-cream/20">·</span>
                  <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{article.readTime} min</span>
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl text-brago-cream mb-3 group-hover:text-brago-gold transition-colors duration-300 leading-tight">
                  {article.title}
                </h2>
                <p className="text-sm text-brago-cream/55 font-light leading-relaxed hidden lg:block">
                  {article.excerpt}
                </p>
                <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light mt-4">{article.author} · {article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Rest */}
      <div className="px-6 lg:px-8 max-w-7xl mx-auto pb-28">
        <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-medium mb-6">Más artículos</p>
        <div className="flex flex-col divide-y divide-brago-cream/6">
          {rest.map((article) => (
            <Link key={article.id} href={`/journal/${article.slug}`} className="group flex flex-col lg:flex-row lg:items-center gap-6 py-8 hover:bg-brago-black-2/30 -mx-4 px-4 transition-colors duration-300">
              <div className="relative w-full lg:w-48 aspect-[16/9] lg:aspect-[3/2] overflow-hidden flex-shrink-0">
                <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="200px" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xs tracking-widest uppercase text-brago-gold/60 font-medium">{article.category}</span>
                  <span className="text-brago-cream/15">·</span>
                  <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{article.city}</span>
                </div>
                <h3 className="font-serif text-xl text-brago-cream mb-2 group-hover:text-brago-gold transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-brago-cream-3 font-light leading-relaxed line-clamp-2">{article.excerpt}</p>
                <p className="text-2xs tracking-widest uppercase text-brago-cream-3/60 font-light mt-3">{article.date} · {article.readTime} min lectura</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
