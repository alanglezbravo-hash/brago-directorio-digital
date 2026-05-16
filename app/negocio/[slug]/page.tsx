import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BusinessHero } from '@/components/business/BusinessHero'
import { Gallery } from '@/components/business/Gallery'
import { BusinessDetail } from '@/components/business/BusinessDetail'
import { RelatedBusinesses } from '@/components/business/RelatedBusinesses'
import { getBusinessBySlug, getRelatedBusinesses, businesses } from '@/data/businesses'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const business = getBusinessBySlug(params.slug)
  if (!business) return {}
  return {
    title: business.name,
    description: business.tagline,
  }
}

export default function NegocioPage({ params }: Props) {
  const business = getBusinessBySlug(params.slug)
  if (!business) notFound()

  const related = getRelatedBusinesses(business, 3)

  return (
    <>
      <Navbar />
      <BusinessHero business={business} />
      <BusinessDetail business={business} />
      <Gallery images={business.gallery} name={business.name} />
      <RelatedBusinesses businesses={related} />
      <Footer />
    </>
  )
}
