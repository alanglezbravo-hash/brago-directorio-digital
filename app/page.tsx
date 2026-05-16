import { Navbar }             from '@/components/layout/Navbar'
import { Footer }             from '@/components/layout/Footer'
import { Hero }               from '@/components/home/Hero'
import { WhatIsBrago }        from '@/components/home/WhatIsBrago'
import { CategoriesSection }  from '@/components/home/CategoriesSection'
import { FeaturedGrid }       from '@/components/home/FeaturedGrid'
import { RealEstateSection }  from '@/components/home/RealEstateSection'
import { UrbanScorePanel }    from '@/components/home/UrbanScorePanel'
import { JournalSection }     from '@/components/home/JournalSection'
import { EventsSection }      from '@/components/home/EventsSection'
import { MembershipPlans }    from '@/components/home/MembershipPlans'
import { HowItWorks }         from '@/components/home/HowItWorks'
import { PoweredByHelices }   from '@/components/home/PoweredByHelices'
import { PhysicalGuide }      from '@/components/home/PhysicalGuide'
import { EditorialSection }   from '@/components/home/EditorialSection'
import { FinalCTA }           from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsBrago />
      <CategoriesSection />
      <FeaturedGrid />
      <RealEstateSection />
      <UrbanScorePanel />
      <JournalSection />
      <EventsSection />
      <MembershipPlans />
      <HowItWorks />
      <PoweredByHelices />
      <PhysicalGuide />
      <EditorialSection />
      <FinalCTA />
      <Footer />
    </>
  )
}
