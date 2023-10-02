/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: 'var(--primary-950)',
          600: 'var(--primary-600)',
          300: 'var(--primary-300)',
          200: 'var(--primary-200)',
          50: 'var(--primary-50)',
        },
        themeGray: {
          800: 'var(--themeGray-800)',
          500: 'var(--themeGray-500)',
          300: 'var(--themeGray-300)',
          200: 'var(--themeGray-200)',
          100: 'var(--themeGray-100)',
          50: 'var(--themeGray-50)',
        },
        success: {
          500: 'var(--success-500)',
        },
        themeWhite: {
          white: 'var(--themeWhite-white)',
        },
        themeBlack: {
          black: 'var(--themeWhite-white)',
        },
        error: {
          700: '#B42318',
        },
      },
      screens: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
