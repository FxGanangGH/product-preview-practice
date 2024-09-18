/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      screens: {
        desktop: '1440px'
      },
      colors: {
        primary: {
          cyan: 'hsl(158, 36%, 37%)',
          cream: 'hsl(30, 38%, 92%)'
        },
        neutral: {
          'dark-blue': 'hsl(212, 21%, 14%)',
          'gray-blue': 'hsl(228, 12%, 48%)'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'system-ui']
      },
      letterSpacing: {
        category: '5px'
      },
      maxWidth: {
        'product-preview': '365px'
      }
    }
  },
  plugins: []
}
