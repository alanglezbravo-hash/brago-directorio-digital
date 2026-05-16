// ─────────────────────────────────────────────────────────────────────────────
// BRAGO · Homepage
// Estructura editorial por capítulos — San Miguel de Allende
// ─────────────────────────────────────────────────────────────────────────────

import { Navbar }            from '@/components/layout/Navbar'
import { Footer }            from '@/components/layout/Footer'

// Capítulo 00 — Portada
import { Hero }              from '@/components/home/Hero'

// Capítulo 01 — Intención / Descubrir
import { IntentSelector }    from '@/components/home/IntentSelector'

// Capítulo 02 — Qué es BRAGO
import { WhatIsBrago }       from '@/components/home/WhatIsBrago'

// Capítulo 03 — Mapa de ciudad
import { BragoCityMap }      from '@/components/home/BragoCityMap'

// Capítulo 04 — Selección editorial
import { FeaturedGrid }      from '@/components/home/FeaturedGrid'

// Capítulo 05 — Real Estate Intelligence
import { RealEstateSection } from '@/components/home/RealEstateSection'
import { UrbanScorePanel }   from '@/components/home/UrbanScorePanel'

// Capítulo 06 — Rutas editoriales
import { BragoRoutes }       from '@/components/home/BragoRoutes'

// Capítulo 07 — Journal
import { JournalSection }    from '@/components/home/JournalSection'

// Capítulo 08 — Eventos
import { EventsSection }     from '@/components/home/EventsSection'

// Capítulo 09 — Para negocios (transición)
import { MembershipEntry }   from '@/components/home/MembershipEntry'

// Capítulo 10 — Membresías
import { MembershipPlans }   from '@/components/home/MembershipPlans'

// Capítulo 11 — Hélices
import { PoweredByHelices }  from '@/components/home/PoweredByHelices'

// Capítulo 12 — Guía & Badge
import { PhysicalGuide }     from '@/components/home/PhysicalGuide'

// Capítulo 13 — Cierre
import { FinalCTA }          from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* 00 · Portada */}
      <Hero />

      {/* 01 · Descubrir */}
      <IntentSelector />

      {/* 02 · Identidad */}
      <WhatIsBrago />

      {/* 03 · Mapa de ciudad */}
      <BragoCityMap />

      {/* 04 · Selección editorial */}
      <FeaturedGrid />

      {/* 05 · Real Estate + Urban Score */}
      <RealEstateSection />
      <UrbanScorePanel />

      {/* 06 · Rutas editoriales */}
      <BragoRoutes />

      {/* 07 · Journal */}
      <JournalSection />

      {/* 08 · Eventos */}
      <EventsSection />

      {/* 09 · Para negocios */}
      <MembershipEntry />

      {/* 10 · Membresías */}
      <MembershipPlans />

      {/* 11 · Hélices */}
      <PoweredByHelices />

      {/* 12 · Guía & Badge */}
      <PhysicalGuide />

      {/* 13 · Cierre */}
      <FinalCTA />

      <Footer />
    </>
  )
}
