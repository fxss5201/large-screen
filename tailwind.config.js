/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // 生产优化，删除未使用的CSS
  content: [],
  theme: {
    extend: {
      fontSize: {
        // 增加字体配置
        // text-12 = font-size: 12px;
        // text-sm = font-size: 24px;line-height: 21px;
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
        // 增加行高配置
        // leading-12 = line-height: 12px;
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
      borderRadius: {
        // 增加圆角配置
        // rounded-2 = border-radius: 2px;
        0: "0px",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
      },
    },
  },
  plugins: [],
};
