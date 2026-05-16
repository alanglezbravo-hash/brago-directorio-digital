'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { businesses } from '@/data/businesses'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

type MapFilter = 'Todos' | 'Restaurante' | 'Hotel' | 'Galería' | 'Real Estate' | 'Wellness' | 'Experiencias'
type MapMode   = 'visitar' | 'residir' | 'invertir' | 'pertenecer'

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

// Each mode shifts the visual palette and what the map emphasizes
const mapModes: {
  id: MapMode
  label: string
  desc: string
  accent: string       // primary accent for active zones / highlights
  dotColor: string     // dot tint
  zoneFill: string     // base zone fill
  zoneStroke: string   // base zone stroke
}[] = [
  {
    id: 'visitar',
    label: 'Visitar',
    desc: 'Para descubrir la ciudad por primera vez — restaurantes, hoteles, galerías.',
    accent: '#C4AD87',
    dotColor: '#C4AD87',
    zoneFill: '#0E334B',
    zoneStroke: '#0A4E49',
  },
  {
    id: 'residir',
    label: 'Residir',
    desc: 'Para quien busca vivir en SMA — colonias, comunidades, cultura local.',
    accent: '#4E5B4A',
    dotColor: '#B8C8B9',
    zoneFill: '#1C2A22',
    zoneStroke: '#4E5B4A',
  },
  {
    id: 'invertir',
    label: 'Invertir',
    desc: 'Lectura territorial — Urban Score, plusvalía, desarrollos, propiedades.',
    accent: '#B9654D',
    dotColor: '#B9654D',
    zoneFill: '#2A1813',
    zoneStroke: '#B9654D',
  },
  {
    id: 'pertenecer',
    label: 'Pertenecer',
    desc: 'Vista para miembros BRAGO — eventos, accesos y la red completa.',
    accent: '#7A1635',
    dotColor: '#E08BA0',
    zoneFill: '#231119',
    zoneStroke: '#7A1635',
  },
]

// Neighborhood SVG polygon zones — 800×500 viewBox
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

const signalColor: Record<string, string> = {
  Alto:        'text-brago-terracota',
  Consolidado: 'text-brago-cream',
  Medio:       'text-brago-cream-2',
  Emergente:   'text-brago-celadon',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function BragoCityMap() {
  const [activeFilter, setActiveFilter] = useState<MapFilter>('Todos')
  const [activeMode,   setActiveMode]   = useState<MapMode>('visitar')
  const [hoveredZone,  setHoveredZone]  = useState<string | null>(null)
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  const mode = mapModes.find((m) => m.id === activeMode)!
  const panelZone = zones.find((z) => z.id === (selectedZone ?? hoveredZone))

  const panelItems = businesses
    .filter((b) => b.city === 'San Miguel de Allende')
    .filter((b) => activeFilter === 'Todos' || b.category === activeFilter)
    .slice(0, 5)

  const isDotVisible = (cat: string) =>
    activeFilter === 'Todos' || cat === activeFilter

  return (
    <section id="mapa" className="py-20 lg:py-32 bg-brago-black-2 relative overflow-hidden">

      {/* Subtle atmospheric gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${mode.zoneStroke}14 0%, transparent 60%)`,
          transition: 'all 0.8s ease',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <AnimatedSection className="mb-12 lg:mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-6 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">
              BRAGO City Map
            </span>
            <span className="w-1 h-1 bg-brago-terracota rotate-45 inline-block" />
            <span className="text-2xs tracking-widest uppercase text-brago-cream/30 font-light hidden sm:inline">
              {zones.length} colonias · {mapDots.length} lugares
            </span>
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

        {/* ── Mode selector — drives the map's palette + intent ───────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-px bg-brago-cream/8">
            {mapModes.map((m) => {
              const isActive = activeMode === m.id
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMode(m.id)}
                  className={cn(
                    'px-5 py-3 text-2xs tracking-widest uppercase font-medium transition-all duration-400 flex items-center gap-2.5 min-w-[110px] justify-center',
                  )}
                  style={{
                    backgroundColor: isActive ? m.accent : '#0F0F0D',
                    color: isActive ? '#0A0A0A' : '#A8A296',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rotate-45 inline-block transition-all duration-400"
                    style={{
                      backgroundColor: isActive ? '#0A0A0A' : m.accent,
                    }}
                  />
                  {m.label}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={mode.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-brago-cream-3/70 font-light leading-relaxed max-w-sm sm:text-right italic"
            >
              {mode.desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Category filter pills */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          {mapFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-2xs tracking-widest uppercase font-medium border transition-all duration-300',
              )}
              style={{
                backgroundColor: activeFilter === f.id ? mode.accent : 'transparent',
                color: activeFilter === f.id ? '#0A0A0A' : '#A8A296',
                borderColor: activeFilter === f.id ? mode.accent : 'rgba(243, 238, 230, 0.15)',
              }}
            >
              <span>{f.icon}</span>
              <span className="hidden sm:inline">{f.label}</span>
            </button>
          ))}
        </div>

        {/* Map + Panel grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brago-cream/8">

          {/* ── SVG Map (2/3) ─────────────────────────────────────────────── */}
          <div className="lg:col-span-2 bg-brago-black relative overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
              <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full">
                {/* Fine grid */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 25} x2="800" y2={i * 25}
                    stroke="#F3EEE6" strokeOpacity="0.025" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 32 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="500"
                    stroke="#F3EEE6" strokeOpacity="0.025" strokeWidth="0.5" />
                ))}

                {/* Outer frame */}
                <rect x="0" y="0" width="800" height="500"
                  fill="none" stroke={mode.accent} strokeOpacity="0.12" strokeWidth="1" />

                {/* ── Neighborhood zones — driven by active mode ── */}
                {zones.map((zone) => {
                  const isActive = selectedZone === zone.id
                  const isHover  = hoveredZone  === zone.id
                  const isHi     = isActive || isHover
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
                        fill={isActive ? mode.accent : mode.zoneFill}
                        fillOpacity={isActive ? 0.32 : isHover ? 0.22 : 0.14}
                        stroke={mode.zoneStroke}
                        strokeOpacity={isActive ? 0.85 : isHover ? 0.55 : 0.30}
                        strokeWidth={isActive ? 1.6 : 0.9}
                        style={{ transition: 'all 0.4s ease' }}
                      />
                      <text
                        x={zone.labelX} y={zone.labelY - 5}
                        textAnchor="middle"
                        fill="#F3EEE6"
                        fillOpacity={isHi ? 0.92 : 0.34}
                        fontSize="8.5"
                        fontFamily="'Playfair Display', Georgia, serif"
                        letterSpacing="2.5"
                        style={{ userSelect: 'none', transition: 'fill-opacity 0.3s ease' }}
                      >
                        {zone.name.toUpperCase()}
                      </text>
                      <text
                        x={zone.labelX} y={zone.labelY + 9}
                        textAnchor="middle"
                        fill={mode.accent}
                        fillOpacity={isHi ? 0.85 : 0}
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
                  return (
                    <g key={dot.id}>
                      <circle
                        cx={dot.x} cy={dot.y} r="5"
                        fill={mode.dotColor}
                        fillOpacity={visible ? 0.14 : 0}
                        style={{ transition: 'fill-opacity 0.4s ease' }}
                      />
                      <circle
                        cx={dot.x} cy={dot.y} r="2.2"
                        fill={mode.dotColor}
                        fillOpacity={visible ? 0.95 : 0.08}
                        style={{ transition: 'all 0.4s ease' }}
                      />
                    </g>
                  )
                })}

                {/* Legend */}
                <g transform="translate(22, 470)">
                  <text fill={mode.accent} fillOpacity="0.4" fontSize="6.5"
                    fontFamily="'Inter', system-ui, sans-serif" letterSpacing="2">
                    BRAGO CITY MAP · MODE: {mode.label.toUpperCase()} · SAN MIGUEL DE ALLENDE
                  </text>
                </g>

                {/* Compass */}
                <g transform="translate(756, 468)">
                  <text fill={mode.accent} fillOpacity="0.4" fontSize="7"
                    fontFamily="'Inter', system-ui, sans-serif" letterSpacing="1">N</text>
                  <line x1="4" y1="-14" x2="4" y2="-4"
                    stroke={mode.accent} strokeOpacity="0.4" strokeWidth="0.6" />
                </g>
              </svg>

              {/* Zone info overlay */}
              <AnimatePresence>
                {selectedZone && panelZone && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 left-4 bg-brago-black/92 backdrop-blur-sm px-5 py-4 max-w-[210px]"
                    style={{ borderLeft: `2px solid ${mode.accent}` }}
                  >
                    <p className="text-2xs tracking-widest uppercase font-medium mb-1"
                       style={{ color: mode.accent }}>
                      Zona
                    </p>
                    <p className="font-serif text-base text-brago-cream mb-1">{panelZone.name}</p>
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="text-2xs tracking-widest uppercase text-brago-cream-3 font-light">Score </span>
                        <span className="font-serif text-sm" style={{ color: mode.accent }}>{panelZone.score}</span>
                      </div>
                      <span className={cn('text-2xs tracking-widest uppercase font-medium', signalColor[panelZone.signal])}>
                        {panelZone.signal}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Right panel ─────────────────────────────────────────────── */}
          <div className="bg-brago-black-2 flex flex-col min-h-[300px] lg:min-h-0">

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
                    <p className="text-2xs tracking-widest uppercase font-medium mb-1"
                       style={{ color: mode.accent }}>
                      {panelZone.name}
                    </p>
                    <p className="text-xs text-brago-cream-3 font-light leading-relaxed">
                      {panelZone.desc}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`default-${activeMode}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-2xs tracking-widest uppercase font-medium mb-1"
                       style={{ color: mode.accent }}>
                      Modo {mode.label}
                    </p>
                    <p className="font-serif text-lg text-brago-cream">
                      {activeFilter === 'Todos' ? 'Todos los lugares' : `BRAGO ${activeFilter}`}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex-1 divide-y divide-brago-cream/6 overflow-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeFilter}-${activeMode}`}
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
                        <span className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: mode.accent }} />
                        <span className="text-2xs tracking-widest uppercase font-medium"
                          style={{ color: mode.accent, opacity: 0.7 }}>
                          {biz.category}
                        </span>
                      </div>
                      <p className="font-serif text-sm text-brago-cream group-hover:text-brago-cream transition-colors duration-300 leading-snug">
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

            <div className="border-t border-brago-cream/8 px-6 py-4 flex-shrink-0">
              <Link
                href="/directorio"
                className="text-2xs tracking-widest uppercase transition-colors duration-300 font-medium flex items-center gap-2"
                style={{ color: mode.accent }}
              >
                Ver directorio completo <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <AnimatedSection delay={0.2} className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-2xs tracking-widest uppercase text-brago-cream/20 font-medium">
            Mapa editorial · No es Google Maps · Es BRAGO leyendo la ciudad
          </p>
          <p className="text-2xs tracking-widest uppercase font-light"
            style={{ color: mode.accent, opacity: 0.55 }}>
            Modo activo: {mode.label}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
