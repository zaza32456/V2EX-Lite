module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, 
  content: [],
  theme: {
    minWidth: {
      '0': '0',
      '96': '24rem',
      '128': '32rem',
     },
    maxWidth: {
      '128': '32rem',
      '160':'40rem',
     },
    extend: {},
  },
  plugins: [],
}
