/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
    }),

    extend: {
      colors: {
        red: "#ff0000",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
