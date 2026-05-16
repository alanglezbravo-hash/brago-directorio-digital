'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { BusinessCard } from './BusinessCard'
import { FilterBar } from './FilterBar'
import { businesses } from '@/data/businesses'
import { FilterState, Category, City, MembershipTier } from '@/types'

export function DirectoryGrid() {
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState<FilterState>({
    city:     (searchParams.get('ciudad') as City) || 'Todas',
    category: (searchParams.get('categoria') as Category) || 'Todas',
    tier:     'Todas',
    search:   searchParams.get('q') || '',
  })
  const [view, setView] = useState<'grid' | 'list'>('grid')

  // Sync URL params on mount
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      city:     (searchParams.get('ciudad') as City)     || 'Todas',
      category: (searchParams.get('categoria') as Category) || 'Todas',
      search:   searchParams.get('q') || '',
    }))
  }, [searchParams])

  const filtered = useMemo(() => {
    return businesses.filter((b) => {
      const matchCity     = filters.city === 'Todas'     || b.city === filters.city
      const matchCategory = filters.category === 'Todas' || b.category === filters.category
      const matchTier     = filters.tier === 'Todas'     || b.tier === filters.tier
      const q             = filters.search.toLowerCase()
      const matchSearch   = !q ||
        b.name.toLowerCase().includes(q) ||
        b.tagline.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q))

      return matchCity && matchCategory && matchTier && matchSearch
    })
  }, [filters])

  return (
    <>
      <FilterBar
        filters={filters}
        onChange={setFilters}
        total={filtered.length}
        view={view}
        onViewChange={setView}
      />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-20 min-h-[60vh]">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <span className="w-2 h-2 bg-brago-gold/40 rotate-45 mb-8 inline-block" />
              <p className="font-serif text-2xl text-brago-cream/40 mb-3">Sin resultados</p>
              <p className="text-sm text-brago-cream/25 font-light">
                Prueba con otros filtros o busca por nombre.
              </p>
            </motion.div>
          ) : view === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
            >
              {filtered.map((business, i) => (
                <BusinessCard key={business.id} business={business} index={i} view="grid" />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="divide-y divide-transparent"
            >
              {filtered.map((business, i) => (
                <BusinessCard key={business.id} business={business} index={i} view="list" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}
