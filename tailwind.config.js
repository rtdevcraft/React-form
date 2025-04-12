/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors (default)
        primary: {
          DEFAULT: '#37ac8f',
          hover: '#519d8a',
          light: '#7fd4bb',
          dark: '#2a8269',
        },
        'background-color': {
          DEFAULT: '#fff',
        },
        'text-color': {
          DEFAULT: '#000',
        },
        // Dark mode colors
        'primary-dark': {
          DEFAULT: '#2a8269',
          hover: '#37ac8f',
          light: '#519d8a',
          dark: '#2a8269',
        },
        'background-color-dark': {
          DEFAULT: '#1a1a1a',
        },
        'text-color-dark': {
          DEFAULT: '#fff',
        },
      },
    },
  },
  plugins: [],
}
