/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        jost: ['var(--font-jost)'],
        castoro: ['var(--font-castoro)']
      },
      backgroundImage: {
        'hero-square': "url('../public/square.svg')",
        'footer-background': "url('../public/footer.svg')",
      }
    },
  },
  plugins: [],
}
