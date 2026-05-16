import Link from 'next/link'

const footerLinks = {
  directorio: [
    { label: 'Directorio',    href: '/directorio' },
    { label: 'Restaurantes',  href: '/directorio?categoria=restaurante' },
    { label: 'Hoteles',       href: '/directorio?categoria=hotel' },
    { label: 'Real Estate',   href: '/real-estate' },
    { label: 'Arte & Galerías', href: '/directorio?categoria=arte' },
    { label: 'Lifestyle',     href: '/directorio?categoria=lifestyle' },
    { label: 'Inversión',     href: '/directorio?categoria=inversion' },
    { label: 'Experiencias',  href: '/directorio?categoria=experiencias' },
  ],
  ciudades: [
    { label: 'San Miguel de Allende', href: '/directorio?ciudad=sma' },
    { label: 'León',                  href: '/directorio?ciudad=leon' },
    { label: 'Querétaro',             href: '#' },
    { label: 'Guadalajara',           href: '#' },
    { label: 'Ciudad de México',      href: '#' },
  ],
  brago: [
    { label: 'Journal',            href: '/journal' },
    { label: 'Membresías',         href: '/membresias' },
    { label: 'Eventos',            href: '/eventos' },
    { label: 'Hélices',           href: '#helices' },
    { label: 'Guía física',        href: '#guia' },
    { label: 'Urban Score',        href: '#urbanscore' },
    { label: 'Aplicar para entrar', href: '/membresias' },
  ],
  legal: [
    { label: 'Términos',           href: '#' },
    { label: 'Privacidad',         href: '#' },
    { label: 'Contacto',           href: '#contacto' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-brago-cream/8 bg-brago-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-widest-2 text-brago-cream">BRAGO</span>
            </Link>
            <p className="text-brago-cream-3 text-sm leading-relaxed max-w-xs font-light mb-6">
              La guía editorial de real estate, hospitalidad, cultura, inversión y estilo de vida que define el nuevo Bajío.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-brago-gold rotate-45 inline-block" />
              <span className="text-2xs tracking-widest-2 uppercase text-brago-gold font-medium">
                Curado con criterio
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-2xs tracking-widest uppercase text-brago-cream-3 hover:text-brago-cream transition-colors duration-200 font-light">
                Instagram
              </a>
              <span className="w-px h-3 bg-brago-cream/15" />
              <a href="#" className="text-2xs tracking-widest uppercase text-brago-cream-3 hover:text-brago-cream transition-colors duration-200 font-light">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Directorio */}
          <div>
            <h4 className="text-2xs tracking-widest-2 uppercase text-brago-cream-3 mb-6 font-medium">
              Directorio
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.directorio.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-brago-cream-2 hover:text-brago-cream transition-colors duration-200 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ciudades */}
          <div>
            <h4 className="text-2xs tracking-widest-2 uppercase text-brago-cream-3 mb-6 font-medium">
              Ciudades
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.ciudades.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-brago-cream-2 hover:text-brago-cream transition-colors duration-200 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-2xs tracking-widest uppercase text-brago-cream-3/50 font-light italic">
              Próximamente →
            </p>
          </div>

          {/* BRAGO */}
          <div>
            <h4 className="text-2xs tracking-widest-2 uppercase text-brago-cream-3 mb-6 font-medium">
              BRAGO
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.brago.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-brago-cream-2 hover:text-brago-cream transition-colors duration-200 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-2xs tracking-widest-2 uppercase text-brago-cream-3 mb-6 font-medium">
              Newsletter
            </h4>
            <p className="text-sm text-brago-cream-3 font-light leading-relaxed mb-4">
              Inteligencia de ciudad, editorial y selección en tu correo.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="tu@correo.mx"
                className="w-full bg-transparent border border-brago-cream/15 text-brago-cream placeholder:text-brago-cream-3/50 px-4 py-2.5 text-xs font-light focus:outline-none focus:border-brago-gold/40 transition-colors duration-300"
              />
              <button className="w-full border border-brago-gold/40 text-brago-gold text-2xs tracking-widest uppercase font-medium py-2.5 hover:bg-brago-gold hover:text-brago-black transition-all duration-400">
                Suscribirse
              </button>
            </div>

            {/* Legal */}
            <div className="mt-8">
              <h4 className="text-2xs tracking-widest-2 uppercase text-brago-cream-3 mb-4 font-medium">Legal</h4>
              <ul className="flex flex-col gap-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-brago-cream-3/60 hover:text-brago-cream-3 transition-colors duration-200 font-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-brago-cream/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-2xs tracking-widest uppercase text-brago-cream-3/60 font-light">
            © {new Date().getFullYear()} BRAGO Holding · Guanajuato, México
          </p>
          <p className="text-2xs tracking-widest uppercase text-brago-cream-3/40 font-light">
            El Bajío es el primer mapa. No el último.
          </p>
        </div>
      </div>
    </footer>
  )
}
