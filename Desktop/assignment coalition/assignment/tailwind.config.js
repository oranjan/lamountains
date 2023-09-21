/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'hero-mountains': "url('src/assets/hero.png')",
        'history-bg':"url('src/assets/history-bg.png')",
        'climb-img':"url('src/assets/snow-peak.png')",
      },
    },
    plugins: [],
  }
}
