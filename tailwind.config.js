module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // The path to your React components/files
  ],
  theme: {
    colors: {
      light: "#e7e5e4", // light
      medium: "#44403c", // medium
      lessdark: "#0c0a09",
      dark: "#000000", // dark
      crazy: "#f83838ff",
    },
    fontFamily: {
      sans: ["Comic Sans MS", "Comic Sans", "sans-serif"],
      display: ["Press Start 2P", "system-ui"],
    },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 12s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
