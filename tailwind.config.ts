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
          black:      '#080806',
          'black-2':  '#0F0F0D',
          'black-3':  '#161614',
          'black-4':  '#1E1E1C',
          cream:      '#F0EEE8',
          'cream-2':  '#D8D6D0',
          'cream-3':  '#A8A69F',
          gold:       '#C8A96E',
          'gold-2':   '#B09050',
          'gold-3':   '#8A6E3A',
          'gold-light': '#D9BF8A',
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
