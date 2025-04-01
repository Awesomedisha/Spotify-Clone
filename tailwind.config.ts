import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-black': '#191414',
        'spotify-white': '#FFFFFF',
        'spotify-gray': '#282828',
        'spotify-light-gray': '#B3B3B3',
      },
      spacing: {
        'sidebar-width': '240px',
        'player-height': '90px',
      },
    },
  },
  plugins: [],
}

export default config