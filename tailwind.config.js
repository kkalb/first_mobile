/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'new-black': '#1C2321',
        'new-gray': '#7D98A1',
        'new-graay': '#5E6572',
        'new-blue': '#A9B4C2',
        'new-white': '#EEF1EF',
      },
    },
  },
  plugins: [],
};
