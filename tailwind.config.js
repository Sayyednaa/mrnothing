/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#062B67', // Logo & Stitch primary navy
          deep: '#062B67',
          dark: '#031C44',
          midnight: '#020B1E', // Stitch deep void dark mode
          light: '#0A3B8C',
          muted: '#1E4079',
          surface: '#071738',
          card: '#081D45',
        },
        gold: {
          DEFAULT: '#B28A43', // Logo & Stitch accent gold
          accent: '#B28A43',
          soft: '#D2B36B',
          light: '#E6CA85',
          dark: '#8C692D',
          bronze: '#A67C37',
        },
        surface: {
          offwhite: '#F8FAFC',
          card: '#FFFFFF',
          dark: '#031C44',
          darkcard: '#071738',
        },
        text: {
          primary: '#062B67',
          secondary: '#475569',
          muted: '#94A3B8',
          darkprimary: '#FFFFFF',
          darksecondary: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        tech: ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -2px rgba(178, 138, 67, 0.35)',
        'navy-glow': '0 12px 35px -5px rgba(6, 43, 103, 0.45)',
        'glass': '0 8px 32px 0 rgba(3, 28, 68, 0.15)',
        'stitch': '0 20px 40px -15px rgba(2, 11, 30, 0.5)',
      }
    },
  },
  plugins: [],
}
