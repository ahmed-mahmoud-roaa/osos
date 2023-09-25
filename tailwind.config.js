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
          25: "#f5faff",
          50: "#eff8ff",
          100: "#d1e9ff",
          200: "#b2ddff",
          300: "#84caff",
          400: "#53b1fd",
          500: "#2e90fa",
          600: "#1570ef",
          700: "#175cd3",
          800: "#1849a9",
          900: "#194185",
          950: "#102a56",
        },

        gray: {
          25: "#fcfcfd",
          50: "#f9fafb",
          100: "#f2f4f7",
          200: "#eaecf0",
          300: "#d0d5dd",
          400: "#98a2b3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1d2939",
          900: "#101828",
          950: "#0c111d",
        },

        success:{
            25: "#f6fef9",
            50: "#edfcf2",
            100: "#d3f8df",
            200: "#aaf0c4",
            300: "#73e2a3",
            400: "#3ccb7f",
            500: "#16b364",
            600: "#099250",
            700: "#087443",
            800: "#095c37",
            900: "#084c2e",
            950: "#052e1c",
        },

        warning: {
          25: "#fffcf5",
          50: "#fffaeb",
          100: "#fef0c7",
          200: "#fedf89",
          300: "#fec84b",
          400: "#fdb022",
          500: "#f79009",
          600: "#dc6803",
          700: "#b54708",
          800: "#93370d",
          900: "#7a2e0e",
          950: "#4e1d09",
        },

        danger: {
          25: "#fffbfa",
          50: "#fef3f2",
          100: "#fee4e2",
          200: "#fecdca",
          300: "#fda29b",
          400: "#f97066",
          500: "#f04438",
          600: "#d92d20",
          700: "#b42318",
          800: "#912018",
          900: "#7a271a",
          950: "#55160c",
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.625rem",
        4: "0.75rem",
        4.5: "0.875rem",
        5: "1rem",
        5.5: "1.125rem",
        6: "1.25rem",
        7: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        17: "4.5rem",
        20: "5rem",
        24: "6rem",
        25: "7rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },
      borderWidth:{
        1.5: "1.5px",

      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1.125rem",
            letterSpacing: "-0.015rem",
            fontWeight: "400",
          },
        ],

        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.0175rem",
            fontWeight: "400",
          },
        ],

        base: [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.5rem",
            letterSpacing: "-0.02rem",
          },
        ],

        md: [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.5rem",
            letterSpacing: "-0.02rem",
          },
        ],

        lg: [
          "1.125rem",
          {
            fontWeight: "400",
            lineHeight: "1.75rem",
            letterSpacing: "-0.0225rem",
          },
        ],

        xl: "1.25rem",
        "2xl": [
          "1.5rem",
          {
            lineHeight: "1.875rem",
            letterSpacing: "-0.025rem",
            fontWeight: "400",
          },
        ],

        "3xl": [
          "1.875rem",
          {
            fontWeight: "400",
            lineHeight: "2.375rem",
            letterSpacing: "-0.0375rem",
          },
        ],

        "4xl": [
          "2.25rem",
          {
            fontWeight: "400",
            lineHeight: "2.75rem",
            letterSpacing: "-0.045rem",
          },
        ],

        "5xl": [
          "3rem",
          {
            lineHeight: "3.75rem",
            fontWeight: "400",
            letterSpacing: "-0.06rem",
          },
        ],

        "6xl": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            fontWeight: "400",
            letterSpacing: "-0.075rem",
          },
        ],

        "7xl": [
          "4.5rem",
          {
            lineHeight: "5.625rem",
            fontWeight: "400",
            letterSpacing: "-0.09rem",
          },
        ],
      },
      boxShadow:{
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
      },

      fontWeight: {
        hairline: "100", // Thin
        extraLight: "200",
        light: "300",
        Regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },

      screens: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography')],
}
