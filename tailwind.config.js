module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        "black-outline":
          "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
      },
      backgroundImage: theme => ({
        'gradient-overlay': 'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0))',
       }),
       filter: {
        'high-contrast': 'contrast(1.2)',
       },
      },
    },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      Object.entries(theme("textShadow")).forEach(([name, value]) => {
        const className = `.text-shadow-${name}`;
        // This is the class you should use in your HTML
        newUtilities[className] = { textShadow: value };
      });
      addUtilities(newUtilities, ["responsive", "hover"]);
      // Adding variants is optional but helpful for responsive/hover styles
    },
  ],
};
