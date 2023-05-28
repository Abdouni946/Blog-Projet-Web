const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'regal-blue': {
          DEFAULT: '#243c5a',
        },
      },
    },
  },
});
