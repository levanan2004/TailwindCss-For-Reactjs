/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", // Bao gồm tất cả các tệp React
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        merriweather: "Merriweather",
      }
    },
  },
  plugins: [],
};
