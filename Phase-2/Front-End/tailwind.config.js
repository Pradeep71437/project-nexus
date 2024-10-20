/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rale: ['Raleway', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
        '4': '4px',
      },
      textStrokeColor: {
        white: '#ffffff',
        black: '#000000',
        gray: '#a1a1aa',
      },
    }

  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
      };

      addUtilities(newUtilities);
    },
  ],
}

