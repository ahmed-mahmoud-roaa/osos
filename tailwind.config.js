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
          700: 'var(--primary-700)',
          600: 'var(--primary-600)',
          500: 'var(--primary-500)',
          300: 'var(--primary-300)',
          200: 'var(--primary-200)',
          50: 'var(--primary-50)',
        },
        themeGray: {
          900: 'var(--themeGray-900)',
          800: 'var(--themeGray-800)',
          700: 'var(--themeGray-700)',
          500: 'var(--themeGray-500)',
          400: 'var(--themeGray-400)',
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
          700: 'var(--error-700)',
          200: 'var(--error-200)',
          100: 'var(--error-100)',
          50: 'var(--error-50)',
        },
        themeGreen: {
          800: 'var(--themeGreen-800)',
          700: 'var(--themeGreen-700)',
          600: 'var(--themeGreen-600)',
          500: 'var(--themeGreen-500)',
          400: 'var(--themeGreen-400)',
          200: 'var(--themeGreen-200)',
          50: 'var(--themeGreen-50)',
        },
        themeOrange: {
          500: 'var(--themeOrange-500)',
        },
      },
      screens: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
