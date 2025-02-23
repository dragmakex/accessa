module.exports = {
  content: [
    "./**/*.html",
    "./**/*.md",
    "./config.toml",
    "./layouts/**/*.html", // Explicitly include layouts directory
    "./content/**/*.md"    // Include content directory
  ],
  theme: {
    extend: {
      colors: {
        tlgray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          700: "#374151",
          800: "#1F2937"
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
