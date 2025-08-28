import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { navy: { 950: '#0B132B', 900: '#0E1A3A' } },
      boxShadow: { card: '0 12px 30px rgba(0,0,0,0.08)' },
      borderRadius: { '3xl': '1.5rem' },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } }
      },
      animation: { marquee: 'marquee 20s linear infinite' }
    }
  }
}

export default config
