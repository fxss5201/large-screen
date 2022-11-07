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

### **tailwindcss**

#### 前缀

|前缀|含义|
|----|----|
|`box-`|设置`box-sizing`|
|`float-`|设置浮动|
|`clear-`|清楚浮动|
|`object-`|用于控制可替换元素的内容如何调整大小及在其容器中的位置|
|`overflow-`|如何处理超出容器的内容|
|`z-`|用于设置`z-index`|
|`flex`/`flex-`|flex布局|
|`justify-`|用于设置`justify-content`/`justify-items`/`justify-self`|
|`content-`|用于设置`align-content`|
|`items-`|用于设置`align-items`|
|`self-`|用于设置`align-self`|
|`grid-`|grid布局|
|`p-`|内边距`padding`|
|`m-`|外边距`margin`|
|`w-`|元素宽度`width`|
|`min-w-`|最小宽度`min-width`|
|`max-w-`|最小宽度`max-width`|
|`h-`|元素高度`height`|
|`min-h-`|最小高度`min-height`|
|`max-h-`|最小高度`max-height`|
|`text-`|字体大小、行高、对齐、颜色、透明度|
|`list-`|列表项标记类型`list-style`|
|`placeholder-`|占位文本颜色及透明度|


#### 元素显示类型

|Class|Properties|
|----|----|
|block|display: block;|
|inline-block|display: inline-block;|
|inline|display: inline;|
|flex|display: flex;|
|inline-flex|display: inline-flex;|
|table|display: table;|
|inline-table|display: inline-table;|
|table-caption|display: table-caption;|
|table-cell|display: table-cell;|
|table-column|display: table-column;|
|table-column-group|display: table-column-group;|
|table-footer-group|display: table-footer-group;|
|table-header-group|display: table-header-group;|
|table-row-group|display: table-row-group;|
|table-row|display: table-row;|
|flow-root|display: flow-root;|
|grid|display: grid;|
|inline-grid|display: inline-grid;|
|contents|display: contents;|
|list-item|display: list-item;|
|hidden|display: none;|

#### 文本装饰

|Class|Properties|
|----|----|
|underline|text-decoration: underline;|
|line-through|text-decoration: line-through;|
|no-underline|text-decoration: none;|

#### 文本转换

|Class|Properties|
|----|----|
|uppercase|text-transform: uppercase;|
|lowercase|text-transform: lowercase;|
|capitalize|text-transform: capitalize;|
|normal-case|text-transform: none;|

#### 文本溢出

|Class|Properties|
|----|----|
|truncate|overflow: hidden;text-overflow: ellipsis;white-space: nowrap;|
|overflow-ellipsis|text-overflow: ellipsis;|
|overflow-clip|text-overflow: clip;|

本项目针对 **tailwindcss** 有如下配置:

``` js

```
