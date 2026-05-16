'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { businesses } from '@/data/businesses'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

type MapFilter = 'Todos' | 'Restaurante' | 'Hotel' | 'Galería' | 'Real Estate' | 'Wellness' | 'Experiencias'

// ─── Data ─────────────────────────────────────────────────────────────────────

const mapFilters: { id: MapFilter; label: string; icon: string }[] = [
  { id: 'Todos',        label: 'Todo',         icon: '◉' },
  { id: 'Restaurante',  label: 'Gastronomía',  icon: '◈' },
  { id: 'Hotel',        label: 'Hospedaje',    icon: '◇' },
  { id: 'Galería',      label: 'Arte',         icon: '○' },
  { id: 'Real Estate',  label: 'Real Estate',  icon: '▲' },
  { id: 'Wellness',     label: 'Wellness',     icon: '●' },
  { id: 'Experiencias', label: 'Experiencias', icon: '◆' },
]

// Neighborhood SVG polygon zones — 800×500 viewBox
// Geography roughly follows real SMA layout (N is up)
const zones = [
  {
    id: 'la-lejona',
    name: 'La Lejona',
    points: '30,30 170,30 172,130 33,133',
    labelX: 101, labelY: 84,
    score: 70,
    signal: 'Emergente',
    desc: 'Zona en expansión al noroeste, con proyectos residenciales de autor.',
  },
  {
    id: 'atascadero',
    name: 'Atascadero',
    points: '180,30 580,30 578,140 390,142 182,138',
    labelX: 380, labelY: 88,
    score: 81,
    signal: 'Alto',
    desc: 'Norte de la ciudad. Residencial premium, vistas panorámicas y proyectos de desarrolladoras.',
  },
  {
    id: 'centro',
    name: 'Centro',
    points: '148,142 390,142 392,322 145,328',
    labelX: 268, labelY: 235,
    score: 94,
    signal: 'Consolidado',
    desc: 'El corazón histórico. Cantera rosa, vida cultural y la mayor concentración de lugares BRAGO.',
  },
  {
    id: 'guadiana',
    name: 'Guadiana',
    points: '392,142 578,140 576,282 393,288',
    labelX: 484, labelY: 215,
    score: 86,
    signal: 'Alto',
    desc: 'Zona residencial con carácter. Gastronomía, galerías y vida de barrio con estética premium.',
  },
  {
    id: 'los-frailes',
    name: 'Los Frailes',
    points: '580,140 752,136 754,314 578,318',
    labelX: 666, labelY: 228,
    score: 79,
    signal: 'Emergente',
    desc: 'Oriente de la ciudad. Haciendas y desarrollos inmobiliarios con potencial de plusvalía.',
  },
  {
    id: 'san-antonio',
    name: 'San Antonio',
    points: '200,330 490,328 492,450 202,453',
    labelX: 346, labelY: 393,
    score: 88,
    signal: 'Alto',
    desc: 'Sur del centro. Restaurantes de autor, spas, hoteles boutique y vida local auténtica.',
  },
  {
    id: 'balcones',
    name: 'Balcones',
    points: '492,328 754,318 756,452 494,454',
    labelX: 624, labelY: 390,
    score: 77,
    signal: 'Medio',
    desc: 'Zona tranquila al sureste. Casas amplias, privadas y proyectos de diseño contemporáneo.',
  },
  {
    id: 'malanquin',
    name: 'Malanquín',
    points: '40,330 200,330 202,453 42,456',
    labelX: 121, labelY: 396,
    score: 73,
    signal: 'Emergente',
    desc: 'Al suroeste. Zona con identidad propia, artistas locales y propiedades en transformación.',
  },
]

// Business dots positioned within their neighborhood zones
const mapDots = [
  // Centro cluster
  { id: 'd01', x: 220, y: 185, cat: 'Hotel' },
  { id: 'd02', x: 275, y: 240, cat: 'Restaurante' },
  { id: 'd03', x: 310, y: 200, cat: 'Galería' },
  { id: 'd04', x: 255, y: 280, cat: 'Restaurante' },
  { id: 'd05', x: 340, y: 255, cat: 'Wellness' },
  { id: 'd06', x: 360, y: 170, cat: 'Hotel' },
  { id: 'd07', x: 190, y: 220, cat: 'Galería' },
  { id: 'd08', x: 290, y: 310, cat: 'Restaurante' },
  // Guadiana cluster
  { id: 'd09', x: 450, y: 200, cat: 'Restaurante' },
  { id: 'd10', x: 510, y: 240, cat: 'Hotel' },
  { id: 'd11', x: 535, y: 175, cat: 'Galería' },
  { id: 'd12', x: 420, y: 260, cat: 'Wellness' },
  // Atascadero cluster
  { id: 'd13', x: 370, y: 88,  cat: 'Hotel' },
  { id: 'd14', x: 460, y: 75,  cat: 'Real Estate' },
  { id: 'd15', x: 530, y: 100, cat: 'Restaurante' },
  // Los Frailes
  { id: 'd16', x: 640, y: 215, cat: 'Real Estate' },
  { id: 'd17', x: 710, y: 260, cat: 'Galería' },
  // San Antonio
  { id: 'd18', x: 320, y: 380, cat: 'Restaurante' },
  { id: 'd19', x: 420, y: 405, cat: 'Wellness' },
  { id: 'd20', x: 380, y: 440, cat: 'Hotel' },
  { id: 'd21', x: 265, y: 350, cat: 'Experiencias' },
  // Balcones
  { id: 'd22', x: 610, y: 370, cat: 'Real Estate' },
  { id: 'd23', x: 680, y: 410, cat: 'Experiencias' },
  // Malanquín
  { id: 'd24', x: 110, y: 375, cat: 'Galería' },
  { id: 'd25', x: 155, y: 420, cat: 'Restaurante' },
  // La Lejona
  { id: 'd26', x: 95,  y: 75,  cat: 'Real Estate' },
  { id: 'd27', x: 145, y: 100, cat: 'Hotel' },
]

const catColors: Record<string, string> = {
  Hotel:        '#C8A96E',
  Restaurante:  '#D9BF8A',
  Galería:      '#F0EEE8',
  Wellness:     '#A8A69F',
  'Real Estate':'#C8A96E',
  Experiencias: '#D8D6D0',
}

const signalColor: Record<string, string> = {
  Alto:        'text-brago-gold',
  Consolidado: 'text-brago-cream',
  Medio:       'text-brago-cream-2',
  Emergente:   'text-brago-cream-3',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function BragoCityMap() {
  const [activeFilter, setActiveFilter] = useState<MapFilter>('Todos')
  const [hoveredZone,  setHoveredZone]  = useState<string | null>(null)
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  const panelZone = zones.find((z) => z.id === (selectedZone ?? hoveredZone))

  // Businesses shown in the right panel
  const panelItems = businesses
    .filter((b) => b.city === 'San Miguel de Allende')
    .filter((b) => activeFilter === 'Todos' || b.category === activeFilter)
    .slice(0, 5)

  const isDotVisible = (cat: string) =>
    activeFilter === 'Todos' || cat === activeFilter

  return (
    <section id="mapa" className="py-20 lg:py-32 bg-brago-black-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-12 lg:mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-6 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">BRAGO City Map</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-brago-cream leading-tight">
              La ciudad, leída<br />
              <em className="not-italic text-brago-cream/50">desde el criterio.</em>
            </h2>
            <p className="text-sm text-brago-cream-3 font-light max-w-sm leading-relaxed">
              BRAGO no solo lista lugares. Interpreta colonias, flujos y oportunidades. El mapa privado de San Miguel de Allende.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter pills */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          {mapFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-2xs tracking-widest uppercase font-medium border transition-all duration-300',
                activeFilter === f.id
                  ? 'bg-brago-gold border-brago-gold text-brago-black'
                  : 'border-brago-cream/15 text-brago-cream-3 hover:border-brago-gold/40 hover:text-brago-gold',
              )}
            >
              <span>{f.icon}</span>
              <span className="hidden sm:inline">{f.label}</span>
            </button>
          ))}
        </div>

        {/* Map + Panel grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brago-cream/6">

          {/* ── SVG Map (2/3) ─────────────────────────────────────────────── */}
          <div className="lg:col-span-2 bg-brago-black relative overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
              <svg
                viewBox="0 0 800 500"
                className="absolute inset-0 w-full h-full"
              >
                {/* Fine grid */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 25} x2="800" y2={i * 25}
                    stroke="#F0EEE8" strokeOpacity="0.025" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 32 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="500"
                    stroke="#F0EEE8" strokeOpacity="0.025" strokeWidth="0.5" />
                ))}

                {/* Subtle vignette border */}
                <rect x="0" y="0" width="800" height="500"
                  fill="none" stroke="#C8A96E" strokeOpacity="0.08" strokeWidth="1" />

                {/* ── Neighborhood zones ── */}
                {zones.map((zone) => {
                  const isActive   = selectedZone === zone.id
                  const isHover    = hoveredZone  === zone.id
                  const isHighlighted = isActive || isHover
                  return (
                    <g
                      key={zone.id}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredZone(zone.id)}
                      onMouseLeave={() => setHoveredZone(null)}
                      onClick={() =>
                        setSelectedZone(selectedZone === zone.id ? null : zone.id)
                      }
                    >
                      <polygon
                        points={zone.points}
                        fill="#C8A96E"
                        fillOpacity={isActive ? 0.2 : isHover ? 0.12 : 0.04}
                        stroke="#C8A96E"
                        strokeOpacity={isActive ? 0.65 : isHover ? 0.4 : 0.14}
                        strokeWidth={isActive ? 1.5 : 0.75}
                        style={{ transition: 'all 0.3s ease' }}
                      />
                      {/* Zone name */}
                      <text
                        x={zone.labelX} y={zone.labelY - 5}
                        textAnchor="middle"
                        fill="#F0EEE8"
                        fillOpacity={isHighlighted ? 0.85 : 0.28}
                        fontSize="8.5"
                        fontFamily="'Playfair Display', Georgia, serif"
                        letterSpacing="2.5"
                        style={{ userSelect: 'none', transition: 'fill-opacity 0.3s ease' }}
                      >
                        {zone.name.toUpperCase()}
                      </text>
                      {/* Urban score — visible on hover/select */}
                      <text
                        x={zone.labelX} y={zone.labelY + 9}
                        textAnchor="middle"
                        fill="#C8A96E"
                        fillOpacity={isHighlighted ? 0.75 : 0}
                        fontSize="7"
                        fontFamily="'Playfair Display', Georgia, serif"
                        style={{ userSelect: 'none', transition: 'fill-opacity 0.3s ease' }}
                      >
                        {zone.score}
                      </text>
                    </g>
                  )
                })}

                {/* ── Business dots ── */}
                {mapDots.map((dot) => {
                  const visible = isDotVisible(dot.cat)
                  const color = catColors[dot.cat] ?? '#C8A96E'
                  return (
                    <g key={dot.id}>
                      {/* Outer pulse ring */}
                      <circle
                        cx={dot.x} cy={dot.y} r="5"
                        fill={color}
                        fillOpacity={visible ? 0.12 : 0}
                        style={{ transition: 'fill-opacity 0.4s ease' }}
                      />
                      {/* Inner dot */}
                      <circle
                        cx={dot.x} cy={dot.y} r="2.2"
                        fill={color}
                        fillOpacity={visible ? 0.92 : 0.08}
                        style={{ transition: 'fill-opacity 0.4s ease' }}
                      />
                    </g>
                  )
                })}

                {/* Legend */}
                <g transform="translate(22, 470)">
                  <text fill="#C8A96E" fillOpacity="0.3" fontSize="6.5"
                    fontFamily="'Inter', system-ui, sans-serif" letterSpacing="2">
                    BRAGO CITY MAP · SAN MIGUEL DE ALLENDE
                  </text>
                </g>

                {/* Compass */}
                <g transform="translate(756, 468)">
                  <text fill="#C8A96E" fillOpacity="0.28" fontSize="7"
                    fontFamily="'Inter', system-ui, sans-serif" letterSpacing="1">N</text>
                  <line x1="4" y1="-14" x2="4" y2="-4"
                    stroke="#C8A96E" strokeOpacity="0.28" strokeWidth="0.6" />
                </g>
              </svg>

              {/* Zone info overlay when selected */}
              <AnimatePresence>
                {selectedZone && panelZone && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 left-4 bg-brago-black/92 backdrop-blur-sm border border-brago-gold/20 px-5 py-4 max-w-[200px]"
                  >
                    <p className="text-2xs tracking-widest uppercase text-brago-gold/60 font-medium mb-1">Zona</p>
                    <p className="font-serif text-base text-brago-cream mb-1">{panelZone.name}</p>
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">Score </span>
                        <span className="font-serif text-sm text-brago-gold">{panelZone.score}</span>
                      </div>
                      <span className={cn(
                        'text-2xs tracking-widest uppercase font-medium',
                        signalColor[panelZone.signal],
                      )}>
                        {panelZone.signal}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Right panel (1/3) ─────────────────────────────────────────── */}
          <div className="bg-brago-black-2 flex flex-col min-h-[300px] lg:min-h-0">

            {/* Panel header */}
            <div className="border-b border-brago-cream/8 px-6 py-5 flex-shrink-0">
              <AnimatePresence mode="wait">
                {panelZone ? (
                  <motion.div
                    key={panelZone.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-2xs tracking-widest uppercase text-brago-gold/60 font-medium mb-1">
                      {panelZone.name}
                    </p>
                    <p className="text-xs text-brago-cream-3 font-light leading-relaxed">
                      {panelZone.desc}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-2xs tracking-widest uppercase text-brago-cream-3 font-medium mb-1">
                      {activeFilter === 'Todos' ? 'Selección activa' : activeFilter}
                    </p>
                    <p className="font-serif text-lg text-brago-cream">
                      {activeFilter === 'Todos' ? 'Todos los lugares' : `BRAGO ${activeFilter}`}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Business list */}
            <div className="flex-1 divide-y divide-brago-cream/6 overflow-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {panelItems.map((biz, i) => (
                    <motion.div
                      key={biz.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="group px-6 py-4 hover:bg-brago-black-3 transition-colors duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-1 h-1 bg-brago-gold/60 rounded-full flex-shrink-0" />
                        <span className="text-2xs tracking-widest uppercase text-brago-gold/55 font-medium">
                          {biz.category}
                        </span>
                      </div>
                      <p className="font-serif text-sm text-brago-cream group-hover:text-brago-gold transition-colors duration-300 leading-snug">
                        {biz.name}
                      </p>
                      <p className="text-2xs text-brago-cream/30 font-light mt-0.5">
                        {biz.neighborhood} · {biz.tier}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Panel footer */}
            <div className="border-t border-brago-cream/8 px-6 py-4 flex-shrink-0">
              <Link
                href="/directorio"
                className="text-2xs tracking-widest uppercase text-brago-gold/60 hover:text-brago-gold transition-colors duration-300 font-medium flex items-center gap-2"
              >
                Ver directorio completo <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mode selectors */}
        <AnimatedSection delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-2xs tracking-widest uppercase text-brago-cream/18 font-light">
            Explorar como:
          </span>
          {['Visitante', 'Residente', 'Inversionista', 'Miembro BRAGO'].map((mode) => (
            <button
              key={mode}
              className="text-2xs tracking-widest uppercase px-3 py-1.5 border border-brago-cream/10 text-brago-cream-3/60 hover:border-brago-gold/30 hover:text-brago-gold/70 transition-all duration-300 font-light"
            >
              {mode}
            </button>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
