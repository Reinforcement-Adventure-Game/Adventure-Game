/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dm-serif': ['"DM Serif Text"', 'serif'],
        jersey: ['"Jersey 15"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
