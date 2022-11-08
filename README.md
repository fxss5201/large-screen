# large-screen

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 样式

在样式方面，本项目支持使用 **[less](http://lesscss.cn/)**，并引入 **[tailwindcss](https://www.tailwindcss.cn/docs)** ，日常开发中可以安装 vscode 扩展 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 。

![Tailwind CSS IntelliSense](https://www.tailwindcss.cn/_next/static/media/intellisense.0bd2cbf8c277e6c1330e345ab3cd7684.png)

本项目针对 **tailwindcss** 有如下扩展，不与默认主题有冲突，增加实用性:

``` js
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
```
