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
      content: {
        'hero': 'url("/assets/images/hero-desktop.png")',
        'hero-sm': 'url("/assets/images/hero-mobile.png")',
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
