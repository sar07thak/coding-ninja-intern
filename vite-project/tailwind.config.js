/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-text': 'gradient-animation 8s ease-in-out infinite',
      },
      keyframes: {
        'gradient-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },     
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(286deg, #262121 9.3%, #ae8975 331.33%)',
      'nav-gradient' : 'linear-gradient(286deg,  #f97316 10%  , #ec4899 30% , #1d4ed8 40% )',
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-border': {
          color: 'transparent', /* Transparent text */
          '-webkit-text-stroke': '2px #6b7280', /* White border */
        },
        '.text-border-black': {
          color: 'transparent',
          '-webkit-text-stroke': '2px #000000', /* Black border */
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 0px #6b7280', /* Example shadow */
        },
        '.text-shadow-md': {
          'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          'text-shadow': '4px 4px 8px rgba(107 , 114, 128 , 0.2)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      });
    },
  ],
}