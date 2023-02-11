/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

module.exports = {
  content: [],
  safelist: [
    'icon-[twemoji--flag-turkey]',
    'icon-[twemoji--flag-united-states]',
  ],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
}
