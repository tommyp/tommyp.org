const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  purge: [
    './components/**/*.js',
    './pages/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          ...defaultTheme.colors.green,
          terminal: "#0f0",
        }
      },
      fontFamily: {
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
        "open-sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
        "archivo-black": ["Archivo Black", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "8rem",
        "9xl": "9rem",
        "10xl": "10rem",
        "11xl": "14rem",
        "12xl": "18rem",
        "13xl": "22rem",
        "14xl": "26rem",
        "15xl": "30rem",
      },
      borderWidth: {
        '20': '20px',
        '200': '200px',
        '400': '400px',
        '600': '600px',
      }
    }
  },
  plugins: [
    require('tailwindcss-border-gradients')(),
  ]
};
