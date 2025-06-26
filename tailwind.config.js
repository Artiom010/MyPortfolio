/** @type {import('tailwindcss').Config} */
export default {
  content: [
 "./index.html",
"./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-out': {
          '0%':   { opacity: 0, transform: 'translateY(10px)' },
          '20%':  { opacity: 1, transform: 'translateY(0)' },
          '80%':  { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'fade-in-out': 'fade-in-out 1.5s',
      },
    },
  },
  plugins: [],
}


