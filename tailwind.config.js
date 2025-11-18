/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkYellow: '#D4AF37', // Jaune moutarde (mustard yellow) - Primary
        brightYellow: '#FFC107', // Jaune alternatif plus chaud
        deepBlack: '#000000',
        pureWhite: '#FFFFFF',
        darkGrey: '#2C2C2C', // Gris foncé pour les overlays
        forestGreen: '#1D7A52', // Vert foncé (dark green) - Secondary
        deepMaroon: '#6C1420',
        clay: '#8B4513', // Orange foncé / Burnt sienna (dark orange) - Complementary
        dusk: '#1A1A1A',
      },
      fontFamily: {
        burbank: ['"Burbank Big"', 'Burbank Big Condensed', 'sans-serif'],
        bebas: ['"Bebas Note"', '"Bebas Neue"', 'cursive', 'sans-serif'],
        host: ['"Host Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brand: '0 20px 40px rgba(0,0,0,0.12)',
        jaune: '0 4px 20px rgba(212,175,55,0.3)',
        jauneFort: '0 0 20px rgba(212,175,55,0.6)',
      },
      backgroundImage: {
        'mask-pattern':
          'radial-gradient(circle at 10% 20%, rgba(212,175,55,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(29,122,82,0.2), transparent 40%)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}

