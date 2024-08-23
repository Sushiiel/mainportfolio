/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'made-voyager': ['MADE Voyager'],
        mono: ['Monaco', 'Menlo', 'Consolas', 'monospace'],
        'hero-font':'Orbitron'
      },
      colors:{
        
        customBlue: '	#2980B9',
        
      }
    },
  },
  plugins: [],
}

