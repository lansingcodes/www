/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  safelist: [
    'w-1/7',
  ],
  theme: {
    extend: {
      colors: {
        attention: '#ff7f50',
        black: '#22292f',
        grey: {
          darkest: '#3d4852',
          darker: '#606f7b',
          dark: '#8795a1',
          DEFAULT: '#b8c2cc',
          light: '#dae1e7',
          lighter: '#f1f5f8',
          lightest: '#f8fafc',
        },
        blue: {
          darkest: '#12283a',
          darker: '#1c3d5a',
          dark: '#2779bd',
          DEFAULT: '#3e79bb',
          light: '#407cbf',
          lighter: '#bcdefa',
          lightest: '#eff8ff',
        },
      },
      width: {
        '1/7': '14.28571%', // For calendar (7-day) view of events
      },
      minHeight: {
        '16': '4rem',
      },
    },
  },
  plugins: [],
}
