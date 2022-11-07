/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        30: "30px",
        sm: ["14px", "21px"],
        md: ["16px", "24px"],
        lg: ["20px", "30px"],
        xl: ["24px", "36px"],
      },
      lineHeight: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        21: "21px",
        24: "24px",
        27: "27px",
        30: "30px",
        36: "36px",
        45: "45px",
      },
    },
  },
  plugins: [],
};
