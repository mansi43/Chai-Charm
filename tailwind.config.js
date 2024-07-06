/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        '3xl': '10px 10px 80px -10px  #b16881',
        'custom-gradient': 'linear-gradient(to right, #f2d6a6,#f1e3c1)',
      },
        boxShadow: {
          'custom': '0 0 10px rgb(236 72 153 / var(--tw-border-opacity)), 0 0 10px rgb(236 72 153 / var(--tw-border-opacity))',
          'custom-hover': '0 0 5px rgb(236 72 153 / var(--tw-border-opacity)), 0 0 10px rgb(236 72 153 / var(--tw-border-opacity)), 0 0 20px rgb(236 72 153 / var(--tw-border-opacity)), 0 0 20px rgb(236 72 153 / var(--tw-border-opacity)), 0 0 20px rgb(236 72 153 / var(--tw-border-opacity))',
          
        },
        
    },
  },
  plugins: [
    require('tailwind-scrollbar'),{nocompatible: true}
  ],
};
