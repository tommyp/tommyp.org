const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  theme: {
    extend: {
      borderColor: {
        green: {
          terminal: "#0f0",
        }
      },
      fontFamily: {
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "8rem",
        "9xl": "9rem",
        "10xl": "10rem",
      },
      textColor: {
        green: {
          terminal: "#0f0",
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-border-gradients')(),
  ]
};
