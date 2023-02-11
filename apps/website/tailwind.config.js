/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

module.exports = {
  content: [],
  safelist: [
    'icon-[twemoji--flag-turkey]',
  ],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
}
