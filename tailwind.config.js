/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'epilogue': ['"Epilogue"', 'sans-serif'],
      },
    },
    fontFamily: {
      sans: [
        "Epilogue, sans-serif",
        { fontFeatureSettings: '"Epilogue"' },
      ],
    },
  },
  plugins: [],
}
