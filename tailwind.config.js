/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "shade-light": {
          DEFAULT: "#ef863d",
          50: "#fdf3ec",
          100: "#fce7d8",
          200: "#f9cfb1",
          300: "#f5b68b",
          400: "#f29e64",
          500: "#ef863d",
          600: "#bf6b31",
          700: "#8f5025",
          800: "#603618",
          900: "#301b0c",
        },
        "accent-light": {
          DEFAULT: "#f49030",
          50: "#fef4ea",
          100: "#fde9d6",
          200: "#fbd3ac",
          300: "#f8bc83",
          400: "#f6a659",
          500: "#f49030",
          600: "#c37326",
          700: "#92561d",
          800: "#623a13",
          900: "#311d0a",
        },
        primary: {
          DEFAULT: "#f3f0ee",
          50: "#fefefd",
          100: "#fdfcfc",
          200: "#faf9f8",
          300: "#f8f6f5",
          400: "#f5f3f1",
          500: "#f3f0ee",
          600: "#c2c0be",
          700: "#92908f",
          800: "#61605f",
          900: "#313030",
        },
        "accent-dark": {
          DEFAULT: "#3c3f4c",
          50: "#ececed",
          100: "#d8d9db",
          200: "#b1b2b7",
          300: "#8a8c94",
          400: "#636570",
          500: "#3c3f4c",
          600: "#30323d",
          700: "#24262e",
          800: "#18191e",
          900: "#0c0d0f",
        },
        "shade-dark": {
          DEFAULT: "#35364a",
          50: "#ebebed",
          100: "#d7d7db",
          200: "#aeafb7",
          300: "#868692",
          400: "#5d5e6e",
          500: "#35364a",
          600: "#2a2b3b",
          700: "#20202c",
          800: "#15161e",
          900: "#0b0b0f",
        },
      },
    },
  },
  plugins: [],
};
