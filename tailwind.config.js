const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ["*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        },
      },
      fontFamily: {
        "fa": ["Shabnam", "sans-serif"]
      },
      maxWidth: {
        "screen": "100vw"
      },
      minHeight: {
        "nav": "76px",
      },
      colors: {
        "theme": {
          "blue": "#277cea",
        },
        "theme-dark": {
          "body": "#232a3b",
          "container": "#293145",
          "card": "#313a55",
          "text": "#e2e8f0"
        }
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'],
      margin: ['ltr', 'rtl'],
      padding: ['ltr', 'rtl'],
      textAlign: ['ltr', 'rtl'],
      inset: ['ltr', 'rtl'],
      order: ['ltr', 'rtl'],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('rtl', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `html[dir=rtl] .${e(`rtl${separator}${className}`)}`
        })
      })
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('ltr', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `html:not([dir=rtl]) .${e(`ltr${separator}${className}`)}`
        })
      })
    })
  ],
}
