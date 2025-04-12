import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{html,js}',
    './src/pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    colors:{},
    fontFamily:{},
    extend: {},
  },
  plugins: [],
} satisfies Config

