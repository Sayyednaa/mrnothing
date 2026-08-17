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
          DEFAULT: '#062B67', // Logo primary navy
          deep: '#062B67',
          dark: '#031C44',
          midnight: '#021330',
          light: '#0A3B8C',
          muted: '#1E4079',
          surface: '#071630',
        },
        gold: {
          DEFAULT: '#B28A43', // Logo accent gold
          accent: '#B28A43',
          soft: '#D2B36B',
          light: '#E5C989',
          dark: '#8C692D',
          bronze: '#9E7835',
        },
        surface: {
          offwhite: '#F7F8FA',
          card: '#FFFFFF',
          dark: '#031C44',
          darkcard: '#062B67',
        },
        text: {
          primary: '#062B67',
          secondary: '#475569',
          muted: '#94A3B8',
          darkprimary: '#FFFFFF',
          darksecondary: '#D2B36B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 4px 20px -2px rgba(178, 138, 67, 0.35)',
        'navy-glow': '0 10px 30px -5px rgba(6, 43, 103, 0.4)',
        'glass': '0 8px 32px 0 rgba(3, 28, 68, 0.15)',
      }
    },
  },
  plugins: [],
}
