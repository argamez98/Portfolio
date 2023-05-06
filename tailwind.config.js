module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      lg: '4.5rem',
      xxl: '10rem',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
