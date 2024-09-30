/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.4s ease-in-out infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '25%': {
            transform: 'translateY(-5px)'
          },
          '75%': {
            transform: 'translateY(5px)'
          },
        },
      },
    },
  },
  plugins: [],
}