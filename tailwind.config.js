/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': "#afde15",
        'light-purple': "#926efc"
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height'
      }
    },
  },
  plugins: [],
}