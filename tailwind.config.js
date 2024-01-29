/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "D9D9D9": "#D9D9D9",
        "#c5b9b9": "#c5b9b9",
      },
      spacing:{
        '20%' : "20%",
        '30%' : "30%",
        '40%' : '40%',
        '95%' : '95%',
        '70%' : '70%',
        '50rem' : '50rem',
        '30rem' : '30rem',
      },
      fontSize:{
        "0.45rem" : "0.45rem",
      },

      minWidth:{
        "300px" : "300px",
        "55rem" : "55rem",
      },
      minHeight:{
        "300px" : "300px",
      },
      height:{
        "30%" : "30%",
        '30rem':'30rem',
      },
      zIndex:{
        '100' : '100',
      },
      screens:{
        '360px' : '360px',
      },
    },
  },
  plugins: [],
})

