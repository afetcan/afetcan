/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

module.exports = {
  content: [
  ],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
}
