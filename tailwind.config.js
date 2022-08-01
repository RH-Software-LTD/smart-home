/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: ['18px', '22px'],
      base: ['16px', '24px'],
      lg: ['20px', '32px'],
      xl: ['24px', '32px'],
      xxl: ['32px', '39px'],
      header:['85px','85px'],
      aboutHeader:['46px','46px'],
    },
    extend: {
      colors: {
        'regal-blue' : '#1E5AFA'
      }
    },
  },
  plugins: [],
}