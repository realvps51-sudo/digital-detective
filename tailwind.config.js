/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        detective: {
          bg: '#FBF8F1',
          board: '#C99D66',
          boardDark: '#A07138',
          card: '#FFFFFF',
          primary: '#2563EB',
          accent: '#F59E0B',
          amber: '#D97706',
          danger: '#EF4444',
          success: '#10B981',
          navy: '#1E293B',
          slate: '#334155',
        }
      },
      boxShadow: {
        'tactile-amber': '0 4px 0 #B45309',
        'tactile-blue': '0 4px 0 #1D4ED8',
        'tactile-green': '0 4px 0 #047857',
        'tactile-wood': '0 6px 0 #854D0E',
      }
    },
  },
  plugins: [],
}
