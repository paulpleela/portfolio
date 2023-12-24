/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      figtree: ["Figtree", "sans-serif"],
      lexend: ["Lexend", "sans-serif"],
      code: ["Source Code Pro", "monospace"]
    }
  },
  plugins: [],
}
