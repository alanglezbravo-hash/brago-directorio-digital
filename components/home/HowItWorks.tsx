'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Aplicación',
    desc: 'El negocio solicita entrada al directorio o BRAGO lo invita directamente. No toda solicitud avanza.',
  },
  {
    number: '02',
    title: 'Curaduría',
    desc: 'Se evalúa estética, reputación, servicio, ubicación, propuesta, clientela, relevancia cultural y potencial comercial.',
  },
  {
    number: '03',
    title: 'Producción',
    desc: 'Se crea o mejora el perfil visual. Para miembros Diamante y Founder interviene Hélices Films en la producción.',
  },
  {
    number: '04',
    title: 'Publicación',
    desc: 'El negocio entra al directorio con badge verificado, descripción editorial y posicionamiento según membresía.',
  },
  {
    number: '05',
    title: 'Distribución',
    desc: 'El negocio puede aparecer en revista, redes, listas editoriales, eventos, mapas de ciudad y campañas estratégicas.',
  },
  {
    number: '06',
    title: 'Conversión',
    desc: 'BRAGO genera tráfico, reservaciones, leads, reputación y conexiones comerciales dentro del ecosistema.',
  },
  {
    number: '07',
    title: 'Ecosistema',
    desc: 'El negocio se convierte en parte de una red conectada con real estate, hospitality, cultura, inversión, media y eventos.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-28 lg:py-44 bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-6 bg-brago-gold/50" />
            <span className="text-2xs tracking-widest-3 uppercase text-brago-gold/70 font-medium">Proceso</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-brago-cream leading-tight max-w-2xl">
            Cómo funciona<br />
            <em className="not-italic text-brago-cream/50">el ecosistema BRAGO</em>
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="hidden lg:block absolute left-[3.5rem] top-0 bottom-0 w-px bg-brago-cream/8" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative flex items-start gap-8 lg:gap-16 py-8 border-b border-brago-cream/6 last:border-0 hover:bg-brago-black-2/40 transition-colors duration-400 -mx-6 px-6 lg:mx-0 lg:px-0"
              >
                {/* Number + dot */}
                <div className="flex-shrink-0 flex flex-col items-center relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center border border-brago-cream/12 group-hover:border-brago-gold/40 transition-colors duration-400">
                    <span className="font-serif text-lg text-brago-cream-3 group-hover:text-brago-gold transition-colors duration-400">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 flex-1 py-2">
                  <h3 className="font-serif text-2xl lg:text-3xl text-brago-cream mb-3 lg:mb-0 group-hover:text-brago-gold transition-colors duration-300 lg:w-56 flex-shrink-0">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brago-cream-3 font-light leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="hidden lg:flex items-center self-center ml-auto">
                  <span className="text-brago-gold/0 group-hover:text-brago-gold/60 transition-colors duration-400 text-xl">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
