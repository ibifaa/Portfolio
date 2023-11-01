/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      logoColor:"#7dd3fc",
      primaryColor:"#8873eef",
      headingColor:"#081e21",
      smallTextColor: "#193256"
    },

    fontFamily:{
      'body':['Poppins']
    }
  },
  plugins: [],
}

