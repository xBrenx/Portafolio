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
      },
      textColor: {
        skin: {
          claro: 'var(--color-text-base)',
          oscuro: 'var(--color-text-base-dark)',
          acc: 'var(--color-text-sec)',
          accd: 'var(--color-back-acc-dark2)'
        },
      },
      backgroundColor: {
        skin: {
          bgsec: 'var(--color-back-sec)',
          'bgsec-dark': 'var(--color-back-sec-dark)',
          bgacc: 'var(--color-back-acc)',
          'bgacc-dark': 'var(--color-back-acc-dark)',
          fill: 'var(--color-back)',
         'fill-dark': 'var(--color-back-dark)',
         pri: 'var(--color-back-pri)',
        }
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
