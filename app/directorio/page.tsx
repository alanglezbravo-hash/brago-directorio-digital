import { Suspense } from 'react'
import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { DirectoryGrid } from '@/components/directory/DirectoryGrid'

export const metadata: Metadata = {
  title: 'Directorio',
  description: 'Explora los mejores restaurantes, hoteles, galerías, spas y boutiques en San Miguel de Allende y León.',
}

export default function DirectorioPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="pt-24 lg:pt-32 pb-10 lg:pb-14 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-5">
          <span className="h-px w-6 bg-brago-gold/50" />
          <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">
            BRAGO
          </span>
        </div>
        <h1 className="font-serif text-5xl lg:text-7xl text-brago-cream leading-none">
          Directorio
        </h1>
        <p className="mt-4 text-sm text-brago-cream-3 font-light max-w-md">
          Lugares curados que representan gusto, calidad y estilo de vida en el Bajío.
        </p>
      </div>

      <Suspense>
        <DirectoryGrid />
      </Suspense>

      <Footer />
    </>
  )
}
