import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brago: {
          // ── Base (negros, marfil, champaña) ──
          black:      '#0A0A0A',  // Obsidiana
          'black-2':  '#0F0F0D',
          'black-3':  '#151515',  // Grafito profundo
          'black-4':  '#1C1C1C',
          cream:      '#F3EEE6',  // Marfil editorial
          'cream-2':  '#D8D2C5',
          'cream-3':  '#A8A296',
          gold:       '#C4AD87',  // Champaña humo
          'gold-2':   '#B09060',
          'gold-3':   '#8A6E3A',
          'gold-light': '#D9C7A3',

          // ── V3 paleta patrimonial mexicana ──
          terracota:    '#B9654D',  // Terracota San Miguel
          'terracota-2':'#94503D',
          vino:         '#7A1635',  // Vino patrimonial
          cadillac:     '#5E1428',  // Cadillac burgundy
          tapiz:        '#4E5B4A',  // Verde tapiz
          malaquita:    '#0A4E49',  // Verde malaquita
          'malaquita-2':'#0E665F',
          celadon:      '#B8C8B9',  // Verde celadón
          azul:         '#1978A8',  // Azul mexicano
          petroleo:     '#0E334B',  // Azul petróleo
          'petroleo-2': '#143F5C',
          rosa:         '#E08BA0',  // Rosa empolvado
          'rosa-fuerte':'#D93B63',  // Rosa mexicano
        },
      },
      fontFamily: {
        serif:  ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:   ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs':  ['0.625rem', { lineHeight: '1rem' }],
        '10xl': ['10rem',    { lineHeight: '1' }],
      },
      letterSpacing: {
        'widest-2': '0.25em',
        'widest-3': '0.35em',
      },
      transitionTimingFunction: {
        'brago':     'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'brago-out': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        '400':  '400ms',
        '600':  '600ms',
        '800':  '800ms',
        '1200': '1200ms',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      screens: {
        'xs': '390px',
      },
    },
  },
  plugins: [],
}

export default config
