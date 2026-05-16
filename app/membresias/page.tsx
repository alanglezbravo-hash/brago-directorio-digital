import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PricingSection } from '@/components/membership/PricingSection'
import { ApplicationForm } from '@/components/membership/ApplicationForm'

export const metadata: Metadata = {
  title: 'Membresías',
  description: 'Forma parte del directorio más selecto del Bajío. Dos niveles de membresía para negocios premium en San Miguel de Allende y León.',
}

export default function MembresiasPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-8 overflow-hidden">
        {/* Background grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 79px, #F0EEE8 79px, #F0EEE8 80px),
              repeating-linear-gradient(90deg, transparent, transparent 79px, #F0EEE8 79px, #F0EEE8 80px)
            `,
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-8 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">
              Únete a BRAGO
            </span>
            <span className="h-px w-8 bg-brago-gold/50" />
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-brago-cream leading-none mb-6">
            Membresías
          </h1>
          <p className="text-sm text-brago-cream-3 font-light max-w-lg mx-auto leading-relaxed">
            BRAGO no es un directorio de listings. Es una selección editorial de los lugares que definen la calidad de vida en el Bajío. Ser parte es un privilegio.
          </p>
        </div>
      </div>

      <PricingSection />
      <ApplicationForm />
      <Footer />
    </>
  )
}
