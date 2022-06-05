const brandColors = {
  birdBlue: "#1D9BF0",
  platinum: "#E7E9EA",
  silver: "#71767B",
  onix: "#333639",
  richBlack: "#15202B",
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...brandColors,
        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platinum,
      }
    },
  },
  plugins: [],
}