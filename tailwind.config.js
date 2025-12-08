/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        templar: {
          black: '#0a0a0a',
          red: '#8B0000',
          'red-light': '#B30000',
          burgundy: '#6B0000',
        },
      },
      fontFamily: {
        heading: ['Cormorant Infant', 'serif'],
        body: ['Lora', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
