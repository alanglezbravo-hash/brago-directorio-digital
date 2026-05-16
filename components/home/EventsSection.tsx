'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { events } from '@/data/events'
import { cn } from '@/lib/utils'

type AccessFilter = 'Todos' | 'Público' | 'Miembros' | 'Privado' | 'Por invitación'

const accessStyles: Record<string, string> = {
  'Público':         'border-brago-cream/20 text-brago-cream-2',
  'Miembros':        'border-brago-gold/40 text-brago-gold',
  'Privado':         'border-brago-cream/30 text-brago-cream-3',
  'Por invitación':  'border-brago-gold bg-brago-gold/10 text-brago-gold',
}

export function EventsSection() {
  const [filter, setFilter] = useState<AccessFilter>('Todos')

  const filtered = filter === 'Todos'
    ? events
    : events.filter((e) => e.accessLevel === filter)

  const filters: AccessFilter[] = ['Todos', 'Público', 'Miembros', 'Privado', 'Por invitación']

  return (
    <section className="py-28 lg:py-44 bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-6 bg-brago-gold/50" />
              <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Agenda</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight">
              Eventos, Música<br />
              <em className="not-italic text-brago-cream/50">& Vida Social</em>
            </h2>
          </div>
          <p className="text-sm text-brago-cream-3 font-light max-w-xs hidden lg:block">
            La agenda cultural y social curada del Bajío. Arte, gastronomía, música y activaciones privadas.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection className="mb-10">
          <div className="flex items-center gap-0 border border-brago-cream/10 overflow-hidden w-fit">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'px-4 py-2.5 text-2xs tracking-widest uppercase transition-all duration-300 font-medium border-r border-brago-cream/10 last:border-0',
                  filter === f
                    ? 'bg-brago-gold text-brago-black'
                    : 'text-brago-cream-3 hover:text-brago-cream',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Events grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brago-cream/6"
          >
            {filtered.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                className="group bg-brago-black hover:bg-brago-black-3 transition-colors duration-400"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brago-black/30 group-hover:bg-brago-black/15 transition-colors duration-400" />

                  {/* Access level */}
                  <div className="absolute top-4 right-4">
                    <span className={cn(
                      'text-2xs tracking-widest uppercase px-2 py-0.5 border font-medium backdrop-blur-sm',
                      accessStyles[event.accessLevel] ?? 'text-brago-cream-3 border-brago-cream/15',
                    )}>
                      {event.accessLevel}
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xs tracking-widest uppercase text-brago-gold/60 font-medium">{event.type}</span>
                    <span className="text-brago-cream/15">·</span>
                    <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{event.city === 'San Miguel de Allende' ? 'SMA' : event.city}</span>
                  </div>

                  <h3 className="font-serif text-xl text-brago-cream mb-2 group-hover:text-brago-gold transition-colors duration-300 leading-snug">
                    {event.name}
                  </h3>
                  <p className="text-xs text-brago-cream/50 font-light leading-relaxed mb-5 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-brago-cream/8">
                    <div>
                      <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">{event.date}</p>
                      <p className="text-2xs tracking-widest uppercase text-brago-cream-3/60 font-light mt-0.5">{event.time} · {event.venue}</p>
                    </div>
                    <button className="text-2xs tracking-widest uppercase font-medium px-4 py-2 border border-brago-gold/40 text-brago-gold hover:bg-brago-gold hover:text-brago-black transition-all duration-400">
                      Solicitar acceso
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
