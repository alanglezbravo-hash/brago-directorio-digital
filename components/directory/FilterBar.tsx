'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Category, City, MembershipTier, FilterState } from '@/types'

const cities:      Array<City | 'Todas'>           = ['Todas', 'San Miguel de Allende', 'León']
const categories:  Array<Category | 'Todas'>       = ['Todas', 'Restaurante', 'Hotel', 'Galería', 'Spa', 'Boutique', 'Café', 'Club', 'Servicios']
const tiers:       Array<MembershipTier | 'Todas'> = ['Todas', 'Founder', 'Diamante', 'Estrella']

interface FilterBarProps {
  filters:    FilterState
  onChange:   (filters: FilterState) => void
  total:      number
  view:       'grid' | 'list'
  onViewChange: (v: 'grid' | 'list') => void
}

export function FilterBar({ filters, onChange, total, view, onViewChange }: FilterBarProps) {
  const set = (key: keyof FilterState, value: string) =>
    onChange({ ...filters, [key]: value })

  return (
    <div className="sticky top-16 lg:top-20 z-30 bg-brago-black/95 backdrop-blur-md border-b border-brago-cream/8 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">

          {/* Filters row */}
          <div className="flex flex-wrap items-center gap-3 lg:gap-6">

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={filters.search}
                onChange={(e) => set('search', e.target.value)}
                placeholder="Buscar…"
                className="bg-brago-black-3 border border-brago-cream/10 text-brago-cream placeholder:text-brago-cream/25 px-4 py-2 text-xs font-light focus:outline-none focus:border-brago-gold/40 transition-colors duration-300 w-40 lg:w-48"
              />
            </div>

            <div className="h-4 w-px bg-brago-cream/10 hidden lg:block" />

            {/* City filter */}
            <FilterGroup
              label="Ciudad"
              options={cities}
              value={filters.city}
              onChange={(v) => set('city', v)}
            />

            <div className="h-4 w-px bg-brago-cream/10 hidden lg:block" />

            {/* Category filter */}
            <FilterGroup
              label="Categoría"
              options={categories}
              value={filters.category}
              onChange={(v) => set('category', v)}
              scrollable
            />

            <div className="h-4 w-px bg-brago-cream/10 hidden lg:block" />

            {/* Tier filter */}
            <FilterGroup
              label="Nivel"
              options={tiers}
              value={filters.tier}
              onChange={(v) => set('tier', v)}
            />
          </div>

          {/* Right: count + view toggle */}
          <div className="flex items-center gap-4 self-end lg:self-auto">
            <span className="text-2xs tracking-widest uppercase text-brago-cream/30 font-medium">
              {total} lugares
            </span>
            <div className="flex gap-1">
              {(['grid', 'list'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => onViewChange(v)}
                  className={cn(
                    'p-2 transition-colors duration-300',
                    view === v ? 'text-brago-gold' : 'text-brago-cream/30 hover:text-brago-cream/60'
                  )}
                  aria-label={v === 'grid' ? 'Vista cuadrícula' : 'Vista lista'}
                >
                  {v === 'grid' ? <GridIcon /> : <ListIcon />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
  scrollable = false,
}: {
  label:      string
  options:    T[]
  value:      T
  onChange:   (v: T) => void
  scrollable?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2', scrollable && 'overflow-x-auto max-w-[280px] lg:max-w-none pb-1 lg:pb-0')}>
      <span className="text-2xs tracking-widest uppercase text-brago-cream/30 font-medium flex-shrink-0 hidden lg:block">
        {label}
      </span>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              'relative text-2xs tracking-widest uppercase px-3 py-1.5 transition-all duration-300 font-medium flex-shrink-0',
              value === opt
                ? 'text-brago-black bg-brago-gold'
                : 'text-brago-cream/40 hover:text-brago-cream border border-transparent hover:border-brago-cream/10'
            )}
          >
            {opt === 'Todas' ? 'Todas' : opt}
          </button>
        ))}
      </div>
    </div>
  )
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="0" y="0" width="6" height="6" />
      <rect x="8" y="0" width="6" height="6" />
      <rect x="0" y="8" width="6" height="6" />
      <rect x="8" y="8" width="6" height="6" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="0" y1="3" x2="14" y2="3" />
      <line x1="0" y1="7" x2="14" y2="7" />
      <line x1="0" y1="11" x2="14" y2="11" />
    </svg>
  )
}
