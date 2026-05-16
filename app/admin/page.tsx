'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { businesses as initialData } from '@/data/businesses'
import { Business, Category, MembershipTier } from '@/types'
import { TierBadge, CategoryBadge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

type View = 'list' | 'edit' | 'add'

const categories: Category[] = [
  'Restaurante', 'Hotel', 'Galería', 'Spa', 'Boutique', 'Café', 'Club', 'Servicios',
]

export default function AdminPage() {
  const [businesses, setBusinesses] = useState<Business[]>(initialData)
  const [view,       setView]       = useState<View>('list')
  const [editing,    setEditing]    = useState<Business | null>(null)
  const [search,     setSearch]     = useState('')
  const [saved,      setSaved]      = useState(false)

  const filtered = businesses.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.city.toLowerCase().includes(search.toLowerCase()) ||
    b.category.toLowerCase().includes(search.toLowerCase())
  )

  const startEdit = (b: Business) => { setEditing({ ...b }); setView('edit') }
  const startAdd  = () => {
    setEditing({
      id: `new-${Date.now()}`,
      slug: '',
      name: '',
      tagline: '',
      description: '',
      story: '',
      category: 'Restaurante',
      city: 'San Miguel de Allende',
      tier: 'Estrella',
      coverImage: '',
      heroImage: '',
      gallery: [],
      address: '',
      neighborhood: '',
      phone: '',
      email: '',
      hours: { weekdays: '', weekend: '' },
      services: [],
      tags: [],
      coordinates: { lat: 0, lng: 0 },
      featured: false,
      since: new Date().getFullYear(),
    })
    setView('add')
  }

  const saveEditing = () => {
    if (!editing) return
    if (view === 'add') {
      setBusinesses((prev) => [...prev, editing])
    } else {
      setBusinesses((prev) => prev.map((b) => b.id === editing.id ? editing : b))
    }
    setSaved(true)
    setTimeout(() => { setSaved(false); setView('list') }, 1500)
  }

  const deleteBusiness = (id: string) => {
    if (!confirm('¿Eliminar este negocio del directorio?')) return
    setBusinesses((prev) => prev.filter((b) => b.id !== id))
  }

  const toggleFeatured = (id: string) => {
    setBusinesses((prev) => prev.map((b) => b.id === id ? { ...b, featured: !b.featured } : b))
  }

  return (
    <div className="min-h-screen bg-brago-black">

      {/* Admin Topbar */}
      <div className="border-b border-brago-cream/8 bg-brago-black-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-serif text-lg tracking-widest-2 text-brago-gold">
              BRAGO
            </Link>
            <span className="h-4 w-px bg-brago-cream/10" />
            <span className="text-2xs tracking-widest uppercase text-brago-cream/30 font-medium">
              Panel de administración
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-2xs tracking-widest uppercase text-brago-cream/30 hover:text-brago-cream transition-colors"
            >
              ← Sitio
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        <AnimatePresence mode="wait">

          {/* ─── LIST VIEW ─────────────────────────────── */}
          {view === 'list' && (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                <div>
                  <h1 className="font-serif text-3xl text-brago-cream mb-1">Directorio</h1>
                  <p className="text-xs text-brago-cream/30 font-light">{businesses.length} negocios en el sistema</p>
                </div>
                <Button variant="gold" size="sm" onClick={startAdd}>
                  + Agregar negocio
                </Button>
              </div>

              {/* Search */}
              <div className="mb-8">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por nombre, ciudad o categoría…"
                  className="w-full max-w-sm bg-brago-black-3 border border-brago-cream/10 text-brago-cream text-sm font-light px-4 py-2.5 focus:outline-none focus:border-brago-gold/40 transition-colors duration-300 placeholder:text-brago-cream/20"
                />
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { label: 'Total',     value: businesses.length },
                  { label: 'Diamante',  value: businesses.filter((b) => b.tier === 'Diamante').length },
                  { label: 'Estrella',  value: businesses.filter((b) => b.tier === 'Estrella').length },
                  { label: 'Destacados', value: businesses.filter((b) => b.featured).length },
                ].map((stat) => (
                  <div key={stat.label} className="border border-brago-cream/8 p-4 bg-brago-black-2">
                    <p className="text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">{stat.label}</p>
                    <p className="font-serif text-3xl text-brago-cream">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div className="border border-brago-cream/8 overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-brago-cream/8 bg-brago-black-3">
                  {['Negocio', 'Ciudad', 'Categoría', 'Nivel', 'Dest.', 'Acciones'].map((h, i) => (
                    <div
                      key={h}
                      className={`text-2xs tracking-widest uppercase text-brago-cream/25 font-medium ${
                        i === 0 ? 'col-span-4' :
                        i === 1 ? 'col-span-2' :
                        i === 2 ? 'col-span-2' :
                        i === 3 ? 'col-span-1' :
                        i === 4 ? 'col-span-1' :
                        'col-span-2 text-right'
                      }`}
                    >
                      {h}
                    </div>
                  ))}
                </div>

                {filtered.map((b) => (
                  <div
                    key={b.id}
                    className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-brago-cream/5 hover:bg-brago-black-3 transition-colors duration-200 items-center"
                  >
                    {/* Name + image */}
                    <div className="col-span-4 flex items-center gap-3 min-w-0">
                      <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden bg-brago-black-4">
                        {b.coverImage && (
                          <Image src={b.coverImage} alt={b.name} fill className="object-cover" sizes="40px" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-brago-cream font-medium truncate">{b.name}</p>
                        <p className="text-2xs text-brago-cream/25 font-light truncate">{b.slug}</p>
                      </div>
                    </div>

                    {/* City */}
                    <div className="col-span-2">
                      <p className="text-xs text-brago-cream/50 font-light">
                        {b.city === 'San Miguel de Allende' ? 'SMA' : 'León'}
                      </p>
                    </div>

                    {/* Category */}
                    <div className="col-span-2">
                      <CategoryBadge category={b.category} />
                    </div>

                    {/* Tier */}
                    <div className="col-span-1">
                      <TierBadge tier={b.tier} />
                    </div>

                    {/* Featured */}
                    <div className="col-span-1">
                      <button
                        onClick={() => toggleFeatured(b.id)}
                        className={`w-2 h-2 rotate-45 transition-all duration-300 ${
                          b.featured ? 'bg-brago-gold' : 'border border-brago-cream/15 hover:border-brago-gold/40'
                        }`}
                        title={b.featured ? 'Quitar de destacados' : 'Marcar como destacado'}
                      />
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 flex items-center justify-end gap-3">
                      <Link
                        href={`/negocio/${b.slug}`}
                        target="_blank"
                        className="text-2xs tracking-widest uppercase text-brago-cream/25 hover:text-brago-cream transition-colors"
                      >
                        Ver
                      </Link>
                      <button
                        onClick={() => startEdit(b)}
                        className="text-2xs tracking-widest uppercase text-brago-cream/25 hover:text-brago-gold transition-colors"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deleteBusiness(b.id)}
                        className="text-2xs tracking-widest uppercase text-brago-cream/15 hover:text-red-400/60 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}

                {filtered.length === 0 && (
                  <div className="py-20 text-center">
                    <p className="text-brago-cream/25 text-sm font-light">Sin resultados</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ─── EDIT / ADD VIEW ──────────────────────── */}
          {(view === 'edit' || view === 'add') && editing && (
            <motion.div
              key="edit"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div>
                  <button
                    onClick={() => setView('list')}
                    className="flex items-center gap-2 text-2xs tracking-widest uppercase text-brago-cream/30 hover:text-brago-cream transition-colors mb-3"
                  >
                    ← Volver
                  </button>
                  <h1 className="font-serif text-3xl text-brago-cream">
                    {view === 'add' ? 'Nuevo negocio' : `Editando: ${editing.name}`}
                  </h1>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" onClick={() => setView('list')}>
                    Cancelar
                  </Button>
                  <Button variant="gold" size="sm" onClick={saveEditing} disabled={saved}>
                    {saved ? '✓ Guardado' : 'Guardar cambios'}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left column */}
                <div className="space-y-6">
                  <Section title="Identidad">
                    <AdminField label="Nombre"   value={editing.name}     onChange={(v) => setEditing({ ...editing, name: v })} />
                    <AdminField label="Slug URL" value={editing.slug}     onChange={(v) => setEditing({ ...editing, slug: v })} />
                    <AdminField label="Tagline"  value={editing.tagline}  onChange={(v) => setEditing({ ...editing, tagline: v })} />
                  </Section>

                  <Section title="Clasificación">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">Ciudad</label>
                        <select
                          value={editing.city}
                          onChange={(e) => setEditing({ ...editing, city: e.target.value as Business['city'] })}
                          className="w-full bg-brago-black-4 border border-brago-cream/10 text-brago-cream text-sm px-3 py-2.5 focus:outline-none focus:border-brago-gold/40 appearance-none"
                        >
                          <option value="San Miguel de Allende">San Miguel de Allende</option>
                          <option value="León">León</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">Categoría</label>
                        <select
                          value={editing.category}
                          onChange={(e) => setEditing({ ...editing, category: e.target.value as Category })}
                          className="w-full bg-brago-black-4 border border-brago-cream/10 text-brago-cream text-sm px-3 py-2.5 focus:outline-none focus:border-brago-gold/40 appearance-none"
                        >
                          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">Nivel</label>
                        <select
                          value={editing.tier}
                          onChange={(e) => setEditing({ ...editing, tier: e.target.value as MembershipTier })}
                          className="w-full bg-brago-black-4 border border-brago-cream/10 text-brago-cream text-sm px-3 py-2.5 focus:outline-none focus:border-brago-gold/40 appearance-none"
                        >
                          <option value="Estrella">Estrella</option>
                          <option value="Diamante">Diamante</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">Año apertura</label>
                        <input
                          type="number"
                          value={editing.since}
                          onChange={(e) => setEditing({ ...editing, since: Number(e.target.value) })}
                          className="w-full bg-brago-black-4 border border-brago-cream/10 text-brago-cream text-sm px-3 py-2.5 focus:outline-none focus:border-brago-gold/40"
                        />
                      </div>
                    </div>
                    <label className="flex items-center gap-3 mt-2 cursor-pointer">
                      <div
                        onClick={() => setEditing({ ...editing, featured: !editing.featured })}
                        className={`w-4 h-4 border flex items-center justify-center transition-all ${editing.featured ? 'bg-brago-gold border-brago-gold' : 'border-brago-cream/20'}`}
                      >
                        {editing.featured && <span className="text-brago-black text-xs font-bold">✓</span>}
                      </div>
                      <span className="text-xs text-brago-cream/40 font-light">Marcar como destacado en el home</span>
                    </label>
                  </Section>

                  <Section title="Descripción editorial">
                    <div>
                      <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">Descripción corta</label>
                      <textarea
                        rows={3}
                        value={editing.description}
                        onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                        className="w-full bg-brago-black-4 border border-brago-cream/10 text-brago-cream text-sm font-light px-3 py-2.5 focus:outline-none focus:border-brago-gold/40 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">Historia</label>
                      <textarea
                        rows={5}
                        value={editing.story}
                        onChange={(e) => setEditing({ ...editing, story: e.target.value })}
                        className="w-full bg-brago-black-4 border border-brago-cream/10 text-brago-cream text-sm font-light px-3 py-2.5 focus:outline-none focus:border-brago-gold/40 resize-none"
                      />
                    </div>
                  </Section>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  <Section title="Imágenes">
                    <AdminField label="Cover image URL" value={editing.coverImage} onChange={(v) => setEditing({ ...editing, coverImage: v })} />
                    <AdminField label="Hero image URL"  value={editing.heroImage}  onChange={(v) => setEditing({ ...editing, heroImage: v })} />
                    {editing.coverImage && (
                      <div className="relative aspect-video overflow-hidden bg-brago-black-4 mt-2">
                        <Image src={editing.coverImage} alt="Preview" fill className="object-cover" sizes="500px" />
                      </div>
                    )}
                    <div>
                      <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">
                        Galería (URLs separadas por coma)
                      </label>
                      <textarea
                        rows={3}
                        value={editing.gallery.join('\n')}
                        onChange={(e) => setEditing({ ...editing, gallery: e.target.value.split('\n').filter(Boolean) })}
                        className="w-full bg-brago-black-4 border border-brago-cream/10 text-brago-cream text-sm font-light px-3 py-2.5 focus:outline-none focus:border-brago-gold/40 resize-none"
                        placeholder="Una URL por línea"
                      />
                    </div>
                  </Section>

                  <Section title="Contacto y ubicación">
                    <AdminField label="Dirección"      value={editing.address}      onChange={(v) => setEditing({ ...editing, address: v })} />
                    <AdminField label="Colonia / Zona"  value={editing.neighborhood} onChange={(v) => setEditing({ ...editing, neighborhood: v })} />
                    <AdminField label="Teléfono"        value={editing.phone}        onChange={(v) => setEditing({ ...editing, phone: v })} />
                    <AdminField label="Email"           value={editing.email}        onChange={(v) => setEditing({ ...editing, email: v })} type="email" />
                    <AdminField label="Website"         value={editing.website || ''} onChange={(v) => setEditing({ ...editing, website: v })} />
                    <AdminField label="Instagram"       value={editing.instagram || ''} onChange={(v) => setEditing({ ...editing, instagram: v })} />
                  </Section>

                  <Section title="Horarios">
                    <AdminField label="Entre semana" value={editing.hours.weekdays} onChange={(v) => setEditing({ ...editing, hours: { ...editing.hours, weekdays: v } })} />
                    <AdminField label="Fin de semana" value={editing.hours.weekend} onChange={(v) => setEditing({ ...editing, hours: { ...editing.hours, weekend: v } })} />
                    <AdminField label="Día(s) cerrado" value={editing.hours.closed || ''} onChange={(v) => setEditing({ ...editing, hours: { ...editing.hours, closed: v } })} />
                  </Section>

                  <Section title="Servicios y etiquetas">
                    <div>
                      <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">
                        Servicios (uno por línea)
                      </label>
                      <textarea
                        rows={4}
                        value={editing.services.join('\n')}
                        onChange={(e) => setEditing({ ...editing, services: e.target.value.split('\n').filter(Boolean) })}
                        className="w-full bg-brago-black-4 border border-brago-cream/10 text-brago-cream text-sm font-light px-3 py-2.5 focus:outline-none focus:border-brago-gold/40 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">
                        Tags (separados por coma)
                      </label>
                      <input
                        type="text"
                        value={editing.tags.join(', ')}
                        onChange={(e) => setEditing({ ...editing, tags: e.target.value.split(',').map((t) => t.trim()).filter(Boolean) })}
                        className="w-full bg-brago-black-4 border border-brago-cream/10 text-brago-cream text-sm px-3 py-2.5 focus:outline-none focus:border-brago-gold/40"
                      />
                    </div>
                  </Section>
                </div>
              </div>

              {/* Save bottom */}
              <div className="mt-10 flex justify-end gap-3">
                <Button variant="outline" size="md" onClick={() => setView('list')}>Cancelar</Button>
                <Button variant="gold" size="md" onClick={saveEditing} disabled={saved}>
                  {saved ? '✓ Cambios guardados' : 'Guardar cambios'}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-brago-cream/8 p-5 bg-brago-black-2">
      <h3 className="text-2xs tracking-widest-2 uppercase text-brago-cream/30 font-medium mb-5 pb-3 border-b border-brago-cream/8">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function AdminField({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label:    string
  value:    string
  onChange: (v: string) => void
  type?:    string
}) {
  return (
    <div>
      <label className="block text-2xs tracking-widest uppercase text-brago-cream/25 font-medium mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-brago-black-4 border border-brago-cream/8 text-brago-cream text-sm font-light px-3 py-2.5 focus:outline-none focus:border-brago-gold/40 transition-colors duration-300"
      />
    </div>
  )
}
