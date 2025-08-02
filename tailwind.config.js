// tailwind.config.js
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swing: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(10deg)" },
          "40%": { transform: "rotate(-8deg)" },
          "60%": { transform: "rotate(6deg)" },
          "80%": { transform: "rotate(-4deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        swing: "swing 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
