/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx, json}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px'
    },
    extend: {
      colors: {
        'primary': "#EB0033",
        "green": "#4EB070",
        'black': '#000000',
        'white': '#ffffff',
        "lightgray": "#FAFAFA",
        "lightblue": "#13C0F3",
        "gray": "#272B2D",
        "gray100": "#F2F4F5",
        "gray200": "#8F8F8F",
        "gray300": "#FDFDFD",
        "gray400": "#E5E9EC",
        "gray500": "#50B375",
        "text": "#272B2DBF",
        "heading": "#002A47",
        "dark": "#1A1818",
        "transparent": "rgba(0,0,0,0)"

      },
      fontFamily: {
        font: ['museo-sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
