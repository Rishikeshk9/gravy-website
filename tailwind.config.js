module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
     
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        light: "#85d7ff",
        DEFAULT: "#fff",
        dark: "#009eeb",
      },
      gravy_accent: {
        light: "#ff7ce5",
        DEFAULT: "#BA992F",
        dark: "#ff16d1",
      },
      gravy: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#1a1a1a",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
      black: {
        darkest: "#000",
        dark: "#3c4858",
        DEFAULT: "#000",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "footer-image": "url('./assets/1x/footer.jpg')",
        "header": "url('./assets/1x/header.jpeg')",
        "csr-background": "url('./assets/1x/footer.jpg')",

      }),
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      extend: {
        fontSize: {
          "7xl": "7rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [      require('@tailwindcss/forms'),
],
};
