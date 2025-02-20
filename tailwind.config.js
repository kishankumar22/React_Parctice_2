/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
];

export const theme = {
  extend: {
    colors: {
      'regal-blue': '#3f51b5',
      'yellow': '#ecd8a2',
      'kesariya': '#b75906',
      'links_colors': '#ececec',
    },
    height: {
      'heightsec': '477px',
    },
    animation: {
      marquee: "marquee 25s linear infinite",
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'], 
      helvetica: ['Oswald', 'arial', 'Georgia', 'serif']
    },
    
    keyframes: {
      marquee: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(-100%)' },
      },
    },
  },
};

export const plugins = [];
