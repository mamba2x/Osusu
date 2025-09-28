/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        gradely: {
          neutral: '#3d4451',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#e5e7eb',
        },
      },
    ],
  },
}
