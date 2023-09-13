/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx,}", "./src/app/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-gradient-main":
          "linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%)",
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        tablet: "32px",
        desktop: "104px",
      },
    },
  },
  plugins: [],
};
