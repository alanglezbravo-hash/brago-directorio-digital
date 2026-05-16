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
          // ── Cadillac base (negros profundos) ──
          black:      '#050505',  // Cadillac black
          'black-2':  '#090807',  // Negro humo
          'black-3':  '#0D0B0A',  // Obsidiana cálida
          'black-4':  '#14110F',  // Grafito brown

          // ── Marfil cálido / Warm ivory ──
          cream:      '#F4EFE7',  // Marfil principal
          'cream-2':  '#EDE4D8',  // Marfil suave
          'cream-3':  '#B89B70',  // Cantera-3 oscuro (text secondary)

          // ── Cantera / Piedra colonial ──
          cantera:    '#C2A77D',  // Cantera principal — borders, líneas
          'cantera-2':'#D0B88C',  // Cantera clara
          'cantera-3':'#B89B70',  // Cantera oscura — texto secundario premium

          // ── Gold alias mantenidos (apuntan a cantera para retro-compat) ──
          gold:       '#C2A77D',
          'gold-2':   '#B89B70',
          'gold-3':   '#9C8159',
          'gold-light':'#D0B88C',

          // ── Vino tinto / Burgundy — acento de poder ──
          vino:       '#4A0F1F',  // Burgundy profundo
          'vino-2':   '#5A1328',  // Burgundy medio
          'vino-3':   '#6B1C32',  // Burgundy claro (hover)

          // ── Terracota / Barro San Miguel ──
          terracota:    '#A65335',  // Terracota base
          'terracota-2':'#B45A3C',  // Terracota media
          'terracota-3':'#C46A46',  // Terracota clara

          // ── Verde Zafiro / Verde profundo (Real Estate · Patrimonio) ──
          zafiro:     '#063F3A',
          'zafiro-2': '#0B4F46',
          'zafiro-3': '#0E5A4F',

          // ── Azul Talavera / Mexicano (Mapa · Cultura) ──
          azul:       '#003E7E',
          'azul-2':   '#004C99',
          'azul-3':   '#0057B8',

          // ── Rosa Mexicano Profundo (Eventos · usar con moderación) ──
          rosa:       '#C2185B',
          'rosa-2':   '#D81B60',
          'rosa-3':   '#B0124F',

          // ── Tokens auxiliares (compat) ──
          cadillac:   '#5A1328',  // Cadillac burgundy = vino-2
          tapiz:      '#063F3A',  // Verde tapiz = zafiro
          malaquita:  '#0B4F46',
          'malaquita-2':'#0E5A4F',
          celadon:    '#B8C8B9',
          petroleo:   '#003E7E',
          'petroleo-2':'#004C99',
          'rosa-fuerte':'#C2185B',
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
