import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { EventsSection } from '@/components/home/EventsSection'

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Agenda cultural y social curada del Bajío — Arte, gastronomía, música y experiencias privadas en San Miguel de Allende y León.',
}

export default function EventosPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-6 bg-brago-gold/50" />
          <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Agenda</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h1 className="font-serif text-5xl lg:text-7xl text-brago-cream leading-none">
            Eventos<br /><span className="text-brago-cream/50 italic">& Vida Social</span>
          </h1>
          <p className="text-sm text-brago-cream-3 font-light max-w-sm leading-relaxed">
            La agenda cultural y social curada del Bajío. Arte, gastronomía, música, open houses y experiencias privadas.
          </p>
        </div>

        {/* Access legend */}
        <div className="mt-10 flex flex-wrap gap-5">
          {[
            { label: 'Público',        desc: 'Entrada libre' },
            { label: 'Miembros',       desc: 'Solo miembros BRAGO' },
            { label: 'Privado',        desc: 'Acceso restringido' },
            { label: 'Por invitación', desc: 'Solicitar acceso' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brago-gold/50 rotate-45 inline-block" />
              <span className="text-2xs tracking-widest uppercase text-brago-cream-2 font-medium">{item.label}</span>
              <span className="text-2xs text-brago-cream-3 font-light">— {item.desc}</span>
            </div>
          ))}
        </div>
        <div className="h-px bg-brago-cream/8 mt-10" />
      </div>

      <EventsSection />

      {/* Org event CTA */}
      <div className="py-20 lg:py-28 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border border-brago-cream/10 p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-2xs tracking-widest uppercase text-brago-gold/70 font-medium mb-3">Activaciones BRAGO</p>
            <h2 className="font-serif text-2xl lg:text-3xl text-brago-cream mb-3">
              ¿Tu negocio quiere organizar un evento dentro del ecosistema BRAGO?
            </h2>
            <p className="text-sm text-brago-cream-3 font-light max-w-md leading-relaxed">
              Los miembros Diamante y Founder pueden crear activaciones, open houses, cenas privadas y experiencias dentro de la plataforma.
            </p>
          </div>
          <a href="/membresias" className="flex-shrink-0 inline-flex px-7 py-3.5 border border-brago-gold/50 text-brago-gold text-2xs tracking-widest uppercase font-medium hover:bg-brago-gold hover:text-brago-black transition-all duration-400">
            Solicitar activación
          </a>
        </div>
      </div>

      <Footer />
    </>
  )
}
