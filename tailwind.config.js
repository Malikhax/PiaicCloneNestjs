/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary':'#044e4e',
        'secondary':'#00bf9a',
        'hcolor':'#666',
        'extra':'#e1ebee',
        'red':'#dc3545',
        'yellow':'#ffc107',
        'green':'#28a745'
      }
    },
  },
  plugins: [],
}
