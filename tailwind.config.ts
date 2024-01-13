import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        '1': '1px'
      },
      width: {
        '1/35': '2.8571429%',
        'guitar-string': '42.8571428%'
      },
      spacing: {
        '1/35': '2.8571429%',
        '2/35': '5.7141857%',
        '5/35': '14.285714%',
        '8/35': '22.857142%',
        '11/35': '31.428571%',
        '13/35': '37.1428571%',
        '16/35': '45.7142857%',
        '30': '128px',
        '38': '160px',
      }

    },
  },
  plugins: [],
}
export default config
