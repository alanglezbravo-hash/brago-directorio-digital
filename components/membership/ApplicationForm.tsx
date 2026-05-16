'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { MembershipTier, Category, City } from '@/types'

const categories: Category[] = [
  'Restaurante', 'Hotel', 'Real Estate', 'Galería', 'Arte', 'Spa', 'Boutique',
  'Café', 'Club', 'Lifestyle', 'Wellness', 'Cultura', 'Música', 'Experiencias',
  'Inversión', 'Hacienda', 'Arquitectura', 'Interiorismo', 'Estacionamiento', 'Servicios',
]

interface FormData {
  businessName: string
  ownerName:    string
  email:        string
  phone:        string
  city:         City | ''
  category:     Category | ''
  tier:         MembershipTier | ''
  website:      string
  instagram:    string
  description:  string
  agreement:    boolean
}

const empty: FormData = {
  businessName: '',
  ownerName:    '',
  email:        '',
  phone:        '',
  city:         '',
  category:     '',
  tier:         '',
  website:      '',
  instagram:    '',
  description:  '',
  agreement:    false,
}

export function ApplicationForm() {
  const [form,      setForm]      = useState<FormData>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const set = (key: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="aplicar" className="py-24 lg:py-40 bg-brago-black-2">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-6 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Aplicación</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl text-brago-cream mb-4">
            Solicita tu membresía
          </h2>
          <p className="text-sm text-brago-cream-3 font-light leading-relaxed max-w-lg">
            Completa el formulario y nuestro equipo revisará tu negocio. Si cumple con los estándares BRAGO, te contactaremos en 72 horas.
          </p>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="border border-brago-gold/20 bg-brago-gold/5 p-10 text-center"
            >
              <span className="w-3 h-3 bg-brago-gold rotate-45 inline-block mb-8" />
              <h3 className="font-serif text-2xl text-brago-cream mb-4">
                Solicitud recibida
              </h3>
              <p className="text-sm text-brago-cream-3 font-light leading-relaxed max-w-sm mx-auto">
                Gracias, {form.ownerName.split(' ')[0]}. Nuestro equipo revisará <strong className="text-brago-cream font-medium">{form.businessName}</strong> y te contactará en 72 horas.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Business info */}
              <fieldset>
                <legend className="text-2xs tracking-widest-2 uppercase text-brago-cream/30 font-medium mb-5">
                  Negocio
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Nombre del negocio *"
                    value={form.businessName}
                    onChange={(v) => set('businessName', v)}
                    required
                  />
                  <div>
                    <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">
                      Categoría *
                    </label>
                    <select
                      required
                      value={form.category}
                      onChange={(e) => set('category', e.target.value)}
                      className="w-full bg-brago-black-3 border border-brago-cream/10 text-brago-cream text-sm font-light px-4 py-3 focus:outline-none focus:border-brago-gold/40 transition-colors duration-300 appearance-none"
                    >
                      <option value="">Seleccionar…</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">
                      Ciudad *
                    </label>
                    <select
                      required
                      value={form.city}
                      onChange={(e) => set('city', e.target.value)}
                      className="w-full bg-brago-black-3 border border-brago-cream/10 text-brago-cream text-sm font-light px-4 py-3 focus:outline-none focus:border-brago-gold/40 transition-colors duration-300 appearance-none"
                    >
                      <option value="">Seleccionar…</option>
                      <option value="San Miguel de Allende">San Miguel de Allende</option>
                      <option value="León">León</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">
                      Nivel deseado *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Estrella', 'Diamante', 'Founder'] as MembershipTier[]).map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => set('tier', t)}
                          className={`py-3 text-2xs tracking-widest uppercase font-medium border transition-all duration-300 ${
                            form.tier === t
                              ? t === 'Diamante' || t === 'Founder'
                                ? 'bg-brago-gold text-brago-black border-brago-gold'
                                : 'bg-brago-cream/10 text-brago-cream border-brago-cream/30'
                              : 'border-brago-cream/10 text-brago-cream/40 hover:border-brago-cream/20 hover:text-brago-cream/60'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* Contact info */}
              <fieldset>
                <legend className="text-2xs tracking-widest-2 uppercase text-brago-cream/30 font-medium mb-5">
                  Contacto
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nombre completo *"  value={form.ownerName} onChange={(v) => set('ownerName', v)} required />
                  <Field label="Email *"            value={form.email}     onChange={(v) => set('email', v)}     required type="email" />
                  <Field label="Teléfono *"         value={form.phone}     onChange={(v) => set('phone', v)}     required type="tel" />
                  <Field label="Sitio web"          value={form.website}   onChange={(v) => set('website', v)}   type="url" placeholder="https://" />
                  <Field label="Instagram"          value={form.instagram} onChange={(v) => set('instagram', v)} placeholder="@usuario" />
                </div>
              </fieldset>

              {/* Description */}
              <fieldset>
                <legend className="text-2xs tracking-widest-2 uppercase text-brago-cream/30 font-medium mb-5">
                  Sobre tu negocio
                </legend>
                <div>
                  <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">
                    Cuéntanos qué hace especial a tu negocio *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.description}
                    onChange={(e) => set('description', e.target.value)}
                    placeholder="Describe en pocas palabras tu propuesta, historia y por qué pertenece a BRAGO…"
                    className="w-full bg-brago-black-3 border border-brago-cream/10 text-brago-cream text-sm font-light px-4 py-3 focus:outline-none focus:border-brago-gold/40 transition-colors duration-300 resize-none placeholder:text-brago-cream/20"
                  />
                </div>
              </fieldset>

              {/* Agreement */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  onClick={() => set('agreement', !form.agreement)}
                  className={`flex-shrink-0 w-4 h-4 border mt-0.5 flex items-center justify-center transition-all duration-300 ${
                    form.agreement ? 'bg-brago-gold border-brago-gold' : 'border-brago-cream/20 group-hover:border-brago-cream/40'
                  }`}
                >
                  {form.agreement && <span className="text-brago-black text-xs font-bold">✓</span>}
                </div>
                <span className="text-xs text-brago-cream/40 font-light leading-relaxed">
                  Entiendo que BRAGO revisa cada solicitud individualmente y que la membresía está sujeta a aprobación del equipo editorial.
                </span>
              </label>

              {/* Submit */}
              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={!form.agreement || !form.tier || loading}
                className="w-full"
              >
                {loading ? (
                  <span className="flex items-center gap-3">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="inline-block w-3 h-3 border border-brago-black/40 border-t-brago-black rounded-full"
                    />
                    Enviando…
                  </span>
                ) : (
                  'Enviar solicitud'
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  required,
  type = 'text',
  placeholder,
}: {
  label:        string
  value:        string
  onChange:     (v: string) => void
  required?:    boolean
  type?:        string
  placeholder?: string
}) {
  return (
    <div>
      <label className="block text-2xs tracking-widest uppercase text-brago-cream/30 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-brago-black-3 border border-brago-cream/10 text-brago-cream text-sm font-light px-4 py-3 focus:outline-none focus:border-brago-gold/40 transition-colors duration-300 placeholder:text-brago-cream/15"
      />
    </div>
  )
}
