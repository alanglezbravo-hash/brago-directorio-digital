'use client'

import { cn } from '@/lib/utils'
import { MembershipTier } from '@/types'

interface TierBadgeProps {
  tier: MembershipTier
  className?: string
}

export function TierBadge({ tier, className }: TierBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-2xs font-medium tracking-widest-2 uppercase',
        tier === 'Founder'
          ? 'bg-brago-gold/15 text-brago-gold border border-brago-gold/60'
          : tier === 'Diamante'
          ? 'bg-brago-gold/10 text-brago-gold border border-brago-gold/30'
          : 'bg-brago-cream/5 text-brago-cream-2 border border-brago-cream/10',
        className
      )}
    >
      {tier === 'Founder' ? (
        <span className="text-xs text-brago-gold">▲</span>
      ) : tier === 'Diamante' ? (
        <span className="w-1.5 h-1.5 bg-brago-gold rotate-45 inline-block" />
      ) : (
        <span className="w-1.5 h-1.5 border border-brago-cream-2 rotate-45 inline-block" />
      )}
      {tier === 'Founder' ? 'Founder Member' : tier}
    </span>
  )
}

interface CategoryBadgeProps {
  category: string
  className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-2 py-0.5 text-2xs tracking-widest uppercase font-medium text-brago-cream-3',
        className
      )}
    >
      {category}
    </span>
  )
}
