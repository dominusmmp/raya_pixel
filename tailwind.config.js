const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
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
      flex: {
        "basis": "1 0 100%"
      },
      fontFamily: {
        "fa": ["Shabnam", "sans-serif"]
      },
      maxWidth: {
        "screen": "100vw"
      },
      colors: {
        "theme": {
          "blue": {
            DEFAULT: "#005fff",
            "1": "#5C4789",
          },
          "pink": {
            "1": "#EDC2D4",
            "2": "#FF96DD",
        },
        },
      },
    },
  },
  variants: {
    extend: {

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
