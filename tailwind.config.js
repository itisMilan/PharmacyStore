/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require("tw-elements/dist/plugin.cjs")],
  daisyui:{
    themes:["light"]
  }
}

