module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
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
        light: "#1f1f1f",
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
      zIndex: {
        "-10": "-10",
      },
      width: {
        "9/10": "90%",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      backgroundImage: (theme) => ({
        "footer-image": "url('./assets/1x/footer-alt.jpg')",
        header: "url('./assets/1x/header.jpeg')",
        menu: "url('./assets/1x/banner2.JPG')",
        events: "url('./assets/1x/events.jpg')",
        about: "url('./assets/1x/booking.JPG')",
        main: "url('./assets/1x/banner.JPG')",

        "csr-background": "url('./assets/1x/footer-alt.jpg')",
      }),

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
  plugins: [require("@tailwindcss/forms")],
};
