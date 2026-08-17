/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#062B67",
          dark: "#031C44",
          light: "#0A3D8F",
        },
        gold: {
          accent: "#B28A43",
          soft: "#D2B36B",
          light: "#F9F4EB",
        },
        offwhite: "#F7F8FA",
        darktext: "#111827",
        mutedtext: "#64748B",
        customborder: "#E5E7EB",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
