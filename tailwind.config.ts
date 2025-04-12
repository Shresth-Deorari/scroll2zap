import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{html,js,ts,jsx,tsx}',
    './src/pages/**/*.{html,js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        brand_yellow: '#FFDF6F',
        blue: '#6DF7E3',
        'bg-light': '#F9FAFB',
        'bg-dark': '#1A202C',
        'text-light': '#1F2937',
        'text-dark': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Open Runde'],
        serif: ['Catamaran'],
      },
    },
  },
  plugins: [],
} satisfies Config